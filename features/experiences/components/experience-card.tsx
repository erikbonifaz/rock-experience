import Link from "next/link";
import { ExperienceImage } from "./experience-image";
import { experienceCardHeightClassName } from "../config";
import type { ExperienceCardProps } from "../types";

export function ExperienceCard({
  experience,
  presentation,
}: ExperienceCardProps) {
  const titleWords = experience.title.trim().split(/\s+/);

  return (
    <Link
      href="/experiencias"
      aria-label={`Ver todas las experiencias: ${experience.title}`}
      className={`group relative isolate flex min-w-0 flex-col overflow-hidden bg-[#181818] text-[#F2F0E9] ring-1 ring-inset ring-[#F2F0E9]/10 focus-visible:outline-accent focus-visible:outline-offset-[-3px] ${experienceCardHeightClassName} ${presentation.gridClassName}`}
    >
      <ExperienceImage
        key={experience.image}
        src={experience.image}
        alt={`Fotografía editorial que acompaña ${experience.title}.`}
        presentation={presentation}
      />

      <div
        className="absolute inset-0 bg-linear-to-r from-[#101010]/95 via-[#101010]/60 to-[#101010]/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-[#101010]/70 via-[#101010]/15 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6 md:p-7 experiences-desktop:p-8">
        <div className="flex items-center gap-4">
          <span className="font-sans text-sm font-semibold tracking-[0.12em] text-[#FF2442]">
            {String(experience.id).padStart(2, "0")}
          </span>
          <span className="h-px w-8 bg-[#F2F0E9]/50" aria-hidden="true" />
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-[#F2F0E9] sm:text-xs">
            {experience.category}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div className="min-w-0 max-w-[84%]">
            <h3
              aria-label={experience.title}
              className={`max-w-[13ch] font-display uppercase leading-[0.92] tracking-[-0.01em] text-[#F2F0E9] ${presentation.titleClassName}`}
            >
              {titleWords.map((word, index) => (
                <span key={`${index}-${word}`} className="block" aria-hidden="true">
                  {word}
                </span>
              ))}
            </h3>
            <p className="mt-3 min-h-[4.2em] max-w-[38ch] font-sans text-sm font-normal leading-[1.4] text-[#F2F0E9]/90 sm:text-base md:min-h-[5.6em] experiences-desktop:min-h-[4.2em]">
              {experience.description}
            </p>
          </div>
          <span
            className="mb-1 shrink-0 font-sans text-2xl leading-none text-[#F2F0E9] transition-transform duration-[240ms] ease-out group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 motion-reduce:transition-none"
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
