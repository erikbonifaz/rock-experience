import Image from "next/image";
import heroImage from "@/public/images/hero-experience-full.png";
import styles from "./hero-section.module.css";

// Ambos puntos de corte usan px para conservar su orden en Tailwind.
export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative grid grid-cols-1 min-[1100px]:min-h-[110svh]"
      aria-labelledby="hero-title"
    >
      <div className="relative aspect-[7/6] overflow-hidden min-[640px]:aspect-auto min-[640px]:h-[min(38vw,42svh,400px)] min-[1100px]:absolute min-[1100px]:inset-0 min-[1100px]:h-full">
        <Image
          src={heroImage}
          alt="Guitarrista en un escenario iluminado de rojo, con la banda al fondo."
          className="object-cover object-[70%_50%] min-[640px]:object-[68%_18%] min-[1100px]:object-[70%_50%]"
          fill
          sizes="(max-width: 639px) 160vw, 100vw"
          preload
        />
        <div
          className={`${styles.overlay} pointer-events-none absolute inset-0 z-1`}
          aria-hidden="true"
        />
      </div>

      <div
        className={`${styles.content} page-container relative z-3 pt-10 pb-20 min-[1100px]:grid min-[1100px]:content-center`}
      >
        <h1
          id="hero-title"
          className={`${styles.title} navigation-focus-target font-display text-[clamp(48px,15.6vw,64px)] font-normal leading-[0.92] tracking-[-0.01em] uppercase min-[640px]:text-[clamp(64px,11.5vw,116px)] min-[1100px]:leading-[0.9]`}
          tabIndex={-1}
        >
          <span className="block">Vive algo</span>{" "}
          <span className="hero-title-outline block">diferente.</span>
        </h1>

        <div
          className={`${styles.bottom} mt-6 flex flex-col gap-4 border-t border-foreground/18 pt-4 min-[1100px]:grid min-[1100px]:grid-cols-12 min-[1100px]:items-center min-[1100px]:gap-x-6`}
        >
          <p className="w-full text-base leading-[1.45] tracking-[-0.015em] text-pretty min-[640px]:max-w-xl min-[640px]:text-[clamp(1rem,2.3vw,1.125rem)] min-[1100px]:col-span-6 min-[1100px]:text-[clamp(1rem,1.2vw,1.25rem)]">
            Descubre experiencias creadas para conectar marcas, tecnología y
            personas.
          </p>

          <div className="flex flex-col gap-3 min-[640px]:flex-row min-[640px]:items-center min-[640px]:gap-5 min-[1100px]:col-span-12 min-[1100px]:gap-[clamp(28px,2vw,40px)]">
            {/* El modificador ! conserva el color frente a la regla global de los enlaces. */}
            <a
              className={`${styles.primaryLink} inline-flex min-h-[52px] w-full items-center justify-center gap-3 bg-accent px-[clamp(26px,1.7vw,32px)] py-3 text-[0.82rem] font-semibold leading-[1.4] tracking-[0.09em] text-background! uppercase whitespace-nowrap transition-colors duration-[180ms] ease-[var(--interaction-easing)] hover:bg-foreground motion-reduce:transition-none min-[640px]:w-auto`}
              href="#experiencias"
            >
              <span>Explorar experiencias</span>
              <span
                className={`${styles.primaryArrow} inline-block text-base leading-none`}
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
            <a
              className={`${styles.participationLink} inline-flex min-h-[52px] items-center justify-between gap-6 text-[0.8rem] font-medium tracking-[0.1em] text-secondary! uppercase whitespace-nowrap min-[640px]:justify-start`}
              href="#contacto"
            >
              <span>Quiero participar</span>
              <span
                className={`${styles.arrowLine} relative mr-0.5 block h-px w-[clamp(72px,22vw,104px)] shrink-0 bg-current min-[640px]:w-16 min-[1100px]:w-[clamp(72px,5.5vw,112px)]`}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>

      <span
        className={`${styles.guide} pointer-events-none absolute z-2 hidden w-px bg-foreground/18 min-[1100px]:block`}
        aria-hidden="true"
      />
      <span
        className={`${styles.cross} pointer-events-none absolute z-2 hidden size-6 min-[1100px]:block`}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-secondary" />
        <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-secondary" />
      </span>
    </section>
  );
}
