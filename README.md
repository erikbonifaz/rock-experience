# ROCK EXPERIENCE

Campaña ficticia para la prueba técnica de Rock The Agency: una landing responsive con seis experiencias, Beneficios, un manifiesto visual y un formulario de participación.

[Ver demo](https://rock-experience-ten.vercel.app/) · [Ver arquitectura](https://rock-experience-ten.vercel.app/arquitectura) · [Repositorio](https://github.com/erikbonifaz/rock-experience)

## Checklist de la prueba técnica

Resumen de la implementación solicitada en [el documento de la prueba](docs/Prueba%20Tecnica%20Candidatos%20Web%20Developer%20Rock.docx). Las casillas describen requisitos implementados; las mediciones pendientes quedan indicadas.

### Campaña y datos

- [x] **Header y hero.** Marca ROCK EXPERIENCE, cuatro enlaces de navegación, CTA Participar, título «Vive algo diferente.», texto solicitado, dos CTA e imagen.
- [x] **Seis experiencias.** El JSON conserva los IDs, títulos, categorías y descripciones originales; usa fotografías fijas y añade textos alternativos.
- [x] **Carga dinámica.** La landing consulta `GET /api/experiences` y reutiliza `ExperienceCard`; contempla carga, error con reintento, vacío y éxito.

### Formulario y responsive

- [x] **Campos solicitados.** Nombre, correo, teléfono, empresa, mensaje y aceptación de privacidad; empresa es opcional.
- [x] **Validación.** Nombre de al menos dos caracteres, correo válido, teléfono con caracteres permitidos y 8–15 dígitos, mensaje de al menos cinco caracteres y privacidad aceptada. Los textos se normalizan con `trim` antes de guardar.
- [x] **Feedback.** Errores asociados a los campos, envío pendiente, recuperación ante fallo y confirmación «Gracias. Recibimos tus datos correctamente.» tras el éxito.
- [x] **Responsive.** Header, hero, tarjetas y formulario reorganizan su distribución; se revisaron a 375, 768 y 1440 px.

### SEO básico

- [x] **Título.** Cada página pública declara su `<title>`.
- [x] **Descripción.** Cada página pública incluye `<meta name="description">`.
- [x] **Open Graph.** Título, descripción, URL por página e imagen compartida de 1200 × 630 px.
- [x] **HTML semántico.** Encabezado, navegación, contenido, secciones, artículos, formulario y footer usan elementos adecuados.
- [x] **Headings.** Los títulos siguen una jerarquía de `h1`, `h2` y `h3`.
- [x] **Un único `h1`.** Cada página pública tiene un solo título principal.
- [x] **Imágenes con `alt`.** Descripciones para imágenes informativas y alternativas vacías para decoración.
- [x] **Enlaces descriptivos.** Los textos identifican el destino; cada tarjeta lleva a su experiencia.

### Rendimiento, accesibilidad y entrega

- [x] **Optimización.** Imágenes con `next/image`, carga diferida fuera del hero, fuentes con `next/font` y componentes de servidor para contenido estático.
- [x] **Auditoría de rendimiento.** Resultados de PageSpeed y optimizaciones resumidos en la [sección de rendimiento](#rendimiento).
- [x] **Accesibilidad básica.** Navegación por teclado, foco visible, labels asociados, botones para acciones, enlaces para destinos y ARIA para estados y errores.
- [x] **Credenciales.** Variables de entorno exclusivas del servidor y `.env.local` excluido de Git.
- [x] **Git y documentación.** Historial de cambios, instrucciones de ejecución, decisiones y declaración de IA.
- [x] **Entrega.** Repositorio y demo publicados; `/proyecto` utiliza este README como fuente de contenido.
- [x] **Core Web Vitals · medición en laboratorio.** LCP y CLS evaluados con Lighthouse y PageSpeed. La disponibilidad de métricas de campo, incluido INP, depende de los datos de usuarios reales recopilados por CrUX.

## 1. Cómo ejecutar el proyecto

Requisitos: **Node.js 24 y pnpm 11.17.0**. El lockfile conserva las versiones de las dependencias.

```bash
git clone https://github.com/erikbonifaz/rock-experience.git
cd rock-experience
pnpm install --frozen-lockfile
pnpm dev
```

Abre `http://localhost:3000/`. La landing y sus páginas informativas funcionan sin configurar una base de datos.

### Configurar el formulario

La prueba no exige un backend real; este proyecto añade persistencia con Supabase. Para guardar solicitudes:

1. Crea un proyecto en Supabase y ejecuta [contact_submissions.sql](supabase/contact_submissions.sql) en su SQL Editor.
2. Copia [.env.example](.env.example) a `.env.local` y completa las variables:

```env
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SITE_URL=https://rock-experience-ten.vercel.app
```

3. Reinicia el servidor. En Vercel, configura las mismas variables antes del despliegue.

Sin Supabase configurado, el envío muestra un error y conserva los campos. La clave de servicio se utiliza únicamente en el servidor; la tabla tiene RLS y los roles públicos no acceden directamente a ella. `SITE_URL` establece el dominio público de Open Graph.

### Comprobaciones y producción

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm start
```

## 2. Tecnologías utilizadas

| Tecnología | Uso |
| --- | --- |
| Next.js 16.3.8, React 19.2.8 y TypeScript | Páginas, endpoints y contratos de datos. |
| Tailwind CSS 4 y CSS Modules | Diseño responsive y estilos de las secciones. |
| React Hook Form y Zod | Estado del formulario y validación compartida con el servidor. |
| Supabase PostgreSQL | Persistencia de solicitudes mediante un cliente de servidor. |
| ESLint, pnpm y runner de Node.js | Análisis estático, dependencias y pruebas. |
| Archify 3.0.1 | Generación del visor estático; se ejecuta fuera de las dependencias de la aplicación. |

## 3. Estructura general

| Ubicación | Responsabilidad |
| --- | --- |
| `app/` | Rutas, layout y endpoints. |
| `components/layout/` | Encabezado, navegación y footer. |
| `features/` | Hero, Experiencias, Beneficios, Manifiesto, Contacto y Proyecto. |
| `data/` y `lib/` | Catálogo, navegación, metadatos y conexión de servidor. |
| `types/` | Contratos compartidos de navegación; los contratos de cada feature permanecen en ella. |
| `supabase/` | SQL de la tabla y sus permisos. |
| `public/` y `docs/arquitectura/` | Recursos visuales y archivos del diagrama. |
| `tests/` | Pruebas de contratos y documentación. |
| `README.md` | Contenido compartido por GitHub y `/proyecto`. |

Las rutas públicas son `/`, `/experiencias`, `/proyecto` y `/arquitectura`. El formulario utiliza `/api/contact`; el catálogo, `/api/experiences`. `/demo/submissions/[id]` permite consultar un registro de demostración.

El [mapa de Archify](https://rock-experience-ten.vercel.app/arquitectura) representa esas páginas, sus fuentes de contenido y los flujos del catálogo y del formulario. Su JSON editable, los recibos y el comando de regeneración están en [docs/arquitectura](docs/arquitectura/README.md). Las pruebas comprueban que los archivos representados y el HTML generado coincidan con la versión registrada.

## 4. Decisiones técnicas relevantes

- **Next.js frente a una SPA de React renderizada principalmente en cliente.** La prueba permitía utilizar React o Next.js. Elegí Next.js porque la mayor parte de la landing es contenido público y estático, mientras que sólo algunas partes necesitan interacción en cliente. Esto permite entregar el contenido principal ya renderizado y reservar JavaScript para elementos como la navegación interactiva, el catálogo y el formulario. También valoré su routing basado en archivos, la gestión integrada de metadata, imágenes y fuentes y la posibilidad de crear endpoints con Route Handlers dentro del mismo proyecto. En una landing de campaña consideré especialmente importantes la carga inicial, Core Web Vitals, SEO y los previews al compartir la URL.

- **Completar el flujo del formulario con Supabase en lugar de simularlo.** La prueba permitía mostrar únicamente una confirmación después del envío, sin conectar un backend real. Decidí implementar una persistencia sencilla con Supabase para comprobar el recorrido completo: el usuario envía el formulario, el servidor valida la información y el registro queda almacenado. Esto me permitió validar que los datos realmente se envían y se reciben correctamente, además de trabajar con una separación más realista entre interfaz, endpoint y persistencia sin crear un backend independiente para una landing de este tamaño.

- **React Hook Form y Zod para el formulario.** Una primera implementación manejaba valores, errores, validaciones, estado de envío y reinicio del formulario de forma manual. Era una solución válida, pero empezaba a repetir bastante lógica a medida que aumentaban los campos. React Hook Form concentra el manejo del estado y el ciclo de vida del formulario, mientras que Zod centraliza las reglas de validación y permite reutilizarlas tanto en cliente como en servidor. TypeScript ayuda durante el desarrollo, pero no valida los datos reales que llegan en runtime; por eso consideré importante comprobar nuevamente la entrada antes de guardarla.

- **Mantener el catálogo proporcional a su tamaño.** Experiencias contiene sólo seis registros, por lo que no consideré necesario introducir paginación, búsqueda, caché compleja o una capa adicional de datos. El endpoint local permite representar los estados de carga, error, reintento y éxito solicitados en la prueba sin añadir infraestructura innecesaria. Si en un escenario real el catálogo proviniera de una API con cientos o miles de registros, evaluaría paginación o carga incremental, filtrado en servidor, debounce para búsquedas y cancelación de solicitudes obsoletas según el tipo de interacción.
## 5. Qué mejoraría con más tiempo

El formulario actual cumple con el flujo esperado para la prueba, pero soy consciente de que en un entorno real todavía habría aspectos de seguridad que reforzar.

Implementaría **límites de frecuencia**, **protección anti-spam** y **autorización para consultar los registros de demostración**, evitando así abuso del endpoint y acceso no autorizado a la información almacenada.

## 6. Uso de IA y criterios de desarrollo

### Herramientas y forma de trabajo

Utilicé **Codex** como apoyo durante distintas etapas del proyecto: implementación, revisión de código, refactors, documentación y comprobaciones. **ImageGen** se utilizó para explorar propuestas visuales y generar recursos de la campaña. Las guías `vercel-react-best-practices` e Impeccable sirvieron como referencias para las revisiones técnicas y visuales.

Mi intención no fue delegar las decisiones del proyecto a la herramienta. Antes de trabajar sobre una implementación procuré definir qué problema quería resolver, qué comportamiento debía conservarse y qué nivel de complejidad tenía sentido para una landing de este tamaño.

Las propuestas de Codex se trataron como puntos de partida. Una solución podía funcionar y aun así no ser la más adecuada para el proyecto, por lo que revisé si cada cambio resolvía un problema real, cuánto código o conceptos añadía y si existía una alternativa más fácil de entender y mantener.

### Qué revisé manualmente

Mi revisión se centró principalmente en la organización del código, la responsabilidad de los componentes y hooks, la claridad de los flujos y la complejidad introducida por cada solución.

Por ejemplo, la primera versión del formulario generada con apoyo de Codex manejaba de forma manual los valores de los campos, sus errores, la validación, el estado de envío y el reinicio del formulario. La implementación funcionaba, pero al crecer el formulario empezaba a repetir la misma lógica.

A partir de esa revisión decidí utilizar **React Hook Form** para concentrar el manejo del formulario y **Zod** para centralizar las reglas de validación en runtime. La decisión no fue añadir librerías por comodidad, sino reducir lógica repetitiva y mantener una única definición de las reglas que pudiera utilizarse tanto en cliente como en servidor.

También revisé propuestas que podían parecer más “completas” técnicamente pero no eran proporcionales al proyecto. El catálogo actual contiene sólo seis elementos, así que no tendría sentido añadir paginación, búsqueda o una capa compleja de datos únicamente para anticipar problemas que todavía no existen. Los escenarios en los que esta estrategia tendría que crecer están documentados en [Decisiones técnicas relevantes](#4-decisiones-técnicas-relevantes).

El criterio general fue no escribir la menor cantidad posible de código, sino evitar que una tarea sencilla necesitara demasiados conceptos para entenderse.

### Sobre propuestas incorrectas o poco adecuadas

No detecté un error crítico de implementación que considere representativo del uso de Codex en este proyecto. Los principales ajustes estuvieron relacionados con **criterio, mantenibilidad y complejidad**, más que con código que simplemente no funcionara.

La primera implementación manual del formulario es un ejemplo: cumplía el flujo solicitado, pero al revisarla consideré que mantener por separado valores, errores, validaciones y estados para cada campo iba a generar repetición innecesaria. La sustituí por React Hook Form y Zod después de comprobar que esas herramientas resolvían mejor el problema concreto.

De forma similar, durante los refactors no acepté automáticamente cada propuesta. Si un cambio añadía abstracciones, hooks, helpers u optimizaciones sin una mejora clara para la escala actual de la landing, preferí simplificarlo o descartarlo.

### Cómo utilicé Codex durante las revisiones

En lugar de pedir simplemente *“refactoriza este código”*, definí qué quería evaluar en cada revisión. Entre otros puntos, busqué:

- lógica más compleja de lo necesario;
- componentes demasiado grandes o demasiado fragmentados;
- hooks con demasiadas responsabilidades;
- efectos o memoizaciones sin una necesidad clara;
- abstracciones utilizadas una sola vez;
- validaciones manuales demasiado extensas;
- estado que pudiera reducirse;
- código muerto o props innecesarias;
- optimizaciones prematuras.

Encontrar uno de estos puntos no significaba automáticamente modificarlo. Primero revisaba si el cambio realmente hacía la solución más clara y si el beneficio justificaba tocar código que ya funcionaba.

### Cómo comprobé los resultados

Después de los cambios no consideré una tarea terminada únicamente porque Codex hubiera generado una solución o porque TypeScript no mostrara errores.

Con apoyo de la herramienta ejecuté y revisé:

- ESLint;
- TypeScript;
- pruebas automatizadas;
- build de producción;
- comportamiento en navegador;
- distintos tamaños de pantalla;
- estados de carga, error y éxito.

En las revisiones visuales también comprobé que los cambios no afectaran el responsive, la accesibilidad o el comportamiento esperado.

La generación de código no fue el criterio de finalización. El criterio fue que pudiera explicar qué problema resolvía cada decisión, qué costo introducía y por qué esa solución tenía sentido para este proyecto.

Los [créditos de imágenes y herramientas](docs/recursos.md) documentan la procedencia de los recursos visuales y las herramientas auxiliares.

## Rendimiento

La página aprovecha las optimizaciones nativas de Next.js. Los resultados obtenidos en PageSpeed Insights fueron:

| Métrica | Móvil | Escritorio |
| --- | --- | --- |
| Rendimiento | **94/100** | **100/100** |
| Largest Contentful Paint (LCP) | 3,0 s | 0,7 s |
| Cumulative Layout Shift (CLS) | 0 | 0 |
| Accesibilidad, buenas prácticas y SEO | 100/100 en cada categoría | 100/100 en cada categoría |

- **Imágenes:** `next/image` adapta tamaños y negocia AVIF/WebP; el hero tiene prioridad alta y las imágenes secundarias utilizan lazy loading.
- **JavaScript:** el contenido estático se renderiza en el servidor; Zod se carga al validar y el catálogo al acercarse a su sección.
- **Fuentes:** `next/font` aloja Anton y Space Grotesk en el mismo dominio, con subset latino y `display: swap`.
- **Estabilidad visual:** las imágenes reservan su espacio mediante dimensiones o proporciones definidas; las mediciones registraron CLS de 0.
