# ROCK EXPERIENCE

Proyecto para la prueba técnica de desarrollo web de Rock The Agency. La campaña ficticia ROCK EXPERIENCE propone descubrir experiencias que conectan marcas, tecnología y personas.

## Estado actual

La página incluye la portada de campaña, el encabezado con navegación móvil, las seis experiencias cargadas desde un endpoint local —con estados de carga, error, éxito y lista vacía— y la sección de beneficios. El formulario de participación está pendiente de implementación.

## Tecnologías

- Next.js 16.3.8 con App Router.
- React 19.2.8.
- TypeScript.
- Tailwind CSS 4.
- ESLint 9.
- pnpm 11.17.0.

## Ejecución local

Requiere Node.js 20.9 o superior y la versión de pnpm indicada en `package.json`.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Abrir [localhost:3000](http://localhost:3000/).

## Comandos

```bash
pnpm lint   # Analizar el código con ESLint
pnpm build  # Compilar para producción
pnpm start  # Ejecutar la compilación de producción
```

`pnpm start` requiere haber ejecutado `pnpm build` previamente. Las fuentes de la base actual se cargan mediante `next/font/google`; la compilación puede necesitar acceso a internet para descargarlas.

## Estructura

- `app/`: rutas de Next.js, composición de la página, layout y estilos globales.
- `components/layout/`: encabezado y navegación globales.
- `features/experiences/`: componentes y hook de Experiencias, junto con `config.ts` y `types.ts`.
- `features/benefits/`: sección de Beneficios; su tipo y contenido estático viven junto al componente porque solo se usan allí.
- `data/experiences.json`: fuente estática del endpoint local.
- `public/`: recursos estáticos.
- `docs/`: documentación del proyecto, prueba técnica y referencias visuales. Las decisiones de organización se describen en [experiences-refactor.md](docs/experiences-refactor.md).
- `.agents/` y `skills-lock.json`: guías de rendimiento de React y Next.js utilizadas por los agentes.
- `.impeccable/`: preferencias compartidas del proceso de diseño y configuración para la edición visual local.
- `AGENTS.md`: instrucciones de Next.js y convenciones del proyecto.

## Decisiones iniciales

- Utilizar la base existente de Next.js con App Router, TypeScript y Tailwind CSS.
- Mantener pnpm y su archivo de bloqueo para reproducir la instalación de dependencias.
- Mantener la documentación y la comunicación en español; la página debe poder utilizarse sin conocimientos de inglés.
- Usar Conventional Commits con mensajes en inglés para los commits solicitados.
- Comenzar el diseño de nuevas páginas con una composición visual antes de implementarlas, según la preferencia confirmada por el usuario.

## Trabajo pendiente

Implementar el formulario con validaciones y confirmación. Completar la revisión de accesibilidad, SEO y rendimiento de la landing, y documentar las mejoras futuras y la publicación.

## Uso de inteligencia artificial

Se utilizó Codex con la habilidad impeccable para revisar los requisitos de la prueba, registrar el contexto del producto y preparar las preferencias de diseño. Codex también preparó la documentación inicial y la configuración del repositorio mediante Git y GitHub CLI.

Codex también colaboró en la implementación de la portada y Experiencias, la revisión del código con `vercel-react-best-practices` y la reorganización por funcionalidad. Las decisiones y verificaciones de Experiencias se documentan en `docs/experiences-refactor.md`.
