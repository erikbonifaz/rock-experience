import Link from "next/link";

export function ExperiencesInvitation() {
  return (
    <section
      className="border-y border-foreground/18 bg-foreground/5 py-12 md:py-16 lg:py-20"
      aria-labelledby="experiences-invitation-title"
    >
      <div className="page-container grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2
          id="experiences-invitation-title"
          className="max-w-[15ch] font-display text-[clamp(2.625rem,6vw,5rem)] leading-none tracking-[-0.015em] uppercase lg:col-span-7"
        >
          Encuentra tu próxima experiencia.
        </h2>

        <div className="max-w-md lg:col-span-5">
          <p className="text-base leading-relaxed text-secondary md:text-lg">
            Cuéntanos un poco sobre ti y qué propuesta te interesa en el
            formulario de participación.
          </p>
          <Link
            className="mt-6 inline-flex min-h-13 w-full items-center justify-center bg-accent px-7 py-3 text-sm font-semibold tracking-[0.06em] text-background! uppercase transition-colors hover:bg-foreground motion-reduce:transition-none sm:w-auto"
            href="/#contacto"
          >
            Quiero participar
          </Link>
        </div>
      </div>
    </section>
  );
}
