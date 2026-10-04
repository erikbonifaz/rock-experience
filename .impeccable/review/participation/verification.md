# Verificación de la acreditación

Sección de participación; referencia aprobada del usuario. Pruebas sobre `next build` y servidor local `next start` con certificados del sistema. El proxy de QA intercepta cada POST /api/contact: no se enviaron registros a la base de datos.

- ESLint y compilación con TypeScript: correctos.
- Envío vacío: nombre, correo, teléfono, mensaje y privacidad muestran errores asociados; foco en Nombre. Empresa permanece opcional.
- Envío válido: aria-busy=true, texto Enviando… y botón deshabilitado.
- Respuesta HTTP 503: mensaje de recuperación; valores conservados y botón habilitado de nuevo.
- JSON de confirmación inválido: mensaje de recuperación; no se presenta un registro incorrecto.
- Confirmación simulada: muestra #DEMO-CRED-001 y enlace /demo/submissions/42; el contenedor recibe foco.
- Enviar otro mensaje: cinco campos vacíos, consentimiento desmarcado y errores reiniciados.
- Imágenes originales: cuatro WebP suman 221090 bytes; alpha real en marco, cordón y papel. Carga diferida en next/image; material mediante border-image que crece con el contenido. Sin nuevos paquetes de ejecución ni animación ornamental.
- Procedencia: scan de seis texturas, ninguna sin prompt/origen. WebP utiliza sidecars, formato aceptado por la herramienta.
- QR estándar M de 33×33 módulos, cuatro módulos de margen; URL de la documentación de producción, sin generador en el cliente. El código de barras representa ROCK y el 01 es decorativo, no el identificador del envío.
- Detector de layout: []. La referencia del usuario autoriza el registro, la numeración decorativa y los códigos; prevalece sobre preferencias visuales generales de la skill.

Capturas finales: escritorio 1440×1100; tableta 768×1100 (superior e inferior); móvil 390×1100 (superior e inferior, con errores); mínimo 320×1100 (superior, campos con errores e inferior). A 320, cinco errores de dos líneas hacen crecer el formulario de 867.875 a 967.875 px, sin recorte. El enlace Cómo funciona navega a /arquitectura. Se conserva el espaciado aprobado anteriormente; no se cambia el contenido de otras secciones.

La revisión independiente detectó que la comprobación inicial de overflow usaba innerWidth; el criterio correcto es scrollWidth > clientWidth. El mínimo global del body, ya presente en HEAD, forzaba 320px aunque la barra vertical dejara 305px útiles, también en /arquitectura. Se corrigió solo esa regla a min-width:min(320px,100%). Después: innerWidth=320, clientWidth=scrollWidth=bodyWidth=305, clientHeight=1100 y sin barra horizontal, tanto vacío como con errores. Los JPEG nativos se reducen proporcionalmente al ancho útil: 1425, 753, 375 y 305px; no equivalen directamente a las dimensiones CSS de la captura.

Limitaciones: el flujo del servidor real de persistencia no se volvió a probar; las respuestas HTTP son simuladas. No se ha medido Core Web Vitals de un despliegue ni se ha probado el escaneo físico del QR con un teléfono.

Después de esta verificación, el usuario solicitó retirar la imagen de equipo de concierto. Se eliminaron su renderizado, CSS y recurso; permanecen tres WebP con 160874 bytes en total. La captura without-equipment-desktop.jpg documenta la versión vigente. La comprobación local confirmó formulario presente, cero imágenes de equipo y scrollWidth=clientWidth=1425. Lint y build se volvieron a ejecutar correctamente antes del commit.
