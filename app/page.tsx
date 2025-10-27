import { Metadata } from "next";
import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/services-overview";
import IndustriesServed from "@/components/home/industries-served";
import HowWeWork from "@/components/home/how-we-work";
import WhyChooseUs from "@/components/home/why-choose-us";
import ProjectPortfolio from "@/components/home/project-portfolio";
import StatsMetrics from "@/components/home/stats-metrics";
import TestimonialsSection from "@/components/home/testimonials-section";
import FinalCTA from "@/components/home/final-cta";
import Footer from "@/components/home/footer";
import HeaderNavigation from "@/components/home/header-navigation";
import BackToTop from "@/components/home/back-to-top";

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
