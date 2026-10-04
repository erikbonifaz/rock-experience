import { SiteFooter } from "@/components/layout/site-footer";
import { BenefitsSection } from "@/features/benefits/components/benefits-section";
import { ParticipationSection } from "@/features/contact/participation-section";
import { ExperiencesSection } from "@/features/experiences/components/experiences-section";
import { HeroSection } from "@/features/hero/components/hero-section";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        <HeroSection />
        <ExperiencesSection />
        <BenefitsSection />
        <ParticipationSection />
      </main>
      <SiteFooter />
    </>
  );
}
