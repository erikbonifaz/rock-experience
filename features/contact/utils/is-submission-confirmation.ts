import type { SubmissionConfirmation } from "../types";

export function isSubmissionConfirmation(
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
