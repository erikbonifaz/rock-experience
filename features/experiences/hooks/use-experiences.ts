"use client";

import { useEffect, useState } from "react";
import { experiencesSchema } from "../schema";
import type { ExperiencesState } from "../types";

export function useExperiences() {
  const [state, setState] = useState<ExperiencesState>({ status: "loading" });
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadExperiences() {
      try {
        const response = await fetch("/api/experiences", {
          cache: "no-store",
          signal: controller.signal,
        });

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

    void loadExperiences();

    // El cleanup cancela la petición al reintentar o desmontar la sección.
    return () => controller.abort();
  }, [retryCount]);

  function retry() {
    setState({ status: "loading" });
    setRetryCount((previous) => previous + 1);
  }

  return { state, retry };
}
