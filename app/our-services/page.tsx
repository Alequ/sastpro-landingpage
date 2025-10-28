"use client";

import HeaderNavigation from "@/components/shared/header-navigation";
import Header from "@/components/our-services/Header";
import Section1 from "@/components/our-services/Section1";
import Section2 from "@/components/our-services/Section2";
import Section3 from "@/components/our-services/Section3";
import Section4 from "@/components/our-services/Section4";
import Section5 from "@/components/our-services/Section5";
import Section6 from "@/components/our-services/Section6";
import Section7 from "@/components/our-services/Section7";
import Section8 from "@/components/our-services/Section8";
import Section9 from "@/components/our-services/Section9";
import Section10 from "@/components/our-services/Section10";
import Section11 from "@/components/our-services/Section11";
import Section12 from "@/components/our-services/Section12";

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
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
      </main>
    </>
  );
}
