import Image from "next/image";
import { ParticipationForm } from "./participation-form";
import { RegistrationStrip } from "./registration-strip";
import styles from "./participation.module.css";

export function ParticipationCredential() {
  return (
    <div className="relative grid min-w-0 grid-cols-1 min-[1100px]:grid-cols-[minmax(0,1fr)_150px]">
      <Image
        className="pointer-events-none absolute -top-32 left-1/2 z-10 h-56 w-36 -translate-x-1/2 object-contain min-[1100px]:left-[43%]"
        src="/images/textures/participation-lanyard-b46e84d4.webp"
        alt=""
        width={240}
        height={360}
        aria-hidden="true"
      />

      <div className={`${styles.credentialBody} min-w-0`}>
        <header className="mb-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-5 border-b border-foreground/30 pb-6 pt-20 min-[640px]:mb-8 min-[640px]:pb-8 min-[640px]:pt-6">
          <p className="flex items-center gap-3">
            <svg className="size-10 shrink-0 text-accent min-[640px]:size-12" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
              <path d="m9 2 13 12L42 5 31 21l14 9-18 1-8 15-2-17L3 34l10-14Z" />
            </svg>
            <span className="font-display text-[1.6rem] leading-[1.05] text-foreground min-[640px]:text-3xl">
              ROCK<br />EXPERIENCE
            </span>
          </p>
          <p className="max-w-[19ch] text-xs uppercase leading-relaxed tracking-[0.08em] text-secondary">
            Marcas, tecnología<br />y personas.
          </p>
        </header>
        <ParticipationForm />
      </div>

      <RegistrationStrip />
    </div>
  );
}
