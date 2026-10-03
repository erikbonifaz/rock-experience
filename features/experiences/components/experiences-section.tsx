import { ExperiencesContent } from "./experiences-content";

export function ExperiencesSection() {
  return (
    <section
      id="experiencias"
      className="page-container scroll-mt-20 pb-24 pt-16 md:scroll-mt-24 md:pb-32 md:pt-16"
      aria-labelledby="experiencias-title"
    >
      <header className="mb-8 grid grid-cols-1 gap-y-5 md:mb-10 md:grid-cols-8 md:gap-x-5 experiences-desktop:mb-8 experiences-desktop:grid-cols-12 experiences-desktop:gap-x-6">
        <h2
          id="experiencias-title"
          className="font-display text-[clamp(3rem,7vw,4.5rem)] leading-[0.9] tracking-[-0.01em] text-[#F2F0E9] md:col-span-5 md:text-[clamp(4rem,8vw,6rem)] experiences-desktop:col-span-8 experiences-desktop:text-[clamp(5rem,7vw,7rem)]"
        >
          EXPERIENCIAS
        </h2>
        <p className="max-w-[28ch] border-l border-[#F2F0E9]/25 pl-4 font-sans text-sm leading-relaxed text-[#AAA69F] md:col-span-3 md:col-start-6 md:row-start-1 md:self-center md:text-base experiences-desktop:col-span-4 experiences-desktop:col-start-9">
          Seis propuestas para explorar marcas, tecnología y personas.
        </p>
      </header>

      <ExperiencesContent />
    </section>
  );
}
