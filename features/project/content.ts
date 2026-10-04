export const repositoryUrl = "https://github.com/erikbonifaz/rock-experience";
export const readmeUrl = `${repositoryUrl}/blob/master/README.md`;

export const sections = [
  { id: "ejecucion", label: "Cómo ejecutar" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "estructura", label: "Estructura" },
  { id: "decisiones", label: "Decisiones técnicas" },
  { id: "mejoras", label: "Mejoras pendientes" },
  { id: "inteligencia-artificial", label: "Uso de IA" },
];

export const technologies = [
  {
    name: "Next.js 16.3.8 + React 19.2.8",
    purpose: "App Router, renderizado y endpoints dentro del mismo proyecto.",
  },
  {
    name: "TypeScript",
    purpose: "Contratos explícitos y comprobación de tipos durante el desarrollo.",
  },
  {
    name: "Tailwind CSS 4",
    purpose: "Estilos responsive sobre la paleta y la tipografía del sitio.",
  },
  {
    name: "React Hook Form + Zod",
    purpose: "Estado del formulario y reglas de validación compartidas con el servidor.",
  },
  {
    name: "Supabase PostgreSQL",
    purpose: "Persistencia de solicitudes mediante un cliente exclusivo del servidor.",
  },
  {
    name: "ESLint 9 + pnpm 11.17.0",
    purpose: "Análisis estático y gestión de dependencias con un lockfile versionado.",
  },
  {
    name: "Archify",
    purpose: "Generación del HTML estático del mapa de arquitectura, sin una dependencia de ejecución adicional.",
  },
];

export const directories = [
  {
    path: "app/",
    purpose: "Rutas, layout, estilos globales, endpoints y composición de páginas.",
  },
  {
    path: "components/layout/",
    purpose: "Encabezado, navegación y footer compartidos.",
  },
  {
    path: "features/",
    purpose: "Experiencias, Contacto, Beneficios y documentación del proyecto. Componentes dentro de components/; hooks en hooks/.",
  },
  {
    path: "lib/supabase/",
    purpose: "Conexión a Supabase protegida para uso en el servidor.",
  },
  {
    path: "data/",
    purpose: "Catálogo JSON que devuelve la API local de Experiencias.",
  },
  {
    path: "supabase/",
    purpose: "SQL de la tabla de solicitudes, RLS y permisos.",
  },
  {
    path: "public/ y docs/",
    purpose: "Imágenes, diagrama exportado, su fuente y documentación técnica.",
  },
];

export const improvements = [
  {
    title: "Automatizar las pruebas del flujo",
    detail: "El envío real ya se verificó de extremo a extremo con Supabase y el entorno desplegado. Como siguiente paso, automatizar esa comprobación y ampliar las pruebas del formulario y de los estados del catálogo.",
  },
  {
    title: "Preparar el formulario para un uso público",
    detail: "Añadir límites de frecuencia y protección anti-spam. Restringir el acceso a la página de registros de demostración antes de utilizar datos reales; ocultar parte de los datos no sustituye el control de acceso.",
  },
  {
    title: "Medir y observar el comportamiento",
    detail: "Incorporar seguimiento de errores de API sin datos personales, medir rendimiento y accesibilidad en el despliegue, y usar esas mediciones para priorizar las siguientes mejoras.",
  },
];
