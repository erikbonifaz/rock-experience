"use client";

import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { participationDefaultValues } from "../defaults";
import type { ParticipationFormValues, SubmissionConfirmation } from "../schema";

const submissionErrorMessage =
  "No pudimos enviar tu solicitud. Inténtalo nuevamente.";

// Cargar Zod al validar evita descargarlo para quien sólo explora el hero.
const participationResolver: Resolver<ParticipationFormValues> = async (
  values,
  context,
  options,
) => {
  const [{ zodResolver }, { participationSchema }] = await Promise.all([
    import("@hookform/resolvers/zod"),
    import("../schema"),
  ]);

  return zodResolver(participationSchema)(values, context, options);
};

export function useParticipationForm() {
  const [submission, setSubmission] = useState<SubmissionConfirmation | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ParticipationFormValues>({
    resolver: participationResolver,
    mode: "onBlur",
    defaultValues: participationDefaultValues,
  });

  async function handleValidSubmit(data: ParticipationFormValues) {
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setServerError(submissionErrorMessage);
        return;
      }

      const result: unknown = await response.json();
      const { submissionConfirmationSchema } = await import("../schema");
      const confirmation = submissionConfirmationSchema.parse(result);
      setSubmission(confirmation);
    } catch {
      setServerError(submissionErrorMessage);
    }
  }

  function handleNewMessage() {
    reset(participationDefaultValues);
    setServerError(null);
    setSubmission(null);
  }

  return {
    register,
    errors,
    isSubmitting,
    onSubmit: handleSubmit(handleValidSubmit),
    submission,
    serverError,
    handleNewMessage,
  };
}
