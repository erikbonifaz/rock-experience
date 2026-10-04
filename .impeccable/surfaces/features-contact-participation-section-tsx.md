# Participación: acreditación de concierto

Modo: Operate. Extensión de la identidad rock existente. Referencia aprobada: imagen de acreditación adjunta y autorización «implementalo» del usuario, 4 de octubre de 2026.

## Direction contract

THESIS: convertir el formulario en una acreditación de concierto, conservando controles reales y su comportamiento.

OWN-WORLD: negro mate desgastado, papel crema, rojo #FF2442, Anton y Space Grotesk existentes. Cordón negro y aros metálicos fotográficos; ningún elemento gira el formulario.

STORY: la persona identifica la invitación, completa sus datos y recibe el registro de demostración. El QR abre Cómo funciona; la banda declara CAMPAÑA FICTICIA.

FIRST VIEWPORT: invitación grande sobre el fondo general de la página a la izquierda; credencial horizontal con formulario oscuro y franja crema a la derecha. En móvil la invitación precede al formulario y la franja pasa a su pie. El marco crece con los errores y el mensaje.

FORM: composición fijada por el usuario; no corresponde otra ronda de conceptos. La captura adjunta es la referencia visual y el formulario mantiene validación, envío, confirmación y reinicio actuales. Se preservan los espacios aprobados y las otras secciones.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

Límite documental: extensión local; conservar la ausencia histórica de DESIGN.md y design.json, sin reparar esa deriva como parte de este trabajo. El estado comp-led anterior pertenece a beneficios y no se reinicia. Revisión visual manual de la referencia con capturas del nuevo formulario.

## Implementación, verificación y procedencia

La implementación conserva Anton, Space Grotesk y la paleta existente. Desde 1100 px, la invitación queda a la izquierda y la credencial con franja crema a la derecha; debajo, la franja pasa al pie. Los campos forman dos columnas desde 640 px y una en anchos menores. El espaciado aprobado de sección permanece en 72/96/160 px. Los controles siguen siendo HTML y el marco `border-image` crece con errores y mensaje. Tailwind expresa la composición; el módulo CSS limita su responsabilidad a material y colores forzados.

`features/contact/` separa presentación, tipos, esquema, hook de formulario y comprobación de respuesta. No se añaden paquetes al frontend. Se conservan validación, POST a la API existente, recuperación ante fallo, confirmación con foco y reinicio. La [guía de participación](../../docs/participacion.md) documenta los archivos y su mantenimiento.

Los tres WebP vigentes suman 160.874 bytes; sus sidecars incluyen prompt, origen, herramienta, fecha, referencia y optimización. Marco, cordón y papel conservan alpha real. Codex con Impeccable e `image_gen.imagegen` apoyó recursos e implementación, contrastados con referencia, código y QA; no se atribuye al usuario una revisión manual de código. QR y código de barras son SVG generados localmente con `generate-qr.py`, sin generador cliente: URL `https://rock-experience-ten.vercel.app/arquitectura`, nivel M, margen de cuatro módulos; código de barras `ROCK` y `01` decorativo. El enlace accesible apunta a `/arquitectura` y la franja declara «CAMPAÑA FICTICIA».

La [verificación](../review/participation/verification.md) y las [métricas](../review/participation/metrics.json) registran lint/build correctos, validación, carga, HTTP 503, confirmación JSON inválida, confirmación con foco y reset. El proxy de QA interceptó todos los POST, sin crear registros reales. Las ocho capturas finales cubren escritorio 1440, tableta 768, móvil 390 y mínimo 320 px; las históricas llevan `-initial`. No se volvieron a probar persistencia real, Core Web Vitals del despliegue ni escaneo físico del QR.

La revisión encontró overflow global a 320 px por el mínimo fijo del `body`; se corrigió únicamente esa regla a `min-width: min(320px, 100%)`. Las recapturas y métricas confirman `clientWidth = scrollWidth = 305px` en vacío y con errores; también coinciden a 390/768/1440 px. El cierre es **Pass**: resuelto, sin hallazgos pendientes, disposición **ship**. Ese último pase verifica la corrección de overflow; mantiene la valoración de fidelidad y materiales de la revisión original. Se conserva la ausencia histórica de `DESIGN.md` y `.impeccable/design.json` sin canonizar esta composición como sistema global ni reparar deriva anterior.

## Ajuste solicitado: retirar el equipo de concierto

Se elimina la fotografía de la invitación, su máscara CSS y el archivo de imagen que dejó de utilizarse. Se conservan la credencial, el cordón, la banda crema, el espaciado y el comportamiento del formulario. La referencia original queda como antecedente; esta preferencia explícita actualiza su composición.
