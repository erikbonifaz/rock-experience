import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada | ROCK EXPERIENCE",
  description: "La página que buscas no está disponible.",
};

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#101010] text-[#F2F0E9]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-0.12em] right-[-0.08em] z-0 select-none font-display text-[clamp(16rem,43vw,38rem)] leading-[0.72] text-transparent opacity-35"
        style={{ WebkitTextStroke: "1px rgb(170 166 159 / 0.22)" }}>
        404
      </span>

      <header className="page-container relative z-10 flex w-full items-center justify-between py-5 md:min-h-[var(--header-height)]">
        <Link
          className="wordmark focus-visible:outline-2 focus-visible:outline-[#FF2442] focus-visible:outline-offset-4"
          href="/"
          aria-label="ROCK EXPERIENCE, volver al inicio">
          <span>ROCK</span>
          <span>EXPERIENCE</span>
        </Link>
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#AAA69F] sm:text-xs">
          <span className="text-[#FF2442]">404</span>
          <span className="px-2 text-[#AAA69F]/60" aria-hidden="true">
            /
          </span>
          Página no encontrada
        </p>
      </header>

      <main className="page-container relative z-10 flex flex-1 items-center py-16 md:py-24">
        <section className="w-full max-w-5xl" aria-labelledby="not-found-title">
          <h1
            className="font-display text-[clamp(3.375rem,12vw,10rem)] leading-[0.88] tracking-[-0.02em] uppercase"
            id="not-found-title">
            <span className="block">Esta página</span>
            <span className="block text-[#FF2442]">no existe.</span>
          </h1>

          <p className="mt-6 max-w-[42ch] font-sans text-base leading-relaxed text-[#AAA69F] md:mt-8 md:text-lg">
            El enlace puede estar desactualizado o la dirección no es correcta.
            Vuelve al inicio o explora nuestras experiencias.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-8">
            <Link
              className="button-primary min-h-[52px] gap-3 focus-visible:outline-2 focus-visible:outline-[#F2F0E9] focus-visible:outline-offset-4"
              href="/">
              Volver al inicio
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  d="M4 10h12M10 4l6 6-6 6"
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>

            <Link
              className="inline-flex min-h-12 items-center gap-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-[#F2F0E9] underline decoration-[#AAA69F]/55 underline-offset-4 transition-colors hover:text-[#FF2442] focus-visible:outline-2 focus-visible:outline-[#FF2442] focus-visible:outline-offset-4 motion-reduce:transition-none"
              href="/#experiencias">
              Explorar experiencias
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  d="M5 15 15 5M6 5h9v9"
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
