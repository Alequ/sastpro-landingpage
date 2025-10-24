import { HeroSection } from "@/components/sastpro/hero-section"
import { ProblemStatement } from "@/components/sastpro/problem-statement"
import { KeyFeatures } from "@/components/sastpro/key-features"
import { HowItWorks } from "@/components/sastpro/how-it-works"
import { UseCases } from "@/components/sastpro/use-cases"
import { SocialProof } from "@/components/sastpro/social-proof"
import { StatsMetrics } from "@/components/sastpro/stats-metrics"
import { FinalCTA } from "@/components/sastpro/final-cta"
import { Footer } from "@/components/sastpro/footer"
import { SectionGuideModal } from "@/components/sastpro/section-guide-modal"

export default function SASTPROPage() {
  return (
    <main className="min-h-screen">
      <SectionGuideModal />
      <div data-section="hero">
        <HeroSection />
      </div>
      <div data-section="problem">
        <ProblemStatement />
      </div>
      <div data-section="features">
        <KeyFeatures />
      </div>
      <div data-section="how-it-works">
        <HowItWorks />
      </div>
      <div data-section="use-cases">
        <UseCases />
      </div>
      <div data-section="social-proof">
        <SocialProof />
      </div>
      <div data-section="stats">
        <StatsMetrics />
      </div>
      <div data-section="final-cta">
        <FinalCTA />
      </div>
      <div data-section="footer">
        <Footer />
      </div>
    </main>
  )
}
