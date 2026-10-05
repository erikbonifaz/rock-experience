# ROCK EXPERIENCE

Campaña ficticia para la prueba técnica de Rock The Agency: una landing responsive con seis experiencias, Beneficios y un formulario de participación.

[Ver demo](https://rock-experience-ten.vercel.app/) · [Ver arquitectura](https://rock-experience-ten.vercel.app/arquitectura) · [Repositorio](https://github.com/erikbonifaz/rock-experience)

## Rendimiento

La página aprovecha las optimizaciones nativas de Next.js. La [medición de PageSpeed Insights del 4 de octubre de 2026](https://pagespeed.web.dev/analysis/https-rock-experience-ten-vercel-app/jc21rudr1q?form_factor=mobile), sobre la demo desplegada antes de los últimos ajustes, registró:

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

Los ajustes posteriores difieren la carga de Zod y del catálogo y reducen en **38,5 KiB** el peso conjunto de las texturas de las tarjetas y la acreditación. La tabla conserva la medición anterior; se debe repetir PageSpeed tras desplegar esta revisión para obtener cifras de la versión actual.

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

`pnpm start` requiere un build previo. La compilación puede necesitar internet para obtener las fuentes. Las pruebas cubren contratos de datos, validaciones del formulario, lectura del README y coherencia del mapa de Archify; no realizan envíos a Supabase. Las comprobaciones del mapa detectan páginas sin representar, cambios en sus fuentes y diferencias entre el JSON y el HTML generado.

## 2. Tecnologías utilizadas

| Tecnología | Uso |
| --- | --- |
| Next.js 16.3.8, React 19.2.8 y TypeScript | Páginas, endpoints y contratos de datos. |
| Tailwind CSS 4 y CSS Modules | Diseño responsive y estilos de las secciones. |
| React Hook Form y Zod | Estado del formulario y validación compartida con el servidor. |
| Supabase PostgreSQL | Persistencia de solicitudes mediante un cliente de servidor. |
| react-markdown y remark-gfm | Renderizado del README, tablas y checklist. |
| mdast-util-from-markdown y github-slugger | Lectura de la estructura Markdown e índice con anclas consistentes. |
| ESLint, pnpm y runner de Node.js | Análisis estático, dependencias y pruebas. |
| Archify 3.0.1 | Generación del visor estático; se ejecuta fuera de las dependencias de la aplicación. |

## 3. Estructura general

| Ubicación | Responsabilidad |
| --- | --- |
| `app/` | Rutas, layout y endpoints. |
| `components/layout/` | Encabezado, navegación y footer. |
| `features/` | Hero, Experiencias, Beneficios, Contacto y Proyecto. |
| `data/` y `lib/` | Catálogo, navegación, metadatos y conexión de servidor. |
| `types/` | Contratos compartidos de navegación; los contratos de cada feature permanecen en ella. |
| `supabase/` | SQL de la tabla y sus permisos. |
| `public/` y `docs/arquitectura/` | Recursos visuales y archivos del diagrama. |
| `tests/` | Pruebas de contratos y documentación. |
| `README.md` | Contenido compartido por GitHub y `/proyecto`. |

Las rutas públicas son `/`, `/experiencias`, `/proyecto` y `/arquitectura`. El formulario utiliza `/api/contact`; el catálogo, `/api/experiences`. `/demo/submissions/[id]` permite consultar un registro de demostración.

El [mapa de Archify](https://rock-experience-ten.vercel.app/arquitectura) representa esas páginas, sus fuentes de contenido y los flujos del catálogo y del formulario. Su JSON editable, los recibos y el comando de regeneración están en [docs/arquitectura](docs/arquitectura/README.md). Las pruebas comprueban que los archivos representados y el HTML generado coincidan con la versión registrada.

## 4. Decisiones técnicas relevantes

- **Organización por funcionalidad.** Cada feature agrupa su UI, hooks y contratos; `app/` compone las páginas y los endpoints.
- **Interacción en el cliente.** Navegación, catálogo de inicio y formulario usan componentes cliente; las secciones estáticas se renderizan en el servidor.
- **Validación compartida.** `schema.ts` define las reglas y los tipos inferidos con Zod. Los valores iniciales viven en `defaults.ts` y sólo importan tipos, para cargar Zod al validar. El navegador ofrece feedback y el servidor vuelve a validar antes de guardar; el cliente también valida la confirmación.
- **API local para el catálogo.** La landing carga la petición y su validador en paralelo, con 400 px de anticipación al llegar a la sección. Contempla carga, error con reintento, vacío y éxito; valida campos e IDs únicos y cancela la petición al reintentar o desmontar.
- **Página editorial de Experiencias.** Cada tarjeta abre `/experiencias#experiencia-{id}`. La página lee el mismo JSON directamente en el servidor y añade contenido editorial, sin solicitar su propio endpoint.
- **README como fuente única.** `/proyecto` lee el archivo durante el build y genera su índice. GitHub y la página coinciden al publicar el mismo commit; editar el README requiere un nuevo despliegue para actualizar producción.
- **Recursos optimizados.** Fotografías con `next/image` y negociación AVIF/WebP, hero con prioridad alta, fuentes Anton y Space Grotesk con `next/font`, texturas WebP comprimidas y movimiento reducido cuando el usuario lo solicita. El formulario conserva sus campos en el HTML inicial y carga Zod al validar.
- **Animaciones sencillas.** CSS anima elementos del hero y la confirmación. Un hook con IntersectionObserver activa la entrada de las tarjetas una sola vez; los efectos respetan `prefers-reduced-motion` y se complementan con transiciones de hover y foco.

El envío real con Supabase se verificó previamente. La consulta de demostración es pública: oculta parcialmente correo y teléfono, pero muestra otros campos; debe incorporar autorización antes de utilizar datos reales.

## 5. Qué mejoraría con más tiempo

- Automatizar recorridos de navegador: carga, reintento, validación, envío y reinicio.
- Añadir límites de frecuencia, protección anti-spam y autorización de los registros de demostración.
- Dar seguimiento a Core Web Vitals con datos reales de uso.

## 6. Herramientas de IA utilizadas

**Codex** apoyó implementación, refactors, documentación y comprobaciones de código y navegador. Las guías `vercel-react-best-practices` e Impeccable orientaron las revisiones. **ImageGen** se utilizó para recursos visuales; **Archify** generó el diagrama estático.

La revisión del autor se centró en organización, ubicación de hooks y contratos y legibilidad de los flujos. Se simplificaron propuestas que añadían abstracciones innecesarias y se conservaron las validaciones de cliente y servidor por sus responsabilidades distintas.

**Ejemplo de una propuesta incorrecta.** Codex propuso `meta.views` para el mapa de Archify: el esquema lo aceptaba, pero los controles no aparecían. La comprobación asistida en navegador detectó el problema; se consultó la documentación y se sustituyó por la función RUTA compatible con el visor.

Los [créditos de imágenes y herramientas](docs/recursos.md) reúnen la procedencia de los recursos. Las verificaciones con Codex complementan la revisión del autor.
