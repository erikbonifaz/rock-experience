"use client";

import Image from "next/image";
import { useState } from "react";
import { experienceImageSizes } from "../config";
import type { ExperienceImageProps } from "../types";

export function ExperienceImage({
  src,
  alt,
  presentation,
}: ExperienceImageProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <div
        className="absolute inset-0 grid place-items-center bg-[#181818] px-4 text-center text-sm text-[#AAA69F]"
        role="img"
        aria-label={`Imagen no disponible. ${alt}`}
      >
        Imagen no disponible
      </div>
    );
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={experienceImageSizes}
        className="object-cover grayscale contrast-110 motion-safe:transition-transform motion-safe:duration-[320ms] motion-safe:ease-[var(--interaction-easing)] motion-safe:group-hover:scale-[1.025] motion-safe:group-focus-visible:scale-[1.025]"
        onError={() => setImageFailed(true)}
      />
      {presentation.tone === "red" ? (
        <div
          className="absolute inset-0 bg-[#FF2442] opacity-70 mix-blend-color"
          aria-hidden="true"
        />
      ) : null}
    </>
  );
}
