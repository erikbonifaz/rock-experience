"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { ParticipationConfirmationProps } from "./types";
import styles from "./participation.module.css";

export function ParticipationConfirmation({
  submission,
  onNewMessage,
}: ParticipationConfirmationProps) {
  const confirmationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Llevar el foco a la confirmación anuncia el resultado a quien usa teclado.
    confirmationRef.current?.focus();
  }, []);

  return (
    <div
      ref={confirmationRef}
      className="flex min-h-[28rem] flex-col items-start justify-center py-6 focus:outline-2 focus:outline-accent focus:outline-offset-4"
      role="status"
      aria-live="polite"
      tabIndex={-1}
    >
      <h3 className={`${styles.confirmationTitle} font-display text-5xl leading-none text-foreground min-[640px]:text-6xl`}>
        GRACIAS.
      </h3>
      <p className="mt-6 max-w-[38ch] text-base leading-relaxed text-secondary min-[640px]:text-lg">
        Recibimos tus datos correctamente.
      </p>
      <p className={`${styles.confirmationRegistration} mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-secondary`}>
        Registro
        <span className="ml-2 font-display text-2xl tracking-normal text-accent">
          #{submission.registrationCode}
        </span>
      </p>
      <div className="mt-8 flex flex-col items-start gap-4">
        <Link
          className="inline-flex min-h-12 items-center justify-center gap-3 bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-background transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          href={`/demo/submissions/${submission.id}`}
        >
          Ver registro de demostración
          <span aria-hidden="true">↗</span>
        </Link>
        <button
          className="min-h-11 text-sm font-semibold uppercase tracking-[0.08em] text-secondary underline decoration-foreground/25 underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          type="button"
          onClick={onNewMessage}
        >
          Enviar otro mensaje
        </button>
      </div>
    </div>
  );
}
