# ROCK EXPERIENCE

Campaña ficticia desarrollada para la prueba técnica de Rock The Agency. Incluye una landing responsive, seis experiencias, una sección de Beneficios y un formulario que guarda solicitudes en Supabase PostgreSQL cuando se configura la conexión.

**Demo desplegada:** [rock-experience-ten.vercel.app](https://rock-experience-ten.vercel.app/).

Después del hero, una introducción explica que se trata de una prueba técnica y enlaza a [**Cómo funciona**](https://rock-experience-ten.vercel.app/arquitectura) y [**Sobre la prueba**](https://rock-experience-ten.vercel.app/proyecto). Ambos accesos también están en el footer.

### Qué incluye la aplicación

| Ruta | Contenido |
| --- | --- |
| `/` | Hero, introducción de la prueba, catálogo dinámico de Experiencias, Beneficios, formulario de participación y footer. |
| `/experiencias` | Página general con portada, navegación entre las seis propuestas, bloques editoriales y acceso al formulario de la landing. Todas las tarjetas de inicio enlazan aquí. |
| `/proyecto` | Cómo ejecutar el proyecto, tecnologías, estructura, decisiones, mejoras pendientes y uso de IA. |
| `/arquitectura` | Explicación de los flujos de datos y un diagrama interactivo de Archify. |
| `/demo/submissions/[id]` | Consulta de una solicitud persistida, con correo y teléfono parcialmente ocultos. Requiere Supabase configurado. |

La identidad visual combina fotografía de concierto, fondos oscuros con textura, tarjetas que simulan fotografías desgastadas, dos pases rojos para Beneficios y un formulario con apariencia de acreditación. Beneficios invita a explorar las experiencias y a completar el formulario; los pases son parte de la presentación de la campaña ficticia.

## 1. Cómo ejecutar el proyecto

Utiliza **Node.js 24 y pnpm 11.17.0**, el entorno con el que se verificó el proyecto. La versión de pnpm está fijada en [package.json](package.json); [pnpm-lock.yaml](pnpm-lock.yaml) conserva las versiones resueltas de las dependencias. Las pruebas importan los schemas TypeScript directamente mediante el soporte de Node.js.

Si no tienes pnpm, puedes instalar la versión del proyecto con `npm install --global pnpm@11.17.0`.

```bash
git clone https://github.com/erikbonifaz/rock-experience.git
cd rock-experience
pnpm install --frozen-lockfile
pnpm dev
```

Abre `http://localhost:3000/`. La landing, el catálogo, `/experiencias`, `/proyecto` y `/arquitectura` pueden consultarse sin configurar la base de datos. Guardar y consultar solicitudes sí requiere la configuración siguiente.

### Formulario y persistencia

1. Crea un proyecto en Supabase.
2. Ejecuta [supabase/contact_submissions.sql](supabase/contact_submissions.sql) en su SQL Editor.
3. Copia [.env.example](.env.example) a `.env.local` y completa las variables del servidor:

```env
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

4. Reinicia el servidor de desarrollo y prueba un envío real.

La clave es exclusiva del servidor: no utiliza el prefijo `NEXT_PUBLIC_`, `.env.local` está excluido de Git y las respuestas de la API no incluyen credenciales. El cliente está protegido con `server-only`. Para desplegar en Vercel, configura las mismas variables en el entorno del proyecto antes del despliegue.

El navegador envía los datos a `POST /api/contact`. El endpoint vuelve a validarlos con `participationSchema`, inserta los valores validados en `contact_submissions` y responde con el ID persistido y un código como `RX-0042`. Sin las variables o la tabla configuradas, el envío falla y el formulario conserva los campos para volver a intentarlo.

La tabla tiene RLS activado, no define políticas públicas y revoca los permisos de `anon` y `authenticated`. El cliente de servidor utiliza la clave de servicio para escribir y consultar el registro solicitado.

Después de un envío correcto, `/demo/submissions/[id]` permite consultar ese registro. La ruta no tiene autenticación: oculta parte del correo y del teléfono, pero muestra nombre, empresa y mensaje. Tiene metadatos `noindex`, que tampoco restringen el acceso. Es una demostración; debe incorporarse autorización antes de utilizar datos reales.

### Comandos de comprobación y producción

```bash
pnpm lint       # Analizar el código con ESLint
pnpm typecheck  # Comprobar los tipos sin compilar
pnpm test       # Probar los contratos de datos y las validaciones
pnpm build      # Compilar para producción y comprobar los tipos
pnpm start      # Ejecutar la compilación de producción
```

`pnpm start` requiere haber ejecutado `pnpm build`. Las fuentes se cargan mediante `next/font/google`; la compilación puede necesitar internet para descargarlas.

`pnpm test` ejecuta actualmente **11 pruebas** en [tests/validation.test.mjs](tests/validation.test.mjs). Cubren el catálogo, las reglas y normalización del formulario, y el contrato de confirmación. No envían solicitudes a Supabase ni sustituyen las pruebas del flujo en un navegador.

## 2. Tecnologías utilizadas

| Tecnología | Uso |
| --- | --- |
| Next.js 16.3.8 y React 19.2.8 | App Router, renderizado y endpoints dentro del mismo proyecto. |
| TypeScript 5.9.3 | Contratos explícitos, tipos inferidos desde schemas y comprobación estática. |
| Tailwind CSS 4.3.3, CSS global y CSS Modules | Composición responsive, tokens visuales, texturas, marcos y efectos de superficie. |
| React Hook Form 7.89.0, Zod 4.6.5 y `@hookform/resolvers` 5.9.1 | Estado del formulario y validación compartida con el servidor. |
| Supabase PostgreSQL y `@supabase/supabase-js` 2.117.2 | Persistencia mediante un cliente exclusivo del servidor. |
| ESLint 9.39.5 y pnpm 11.17.0 | Análisis estático y gestión de dependencias con un lockfile versionado. |
| Runner de pruebas de Node.js | Pruebas de contratos y validación, sin instalar otro framework. |
| Archify 3.0.1 | Herramienta externa para generar el HTML del mapa; no es una dependencia instalada de la aplicación. |

Las versiones de los paquetes corresponden al lockfile. Anton y Space Grotesk se integran con `next/font/google`; las fotografías se presentan con `next/image`.

## 3. Estructura general

| Carpeta o archivo | Responsabilidad |
| --- | --- |
| `app/` | Rutas, Route Handlers, layout, estilos globales y composición de páginas. |
| `components/layout/` | Encabezado, navegación y footer compartidos. |
| `features/hero/` | Hero de la landing y su módulo CSS. |
| `features/experiences/` | Tarjetas de inicio, hook de carga, schemas, tipos, configuración visual y página editorial de experiencias. |
| `features/contact/` | Schemas y tipos inferidos, hook del formulario, props, acreditación y estados de participación. |
| `features/benefits/` | Contenido, tipos, dos pases y estilos de Beneficios. |
| `features/project/` | Introducción de la prueba en la landing y contenido y componentes de `/proyecto`. |
| `lib/supabase/` | Cliente protegido con `server-only` y contratos de la base de datos. |
| `data/` | Catálogo JSON y enlaces de navegación compartidos. |
| `types/navigation.ts` | Contratos de la navegación, separados de sus componentes. |
| `tests/` | Pruebas de validación con el runner de Node.js, sin otra dependencia. |
| `supabase/contact_submissions.sql` | Tabla de solicitudes, RLS y permisos. |
| `public/` | Fotografías, texturas, SVG del QR y código de barras, y visor HTML de Archify. |
| `docs/` | Requisitos de la prueba, decisiones, procedencia de recursos, auditoría y fuente editable del diagrama. |

Las funcionalidades reúnen su UI y lógica relacionada. Los hooks viven en `hooks/`, fuera de `components/`. Hero, Experiencias, Beneficios y Proyecto usan carpetas de componentes; Contacto conserva sus componentes directamente en la raíz del feature. Los contratos de presentación y las props se agrupan en `types.ts`, sin crear un archivo por interfaz.

En Contacto, [schema.ts](features/contact/schema.ts) contiene `participationSchema`, `submissionConfirmationSchema`, sus tipos inferidos (`ParticipationFormValues` y `SubmissionConfirmation`) y `participationDefaultValues`. [types.ts](features/contact/types.ts) conserva únicamente las props y consume el tipo de confirmación. La dirección es **schemas → tipos inferidos → hook y props**: `schema.ts` solo importa Zod y no depende de `types.ts`. En Experiencias, `Experience` se infiere del schema en su `types.ts`, junto al estado de carga y los contratos de presentación.

La [auditoría de simplicidad y guía de entrevista](docs/auditoria-y-entrevista.md) explica el refactor, qué se conservó y cómo recorrer el proyecto antes de la evaluación.

`AGENTS.md` registra las convenciones del proyecto; `.agents/` y `skills-lock.json` contienen las guías de React y Next.js utilizadas. `.impeccable/` conserva las preferencias y los contratos del proceso de diseño.

## 4. Decisiones técnicas relevantes

Para esta prueba intenté mantener una estructura que fuera fácil de entender sin añadir más capas de las necesarias para una landing de este tamaño.

**Organización por funcionalidad.**

Separé Hero, Experiencias, Contacto, Beneficios y la documentación de la prueba por funcionalidad. `app/` queda para rutas, composición y endpoints. Los componentes tienen archivos independientes cuando representan una parte reconocible de la interfaz; los hooks concentran la interacción. Prioricé nombres explícitos y un flujo fácil de seguir sobre abstracciones añadidas solo para reducir líneas.

**Mantener en el cliente únicamente lo que necesita interacción.**

La composición de las páginas y las secciones estáticas usa Server Components. La navegación interactiva, el catálogo de inicio y el formulario tienen componentes cliente. La página general `/experiencias` lee el JSON directamente en el servidor; la landing lo obtiene por API para mostrar los estados de petición exigidos por la prueba.

**Validación en cliente y servidor con las mismas reglas.**

React Hook Form utiliza `participationSchema` para validar al salir de un campo y al enviar. `POST /api/contact` vuelve a validar con ese mismo schema antes de guardar. Nombre, correo, teléfono, mensaje y consentimiento son obligatorios; empresa puede estar vacía. El teléfono admite formato con espacios, guiones y paréntesis, con entre 8 y 15 dígitos.

El hook también valida la respuesta con `submissionConfirmationSchema`; un HTTP exitoso con un cuerpo inválido no muestra confirmación. Durante el envío se deshabilita el botón; ante un error se conservan los valores. La confirmación recibe foco y permite consultar el registro o reiniciar el formulario. Los tipos se infieren con `z.infer` para mantener el contrato junto a sus reglas.

**Supabase únicamente desde el servidor.**

Decidí añadir persistencia real para poder comprobar el flujo completo. El navegador llama al Route Handler; solo el servidor utiliza la clave de servicio. Los contratos de PostgreSQL viven en `lib/supabase/types.ts`, separados de los del formulario, porque representan la tabla y sus operaciones. El SQL activa RLS y no concede acceso directo a los roles públicos.

| Endpoint | Comportamiento |
| --- | --- |
| `GET /api/experiences` | Devuelve el catálogo JSON de seis experiencias. |
| `POST /api/contact` | Devuelve `201` con `success`, `id` y `registrationCode` al guardar; `400` ante JSON o datos inválidos; `500` ante un fallo de configuración o persistencia. |

**API local para las experiencias.**

`useExperiences` pide `/api/experiences` con `cache: "no-store"` y valida la respuesta con Zod, incluidos los IDs únicos. La UI usa condiciones y retornos tempranos para carga, error con reintento, lista vacía y tarjetas. Un único efecto gestiona la petición; un contador activa el reintento y `AbortController` cancela la carga al reintentar o desmontar. Las imágenes tienen un estado alternativo si fallan.

El detalle del refactor y sus verificaciones está en [docs/experiences-refactor.md](docs/experiences-refactor.md).

**Estilos e imágenes con responsabilidades claras.**

Utilicé Tailwind para composición, espaciado, tipografía y estados. El CSS global concentra los tokens y la navegación compartida; CSS Modules resuelve materiales, bordes desgastados y efectos cuya expresión en utilidades sería difícil de leer. Las texturas son imágenes estáticas y se reutilizan; sus nombres incluyen un hash para actualizar la caché cuando cambian.

Las tarjetas de inicio usan URLs de Picsum con IDs fijos, seleccionadas para cada propuesta. Las fotografías editoriales de `/experiencias` están guardadas localmente. La API del catálogo es local, pero las imágenes de Picsum requieren acceso al proveedor. Los orígenes y autorías están en [docs/experiencias-imagenes.md](docs/experiencias-imagenes.md); los materiales se documentan en [textura-fondo.md](docs/textura-fondo.md), [beneficios.md](docs/beneficios.md) y [participacion.md](docs/participacion.md).

**Accesibilidad y documentación del flujo.**

La aplicación incluye enlaces para saltar al contenido, etiquetas y errores asociados a los campos, foco visible, gestión del foco en la navegación y confirmación, metadatos de las páginas y alternativas para movimiento reducido. Estas medidas no equivalen a una certificación de accesibilidad.

Archify se sirve como HTML estático en un iframe de carga diferida; la explicación también está disponible en texto. El mapa está fijado a la revisión `a085519e92f7593b78453629fc7191125602e368`: documenta los recorridos, pero sus fragmentos de código corresponden a esa revisión anterior, no a los refactors actuales. La fuente y los pasos para regenerarlo están en [docs/arquitectura](docs/arquitectura/README.md).

## 5. Qué mejoraría con más tiempo

1. **Automatizar los flujos en navegador.** Ya existen pruebas de schemas y se realizaron comprobaciones asistidas de interacción. Añadir pruebas de integración para carga, reintento, cancelación, envío, foco y reinicio, además de un recorrido con Supabase en un entorno de pruebas.
2. **Preparar el formulario para un uso público.** Añadir límites de frecuencia y protección anti-spam. Restringir el acceso a la página de registros de demostración antes de utilizar datos reales.
3. **Medir y observar el comportamiento.** Incorporar seguimiento de errores de API sin datos personales, medir rendimiento y accesibilidad en el despliegue, y utilizar los resultados para priorizar las siguientes mejoras.
4. **Actualizar el mapa de arquitectura.** Regenerar el JSON, HTML y recibo de Archify con una revisión que incluya los últimos refactors y ajustar sus referencias al código.

## 6. Uso de IA y criterios de desarrollo

### Enfoque de trabajo

Utilicé Codex como herramienta de apoyo durante la implementación, revisión y comprobación del proyecto.

Las decisiones sobre estructura, comportamiento y nivel de complejidad se tomaron teniendo en cuenta los requisitos de la prueba y el tipo de producto que estaba construyendo: una landing de campaña compuesta principalmente por contenido visual, experiencias dinámicas y un formulario de participación.

Las propuestas generadas se trataron como puntos de partida. Antes de incorporarlas revisé si resolvían una necesidad real, si eran proporcionales al tamaño del proyecto y si podía justificar claramente la decisión.

### Criterios que guiaron la implementación

Además del resultado visual, busqué que la landing estuviera correctamente construida desde el punto de vista técnico.

Los principales criterios fueron:

- **Semántica y estructura.** Mantener una jerarquía clara de contenido, un único `h1`, secciones reconocibles y elementos HTML adecuados para navegación, acciones y formularios.

- **Responsive como parte del diseño.** No limitarme a reducir tamaños, sino adaptar composiciones cuando el espacio cambia. Algunos elementos pueden reorganizarse, simplificarse o desaparecer en móvil si son puramente decorativos.

- **Accesibilidad.** Mantener labels asociados a los campos, navegación por teclado, foco visible, mensajes de error relacionados con sus controles y feedback comprensible durante carga, error y confirmación.

- **Performance.** Evitar JavaScript o dependencias innecesarias, optimizar imágenes y fuentes y utilizar componentes cliente únicamente donde existe interacción real.

- **SEO básico.** Mantener metadata, Open Graph, estructura de headings, contenido semántico e imágenes con textos alternativos adecuados.

- **Estados de interfaz completos.** Los datos dinámicos contemplan `loading`, `error`, vacío y éxito. El formulario también comunica envío pendiente, errores y confirmación.

- **Validación en los límites correctos.** La validación del navegador mejora la experiencia del usuario, mientras que el servidor vuelve a validar antes de persistir información.

- **Seguridad de servidor.** Las credenciales de Supabase permanecen fuera del cliente y la persistencia se realiza únicamente desde el servidor.

- **Complejidad proporcional al proyecto.** Evité añadir capas o patrones que no resolvieran un problema real en una landing de este tamaño.

### Criterios de código

Durante las revisiones presté especial atención a que el código pudiera seguirse con facilidad.

Para ello utilicé los siguientes criterios:

- **Evitar complejidad innecesaria.** Si una solución más directa resolvía correctamente el mismo problema, preferí esa alternativa antes que añadir más conceptos.

- **Mantener responsabilidades claras sin fragmentar en exceso.** Separé componentes y hooks cuando tenían una responsabilidad reconocible, pero evité crear archivos únicamente para reducir el tamaño de otro.

- **Utilizar APIs de React cuando existía una necesidad concreta.** Revisé especialmente `useEffect`, `useRef`, `useCallback`, `useMemo` y estados adicionales para no introducirlos únicamente como optimización preventiva.

- **Evitar abstracciones prematuras.** No añadí `services`, `repositories`, componentes genéricos o helpers cuando existía un único caso de uso y la abstracción no mejoraba realmente la lectura.

- **Mantener los flujos lineales.** Preferí `async/await`, retornos tempranos, nombres descriptivos y estados explícitos frente a lógica distribuida entre demasiadas funciones.

- **Utilizar Zod como fuente de verdad para contratos de datos.** Esto permite validar valores en runtime y derivar tipos de TypeScript sin mantener definiciones equivalentes por separado.

- **Eliminar duplicación real, no aplicar DRY de forma automática.** Código parecido no siempre necesita una abstracción. La extracción solo tiene sentido cuando existe reutilización real o cuando mejora las responsabilidades.

- **Colocar la lógica donde resulte natural.** Evité mover comportamiento a hooks, utilidades o archivos compartidos cuando podía comprenderse mejor cerca de donde se utiliza.

- **Evitar optimizaciones prematuras.** No introduje memoización, caching adicional o arquitectura preventiva sin una necesidad observable.

El objetivo no fue reducir la cantidad de líneas, sino reducir la cantidad de conceptos necesarios para entender cada flujo.

### Ejemplo: simplificación de la carga de Experiencias

Un caso concreto fue el hook encargado de obtener las Experiencias.

Una primera implementación distribuía un fetch relativamente sencillo entre varios helpers de validación, un callback memoizado y una referencia compartida para controlar la petición.

La implementación funcionaba, pero hacía más difícil seguir el recorrido completo.

Preferí simplificarlo para que pudiera leerse de arriba hacia abajo:

1. realizar la petición;
2. comprobar el estado HTTP;
3. leer el JSON;
4. validar la respuesta con Zod;
5. actualizar `loading`, `error` o `success`;
6. cancelar la petición desde el cleanup cuando deja de ser necesaria.

Se mantuvieron `AbortController` y la validación porque solucionan problemas concretos. Se eliminaron las capas que no aportaban suficiente claridad.

### Ejemplo: validación cliente y servidor

Simplificar tampoco significó eliminar cualquier comportamiento aparentemente repetido.

El formulario valida los datos en el navegador mediante React Hook Form y Zod, pero el endpoint vuelve a validar la petición antes de persistirla.

Ambas validaciones utilizan las mismas reglas, pero cumplen responsabilidades diferentes:

cliente\
→ feedback inmediato y mejor experiencia de usuario

servidor\
→ protección del límite de entrada

Supabase\
→ persistencia después de validar

El endpoint no puede asumir que todas las peticiones provienen del formulario del navegador, por lo que decidí conservar ambas validaciones.

En este caso la duplicación de ejecución es intencional; lo que se evita duplicar son las reglas.

### Ejemplo: formulario explícito frente a una abstracción genérica

Los campos del formulario comparten bastante estructura visual, por lo que era posible crear un componente configurable para generar todos los controles.

Preferí mantenerlos explícitos.

Son pocos campos y tienen diferencias reales de `type`, `autocomplete`, validación, mensajes y atributos de accesibilidad.

Un componente genérico habría reducido líneas, pero habría obligado a revisar una configuración y una abstracción adicional para entender algo que actualmente puede leerse directamente.

En este caso prioricé claridad sobre reducir duplicación visual.

### Cómo utilicé Codex

Codex se utilizó principalmente para:

- acelerar implementación de cambios con requisitos previamente definidos;
- generar alternativas durante refactors;
- detectar posibles problemas de organización o complejidad;
- revisar React y Next.js con `vercel-react-best-practices`;
- revisar aspectos visuales con Impeccable;
- apoyar comprobaciones de lint, tipos, build y navegador;
- generar documentación auxiliar y el mapa de arquitectura.

Las propuestas no se incorporaron automáticamente.

Cuando una alternativa introducía más complejidad de la necesaria, preferí simplificarla. Cuando una parte aparentemente duplicada resolvía una responsabilidad diferente, decidí conservarla.

### Verificación

Los cambios se comprobaron mediante:

- ESLint;
- TypeScript;
- build de producción;
- pruebas automatizadas;
- revisión en navegador;
- estados de carga, error y éxito;
- pruebas responsive en diferentes tamaños de pantalla.

No consideré una implementación terminada únicamente porque compilara. También revisé que mantuviera el comportamiento esperado, que los flujos pudieran completarse correctamente y que los cambios no introdujeran regresiones visuales o funcionales.
