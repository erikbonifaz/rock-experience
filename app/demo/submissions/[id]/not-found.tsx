import Link from "next/link";

export default function SubmissionNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-[#101010] px-[var(--page-gutter)] py-16 text-[#F2F0E9]">
      <div className="mx-auto w-full max-w-4xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#AAA69F]">
          <span className="text-[#FF2442]">{"//"}</span> Registro de demostración
        </p>
        <h1 className="mt-6 max-w-[12ch] font-display text-[clamp(3rem,10vw,6rem)] leading-[0.9] text-[#F2F0E9]">
          Registro no encontrado.
        </h1>
        <Link
          className="mt-10 inline-flex min-h-12 items-center gap-3 border border-[#FF2442] px-5 py-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-[#FF2442] transition-colors hover:bg-[#FF2442] hover:text-[#101010] focus-visible:outline-2 focus-visible:outline-[#FF2442] focus-visible:outline-offset-3"
          href="/">
          <span aria-hidden="true">←</span>
          Volver a ROCK EXPERIENCE
        </Link>
      </div>
    </main>
  );
}
