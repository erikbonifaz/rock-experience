# Beneficios

La sección `/#beneficios` presenta dos caminos para continuar en ROCK EXPERIENCE: conocer las seis propuestas o compartir el interés mediante el formulario. Sus dos pases rojos conservan las fuentes Anton y Space Grotesk, la paleta rojo, negro y crema y la textura del sitio.

## Acciones

| Pase | Acción | Destino |
| --- | --- | --- |
| Encuentra tu experiencia | Explorar experiencias | `/experiencias` |
| Quiero participar | Completar formulario | `/#contacto` |

Los enlaces permiten explorar y participar; el contenido no promete precios, disponibilidad, exclusividad ni ventajas adicionales. La sección se compone en [app/page.tsx](../app/page.tsx), entre Experiencias y Contacto.

## Organización y mantenimiento

| Archivo | Responsabilidad |
| --- | --- |
| [content.ts](../features/benefits/content.ts) | Textos, números, cintas, acciones, destinos e inclinación de los dos pases |
| [types.ts](../features/benefits/types.ts) | Contratos `BenefitPassContent` y `BenefitPassProps` |
| [benefits-section.tsx](../features/benefits/components/benefits-section.tsx) | Sección, encabezado, lista de pases y frase de cierre |
| [benefit-pass.tsx](../features/benefits/components/benefit-pass.tsx) | Artículo reutilizable con título, descripción y enlace |
| [benefits.module.css](../features/benefits/benefits.module.css) | Título delineado, textura del pase y cintas diagonales |

Ambos componentes se renderizan en el servidor. Los tipos y el contenido permanecen fuera de `components/`; no se añaden hooks ni dependencias.

Tailwind expresa la retícula, la tipografía, el espaciado, los enlaces y la adaptación de tamaños junto al marcado. El módulo CSS concentra los efectos que requieren pseudoelementos o geometría específica. Esta separación mantiene legible cada responsabilidad. Para cambiar el contenido, editar `content.ts`; cada título tiene dos líneas explícitas. Si cambia su longitud, revisar que no invada la cinta ni desborde el pase.

## Composición y accesibilidad

Desde 1024 px, los pases forman dos columnas, con inclinaciones opuestas y el título BENEFICIOS delineado detrás. Por debajo se apilan sin inclinación; el título precede a los pases. El marco doble, las cintas EXPLORA/PARTICIPA y los controles conservan su jerarquía al cambiar de ancho.

La sección usa un `h2`, títulos `h3`, una lista y enlaces descriptivos reales. Los números, las cintas y las flechas son decorativos y se excluyen del árbol accesible. Los enlaces tienen un área de al menos 44 px de alto, subrayado y foco visible. Hover o foco dentro del pase lo endereza; la preferencia de movimiento reducido elimina las transiciones. En colores forzados, el título usa texto sólido del sistema y se oculta la textura.

## Material y coste

La cara roja reutiliza [rock-surface-0c426ac5.webp](../public/images/textures/rock-surface-0c426ac5.webp), de 768 × 768 px y 75.528 bytes. El pseudoelemento repite el material a 384 × 384 px, con mezcla `screen` y opacidad del 85 %. El grano aclara el rojo y mantiene la tinta negra legible. Todo el texto y los controles siguen siendo HTML.

La URL procede del token `--surface-texture` de [app/globals.css](../app/globals.css). La sección reutiliza el recurso que ya sirve el fondo, sin otro raster; añade su capa de pintado CSS. La [guía de textura](textura-fondo.md) documenta su procedencia, caché y actualización. No se midieron LCP ni INP para esta sección.

## Comprobaciones registradas

Pasaron ESLint y la compilación de Next.js, incluida TypeScript, mediante los binarios locales. `pnpm` no pudo iniciar por un error `EPERM` de Corepack; la compilación se ejecutó con `NODE_OPTIONS=--use-system-ca`. También pasó `git diff --check`.

Se comprobaron los destinos de ambos enlaces, Tab, Enter y foco visible. Las lecturas DOM a 1536, 1440, 1024, 768, 495 y 375 px no mostraron desbordamiento horizontal. Las capturas finales verificaron escritorio, tableta y móvil, incluido el panel de 495 px; sus dimensiones de archivo difieren del viewport solicitado por el escalado de captura.

El cálculo sRGB sobre los 589.824 píxeles de la textura compuesta dio un contraste mínimo de 5,0588:1 para tinta negra sobre el pase. Ese cálculo no evalúa antialiasing ni acredita la accesibilidad de toda la página. Las pruebas no enviaron el formulario y no incluyeron dispositivos físicos.
