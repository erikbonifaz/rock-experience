import Image from "next/image";
import coverImage from "@/public/images/experiences/cover-concert.jpg";

export function ExperiencesIntro() {
  return (
    <section className="page-container pt-12 md:pt-16" aria-labelledby="experiences-page-title">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
        <h1
          id="experiences-page-title"
          className="font-display text-[clamp(2.625rem,12vw,6rem)] leading-[0.98] tracking-[-0.02em] uppercase lg:col-span-8"
        >
          <span className="block">Experiencias</span>{" "}
          <span className="block text-accent">que conectan.</span>
        </h1>

        <div className="max-w-md lg:col-span-4 lg:pb-1">
          <p className="text-base leading-relaxed text-secondary md:text-lg">
            Videojuegos, música, creatividad y tecnología. Seis propuestas para
            conectar marcas y personas de formas diferentes.
          </p>
          <a
            className="mt-4 inline-flex min-h-11 items-center border-b border-accent text-sm font-medium transition-colors hover:text-accent! focus-visible:text-accent! motion-reduce:transition-none"
            href="#catalogo"
          >
            Ver las seis experiencias
          </a>
        </div>
      </div>

      <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-foreground/5 md:mt-10 md:aspect-[16/7]">
        <Image
          src={coverImage}
          alt="Banda sobre un escenario con haces de luz roja y público en primer plano."
          className="object-cover object-center md:object-[50%_55%]"
          fill
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1099px) calc(100vw - 64px), (max-width: 1632px) 93vw, 1520px"
          preload
        />
      </div>
      <p className="mt-3 text-xs text-secondary">
        Imágenes de referencia que acompañan las propuestas de ROCK EXPERIENCE.
      </p>
    </section>
  );
}
