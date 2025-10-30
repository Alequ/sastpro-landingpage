"use client";

import Image from "next/image";
import HeaderNavigation from "@/components/shared/header-navigation";
import Footer from "@/components/shared/footer";
import ProjectCarousel from "@/components/shared/ProjectCarousel";
import { carouselData } from "@/app/data/CarouselData";

export default function CommissioningPage() {
  // Display all projects from CarouselData
  const commissioningProjects = carouselData.carouselCards.map((project, idx) => ({
    id: `commissioning-${idx + 1}`,
    title: project.category,
    client: project.client,
    location: project.location,
    description: project.description
  }));
  return (
    <>
      <HeaderNavigation />
      <main
        className="min-h-screen px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
        style={{ backgroundColor: "#c4c4c4" }}
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mx-8 sm:-mx-12 md:-mx-16 lg:-mx-24 xl:-mx-32">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/commissioning/CommissioningHeader.png"
              alt="Commissioning site"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
            <div className="space-y-2">
              {/* Title with Squares */}
              <div className="flex items-center justify-center gap-6 lg:gap-8">
                {/* Left Squares */}
                <div className="hidden lg:flex flex-row gap-2 items-center">
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                </div>

                {/* Title */}
                <h1
                  className="font-bold tracking-[0.15em] text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  COMMISSIONING
                </h1>

                {/* Right Squares */}
                <div className="hidden lg:flex flex-row gap-2 items-center">
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                </div>
              </div>

              {/* Mobile Squares - Shown on smaller screens */}
              <div className="flex lg:hidden justify-center gap-2">
                <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
              </div>

              {/* Description Text */}
              <div className="max-w-5xl mx-auto text-center px-4">
                <p
                  className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-lg lg:text-lg"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  Supporting safe, thorough testing and verification of
                  electrical and mechanical systems.
                  <br />
                  Ensuring all systems operate reliably and meet design
                  specifications before handover.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Construction Content Section */}
        <section className="pt-0 mb-15">
          <div className="flex justify-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              {/* Decorative Border Element */}
              <div className="flex justify-center w-full mb-15">
                <div
                  className="bg-white border-[#D0B970]"
                  style={{
                    height: "40px",
                    width: "100%",
                    borderBottomWidth: "4px",
                  }}
                />
              </div>

              {/* White Card Container */}
              <div className="bg-white shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                  {/* Left Column - Content */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* Title with underline */}
                    <div className="space-y-3 sm:space-y-4">
                      <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Commissioning
                      </h2>
                      <div className="w-full h-1 bg-[#D0B970]"></div>
                    </div>

                    {/* Content paragraphs */}
                    <div className="space-y-4 sm:space-y-6">
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Commissioning is the critical handover between
                        construction and operation - where systems are proven,
                        tested, and brought safely online. S.A.S Transition’s teams
                        are specialists in electrical, mechanical, and control
                        system commissioning, ensuring every installation
                        performs exactly as designed.
                      </p>

                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Our capabilities cover HV and LV testing, VLF and
                        insulation resistance testing, primary and secondary
                        injection, relay verification, and full functional
                        testing of switchgear and transformers. On the
                        mechanical side, we manage pressure testing, flushing,
                        balancing, and integrated system testing (IST) -
                        providing confidence that all systems are ready for
                        operation.
                      </p>

                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Every stage of our commissioning process is backed by
                        QA/QC validation, test records, and verification
                        protocols, all tracked through SASTpro for full
                        transparency and traceability. With extensive experience
                        across data centres, renewables, oil and gas, nuclear,
                        and grid infrastructure, we bring control and clarity to
                        the most demanding commissioning environments.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative order-first lg:order-last">
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                      <Image
                        src="/commissioning/CommissioningImage1.png"
                        alt="Construction site with workers and cranes"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-15">
          <div className="flex justify-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              {/* White Card Container */}
              <div className="bg-white shadow-xl border-b-4 border-[#D0B970] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Column - CTA Content */}
                  <div className="p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      <h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        READY TO START YOUR NEXT COMMISSIONING <br />
                        PROJECT?
                      </h2>

                      {/* Contact Button */}
                      <div className="flex items-center">
                        <button className="group flex items-center gap-3 text-black font-bold text-lg sm:text-xl hover:text-[#D0B970] transition-colors duration-300">
                          <span
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            CONTACT US
                          </span>
                          <div className="relative w-6 h-6 group-hover:translate-x-1 transition-transform duration-300">
                            <Image
                              src="/commissioning/ButtonGoldav.png"
                              alt="Arrow"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative h-[300px] lg:h-auto min-h-[400px]">
                    <Image
                      src="/commissioning/CommissioningContactimage2.png"
                      alt="Modern construction buildings with cranes"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise & Global Experience Section */}
        <section className="mb-15">
          <div className="flex justify-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Card - Areas of expertise */}
                <div className="overflow-hidden shadow-xl relative group cursor-pointer transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/commissioning/CommissioningAreasOfExpertise.png"
                      alt="Construction workers with plans"
                      fill
                      className="object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#D0B970] opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 sm:p-10 md:p-12 h-full flex flex-col justify-start min-h-[300px] sm:min-h-[400px]">
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-white group-hover:text-black text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Areas of expertise
                      </h3>
                      <div className="relative w-8 h-8 sm:w-9 sm:h-9 group-hover:translate-x-1 transition-transform duration-300">
                        <Image
                          src="/commissioning/ButtonGoldav.png"
                          alt="Arrow"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Card - Global experience */}
                <div className="overflow-hidden shadow-xl relative group cursor-pointer transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/commissioning/CommissioningGlobalExperience.png"
                      alt="Global construction site"
                      fill
                      className="object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#D0B970] opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 sm:p-10 md:p-12 h-full flex flex-col justify-start min-h-[300px] sm:min-h-[400px]">
                    <div className="space-y-6">
                      <h3
                        className="text-white group-hover:text-black text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Global experience
                      </h3>

                      <div className="space-y-4">
                        <p
                          className="text-white/90 group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed italic font-semibold transition-colors duration-300"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          S.A.S Transition has delivered commissioning and
                          energisation support for major infrastructure across
                          Europe and beyond - from data centres and grid systems
                          to renewable and offshore assets.
                        </p>

                        <p
                          className="text-white/90 group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed italic font-semibold transition-colors duration-300"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Our engineers are trusted for disciplined, safe, and
                          efficient commissioning across every sector.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Examples Section */}
        <ProjectCarousel
          projects={commissioningProjects}
          buttonImagePath="/commissioning/ButtonBlack.png"
        />
      </main>
      <div className="h-3 bg-[#D0B970]"></div>
      <Footer />
    </>
  );
}
