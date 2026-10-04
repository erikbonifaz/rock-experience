import type { ExperiencePresentation } from "./types";

export const experienceCardHeightClassName =
  "min-h-[26rem] sm:min-h-[28rem] md:min-h-[27rem] experiences-desktop:min-h-[29rem]";

export const experiencesGridClassName =
  "grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 experiences-desktop:grid-cols-3";

export const experienceImageSizes =
  "(min-width: 1632px) 480px, (min-width: 1200px) 30vw, (min-width: 768px) 44vw, 90vw";

// Las pequeñas inclinaciones se repiten y sólo se aplican en escritorio.
const cardTilts = [
  "experiences-desktop:rotate-[-0.6deg]",
  "experiences-desktop:rotate-[0.4deg] experiences-desktop:translate-y-1",
  "experiences-desktop:rotate-[-0.3deg]",
  "experiences-desktop:rotate-[0.5deg]",
  "experiences-desktop:rotate-[-0.4deg] experiences-desktop:translate-y-1",
  "experiences-desktop:rotate-[0.6deg]",
];

export function getExperiencePresentation(
  index: number,
  experienceId?: number,
): ExperiencePresentation {
  return {
    tiltClassName: cardTilts[index % cardTilts.length],
    tone: experienceId === 5 ? "red" : "monochrome",
  };
}
