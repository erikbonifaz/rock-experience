import type { ExperiencePresentation } from "./types";

export const experienceCardHeightClassName =
  "h-[clamp(23rem,105vw,27rem)] md:h-[clamp(22rem,35vw,26rem)] experiences-desktop:h-[clamp(20rem,23vw,22.5rem)]";

export const experiencesGridClassName =
  "grid grid-cols-1 gap-6 md:grid-cols-2 experiences-desktop:grid-cols-12";

const wideCardPresentation: ExperiencePresentation = {
  gridClassName: "experiences-desktop:col-span-7",
  titleClassName: "text-[clamp(2rem,3vw,3rem)]",
  imageSizes:
    "(min-width: 1600px) 45vw, (min-width: 1200px) 55vw, (min-width: 768px) 46vw, 100vw",
  objectPosition: "62% center",
  tone: "monochrome",
};

const narrowCardPresentation: ExperiencePresentation = {
  gridClassName: "experiences-desktop:col-span-5",
  titleClassName: "text-[clamp(1.75rem,2.5vw,2.5rem)]",
  imageSizes:
    "(min-width: 1600px) 33vw, (min-width: 1200px) 40vw, (min-width: 768px) 46vw, 100vw",
  objectPosition: "62% center",
  tone: "monochrome",
};

// Cada pareja suma doce columnas y la siguiente invierte sus proporciones.
const presentationPattern = [
  wideCardPresentation,
  narrowCardPresentation,
  narrowCardPresentation,
  wideCardPresentation,
];

const presentationOverrides: Partial<
  Record<number, Partial<ExperiencePresentation>>
> = {
  5: { tone: "red" },
};

export function getExperiencePresentation(
  index: number,
  experienceId?: number,
): ExperiencePresentation {
  const patternIndex = index % presentationPattern.length;
  const presentation = presentationPattern[patternIndex];
  const overrides =
    experienceId === undefined ? undefined : presentationOverrides[experienceId];

  return { ...presentation, ...overrides };
}
