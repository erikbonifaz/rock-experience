import Link from "next/link";
import { AiUsage } from "./ai-usage";
import { TechnicalDecisions } from "./technical-decisions";

const repositoryUrl = "https://github.com/erikbonifaz/rock-experience";
const readmeUrl = `${repositoryUrl}/blob/master/README.md`;

const sections = [
  { id: "ejecucion", label: "Cómo ejecutar" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "estructura", label: "Estructura" },
  { id: "decisiones", label: "Decisiones técnicas" },
  { id: "mejoras", label: "Mejoras pendientes" },
  { id: "inteligencia-artificial", label: "Uso de IA" },
];

const technologies = [
  {
    name: "Next.js 16.3.8 + React 19.2.8",
    purpose: "App Router, renderizado y endpoints dentro del mismo proyecto.",
  },
  {
    name: "TypeScript",
    purpose: "Contratos explícitos y comprobación de tipos durante el desarrollo.",
  },
  {
    name: "Tailwind CSS 4",
    purpose: "Estilos responsive sobre la paleta y la tipografía del sitio.",
  },
  {
    name: "React Hook Form + Zod",
    purpose: "Estado del formulario y reglas de validación compartidas con el servidor.",
  },
  {
    name: "Supabase PostgreSQL",
    purpose: "Persistencia de solicitudes mediante un cliente exclusivo del servidor.",
  },
  {
    name: "ESLint 9 + pnpm 11.17.0",
    purpose: "Análisis estático y gestión de dependencias con un lockfile versionado.",
  },
  {
    name: "Archify",
    purpose: "Generación del HTML estático del mapa de arquitectura, sin una dependencia de ejecución adicional.",
  },
];

const directories = [
  {
    path: "app/",
    purpose: "Rutas, layout, estilos globales, endpoints y composición de páginas.",
  },
  {
    path: "components/layout/",
    purpose: "Encabezado, navegación y footer compartidos.",
  },
  {
    path: "features/",
    purpose: "Experiencias, Contacto, Beneficios y documentación del proyecto. Componentes dentro de components/; hooks en hooks/.",
  },
  {
    path: "lib/supabase/",
    purpose: "Conexión a Supabase protegida para uso en el servidor.",
  },
  {
    path: "data/",
    purpose: "Catálogo JSON que devuelve la API local de Experiencias.",
  },
  {
    path: "supabase/",
    purpose: "SQL de la tabla de solicitudes, RLS y permisos.",
  },
  {
    path: "public/ y docs/",
    purpose: "Imágenes, diagrama exportado, su fuente y documentación técnica.",
  },
];

const improvements = [
  {
    title: "Verificar la persistencia de extremo a extremo",
    detail: "Configurar Supabase y el entorno de despliegue, enviar una solicitud real y comprobar el registro y su confirmación. Añadir pruebas automatizadas del formulario y de los estados del catálogo.",
  },
  {
    title: "Preparar el formulario para un uso público",
    detail: "Añadir límites de frecuencia y protección anti-spam. Restringir el acceso a la página de registros de demostración antes de utilizar datos reales; ocultar parte de los datos no sustituye el control de acceso.",
  },
  {
    title: "Medir y observar el comportamiento",
    detail: "Incorporar seguimiento de errores de API sin datos personales, medir rendimiento y accesibilidad en el despliegue, y usar esas mediciones para priorizar las siguientes mejoras.",
  },
];

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
            <section aria-labelledby="ejecucion">
              <h2
                id="ejecucion"
                className="navigation-focus-target font-display text-3xl leading-tight md:text-4xl"
                tabIndex={-1}
              >
                1. Cómo ejecutar el proyecto
              </h2>
              <p className="mt-5 text-base leading-relaxed text-secondary md:text-lg">
                Entorno de referencia: Node.js 24 y pnpm 11.17.0, la versión
                indicada en{" "}
                <code className="text-sm text-foreground">package.json</code>.
                Después de clonar el repositorio, ejecuta en su carpeta:
              </p>
              <pre className="mt-5 overflow-x-auto border-l-2 border-accent bg-foreground/[0.04] px-5 py-4 text-sm leading-7 text-foreground">
                <code>{"pnpm install --frozen-lockfile\npnpm dev"}</code>
              </pre>
              <p className="mt-4 text-base leading-relaxed text-secondary">
                Abre{" "}
                <a
                  className="font-medium text-foreground hover:text-accent"
                  href="http://localhost:3000/"
                >
                  localhost:3000
                </a>.
                La landing, el catálogo y estas páginas de documentación pueden
                consultarse sin configurar la base de datos.
              </p>

              <h3 className="mt-8 text-lg font-semibold">
                Para guardar una solicitud
              </h3>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-base leading-relaxed text-secondary marker:text-accent">
                <li className="pl-1">
                  Crea un proyecto en Supabase y ejecuta{" "}
                  <code className="break-words text-sm text-foreground">
                    supabase/contact_submissions.sql
                  </code>{" "}
                  en su SQL Editor.
                </li>
                <li className="pl-1">
                  Copia <code className="text-sm text-foreground">.env.example</code>{" "}
                  a <code className="text-sm text-foreground">.env.local</code> y
                  completa las variables del servidor:
                </li>
              </ol>
              <pre className="mt-4 overflow-x-auto border-l-2 border-foreground/30 bg-foreground/[0.04] px-5 py-4 text-xs leading-7 text-foreground sm:text-sm">
                <code>{"SUPABASE_URL=\nSUPABASE_SERVICE_ROLE_KEY="}</code>
              </pre>
              <p className="mt-4 text-base leading-relaxed text-secondary">
                Reinicia el servidor y prueba un envío. La clave permanece en el
                servidor: no lleva el prefijo{" "}
                <code className="text-sm text-foreground">NEXT_PUBLIC_</code>.
                El README detalla la configuración y los permisos de la tabla.
              </p>

              <h3 className="mt-8 text-lg font-semibold">
                Comprobación y producción
              </h3>
              <pre className="mt-4 overflow-x-auto border-l-2 border-foreground/30 bg-foreground/[0.04] px-5 py-4 text-sm leading-7 text-foreground">
                <code>{"pnpm lint\npnpm build\npnpm start"}</code>
              </pre>
              <p className="mt-4 text-sm leading-relaxed text-secondary">
                Ejecuta start después de build. La compilación puede necesitar
                internet para descargar las fuentes mediante next/font/google.
              </p>
            </section>

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
