# Mapa de la aplicación

El mapa de Archify representa las cuatro páginas públicas, el registro de demostración y los flujos de Experiencias y del formulario. `/experiencias` lee el catálogo en el servidor; `/proyecto` utiliza README.md como fuente; `/arquitectura` incorpora el HTML generado con carga diferida.

## Archivos

- `rock-experience.json`: nodos, conexiones, textos, traducciones y referencias al código.
- `rock-experience.sources.json`: revisión base del proyecto y hashes de los archivos representados.
- `rock-experience.delivery.json`: resultado completo de la generación y sus comprobaciones.
- `rock-experience.delivery-summary.json`: resumen de ese resultado.
- `public/diagrams/rock-experience.html`: visor autocontenido que se publica con la aplicación.
- `public/diagrams/rock-experience.delivery.json`: procedencia y hashes del HTML; debe conservarse junto al visor.
- `generate.mjs`: preparación de las referencias y regeneración mediante el CLI de Archify.

El mapa muestra las relaciones necesarias para explicar los recorridos. Los enlaces de regreso, los estados alternativos y detalles de presentación se explican en los nodos y en las notas, sin añadir una flecha para cada control.

## Regenerar

Desde la raíz del proyecto, con una copia de Archify 3.0.1 disponible:

```bash
node docs/arquitectura/generate.mjs /ruta/a/archify/bin/archify.mjs
pnpm test
```

Archify se ejecuta como herramienta de generación; no se añade a las dependencias ni al JavaScript de la aplicación. Si cambia la estructura o un recorrido, primero ajusta los nodos y conexiones del JSON. El comando actualiza los rangos de código y ejecuta `finalize` con calidad `showcase`, que valida el esquema, la geometría, el HTML y el comportamiento del visor.

Cuando los archivos citados coinciden con la revisión del proyecto, las fuentes se vinculan a ese commit. Si contienen cambios locales, el comando copia únicamente los archivos citados a un repositorio temporal y verifica las referencias contra esa copia. Los enlaces del visor utilizan `local-only` para evitar atribuir cambios sin publicar a un commit de GitHub. El repositorio y el historial del proyecto no se modifican.

Las rutas, rangos de líneas y hashes quedan incluidos en el HTML; el visor funciona sin el repositorio temporal. Los enlaces de la página `/arquitectura` permiten explorar la rama publicada de GitHub, que puede ir por detrás del código local hasta el próximo commit y despliegue.

## Evitar discrepancias

`tests/architecture.test.mjs` comprueba la cobertura de las rutas, los hashes de los archivos citados y la correspondencia entre el JSON y el HTML generado. Si un cambio de código afecta al mapa, la prueba pide regenerarlo. Estas comprobaciones detectan desactualización; la dirección y el significado de las relaciones deben contrastarse con el código durante la revisión.

Los hashes de los archivos de código normalizan los saltos de línea a LF para evitar diferencias entre Windows y Linux. Los hashes del JSON y del HTML conservan los bytes del artefacto; `.gitattributes` evita que Git los transforme.
