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
  title: "Electrical & Mechanical Engineering Turnkey Solutions | S.A.S Transition",
  description:
    "Electrical and mechanical turnkey engineering solutions for construction, commissioning, and maintenance across critical infrastructure projects.",
  keywords: [
    "engineering company",
    "electrical engineering",
    "mechanical engineering",
    "safety solutions",
    "Sauthorized energy engineers",
    "critical infrastructure",
    "engineering team",
  ],
  openGraph: {
    title: "Electrical & Mechanical Engineering Turnkey Solutions | S.A.S Transition",
    description:
      "Electrical and mechanical turnkey engineering solutions for construction, commissioning, and maintenance across critical infrastructure projects.",
    type: "website",
    url: "https://sastransition.com",
    images: [
      {
        url: "/who-we-are_2/WhoWeAreHeader.webp",
        width: 1200,
        height: 630,
        alt: "S.A.S Transition Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are | S.A.S Transition - Turnkey Engineering Specialists",
    description:
      "Global electrical and mechanical specialists — delivering safe, efficient turnkey engineering from design and commissioning to maintenance.",
    images: ["/who-we-are_2/WhoWeAreHeader.webp"],
  },
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
