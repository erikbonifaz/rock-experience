import {
  experiencesGridClassName,
  getExperiencePresentation,
} from "../config";
import { ExperienceSkeleton } from "./experience-skeleton";

const skeletonCount = 6;
const skeletonIndexes = Array.from({ length: skeletonCount }, (_, index) => index);

export function ExperiencesLoading() {
  return (
    <>
      <p className="sr-only" role="status">
        Cargando experiencias…
      </p>
      <div className={experiencesGridClassName}>
        {skeletonIndexes.map((index) => (
          <ExperienceSkeleton
            key={index}
            presentation={getExperiencePresentation(index)}
          />
        ))}
      </div>
    </>
  );
}
