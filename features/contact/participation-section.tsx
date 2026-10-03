import { ParticipationForm } from "./participation-form";

export function ParticipationSection() {
  return (
    <section
      id="contacto"
      className="page-container section-space"
      aria-labelledby="participation-title"
    >
      <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-6 md:gap-y-14 lg:gap-x-8">
        <div className="md:col-span-4 lg:col-span-5">
          <p className="mb-7 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-[#AAA69F]">
            <span className="text-[#FF2442]">{"//"}</span> CONTACTO
          </p>
          <h2
            id="participation-title"
            className="navigation-focus-target font-display text-[clamp(2.8rem,6vw,4rem)] leading-[0.9] tracking-[-0.01em] text-[#F2F0E9] lg:text-[clamp(4rem,8vw,7.5rem)]"
            tabIndex={-1}
          >
            <span className="block">QUIERO</span>
            <span className="block text-[#FF2442]">PARTICIPAR</span>
          </h2>
          <p className="mt-7 max-w-[34ch] font-sans text-base leading-relaxed text-[#AAA69F] md:text-lg">
            Cuéntanos un poco sobre ti y la experiencia que te interesa.
          </p>
        </div>

        <div className="md:col-span-8 lg:col-span-7">
          <ParticipationForm />
        </div>
      </div>
    </section>
  );
}
