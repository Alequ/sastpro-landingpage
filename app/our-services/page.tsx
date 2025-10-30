"use client";

import HeaderNavigation from "@/components/shared/header-navigation";
import Footer from "@/components/shared/footer";
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
        <div id="engineering-design">
          <Section1 />
        </div>
        <Section2 />
         <section style={{paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div style={{ width: "90%" }}>
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>
        <div id="authorised-personnel">
          <Section3 />
        </div>
        <Section4 />
          <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div style={{ width: "90%" }}>
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>
        <div id="safety-compliance">
          <Section5 />
        </div>
        <Section6 />
          <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div style={{ width: "90%" }}>
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>
        <div id="digital-solutions">
          <Section7 />
        </div>
        <Section8 />
          <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div style={{ width: "90%" }}>
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>
        <div id="training-development">
          <Section9 />
        </div>
        <Section10 />
          <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div style={{ width: "90%" }}>
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>
        <div id="callout-support">
          <Section11 />
        </div>
        <Section12 />
      </main>
      <div className="h-3 bg-[#D0B970]"></div>
      <Footer />
    </>
  );
}
