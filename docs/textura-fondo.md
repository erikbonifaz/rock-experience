# Textura de fondo

ROCK EXPERIENCE utiliza una textura oscura discreta para añadir materialidad a los fondos de contenido y al pie de página. Es una ampliación del sistema visual existente: conserva sus colores, las fuentes Anton y Space Grotesk, la geometría, las fotografías y el contenido. El Hero mantiene su fotografía y su protagonismo.

## Recurso y procedencia

El [WebP original](../public/images/textures/rock-surface-0c426ac5.webp) fue generado con ImageGen para este proyecto. La inspiración es el carácter de superficie desgastada de [Hellfest](https://hellfest.fr/); no se copió ni descargó un recurso de ese sitio. El prompt exacto y la fecha de generación están en el [archivo de procedencia contiguo](../public/images/textures/rock-surface-0c426ac5.webp.json).

La fuente generada es un PNG de 1254 × 1254 píxeles, conservado en la evidencia privada. Se convirtió a un WebP opaco de 768 × 768 píxeles con `sharp`, disponible como dependencia transitiva de Next.js, con calidad 72 y esfuerzo 6. El recurso servido pesa 75.528 bytes (75,5 KB decimales). Su SHA-256 es `0c426ac5cb70e23c5223436c1b424a2421386c9602b900b61a4f1678f95aebc8`; el nombre incorpora sus primeros ocho caracteres.

## Aplicación y contraste

La fuente de verdad está en [app/globals.css](../app/globals.css): `--surface-texture` apunta al WebP y `--surface-shade` define una capa negra con opacidad del 85%. El `body` conserva `--background` como color de respaldo y repite la textura a 768 × 768 píxeles, con la capa negra encima. La escala es la misma en escritorio y móvil.

En [SiteFooter](../components/layout/site-footer.tsx), las capas se ordenan de arriba hacia abajo: capa negra, resplandor radial rojo existente y textura. Esto mantiene el resplandor bajo la capa que controla la luminosidad del fondo.

La opacidad del 85% preserva el contraste del texto pequeño gris y rojo sobre el material. El cálculo sobre todos los píxeles del WebP, incluyendo el tinte de la introducción y el resplandor del footer, dio mínimos de 7,15:1 para el texto secundario y 4,61:1 para el rojo. El cálculo no cubre texto sobre fotografías, antialiasing ni otras superficies existentes.

La implementación usa fondos CSS estáticos y reutiliza el mismo recurso. No añade dependencias, hooks ni animaciones. Los tokens de color, tipografía, espaciado y comportamiento adaptable siguen definidos por el sistema existente.

## Caché y mantenimiento

[next.config.ts](../next.config.ts) establece `Cache-Control: public, max-age=31536000, immutable` para `/images/textures/:path*`. La verificación en producción obtuvo una respuesta `200`, tipo `image/webp` y 75.528 bytes; la petición condicional obtuvo `304` y un cuerpo de 0 bytes.

Si se cambia la imagen:

1. Recalcular el SHA-256 del WebP final y usar sus primeros ocho caracteres en el nombre.
2. Renombrar el archivo de procedencia contiguo para que corresponda al nuevo WebP y registrar su prompt exacto si se genera otra imagen.
3. Actualizar la URL de `--surface-texture` en `app/globals.css` y los enlaces documentales afectados.
4. Comprobar repetición, contraste y peso del nuevo recurso. No sobrescribir el mismo nombre: la caché `immutable` requiere una URL nueva cuando cambian los bytes.

## Verificación y alcance

`pnpm lint`, `pnpm build` y `git diff --check` pasaron. La revisión final de la textura concluyó `ship`; las capturas documentadas cubren escritorio, tableta, móvil y un panel de 495 píxeles. La comparación de producción conservó los mismos diez archivos JavaScript, con los mismos nombres, hashes y un total de 1.043.983 bytes.

El coste comprobado incluye un recurso estático adicional de 75,5 KB y su pintado. No se midieron LCP, INP ni FPS, por lo que estos resultados no establecen un impacto nulo en esas métricas.
