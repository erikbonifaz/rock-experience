# ROCK EXPERIENCE

Landing para la prueba técnica de desarrollo web de Rock The Agency. La campaña ficticia presenta experiencias que conectan marcas, tecnología y personas.

## Estado actual

La página incluye la portada, el encabezado responsive, seis experiencias cargadas desde un endpoint local, Beneficios, el formulario de participación validado y el footer. El formulario está preparado para persistir solicitudes en Supabase PostgreSQL; para activar esa conexión se debe crear el proyecto, ejecutar el SQL y configurar las variables de entorno.

## Tecnologías

- Next.js 16.3.8 con App Router.
- React 19.2.8 y TypeScript.
- Tailwind CSS 4.
- React Hook Form y Zod para el formulario.
- Supabase PostgreSQL mediante `@supabase/supabase-js`.
- ESLint 9 y pnpm 11.17.0.

## Ejecución local

Requiere Node.js 20.9 o superior y la versión de pnpm indicada en `package.json`.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Abrir [localhost:3000](http://localhost:3000/). Para habilitar la persistencia, copiar `.env.example` a `.env.local`, completar las variables y ejecutar `supabase/contact_submissions.sql` en el SQL Editor del proyecto Supabase.

## Formulario y persistencia

El navegador no se conecta directamente a la base de datos. El flujo es:

```text
React Hook Form + Zod
        ↓
POST /api/contact
        ↓
participationSchema.safeParse() en el servidor
        ↓
Supabase PostgreSQL · contact_submissions
        ↓
ID persistido y código RX-####
```

El endpoint vuelve a validar los datos, inserta únicamente los valores validados y devuelve el ID y el código del registro. Tras el éxito, el evaluador puede abrir el enlace de demostración mostrado en pantalla. `/demo/submissions/[id]` consulta el registro en el servidor y oculta el correo y el teléfono antes de renderizarlo.

## Variables de entorno

Configurar en `.env.local` para desarrollo y en Vercel para producción:

```env
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

La clave es exclusivamente para servidor. No usar el prefijo `NEXT_PUBLIC_`, no incluir valores reales en Git y no exponer la clave en respuestas o registros del navegador.

En Supabase, crear el proyecto y ejecutar `supabase/contact_submissions.sql`. En Vercel, añadir las dos variables en **Project Settings → Environment Variables** para los entornos que se vayan a probar y volver a desplegar.

La tabla tiene RLS activado, no define políticas públicas y revoca permisos de `anon` y `authenticated`; la aplicación usa la clave de servidor para escribir y consultar el registro solicitado. La demostración no ofrece un listado público.

Para una operación pública real, antes de ampliar el uso convendría añadir rate limiting y una protección anti-spam como CAPTCHA o Turnstile. No forman parte de esta fase.

## Comandos

```bash
pnpm lint   # Analizar el código con ESLint
pnpm build  # Compilar para producción
pnpm start  # Ejecutar la compilación de producción
```

`pnpm start` requiere haber ejecutado `pnpm build` previamente. Las fuentes actuales se cargan mediante `next/font/google`; la compilación puede necesitar conexión a internet para descargarlas.

## Estructura

- `app/`: rutas de Next.js, Route Handlers, layout y estilos globales.
- `components/layout/`: encabezado, navegación y footer.
- `features/contact/`: schema Zod, sección y formulario de participación.
- `features/experiences/`: componentes, hook y presentación de Experiencias.
- `features/benefits/`: contenido y sección de Beneficios.
- `lib/supabase/server.ts`: cliente de Supabase protegido para uso de servidor.
- `supabase/contact_submissions.sql`: definición de tabla, RLS y permisos.
- `data/experiences.json`: fuente estática del endpoint local de Experiencias.
- `docs/`: documentación, prueba técnica y referencias visuales.
- `.agents/` y `skills-lock.json`: guías de rendimiento de React y Next.js utilizadas por los agentes.
- `.impeccable/`: preferencias del proceso de diseño y configuración visual local.
- `AGENTS.md`: instrucciones del proyecto y de Next.js.

## Decisiones y mejoras futuras

- Mantener Next.js App Router, TypeScript, Tailwind CSS y pnpm.
- Mantener las validaciones en un único schema Zod compartido por el cliente y el servidor.
- Dejar las consultas privilegiadas en código server-only y sanitizar datos sensibles en servidor.
- Completar la configuración manual de Supabase y las variables de Vercel antes de probar la persistencia real.
- Considerar rate limiting y protección anti-spam antes de un uso público continuado.

## Uso de inteligencia artificial

Se utilizó Codex con la habilidad impeccable para revisar los requisitos de la prueba, registrar el contexto del producto y preparar las preferencias de diseño. Codex también preparó la documentación inicial y la configuración del repositorio mediante Git y GitHub CLI.

Codex colaboró en la implementación de la portada, Experiencias, Beneficios, el formulario de participación y el footer, y en la revisión del código con `vercel-react-best-practices`. Las decisiones y verificaciones de Experiencias se documentan en `docs/experiences-refactor.md`.
