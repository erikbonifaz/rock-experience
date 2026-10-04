# Imágenes de la página de experiencias

La página `/experiencias` utiliza fotografías de referencia para acompañar las seis propuestas de la campaña ficticia. No representan eventos propios de ROCK EXPERIENCE. Los nombres y las descripciones del catálogo se conservan en `data/experiences.json`; las tarjetas de inicio usan fotografías fijas de Picsum seleccionadas por su relación con cada propuesta.

## Tarjetas de inicio

El 4 de octubre de 2026 se revisó visualmente el [catálogo de Picsum](https://picsum.photos/images) y se sustituyeron las seis URLs aleatorias por el formato `https://picsum.photos/id/{id}/600/400`. El ID determina la fotografía, por lo que las tarjetas conservan su imagen al recargar o cambiar de tamaño. Se comprobó la respuesta HTTP 200 de las seis URLs, sus dimensiones de 600 × 400 px y el recorte central a 4:3 que utiliza la tarjeta.

| Tarjeta | ID de Picsum | Fotografía y criterio | Autor y fuente original |
| --- | --- | --- | --- |
| Gaming Experience | 96 | Mando de videojuegos; identifica la interacción y el juego. | [Pawel Kadysz](https://unsplash.com/photos/CuFYW1c97w8) |
| Music Sessions | 453 | Músicos sobre un escenario; conecta con las sesiones y la identidad rock. | [Gonzalo Poblete](https://unsplash.com/photos/C1tnzdAmPE8) |
| Creator Lab | 454 | Persona sosteniendo una cámara; representa la creación de contenido. | [Mia Domenico](https://unsplash.com/photos/1z1F5Qc30Bs) |
| AI Experience | 36 | Dispositivo electrónico desarmado; asociación visual con tecnología, no una representación literal de IA. | [Vadim Sherbakov](https://unsplash.com/photos/osSryggkso4) |
| Live Experience | 452 | Público y luces de concierto; representa la experiencia compartida en directo. | [Desi Mendoza](https://unsplash.com/photos/CuSHBGBdXc0) |
| Digital Commerce | 341 | Persona interactuando con un móvil; asociación con servicios y transacciones digitales, sin mostrar una compra concreta. | [timothy muza](https://unsplash.com/photos/6VjPmyMj5KM) |

Las autorías y los enlaces originales proceden de la API de Picsum. Las imágenes siguen siendo remotas, optimizadas con `next/image` y cargadas de forma diferida. `next.config.ts` permite únicamente HTTPS en `picsum.photos`, sin puerto ni parámetros de consulta, para rutas `/id/*/600/400`. La selección no añade dependencias ni modifica el diseño de las tarjetas.

## Página general de experiencias

Las fotografías se descargaron el 3 de octubre de 2026 desde Unsplash, tras comprobar que cada página indicaba uso bajo la [licencia Unsplash](https://unsplash.com/license). Los archivos se guardan localmente en `public/images/experiences/`, como JPEG de hasta 1600 px de ancho y calidad 82. Next.js genera los tamaños y formatos adecuados mediante `next/image`.

| Archivo | Autor | Fuente |
| --- | --- | --- |
| `cover-concert.jpg` | Nathan Collier | [Banda sobre un escenario con luces rojas](https://unsplash.com/photos/band-on-stage-with-red-lights-NqyORrt3njs) |
| `gaming.jpg` | Erik Mclean | [Control junto a un teclado](https://unsplash.com/fr/photos/une-manette-de-jeu-video-posee-a-cote-dun-clavier-1lo0k0EPAug) |
| `music.jpg` | Marc Fanelli-Isla | [Consola de mezcla de audio](https://unsplash.com/photos/black-and-gray-audio-mixer-xo4ValczbuA) |
| `creators.jpg` | Jakob Owens | [Cámara de producción audiovisual](https://unsplash.com/photos/black-camera-on-white-and-black-surface-qLbf7meaKBE) |
| `technology.jpg` | John Jemison | [Componentes de una computadora](https://unsplash.com/photos/black-circuit-board-GS-ArbPX56Y) |
| `live.jpg` | Jack Dong | [Escenario y público de un concierto](https://unsplash.com/photos/crowd-watching-a-concert-with-red-stage-lights-wP-IfDbawvo) |
| `commerce.jpg` | rupixen | [Tarjeta bancaria y computadora portátil](https://unsplash.com/photos/person-using-laptop-computer-holding-card-Q59HmzK38eQ) |

Cada JPEG conserva el origen en su metadato COM. La portada utiliza `cover-concert.jpg`, elegida por el usuario entre cuatro alternativas, con un encuadre centrado en móvil y panorámico en escritorio. La fotografía `live.jpg` se conserva en el bloque de Live Experience. El contenido editorial y los encuadres de los seis bloques están en `features/experiences/editorial-content.ts`; los nombres y las descripciones se leen del mismo JSON que usa la API existente.
