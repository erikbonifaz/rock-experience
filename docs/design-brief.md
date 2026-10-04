# Brief de dirección visual — ROCK EXPERIENCE

**Estado: dirección de arte aprobada por el usuario.**

Superficie: página principal `/`. Público: personas que descubren experiencias y quieren participar, incluidas personas que no hablan inglés. Modo de la superficie: Persuade; el diseño debe ayudar a comprender la campaña, explorar las seis propuestas y completar el formulario.

Los requisitos funcionales proceden de `PRODUCT.md` y `docs/Prueba Tecnica Candidatos Web Developer Rock.docx`. La dirección de arte responde al brief proporcionado por el usuario y a `docs/rock-reference.jpg`. La interfaz actual es la base de Create Next App; no constituye una identidad visual que deba conservarse.

Este documento registra el sistema visual y las composiciones aprobadas. `PRODUCT.md` describe el producto; `docs/design-brief.md` describe su dirección de arte. Las cifras de tamaño y separación son referencias de diseño; su ajuste final dependerá de la maqueta y de la comprobación con las fuentes y fotografías elegidas.

## Decisiones aprobadas

- Mantener Anton para titulares y Archivo para textos, navegación y formulario.
- Mantener la paleta: `#101010`, `#F2F0E9`, `#AAA69F` y `#FF2442`.
- Mantener la composición de la portada descrita en el apartado 11.
- Mantener el sistema editorial de Experiencias y sus variantes reutilizables, descritos en el apartado 12.
- Mantener los textos conceptuales de Beneficios del apartado 13.
- Mantener por ahora intactas las seis URL de imagen suministradas por la prueba. Cualquier sustitución requiere una nueva indicación del usuario.
- La fotografía de la portada será un recurso independiente de las imágenes de las experiencias; su selección sigue pendiente.

La implementación de la landing completa sigue pendiente. Esta aprobación confirma la dirección de arte y no inicia su implementación.

## 1. Tesis visual

**Una portada cultural en negro y rojo que convierte seis experiencias de marcas, tecnología y personas en una programación editorial, con fotografía dominante, tipografía monumental y un recorrido claro hacia la participación.**

La impresión que debe permanecer es la de una campaña con energía de cartel y organización de revista: imagen y palabras grandes al principio; contenidos concretos al recorrerla; una invitación comprensible al final.

## 2. Principios de dirección de arte

1. **La fotografía ocupa espacio real.** Sus bordes, proporciones y recortes organizan la página; no es una miniatura dentro de un contenedor decorativo.
2. **La escala establece jerarquía.** Un titular monumental convive con etiquetas pequeñas y párrafos legibles. Cada sección tiene una composición reconocible y distinta.
3. **La asimetría tiene alineaciones.** Imágenes y textos cambian de tamaño y posición, pero se apoyan en una retícula compartida y conservan el orden de lectura.
4. **El rojo señala momentos.** Concentrar su mayor presencia en la portada y usarlo después en llamadas a la acción y acentos pequeños. La mayoría del recorrido permanece monocromática.
5. **El vacío marca el ritmo.** Alternar pasajes fotográficos intensos con zonas de lectura y pausas. No separar todos los bloques con la misma cantidad de espacio.
6. **La expresión convive con la claridad.** La influencia brutalista se expresa en bordes rectos, escala y disposición; las instrucciones, la navegación y el formulario siguen siendo familiares y accesibles.

## 3. Paleta exacta

| Papel | Color | Uso |
| --- | --- | --- |
| Fondo principal | `#101010` | Fondo continuo, zonas de lectura y superficies del formulario |
| Texto principal | `#F2F0E9` | Titulares, texto, enlaces y contornos tipográficos |
| Texto secundario | `#AAA69F` | Descripciones auxiliares, etiquetas y bordes funcionales |
| Acento único | `#FF2442` | Fotografía en duotono, botones principales, numeración, foco y errores |

Divisores puramente decorativos: texto principal al 18 % de opacidad sobre el fondo. No utilizar esa versión tenue como borde necesario para reconocer un campo, estado o control.

Contrastes calculados entre colores planos:

| Combinación | Relación aproximada | Decisión |
| --- | --- | --- |
| Texto principal sobre fondo | 16.69:1 | Lectura principal |
| Gris secundario sobre fondo | 7.85:1 | Texto auxiliar y bordes de campos |
| Rojo sobre fondo | 5.06:1 | Etiquetas, errores y foco |
| Fondo casi negro como texto sobre rojo | 5.06:1 | Texto de los botones rojos |
| Texto principal sobre rojo | 3.30:1 | No usar en texto pequeño de botones |

Los valores anteriores no certifican texto superpuesto a fotografías: ese contraste debe comprobarse con el recorte y tratamiento definitivos. Los umbrales de referencia son 4.5:1 para texto normal y 3:1 para texto grande, según [WCAG 2.2, contraste de texto](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

## 4. Familias tipográficas

| Familia | Papel | Selección y motivo |
| --- | --- | --- |
| Anton | Titulares, nombres de experiencias y logotipo textual | Peso real 400. Su dibujo condensado y pesado permite una presencia de cartel sin comprimir artificialmente las letras. Reservarla para frases cortas |
| Archivo | Párrafos, navegación, etiquetas, enlaces y formulario | Pesos 400, 500 y 600; ancho normal. Aporta una voz editorial sobria y una lectura más cómoda en instrucciones y textos largos |

Anton se distribuye con un peso 400; Archivo dispone de ejes variables de peso y ancho. Ambas incluyen subconjuntos latinos y licencia OFL en el catálogo oficial. No simular un peso 800 de Anton ni cargar variantes que no se utilizarán. Fuentes: [Anton en Google Fonts](https://github.com/google/fonts/blob/main/ofl/anton/METADATA.pb) y [Archivo en Google Fonts](https://github.com/google/fonts/blob/main/ofl/archivo/METADATA.pb).

Las mayúsculas se reservan para titulares, navegación breve y etiquetas editoriales. Los párrafos, los mensajes de error y los campos conservan una escritura normal. Mantener acentos, signos y nombres originales. Evitar introducir una tercera familia para números o etiquetas.

## 5. Escala tipográfica

Valores de referencia en píxeles, con tamaños fluidos entre los tres anchos:

| Elemento | 1440 px | 768 px | 375 px | Interlineado |
| --- | --- | --- | --- | --- |
| Titular principal | 176 | 104 | 64 | 0.92 |
| Título de Experiencias | 112 | 72 | 48 | 0.98 |
| Título de Beneficios | 96 | 64 | 44 | 1.00 |
| Título del formulario | 120 | 72 | 48 | 0.98 |
| Experiencia destacada | 56 | 44 | 40 | 1.05 |
| Experiencia vertical u horizontal | 44–48 | 36–40 | 32–36 | 1.08 |
| Experiencia compacta | 32 | 30 | 28 | 1.10 |
| Texto principal de campaña | 20 | 18 | 18 | 1.50 |
| Texto de lectura | 18 | 17 | 16 | 1.55 |
| Etiqueta editorial | 13 | 13 | 13 | 1.40 |
| Etiqueta o entrada de formulario | 16 | 16 | 16 | 1.50 |
| Ayuda o error | 14 | 14 | 14 | 1.50 |

Titulares: espaciado entre letras de aproximadamente `-0.01em`. Etiquetas editoriales: `0.12em`; botones: `0.06em`. No aplicar espaciado amplio a párrafos o valores de los campos.

Contorno tipográfico: 2 px en escritorio y 1.5 px en tableta y teléfono. Utilizarlo en la segunda línea del titular principal, sobre negro uniforme; no convertir todos los títulos en contornos. Si la prueba de lectura con la fuente y el tamaño reales falla, esa línea debe pasar a texto sólido.

No recortar ascendentes, acentos o descendentes. Los nombres de experiencias pueden ocupar varias líneas y sus descripciones permanecen completas.

## 6. Sistema de separación

Base de 4 px, con ritmos principales de 8 px. Escala: **4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 72, 96, 128 y 160 px**.

| Relación | Separación propuesta |
| --- | --- |
| Etiqueta y contenido; etiqueta de campo y entrada | 8 px |
| Título y descripción | 12–16 px |
| Fotografía y bloque de texto de experiencia | 16–24 px |
| Campos y grupos próximos | 24–32 px |
| Párrafo y llamadas a la acción | 32 px |
| Encabezado de sección y contenido | 48 / 40 / 32 px, según dispositivo |
| Entre las parejas editoriales de experiencias | 96 / 64 / 48 px |
| Pausa antes de Beneficios y Participación | 128 / 96 / 72 px |
| Mayor pausa editorial en escritorio | 160 px, solo en el cambio a Beneficios |

Usar más espacio antes de un encabezado que entre ese encabezado y su contenido. En teléfono, conservar pausas perceptibles sin trasladar los vacíos laterales de escritorio.

## 7. Retícula y contenedores

| Ancho de pantalla | Márgenes laterales | Ancho útil | Columnas | Separación de columnas |
| --- | --- | --- | --- | --- |
| 1440 px | 56 px | 1328 px | 12 | 24 px |
| 768 px | 32 px | 704 px | 8 | 20 px |
| 375 px | 20 px | 335 px | 4 | 16 px |

El contenedor principal tiene un máximo de 1328 px y márgenes fluidos. La retícula es una guía de alineación, no una obligación de introducir doce elementos visibles. Los párrafos generales se limitan aproximadamente a 55–65 caracteres por línea; las descripciones de experiencias siguen el ancho de su composición.

Bordes rectos: radio de 0 px en fotografías, botones y campos. Sin sombras de tarjetas ni fondos independientes para cada experiencia. Los desplazamientos verticales ocurren dentro de cada pareja editorial y desaparecen cuando la lectura pasa a una columna.

## 8. Tratamiento de fotografías

La imagen de portada debe mostrar energía humana en un escenario o instalación audiovisual: gestos, público o interacción, con el sujeto principal hacia la derecha y espacio oscuro hacia la izquierda. Su función es representar el encuentro de cultura, personas y tecnología; no documentar un evento real de ROCK EXPERIENCE.

| Zona | Tratamiento | Recorte |
| --- | --- | --- |
| Portada | Duotono rojo y negro | Panorámico en escritorio, más cercano en teléfono; conservar el gesto o sujeto principal |
| Experiencias 01–04 y 06 | Monocromo de contraste controlado | Proporción definida por su variante, con posición focal explícita |
| Experiencia 05, Live Experience | Segundo momento de duotono rojo | Horizontal, sin competir en tamaño con la portada |
| Beneficios y formulario | Sin fotografía | El cambio de ritmo depende de texto, líneas y espacio |

Preparar una versión de duotono estable para que el resultado no dependa de combinaciones complejas de filtros y capas en tiempo real. No aplicar desenfoques grandes ni filtros animados. Mantener detalle en rostros, manos y objetos relevantes.

El texto que cruza la fotografía debe quedar sobre una zona oscura controlada; el contorno del titular queda sobre fondo negro uniforme. No usar texto dentro del archivo de imagen.

La decisión inicial conservaba las seis URLs aleatorias suministradas por la prueba. El 4 de octubre de 2026 el usuario solicitó sustituirlas por fotografías de Picsum relacionadas con cada tarjeta. Se mantienen los IDs, nombres, categorías y descripciones de las experiencias; únicamente cambia `image` a una fotografía fija del mismo proveedor. La selección y sus fuentes están en `docs/experiencias-imagenes.md`.

| ID de experiencia | URL actual de la fotografía |
| --- | --- |
| 1 | `https://picsum.photos/id/96/600/400` |
| 2 | `https://picsum.photos/id/453/600/400` |
| 3 | `https://picsum.photos/id/454/600/400` |
| 4 | `https://picsum.photos/id/36/600/400` |
| 5 | `https://picsum.photos/id/452/600/400` |
| 6 | `https://picsum.photos/id/341/600/400` |

La fotografía de la portada será un recurso independiente, cuya selección está pendiente. No se reutilizan fotografías ni artistas de la referencia.

## 9. Botones y enlaces

| Elemento | Apariencia | Comportamiento |
| --- | --- | --- |
| Acción principal | Rectángulo rojo, texto casi negro, altura mínima de 48 px, relleno horizontal de 24 px | “Explorar experiencias” enlaza a Experiencias |
| Acción secundaria | Texto claro con línea y flecha horizontal; área activa de al menos 44 px de alto | “Quiero participar” enlaza al formulario |
| Acción del encabezado | Rectángulo rojo más compacto, con área activa suficiente | “Participar” enlaza al formulario |
| Enlace de navegación | Archivo 500, texto claro, subrayado de interacción | Desplazamiento a una sección real |
| Envío del formulario | Botón rojo con texto casi negro | “Enviar mis datos”; acción de formulario, no enlace |

Todos los controles tienen foco visible. El foco puede usar un contorno de 3 px separado del control por 3 px; alrededor de un botón rojo, utilizar contorno claro y separación oscura. El efecto de interacción nunca sustituye ese foco.

La flecha acompaña una acción real. No añadir flechas o comportamiento de botón a experiencias que solo muestran información. No crear enlaces a páginas de detalle inexistentes.

## 10. Motivos gráficos recurrentes

- Flechas horizontales largas en las llamadas a la acción, con línea de 1.5–2 px y longitud de 64–96 px en escritorio, 32–48 px en teléfono.
- Numeración de secciones: `01 / INICIO`, `02 / EXPERIENCIAS`, `03 / BENEFICIOS` y `04 / PARTICIPAR`.
- Numeración de experiencias `01–06`, que representa los seis registros reales.
- Etiquetas pequeñas en mayúsculas con espaciado amplio.
- Divisores finos que unen grupos editoriales, sin encerrar cada elemento en una caja.
- Bloques rojos pequeños, de 8–12 px, junto a determinadas etiquetas.

Evitar iconos decorativos, cintas en movimiento, texturas pesadas y símbolos sin significado. No introducir fechas, aforos, precios o insignias de exclusividad que no estén en el contenido confirmado.

## 11. Composición de la portada

Referencia de presentación para escritorio: **1440 × 900 px**. La altura no se fija a una pantalla ni se fuerza mediante recortes del contenido.

| Pieza | Posición y composición en escritorio |
| --- | --- |
| Encabezado | Franja de 88 px. Logotipo textual a la izquierda; cuatro enlaces y “Participar” a la derecha. Fondo negro, sin desenfoque ni barra secundaria |
| Etiqueta de apertura | `01 / INICIO`, alineada con la primera columna y separada de la navegación |
| Fotografía | Columnas 5–12, aproximadamente 877 px de ancho y proporción 21:9. Inicia 32 px debajo del encabezado; su sujeto ocupa la mitad derecha |
| Titular | Columnas 1–10. Dos líneas: `VIVE ALGO` sólida y `DIFERENTE.` en contorno. La primera cruza el borde inferior de la foto; la segunda continúa sobre negro, fuera del área fotográfica |
| Texto de campaña | Debajo del titular, columnas 1–5, con el texto obligatorio completo |
| Acciones | En esa misma banda inferior, columnas 7–12: acción principal roja y acción secundaria con flecha, sin centrar el conjunto |

El texto fuente del único `h1` es “Vive algo diferente.”; las mayúsculas pertenecen a su presentación. El párrafo conserva: “Descubre experiencias creadas para conectar marcas, tecnología y personas.”

La fotografía y el titular forman una misma composición, con la imagen a la derecha y el título naciendo desde el margen izquierdo. El contorno no tapa rostros ni se coloca sobre detalles luminosos. Se busca que título, párrafo y ambas acciones estén visibles a 1440 × 900; ese objetivo se verificará con la maqueta y el contenido reales.

Al terminar la portada, una banda breve introduce “MARCAS. TECNOLOGÍA. PERSONAS.” y el dato real “6 experiencias”. Es una transición hacia el catálogo, sin añadir una cuadrícula de características.

## 12. Composición de Experiencias

Encabezado de sección: etiqueta `02 / EXPERIENCIAS`, título sólido “EXPERIENCIAS” alineado a la izquierda y una frase breve que invite a recorrer las seis propuestas. Después, tres parejas editoriales.

| Orden | Experiencia | Variante | Posición en la retícula de escritorio | Proporción de imagen |
| --- | --- | --- | --- | --- |
| 01 | Gaming Experience | `large` | Columnas 1–8, inicio de la primera pareja | 16:10 |
| 02 | Music Sessions | `portrait` | Columnas 10–12, 96 px más abajo que 01 | 3:4 |
| 03 | Creator Lab | `portrait` | Columnas 2–5, inicio de la segunda pareja | 4:5 |
| 04 | AI Experience | `landscape` | Columnas 7–12, 96 px más abajo que 03 | 16:9 |
| 05 | Live Experience | `landscape` | Columnas 1–7, inicio de la tercera pareja | 16:9 |
| 06 | Digital Commerce | `compact` | Columnas 9–12, 64 px más abajo que 05 | Miniatura 3:2 junto al texto |

`ExperienceCard` conserva una anatomía compartida: número, categoría, fotografía, título y descripción. La variante y la posición focal de imagen se determinan mediante datos de presentación o propiedades, separadas de los registros originales. No se duplican componentes por variante.

Los títulos y categorías mantienen los nombres originales de la prueba; las descripciones visibles están en español y permiten entender la propuesta sin conocimientos de inglés. No ocultar información detrás del cursor ni truncar descripciones para igualar alturas.

El orden de contenido y teclado permanece `01 → 06`. No utilizar redistribución densa ni una galería calculada con JavaScript que altere la secuencia. Tras la última pareja, un enlace “Quiero participar” conecta el catálogo con el formulario.

| Estado de los datos | Presentación propuesta |
| --- | --- |
| Carga | Espacios fotográficos reservados con las proporciones de cada variante y mensaje “Cargando experiencias…”. Sin pulsación obligatoria |
| Error | Bloque editorial legible: “No pudimos cargar las experiencias.” y botón “Reintentar”; conservar el encabezado y las otras secciones |
| Éxito | Los seis registros completos, con sus variantes |
| Respuesta vacía | “Por ahora no hay experiencias disponibles.”; conservar la invitación a participar, sin inventar elementos |
| Imagen fallida | Mantener dimensiones y mostrar una alternativa neutra dentro de la paleta; no eliminar el título ni la descripción |

## 13. Dirección de Beneficios

Una pausa tipográfica después del catálogo: sin fotografías y con mayor espacio superior. Etiqueta `03 / BENEFICIOS`; titular en dos líneas “OTRAS FORMAS / DE CONECTAR.”, de menor tamaño que la portada.

En escritorio, el titular ocupa las columnas 1–6. En las columnas 8–12, una lista editorial de tres filas con divisores y descripciones. En teléfono, título y lista se suceden en una columna.

Textos promocionales aprobados, derivados del propósito confirmado:

| Entrada | Texto |
| --- | --- |
| DESCUBRE | “Explora propuestas de videojuegos, música, creación y tecnología.” |
| CONECTA | “Acércate a experiencias pensadas para reunir marcas y personas.” |
| PARTICIPA | “Comparte tu interés mediante el formulario de la campaña.” |

Son invitaciones conceptuales; no prometen resultados. No incluir cifras de conversión, clientes, premios, exclusividad ni mejoras comerciales. La sección termina con “Quiero participar”, integrado en el recorrido.

## 14. Dirección del formulario

Etiqueta `04 / PARTICIPAR`. Título “QUIERO / PARTICIPAR” a la izquierda, en columnas 1–5; formulario en columnas 7–12. Sin tarjeta elevada, sombra o panel de aplicación. El propio fondo negro sostiene el conjunto.

En el formulario de escritorio, Nombre y Correo electrónico comparten fila; Teléfono y Empresa comparten la siguiente. Mensaje, aviso de privacidad y botón ocupan el ancho disponible. En tableta y teléfono, todos los campos pasan a una columna.

Los campos tienen etiquetas persistentes encima, superficie negra, texto claro, línea inferior gris de contraste alto y altura mínima de 52 px. El mensaje utiliza un área de texto con borde sencillo y altura inicial aproximada de 144 px. Los textos de ayuda permanecen debajo del campo.

| Campo | Requisito y tratamiento |
| --- | --- |
| Nombre | Obligatorio, mínimo dos caracteres; error claro junto al campo |
| Correo electrónico | Obligatorio y formato válido; entrada apropiada para correo |
| Teléfono | Obligatorio, caracteres y longitud razonables; teclado telefónico en dispositivos móviles |
| Empresa | Propuesta: opcional, identificada como tal; la prueba no exige validarla como obligatoria |
| Mensaje | Obligatorio; no sustituirlo por un texto predeterminado |
| Aviso de privacidad | Aceptación obligatoria, con casilla y etiqueta asociadas; acceso real al texto del aviso |

Validar al salir de un campo que se haya editado y al enviar. Después del primer intento fallido, actualizar los errores a medida que se corrijan. El envío inválido dirige el foco al primer campo con error; no se depende solo de su color.

En una simulación sin servicio real, la confirmación aparece tras la validación, sin demoras artificiales ni falsas peticiones en curso. Mantener el texto requerido: “Gracias. recibimos tus datos correctamente.” Presentarlo en un bloque dentro de la misma sección, anunciado de forma accesible, sin alertas del navegador ni confeti.

La condición de demostración debe quedar clara junto al formulario, por ejemplo: “Este formulario simula el envío de tus datos.” El aviso de privacidad debe describir el comportamiento real de esa demostración y queda pendiente de redactar y revisar; no usar un enlace vacío ni copiar el aviso del sitio de referencia.

## 15. Pie de página

Franja sobria con divisor superior y separación de 48–64 px. Logotipo textual a la izquierda; navegación breve y enlace “Volver al inicio” a la derecha. En teléfono, disponerlos verticalmente con áreas de interacción cómodas.

Cerrar con el texto factual: “Campaña ficticia desarrollada para una prueba técnica.” Añadir “Aviso de privacidad” cuando exista su destino real.

No incorporar una newsletter, redes sociales, dirección física, patrocinadores, tienda o venta de entradas: no forman parte del alcance confirmado. El cierre debe reforzar la identidad y la orientación sin introducir otra campaña.

## 16. Comportamiento a 1440, 768 y 375 px

| Zona | 1440 px | 768 px | 375 px |
| --- | --- | --- | --- |
| Navegación | Enlaces visibles, encabezado de 88 px | Encabezado de 72 px; botón “Menú” y lista expandible | Igual patrón de menú; logotipo y control caben en la misma fila |
| Portada | Fotografía panorámica desplazada a la derecha; titular cruza su borde inferior | Fotografía en columnas 3–8, proporción 16:9; título desde la columna 1; texto y acciones debajo | Fotografía de ancho completo, proporción 4:3; primera línea del título cruza ligeramente el borde inferior; segunda sobre negro |
| Acciones de portada | Juntas en la banda derecha inferior | En una fila propia debajo del párrafo | Apiladas; acción principal a todo el ancho y secundaria claramente visible |
| Experiencias | Tres parejas asimétricas con variantes y desplazamientos | Dos columnas; pesos y proporciones distintos, sin grandes desplazamientos verticales | Una secuencia vertical `01–06`, sin carrusel ni desplazamiento horizontal |
| Ritmo de imágenes | Alternancia de fotos anchas, verticales y miniatura | Conservar alternancia ajustada a anchuras legibles | 01 en 3:2; 02 en 3:4; 03 en 4:3; 04–05 en 16:9; 06 como miniatura junto al texto |
| Beneficios | Titular y lista en columnas separadas | Titular encima de la lista | Lista vertical con divisores y espacio entre entradas |
| Formulario | Título lateral y campos en dos columnas | Título arriba; campos en una columna | Todos los campos y mensajes a una columna, sin solapamientos |
| Pie de página | Horizontal y contenido | Dos grupos compactos | Marca, navegación y nota final apiladas |

Las variantes de imagen pueden cambiar de proporción según el dispositivo para controlar la longitud del recorrido. Mantener el sujeto y la descripción: no recortar contenido textual para conservar un aspecto.

El menú expandible aparece en el flujo de la página, sin pantalla modal ni bloqueo del desplazamiento. Debe poder abrirse con teclado, cerrarse con Escape y cerrar al elegir una sección; el cierre explícito devuelve el foco al control. Las anclas y el orden del documento siguen funcionando aunque no haya animaciones.

Comprobar también anchos intermedios y aumento de texto, no solo las tres capturas de referencia. Evitar que el título o la flecha causen desbordamiento horizontal.

## 17. Microinteracciones

La interacción distintiva es la flecha de acción: avanza 6 px al señalar o enfocar el enlace, mientras aparece un subrayado. Duración de referencia: 180–220 ms, con desaceleración suave. El foco sigue visible después de la transición.

| Elemento | Movimiento o respuesta |
| --- | --- |
| Enlaces | Aparición de subrayado y desplazamiento breve de flecha |
| Botones | Cambio moderado de tono dentro del mismo rojo y respuesta inmediata al activar |
| Campos | Línea inferior pasa a rojo; contorno de foco claramente visible |
| Fotografía con acción real | Escala máxima aproximada de 1.02, sin modificar el tamaño del contenedor |
| Fotografías informativas | Permanecen quietas, sin sugerir un enlace inexistente |

No se necesita una animación de entrada para entender o utilizar la página. Si la maqueta justifica una revelación de sección, limitarla a opacidad y un desplazamiento de hasta 8 px, sin ocultar contenido cuando falle JavaScript.

Con movimiento reducido, retirar desplazamientos, escalado y revelaciones; las acciones y los estados se comunican de manera estática. Sin reproducción automática, parallax, cursores personalizados ni bibliotecas de animación.

## 18. Riesgos de rendimiento y respuesta prevista

| Riesgo | Decisión propuesta |
| --- | --- |
| Fotografía de portada demasiado pesada | Imagen optimizada con Next/Image, dimensiones reservadas y tamaños adecuados a la retícula; dar prioridad solo a la imagen que realmente determine el LCP |
| Seis imágenes cargadas antes de ser necesarias | Carga diferida fuera del primer viewport; ajustar el tamaño servido a cada variante y pantalla |
| Cambios de tamaño durante la carga | Reservar proporciones de fotos y estados de carga; no calcular la disposición con mediciones de JavaScript |
| Fuentes que retrasen el texto o cambien sus saltos | Dos familias y solo variantes utilizadas; carga optimizada y alternativa de respaldo coherente; verificar el cambio de fuente |
| Filtros o duotono costosos | Tratamiento fotográfico preparado, sin animar filtros ni apilar efectos grandes |
| JavaScript innecesario | Limitar interacción a menú, datos y formulario; composición y microinteracciones principalmente mediante CSS |
| Imágenes aleatorias de Picsum | Comprobar disponibilidad y contenido; definir una fuente estable antes de prometer una fotografía temática definitiva |

Como presupuesto inicial propuesto, buscar una portada codificada de hasta unos 220 KB en escritorio y 100 KB en teléfono; comprobar la calidad visual antes de aceptar esa compresión. Estos valores son objetivos de trabajo, no resultados medidos ni garantías.

No usar WebGL, Three.js, vídeo de fondo, parallax pesado, filtros animados o carga de una biblioteca para efectos que resuelve CSS. Durante la implementación, leer las API de la versión instalada de Next.js y medir Core Web Vitals; esta fase no ha realizado esas mediciones.

## 19. Riesgos de accesibilidad y respuesta prevista

| Riesgo | Decisión propuesta |
| --- | --- |
| Contorno fino o texto sobre foto ilegible | Negro uniforme detrás del contorno; comprobar la foto real; pasar a texto sólido si no supera la prueba de lectura |
| Texto blanco pequeño en rojo | Usar texto casi negro en los botones rojos |
| Campos reconocibles solo por una línea tenue | Borde funcional gris de contraste alto y etiqueta persistente |
| Foco recortado por una foto o contenedor | Contorno visible fuera del control, sin recortarlo; verificar navegación completa por teclado |
| Asimetría que desordene lectura y foco | Mantener el mismo orden `01–06` en el documento y en la presentación; no reordenar con una galería densa |
| Mayúsculas y texto excesivamente pequeño | Mayúsculas en textos cortos; cuerpo de al menos 16 px y ayudas de 14 px; etiquetas de 13 px |
| Un error comunicado únicamente en rojo | Añadir mensaje asociado al campo y foco al primer error tras enviar |
| Cambios de estado que pasen inadvertidos | Anunciar carga relevante, error de datos y confirmación sin duplicar mensajes |
| Movimiento no deseado | Respetar movimiento reducido y mantener todo el contenido accesible sin animación |
| Navegación y contenido incomprensibles sin inglés | Interfaz funcional, descripciones, ayudas, errores y textos alternativos en español |

Un único `h1`; `h2` para secciones y `h3` para experiencias. Fotografías informativas con texto alternativo adecuado; elementos puramente decorativos sin anuncio redundante. Las flechas decorativas no se leen como palabras ni crean controles adicionales.

Los indicadores visuales necesarios para reconocer controles y estados deben alcanzar al menos 3:1 respecto al color adyacente, según [WCAG 2.2, contraste de elementos no textuales](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Esta propuesta utiliza esos criterios como referencia de trabajo; el cumplimiento se comprobará en la implementación, no se presume por haber elegido una paleta.

## 20. Qué se toma de la referencia y qué no se copia

| Elemento de `rock-reference.jpg` | Reinterpretación en ROCK EXPERIENCE |
| --- | --- |
| Fotografía roja dominante al inicio | Portada cultural con una imagen original y una posición focal pensada para el titular |
| Título de contorno que cruza el límite de la foto | Segunda línea de “Vive algo diferente.” que continúa sobre negro, con lectura comprobable |
| Titulares enormes y etiquetas pequeñas | Jerarquía propia con Anton y Archivo y escala distinta por sección |
| Composiciones laterales desiguales | Tres parejas editoriales para seis registros, con cuatro variantes reutilizables |
| Grandes intervalos negros entre pasajes | Pausa entre catálogo, beneficios tipográficos y participación |
| Flechas, líneas y acentos rojos | Motivos asociados a navegación y acciones reales |
| Alternancia entre imágenes grandes y contenido editorial | Catálogo fotográfico seguido de una sección de lectura y un formulario integrado |

No se copian el logotipo del museo, su nombre, los artistas, las fotografías, sus titulares, fechas, horarios, cifras, textos, patrocinadores ni la estructura de venta de entradas. Tampoco se añaden tienda, newsletter, noticias, inducciones o eventos con datos ficticios.

La retícula y el recorrido responden a otra tarea: comprender una campaña de seis experiencias y participar mediante un formulario. El formulario y sus estados son parte central de esta identidad propia, aunque no tengan equivalente en la captura de referencia.

## Pendientes para los siguientes pasos

1. Seleccionar la fotografía independiente de la portada, manteniendo intactas las seis URL de imagen de las experiencias.
2. Preparar la maqueta visual cuando el usuario solicite ese paso y comprobar escala, recortes y lectura en los tres tamaños.
3. Redactar y revisar el aviso de privacidad de la demostración antes de publicar el formulario.

El sistema visual y los textos conceptuales de Beneficios ya están aprobados. La preferencia confirmada es comenzar con una maqueta visual antes del código. El rendimiento y la accesibilidad se verificarán durante la implementación; la aprobación de la dirección de arte no acredita una página implementada.
