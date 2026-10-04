import Link from "next/link";

export function ProjectIntroduction() {
  return (
    <section
      id="prueba-tecnica"
      className="border-y border-foreground/15 bg-foreground/[0.035] py-10 md:py-12 min-[1100px]:py-16"
      aria-labelledby="prueba-tecnica-title"
    >
      <div className="page-container grid gap-6 lg:grid-cols-12 lg:gap-x-10">
        <h2
          id="prueba-tecnica-title"
          className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] uppercase lg:col-span-5"
        >
          <span className="block">Sobre esta</span>
          <span className="block text-accent">prueba técnica</span>
        </h2>

        <div className="min-w-0 lg:col-span-7">
          <p className="max-w-[65ch] text-base leading-relaxed text-secondary md:text-lg">
            ROCK EXPERIENCE es una campaña ficticia desarrollada para la prueba
            técnica de Rock The Agency. Implementé una página responsive con un
            catálogo dinámico de experiencias y un formulario validado,
            priorizando código legible y una estructura sencilla de ampliar.
          </p>

          <nav
            className="mt-6 grid gap-x-8 sm:grid-cols-2"
            aria-label="Documentación de la prueba técnica"
          >
            <Link
              href="/arquitectura"
              className="group flex min-w-0 items-start justify-between gap-4 border-t border-foreground/25 py-4 transition-colors duration-200 hover:text-accent! focus-visible:text-accent! motion-reduce:transition-none"
            >
              <span>
                <span className="block text-lg font-semibold">Cómo funciona</span>
                <span className="mt-1 block text-sm leading-relaxed text-secondary">
                  Explora el flujo de la aplicación.
                </span>
              </span>
              <svg
                className="mt-1 size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>

            <Link
              href="/proyecto"
              className="group flex min-w-0 items-start justify-between gap-4 border-t border-foreground/25 py-4 transition-colors duration-200 hover:text-accent! focus-visible:text-accent! motion-reduce:transition-none"
            >
              <span>
                <span className="block text-lg font-semibold">Sobre la prueba</span>
                <span className="mt-1 block text-sm leading-relaxed text-secondary">
                  Conoce las decisiones técnicas y el uso de IA.
                </span>
              </span>
              <svg
                className="mt-1 size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
