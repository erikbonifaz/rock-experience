import { experienceCardHeightClassName } from "../config";
import type { ExperiencePresentation } from "../types";

interface ExperienceSkeletonProps {
  presentation: ExperiencePresentation;
}

export function ExperienceSkeleton({ presentation }: ExperienceSkeletonProps) {
  return (
    <div
      className={`relative flex min-w-0 flex-col overflow-hidden bg-[#AAA69F]/10 p-5 motion-reduce:animate-none sm:p-6 md:p-7 experiences-desktop:p-8 ${experienceCardHeightClassName} ${presentation.gridClassName} animate-pulse`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-4">
        <span className="h-4 w-6 bg-[#F2F0E9]/10" />
        <span className="h-px w-8 bg-[#F2F0E9]/10" />
        <span className="h-3 w-24 bg-[#F2F0E9]/10" />
      </div>
      <div className="mt-auto max-w-[84%] space-y-3">
        <span className="block h-12 w-48 max-w-full bg-[#F2F0E9]/10" />
        <span className="block h-4 w-full bg-[#F2F0E9]/10" />
        <span className="block h-4 w-[72%] bg-[#F2F0E9]/10" />
      </div>
    </div>
  );
}
