import { SiteFooter } from "@/components/layout/site-footer";
import { BenefitsSection } from "@/features/benefits/components/benefits-section";
import { ParticipationSection } from "@/features/contact/participation-section";
import { ExperiencesSection } from "@/features/experiences/components/experiences-section";
import { HeroSection } from "@/features/hero/components/hero-section";
import { ManifestoSection } from "@/features/manifesto/components/manifesto-section";
import { ProjectIntroduction } from "@/features/project/components/project-introduction";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        <HeroSection />
        <ProjectIntroduction />
        <ExperiencesSection />
        <BenefitsSection />
        <ManifestoSection />
        <ParticipationSection />
      </main>
      <SiteFooter />
    </>
  );
}
