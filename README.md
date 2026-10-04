# ROCK EXPERIENCE

Campaña ficticia desarrollada para la prueba técnica de Rock The Agency. Presenta seis experiencias cargadas desde una API local, Beneficios y un formulario de participación preparado para guardar solicitudes en Supabase PostgreSQL.

**Demo desplegada:** [rock-experience-ten.vercel.app](https://rock-experience-ten.vercel.app/).

La explicación para el evaluador está en [**Sobre la prueba**](https://rock-experience-ten.vercel.app/proyecto), enlazada desde el footer. [**Arquitectura**](https://rock-experience-ten.vercel.app/arquitectura) documenta los recorridos de Experiencias y del formulario con texto y un diagrama interactivo de Archify. Su fuente y las instrucciones para regenerarlo están en [docs/arquitectura](docs/arquitectura/README.md).

## 1. Cómo ejecutar el proyecto

Entorno de referencia comprobado: **Node.js 24 y pnpm 11.17.0**. La versión de pnpm está indicada en `package.json`; Node.js 20 no es compatible con pnpm 11 según su [tabla de compatibilidad](https://pnpm.io/installation#compatibility).

Si no tienes pnpm, puedes instalar la versión del proyecto con `npm install --global pnpm@11.17.0`.

```bash
git clone https://github.com/erikbonifaz/rock-experience.git
cd rock-experience
pnpm install --frozen-lockfile
pnpm dev
```

La versión desplegada está disponible en [rock-experience-ten.vercel.app](https://rock-experience-ten.vercel.app/). Para probar la instancia local, abre `http://localhost:3000/`. La landing, el catálogo y las páginas de documentación pueden consultarse sin configurar la base de datos. Guardar una solicitud sí requiere la configuración siguiente.

### Formulario y persistencia

1. Crea un proyecto en Supabase.
2. Ejecuta [supabase/contact_submissions.sql](supabase/contact_submissions.sql) en su SQL Editor.
3. Copia `.env.example` a `.env.local` y completa las variables del servidor:

```env
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

4. Reinicia el servidor de desarrollo y prueba un envío real.

La clave es exclusiva del servidor: no utiliza el prefijo `NEXT_PUBLIC_`, no se incluye en Git y no se expone en respuestas al navegador. Para desplegar, configura las mismas variables en el entorno del proveedor; en Vercel, se añaden en **Project Settings → Environment Variables** y requieren un nuevo despliegue.

El navegador envía los datos a `POST /api/contact`. El endpoint vuelve a validarlos con `participationSchema`, inserta únicamente los valores validados en `contact_submissions` y responde con el ID persistido y un código `RX-####`.

La tabla tiene RLS activado, no define políticas públicas y revoca los permisos de `anon` y `authenticated`. El cliente de servidor utiliza la clave de servicio para escribir y consultar el registro solicitado.

Después de un envío correcto, `/demo/submissions/[id]` permite consultar ese registro con el correo y el teléfono parcialmente ocultos. Es una demostración: antes de operar con datos reales, se debe restringir su acceso. Ocultar parte de los datos no sustituye la autorización.

### Comandos de comprobación y producción

```bash
pnpm lint   # Analizar el código con ESLint
pnpm build  # Compilar para producción y comprobar los tipos
pnpm start  # Ejecutar la compilación de producción
```

`pnpm start` requiere haber ejecutado `pnpm build`. Las fuentes se cargan mediante `next/font/google`; la compilación puede necesitar internet para descargarlas.

## 2. Tecnologías utilizadas

| Tecnología | Uso |
| --- | --- |
| Next.js 16.3.8 y React 19.2.8 | App Router, renderizado y endpoints dentro del mismo proyecto. |
| TypeScript | Contratos explícitos y comprobación de tipos. |
| Tailwind CSS 4 | Estilos responsive sobre la paleta y tipografía del sitio. |
| React Hook Form y Zod | Estado del formulario y validación compartida con el servidor. |
| Supabase PostgreSQL y `@supabase/supabase-js` | Persistencia mediante un cliente exclusivo del servidor. |
| ESLint 9 y pnpm 11.17.0 | Análisis estático y gestión de dependencias con un lockfile versionado. |
| Archify | Generación del HTML estático del mapa de arquitectura, sin una dependencia de ejecución adicional. |

## 3. Estructura general

| Carpeta o archivo | Responsabilidad |
| --- | --- |
| `app/` | Rutas, Route Handlers, layout, estilos globales y composición de páginas. |
| `components/layout/` | Encabezado, navegación y footer compartidos. |
| `features/experiences/` | Componentes, hook de carga, contratos compartidos y configuración visual de Experiencias. |
| `features/contact/` | Schema Zod, sección y formulario de participación. |
| `features/benefits/` | Contenido y sección de Beneficios. |
| `features/project/components/` | Documentación para el evaluador y sus bloques de decisiones y uso de IA. |
| `lib/supabase/server.ts` | Cliente de Supabase protegido con `server-only`. |
| `data/experiences.json` | Catálogo estático que devuelve la API local. |
| `supabase/contact_submissions.sql` | Tabla de solicitudes, RLS y permisos. |
| `public/` y `docs/` | Assets, diagrama exportado, su fuente y documentación técnica. |

Los componentes de una funcionalidad viven en su carpeta `components/`; los hooks, en `hooks/`, fuera de la carpeta de componentes. Los tipos compartidos se reúnen en `types.ts`. Las props de un único consumidor permanecen junto al componente, sin un archivo por interfaz.

`AGENTS.md` registra las convenciones del proyecto; `.agents/` y `skills-lock.json` contienen las guías de React y Next.js utilizadas. `.impeccable/` conserva las preferencias y los contratos del proceso de diseño.

## 4. Decisiones técnicas relevantes

Prioricé que otra persona pudiera entender el código y ampliarlo. Estos criterios guiaron la implementación y las revisiones, incluso cuando suponían escribir más líneas.

| Decisión | Motivo y efecto |
| --- | --- |
| Organización por funcionalidad | Quería encontrar cada funcionalidad en un lugar reconocible. `app/` conserva rutas y composición; las vistas y el comportamiento viven en `features/`. Los hooks quedan fuera de `components/`. |
| Tipos compartidos y props locales | Separar contratos compartidos facilita leerlos; un archivo por interfaz añade navegación innecesaria. Experiencias utiliza `types.ts` para los contratos compartidos y mantiene las props locales junto a su consumidor. |
| Componentes con una responsabilidad | Pedí archivos independientes cuando la vista o su comportamiento lo justifican, sin fragmentar cada bloque de JSX. La tarjeta, la imagen y las vistas de carga y error tienen archivos reconocibles; los bloques extensos de decisiones y uso de IA también. |
| Retornos tempranos para los estados | Solicité sustituir el `switch` de Experiencias para hacer más directa la lectura. Carga, error y lista vacía tienen condiciones explícitas y el retorno final muestra el catálogo. Reintentar cancela la petición anterior. |
| Un schema Zod compartido | La validación del navegador ofrece respuesta inmediata, pero no sustituye la del servidor. React Hook Form y el endpoint usan las mismas reglas; la API guarda solo los valores validados. |
| Contenido y credenciales en el servidor | El contenido estático no necesita estado del navegador y las operaciones privilegiadas deben permanecer en el servidor. Los componentes cliente se reservan para la interacción; Supabase utiliza `server-only` y variables sin prefijo público. |
| Catálogo JSON detrás de una API | Permite evaluar la carga asíncrona y sus estados con datos reproducibles. La cuadrícula recorre la respuesta y admite más registros sin parejas de IDs fijas. |

El detalle del refactor y sus verificaciones está en [docs/experiences-refactor.md](docs/experiences-refactor.md). El [mapa de arquitectura](https://rock-experience-ten.vercel.app/arquitectura) enlaza al código de una revisión fijada para contrastar los flujos documentados.

## 5. Qué mejoraría con más tiempo

1. **Automatizar las pruebas del flujo.** El envío real ya se verificó de extremo a extremo con Supabase y el entorno desplegado. Como siguiente paso, automatizar esa comprobación y ampliar las pruebas del formulario y de los estados del catálogo.
2. **Preparar el formulario para un uso público.** Añadir límites de frecuencia y protección anti-spam. Restringir el acceso a la página de registros de demostración antes de utilizar datos reales.
3. **Medir y observar el comportamiento.** Incorporar seguimiento de errores de API sin datos personales, medir rendimiento y accesibilidad en el despliegue, y utilizar los resultados para priorizar las siguientes mejoras.

## 6. Herramientas de IA utilizadas

### Herramienta y propósito

Utilicé **Codex** como apoyo para implementar, refactorizar y verificar el proyecto. Definí las prioridades de legibilidad y organización, revisé las propuestas y solicité cambios concretos hasta que respondieran a esos criterios.

Codex colaboró en:

- Implementación y refactor de componentes a partir de los requisitos y de los cambios solicitados.
- Revisión de React y Next.js con `vercel-react-best-practices` y de la interfaz con Impeccable.
- Comprobaciones de lint, compilación y navegación responsive, y preparación del mapa con Archify.
- Redacción de documentación a partir del código y de las decisiones tomadas durante el desarrollo.

Las habilidades `vercel-react-best-practices` e Impeccable son guías para el proceso de revisión; Archify genera el diagrama. La herramienta de IA utilizada fue Codex.

### Qué propuestas revisé y ajusté personalmente

- **Ubicación de hooks, componentes y contratos compartidos.** Pedí sacar hooks y tipos de `components/` y posteriormente simplificar la estructura por funcionalidad.
- **Grado de separación de los componentes.** Pedí archivos independientes cuando tienen una responsabilidad clara y evitar componentes creados solo para fragmentar el JSX.
- **Legibilidad de los estados de Experiencias.** Solicité reemplazar el `switch` por condiciones y retornos tempranos.
- **Presentación para el evaluador.** Decidí añadir el mapa de arquitectura y esta explicación de los criterios de desarrollo.

Mi revisión se centró en criterios de organización, responsabilidades y legibilidad. Codex apoyó las comprobaciones de código, lint, compilación y navegador.

### Una propuesta incorrecta y cómo se corrigió

La primera especificación del mapa de Archify incluyó vistas guiadas mediante `meta.views`. El esquema aceptaba la configuración, pero el renderizador actual la ignoraba: los controles esperados no aparecían.

La comprobación asistida en el navegador detectó la diferencia. Se contrastó el comportamiento con la documentación de Archify, se retiró esa configuración y se ajustaron las instrucciones para utilizar la función **RUTA** disponible. Después se volvió a comprobar la interacción.

La lección: una configuración válida no garantiza que la interfaz haga lo esperado. Las propuestas generadas también necesitan verificación en la aplicación.

### Verificaciones realizadas y alcance

Se ejecutaron ESLint y la compilación de producción, y se revisaron las vistas y la navegación en diferentes anchos. Experiencias también se comprobó con respuestas controladas para carga, error, reintento y lista vacía; el detalle está en su [documentación de refactor](docs/experiences-refactor.md). Estas comprobaciones se realizaron con apoyo de Codex.

Se verificó un envío real del formulario con Supabase: la información llegó a la base de datos y la página mostró la confirmación. Queda pendiente automatizar esa comprobación y ampliar las pruebas del formulario y de los estados del catálogo.
