"use client";

import { FieldError } from "./field-error";
import { useParticipationForm } from "./hooks/use-participation-form";
import { ParticipationConfirmation } from "./participation-confirmation";

const controlClassName =
  "mt-2 min-h-12 w-full border bg-[#101010]/85 px-4 py-3 font-sans text-base text-foreground placeholder:text-secondary caret-accent transition-colors duration-150 hover:border-foreground/60 focus:border-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

export function ParticipationForm() {
  const {
    register,
    errors,
    isSubmitting,
    onSubmit,
    submission,
    serverError,
    handleNewMessage,
  } = useParticipationForm();

  if (submission) {
    return (
      <ParticipationConfirmation
        submission={submission}
        onNewMessage={handleNewMessage}
      />
    );
  }

  return (
    <form
      className="@container grid grid-cols-1 gap-x-5 gap-y-2 min-[640px]:grid-cols-2 min-[640px]:gap-x-6"
      noValidate
      onSubmit={onSubmit}
      aria-busy={isSubmitting}>
      {serverError ? (
        <p className="font-sans text-sm leading-relaxed text-accent min-[640px]:col-span-2" role="alert">
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
          className={`${controlClassName} ${errors.name ? "border-[#FF2442]" : "border-foreground/40"}`}
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
          className={`${controlClassName} ${errors.email ? "border-[#FF2442]" : "border-foreground/40"}`}
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
          className={`${controlClassName} ${errors.phone ? "border-[#FF2442]" : "border-foreground/40"}`}
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
          className={`${controlClassName} ${errors.company ? "border-[#FF2442]" : "border-foreground/40"}`}
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

      <div className="min-[640px]:col-span-2">
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
          className={`${controlClassName} min-h-[9rem] resize-y ${errors.message ? "border-[#FF2442]" : "border-foreground/40"}`}
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

      <div className="mt-3 flex flex-col gap-4 border-t border-foreground/25 pt-5 min-[640px]:col-span-2 @min-[580px]:flex-row @min-[580px]:items-start @min-[580px]:justify-between">
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
          className="group inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 bg-accent px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-background transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2 disabled:cursor-wait disabled:opacity-60 @min-[580px]:w-auto"
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
