# Revisión y refactorización de Experiencias

La revisión prioriza la legibilidad y la separación de responsabilidades. La última reorganización es exclusivamente estructural: conserva la carga dinámica desde `/api/experiences`, los textos, las imágenes originales, los estados de carga, error y lista vacía, y la composición de las seis tarjetas actuales.

## Hallazgos corregidos

- La cuadrícula dependía de tres parejas fijas de IDs. Los registros adicionales o con otros identificadores se omitían. Ahora recorre toda la respuesta, conserva su orden y repite el patrón visual de tarjetas anchas y estrechas.
- La tarjeta exportaba el modelo de datos y toda la configuración visual. Ahora los contratos compartidos pertenecen a `features/experiences/types.ts` y la presentación a `features/experiences/config.ts`.
- La sección reunía validación, peticiones, reintentos, placeholders y tarjetas. Cada responsabilidad tiene un lugar explícito y el contenido elige sus estados con un `switch`.
- El reintento incrementaba un contador para activar un efecto. Ahora inicia la petición desde el manejador del evento; el efecto se ocupa de la carga inicial y la limpieza al desmontar.
- La validación aceptaba IDs no enteros, duplicados y campos de texto vacíos. Ahora rechaza esas respuestas antes de renderizar tarjetas.
- Los títulos usaban cada palabra como clave de React. Ahora la clave incluye su posición para admitir palabras repetidas.
- El fallo de una imagen quedaba asociado a toda la tarjeta. Ahora se mantiene dentro del componente de imagen y cambiar su URL reinicia ese estado mediante una clave.

## Organización

| Archivo | Responsabilidad |
| --- | --- |
| `app/` | Rutas, API, layout, composición y estilos globales de Next.js |
| `components/layout/` | Encabezado y navegación compartidos por la página |
| `features/experiences/types.ts` | Contratos `Experience` y `ExperiencePresentation`, compartidos entre archivos de la feature |
| `features/experiences/config.ts` | Proporciones, tamaños de imagen, altura y ajustes visuales |
| `features/experiences/hooks/use-experiences.ts` | Petición, validación, estado, carga inicial, cancelación y reintento |
| `features/experiences/components/experiences-section.tsx` | Contenedor y encabezado estáticos, renderizados en el servidor |
| `features/experiences/components/experiences-content.tsx` | Estados de interfaz y listado de tarjetas en el cliente |
| `features/experiences/components/experiences-loading.tsx` | Mensaje de carga y cuadrícula de placeholders |
| `features/experiences/components/experience-skeleton.tsx` | Placeholder reutilizable de una tarjeta |
| `features/experiences/components/experiences-error.tsx` | Mensaje de error y botón de reintento |
| `features/experiences/components/experience-card.tsx` | Contenido semántico y composición de una tarjeta |
| `features/experiences/components/experience-image.tsx` | Imagen optimizada, acento visual y alternativa ante un fallo |
| `data/experiences.json` | Fuente estática del endpoint local |

## Decisiones

Experiencias se organiza fuera de `app/`, en `features/experiences/`. La feature pasa de diecisiete a diez archivos. Las props que solo usa un componente se definen en ese archivo. Los contratos compartidos se reúnen en `types.ts`; el estado que solo utiliza el hook vive junto a él. No se mantiene un archivo por cada interfaz.

La petición y la validación tienen un único consumidor: `useExperiences`. Se colocan junto al hook y se elimina `services/`. La configuración visual se reúne en `config.ts`, sin una carpeta adicional. No se crea `lib/` porque todavía no hay helpers no visuales realmente compartidos. La API sigue devolviendo directamente el JSON estático desde su ruta de Next.js.

Se conservan los siete componentes de Experiencias porque representan responsabilidades actuales. `ExperienceImage` gestiona el fallo de la imagen, el acento visual y el reinicio del estado al cambiar la URL. `ExperiencesContent` maneja carga, error, vacío y éxito; mantenerlo separado permite conservar el encabezado estático en el servidor. La carga, su placeholder, el error y la tarjeta tienen vistas claras. El mensaje vacío permanece dentro del contenido.

Los tres componentes globales se mueven a `components/layout/`. Se conserva `navigation-items.tsx` porque contiene JSX reutilizado por las navegaciones de escritorio y móvil; no es un archivo con un array de configuración. El Hero permanece en `app/page.tsx` como composición de la página. Las rutas, los datos, los assets, los estilos, los aliases y las dependencias conservan sus archivos y configuración.

Se aplica la habilidad local `vercel-react-best-practices` junto con las guías de la versión instalada de Next.js. El encabezado estático queda fuera del componente cliente, los cambios de estado ocurren en callbacks de la petición y en el evento de reintento, y el estado derivado se calcula durante el renderizado. No se añaden dependencias, cachés ni memoización de cálculos sencillos.

Las tarjetas y los placeholders comparten una única cuadrícula y las mismas alturas. El patrón de escritorio alterna parejas de 7/5 y 5/7 columnas. El acento rojo de la experiencia 5 se conserva como un ajuste explícito, independiente de su posición.

Cada petición cancela la anterior. Los callbacks comprueban su señal antes de actualizar el estado, incluso si una respuesta termina después de la cancelación. Al desmontar el contenido, se cancela la petición activa.

Para ampliar el catálogo, se añade un registro con un ID entero positivo y único a `data/experiences.json`. La cuadrícula no requiere cambios. Los ajustes visuales particulares se definen en `presentationOverrides`. Las imágenes remotas deben estar permitidas en `next.config.ts`; la validación de datos comprueba que el campo de imagen sea una cadena no vacía, no la disponibilidad del recurso.

## Verificación

En la última reorganización pasaron `pnpm lint`, `pnpm build` y TypeScript. Los cuerpos de los diez componentes globales y de la feature, el hook y sus cuatro funciones de carga y validación coinciden con la referencia previa. El CSS de producción es idéntico byte por byte. También se conservaron los hashes de estilos globales, layout, API, datos, aliases, dependencias y configuración de Next.js.

En el navegador, el DOM del Hero, Header y Experiencias y las medidas de las tarjetas coinciden antes y después a 402 y 1440 px. La apertura del menú genera el mismo DOM y Escape lo cierra. Se comprobaron error HTTP, carga visible al reintentar, recuperación de las seis tarjetas, lista vacía y el anchor de Experiencias mediante respuestas de prueba locales, sin modificar la API ni los datos del proyecto.

- ESLint, TypeScript y compilación de producción.
- Validación de listas válidas, vacías y ampliadas, registros incompletos, textos vacíos e IDs inválidos o duplicados.
- Comprobación de la señal de cancelación, la política `no-store`, los errores HTTP y el patrón de columnas para cien posiciones.
- Pruebas de navegador sobre la compilación de producción con respuestas controladas: error HTTP, reintento con carga visible, recuperación, lista vacía, IDs duplicados y siete registros con un título que repite palabras.
- Revisión responsive de las seis tarjetas y comprobación de carga de las imágenes originales.

Los servidores y las respuestas controladas son recursos locales temporales y no modifican la API ni el catálogo del proyecto.

En este entorno, Node inicialmente no verificó el certificado de Picsum y las tarjetas mostraron su alternativa de imagen. Se comprobó la carga correcta usando `node --use-system-ca`, que utiliza los certificados confiables del sistema y mantiene la validación TLS.
