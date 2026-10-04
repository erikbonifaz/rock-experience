---
version: 1
slug: "features-benefits-components-benefits-section-tsx"
primary_target: "features/benefits/components/benefits-section.tsx"
related_targets: ["features/benefits/components/benefit-pass.tsx","features/benefits/content.ts","features/benefits/types.ts","features/benefits/benefits.module.css"]
---

# Beneficios: pases de exploración y participación

Superficie: `features/benefits/components/benefits-section.tsx`, dentro de `/#beneficios`.
Modo: Persuade. Se extiende la identidad existente; no se reemplaza el sistema global.
Alcance: únicamente Beneficios, su contenido, tipos, componente de pase y estilos locales.
El usuario confirmó mantener Beneficios y autorizó implementar el mockup 05 con «implementalo».
Comp aprobado: `.impeccable/mocks/benefits/05-pases-rojos.png`.
Sin decisiones pendientes. Mantener el resto de las secciones y los cambios anteriores.

## Direction contract

**THESIS:** Dos pases tipográficos convierten la exploración de la campaña en acciones comprensibles.
**OWN-WORLD:** Anton, Space Grotesk, rojo #ff2442, tinta negra y crema; textura raster existente, contorno doble y bandas diagonales.
**STORY:** El visitante conoce las propuestas en /experiencias o comparte su interés en #contacto. No se venden entradas ni se prometen ventajas no verificadas.
**FIRST VIEWPORT:** BENEFICIOS monumental y delineado detrás de dos pases rojos equivalentes; números 01/02, títulos negros, párrafos y enlaces crema sobre negro. La banda queda separada del texto. El cierre usa la frase gris del mockup y un divisor. En móvil, pases apilados y título sin solapamientos.
**FORM:** Composición de dos pases elegida directamente por el usuario; extensión local con referencia fijada, sin semilla de sorteo.
**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Implementación y límites

- Sección y pase en archivos independientes, tipos y contenido fuera de components.
- Tailwind para retícula, tipografía, controles y responsive; CSS local breve para el delineado tipográfico, la capa de textura y bandas si facilita la lectura.
- Mantener HTML semántico, h2/h3 y dos enlaces reales con foco visible.
- Reutilizar /images/textures/rock-surface-0c426ac5.webp; ningún texto ni control se rasteriza.
- Comprobar 1536×1024 (mockup), 1440, 768, 375 y el ancho actual del usuario, enlaces y teclado; lint y compilación.
- DESIGN.md y su sidecar no existen antes del cambio. La extensión conserva esa ausencia y no repara documentación global histórica sin autorización.
