---
version: 1
slug: "app-proyecto-page-tsx"
primary_target: "app/proyecto/page.tsx"
related_targets: []
---

# Sobre esta prueba técnica

Ruta: `/proyecto`. Modo: Read. Público: reclutadores y personas que evalúan la prueba técnica. El usuario aprobó una página con las seis respuestas del README y una explicación verificable del uso de IA, las decisiones y sus motivos.

## Direction contract

THESIS: hacer evaluable el trabajo mediante instrucciones concretas, decisiones razonadas y una atribución honesta de la colaboración con Codex.

OWN-WORLD: extender la identidad existente de `/arquitectura`: fondo #101010, texto #F2F0E9, secundario #AAA69F y acento #FF2442; Anton para títulos y Space Grotesk para lectura. Composición editorial, separadores finos, esquinas rectas y sin tarjetas decorativas.

STORY: el evaluador puede ejecutar el proyecto, reconocer sus tecnologías y estructura, entender los criterios de implementación y distinguir las revisiones del autor de las verificaciones asistidas. Tiene acceso a la campaña, al mapa y al README.

FIRST VIEWPORT: marca y regreso a la campaña; título y presentación tomados del README, enlaces al mapa y al archivo en GitHub; índice de siete apartados, checklist breve y las seis respuestas exigidas. En escritorio, índice lateral y columna de lectura; en móvil, índice antes del contenido.

FORM: extensión precisa de la propuesta aprobada por el usuario, construida sobre la identidad existente. Server Components que leen el README durante el build; renderizado con react-markdown y remark-gfm, índice con mdast-util-from-markdown y github-slugger. Se retiraron los bloques de texto duplicados en componentes. Casillas de lectura con estado textual, enlaces de archivos hacia GitHub y tablas con desplazamiento por teclado.

FINISH: comprobar ruta, índice, único h1, enlaces y compilación estática. El README y la página utilizan el mismo contenido, limitado a requisitos vigentes y decisiones necesarias para evaluar la prueba. Core Web Vitals y contraste completo figuran pendientes; el checklist no ejecuta una auditoría automática. Créditos centralizados en docs/recursos.md; los informes históricos se retiraron por petición del usuario.
