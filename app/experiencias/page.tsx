import type { Metadata } from "next";
import { ExperiencesPage } from "@/features/experiences/components/experiences-page";

export const metadata: Metadata = {
  title: "Experiencias | ROCK EXPERIENCE",
  description:
    "Explora seis propuestas de videojuegos, música, creación de contenido, tecnología, eventos y comercio digital en ROCK EXPERIENCE.",
  openGraph: {
    title: "Experiencias | ROCK EXPERIENCE",
    description:
      "Seis formas de conectar marcas, tecnología y personas. Encuentra la experiencia que te interesa y participa.",
    locale: "es_MX",
    type: "website",
  },
};

export default function Page() {
  return <ExperiencesPage />;
}
