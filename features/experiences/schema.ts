import { z } from "zod";

const requiredText = z.string().regex(/\S/, "El texto no puede estar vacío.");

export const experienceSchema = z.object({
  id: z.number().int().positive(),
  title: requiredText,
  category: requiredText,
  description: requiredText,
  image: requiredText,
  imageAlt: requiredText,
});

export const experiencesSchema = z.array(experienceSchema).refine(
  (experiences) => {
    const ids = experiences.map((experience) => experience.id);
    return new Set(ids).size === ids.length;
  },
  "Las experiencias no pueden tener identificadores repetidos.",
);
