export function ProjectSetup() {
  return (
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
        La versión desplegada está disponible en{" "}
        <a
          className="font-medium text-foreground hover:text-accent"
          href="https://rock-experience-ten.vercel.app/"
        >
          rock-experience-ten.vercel.app
        </a>.
        Para probar la instancia local, abre{" "}
        <code className="text-sm text-foreground">http://localhost:3000/</code>.
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
  );
}
