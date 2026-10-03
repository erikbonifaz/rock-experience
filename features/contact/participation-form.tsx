"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  participationDefaultValues,
  participationSchema,
  type ParticipationFormValues,
} from "./schema";

const controlClassName =
  "mt-2 min-h-12 w-full border bg-[#101010] px-4 py-3 font-sans text-base text-[#F2F0E9] placeholder:text-[#AAA69F] transition-colors duration-150 hover:border-[#F2F0E9]/40 focus:border-[#FF2442] focus-visible:outline-2 focus-visible:outline-[#FF2442] focus-visible:outline-offset-2";

type SubmissionConfirmation = {
  success: true;
  id: number;
  registrationCode: string;
};

function isSubmissionConfirmation(
  value: unknown,
): value is SubmissionConfirmation {
  if (typeof value !== "object" || value === null) return false;

  const result = value as Record<string, unknown>;
  return (
    result.success === true &&
    typeof result.id === "number" &&
    Number.isSafeInteger(result.id) &&
    typeof result.registrationCode === "string"
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <p id={id} className="mt-1 min-h-5 text-sm leading-5 text-[#FF2442]">
      {message}
    </p>
  );
}

export function ParticipationForm() {
  const [submission, setSubmission] = useState<SubmissionConfirmation | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ParticipationFormValues>({
    resolver: zodResolver(participationSchema),
    mode: "onBlur",
    defaultValues: participationDefaultValues,
  });

  useEffect(() => {
    if (submission) {
      confirmationRef.current?.focus();
    }
  }, [submission]);

  async function handleValidSubmit(data: ParticipationFormValues) {
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setServerError("No pudimos enviar tu solicitud. Inténtalo nuevamente.");
        return;
      }

      const result: unknown = await response.json();
      if (!isSubmissionConfirmation(result)) {
        setServerError("No pudimos enviar tu solicitud. Inténtalo nuevamente.");
        return;
      }

      setSubmission(result);
    } catch {
      setServerError("No pudimos enviar tu solicitud. Inténtalo nuevamente.");
    }
  }

  function handleNewMessage() {
    reset(participationDefaultValues);
    setServerError(null);
    setSubmission(null);
  }

  if (submission) {
    return (
      <div
        ref={confirmationRef}
        className="flex min-h-[28rem] flex-col items-start justify-center border border-[#F2F0E9]/20 p-6 focus:outline-2 focus:outline-[#FF2442] focus:outline-offset-4 md:min-h-[32rem] md:p-10"
        role="status"
        aria-live="polite"
        tabIndex={-1}>
        <h3 className="font-display text-5xl leading-none text-[#F2F0E9] md:text-6xl">
          GRACIAS.
        </h3>
        <p className="mt-6 max-w-[38ch] text-base leading-relaxed text-[#AAA69F] md:text-lg">
          Recibimos tus datos correctamente.
        </p>
        <p className="mt-8 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#AAA69F]">
          Registro <span className="ml-2 font-display text-2xl tracking-normal text-[#FF2442]">#{submission.registrationCode}</span>
        </p>
        <div className="mt-8 flex flex-col items-start gap-4">
          <Link
            className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#FF2442] px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-[#101010] transition-colors hover:bg-[#F2F0E9] focus-visible:outline-2 focus-visible:outline-[#FF2442] focus-visible:outline-offset-2"
            href={`/demo/submissions/${submission.id}`}>
            Ver registro de demostración
            <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="min-h-11 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-[#AAA69F] underline decoration-[#F2F0E9]/25 underline-offset-4 transition-colors hover:text-[#F2F0E9] focus-visible:outline-2 focus-visible:outline-[#FF2442] focus-visible:outline-offset-2"
            type="button"
            onClick={handleNewMessage}>
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className="grid grid-cols-1 gap-x-6 gap-y-1 border border-[#F2F0E9]/20 p-5 md:grid-cols-2 md:gap-x-6 md:gap-y-2 md:p-8 lg:p-10"
      noValidate
      onSubmit={handleSubmit(handleValidSubmit)}
      aria-busy={isSubmitting}>
      {serverError ? (
        <p className="md:col-span-2 font-sans text-sm leading-relaxed text-[#FF2442]" role="alert">
          {serverError}
        </p>
      ) : null}
      <div>
        <label
          className="font-sans text-base text-[#F2F0E9]"
          htmlFor="participation-name">
          Nombre{" "}
          <span className="text-[#FF2442]" aria-hidden="true">
            *
          </span>
        </label>
        <input
          {...register("name")}
          className={`${controlClassName} ${errors.name ? "border-[#FF2442]" : "border-[#F2F0E9]/25"}`}
          id="participation-name"
          type="text"
          placeholder="Tu nombre"
          autoComplete="name"
          required
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby="participation-name-error"
        />
        <FieldError
          id="participation-name-error"
          message={errors.name?.message}
        />
      </div>

      <div>
        <label
          className="font-sans text-base text-[#F2F0E9]"
          htmlFor="participation-email">
          Correo electrónico{" "}
          <span className="text-[#FF2442]" aria-hidden="true">
            *
          </span>
        </label>
        <input
          {...register("email")}
          className={`${controlClassName} ${errors.email ? "border-[#FF2442]" : "border-[#F2F0E9]/25"}`}
          id="participation-email"
          type="email"
          placeholder="nombre@ejemplo.com"
          autoComplete="email"
          required
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby="participation-email-error"
        />
        <FieldError
          id="participation-email-error"
          message={errors.email?.message}
        />
      </div>

      <div>
        <label
          className="font-sans text-base text-[#F2F0E9]"
          htmlFor="participation-phone">
          Teléfono{" "}
          <span className="text-[#FF2442]" aria-hidden="true">
            *
          </span>
        </label>
        <input
          {...register("phone")}
          className={`${controlClassName} ${errors.phone ? "border-[#FF2442]" : "border-[#F2F0E9]/25"}`}
          id="participation-phone"
          type="tel"
          placeholder="+52 55 1234 5678"
          autoComplete="tel"
          inputMode="tel"
          required
          aria-invalid={errors.phone ? "true" : undefined}
          aria-describedby="participation-phone-error"
        />
        <FieldError
          id="participation-phone-error"
          message={errors.phone?.message}
        />
      </div>

      <div>
        <label
          className="font-sans text-base text-[#F2F0E9]"
          htmlFor="participation-company">
          Empresa
        </label>
        <input
          {...register("company")}
          className={`${controlClassName} ${errors.company ? "border-[#FF2442]" : "border-[#F2F0E9]/25"}`}
          id="participation-company"
          type="text"
          placeholder="Opcional"
          autoComplete="organization"
          aria-invalid={errors.company ? "true" : undefined}
          aria-describedby="participation-company-error"
        />
        <FieldError
          id="participation-company-error"
          message={errors.company?.message}
        />
      </div>

      <div className="md:col-span-2">
        <label
          className="font-sans text-base text-[#F2F0E9]"
          htmlFor="participation-message">
          Mensaje{" "}
          <span className="text-[#FF2442]" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          {...register("message")}
          className={`${controlClassName} min-h-[9rem] resize-y ${errors.message ? "border-[#FF2442]" : "border-[#F2F0E9]/25"}`}
          id="participation-message"
          rows={4}
          placeholder="Cuéntanos qué experiencia te interesa."
          required
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby="participation-message-error"
        />
        <FieldError
          id="participation-message-error"
          message={errors.message?.message}
        />
      </div>

      <div className="mt-3 flex flex-col gap-4 border-t border-[#F2F0E9]/15 pt-5 md:col-span-2 md:flex-row md:items-start md:justify-between">
        <div className="max-w-[34rem]">
          <label
            className="flex min-h-11 cursor-pointer items-center gap-3 font-sans text-sm leading-relaxed text-[#F2F0E9] md:text-base"
            htmlFor="participation-privacy">
            <input
              {...register("privacy")}
              className="size-5 shrink-0 accent-[#FF2442] focus-visible:outline-2 focus-visible:outline-[#FF2442] focus-visible:outline-offset-2"
              id="participation-privacy"
              type="checkbox"
              required
              aria-invalid={errors.privacy ? "true" : undefined}
              aria-describedby="participation-privacy-error"
            />
            <span>
              Acepto el aviso de privacidad{" "}
              <span className="text-[#FF2442]" aria-hidden="true">
                *
              </span>
            </span>
          </label>
          <FieldError
            id="participation-privacy-error"
            message={errors.privacy?.message}
          />
        </div>

        <button
          className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 bg-[#FF2442] px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-[#101010] transition-colors hover:bg-[#F2F0E9] focus-visible:outline-2 focus-visible:outline-[#F2F0E9] focus-visible:outline-offset-2 disabled:cursor-wait disabled:opacity-60 md:w-auto"
          type="submit"
          disabled={isSubmitting}>
          <span>{isSubmitting ? "Enviando..." : "Enviar solicitud"}</span>
          {isSubmitting ? (
            <svg
              className="size-4 animate-spin motion-reduce:animate-none"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true">
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.25"
              />
              <path
                d="M21 12a9 9 0 0 0-9-9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          ) : (
            <span
              className="inline-block transition-transform duration-150 group-hover:translate-x-[5px] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              aria-hidden="true">
              →
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
