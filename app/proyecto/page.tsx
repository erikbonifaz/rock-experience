import type { Metadata } from "next";
import { sharedOpenGraph } from "@/lib/seo";
import { ProjectDocumentation } from "@/features/project/components/project-documentation";

export const metadata: Metadata = {
  title: "Sobre esta prueba técnica | ROCK EXPERIENCE",
  description:
    "Checklist de la prueba técnica de ROCK EXPERIENCE y README: ejecución, tecnologías, estructura, decisiones y uso de IA.",
  openGraph: {
    ...sharedOpenGraph,
    title: "Sobre esta prueba técnica | ROCK EXPERIENCE",
    description:
      "Requisitos de la prueba, evidencias de implementación y documentación del repositorio.",
    url: "/proyecto",
  },
};

export default function ProjectPage() {
  return <ProjectDocumentation />;
}
