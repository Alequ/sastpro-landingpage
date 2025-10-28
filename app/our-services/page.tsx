"use client";

import HeaderNavigation from "@/components/home/header-navigation";
import Header from "@/components/our-services/Header";
import Section1 from "@/components/our-services/Section1";

export default function OurServicesPage() {
  return (
    <>
      <HeaderNavigation />
      <main className="min-h-screen" style={{ backgroundColor: "#c4c4c4" }}>
        <Header />
        <Section1 />
      </main>
    </>
  );
}
