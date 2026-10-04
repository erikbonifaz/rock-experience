---
version: 1
slug: "features-experiences-components-experiences-section-tsx"
primary_target: "features/experiences/components/experiences-section.tsx"
related_targets: ["features/experiences/components/experience-card.tsx", "features/experiences/components/experience-image.tsx", "features/experiences/components/experience-skeleton.tsx"]
---

# Experiencias como fotografías de fanzine

Modo: Persuade. Extensión local de la identidad existente.

Mockup aprobado: `.impeccable/mocks/home/02-fotografias-fanzine-hero-beneficios-aa14daf4.png`. El usuario respondió «me gusta, implementa» el 4 de octubre de 2026.

## Contrato

- Seis impresiones de papel crema, con fotos monocromas y acento rojo para Live Experience; títulos negros, categorías como sellos rojos y flecha de navegación.
- Cuadrícula de tres columnas y dos filas en escritorio, dos columnas en tablet y una en móvil. Inclinaciones discretas únicamente desde 1200 px, sin solapamientos.
- Papel con grano y desgaste natural en los bordes mediante un único raster transparente reutilizado; contenido y controles semánticos.
- Preservar todos los registros, textos y URLs de fotografías del endpoint, carga, error, vacío, reintento y fallback de imagen. Las seis tarjetas enlazan al catálogo general existente.
- Conservar Hero, introducción, Beneficios, Contacto y Footer. No modificar la página general de Experiencias.
- Tailwind para estructura, tipografía y responsive; CSS Module breve para la textura, máscara de sello y colores forzados. Interfaces en types.ts; hooks en hooks/. Sin abstracciones ni dependencias nuevas.
- Movimiento: leve énfasis existente de foto y flecha al hover/foco; sin animaciones de entrada, texto visible desde el principio y respeto a movimiento reducido.

## Medidas de referencia

El mockup completo mide 789 × 1994 px. Experiencias ocupa aproximadamente y=728–1520; su encabezado y las seis impresiones forman tres columnas con dos filas. La implementación conserva el contenedor fluido y las fuentes Anton y Space Grotesk existentes, adaptando el tamaño real del texto al viewport.

## Limitaciones automáticas

El intento de iniciar build-phase para esta composición fue rechazado porque permanece abierto el estado de Beneficios en plates, donde el decodificador automático rechaza la textura WebP existente. Se preservó el estado previo; no se usó reset ni force, ni se declara aprobada la secuencia automática. La verificación de esta extensión usa capturas reales, métricas DOM, compilación y revisión independiente. La ausencia previa de DESIGN.md y su sidecar se conserva como contexto histórico.

El rediseño inicial conservó las URLs dinámicas de Picsum. En una petición posterior del 4 de octubre de 2026, el usuario autorizó seleccionar fotografías temáticas del mismo catálogo y fijar sus IDs. Se actualizaron únicamente las URLs de `data/experiences.json` y su permiso en Next.js, sin cambiar textos, registros, composición ni imágenes locales del catálogo general. La selección actual está documentada en `docs/experiencias-imagenes.md`.
