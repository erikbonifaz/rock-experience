---
version: 1
slug: "app-arquitectura-page-tsx"
primary_target: "app/arquitectura/page.tsx"
related_targets: []
---

# Página de arquitectura

Ruta: `/arquitectura`. Modo: Read. Público: reclutadores y personas que evalúan la prueba técnica. El usuario aprobó la propuesta de una explicación breve, un diagrama Archify y los recorridos de Experiencias y del formulario; pidió implementarla.

## Direction contract

THESIS: explicar las decisiones mediante el recorrido real del código y permitir contrastarlas con el repositorio.

OWN-WORLD: conservar el fondo #101010, texto #F2F0E9, acento #FF2442, Anton en titulares y Space Grotesk en lectura. Bordes finos, esquinas rectas y composición editorial del sitio existente.

STORY: el evaluador comprende dónde se renderiza la página, de dónde sale el catálogo y cómo se valida y persiste una solicitud. Puede inspeccionar los nodos y abrir su código fuente.

FIRST VIEWPORT: marca y regreso a la landing; título de lectura en dos líneas, introducción breve; acceso al mapa con botón para abrirlo completo. El diagrama tiene protagonismo y una alternativa textual debajo.

FORM: extensión precisa de la propuesta aprobada; no aplica una ronda de conceptos ni una semilla. Construcción directa desde el código y el HTML real de Archify.

FINISH: revisión en escritorio y móvil, lint y compilación, validación del artefacto y documentación de regeneración; las decisiones se contrastan con la identidad existente.
