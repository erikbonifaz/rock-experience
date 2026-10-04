export interface BenefitPassContent {
  number: string;
  titleLines: [string, string];
  description: string;
  ribbonLabel: string;
  actionLabel: string;
  href: string;
  tilt: "left" | "right";
}

export interface BenefitPassProps {
  benefit: BenefitPassContent;
}
