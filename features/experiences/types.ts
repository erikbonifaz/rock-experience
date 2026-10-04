import type { StaticImageData } from "next/image";

export interface Experience {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface ExperiencePresentation {
  gridClassName: string;
  titleClassName: string;
  imageSizes: string;
  objectPosition: string;
  tone: "monochrome" | "red";
}

export interface ExperienceCardProps {
  experience: Experience;
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
