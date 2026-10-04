import Link from "next/link";
import {
  directories,
  improvements,
  readmeUrl,
  repositoryUrl,
  sections,
  technologies,
} from "../content";
import { AiUsage } from "./ai-usage";
import { ProjectSetup } from "./project-setup";
import { TechnicalDecisions } from "./technical-decisions";

export function ProjectDocumentation() {
  return (
    <>
      <a className="skip-link" href="#contenido-proyecto">
        Saltar al contenido
      </a>

      <header className="page-container flex flex-wrap items-center justify-between gap-4 border-b border-foreground/20 py-5 md:py-7">
        <Link className="wordmark" href="/" aria-label="ROCK EXPERIENCE, inicio">
          <span>ROCK</span>
          <span>EXPERIENCE</span>
        </Link>
        <Link
          className="inline-flex min-h-11 items-center text-sm text-secondary hover:text-foreground"
          href="/"
        >
          Volver a la campaña
        </Link>
      </header>

      <main
        id="contenido-proyecto"
        className="page-container pb-16 md:pb-24"
        tabIndex={-1}
      >
        <section
          className="grid gap-8 py-12 md:grid-cols-12 md:items-end md:gap-x-8 md:py-16"
          aria-labelledby="proyecto-title"
        >
          <h1
            id="proyecto-title"
            className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em] uppercase md:col-span-7"
          >
            <span className="block">Sobre esta</span>
            <span className="block text-accent">prueba técnica</span>
          </h1>
          <div className="max-w-[48ch] md:col-span-5">
            <p className="text-base leading-relaxed text-secondary md:text-lg">
              ROCK EXPERIENCE es una campaña ficticia desarrollada para la
              prueba de Rock The Agency. Prioricé código legible, responsabilidades
              claras y una estructura sencilla de ampliar. Aquí explico cómo
              ejecutarlo, qué decisiones tomé y cómo utilicé Codex.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <Link
                className="inline-flex min-h-11 items-center gap-2 hover:text-accent"
                href="/arquitectura"
              >
                Ver arquitectura <span aria-hidden="true">↗</span>
              </Link>
              <a
                className="inline-flex min-h-11 items-center gap-2 hover:text-accent"
                href={readmeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                README en GitHub <span aria-hidden="true">↗</span>
                <span className="sr-only"> (en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </section>

        <div className="grid gap-x-12 gap-y-10 border-t border-foreground/20 pt-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-x-16 lg:pt-12">
          <nav
            className="self-start lg:sticky lg:top-8"
            aria-label="Contenido de la prueba técnica"
          >
            <ol className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm lg:grid-cols-1 lg:gap-y-2">
              {sections.map(({ id, label }, index) => (
                <li key={id}>
                  <a
                    className="flex min-h-11 items-center gap-3 py-2 text-secondary hover:text-accent"
                    href={`#${id}`}
                  >
                    <span className="font-mono text-xs text-accent" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0 max-w-[80ch] space-y-12 md:space-y-16">
            <ProjectSetup />

            <section
              className="border-t border-foreground/20 pt-10 md:pt-12"
              aria-labelledby="tecnologias"
            >
              <h2
                id="tecnologias"
                className="navigation-focus-target font-display text-3xl leading-tight md:text-4xl"
                tabIndex={-1}
              >
                2. Tecnologías utilizadas
              </h2>
              <dl className="mt-6 divide-y divide-foreground/20 text-base leading-relaxed">
                {technologies.map(({ name, purpose }) => (
                  <div
                    key={name}
                    className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] sm:gap-6"
                  >
                    <dt className="font-semibold">{name}</dt>
                    <dd className="text-secondary">{purpose}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section
              className="border-t border-foreground/20 pt-10 md:pt-12"
              aria-labelledby="estructura"
            >
              <h2
                id="estructura"
                className="navigation-focus-target font-display text-3xl leading-tight md:text-4xl"
                tabIndex={-1}
              >
                3. Estructura general
              </h2>
              <p className="mt-5 text-base leading-relaxed text-secondary md:text-lg">
                Las rutas componen las páginas; cada funcionalidad reúne su
                comportamiento y sus vistas. Los elementos globales se comparten
                desde components/layout/, sin añadir capas que el proyecto
                todavía no necesita.
              </p>
              <dl className="mt-6 divide-y divide-foreground/20 text-base leading-relaxed">
                {directories.map(({ path, purpose }) => (
                  <div
                    key={path}
                    className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] sm:gap-6"
                  >
                    <dt className="font-mono text-sm">{path}</dt>
                    <dd className="text-secondary">{purpose}</dd>
                  </div>
                ))}
              </dl>
              <Link
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold hover:text-accent"
                href="/arquitectura"
              >
                Seguir el recorrido de los datos <span aria-hidden="true">↗</span>
              </Link>
            </section>

            <TechnicalDecisions />

            <section
              className="border-t border-foreground/20 pt-10 md:pt-12"
              aria-labelledby="mejoras"
            >
              <h2
                id="mejoras"
                className="navigation-focus-target font-display text-3xl leading-tight md:text-4xl"
                tabIndex={-1}
              >
                5. Qué mejoraría con más tiempo
              </h2>
              <p className="mt-5 text-base leading-relaxed text-secondary md:text-lg">
                El siguiente trabajo se concentraría en comprobar el flujo real
                y preparar la operación del proyecto, en este orden:
              </p>
              <ol className="mt-6 list-decimal space-y-6 pl-5 text-base leading-relaxed marker:text-accent">
                {improvements.map(({ title, detail }) => (
                  <li key={title} className="pl-2">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-secondary">{detail}</p>
                  </li>
                ))}
              </ol>
            </section>

            <AiUsage />
          </div>
        </div>
      </main>

      <footer className="page-container flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-foreground/20 py-6 text-sm text-secondary">
        <p>ROCK EXPERIENCE · Erik Bonifaz</p>
        <a
          className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-foreground"
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explorar el repositorio <span aria-hidden="true">↗</span>
          <span className="sr-only"> (en una pestaña nueva)</span>
        </a>
      </footer>
    </>
  );
}
