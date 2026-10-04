---
version: 1
slug: "features-project-components-project-introduction-tsx"
primary_target: "features/project/components/project-introduction.tsx"
related_targets: ["app/page.tsx"]
---

# Introducción a la prueba técnica

Modo: Read. Sección de la landing inmediatamente después del Hero. El usuario solicita explicar brevemente el proyecto y hacer visibles los accesos a «Cómo funciona» y «Sobre la prueba» para quien lo evalúa.

## Direction contract

THESIS: identificar la campaña como prueba técnica y facilitar el acceso a su explicación desde el comienzo del recorrido.

OWN-WORLD: conservar el fondo oscuro, blanco cálido, rojo, Anton y Space Grotesk. Utilizar el contenedor existente, separadores finos y una superficie ligeramente más clara para distinguir el contexto del catálogo.

STORY: el evaluador reconoce la campaña ficticia, lee qué se implementó y elige entre el flujo de la aplicación y sus decisiones técnicas.

FIRST VIEWPORT: título de dos líneas a la izquierda, introducción breve y dos enlaces descriptivos a la derecha en escritorio. En móvil, apilar el contenido y los enlaces, con foco visible y áreas cómodas de pulsar.

FORM: ampliación concreta de la landing; implementación directa sin selección de conceptos ni seed. Un componente de servidor, Tailwind y enlaces internos de Next.js; sin hooks, nuevas dependencias ni componentes auxiliares. La interacción se limita al énfasis de los enlaces al pasar el cursor o usar teclado.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. Como ampliación ordinaria, preservar la ausencia previa de DESIGN.md y verificar el resultado contra el sistema existente. Comprobar ubicación, enlaces, teclado, responsive, lint y build; no se incorporan imágenes.
