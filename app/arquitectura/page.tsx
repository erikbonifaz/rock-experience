import type { Metadata } from "next";
import Link from "next/link";
import diagram from "@/docs/arquitectura/rock-experience.json";

export const metadata: Metadata = {
  title: "Cómo funciona ROCK EXPERIENCE",
  description:
    "Explora la arquitectura de ROCK EXPERIENCE: renderizado con Next.js, carga de Experiencias y validación y persistencia del formulario.",
  openGraph: {
    title: "Cómo funciona ROCK EXPERIENCE",
    description:
      "Un mapa interactivo y una explicación del recorrido de los datos, desde el navegador hasta las APIs y Supabase.",
    locale: "es_MX",
    type: "website",
  },
};

const repository = diagram.meta.repository;
const repositoryUrl = repository.url.replace(/\.git$/, "");
const sourceBaseUrl = `${repositoryUrl}/blob/${repository.revision}`;
const diagramUrl = "/diagrams/rock-experience.html";
const sourceLinkClassName =
  "inline-flex min-h-11 items-center text-sm text-accent underline decoration-accent/50 underline-offset-4 hover:decoration-accent";

const experienceSteps = [
  "El hook useExperiences inicia la carga y solicita GET /api/experiences.",
  "El endpoint devuelve el catálogo de data/experiences.json.",
  "El hook comprueba los campos y los identificadores de cada experiencia.",
  "La interfaz muestra las tarjetas o el mensaje de lista vacía; si la petición falla, permite reintentar.",
];

const participationSteps = [
  "React Hook Form y Zod validan los campos antes de enviar la solicitud.",
  "POST /api/contact vuelve a validar los datos con el mismo schema Zod.",
  "El servidor inserta los valores válidos en contact_submissions mediante Supabase.",
  "Una respuesta 201 devuelve el ID y el código RX-####, y muestra la confirmación.",
  "El enlace de demostración consulta ese registro en el servidor y oculta parte del correo y del teléfono.",
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
            Del navegador al servidor: explora de dónde salen las experiencias,
            cómo se valida una solicitud y dónde se guarda. Cada nodo del mapa
            enlaza al código que respalda su responsabilidad.
          </p>
        </section>

        <nav
          className="flex flex-wrap gap-x-7 gap-y-2 border-y border-foreground/20 py-2"
          aria-label="Contenido de la explicación"
        >
          <a className={sourceLinkClassName} href="#mapa">
            Mapa interactivo
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
            Selecciona un nodo para inspeccionar sus conexiones y su código.
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
            El mapa documenta una revisión del código; el formulario requiere
            Supabase configurado para persistir solicitudes. La explicación de
            ambos recorridos también está disponible en texto a continuación.
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
              Una nueva carga cancela la petición anterior. Al salir del
              componente se cancela la petición activa, evitando actualizar una
              vista que ya no está montada.
            </p>
            <a
              className={`${sourceLinkClassName} mt-3`}
              href={`${sourceBaseUrl}/features/experiences/hooks/use-experiences.ts#L57-L108`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver el hook de Experiencias en GitHub
            </a>
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
              persistencia. El formulario conserva los campos y permite volver
              a enviar la solicitud.
            </p>
            <a
              className={`${sourceLinkClassName} mt-3`}
              href={`${sourceBaseUrl}/app/api/contact/route.ts#L14-L75`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver el endpoint de Contacto en GitHub
            </a>
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
        <a
          className={sourceLinkClassName}
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explorar el repositorio en GitHub
        </a>
      </footer>
    </>
  );
}
