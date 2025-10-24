import { Metadata } from "next";
import HeroSection from "@/components/electrical/hero-section";
import ServicesOverview from "@/components/electrical/services-overview";
import IndustriesServed from "@/components/electrical/industries-served";
import HowWeWork from "@/components/electrical/how-we-work";
import WhyChooseUs from "@/components/electrical/why-choose-us";
import ProjectPortfolio from "@/components/electrical/project-portfolio";
import StatsMetrics from "@/components/electrical/stats-metrics";
import TestimonialsSection from "@/components/electrical/testimonials-section";
import FinalCTA from "@/components/electrical/final-cta";
import Footer from "@/components/electrical/footer";
import HeaderNavigation from "@/components/electrical/header-navigation";
import BackToTop from "@/components/electrical/back-to-top";

export const metadata: Metadata = {
  title: "Electrical Engineering & Safety Services - Expert Solutions",
  description: "Expert electrical engineering, maintenance, and safety services for onshore and offshore installations. Certified professionals delivering safe and compliant solutions.",
  keywords: "electrical engineering, maintenance services, permit to work, safety procedures, offshore installations, onshore installations, COHE procedures, authorized energy engineers",
};

export default function HomePage() {
  return (
    <main className="min-h-screen theme-electrical">
      <HeaderNavigation />
      <HeroSection />
      <ServicesOverview />
      <IndustriesServed />
      <HowWeWork />
      <WhyChooseUs />
      <ProjectPortfolio />
      <StatsMetrics />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
