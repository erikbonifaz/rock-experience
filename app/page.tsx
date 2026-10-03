import Image from "next/image";
import heroImage from "@/public/images/hero-experience-full.png";
import { BenefitsSection } from "@/features/benefits/components/benefits-section";
import { ExperiencesSection } from "@/features/experiences/components/experiences-section";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        <section
          id="inicio"
          className="hero"
          aria-labelledby="hero-title"
          tabIndex={-1}
        >
          <div className="hero-media">
            <Image
              src={heroImage}
              alt="Guitarrista en un escenario iluminado de rojo, con la banda al fondo."
              className="hero-image"
              fill
              sizes="(max-width: 639px) 160vw, 100vw"
              preload
            />
            <div className="hero-overlay" aria-hidden="true" />
          </div>
          <div className="hero-content page-container">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-line">Vive algo</span>{" "}
              <span className="hero-title-line hero-title-outline">diferente.</span>
            </h1>
            <div className="hero-bottom editorial-grid">
              <p className="hero-description">
                Descubre experiencias creadas para conectar marcas, tecnología y
                personas.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#experiencias">
                  <span>Explorar experiencias</span>
                  <span className="button-arrow" aria-hidden="true">↗</span>
                </a>
                <a className="link-arrow" href="#contacto">
                  <span>Quiero participar</span>
                  <span className="arrow-line" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <span className="hero-cross" aria-hidden="true" />
        </section>
        <ExperiencesSection />
        <BenefitsSection />
      </main>
    </>
  );
}
