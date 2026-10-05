---
version: 1
slug: "anifesto-components-manifesto-section-tsx-50e1c1a1"
primary_target: "features/manifesto/components/manifesto-section.tsx"
related_targets: ["app/page.tsx"]
---

# Manifiesto panorámico de ROCK EXPERIENCE

Modo: Persuade. Extensión de la landing existente. El usuario eligió la propuesta 2 y autorizó implementarla el 5 de octubre de 2026. Ubicación: entre Beneficios y Quiero participar.

## Direction contract

THESIS: pasar del catálogo a una escena humana que invite a imaginar la participación.
OWN-WORLD: fotografía editorial en blanco y negro, fondo negro texturizado, Anton y Space Grotesk existentes; rojo #FF2442 para TÚ y el enlace.
STORY: descubrir propuestas, entender la invitación, imaginarse dentro de ella y acceder al formulario.
FIRST VIEWPORT: panorama de público a la izquierda; a la derecha, LA EXPERIENCIA / LA HACES TÚ., descripción breve y Quiero ser parte. En móvil, imagen encima y texto debajo. La imagen se funde con el fondo hacia el formulario.
FORM: propuesta 2 aprobada de las tres composiciones mostradas; ampliación local, sin selección de una identidad nueva ni seed. Referencia: .impeccable/mocks/manifesto/02-manifiesto-panoramico.png. Texto y enlace son HTML; fotografía regenerada como recurso independiente. Componentes de servidor, Tailwind para composición, CSS sólo donde las capas se lean mejor.
FINISH: cerrar con revisión fresca, veredicto, documentación local de esta superficie y procedencia de la fotografía publicada. Conservar la ausencia histórica de DESIGN.md y design.json según el alcance aprobado; no convertir la composición en una regla global ni declarar aprobado un gate automático abierto.

## Límites

Conservar la identidad y el resto de las secciones, incluidos los ajustes previos del gafete. La fotografía es ilustrativa de una campaña ficticia. No agregar testimonios, cifras, eventos, precios ni controles de reproducción. Respetar navegación por teclado, contraste, movimiento reducido y la carga diferida de la fotografía. Esta ampliación conserva la ausencia histórica de DESIGN.md y design.json; no repara esa deriva ni cambia el sistema global.

## Referencias y autorización

Los mockups originales y sus prompts están en la carpeta de visualizaciones de esta conversación. La autorización implementala sigue a la recomendación explícita de la propuesta panorámica. Se conserva una copia de cada propuesta y se marca la segunda como aprobada.

## Reglas locales implementadas

Estas reglas se aplican al manifiesto; amplían la identidad visible de la landing sin definir una identidad nueva.

- Ubicar la sección `#manifiesto` después de Beneficios y antes de `#contacto`. El titular es un `h2` en dos líneas: «LA EXPERIENCIA» / «LA HACES TÚ.», con «TÚ.» en el rojo existente.
- Mantener Anton para el titular y Space Grotesk para la descripción y el enlace. Reutilizar los tokens existentes de crema, rojo y fondo oscuro de `app/globals.css`.
- Dejar transparente el fondo de la sección para conservar la textura global. Fundir la fotografía mediante una máscara vertical; desde 1100 px, sumar el desvanecimiento hacia el contenido de la derecha.
- Hasta 1099 px, mostrar la fotografía encima del contenido. Desde 1100 px, la fotografía ocupa el 54 % del ancho de la sección y el contenido se sitúa a la derecha. El cambio de 640 px ajusta espaciado, cuerpo de texto y ancho del enlace, sin alterar el orden apilado.
- Conservar la descripción aprobada: «Música, creatividad y tecnología. Encuentra lo que te mueve y forma parte de la experiencia.» El cuerpo es de 18 px en móvil, 20 px desde 640 px y `clamp(20px, 1.9vw, 26px)` desde 1100 px. La captura de escritorio confirma 26 px y tres líneas.
- «Quiero ser parte» es un enlace real a `#contacto`, de ancho completo en móvil y ancho automático desde 640 px; en escritorio tiene un mínimo de 328 × 66 px. Hereda el foco visible global y anula la transición cuando se solicita movimiento reducido.
- Mantener texto y enlace en HTML y la fotografía como recurso independiente. El componente permanece de servidor, sin JavaScript nuevo; la imagen usa `next/image` y carga diferida.
- Usar `public/images/manifesto-audience.webp` como fotografía ilustrativa de la campaña ficticia, sin atribuirla a un evento real. Conservar su procedencia en el archivo contiguo `.webp.json` (ImageGen, 1391 × 1131 px, 126426 bytes).

## Evidencia y estado de cierre

El registro local está en `.impeccable/review/manifesto/documentation.md`. Las capturas de escritorio, móvil y tableta verifican ambas disposiciones. Los dos hallazgos estéticos del revisor —cuerpo de escritorio demasiado pequeño y fondo plano que tapaba la textura— se corrigieron y se generaron nuevas capturas.

La revisión fresca posterior confirma ambas correcciones, valida las capturas canónicas y no observa regresiones ni necesidad de otro rediseño. Su veredicto conserva un cierre parcial por la limitación formal de la comparación automática: el reporte final registra `drift` con una puntuación global de 0.7595, superior al umbral global de 72 %, pero el gate regional estricto sigue abierto. No fue forzado ni se modificó el estado bruto para simular un pase. La composición y las mediciones observadas no canonizan esa deriva ni reparan la documentación global ausente.
