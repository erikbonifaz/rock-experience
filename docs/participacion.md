# Participación

La sección `/#contacto` presenta el formulario como una acreditación de concierto, a partir de la referencia elegida y autorizada por el usuario el 4 de octubre de 2026. Conserva la identidad existente: negro mate, papel crema, rojo `#FF2442`, Anton para titulares y Space Grotesk para lectura y controles. El [contrato local](../.impeccable/surfaces/features-contact-participation-section-tsx.md) registra la dirección y su alcance.

## Composición

Desde 1100 px, la invitación queda a la izquierda, sobre el fondo general de la página; el formulario ocupa la credencial oscura, con una franja crema de 150 px a su derecha. La fotografía de equipo de concierto se retiró por preferencia del usuario. Por debajo, la invitación precede a la credencial y la franja pasa al pie. Los campos forman dos columnas desde 640 px y una en anchos menores. Se conserva el espaciado de sección aprobado: 72 px, 96 px desde 640 px y 160 px desde 1100 px.

El cordón y los aros son ornamentación fotográfica; la credencial permanece recta. Los controles, mensajes y acciones son HTML. El marco usa `border-image` para crecer con los errores y con el área de mensaje, sin fijar la altura del formulario. Tailwind resuelve composición, tipografía y estados; el módulo CSS concentra material y adaptación a colores forzados.

## Organización

| Archivo en `features/contact/` | Responsabilidad |
| --- | --- |
| [participation-section.tsx](../features/contact/participation-section.tsx) | Sección rotulada e invitación |
| [participation-credential.tsx](../features/contact/participation-credential.tsx) | Marco, cordón, identidad y composición de la acreditación |
| [registration-strip.tsx](../features/contact/registration-strip.tsx) | Franja de registro y enlace a la arquitectura |
| [participation-form.tsx](../features/contact/participation-form.tsx) | Controles y presentación de los estados del formulario |
| [hooks/use-participation-form.ts](../features/contact/hooks/use-participation-form.ts) | Validación del formulario, petición, estado de confirmación y reinicio |
| [schema.ts](../features/contact/schema.ts) | Reglas Zod del formulario, contrato de confirmación y valores iniciales |
| [types.ts](../features/contact/types.ts) | Contratos de respuesta y propiedades |
| [field-error.tsx](../features/contact/field-error.tsx) y [participation-confirmation.tsx](../features/contact/participation-confirmation.tsx) | Mensajes asociados y confirmación accesible, que gestiona su propio foco |
| [participation.module.css](../features/contact/participation.module.css) | Materiales y alternativa para colores forzados |

La interacción reutiliza React Hook Form, Zod y su resolver existentes; este rediseño no añade paquetes al frontend. La composición estática permanece fuera del componente cliente del formulario.

## Validación y envío

Nombre requiere al menos dos caracteres; correo, formato válido; teléfono, entre 8 y 15 dígitos y caracteres permitidos; mensaje, al menos cinco caracteres. Empresa es opcional y la aceptación del aviso de privacidad es obligatoria. Los valores de texto se recortan antes de validarse. El formulario valida al salir del campo y al enviar.

Cada control tiene etiqueta, tipo y autocompletado apropiados, foco visible y error asociado mediante `aria-describedby`; `aria-invalid` comunica el estado. Un envío inválido enfoca el primer campo con error. Durante el POST a `/api/contact`, el formulario expone `aria-busy` y el botón muestra «Enviando...» y queda deshabilitado.

Una respuesta HTTP fallida, JSON ilegible o una confirmación con estructura incorrecta muestra un mensaje de recuperación y conserva los valores. Una confirmación válida anuncia el resultado, recibe foco y muestra el código devuelto por la API y un enlace a `/demo/submissions/<id>`. «Enviar otro mensaje» limpia los cinco campos, el consentimiento y los errores. La aplicación conserva su API de persistencia existente; la simulación descrita más abajo pertenece exclusivamente a las pruebas locales.

La auditoría de simplicidad sustituyó el validador manual por `submissionConfirmationSchema`: exige `success: true`, un ID entero positivo y seguro, y un código con texto. La vista de confirmación concentra su referencia y efecto de foco; el hook deja de transportar esa referencia entre componentes. Las verificaciones del refactor están en [auditoria-y-entrevista.md](auditoria-y-entrevista.md).

Las imágenes, el `01` y el código de barras son decorativos y no se anuncian como datos del registro. «Cómo funciona» es un enlace real a `/arquitectura`; puede utilizarse sin escanear el QR. El módulo CSS proporciona una alternativa con colores del sistema y sin textura en `forced-colors`. El indicador de envío respeta movimiento reducido; no se añadió animación ornamental.

## Recursos y procedencia

| Recurso en `public/images/textures/` | Función | Bytes |
| --- | --- | ---: |
| `participation-frame-7bc13a3a.webp` | Material del marco y fondo oscuro | 77.016 |
| `participation-lanyard-b46e84d4.webp` | Cordón y aros | 13.088 |
| `participation-strip-b3489fbd.webp` | Papel crema de registro | 70.770 |

Los tres originales suman **160.874 bytes**. Marco, cordón y papel conservan transparencia real. El cordón usa `next/image` con carga diferida; marco y papel son fondos CSS. El total corresponde a los archivos de origen, sin acreditar un coste de transferencia ni Core Web Vitals.

Cada WebP tiene un sidecar `<archivo>.json` con prompt, herramienta `image_gen.imagegen`, fecha, referencia y optimización. Son recursos originales generados para esta composición. Codex, con Impeccable, apoyó la preparación de materiales, su optimización y la implementación; las decisiones se contrastaron con la referencia, el código y las evidencias de QA. Esta declaración no atribuye una revisión manual de código al usuario.

[architecture-qr.svg](../public/images/contact/architecture-qr.svg) y [rock-barcode.svg](../public/images/contact/rock-barcode.svg) se generan localmente mediante [generate-qr.py](../.impeccable/research/participation/generate-qr.py), sin generador en el navegador. El QR estándar tiene 33 × 33 módulos, corrección M y margen de cuatro módulos; codifica `https://rock-experience-ten.vercel.app/arquitectura`. Si cambia el dominio de publicación, actualizar esa URL y regenerar el SVG. El código de barras representa `ROCK`; `01` es numeración decorativa. La franja declara «CAMPAÑA FICTICIA».

## Verificación y límites

La [verificación registrada](../.impeccable/review/participation/verification.md) y las [métricas](../.impeccable/review/participation/metrics.json) recogen ESLint y compilación de Next.js con TypeScript correctos. Se comprobaron validación, foco al primer error, carga, respuesta HTTP 503, JSON de confirmación inválido, confirmación con foco y reinicio. El [proxy local de QA](../.impeccable/research/participation/form-preview-server.mjs) interceptó todos los POST del formulario: esas pruebas no guardaron registros en la base de datos.

Las ocho capturas finales están en `.impeccable/review/participation/`: escritorio a 1440 × 1100; tableta a 768 × 1100, superior e inferior; móvil a 390 × 1100, superior e inferior; mínimo a 320 × 1100, superior, campos con errores e inferior. Los archivos `*-initial.jpg` son evidencia histórica. Los JPEG finales se escalan proporcionalmente al ancho útil; sus dimensiones no equivalen al viewport CSS solicitado.

La revisión independiente encontró un desbordamiento global a 320 px: el mínimo fijo del `body` ignoraba los 15 px ocupados por la barra vertical. La corrección en [app/globals.css](../app/globals.css) usa `min-width: min(320px, 100%)`. Después, `clientWidth` y `scrollWidth` son 305 px, tanto con el formulario vacío como con errores. A 390, 768 y 1440 px también coinciden: 375, 753 y 1425 px. A 320 px, los errores de dos líneas aumentan la altura del formulario de 867,875 a 967,875 px sin recorte.

El cierre de revisión es **Pass**, con el hallazgo resuelto, sin correcciones pendientes y disposición **ship**. El último pase se limita a verificar esa corrección de desbordamiento; la valoración de fidelidad y materiales procede de la revisión original. La comprobación inicial que comparaba con `innerWidth` se corrigió para usar `scrollWidth > clientWidth`.

No se volvió a probar la persistencia del servidor real, no se midieron Core Web Vitals del despliegue ni se escaneó el QR con un teléfono físico. Estas pruebas tampoco certifican la accesibilidad completa del sitio. La documentación registra esta extensión local; conserva la ausencia previa de `DESIGN.md` y `.impeccable/design.json` y no corrige la deriva histórica de otros documentos.

Después de esa QA, el usuario solicitó retirar la fotografía de equipo de concierto. Se eliminaron su renderizado, CSS y recurso. La comprobación de escritorio confirma el formulario presente, cero imágenes de equipo y ausencia de desbordamiento; `without-equipment-desktop.jpg` registra el ajuste. Las capturas anteriores documentan la implementación original.
