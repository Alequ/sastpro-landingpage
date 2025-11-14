import { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/home/hero-section";
import ServicesOverview from "@/components/home/services-overview";
import IndustriesServed from "@/components/home/industries-served";
import HowWeWork from "@/components/home/trackRecord";
import Footer from "@/components/shared/footer";
import HeaderNavigation from "@/components/shared/header-navigation";
import BackToTop from "@/components/home/back-to-top";
import LatestNews from "@/components/home/LatestNews";

export const metadata: Metadata = {
  title: "Electrical Engineering & Safety Services - Expert Solutions",
  description:
    "Expert electrical engineering, maintenance, and safety services for onshore and offshore installations. Certified professionals delivering safe and compliant solutions.",
  keywords:
    "electrical engineering, maintenance services, permit to work, safety procedures, offshore installations, onshore installations, COHE procedures, authorized energy engineers",
};

export default function HomePage() {
  return (
    <main className="min-h-screen theme-electrical">
      <HeaderNavigation />
      <HeroSection />
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home_2/Background2.webp"
            alt="Background"
            fill
            sizes="100vw"
            quality={75}
            className="object-cover"
          />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10">
          <ServicesOverview />
          <IndustriesServed />
          <LatestNews />
        </div>
      </div>
      <HowWeWork />
      <div className="h-3 bg-[#D0B970]"></div>
      <Footer />
      <BackToTop />
    </main>
  );
}
