import Image from "next/image";
import audienceImage from "@/public/images/manifesto-audience.webp";
import styles from "../manifesto.module.css";

export function ManifestoSection() {
  return (
    <section
      id="manifiesto"
      aria-labelledby="manifesto-title"
      className="relative isolate overflow-hidden"
    >
      <div className={`${styles.imageFrame} relative h-[clamp(320px,85vw,560px)] min-[1100px]:absolute min-[1100px]:inset-y-0 min-[1100px]:left-0 min-[1100px]:h-full min-[1100px]:w-[54%] forced-colors:hidden`}>
        <Image
          src={audienceImage}
          alt="Público disfrutando de un concierto, con las manos en alto."
          fill
          sizes="(min-width: 1100px) 54vw, 100vw"
          className="object-cover object-[50%_40%]"
        />
      </div>

      <div className="page-container relative pt-12 pb-20 min-[640px]:pt-16 min-[640px]:pb-24 min-[1100px]:flex min-[1100px]:min-h-[640px] min-[1100px]:items-center min-[1100px]:py-0">
        <div className="min-[1100px]:ml-[54%] min-[1100px]:w-[46%]">
          <h2
            id="manifesto-title"
            tabIndex={-1}
            className="navigation-focus-target font-display text-[clamp(44px,9vw,88px)] font-normal leading-[1.04] tracking-[-0.02em] uppercase min-[1100px]:text-[clamp(78px,7.7vw,120px)]"
          >
            <span className="block">La experiencia</span>{" "}
            <span className="block">
              La haces <span className="text-accent">tú.</span>
            </span>
          </h2>

          <p className="mt-7 max-w-[38ch] text-lg leading-relaxed text-foreground/85 min-[640px]:text-xl min-[1100px]:max-w-[37ch] min-[1100px]:text-[clamp(20px,1.9vw,26px)] min-[1100px]:leading-[1.2]">
            Música, creatividad y tecnología.{" "}
            <span className="min-[1100px]:block">
              Encuentra lo que te mueve y forma parte de la experiencia.
            </span>
          </p>

          <a
            href="#contacto"
            className="mt-9 inline-flex min-h-14 w-full items-center justify-between gap-8 bg-accent px-7 py-4 text-lg font-medium text-background! transition-colors duration-200 hover:bg-foreground motion-reduce:transition-none min-[640px]:w-auto min-[1100px]:min-h-[66px] min-[1100px]:min-w-[328px] min-[1100px]:text-2xl forced-colors:border"
          >
            Quiero ser parte
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="square"
            >
              <path d="M3 12h17M14 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
