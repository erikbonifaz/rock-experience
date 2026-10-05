"use client";

import { useEffect, useRef } from "react";

export function useExperienceCardMotion(hasExperiences: boolean) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!hasExperiences || !grid || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let delayIndex = 0;

        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const card = entry.target as HTMLElement;
          card.style.setProperty("--photo-entry-delay", `${delayIndex * 60}ms`);
          card.dataset.entered = "true";
          delayIndex += 1;

          // Cada fotografía se acomoda una sola vez; después deja de observarse.
          observer.unobserve(card);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
    );

    grid.querySelectorAll("[data-experience-card]").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [hasExperiences]);

  return gridRef;
}
