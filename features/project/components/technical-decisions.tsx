const decisions = [
  {
    title: "Organización por funcionalidad",
    reason:
      "Quería encontrar todo lo relacionado con Experiencias, Contacto o Beneficios en un lugar reconocible.",
    effect:
      "app/ conserva las rutas y la composición; cada funcionalidad vive en features/. Los hooks quedan fuera de components/.",
  },
  {
    title: "Tipos compartidos y props locales",
    reason:
      "Separar contratos compartidos ayuda a leerlos; crear un archivo por cada interfaz añade navegación innecesaria.",
    effect:
      "Experiencias reúne los contratos compartidos en types.ts. Las props que solo necesita un componente permanecen junto a él.",
  },
  {
    title: "Componentes con una responsabilidad",
    reason:
      "Pedí archivos independientes cuando la vista o su comportamiento lo justifican, sin fragmentar cada bloque de JSX.",
    effect:
      "La tarjeta, la imagen y las vistas de carga y error se reconocen por sus archivos. La nueva documentación separa los bloques extensos de decisiones y uso de IA.",
  },
  {
    title: "Estados con retornos tempranos",
    reason:
      "El switch de Experiencias hacía menos directa la lectura del componente. Preferí resolver cada estado de forma explícita.",
    effect:
      "Carga, error y lista vacía tienen condiciones claras; el retorno final muestra el catálogo. Reintentar cancela la petición anterior.",
  },
  {
    title: "Validación compartida con Zod",
    reason:
      "La respuesta inmediata del formulario no sustituye la validación del servidor. Ambas deben aplicar las mismas reglas.",
    effect:
      "React Hook Form y POST /api/contact utilizan participationSchema. El endpoint guarda únicamente los valores validados.",
  },
  {
    title: "Servidor para contenido y credenciales",
    reason:
      "El contenido estático no necesita estado del navegador y las operaciones privilegiadas deben permanecer en el servidor.",
    effect:
      "La interacción queda en los componentes cliente que la necesitan. El cliente de Supabase usa server-only y una clave sin prefijo NEXT_PUBLIC_.",
  },
  {
    title: "Un catálogo local detrás de una API",
    reason:
      "El JSON permite evaluar la carga asíncrona y sus estados con datos reproducibles, sin depender de otro servicio para mostrar Experiencias.",
    effect:
      "GET /api/experiences devuelve data/experiences.json. La cuadrícula recorre la respuesta y admite más registros sin parejas de IDs fijas.",
  },
];

export function TechnicalDecisions() {
  return (
    <section
      className="border-t border-foreground/20 pt-10 md:pt-12"
      aria-labelledby="decisiones"
    >
      <h2
        id="decisiones"
        className="navigation-focus-target font-display text-3xl leading-tight md:text-4xl"
        tabIndex={-1}
      >
        4. Decisiones técnicas
      </h2>
      <p className="mt-5 max-w-[72ch] text-base leading-relaxed text-secondary md:text-lg">
        Prioricé que otra persona pudiera entender el código y ampliarlo. Estos
        criterios guiaron la implementación y las revisiones, incluso cuando
        suponían escribir más líneas.
      </p>

      <table className="mt-8 w-full table-fixed border-collapse text-left text-sm leading-relaxed md:text-base">
        <caption className="sr-only">
          Decisiones de implementación, sus motivos y su efecto en el código
        </caption>
        <thead>
          <tr className="border-b border-foreground/30">
            <th
              className="w-[34%] pb-4 pr-4 font-semibold md:w-[30%] md:pr-8"
              scope="col"
            >
              Decisión
            </th>
            <th className="pb-4 font-semibold" scope="col">
              Motivo y efecto
            </th>
          </tr>
        </thead>
        <tbody>
          {decisions.map(({ title, reason, effect }) => (
            <tr key={title} className="border-b border-foreground/20">
              <th
                className="py-6 pr-4 align-top font-semibold md:pr-8"
                scope="row"
              >
                {title}
              </th>
              <td className="py-6 align-top text-secondary">
                <p>{reason}</p>
                <p className="mt-3">
                  <span className="font-medium text-foreground">
                    En el código:{" "}
                  </span>
                  {effect}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
