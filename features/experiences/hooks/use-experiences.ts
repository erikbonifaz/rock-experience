"use client";

import { useEffect, useRef, useState } from "react";
import type { ExperiencesState } from "../types";

export function useExperiences() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ExperiencesState>({ status: "loading" });
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadExperiences() {
      try {
        const [response, { experiencesSchema }] = await Promise.all([
          fetch("/api/experiences", {
            cache: "no-store",
            signal: controller.signal,
          }),
          import("../schema"),
        ]);

        if (!response.ok) {
          throw new Error("No se pudo obtener la lista de experiencias.");
        }

        const data: unknown = await response.json();
        const experiences = experiencesSchema.parse(data);

        if (!controller.signal.aborted) {
          setState({ status: "success", experiences });
        }
      } catch {
        if (!controller.signal.aborted) {
          setState({ status: "error" });
        }
      }
    }

    const container = containerRef.current;
    let observer: IntersectionObserver | undefined;

    if (retryCount > 0 || !container || !("IntersectionObserver" in window)) {
      void loadExperiences();
    } else {
      // Preparar el catálogo antes de llegar a él, sin competir con el hero.
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          observer?.disconnect();
          void loadExperiences();
        },
        { rootMargin: "400px" },
      );
      observer.observe(container);
    }

    // El cleanup cancela la petición al reintentar o desmontar la sección.
    return () => {
      observer?.disconnect();
      controller.abort();
    };
  }, [retryCount]);

  function retry() {
    setState({ status: "loading" });
    setRetryCount((previous) => previous + 1);
  }

  return { state, retry, containerRef };
}
