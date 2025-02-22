import ConstructionWarning from "@/components/construction-warning"
import GlitchOverlay from "@/components/glitch-overlay"
import Navigation from "@/components/navigation"
import ParticleEffect from "@/components/particle-effect"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import CVDownload from "@/components/cv-download"
import HiddenEasterEgg from "@/components/hidden-easter-egg"

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white relative overflow-hidden">
      <GlitchOverlay />
      <ParticleEffect />
      <ConstructionWarning />
      <div className="container mx-auto px-4 py-8">
        <Navigation />
        <div className="mt-20 space-y-32">
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
      <CVDownload />
      <HiddenEasterEgg />
    </main>
  )
}

