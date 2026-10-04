import Link from "next/link";
import { ExperienceImage } from "./experience-image";
import { experienceCardHeightClassName } from "../config";
import type { ExperienceCardProps } from "../types";
import styles from "../experiences.module.css";

export function ExperienceCard({
  experience,
  presentation,
}: ExperienceCardProps) {
  const titleWords = experience.title.trim().split(/\s+/);

  return (
    <Link
      href="/experiencias"
      aria-label={`Ver todas las experiencias: ${experience.title}`}
      className={`group relative isolate flex h-full min-w-0 flex-col bg-foreground bg-clip-content p-4 text-background! focus-visible:outline-accent focus-visible:outline-offset-4 sm:p-5 ${styles.photoPrint} ${experienceCardHeightClassName} ${presentation.tiltClassName}`}
    >
      <div className="relative aspect-4/3 shrink-0 overflow-hidden bg-background">
        <ExperienceImage
          key={experience.image}
          src={experience.image}
          alt={`Fotografía editorial que acompaña ${experience.title}.`}
          presentation={presentation}
        />
        <span
          className={`absolute top-3 left-3 max-w-[calc(100%-1.5rem)] -rotate-2 px-3 py-2 font-display text-base leading-none tracking-[0.03em] text-foreground uppercase sm:text-lg ${styles.categoryStamp}`}
        >
          {experience.category}
        </span>
      </div>

      <div className="relative flex grow flex-col px-1 pt-5 pb-2">
        <h3
          aria-label={experience.title}
          className="font-display text-[2.5rem] leading-[0.95] tracking-[-0.01em] uppercase sm:text-[3rem] md:text-[clamp(2.25rem,3.6vw,3.5rem)]"
        >
          {titleWords.map((word, index) => (
            <span key={`${index}-${word}`} className="block" aria-hidden="true">
              {word}
            </span>
          ))}
        </h3>
        <div className="mt-3 flex grow items-end gap-3">
          <p className="self-start font-sans text-sm leading-[1.5] sm:text-base">
            {experience.description}
          </p>
          <svg
            viewBox="0 0 32 24"
            fill="none"
            className="mb-1 h-6 w-8 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          >
            <path
              d="M2 12h27M20 3l9 9-9 9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
