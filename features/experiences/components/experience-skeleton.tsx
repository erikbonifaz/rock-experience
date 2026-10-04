import { experienceCardHeightClassName } from "../config";
import type { ExperienceSkeletonProps } from "../types";

export function ExperienceSkeleton({ presentation }: ExperienceSkeletonProps) {
  return (
    <div
      className={`flex min-w-0 animate-pulse flex-col bg-foreground/15 p-4 motion-reduce:animate-none sm:p-5 ${experienceCardHeightClassName} ${presentation.tiltClassName}`}
      aria-hidden="true"
    >
      <div className="aspect-4/3 shrink-0 bg-foreground/15" />
      <div className="space-y-3 pt-5">
        <span className="block h-20 w-3/4 bg-foreground/15" />
        <span className="block h-4 w-full bg-foreground/15" />
        <span className="block h-4 w-2/3 bg-foreground/15" />
      </div>
    </div>
  );
}
