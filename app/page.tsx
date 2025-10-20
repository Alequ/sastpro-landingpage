import { HeroSection } from "@/components/hero-section"
import { ProblemStatement } from "@/components/problem-statement"
import { KeyFeatures } from "@/components/key-features"
import { HowItWorks } from "@/components/how-it-works"
import { UseCases } from "@/components/use-cases"
import { SocialProof } from "@/components/social-proof"
import { StatsMetrics } from "@/components/stats-metrics"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { SectionGuideModal } from "@/components/section-guide-modal"

export default function LandingPage() {
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
