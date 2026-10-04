"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  participationDefaultValues,
  participationSchema,
  type ParticipationFormValues,
} from "../schema";
import type { SubmissionConfirmation } from "../types";
import { isSubmissionConfirmation } from "../utils/is-submission-confirmation";

const submissionErrorMessage =
  "No pudimos enviar tu solicitud. Inténtalo nuevamente.";

export function useParticipationForm() {
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
    if (submission) confirmationRef.current?.focus();
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
        setServerError(submissionErrorMessage);
        return;
      }

      const result: unknown = await response.json();
      if (!isSubmissionConfirmation(result)) {
        setServerError(submissionErrorMessage);
        return;
      }

      setSubmission(result);
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
    confirmationRef,
    handleNewMessage,
  };
}
