"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Experience } from "../types";

type ExperiencesState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "success"; experiences: Experience[] };

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isExperience(value: unknown): value is Experience {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.id === "number" &&
    Number.isSafeInteger(candidate.id) &&
    candidate.id > 0 &&
    isNonEmptyString(candidate.title) &&
    isNonEmptyString(candidate.category) &&
    isNonEmptyString(candidate.description) &&
    isNonEmptyString(candidate.image)
  );
}

function parseExperiences(value: unknown): Experience[] {
  if (!Array.isArray(value)) {
    throw new Error("La respuesta de experiencias debe ser una lista.");
  }

  const experienceIds = new Set<number>();
  const experiences: Experience[] = [];

  for (const item of value) {
    if (!isExperience(item)) {
      throw new Error("La respuesta contiene una experiencia no válida.");
    }

    if (experienceIds.has(item.id)) {
      throw new Error("La respuesta contiene identificadores repetidos.");
    }

    experienceIds.add(item.id);
    experiences.push(item);
  }

  return experiences;
}

async function fetchExperiences(signal: AbortSignal): Promise<Experience[]> {
  const response = await fetch("/api/experiences", {
    cache: "no-store",
    signal,
  });

  if (!response.ok) {
    throw new Error("No se pudo obtener la lista de experiencias.");
  }

  const data: unknown = await response.json();

  return parseExperiences(data);
}

export function useExperiences() {
  const [state, setState] = useState<ExperiencesState>({ status: "loading" });
  const activeRequest = useRef<AbortController | null>(null);

  const loadExperiences = useCallback(() => {
    activeRequest.current?.abort();

    const controller = new AbortController();
    activeRequest.current = controller;

    void fetchExperiences(controller.signal)
      .then((experiences) => {
        if (!controller.signal.aborted) {
          setState({ status: "success", experiences });
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setState({ status: "error" });
        }
      });
  }, []);

  useEffect(() => {
    loadExperiences();

    return () => {
      activeRequest.current?.abort();
    };
  }, [loadExperiences]);

  function retry() {
    setState({ status: "loading" });
    loadExperiences();
  }

  return { state, retry };
}
