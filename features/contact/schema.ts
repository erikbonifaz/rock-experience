import { z } from "zod";

export const participationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Ingresa tu nombre.")
    .min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z
    .string()
    .trim()
    .min(1, "Ingresa tu correo electrónico.")
    .email("Ingresa un correo electrónico válido."),
  phone: z
    .string()
    .trim()
    .min(1, "Ingresa tu teléfono.")
    .regex(
      /^[\d+()\s-]+$/,
      "Usa solo números, espacios, +, guiones y paréntesis.",
    )
    .refine((value) => {
      const digits = value.replace(/\D/g, "").length;
      return digits >= 8 && digits <= 15;
    }, "El teléfono debe contener entre 8 y 15 dígitos."),
  company: z.string().trim(),
  message: z
    .string()
    .trim()
    .min(5, "Cuéntanos un poco más sobre tu interés."),
  privacy: z.boolean().refine((accepted) => accepted, {
    message: "Debes aceptar el aviso de privacidad.",
  }),
});

export type ParticipationFormValues = z.infer<typeof participationSchema>;

export const submissionConfirmationSchema = z.object({
  success: z.literal(true),
  id: z.number().int().positive(),
  registrationCode: z.string().regex(/\S/),
});

export type SubmissionConfirmation = z.infer<typeof submissionConfirmationSchema>;

export const participationDefaultValues: ParticipationFormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  privacy: false,
};
