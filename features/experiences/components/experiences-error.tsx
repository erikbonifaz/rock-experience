import type { ExperiencesErrorProps } from "../types";

export function ExperiencesError({ onRetry }: ExperiencesErrorProps) {
  return (
    <div
      className="flex flex-col items-start justify-between gap-6 border-y border-[#F2F0E9]/20 py-8 md:flex-row md:items-center"
      role="alert"
    >
      <p className="font-sans text-lg text-[#F2F0E9]">
        No pudimos cargar las experiencias.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="inline-flex min-h-12 items-center gap-4 border-b border-[#AAA69F] px-1 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-[#F2F0E9] transition-colors hover:border-[#FF2442] hover:text-[#FF2442] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2F0E9] motion-reduce:transition-none"
      >
        Intentar de nuevo <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
}
