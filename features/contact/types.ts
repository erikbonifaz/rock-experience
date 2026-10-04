import type { RefObject } from "react";

export interface SubmissionConfirmation {
  success: true;
  id: number;
  registrationCode: string;
}

export interface FieldErrorProps {
  id: string;
  message?: string;
}

export interface ParticipationConfirmationProps {
  submission: SubmissionConfirmation;
  confirmationRef: RefObject<HTMLDivElement | null>;
  onNewMessage: () => void;
}
