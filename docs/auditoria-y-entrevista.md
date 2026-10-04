# Auditoría de simplicidad y guía de entrevista

Fecha: 4 de octubre de 2026. Referencia previa: `d11de18`.

El objetivo fue hacer el código más fácil de leer y explicar, conservando la campaña, sus rutas, sus estilos y sus estados funcionales. Se revisaron los 56 archivos versionados de `app/`, `components/`, `features/` y `lib/`, además de configuración, datos, SQL, documentación y requisitos originales de la prueba. Los recursos generados de Archify y las evidencias de diseño se inspeccionaron como artefactos; no se refactorizó el código de terceros del diagrama.

## 1. Auditoría previa

| Prioridad | Archivo | Problema y por qué dificulta la lectura | Simplificación aplicada |
| --- | --- | --- | --- |
| HIGH | `features/experiences/hooks/use-experiences.ts` | La carga estaba repartida entre cuatro funciones de validación/petición, un callback memoizado y una referencia al controlador. Para explicar un fetch había que seguir varias capas. | Schema Zod separado y un efecto con `async/await`, manejo de error y cleanup. El reintento actualiza el estado de carga y un contador que vuelve a ejecutar el efecto. |
| HIGH | `features/project/components/project-documentation.tsx` | El archivo de 357 líneas combinaba contenido, instrucciones de instalación y composición de la página. | Contenido en `features/project/content.ts` e instrucciones en `project-setup.tsx`. La composición queda en aproximadamente 210 líneas, sin crear un componente por cada título o párrafo. |
| MEDIUM | `lib/supabase/server.ts` | Los contratos de la tabla se derivaban del formulario mediante `Omit`, acceso al tipo de una propiedad e intersecciones, dentro de la función de conexión. | Contrato de inserción explícito en `lib/supabase/types.ts`. El cliente solo configura la conexión y su protección de servidor. |
| MEDIUM | `features/contact/hooks/use-participation-form.ts` y `utils/is-submission-confirmation.ts` | El hook transportaba una referencia de UI y validaba la respuesta mediante otro archivo con un cast manual. | Schema de confirmación y foco gestionado dentro de `ParticipationConfirmation`. Se elimina el helper manual y la prop de referencia. |
| MEDIUM | `components/layout/navigation-items.tsx`, `mobile-navigation.tsx` y `experiences-error.tsx` | Datos y contratos estaban mezclados con UI, en contra de la organización acordada. Además, el seguimiento de cuatro secciones creaba un Map adicional. | Enlaces en `data/navigation.ts`, contratos globales en `types/navigation.ts` y contratos de Experiencias en sus propios tipos. La sección activa se encuentra en la lista ya existente. |
| LOW | `app/globals.css` y recursos iniciales en `public/` | Hay candidatos a limpieza, como utilidades globales sin consumidores y SVG del starter. Su eliminación no cambia un flujo importante. | Sin cambios en este refactor. |
| LOW | Props de presentación de imagen y skeleton | Reciben el contrato visual de una tarjeta aunque cada vista utilice solo una parte. Es una dependencia pequeña y explícita. | Se conserva para evitar una reorganización de poco valor. |

No se encontraron `useMemo`, `React.memo`, reducers, factories, repositories ni services en el código de aplicación. No se añadieron esos patrones. La comprobación adicional de TypeScript con `--noUnusedLocals --noUnusedParameters` pasó.

## 2. Qué se simplificó

### Experiencias

El recorrido se lee de arriba hacia abajo: petición HTTP, comprobación de estado, lectura de JSON, validación y actualización de la UI. El schema exige IDs enteros, positivos y seguros, campos de texto con contenido e identificadores únicos. Acepta una lista vacía y conserva el orden y los textos del catálogo.

`retryCount` tiene una función concreta: iniciar una nueva ejecución del mismo efecto. El manejador de reintento pone la vista en carga; React ejecuta el cleanup anterior antes de iniciar el siguiente efecto. El controlador pertenece a esa ejecución y no necesita almacenarse en una referencia compartida. Las comprobaciones de `signal.aborted` evitan que una respuesta cancelada actualice el estado.

El estado sigue siendo una unión de `loading`, `error` y `success`. Es más útil que tres booleanos porque expresa estados válidos y evita combinaciones como carga y éxito simultáneos. La lista vacía se deriva de los datos, sin otro estado.

### Formulario

React Hook Form mantiene el registro de campos, errores y estado de envío. El hook se ocupa de enviar, manejar el error, guardar una confirmación válida y reiniciar. La vista de confirmación enfoca su propio contenedor cuando aparece.

La validación anterior de respuesta permitía un ID cero o negativo y un código vacío. El schema los rechaza: una respuesta HTTP exitosa con datos inválidos muestra el mismo mensaje de recuperación y conserva los campos. Esta es la única corrección intencional de comportamiento; el contrato correcto del endpoint permanece igual.

Los tipos del catálogo, formulario y confirmación se infieren de los schemas con `z.infer`. No hay que mantener una interfaz y unas reglas independientes para el mismo contrato.

### Documentación y navegación

Los datos de la página del proyecto pueden editarse sin recorrer su JSX. El bloque de ejecución es un componente con una responsabilidad completa, mientras que la página sigue mostrando directamente su estructura.

Los enlaces compartidos dejan de importar un archivo que también contiene UI. Los contratos de navegación permanecen fuera de `components/`. El comportamiento de Escape, cierre del menú, foco de los encabezados y sección activa se conserva.

## 3. Qué se decidió conservar

- **AbortController y cleanup:** cancelar una petición al salir o reintentar es una necesidad real. Reducir conceptos no justifica eliminar esa protección.
- **Los dos hooks existentes:** reúnen dos flujos completos con estado, errores e interacción. Evitan mezclar esa lógica con el JSX; no son wrappers de una línea.
- **React Hook Form y Zod:** ya estaban instalados y resuelven validación, errores y envío pendiente. No se añadieron dependencias.
- **Validación en cliente y servidor:** comparten reglas, pero protegen límites diferentes. La validación del navegador no sustituye la del endpoint.
- **Refs y efectos de foco:** el menú móvil debe devolver el foco al botón con Escape y la confirmación debe anunciarse al aparecer.
- **IntersectionObserver:** implementa el seguimiento de sección del encabezado. Se conservaron sus dos efectos independientes y su desconexión.
- **Campos explícitos del formulario:** un componente genérico con configuración habría ocultado labels, tipos, autocompletado y relaciones ARIA de cada campo.
- **Componentes de tarjeta, imagen, carga y error:** tienen responsabilidades claras. La imagen necesita manejar su propio fallo y la carga/error son vistas distintas.
- **Configuración visual compartida de tarjetas y skeletons:** conserva cuadrícula, alturas e inclinaciones consistentes entre estados.
- **CSS Modules de efectos gráficos:** degradados, pseudoelementos, máscaras y border-image siguen siendo más claros en CSS que en cadenas extensas de variantes Tailwind.
- **Estructura Database del SDK:** `Row`, `Insert` y `Update` sirven para comprobar las consultas e inserciones. Su forma responde a la [API de tipos de Supabase](https://supabase.com/docs/reference/javascript/typescript-support), no a una arquitectura adicional del proyecto.
- **Route Handlers actuales:** las rutas ya son lineales y pequeñas. No se crearon servicios, adapters ni una capa de repositorios.
- **HTML generado de Archify:** es un artefacto de una herramienta externa y documenta una revisión fijada. No debe estudiarse como código escrito a mano de esta aplicación.

## 4. Verificaciones

Pasaron ESLint, TypeScript, compilación de producción y once pruebas con el runner de Node.js. Se añadieron `pnpm typecheck` y `pnpm test`; las pruebas verifican los límites de los contratos y no requieren una dependencia nueva.

Los binarios utilizados en esta sesión fueron:

```bash
node node_modules/eslint/bin/eslint.js
node node_modules/typescript/bin/tsc --noEmit
node node_modules/typescript/bin/tsc --noEmit --noUnusedLocals --noUnusedParameters
node --test tests/*.test.mjs
node node_modules/next/dist/bin/next build
git diff --check
```

La compilación y el servidor de producción local se ejecutaron con `NODE_OPTIONS=--use-system-ca`, para usar los certificados de confianza del sistema. Node 24 detecta el formato ESM de los schemas al ejecutar las pruebas; emite un aviso de formato de módulo, pero las once pruebas pasan. No se cambió el modo de módulos del proyecto solo para eliminar ese aviso.

| Comprobación | Resultado |
| --- | --- |
| Catálogo: carga, error HTTP, reintento y éxito | El skeleton aparece, el error permite reintentar y se recuperan las seis tarjetas. |
| Catálogo: vacío, respuesta malformada e IDs duplicados | Mensaje vacío o vista de error, según corresponde. |
| Cancelación al navegar | El proxy local registró una petición y una respuesta cancelada. Al regresar, aparecen las seis tarjetas. |
| Formulario vacío | Cinco errores y foco en Nombre. |
| Envío pendiente | `aria-busy=true`, texto «Enviando...» y botón deshabilitado. |
| Error HTTP del formulario | Mensaje de recuperación, valores conservados y botón habilitado de nuevo. |
| Confirmación inválida | Se conserva el formulario y aparece el mensaje de recuperación. |
| Confirmación válida y reinicio | Foco en la confirmación, código `RX-0042`, enlace de demostración y posterior limpieza de campos/consentimiento. |
| Menú móvil | Escape devuelve el foco al botón; un enlace cierra el menú y enfoca el encabezado de su sección. |
| Responsive | A 375, 768 y 1440 px hay seis tarjetas, un h1 y ningún desbordamiento horizontal. |
| Endpoint real de contacto | Respuestas 400 para JSON ilegible y datos inválidos, sin insertar registros. |
| Supabase | Consulta de lectura a un ID inexistente: 404, comprobando el cliente de servidor sin escribir ni mostrar datos personales. |
| Conservación visual | Los cinco archivos CSS son idénticos a la referencia. El HTML del main de inicio, proyecto, experiencias y arquitectura coincide tras normalizar comentarios y espacios entre etiquetas. |

La prueba de envío exitoso utilizó respuestas simuladas mediante un proxy local que intercepta todos los POST del formulario. En esta auditoría no se repitió una inserción real en Supabase. Tampoco se midieron Core Web Vitals ni se probaron dispositivos físicos.

## 5. Archivos para estudiar antes de la entrevista

Leer en este orden permite seguir dos recorridos completos sin saltar entre archivos arbitrarios:

1. [app/page.tsx](../app/page.tsx): composición y orden de las secciones.
2. [app/layout.tsx](../app/layout.tsx): idioma, fuentes, metadata y estilos globales.
3. [experiences-content.tsx](../features/experiences/components/experiences-content.tsx): carga, error, vacío y éxito mediante retornos tempranos.
4. [use-experiences.ts](../features/experiences/hooks/use-experiences.ts): petición, reintento y cancelación.
5. [schema.ts de Experiencias](../features/experiences/schema.ts) y [GET /api/experiences](../app/api/experiences/route.ts): contrato y fuente de datos.
6. [participation-form.tsx](../features/contact/participation-form.tsx): campos, labels, errores, envío pendiente y vista de confirmación.
7. [use-participation-form.ts](../features/contact/hooks/use-participation-form.ts) y [schema.ts de Contacto](../features/contact/schema.ts): envío, validación, respuesta y reinicio.
8. [POST /api/contact](../app/api/contact/route.ts): validación del servidor, persistencia y estados HTTP.
9. [cliente de Supabase](../lib/supabase/server.ts), [tipos](../lib/supabase/types.ts) y [SQL](../supabase/contact_submissions.sql): frontera de servidor, contrato de la tabla y permisos.
10. [site-header.tsx](../components/layout/site-header.tsx) y [participation-confirmation.tsx](../features/contact/participation-confirmation.tsx): efectos y referencias que sí tienen un propósito.

## 6. Explicación de arquitectura en 2–3 minutos

> ROCK EXPERIENCE es una landing para una campaña ficticia. La organicé por funcionalidad porque cada parte tiene un propósito reconocible: experiencias, beneficios, contacto y documentación. Las rutas están en app y componen esas partes. No añadí servicios o repositorios porque, con un catálogo local y una tabla de solicitudes, esas capas no resolvían un problema adicional.
>
> Next.js renderiza en el servidor los bloques estáticos, como el hero y los beneficios. Utilizo componentes cliente donde hay interacción: navegación, carga del catálogo y formulario. Esa separación conserva la estructura semántica y evita convertir toda la página en código interactivo.
>
> El catálogo parte del JSON de la prueba. Un endpoint GET lo entrega y un hook realiza la petición desde el navegador. El schema valida la respuesta antes de renderizar. La vista distingue carga, error, vacío y éxito. Si hay un error, el usuario puede reintentar; si abandona la página, el cleanup cancela la petición. Elegí un efecto con async/await porque permite explicar el recorrido en un solo lugar.
>
> Para participar, React Hook Form mantiene los campos y Zod define las reglas. Primero valido en el navegador para dar feedback inmediato. El servidor vuelve a validar porque una petición puede enviarse sin pasar por ese formulario. Solo los datos válidos llegan a Supabase. La clave de servicio permanece en el servidor y la tabla no concede acceso directo a los roles públicos.
>
> Durante el envío deshabilito el botón y comunico el estado. Si falla, conservo lo escrito. Si la respuesta contiene una confirmación válida, la muestro y llevo el foco allí. También cuidé labels, teclado, headings, imágenes optimizadas y adaptación a móvil.
>
> Utilicé Codex como apoyo para implementar y comprobar propuestas. Yo fijé el criterio de simplicidad y pedí revisar las decisiones. El refactor se validó con lint, tipos, build, pruebas de contratos y comprobaciones en navegador. Para un uso real todavía definiría autorización de los registros, protección anti-spam y pruebas automáticas del flujo completo.

## 7. Preguntas técnicas probables

- **¿Por qué un endpoint para un JSON local?** Para demostrar carga dinámica y los estados requeridos con una fuente predecible. No implica que el JSON sea una base de datos.
- **¿Por qué no pedir las experiencias en el servidor?** La página general sí importa el catálogo en servidor. La landing conserva el flujo interactivo requerido por la prueba y sus estados de carga/error/reintento.
- **¿Para qué sirve el contador del hook?** Vuelve a ejecutar el efecto al reintentar; el efecto anterior limpia su petición. No almacena otra copia de los datos.
- **¿Por qué comprobar `response.ok` y después validar el JSON?** El estado HTTP indica el resultado de transporte; el schema comprueba que el contenido cumple el contrato.
- **¿Por qué validar dos veces el formulario?** La validación cliente mejora UX y la del servidor protege la entrada de datos.
- **¿Por qué no hacer un componente genérico para todos los campos?** Son seis controles con diferencias concretas. Su HTML explícito hace visibles labels, tipos, atributos y mensajes.
- **¿Para qué conservar refs y efectos?** Para foco, listeners y sincronización con el navegador. Se retiraron los que solo sostenían una organización innecesariamente complicada.
- **¿Qué aporta TypeScript si ya existe Zod?** TypeScript comprueba el código durante desarrollo; Zod comprueba valores que llegan en ejecución. Inferir tipos conecta ambas partes.
- **¿Cómo proteges las credenciales y los datos?** Variables de entorno exclusivas del servidor, `server-only` y permisos de tabla. La ruta de demostración todavía necesita autorización antes de utilizar información real.
- **¿Qué hace loading/error/success accesible?** Mensajes comprensibles, estados ARIA, botón real para reintentar, foco en error/confirmación y campos asociados a sus mensajes.
- **¿Qué optimizaciones usaste?** Imágenes con Next Image, tamaños adecuados, carga diferida salvo imágenes principales, fuentes de Next y componentes servidor cuando no hay interacción. No se afirma un resultado de Core Web Vitals sin medirlo.
- **¿Qué revisarías del componente de debugging de la prueba?** Label, tipo email, validación, form y button semánticos, Content-Type, `response.ok`, try/catch, estado de envío, feedback accesible y protección de servidor. Un `div` clicable y un alert incondicional no resuelven ese flujo.

## 8. Pendientes y complejidad restante

La complejidad restante de la UI está principalmente en las clases responsive del hero y del formulario y en los efectos gráficos. Responde a decisiones visuales ya aprobadas; simplificarla sin cambiar el diseño requiere un trabajo específico, no sustituirla por un sistema genérico.

`participation-form.tsx` sigue siendo relativamente largo porque muestra todos sus controles de forma explícita. La ruta de arquitectura también contiene bastante JSX estático. Ambos archivos se pueden leer secuencialmente y no justifican fragmentarlos más por su longitud.

La página `/demo/submissions/[id]` consulta registros por ID sin autorización y muestra nombre, empresa y mensaje. Ocultar parcialmente email/teléfono y marcarla `noindex` no controla el acceso. Esta limitación se conserva y debe resolverse antes de usar datos reales. El formulario público también mantiene pendientes límites de frecuencia y protección anti-spam.

El diagrama de Archify enlaza una revisión histórica fijada. Sigue siendo útil para los recorridos generales, pero sus fragmentos de código no reflejan este refactor hasta regenerarlo con una nueva revisión. Las evidencias y mockups de `.impeccable/` son material de trabajo y no código necesario para explicar el runtime.
