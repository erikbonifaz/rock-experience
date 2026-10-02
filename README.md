# ROCK EXPERIENCE

Proyecto para la prueba técnica de desarrollo web de Rock The Agency. La campaña ficticia ROCK EXPERIENCE propone descubrir experiencias que conectan marcas, tecnología y personas.

## Estado actual

El repositorio contiene la base de Next.js y la configuración inicial del proyecto. La página todavía muestra la interfaz de Create Next App; las secciones de campaña, la carga dinámica de experiencias y el formulario de participación están pendientes de implementación.

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

- `app/`: página principal, disposición general y estilos globales.
- `public/`: recursos estáticos.
- `docs/`: documento de la prueba técnica e imagen de referencia.
- `.agents/` y `skills-lock.json`: guías de rendimiento de React y Next.js utilizadas por los agentes.
- `.impeccable/`: preferencias compartidas del proceso de diseño y configuración para la edición visual local.
- `AGENTS.md`: instrucciones de Next.js y convenciones del proyecto.

## Decisiones iniciales

- Utilizar la base existente de Next.js con App Router, TypeScript y Tailwind CSS.
- Mantener pnpm y su archivo de bloqueo para reproducir la instalación de dependencias.
- Mantener la documentación y la comunicación en español; la página debe poder utilizarse sin conocimientos de inglés.
- Usar Conventional Commits con descripciones en español para los commits solicitados.
- Comenzar el diseño de nuevas páginas con una composición visual antes de implementarlas, según la preferencia confirmada por el usuario.

## Trabajo pendiente

Implementar la campaña, las seis experiencias con estados de carga y error, y el formulario con validaciones y confirmación. Verificar accesibilidad, SEO, rendimiento y adaptación a teléfonos, tabletas y computadoras. Completar la documentación de las decisiones finales, las mejoras futuras y la publicación cuando exista la implementación.

## Uso de inteligencia artificial

Se utilizó Codex con la habilidad impeccable para revisar los requisitos de la prueba, registrar el contexto del producto y preparar las preferencias de diseño. Codex también preparó la documentación inicial y la configuración del repositorio mediante Git y GitHub CLI.

En esta etapa no se ha generado la implementación de la campaña. La revisión manual del código de la campaña y los posibles errores detectados y corregidos se documentarán cuando se realice ese trabajo.
