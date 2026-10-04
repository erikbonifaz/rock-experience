import Link from "next/link";

import styles from "@/features/benefits/benefits.module.css";
import type { BenefitPassProps } from "@/features/benefits/types";

export function BenefitPass({ benefit }: BenefitPassProps) {
  const tiltClass = benefit.tilt === "left" ? "lg:-rotate-2" : "lg:rotate-2";

  return (
    <article
      className={`${tiltClass} h-full rounded-xl border-2 border-accent bg-background p-1.5 transition-transform duration-200 hover:rotate-0 focus-within:rotate-0 motion-reduce:transition-none`}
    >
      <div
        className={`${styles.passFace} relative isolate flex h-full flex-col overflow-hidden rounded-md p-5 text-background sm:p-7 lg:min-h-[clamp(20rem,27vw,26rem)]`}
      >
        <span
          className={`${styles.ribbon} pointer-events-none absolute font-display text-foreground`}
          aria-hidden="true"
        >
          {benefit.ribbonLabel}
        </span>

        <div className="relative flex h-full flex-col">
          <span
            className="text-lg font-semibold leading-none lg:text-xl"
            aria-hidden="true"
          >
            {benefit.number}
          </span>

          <h3 className="mt-3 font-display text-[clamp(2.25rem,8.5vw,5.5rem)] leading-[0.95] lg:text-[clamp(2.5rem,5.25vw,5rem)]">
            <span className="block">{benefit.titleLines[0]}</span>{" "}
            <span className="block">{benefit.titleLines[1]}</span>
          </h3>

          <p className="mt-4 max-w-[30ch] text-base leading-snug sm:text-lg lg:text-[clamp(1.0625rem,1.6vw,1.5rem)]">
            {benefit.description}
          </p>

          <div className="mt-auto pt-5">
            <Link
              href={benefit.href}
              className="inline-flex min-h-11 items-center gap-3 bg-background px-4 py-2 text-sm font-medium text-foreground! underline! decoration-foreground/70 decoration-1 underline-offset-4 transition-colors hover:bg-foreground hover:text-background! focus-visible:outline-background! motion-reduce:transition-none sm:text-base lg:text-[clamp(1rem,1.5vw,1.375rem)]"
            >
              {benefit.actionLabel}
              <svg
                className="h-5 w-5 shrink-0 lg:h-6 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 12h16m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
