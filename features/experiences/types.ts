import type { StaticImageData } from "next/image";
import type { z } from "zod";
import type { experienceSchema } from "./schema";

export type Experience = z.infer<typeof experienceSchema>;

export type ExperiencesState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "success"; experiences: Experience[] };

export interface ExperiencesErrorProps {
  onRetry: () => void;
}

export interface ExperiencePresentation {
  tiltClassName: string;
  tone: "monochrome" | "red";
}

export interface ExperienceCardProps {
  experience: Experience;
  presentation: ExperiencePresentation;
}

export interface ExperienceImageProps {
  src: string;
  alt: string;
  presentation: ExperiencePresentation;
}

export interface ExperienceSkeletonProps {
  presentation: ExperiencePresentation;
}

export interface ExperienceEditorialContent {
  categoryLabel: string;
  detail: string;
  image: StaticImageData;
  imageAlt: string;
  imageClassName: string;
}

export interface ExperienceFeatureProps {
  experience: Experience;
  editorialContent: ExperienceEditorialContent;
  imageOnRight: boolean;
}
