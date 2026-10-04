import Link from "next/link";

const assistedTasks = [
  "Implementación y refactor de componentes a partir de los requisitos y de los cambios que fui solicitando.",
  "Revisión de React y Next.js con vercel-react-best-practices y de la interfaz con Impeccable.",
  "Comprobaciones de lint, compilación y navegación responsive, y preparación del mapa de arquitectura con Archify.",
  "Redacción de documentación a partir del código y de las decisiones tomadas durante el desarrollo.",
];

const reviewedProposals = [
  "La ubicación de hooks, componentes y contratos compartidos. Pedí sacar hooks y tipos de components/ y posteriormente simplificar la estructura por funcionalidad.",
  "El grado de separación de los componentes. Pedí archivos independientes cuando tienen una responsabilidad clara y evitar componentes creados solo para fragmentar el JSX.",
  "La legibilidad de los estados de Experiencias. Solicité reemplazar el switch por condiciones y retornos tempranos.",
  "La presentación del proyecto al evaluador. Decidí añadir el mapa de arquitectura y esta explicación de los criterios de desarrollo.",
];

export function AiUsage() {
  return (
    <section
      className="border-t border-foreground/20 pt-10 md:pt-12"
      aria-labelledby="inteligencia-artificial"
    >
      <h2
        id="inteligencia-artificial"
        className="navigation-focus-target font-display text-3xl leading-tight md:text-4xl"
        tabIndex={-1}
      >
        6. Uso de inteligencia artificial
      </h2>
      <p className="mt-5 max-w-[72ch] text-base leading-relaxed text-secondary md:text-lg">
        Utilicé Codex como apoyo para implementar, refactorizar y verificar el
        proyecto. Definí las prioridades de legibilidad y organización, revisé
        las propuestas y solicité cambios concretos hasta que respondieran a
        esos criterios.
      </p>

      <div className="mt-8 space-y-9 text-base leading-relaxed text-secondary">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Herramienta utilizada y propósito
          </h3>
          <p className="mt-3">
            La herramienta de IA utilizada fue Codex. Las guías
            vercel-react-best-practices e Impeccable orientaron las revisiones;
            Archify generó el diagrama interactivo que documenta los flujos.
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-accent">
            {assistedTasks.map((task) => (
              <li key={task} className="pl-1">
                {task}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Qué propuestas revisé y ajusté personalmente
          </h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-accent">
            {reviewedProposals.map((proposal) => (
              <li key={proposal} className="pl-1">
                {proposal}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Mi revisión se centró en criterios de organización, responsabilidades
            y legibilidad. Codex apoyó las comprobaciones de código, lint,
            compilación y navegador.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Una propuesta incorrecta y cómo se corrigió
          </h3>
          <p className="mt-3">
            La primera especificación del mapa de Archify incluyó vistas guiadas
            mediante <code className="text-sm text-foreground">meta.views</code>.
            El esquema aceptaba esa configuración, pero el renderizador actual
            la ignoraba: los controles esperados no aparecían.
          </p>
          <p className="mt-3">
            La comprobación asistida en el navegador detectó la diferencia.
            Se contrastó el comportamiento con la documentación de Archify, se
            retiró esa configuración y se ajustaron las instrucciones para usar
            la función RUTA que sí ofrece el diagrama. Después se volvió a
            comprobar la interacción.
          </p>
          <p className="mt-3 text-foreground">
            La lección: una configuración válida no garantiza que la interfaz
            haga lo esperado. Las propuestas generadas también necesitan
            verificación en la aplicación.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Verificaciones realizadas y alcance
          </h3>
          <p className="mt-3">
            Se ejecutaron ESLint y la compilación de producción, y se revisaron
            las vistas y la navegación en diferentes anchos. Experiencias
            también se comprobó con respuestas controladas para carga, error,
            reintento y lista vacía. Estas comprobaciones se realizaron con
            apoyo de Codex.
          </p>
          <p className="mt-3">
            Se verificó un envío real del formulario con Supabase: la
            información llegó a la base de datos y la página mostró la
            confirmación. Queda pendiente automatizar esa comprobación y ampliar
            las pruebas del formulario y de los estados del catálogo.
          </p>
        </div>
      </div>

      <Link
        className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold hover:text-accent"
        href="/arquitectura"
      >
        Explorar los flujos y su código
        <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
