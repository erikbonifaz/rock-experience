---
version: 1
slug: "features-hero-components-hero-section-tsx"
primary_target: "features/hero/components/hero-section.tsx"
related_targets: []
---

# Refactor del Hero

Superficie: sección #inicio de la landing, trasladada a features/hero/components/hero-section.tsx. Modo: Persuade. El usuario solicita código sencillo y legible, Tailwind como primera opción y CSS únicamente donde evite una implementación excesivamente compleja. El alcance excluye las demás secciones.

## Direction contract

THESIS: conservar la presentación existente mientras se hace explícita y fácil de seguir la composición del Hero.

OWN-WORLD: misma imagen, textos, paleta, Anton, Space Grotesk, título contorneado, degradados, llamadas a la acción, geometría y adaptación responsive. Los estilos compartidos del encabezado y footer conservan sus resultados.

STORY: presentar la campaña y mantener las dos acciones hacia Experiencias y Contacto, con sus nombres accesibles y foco visible.

FIRST VIEWPORT: conservar la imagen de fondo y el título sobre ella en escritorio; imagen y contenido apilados en móvil y tablet. Mantener los ajustes existentes para pantallas de escritorio de poca altura.

FORM: un único componente de servidor sin hooks, interfaces, configuración dinámica ni componentes artificiales. Layout, espaciado, tipografía básica y controles en Tailwind. CSS Module para degradados, fórmulas dependientes de ancho y altura y flecha decorativa cuando mejora la lectura. Conservar el contorno global compartido con el footer.

FINISH: comparación de medidas y capturas antes/después a 375, 768, 1099, 1100, 1280 y 1440 px, comprobación de enlaces, lint y build. Verificar que los archivos y las declaraciones CSS ajenos al Hero no cambien.
