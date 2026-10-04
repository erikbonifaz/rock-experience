import type { Metadata } from "next";
import { ProjectDocumentation } from "@/features/project/components/project-documentation";

export const metadata: Metadata = {
  title: "Sobre esta prueba técnica | ROCK EXPERIENCE",
  description:
    "Cómo ejecutar ROCK EXPERIENCE, tecnologías, estructura, decisiones técnicas, mejoras pendientes y uso de Codex durante el desarrollo.",
  openGraph: {
    title: "Sobre esta prueba técnica | ROCK EXPERIENCE",
    description:
      "Las decisiones detrás del proyecto y cómo se utilizó la inteligencia artificial durante su desarrollo.",
    locale: "es_MX",
    type: "website",
  },
};

export default function ProjectPage() {
  return <ProjectDocumentation />;
}
