# Imágenes de la página de experiencias

La página `/experiencias` utiliza fotografías de referencia para acompañar las seis propuestas de la campaña ficticia. No representan eventos propios de ROCK EXPERIENCE. El catálogo original de la prueba y sus URLs provisionales se conservan en `data/experiences.json`.

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
