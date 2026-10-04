import { benefits } from "@/features/benefits/content";
import styles from "@/features/benefits/benefits.module.css";
import { BenefitPass } from "@/features/benefits/components/benefit-pass";

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="page-container border-b border-foreground/18 py-18 min-[640px]:py-24 min-[1100px]:py-40"
      aria-labelledby="beneficios-title"
    >
      <h2
        id="beneficios-title"
        className={`${styles.titleOutline} navigation-focus-target mx-auto text-center font-display text-[clamp(3.5rem,19vw,18rem)] leading-none`}
        tabIndex={-1}
      >
        BENEFICIOS
      </h2>

      <ul className="relative z-10 mx-auto grid max-w-[88rem] list-none gap-7 px-2 pt-8 md:gap-10 md:px-5 lg:-mt-10 lg:grid-cols-2 lg:gap-12 lg:pt-0">
        {benefits.map((benefit) => (
          <li key={benefit.number} className="min-w-0">
            <BenefitPass benefit={benefit} />
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-8 max-w-[38ch] text-center text-base leading-relaxed text-secondary md:mt-12 md:max-w-none md:text-lg lg:mt-14">
        Descubre experiencias y comparte lo que te interesa.
      </p>
    </section>
  );
}
