import Link from "next/link";
import { navigationLinks } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer
      className="relative isolate overflow-x-clip bg-[#101010] text-[#F2F0E9]"
      style={{
        backgroundImage:
          "var(--surface-shade), radial-gradient(ellipse 80% 55% at 85% 110%, rgb(255 36 66 / 0.16), transparent 72%), var(--surface-texture)",
        backgroundSize: "auto, auto, 768px 768px",
      }}
    >
      <div className="page-container relative z-10 flex min-h-[760px] flex-col pb-6 section-space-top md:min-h-[660px] lg:min-h-[720px]">
        <div className="relative h-px w-full bg-[#F2F0E9]/20" aria-hidden="true">
          <span className="absolute left-0 top-1/2 h-7 w-px -translate-y-1/2 bg-[#F2F0E9]/35" />
          <span className="absolute -left-3 top-1/2 h-px w-6 -translate-y-1/2 bg-[#F2F0E9]/35" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:gap-x-8 md:gap-y-6 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <a
            className="wordmark w-fit focus-visible:outline-2 focus-visible:outline-[#F2F0E9] focus-visible:outline-offset-4"
            href="#inicio"
            aria-label="ROCK EXPERIENCE, inicio"
          >
            <span>ROCK</span>
            <span>EXPERIENCE</span>
          </a>

          <nav
            className="md:justify-self-end lg:justify-self-center"
            aria-label="Navegación del pie de página"
          >
            <ul className="grid grid-cols-1 gap-y-1 font-sans text-[11px] font-medium uppercase tracking-[0.1em] md:flex md:flex-wrap md:items-center md:justify-end md:gap-x-5 md:gap-y-1 lg:justify-center lg:gap-x-8">
              {navigationLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-[#FF2442] focus-visible:text-[#FF2442] motion-reduce:transition-none"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-[#FF2442] focus-visible:text-[#FF2442] motion-reduce:transition-none"
                  href="/arquitectura"
                >
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-[#FF2442] focus-visible:text-[#FF2442] motion-reduce:transition-none"
                  href="/proyecto"
                >
                  Sobre la prueba
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-2 md:justify-self-end lg:col-span-1 lg:border-l lg:border-[#F2F0E9]/35 lg:pl-8">
            <a
              className="group inline-flex min-h-12 items-center gap-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-[#FF2442] focus-visible:outline-2 focus-visible:outline-[#F2F0E9] focus-visible:outline-offset-4"
              href="#inicio"
              style={{ color: "var(--accent)" }}
            >
              <span>Volver arriba</span>
              <span
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="mt-auto pt-12 md:pt-16">
          <div
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-x-clip"
            aria-hidden="true"
          >
            <p className="pointer-events-none select-none text-center font-display text-[clamp(3rem,14vw,18rem)] leading-[0.95] tracking-[-0.035em] md:text-[clamp(5rem,13vw,15rem)] lg:whitespace-nowrap lg:text-[clamp(7rem,16vw,20rem)]">
              <span className="hero-title-outline block opacity-[0.35] lg:inline">
                ROCK
              </span>
              <span className="hero-title-outline block opacity-[0.35] lg:ml-[0.08em] lg:inline">
                EXPERIENCE
              </span>
            </p>
          </div>

          <div className="mt-8 border-t border-[#F2F0E9]/20 pt-5 md:mt-10 md:pt-6">
            <div className="flex flex-col gap-4 text-xs tracking-[0.04em] md:flex-row md:items-center md:justify-between">
              <p className="text-[#AAA69F]">© 2026 ROCK EXPERIENCE</p>

              <a
                className="inline-flex w-fit min-h-10 items-center gap-2 text-secondary! transition-colors duration-200 hover:text-foreground! focus-visible:text-foreground! focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-4 motion-reduce:transition-none"
                href="https://github.com/erikbonifaz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Erik Bonifaz (abre en una pestaña nueva)"
              >
                <svg
                  className="size-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.91c.58.11.79-.25.79-.56v-2.22c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.18 1.77 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.93 10.93 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.13v3.25c0 .31.21.67.79.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
