const decisions = [
  {
    title: "Organización por funcionalidad",
    reason:
      "Para esta prueba intenté mantener una estructura fácil de entender sin añadir más capas de las necesarias para una landing de este tamaño.",
    effect:
      "Separé las partes principales en features/experiences, features/contact y features/benefits. app/ queda principalmente para rutas, composición y endpoints; cada funcionalidad reúne su UI, tipos y lógica relacionada.",
  },
  {
    title: "Mantener en el cliente únicamente lo que necesita interacción",
    reason:
      "Con App Router preferí no convertir toda la página en un Client Component. La intención fue aprovechar el modelo de Next.js sin complicar demasiado una landing pequeña.",
    effect:
      "En Experiencias la parte estática puede renderizarse en servidor; el estado de petición, carga, error y reintento se concentra en el componente y hook que realmente lo necesitan.",
  },
  {
    title: "Validación en cliente y servidor con las mismas reglas",
    reason:
      "React Hook Form y Zod dan feedback inmediato, pero la validación del navegador no es suficiente por sí sola.",
    effect:
      "POST /api/contact vuelve a validar la información antes de guardarla con el mismo participationSchema utilizado en el formulario.",
  },
  {
    title: "Supabase únicamente desde el servidor",
    reason:
      "Aunque no era obligatorio, conecté el formulario a Supabase para que el flujo pudiera comprobarse de principio a fin.",
    effect:
      "La service_role no se expone al navegador. El frontend envía la solicitud al Route Handler de Next.js, que escribe en la base de datos; la tabla tiene RLS habilitado y no concede acceso directo a los roles públicos.",
  },
  {
    title: "API local para las experiencias",
    reason:
      "Exponer el JSON proporcionado mediante una API permite implementar los estados de carga, error y éxito sin depender de un servicio externo.",
    effect:
      "Los datos parten del JSON y /api/experiences los entrega al componente. El hook cancela una petición anterior cuando se inicia una nueva.",
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
        Para esta prueba intenté mantener una estructura que fuera fácil de
        entender sin añadir más capas de las necesarias para una landing de
        este tamaño.
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
