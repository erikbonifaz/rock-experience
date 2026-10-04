import type { BenefitPassContent } from "@/features/benefits/types";

export const benefits: BenefitPassContent[] = [
  {
    number: "01",
    titleLines: ["ENCUENTRA TU", "EXPERIENCIA"],
    description:
      "Conoce las seis propuestas y descubre cuál conecta contigo.",
    ribbonLabel: "EXPLORA",
    actionLabel: "Explorar experiencias",
    href: "/experiencias",
    tilt: "left",
  },
  {
    number: "02",
    titleLines: ["QUIERO", "PARTICIPAR"],
    description:
      "Cuéntanos qué te interesa y comparte tus datos mediante el formulario.",
    ribbonLabel: "PARTICIPA",
    actionLabel: "Completar formulario",
    href: "#contacto",
    tilt: "right",
  },
];
