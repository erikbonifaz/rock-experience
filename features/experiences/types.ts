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
