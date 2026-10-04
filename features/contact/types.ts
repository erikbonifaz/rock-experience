import type { SubmissionConfirmation } from "./schema";

export interface FieldErrorProps {
  id: string;
  message?: string;
}

export interface ParticipationConfirmationProps {
  submission: SubmissionConfirmation;
  onNewMessage: () => void;
}
