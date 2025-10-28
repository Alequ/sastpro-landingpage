"use client";

import HeaderNavigation from "@/components/shared/header-navigation";
import Header from "@/components/our-services/Header";
import Section1 from "@/components/our-services/Section1";
import Section2 from "@/components/our-services/Section2";
import Section3 from "@/components/our-services/Section3";
import Section4 from "@/components/our-services/Section4";

export default function OurServicesPage() {
  return (
    <>
      <HeaderNavigation />
      <main className="min-h-screen" style={{ backgroundColor: "#c4c4c4" }}>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </>
  );
}
