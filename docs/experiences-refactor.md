# Revisión y refactorización de Experiencias

La revisión prioriza la legibilidad y la separación de responsabilidades. La reorganización anterior fue estructural. La extensión visual del 4 de octubre de 2026 presenta las tarjetas de inicio como fotografías de fanzine y conserva la carga dinámica desde `/api/experiences`, registros, textos, URLs y estados existentes. El alcance corresponde a Experiencias en el mockup aprobado `.impeccable/mocks/home/02-fotografias-fanzine-hero-beneficios-aa14daf4.png`; Hero, introducción, Beneficios, Contacto, Footer, API, datos y catálogo general conservan su implementación anterior.

## Hallazgos corregidos

- La cuadrícula dependía de tres parejas fijas de IDs. Los registros adicionales o con otros identificadores se omitían. Ahora recorre toda la respuesta y conserva su orden. La extensión actual sustituye el patrón posterior de tarjetas anchas y estrechas por columnas iguales.
- La tarjeta exportaba el modelo de datos y toda la configuración visual. Ahora los contratos compartidos pertenecen a `features/experiences/types.ts` y la presentación a `features/experiences/config.ts`.
- La sección reunía validación, peticiones, reintentos, placeholders y tarjetas. Cada responsabilidad tiene un lugar explícito y el contenido resuelve carga, error y lista vacía con condiciones y retornos tempranos; el catálogo queda en el retorno final.
- El reintento incrementaba un contador para activar un efecto. Ahora inicia la petición desde el manejador del evento; el efecto se ocupa de la carga inicial y la limpieza al desmontar.
- La validación aceptaba IDs no enteros, duplicados y campos de texto vacíos. Ahora rechaza esas respuestas antes de renderizar tarjetas.
- Los títulos usaban cada palabra como clave de React. Ahora la clave incluye su posición para admitir palabras repetidas.
- El fallo de una imagen quedaba asociado a toda la tarjeta. Ahora se mantiene dentro del componente de imagen y cambiar su URL reinicia ese estado mediante una clave.

## Organización

| Archivo | Responsabilidad |
| --- | --- |
| `app/` | Rutas, API, layout, composición y estilos globales de Next.js |
| `components/layout/` | Encabezado y navegación compartidos por la página |
| `features/experiences/types.ts` | Datos, presentación y props de tarjeta, imagen, skeleton y vista editorial |
| `features/experiences/config.ts` | Cuadrícula de inicio, tamaños de imagen, alturas mínimas, inclinaciones y tono |
| `features/experiences/experiences.module.css` | Papel raster, máscara del sello y colores forzados |
| `features/experiences/hooks/use-experiences.ts` | Petición, validación, estado, carga inicial, cancelación y reintento |
| `features/experiences/components/experiences-section.tsx` | Contenedor y encabezado estáticos, renderizados en el servidor |
| `features/experiences/components/experiences-content.tsx` | Estados de interfaz y listado de tarjetas en el cliente |
| `features/experiences/components/experiences-loading.tsx` | Mensaje de carga y cuadrícula de placeholders |
| `features/experiences/components/experience-skeleton.tsx` | Placeholder reutilizable de una tarjeta |
| `features/experiences/components/experiences-error.tsx` | Mensaje de error y botón de reintento |
| `features/experiences/components/experience-card.tsx` | Contenido semántico y composición de una tarjeta |
| `features/experiences/components/experience-image.tsx` | Imagen optimizada, acento visual y alternativa ante un fallo |
| `features/experiences/components/experiences-page.tsx`, `experiences-intro.tsx`, `experience-feature.tsx`, `experiences-invitation.tsx` | Cuatro componentes del catálogo general existente, con presentación independiente de las tarjetas de inicio |
| `features/experiences/editorial-content.ts` | Contenido complementario y fotografías locales del catálogo general |
| `data/experiences.json` | Fuente estática del endpoint local |
| `public/images/textures/experience-paper-2587a8dc.webp` | Textura transparente única compartida por las tarjetas de inicio; procedencia en su sidecar |

## Decisiones

Experiencias se organiza fuera de `app/`, en `features/experiences/`. Actualmente contiene dieciséis archivos, once de ellos componentes; la cifra de diez correspondía al refactor anterior. Los contratos de tarjeta, imagen y skeleton están en `types.ts`, aunque tengan un único consumidor; la afirmación anterior sobre declarar toda prop privada dentro de su componente ya no describe estos contratos. El error conserva su interfaz local anterior y el estado del hook vive junto a él. No se mantiene un archivo por cada interfaz.

La petición y la validación tienen un único consumidor: `useExperiences`. Se colocan junto al hook y se elimina `services/`. La configuración visual se reúne en `config.ts`, sin una carpeta adicional. No se crea `lib/` porque todavía no hay helpers no visuales realmente compartidos. La API sigue devolviendo directamente el JSON estático desde su ruta de Next.js.

Los siete componentes de inicio conservan sus responsabilidades. `ExperienceImage` gestiona el fallo de la imagen, el acento visual y el reinicio del estado al cambiar la URL. `ExperiencesContent` maneja carga, error, vacío y éxito; mantenerlo separado permite conservar el encabezado estático en el servidor. La carga, su placeholder, el error y la tarjeta tienen vistas claras. El mensaje vacío permanece dentro del contenido. El catálogo general utiliza otros cuatro componentes y su propio contenido editorial; no consume las tarjetas rediseñadas.

En la reorganización anterior, los tres componentes globales se movieron a `components/layout/`. Se conserva `navigation-items.tsx` porque contiene JSX reutilizado por las navegaciones de escritorio y móvil; no es un archivo con un array de configuración. El Hero permanece en `app/page.tsx` como composición de la página. Esos movimientos son antecedentes y no forman parte de la extensión de fanzine.

Se aplica la habilidad local `vercel-react-best-practices` junto con las guías de la versión instalada de Next.js. El encabezado estático queda fuera del componente cliente, los cambios de estado ocurren en callbacks de la petición y en el evento de reintento, y el estado derivado se calcula durante el renderizado. No se añaden dependencias, cachés ni memoización de cálculos sencillos.

Las tarjetas y los placeholders comparten cuadrícula y alturas mínimas, con crecimiento según contenido: una columna hasta 767 px, dos desde 768 px y tres desde 1200 px. Se elimina la alternancia de parejas 7/5 y 5/7. `getExperiencePresentation` repite pequeñas inclinaciones, entre −0,6° y 0,6°, únicamente desde 1200 px; conserva el tono rojo para el ID 5, independiente de su posición.

Tailwind resuelve estructura, tipografía y reflujo. El CSS Module breve aporta textura, máscara del sello y alternativa para colores forzados. El único raster transparente mide 768 × 959 px y pesa 147.596 bytes; su sidecar registra ImageGen, prompt, origen y optimización con Sharp incluido con Next.js. Una base crema mantiene la lectura del contenido si la textura falla. El texto sigue siendo HTML y cada tarjeta enlaza a `/experiencias`; se conservan fallback, foco visible y movimiento reducido, sin dependencias nuevas.

Cada petición cancela la anterior. Los callbacks comprueban su señal antes de actualizar el estado, incluso si una respuesta termina después de la cancelación. Al desmontar el contenido, se cancela la petición activa.

Para ampliar la lista de inicio, se añade un registro con un ID entero positivo y único a `data/experiences.json`. La cuadrícula no requiere cambios; inclinaciones y tono se definen en `getExperiencePresentation`, que sustituye la configuración anterior de anchos y `presentationOverrides`. El catálogo general tiene contenido editorial separado que también debe completarse cuando se amplía esa página. Las imágenes remotas deben estar permitidas en `next.config.ts`; la validación comprueba que el campo de imagen sea una cadena no vacía, no la disponibilidad del recurso.

## Verificación histórica del refactor estructural

Las comparaciones y pruebas siguientes pertenecen a la reorganización anterior. No certifican la extensión visual actual, que cambia deliberadamente el aspecto de tarjetas y CSS.

En la última reorganización pasaron `pnpm lint`, `pnpm build` y TypeScript. Los cuerpos de los diez componentes globales y de la feature, el hook y sus cuatro funciones de carga y validación coinciden con la referencia previa. El CSS de producción es idéntico byte por byte. También se conservaron los hashes de estilos globales, layout, API, datos, aliases, dependencias y configuración de Next.js.

En el navegador, el DOM del Hero, Header y Experiencias y las medidas de las tarjetas coinciden antes y después a 402 y 1440 px. La apertura del menú genera el mismo DOM y Escape lo cierra. Se comprobaron error HTTP, carga visible al reintentar, recuperación de las seis tarjetas, lista vacía y el anchor de Experiencias mediante respuestas de prueba locales, sin modificar la API ni los datos del proyecto.

- ESLint, TypeScript y compilación de producción.
- Validación de listas válidas, vacías y ampliadas, registros incompletos, textos vacíos e IDs inválidos o duplicados.
- Comprobación de la señal de cancelación, la política `no-store`, los errores HTTP y el patrón de columnas para cien posiciones.
- Pruebas de navegador sobre la compilación de producción con respuestas controladas: error HTTP, reintento con carga visible, recuperación, lista vacía, IDs duplicados y siete registros con un título que repite palabras.
- Revisión responsive de las seis tarjetas y comprobación de carga de las imágenes originales.

Los servidores y las respuestas controladas son recursos locales temporales y no modifican la API ni el catálogo del proyecto.

En este entorno, Node inicialmente no verificó el certificado de Picsum y las tarjetas mostraron su alternativa de imagen. Se comprobó la carga correcta usando `node --use-system-ca`, que utiliza los certificados confiables del sistema y mantiene la validación TLS.

## Verificación de la extensión de fanzine

La evidencia de este cambio está en `.impeccable/review/experiences-fanzine/`. `verification.md` registra ESLint, dos compilaciones de producción con TypeScript y nueve páginas, comprobación de diff, detector con `[]` y escaneo de dos rasters sin sidecars pendientes. Esta actualización documental no repite esas ejecuciones.

- Las métricas DOM a 1440, 768 y 390 px registran seis enlaces al catálogo, sin desbordamiento de página, títulos o descripciones; sólo escritorio aplica inclinaciones. La muestra móvil registra una imagen todavía fuera del viewport, cuya carga posterior aparece en `mobile-end.jpg`.
- Se documentó navegación real con Tab, foco visible y Enter hasta «Experiencias que conectan.». La conservación de carga, error, vacío, reintento y fallback se revisó en código, sin capturas nuevas de esos estados.
- El recorrido incluye siete capturas JPEG nativas, no de página completa: una de escritorio, dos de tablet y cuatro de móvil. `capture-dimensions.json` enumera las siete y explica sus encuadres.
- `contrast.json` calcula 5,66:1 para el sello y 16,69:1 para tinta frente a papel base. Estas relaciones de colores uniformes no certifican el mínimo de cada píxel del grano.
- La revisión independiente fresca tiene disposición manual **ship**, sin correcciones materiales pendientes. `finish-review.md` cubre contrato, código, mockup y siete capturas de la sección; no repite las pruebas. Su observación sobre una entrada ausente de `mobile-end.jpg` corresponde a una lectura anterior: el registro actual ya la incluye.

No se midieron LCP, INP o FPS, no se probaron dispositivos físicos y no se envió el formulario. No se aportan capturas de zoom o colores forzados ni una auditoría completa de accesibilidad, rendimiento o seguridad.

## Límites y sistema heredado

La identidad existente se observa en `app/globals.css` y `app/layout.tsx`: fondo casi negro, crema, gris y rojo, Anton para display, Space Grotesk para cuerpo, contenedor fluido y esquinas rectas. El fanzine es una extensión local. `DESIGN.md` y `.impeccable/design.json` estaban ausentes y siguen ausentes; no se crea una especificación global. Se conserva el drift previo de tokens y colores literales en componentes, y el contexto inicial todavía presente en partes de `PRODUCT.md`, sin repararlo.

El estado previo de `build-phase` de Beneficios permanece abierto en `plates` porque su decodificador rechaza la textura WebP como PNG. Se preservó sin `reset` ni `force`; esta extensión no tiene fases automáticas, `comp-diff/spec` ni `QUALITY BAR` certificados. La disposición `ship` es el juicio manual al alcance descrito.

El rediseño inicial conservó las URLs aleatorias de Picsum. El 4 de octubre de 2026, por petición del usuario, se seleccionaron fotografías temáticas del catálogo y se fijaron sus IDs en `data/experiences.json`. Se mantiene Picsum como proveedor, con imágenes de 600 × 400 px y el recorte 4:3 existente; las fotografías ahora son estables. La selección y sus fuentes están documentadas en `docs/experiencias-imagenes.md`.
