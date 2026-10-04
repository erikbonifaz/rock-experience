---
version: 1
slug: "app-experiencias-page-tsx"
primary_target: "app/experiencias/page.tsx"
related_targets: ["features/experiences/components/experience-card.tsx"]
---

# Experiencias: presentación editorial

Ruta `/experiencias`. Modo: Persuade. El usuario eligió la primera propuesta: fotografía de apertura, introducción, seis bloques alternados de imagen y texto y enlace al formulario existente. Todas las tarjetas de la campaña deben llevar a esta página general.

Actualización del 3 de octubre de 2026: el usuario eligió para la portada la fotografía de Nathan Collier «Band on stage with red lights», opción 1 de las cuatro alternativas presentadas. Mantener las seis fotografías de los bloques sin cambios.

## Direction contract

THESIS: presentar las seis experiencias como un recorrido editorial que amplía el catálogo y permite expresar interés mediante el formulario de la campaña.

OWN-WORLD: conservar fondo oscuro, blanco cálido, rojo, Anton y Space Grotesk, contenedor existente y esquinas rectas. Fotografías temáticas locales con origen documentado; ningún cambio de identidad ni de otras secciones.

STORY: el visitante entiende la propuesta, recorre videojuegos, música, creación, tecnología, eventos y comercio y vuelve al formulario para participar. No añadir fechas, precios ni resultados inventados.

FIRST VIEWPORT: encabezado sencillo con marca y regreso; título grande en dos líneas a la izquierda, introducción y enlace al catálogo a la derecha; fotografía panorámica protagonista debajo. En móvil se apilan título, introducción y fotografía sin superponer texto.

FORM: primera opción aprobada explícitamente por el usuario. Implementación directa sobre el sistema existente, sin otra ronda de conceptos. Componentes de servidor, catálogo JSON compartido, contenido editorial fuera de components y Tailwind; sin hooks ni dependencias adicionales. Interacción: enlaces nativos y énfasis suave de las imágenes al hover.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. Como extensión ordinaria, preservar la ausencia previa de DESIGN.md y documentar el contraste con el sistema existente; verificar navegación, imágenes, foco y responsive, lint/build, detector una vez y revisión independiente.
