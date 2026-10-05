# ROCK EXPERIENCE

Campaña ficticia para la prueba técnica de Rock The Agency: una landing responsive con seis experiencias, Beneficios y un formulario de participación.

[Ver demo](https://rock-experience-ten.vercel.app/) · [Ver arquitectura](https://rock-experience-ten.vercel.app/arquitectura) · [Repositorio](https://github.com/erikbonifaz/rock-experience)

## Checklist de la prueba técnica

Resumen de la implementación solicitada en [el documento de la prueba](docs/Prueba%20Tecnica%20Candidatos%20Web%20Developer%20Rock.docx). Las casillas describen requisitos implementados; las mediciones pendientes quedan indicadas.

### Campaña y datos

- [x] **Header y hero.** Marca ROCK EXPERIENCE, cuatro enlaces de navegación, CTA Participar, título «Vive algo diferente.», texto solicitado, dos CTA e imagen.
- [x] **Seis experiencias.** El JSON conserva los IDs, títulos, categorías y descripciones originales; usa fotografías fijas y añade textos alternativos.
- [x] **Carga dinámica.** La landing consulta `GET /api/experiences` y reutiliza `ExperienceCard`; contempla carga, error con reintento, vacío y éxito.

### Formulario y responsive

- [x] **Campos solicitados.** Nombre, correo, teléfono, empresa, mensaje y aceptación de privacidad; empresa es opcional.
- [x] **Validación.** Nombre de al menos dos caracteres, correo válido, teléfono con caracteres permitidos y 8–15 dígitos, mensaje obligatorio y privacidad aceptada.
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
- [x] **Accesibilidad básica.** Navegación por teclado, foco visible, labels asociados, botones para acciones, enlaces para destinos y ARIA para estados y errores.
- [x] **Credenciales.** Variables de entorno exclusivas del servidor y `.env.local` excluido de Git.
- [x] **Git y documentación.** Historial de cambios, instrucciones de ejecución, decisiones y declaración de IA.
- [x] **Entrega.** Repositorio y demo publicados; `/proyecto` utiliza este README como fuente de contenido.
- [ ] **Por medir · Core Web Vitals.** Falta registrar LCP, INP y CLS en condiciones representativas del despliegue.
- [ ] **Por completar · Contraste.** Falta una revisión completa de los controles y sus estados. Las medidas actuales no constituyen una certificación de accesibilidad.

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

`pnpm start` requiere un build previo. La compilación puede necesitar internet para obtener las fuentes. Las pruebas cubren contratos de datos, validaciones del formulario y lectura del README; no realizan envíos a Supabase.

## 2. Tecnologías utilizadas

| Tecnología | Uso |
| --- | --- |
| Next.js 16.3.8, React 19.2.8 y TypeScript | Páginas, endpoints y contratos de datos. |
| Tailwind CSS 4 y CSS Modules | Diseño responsive y estilos de las secciones. |
| React Hook Form y Zod | Estado del formulario y validación compartida con el servidor. |
| Supabase PostgreSQL | Persistencia de solicitudes mediante un cliente de servidor. |
| react-markdown y remark-gfm | Renderizado del README, tablas y checklist. |
| mdast-util-from-markdown y github-slugger | Estructura del documento e índice automático. |
| ESLint, pnpm y runner de Node.js | Análisis estático, dependencias y pruebas. |

## 3. Estructura general

| Ubicación | Responsabilidad |
| --- | --- |
| `app/` | Rutas, layout y endpoints. |
| `components/layout/` | Encabezado, navegación y footer. |
| `features/` | Hero, Experiencias, Beneficios, Contacto y Proyecto. |
| `data/` y `lib/` | Catálogo, navegación, metadatos y conexión de servidor. |
| `supabase/` | SQL de la tabla y sus permisos. |
| `public/` y `docs/arquitectura/` | Recursos visuales y archivos del diagrama. |
| `tests/` | Pruebas de contratos y documentación. |
| `README.md` | Contenido compartido por GitHub y `/proyecto`. |

Las rutas públicas son `/`, `/experiencias`, `/proyecto` y `/arquitectura`. El formulario utiliza `/api/contact`; el catálogo, `/api/experiences`. `/demo/submissions/[id]` permite consultar un registro de demostración.

## 4. Decisiones técnicas relevantes

- **Organización por funcionalidad.** Cada feature agrupa su UI, hooks y contratos; `app/` compone las páginas y los endpoints.
- **Interacción en el cliente.** Navegación, catálogo de inicio y formulario usan componentes cliente; las secciones estáticas se renderizan en el servidor.
- **Validación compartida.** Zod define reglas y tipos; el navegador valida para dar feedback y el servidor vuelve a validar antes de guardar. La confirmación también se valida.
- **API local para el catálogo.** Permite mostrar los estados requeridos sin depender de una API externa; al desmontar se cancela la petición activa.
- **README como fuente única.** `/proyecto` lee el archivo durante el build y genera su índice. GitHub y la página coinciden al publicar el mismo commit; editar el README requiere un nuevo despliegue para actualizar producción.
- **Recursos optimizados.** Fotografías con `next/image`, fuentes Anton y Space Grotesk con `next/font`, texturas WebP y movimiento reducido cuando el usuario lo solicita.

El envío real con Supabase se verificó previamente. La consulta de demostración es pública: oculta parcialmente correo y teléfono, pero muestra otros campos; debe incorporar autorización antes de utilizar datos reales.

## 5. Qué mejoraría con más tiempo

- Automatizar recorridos de navegador: carga, reintento, validación, envío y reinicio.
- Añadir límites de frecuencia, protección anti-spam y autorización de los registros de demostración.
- Medir Core Web Vitals y completar la revisión de contraste y accesibilidad.
- Actualizar el mapa de arquitectura a la revisión final del código.

## 6. Herramientas de IA utilizadas

**Codex** apoyó implementación, refactors, documentación y comprobaciones de código y navegador. Las guías `vercel-react-best-practices` e Impeccable orientaron las revisiones. **ImageGen** se utilizó para recursos visuales; **Archify** generó el diagrama estático.

La revisión del autor se centró en organización, ubicación de hooks y contratos y legibilidad de los flujos. Se simplificaron propuestas que añadían abstracciones innecesarias y se conservaron las validaciones de cliente y servidor por sus responsabilidades distintas.

**Ejemplo de una propuesta incorrecta.** Codex propuso `meta.views` para el mapa de Archify: el esquema lo aceptaba, pero los controles no aparecían. La comprobación asistida en navegador detectó el problema; se consultó la documentación y se sustituyó por la función RUTA compatible con el visor.

Los [créditos de imágenes y herramientas](docs/recursos.md) reúnen la procedencia de los recursos. Las verificaciones con Codex complementan la revisión del autor.
