import Link from "next/link";
import { readmeUrl, repositoryUrl } from "../content";
import { readProjectReadme } from "../read-project-readme";
import { ReadmeContent } from "./readme-content";

export async function ProjectDocumentation() {
  const { title, titleId, summary, markdown, sections } = await readProjectReadme();

  return (
    <>
      <a className="skip-link" href="#contenido-proyecto">Saltar al contenido</a>

      <header className="page-container flex flex-wrap items-center justify-between gap-4 border-b border-foreground/20 py-5 md:py-7">
        <Link className="wordmark" href="/" aria-label="ROCK EXPERIENCE, inicio">
          <span>ROCK</span><span>EXPERIENCE</span>
        </Link>
        <Link className="inline-flex min-h-11 items-center text-sm text-secondary hover:text-foreground" href="/">
          Volver a la campaña
        </Link>
      </header>

      <main id="contenido-proyecto" className="page-container pb-16 md:pb-24" tabIndex={-1}>
        <section className="grid gap-8 py-12 md:grid-cols-12 md:items-end md:gap-x-8 md:py-16" aria-labelledby={titleId}>
          <div className="md:col-span-7">
            <p className="mb-4 text-sm font-semibold tracking-[0.08em] text-secondary uppercase">Sobre esta prueba técnica</p>
            <h1 id={titleId} className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em] text-accent uppercase">
              {title}
            </h1>
          </div>
          <div className="max-w-[48ch] md:col-span-5">
            <p className="text-base leading-relaxed text-secondary md:text-lg">{summary}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <Link className="inline-flex min-h-11 items-center gap-2 hover:text-accent" href="/arquitectura">
                Ver arquitectura <span aria-hidden="true">↗</span>
              </Link>
              <a className="inline-flex min-h-11 items-center gap-2 hover:text-accent" href={readmeUrl} target="_blank" rel="noopener noreferrer">
                README en GitHub <span aria-hidden="true">↗</span>
                <span className="sr-only"> (en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </section>

        <div className="grid gap-x-12 gap-y-10 border-t border-foreground/20 pt-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-x-16 lg:pt-12">
          <nav className="self-start lg:sticky lg:top-8" aria-label="Contenido de la prueba técnica">
            <ol className="grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-2">
              {sections.map(({ id, label }, index) => (
                <li key={id}>
                  <a className="flex min-h-11 items-start gap-3 py-2 text-secondary hover:text-accent" href={`#${id}`}>
                    <span className="pt-0.5 font-mono text-xs text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <span>{label.replace(/^\d+\.\s*/, "")}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <ReadmeContent title={title} markdown={markdown} />
        </div>
      </main>

      <footer className="page-container flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-foreground/20 py-6 text-sm text-secondary">
        <p>ROCK EXPERIENCE · Erik Bonifaz</p>
        <a className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-foreground" href={repositoryUrl} target="_blank" rel="noopener noreferrer">
          Explorar el repositorio <span aria-hidden="true">↗</span>
          <span className="sr-only"> (en una pestaña nueva)</span>
        </a>
      </footer>
    </>
  );
}
