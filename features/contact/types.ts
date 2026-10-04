import type { z } from "zod";
import type { participationSchema, submissionConfirmationSchema } from "./schema";

export type ParticipationFormValues = z.infer<typeof participationSchema>;

export type SubmissionConfirmation = z.infer<typeof submissionConfirmationSchema>;

export interface FieldErrorProps {
  id: string;
  message?: string;
}

export interface ParticipationConfirmationProps {
  submission: SubmissionConfirmation;
  onNewMessage: () => void;
}
