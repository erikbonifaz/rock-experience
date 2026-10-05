import type { Metadata } from "next";
import Link from "next/link";
import { sharedOpenGraph } from "@/lib/seo";
import diagram from "@/docs/arquitectura/rock-experience.json";

export const metadata: Metadata = {
  title: "Cómo funciona ROCK EXPERIENCE",
  description:
    "Explora las páginas de ROCK EXPERIENCE, el README compartido, la carga de Experiencias y la validación y persistencia del formulario.",
  openGraph: {
    ...sharedOpenGraph,
    title: "Cómo funciona ROCK EXPERIENCE",
    description:
      "Un mapa interactivo y una explicación del recorrido de los datos, desde el navegador hasta las APIs y Supabase.",
    url: "/arquitectura",
  },
};

const repository = diagram.meta.repository;
const repositoryUrl = repository.url.replace(/\.git$/, "");
const diagramUrl = "/diagrams/rock-experience.html";
const sourceLinkClassName =
  "inline-flex min-h-11 items-center text-sm text-accent underline decoration-accent/50 underline-offset-4 hover:decoration-accent";

const experienceSteps = [
  "Al acercarse a la sección, useExperiences solicita GET /api/experiences y carga el schema Zod en paralelo.",
  "El endpoint devuelve el catálogo de data/experiences.json.",
  "El hook valida los campos y comprueba que los identificadores sean únicos.",
  "Mientras carga, la interfaz muestra un estado de espera. Después aparecen las tarjetas o el mensaje de lista vacía; si la carga falla, se puede reintentar.",
  "Cada tarjeta abre /experiencias en el ancla #experiencia-{id} de su propuesta. Esa página lee el mismo JSON directamente en el servidor.",
];

const participationSteps = [
  "React Hook Form y Zod validan los campos antes de enviar la solicitud.",
  "POST /api/contact vuelve a validar los datos con el mismo schema Zod.",
  "El servidor inserta los valores válidos en contact_submissions mediante Supabase.",
  "Una respuesta 201 devuelve el ID y el código RX-####. El cliente valida esa respuesta antes de mostrar la confirmación.",
  "El enlace de demostración consulta ese registro en el servidor y oculta parte del correo y del teléfono.",
];

const applicationPages = [
  { href: "/", title: "La campaña", description: "Hero, introducción de la prueba, catálogo dinámico, Beneficios y formulario de participación." },
  { href: "/experiencias", title: "Experiencias", description: "Seis propuestas editoriales con navegación por anclas y acceso al formulario de la landing." },
  { href: "/proyecto", title: "Sobre la prueba", description: "Lee README.md en el servidor y genera el contenido y su índice, sin mantener una copia separada." },
  { href: "/arquitectura", title: "Cómo funciona", description: "Explica los recorridos y carga el visor HTML de Archify mediante un iframe diferido." },
];

export default function ArchitecturePage() {
  return (
    <>
      <a className="skip-link" href="#contenido-arquitectura">
        Saltar al contenido
      </a>

      <header className="page-container flex flex-wrap items-center justify-between gap-4 border-b border-foreground/20 py-5 md:py-7">
        <Link className="wordmark" href="/" aria-label="ROCK EXPERIENCE, inicio">
          <span>ROCK</span>
          <span>EXPERIENCE</span>
        </Link>
        <Link
          className="inline-flex min-h-11 items-center text-sm text-secondary underline decoration-foreground/30 hover:text-foreground"
          href="/"
        >
          Volver a la campaña
        </Link>
      </header>

      <main
        id="contenido-arquitectura"
        className="page-container pb-16 md:pb-24"
        tabIndex={-1}
      >
        <section
          className="grid gap-8 pb-10 pt-12 md:grid-cols-12 md:items-end md:gap-x-8 md:pb-14 md:pt-16"
          aria-labelledby="arquitectura-title"
        >
          <h1
            id="arquitectura-title"
            className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em] uppercase md:col-span-7"
          >
            <span className="block">Cómo funciona</span>
            <span className="block text-accent">ROCK EXPERIENCE</span>
          </h1>
          <p className="max-w-[48ch] text-base leading-relaxed text-secondary md:col-span-5 md:text-lg">
            Del navegador al servidor: explora las páginas, sus fuentes de
            contenido y el recorrido de una solicitud. Cada nodo del mapa
            incluye referencias verificadas al código que respalda su responsabilidad.
          </p>
        </section>

        <nav
          className="flex flex-wrap gap-x-7 gap-y-2 border-y border-foreground/20 py-2"
          aria-label="Contenido de la explicación"
        >
          <a className={sourceLinkClassName} href="#mapa">
            Mapa interactivo
          </a>
          <a className={sourceLinkClassName} href="#paginas">
            Páginas
          </a>
          <a className={sourceLinkClassName} href="#flujo-experiencias">
            Experiencias
          </a>
          <a className={sourceLinkClassName} href="#flujo-formulario">
            Formulario
          </a>
        </nav>

        <section className="pt-10 md:pt-14" aria-labelledby="mapa">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
            <h2
              id="mapa"
              className="navigation-focus-target font-display text-3xl leading-tight md:text-4xl"
              tabIndex={-1}
            >
              El mapa de la aplicación
            </h2>
            <a
              className="inline-flex min-h-12 items-center justify-center border border-accent px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background motion-reduce:transition-none"
              href={diagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir diagrama completo
              <span className="sr-only"> (en una pestaña nueva)</span>
            </a>
          </div>
          <p
            id="mapa-instructions"
            className="mb-6 mt-4 max-w-[72ch] text-sm leading-relaxed text-secondary"
          >
            Selecciona un nodo para inspeccionar sus conexiones y los archivos que lo implementan.
            Usa RUTA para seguir las conexiones entre componentes.
            Puedes acercar la vista, cambiar el tema y explorar con el teclado.
          </p>
          <iframe
            className="h-[640px] w-full border border-foreground/20 bg-background md:h-[820px] lg:h-[1120px]"
            src={diagramUrl}
            title="Diagrama interactivo de la arquitectura de ROCK EXPERIENCE"
            aria-describedby="mapa-instructions"
            loading="lazy"
            allow="clipboard-write"
          />
          <p className="mt-4 max-w-[75ch] text-sm leading-relaxed text-secondary">
            {repository.link_mode === "local-only"
              ? "Las referencias del mapa corresponden a una copia verificada del código local al generarlo, incluidos los cambios aún sin publicar."
              : "Las referencias del mapa corresponden a la revisión verificada al generarlo."}
            {" "}El formulario requiere Supabase configurado para guardar solicitudes.
          </p>
        </section>

        <section className="mt-14 border-t border-foreground/20 pt-10 md:mt-20 md:pt-14" aria-labelledby="paginas">
          <h2 id="paginas" className="navigation-focus-target font-display text-3xl leading-tight md:text-4xl" tabIndex={-1}>
            Qué páginas forman la aplicación
          </h2>
          <ul className="mt-6 grid gap-x-12 gap-y-6 md:grid-cols-2">
            {applicationPages.map((page) => (
              <li key={page.href} className="border-b border-foreground/20 pb-6">
                <Link className={sourceLinkClassName} href={page.href}>
                  {page.title} <span className="ml-2 font-mono text-xs text-secondary">{page.href}</span>
                </Link>
                <p className="mt-2 max-w-[60ch] text-base leading-relaxed text-secondary">{page.description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-secondary">
            Tras enviar el formulario, /demo/submissions/[id] consulta el registro
            guardado en el servidor. La ruta de demostración tiene noindex y
            oculta parte del correo y teléfono; no cuenta con autenticación.
          </p>
        </section>

        <div className="mt-14 grid gap-y-12 border-t border-foreground/20 pt-10 md:mt-20 md:grid-cols-2 md:gap-x-12 md:pt-14">
          <section aria-labelledby="flujo-experiencias">
            <h2
              id="flujo-experiencias"
              className="navigation-focus-target font-display text-3xl leading-tight md:text-4xl"
              tabIndex={-1}
            >
              Cómo se cargan las experiencias
            </h2>
            <ol className="mt-6 list-decimal space-y-4 pl-5 text-base leading-relaxed text-secondary marker:font-semibold marker:text-accent">
              {experienceSteps.map((step) => (
                <li key={step} className="pl-2">
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-secondary">
              La carga se prepara 400 px antes de que la sección entre en
              pantalla. Si el navegador no admite IntersectionObserver,
              comienza de inmediato. Al reintentar o desmontar la sección se
              cancela la petición activa.
            </p>
          </section>

          <section aria-labelledby="flujo-formulario">
            <h2
              id="flujo-formulario"
              className="navigation-focus-target font-display text-3xl leading-tight md:text-4xl"
              tabIndex={-1}
            >
              Qué ocurre al enviar el formulario
            </h2>
            <ol className="mt-6 list-decimal space-y-4 pl-5 text-base leading-relaxed text-secondary marker:font-semibold marker:text-accent">
              {participationSteps.map((step) => (
                <li key={step} className="pl-2">
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-secondary">
              El servidor responde 400 ante datos inválidos y 500 si falla la
              configuración o la persistencia. Ante un error, el formulario
              conserva los campos y permite volver a enviar la solicitud.
            </p>
          </section>
        </div>

        <section
          className="mt-14 border-t border-foreground/20 pt-10 md:mt-20 md:pt-14"
          aria-labelledby="responsabilidades-title"
        >
          <h2
            id="responsabilidades-title"
            className="font-display text-3xl leading-tight md:text-4xl"
          >
            Cada responsabilidad tiene su lugar
          </h2>
          <dl className="mt-6 grid gap-y-6 text-base leading-relaxed md:grid-cols-3 md:gap-x-8">
            <div>
              <dt className="font-semibold text-foreground">Navegador</dt>
              <dd className="mt-2 text-secondary">
                Interacción, estados del catálogo y validación inicial del formulario.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Servidor Next.js</dt>
              <dd className="mt-2 text-secondary">
                Renderizado de la página, endpoints, validación y conexión a
                Supabase con una clave de uso exclusivo del servidor.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Datos</dt>
              <dd className="mt-2 text-secondary">
                El catálogo procede de un JSON local; las solicitudes se guardan
                en PostgreSQL mediante Supabase.
              </dd>
            </div>
          </dl>
        </section>
      </main>

      <footer className="page-container flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-foreground/20 py-6 text-sm text-secondary">
        <p>
          Diagrama generado con{" "}
          <a
            className="underline decoration-foreground/30 hover:text-foreground"
            href="https://tt-a1i.github.io/archify/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Archify
          </a>.
        </p>
        <div className="flex flex-wrap gap-x-7 gap-y-2">
          <Link className={sourceLinkClassName} href="/proyecto">
            Sobre esta prueba técnica
          </Link>
          <a
            className={sourceLinkClassName}
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar el repositorio en GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
