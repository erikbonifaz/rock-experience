import gamingImage from "@/public/images/experiences/gaming.jpg";
import musicImage from "@/public/images/experiences/music.jpg";
import creatorsImage from "@/public/images/experiences/creators.jpg";
import technologyImage from "@/public/images/experiences/technology.jpg";
import liveImage from "@/public/images/experiences/live.jpg";
import commerceImage from "@/public/images/experiences/commerce.jpg";
import type { ExperienceEditorialContent } from "./types";

// Los títulos y las descripciones siguen viniendo del catálogo original.
// Aquí solo vive el contenido adicional de la presentación editorial.
export const experienceEditorialContent: Record<number, ExperienceEditorialContent> = {
  1: {
    categoryLabel: "Videojuegos",
    detail:
      "El juego como punto de encuentro entre marcas y personas. Una propuesta que combina interacción y entretenimiento para descubrir algo diferente.",
    image: gamingImage,
    imageAlt: "Control de videojuegos junto a un teclado, iluminados en rojo y azul.",
    imageClassName: "object-[50%_65%]",
  },
  2: {
    categoryLabel: "Música y entretenimiento",
    detail:
      "La música es el punto de partida. El contenido y los formatos digitales amplían la experiencia para conectar con las personas también a través de una pantalla.",
    image: musicImage,
    imageAlt: "Consola de mezcla de audio en un estudio de grabación.",
    imageClassName: "object-center",
  },
  3: {
    categoryLabel: "Creación y comunidad",
    detail:
      "Ideas, contenido y personas con algo que contar. Una propuesta que pone la creatividad en el centro de la conexión entre marcas y comunidades.",
    image: creatorsImage,
    imageAlt: "Primer plano del objetivo y el parasol de una cámara de producción audiovisual.",
    imageClassName: "object-center",
  },
  4: {
    categoryLabel: "Inteligencia artificial",
    detail:
      "La inteligencia artificial como parte de la experiencia. Una forma de explorar cómo la tecnología puede cambiar la interacción entre marcas y personas.",
    image: technologyImage,
    imageAlt: "Componentes internos de una computadora bajo una luz roja.",
    imageClassName: "object-center",
  },
  5: {
    categoryLabel: "Eventos en vivo",
    detail:
      "Lo que ocurre en el espacio físico también puede conectar con el entorno digital. Activaciones que reúnen ambos formatos alrededor de un mismo momento.",
    image: liveImage,
    imageAlt: "Público frente a un escenario con pantallas y luces rojas durante un concierto.",
    imageClassName: "object-[50%_80%]",
  },
  6: {
    categoryLabel: "Comercio digital",
    detail:
      "El encuentro entre una marca y las personas también sucede al explorar una propuesta de compra. Experiencias que conectan el interés con la conversión.",
    image: commerceImage,
    imageAlt: "Persona con una tarjeta bancaria mientras utiliza una computadora portátil.",
    imageClassName: "object-center",
  },
};
