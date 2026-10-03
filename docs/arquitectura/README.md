# Cómo funciona ROCK EXPERIENCE

La ruta `/arquitectura` explica el recorrido de los datos para quienes evalúan el proyecto. Se accede desde **Cómo funciona** en el footer de la campaña.

## Organización

- `app/arquitectura/page.tsx`: Server Component con la explicación, los dos recorridos y el iframe de carga diferida. No necesita hooks ni estado de cliente.
- `docs/arquitectura/rock-experience.json`: fuente editable del mapa, traducciones al español y referencias al código.
- `public/diagrams/rock-experience.html`: visor interactivo generado por Archify. Se sirve como un archivo estático y puede abrirse en una pestaña independiente.
- `docs/arquitectura/rock-experience.delivery.json`: recibo con las huellas SHA-256 de la fuente y del HTML. Se conserva fuera de `public` porque incluye rutas locales del entorno de generación.
- `public/diagrams/archify-license.txt`: licencia MIT de Archify. El HTML también conserva las licencias de las fuentes que incorpora.

Archify no es una dependencia de la aplicación. El HTML incluye el visor, los estilos y las fuentes; no necesita cargar la página de Archify ni conectarse a Supabase.

`.gitattributes` conserva los bytes del JSON y del HTML sin convertir sus finales de línea. El HTML generado también mantiene su formato original. Así las huellas del recibo siguen siendo válidas al clonar el repositorio.

## Qué representa

El mapa distingue navegador, renderizado de Next.js, endpoints y datos. Los recorridos principales son:

1. `useExperiences` → `GET /api/experiences` → `data/experiences.json`, con validación de la respuesta, estados de carga y reintento.
2. React Hook Form y Zod → `POST /api/contact` → Supabase PostgreSQL → confirmación y consulta de demostración por ID.

La persistencia del formulario requiere configurar Supabase y las variables de entorno descritas en el README principal. El mapa describe el código; no comprueba ni supervisa infraestructura en ejecución.

Cada nodo enlaza al repositorio de GitHub en la revisión indicada en `meta.repository.revision`. Esta revisión fija evita que un enlace muestre código diferente del documentado. Al actualizar el proyecto, hay que revisar tanto los pasos de la página como los nodos, las conexiones y las líneas de las referencias.

El visor permite inspeccionar nodos y relaciones, buscar componentes, acercar la vista, cambiar el tema y seguir una ruta dirigida con **RUTA**. `meta.views` fue retirado en Archify 3.0.1 y no debe añadirse. La explicación textual permanece disponible debajo del mapa, también en pantallas pequeñas.

## Regenerar el diagrama

Se generó con [Archify](https://github.com/tt-a1i/archify), versión **3.0.1**, revisión de la herramienta `d5a1333d7447c866a765adac7d4d062f2f02e4d2`. Requiere Node.js 18 o superior y un navegador Chromium compatible para su comprobación automática.

1. Obtener esa revisión de Archify fuera del proyecto y localizar `archify/bin/archify.mjs`.
2. Editar el JSON. Si cambia la revisión del código, usar un commit completo disponible localmente y publicado en el repositorio. Ajustar los rangos de líneas de cada referencia.
3. Ejecutar desde la raíz de ROCK EXPERIENCE este ejemplo de PowerShell, sustituyendo la ruta de la herramienta:

```powershell
$archifyCli = 'C:/herramientas/archify/archify/bin/archify.mjs'
$evidenceDirectory = Join-Path $env:TEMP 'rock-experience-archify-evidence'
$publicReceipt = 'public/diagrams/rock-experience.delivery.json'
$storedReceipt = 'docs/arquitectura/rock-experience.delivery.json'

# Restaurar el recibo junto al HTML para la comprobación de procedencia.
Copy-Item -LiteralPath $storedReceipt -Destination $publicReceipt

node $archifyCli finalize architecture `
  docs/arquitectura/rock-experience.json `
  public/diagrams/rock-experience.html `
  --repo-root . `
  --quality showcase `
  --out-dir $evidenceDirectory `
  --json

if ($LASTEXITCODE -ne 0) {
  throw 'Archify no terminó todas las comprobaciones; revisar los diagnósticos antes de publicar.'
}

# Conservar el recibo actualizado fuera de los archivos públicos.
Move-Item -LiteralPath $publicReceipt -Destination $storedReceipt -Force

pnpm lint
pnpm build
```

Si Archify falla, conservar y revisar sus recibos de recuperación antes de volver a generar. No publicar un resultado incompleto ni los recibos que hayan quedado temporalmente en `public/diagrams`.

`finalize` debe terminar con `status: "pass"` y los cuatro pasos aprobados: `validate`, `deliver`, `check` y `browser-check`. El perfil `showcase` comprueba estructura, referencias al repositorio, composición y comportamiento del visor. La revisión visual de la página embebida se realiza por separado.

No editar el HTML generado a mano. Versionar juntos el JSON, el HTML y el recibo actualizado. Antes de entregar, abrir `/arquitectura` en escritorio y móvil, probar el enlace del footer, inspeccionar un nodo, seguir una ruta y abrir el diagrama completo.
