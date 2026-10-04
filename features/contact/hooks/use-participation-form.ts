"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  participationDefaultValues,
  participationSchema,
  submissionConfirmationSchema,
} from "../schema";
import type { ParticipationFormValues, SubmissionConfirmation } from "../schema";

const submissionErrorMessage =
  "No pudimos enviar tu solicitud. Inténtalo nuevamente.";

export function useParticipationForm() {
  const [submission, setSubmission] = useState<SubmissionConfirmation | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
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
