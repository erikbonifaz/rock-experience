import type { StaticImageData } from "next/image";

export interface Experience {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
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
