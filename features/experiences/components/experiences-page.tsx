import Link from "next/link";
import experiences from "@/data/experiences.json";
import { experienceEditorialContent } from "../editorial-content";
import { ExperienceFeature } from "./experience-feature";
import { ExperiencesIntro } from "./experiences-intro";
import { ExperiencesInvitation } from "./experiences-invitation";

export function ExperiencesPage() {
  return (
    <>
      <a className="skip-link" href="#contenido-experiencias">
        Saltar al contenido
      </a>

      <header
        id="inicio-experiencias"
        className="page-container flex items-center justify-between gap-6 border-b border-foreground/18 py-5 md:py-6"
      >
        <Link className="wordmark" href="/" aria-label="ROCK EXPERIENCE, inicio">
          <span>ROCK</span>
          <span>EXPERIENCE</span>
        </Link>
        <Link
          className="inline-flex min-h-11 items-center text-right text-sm transition-colors hover:text-accent! focus-visible:text-accent! motion-reduce:transition-none"
          href="/#experiencias"
        >
          Volver a la campaña
        </Link>
      </header>

      <main id="contenido-experiencias">
        <ExperiencesIntro />

        <section
          id="catalogo"
          className="page-container pb-6 pt-14 md:pb-10 md:pt-20"
          aria-labelledby="experiences-catalog-title"
        >
          <div className="mb-8 grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
            <h2
              id="experiences-catalog-title"
              className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight uppercase lg:col-span-7"
            >
              Seis formas de vivir algo diferente.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-secondary lg:col-span-5">
              Una misma idea: acercar marcas, tecnología y personas. Explora las
              propuestas y encuentra la que conecta contigo.
            </p>
          </div>

          <nav className="mb-8 md:mb-10" aria-label="Ir a una experiencia">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {experiences.map((experience) => (
                <li key={experience.id}>
                  <a
                    className="inline-flex min-h-11 items-center border-b border-foreground/25 transition-colors hover:border-accent hover:text-accent! focus-visible:text-accent! motion-reduce:transition-none"
                    href={`#experiencia-${experience.id}`}
                  >
                    {experience.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {experiences.map((experience, index) => (
            <ExperienceFeature
              key={experience.id}
              experience={experience}
              editorialContent={experienceEditorialContent[experience.id]}
              imageOnRight={index % 2 !== 0}
            />
          ))}
        </section>

        <ExperiencesInvitation />
      </main>

      <footer className="page-container flex flex-col gap-3 py-6 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between md:py-8">
        <p>© 2026 ROCK EXPERIENCE</p>
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <a
            className="inline-flex min-h-11 items-center transition-colors hover:text-foreground! focus-visible:text-foreground! motion-reduce:transition-none"
            href="#inicio-experiencias"
          >
            Volver arriba
          </a>
          <Link
            className="inline-flex min-h-11 items-center transition-colors hover:text-foreground! focus-visible:text-foreground! motion-reduce:transition-none"
            href="/proyecto"
          >
            Sobre esta prueba técnica
          </Link>
        </div>
      </footer>
    </>
  );
}
