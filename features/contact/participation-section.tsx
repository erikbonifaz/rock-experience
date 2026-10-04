import { ParticipationCredential } from "./participation-credential";

export function ParticipationSection() {
  return (
    <section
      id="contacto"
      className="page-container py-18 min-[640px]:py-24 min-[1100px]:py-40"
      aria-labelledby="participation-title"
    >
      <div className="grid grid-cols-1 gap-y-36 min-[1100px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] min-[1100px]:gap-x-10">
        <div className="min-w-0 min-[1100px]:min-h-[650px]">
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.12em] text-secondary">
            <span className="text-accent">{"//"}</span> REGISTRO
          </p>
          <h2
            id="participation-title"
            className="navigation-focus-target font-display text-[clamp(3rem,9.5vw,6rem)] leading-[1.02] tracking-[-0.01em] text-foreground min-[1100px]:text-[clamp(3.5rem,6vw,6rem)]"
            tabIndex={-1}
          >
            <span className="block">QUIERO</span>
            <span className="block text-accent">PARTICIPAR</span>
          </h2>
          <p className="mt-7 max-w-[34ch] text-base leading-relaxed text-secondary min-[640px]:text-lg">
            Cuéntanos un poco sobre ti y la experiencia que te interesa.
          </p>
        </div>

        <ParticipationCredential />
      </div>
    </section>
  );
}
