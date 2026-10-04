import type { FieldErrorProps } from "./types";

export function FieldError({ id, message }: FieldErrorProps) {
  return (
    <p id={id} className="mt-1 min-h-5 text-sm leading-5 text-accent">
      {message}
    </p>
  );
}
