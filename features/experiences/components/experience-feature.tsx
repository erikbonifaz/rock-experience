import Image from "next/image";
import type { ExperienceFeatureProps } from "../types";

export function ExperienceFeature({
  experience,
  editorialContent,
  imageOnRight,
}: ExperienceFeatureProps) {
  const titleId = `experience-title-${experience.id}`;

  return (
    <article
      id={`experiencia-${experience.id}`}
      className="group grid gap-6 border-t border-foreground/18 py-10 md:grid-cols-2 md:items-center md:gap-10 md:py-14 lg:gap-20 lg:py-16"
      aria-labelledby={titleId}
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-foreground/5 ${imageOnRight ? "md:order-2" : ""}`}
      >
        <Image
          src={editorialContent.image}
          alt={editorialContent.imageAlt}
          className={`object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0 motion-reduce:transition-none ${editorialContent.imageClassName}`}
          fill
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc(100vw - 64px), (max-width: 1632px) 45vw, 720px"
        />
      </div>

      <div className="max-w-xl">
        <h3
          id={titleId}
          className="max-w-[13ch] font-display text-[clamp(2.625rem,5.5vw,4.75rem)] leading-[0.98] tracking-[-0.015em] text-balance uppercase"
        >
          {experience.title}
        </h3>
        <p className="mt-4 text-sm font-medium text-accent">
          {editorialContent.categoryLabel}
        </p>
        <p className="mt-5 text-lg leading-relaxed md:text-xl">
          {experience.description}
        </p>
        <p className="mt-4 max-w-[45ch] text-base leading-relaxed text-secondary">
          {editorialContent.detail}
        </p>
      </div>
    </article>
  );
}
