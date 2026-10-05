"use client";

import { ExperienceCard } from "./experience-card";
import { experiencesGridClassName, getExperiencePresentation } from "../config";
import { ExperiencesError } from "./experiences-error";
import { ExperiencesLoading } from "./experiences-loading";
import { useExperiences } from "../hooks/use-experiences";
import { useExperienceCardMotion } from "../hooks/use-experience-card-motion";

export function ExperiencesContent() {
  const { state, retry } = useExperiences();
  const gridRef = useExperienceCardMotion(
    state.status === "success" && state.experiences.length > 0,
  );

  if (state.status === "loading") {
    return (
      <div aria-busy={true}>
        <ExperiencesLoading />
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div aria-busy={false}>
        <ExperiencesError onRetry={retry} />
      </div>
    );
  }

  if (state.experiences.length === 0) {
    return (
      <div aria-busy={false}>
        <p className="border-y border-[#F2F0E9]/20 py-8 font-sans text-[#AAA69F]">
          Por ahora no hay experiencias disponibles.
        </p>
      </div>
    );
  }

  return (
    <div aria-busy={false}>
      <div ref={gridRef} className={experiencesGridClassName}>
        {state.experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            presentation={getExperiencePresentation(index, experience.id)}
          />
        ))}
      </div>
    </div>
  );
}
