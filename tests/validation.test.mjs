import assert from "node:assert/strict";
import test from "node:test";
import experiences from "../data/experiences.json" with { type: "json" };
import { experiencesSchema } from "../features/experiences/schema.ts";
import {
  participationSchema,
  submissionConfirmationSchema,
} from "../features/contact/schema.ts";

test("el catálogo original y una lista vacía son respuestas válidas", () => {
  assert.deepEqual(experiencesSchema.parse(experiences), experiences);
  assert.deepEqual(experiencesSchema.parse([]), []);
});

test("el catálogo rechaza respuestas que no son listas", () => {
  for (const response of [null, {}, "experiencias"]) {
    assert.equal(experiencesSchema.safeParse(response).success, false);
  }
});

test("el catálogo rechaza IDs duplicados para evitar keys ambiguas en React", () => {
  const response = [experiences[0], experiences[0]];
  assert.equal(experiencesSchema.safeParse(response).success, false);
});

test("el catálogo rechaza IDs inválidos sin convertir strings a números", () => {
  for (const id of [0, -1, 1.5, "1", Number.MAX_SAFE_INTEGER + 1]) {
    const response = [{ ...experiences[0], id }];
    assert.equal(experiencesSchema.safeParse(response).success, false);
  }
});

test("el catálogo rechaza campos ausentes, de otro tipo o solo con espacios", () => {
  for (const field of ["title", "category", "description", "image"]) {
    for (const value of [undefined, null, 42, "", " \n "]) {
      const response = [{ ...experiences[0], [field]: value }];
      assert.equal(experiencesSchema.safeParse(response).success, false);
    }
  }
});

test("validar el catálogo no cambia sus textos ni el orden de las tarjetas", () => {
  const response = [...experiences].reverse();
  response[0] = { ...response[0], title: " Live Experience " };
  assert.deepEqual(experiencesSchema.parse(response), response);
});

const validSubmission = {
  name: "Erik Bonifaz",
  email: "prueba@example.com",
  phone: "+52 (55) 1234-5678",
  company: "",
  message: "Me interesa la experiencia musical.",
  privacy: true,
};

test("el formulario acepta teléfonos formateados y empresa vacía", () => {
  assert.deepEqual(participationSchema.parse(validSubmission), validSubmission);
});

test("el formulario normaliza los espacios antes de persistir", () => {
  const parsed = participationSchema.parse({
    ...validSubmission,
    name: " Erik Bonifaz ",
    company: " Rock ",
  });
  assert.equal(parsed.name, "Erik Bonifaz");
  assert.equal(parsed.company, "Rock");
});

test("el formulario rechaza datos inválidos y aceptación ausente", () => {
  const invalidFields = [
    { name: " " },
    { name: "E" },
    { email: "correo-invalido" },
    { phone: "abcdefgh" },
    { phone: "1234567" },
    { phone: "1234567890123456" },
    { message: " " },
    { privacy: false },
  ];
  for (const fields of invalidFields) {
    const response = { ...validSubmission, ...fields };
    assert.equal(participationSchema.safeParse(response).success, false);
  }
});

const validConfirmation = {
  success: true,
  id: 42,
  registrationCode: "RX-0042",
};

test("la confirmación acepta el contrato del endpoint de contacto", () => {
  assert.deepEqual(
    submissionConfirmationSchema.parse(validConfirmation),
    validConfirmation,
  );
});

test("una respuesta HTTP exitosa no basta si la confirmación es inválida", () => {
  const invalidResponses = [
    null,
    {},
    { ...validConfirmation, success: false },
    { ...validConfirmation, id: "42" },
    { ...validConfirmation, id: 0 },
    { ...validConfirmation, id: -1 },
    { ...validConfirmation, id: 1.5 },
    { ...validConfirmation, id: Number.MAX_SAFE_INTEGER + 1 },
    { ...validConfirmation, registrationCode: "" },
    { ...validConfirmation, registrationCode: " " },
  ];
  for (const response of invalidResponses) {
    assert.equal(submissionConfirmationSchema.safeParse(response).success, false);
  }
});
