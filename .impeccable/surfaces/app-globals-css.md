---
version: 1
slug: "app-globals-css"
primary_target: "app/globals.css"
related_targets: ["components/layout/site-footer.tsx", "next.config.ts"]
---

# Textura de fondo compartida

Modo: Read para el fondo de contenido. El usuario aprobó incorporar una textura estática inspirada en Hellfest, con prioridad de rendimiento y código legible.

## Direction contract

THESIS: dar profundidad material al fondo oscuro mediante una textura discreta que mantenga legible el contenido.

OWN-WORLD: conservar los tokens existentes: #101010 como fondo de respaldo, blanco cálido, gris secundario, rojo y fuentes. La superficie negra desgastada aporta grano fino y pliegues leves. Su capa negra oscurece el fondo resultante para preservar el contraste del texto rojo pequeño, incluso sobre el tinte de la introducción. Sin modificar fotografías, geometría o jerarquía.

STORY: el visitante recorre la campaña y su documentación con un fondo más expresivo y controles claros. La textura acompaña la lectura y conserva el foco y el contraste del formulario.

FIRST VIEWPORT: el Hero mantiene su fotografía; la textura aparece en los fondos de contenido que siguen, bajo los textos y detrás de las tarjetas. La escala del patrón se conserva entre escritorio y móvil.

FORM: ampliación del sistema existente, aprobada por el usuario; implementación directa, sin ronda de conceptos ni seed. Un WebP local de 768 × 768, reutilizado por CSS con una capa negra del 85% para mantener el contraste del texto pequeño rojo y gris. El footer sitúa esa capa sobre su resplandor existente y la textura. Nombre con hash y caché immutable. Sin hooks, efectos animados, filtros, modos de fusión ni dependencias de ejecución.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. Preservar los archivos del sistema existente; medir peso, contraste y respuesta del recurso, verificar responsive, lint/build y revisión independiente. Registrar procedencia y prompt del recurso generado.
