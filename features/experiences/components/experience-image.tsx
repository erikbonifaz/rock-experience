"use client";

import Image from "next/image";
import { useState } from "react";
import type { ExperiencePresentation } from "../types";

interface ExperienceImageProps {
  src: string;
  alt: string;
  presentation: ExperiencePresentation;
}

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
        sizes={presentation.imageSizes}
        style={{ objectPosition: presentation.objectPosition }}
        className="object-cover grayscale contrast-110 transition-transform duration-[260ms] ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
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
