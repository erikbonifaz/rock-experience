type Benefit = {
  number: string;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    number: "01",
    title: "DESCUBRE",
    description:
      "Explora experiencias que combinan entretenimiento, creatividad y tecnología.",
  },
  {
    number: "02",
    title: "CONECTA",
    description:
      "Propuestas pensadas para acercar marcas, tecnología y personas.",
  },
  {
    number: "03",
    title: "PARTICIPA",
    description:
      "Comparte tu interés y forma parte de ROCK EXPERIENCE.",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="page-container section-space"
      aria-labelledby="beneficios-title"
    >
      <header className="mb-10 grid grid-cols-1 gap-y-6 md:mb-12 md:grid-cols-8 md:gap-x-5 experiences-desktop:mb-14 experiences-desktop:grid-cols-12 experiences-desktop:gap-x-6">
        <h2
          id="beneficios-title"
          className="navigation-focus-target font-display text-[clamp(3rem,14vw,4.5rem)] leading-[0.9] tracking-[-0.01em] text-[#F2F0E9] md:col-span-5 md:text-[clamp(4rem,6vw,4.5rem)] experiences-desktop:col-span-7 experiences-desktop:text-[clamp(5rem,6vw,6.5rem)]"
          tabIndex={-1}
        >
          BENEFICIOS
        </h2>
        <p className="max-w-[38ch] border-l border-[#F2F0E9]/25 pl-4 font-sans text-base leading-relaxed text-[#AAA69F] md:col-span-3 md:col-start-6 md:row-start-1 md:self-center experiences-desktop:col-span-4 experiences-desktop:col-start-9">
          Descubre, conecta y participa en experiencias creadas para acercar
          marcas, tecnología y personas.
        </p>
      </header>

      <ol className="m-0 list-none border-y border-[#F2F0E9]/20 p-0">
        {benefits.map((benefit) => (
          <li
            key={benefit.number}
            className="group grid grid-cols-[2rem_1px_minmax(0,1fr)] items-center gap-x-4 gap-y-3 border-b border-[#F2F0E9]/20 py-6 transition-colors duration-200 last:border-b-0 hover:border-[#F2F0E9]/40 md:grid-cols-[2.5rem_1px_minmax(0,1fr)_minmax(0,1.4fr)_auto] md:gap-x-5 md:gap-y-0 md:py-7 experiences-desktop:grid-cols-12 experiences-desktop:gap-x-6 experiences-desktop:py-8"
          >
            <span className="col-start-1 row-start-1 font-sans text-lg font-medium tracking-[0.08em] text-[#FF2442] md:row-start-1 md:text-xl experiences-desktop:col-span-1">
              {benefit.number}
            </span>
            <span
              className="col-start-2 row-start-1 h-7 w-px bg-[#F2F0E9]/35 transition-colors duration-200 group-hover:bg-[#F2F0E9]/60 md:row-start-1 md:h-9 experiences-desktop:col-span-1"
              aria-hidden="true"
            />
            <h3 className="col-start-3 row-start-1 font-display text-[clamp(2rem,5vw,2.5rem)] leading-[0.95] tracking-[-0.01em] text-[#F2F0E9] md:col-start-3 md:row-start-1 md:text-[clamp(1.75rem,3vw,2.5rem)] experiences-desktop:col-span-4 experiences-desktop:text-[clamp(2rem,3vw,3rem)]">
              {benefit.title}
            </h3>
            <p className="col-start-3 row-start-2 max-w-[42ch] font-sans text-[15px] font-normal leading-relaxed text-[#AAA69F] md:col-start-4 md:row-start-1 md:text-base experiences-desktop:col-span-5 experiences-desktop:col-start-7">
              {benefit.description}
            </p>
            <span
              className="col-start-3 row-start-3 justify-self-end font-sans text-2xl leading-none text-[#FF2442] transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 md:col-start-5 md:row-start-1 experiences-desktop:col-span-1 experiences-desktop:col-start-12"
              aria-hidden="true"
            >
              →
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
