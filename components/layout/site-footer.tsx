import Link from "next/link";
import { navigationLinks } from "./navigation-items";

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

              <div className="flex flex-col gap-3 text-[#AAA69F] sm:flex-row sm:items-center sm:gap-6">
                <p>
                  Desarrollado por <span className="text-[#F2F0E9]">Erik Bonifaz</span>
                </p>
                <span
                  className="hidden h-5 w-px bg-[#F2F0E9]/30 sm:block"
                  aria-hidden="true"
                />
                <a
                  className="group inline-flex w-fit min-h-10 items-center gap-2 text-[#F2F0E9] underline decoration-[#F2F0E9]/35 underline-offset-4 transition-colors duration-200 hover:text-[#FF2442] focus-visible:text-[#FF2442] motion-reduce:transition-none"
                  href="https://github.com/erikbonifaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                  <span
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
