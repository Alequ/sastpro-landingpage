"use client";

import HeaderNavigation from "@/components/shared/header-navigation";
import Footer from "@/components/shared/footer";
import Image from "next/image";
import Link from "next/link";
import ProjectCarousel from "@/components/shared/ProjectCarousel";
import { carouselData } from "@/app/data/CarouselData";

export default function MaintenancePage() {
  // Display all projects from CarouselData
  const maintenanceProjects = carouselData.carouselCards.map((project, idx) => ({
    id: `maintenance-${idx + 1}`,
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
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden -mx-8 sm:-mx-12 md:-mx-16 lg:-mx-24 xl:-mx-32">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/maintenance_2/MaintenanceHeader.webp"
              alt="Maintenance site"
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
                  MAINTENANCE
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
              <div className="max-w-3xl mx-auto space-y-1 text-center px-4">
                <p
                  className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl lg:text-xl"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  Supporting safe, efficient delivery throughout the
                  construction phase.
                </p>
                <p
                  className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl lg:text-xl"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  Ensuring systems are installed and energised to the highest
                  industry standards.
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
          <div className="flex justify-center w-full px-0 sm:px-2 md:px-6 lg:px-24 xl:px-32">
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
                        MAINTENANCE
                      </h2>
                      <div className="w-full h-1 bg-[#D0B970]"></div>
                    </div>

                    {/* Content paragraphs */}
                    <div className="space-y-4 sm:space-y-6">
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Maintenance is about keeping systems performing -
                        safely, efficiently, and continuously. S.A.S Transition
                        provides full electrical and mechanical maintenance and
                        operational support across data centres, renewable
                        sites, oil and gas facilities, nuclear installations,
                        and grid infrastructure.
                      </p>

                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Our teams cover HV/LV equipment, switchgear, mechanical
                        systems, and building plant, performing planned
                        maintenance, condition monitoring, inspections, QA/QC
                        verification, and fault response. We also support site
                        operations, including switching, isolations, and
                        equipment upgrades - all managed through SASTpro for
                        traceability and compliance.
                      </p>

                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Every technician and engineer is authorised, competent,
                        and SAST-trained - ready to act quickly while
                        maintaining safety and system integrity. Whether through
                        continuous site support or on-call response,
                        S.A.S Transition ensures reliability where it matters most.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative order-first lg:order-last">
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                      <Image
                        src="/maintenance_2/MaintenanceImage1.webp"
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
          <div className="flex justify-center w-full px-0 sm:px-2 md:px-6 lg:px-24 xl:px-32">
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
                        READY TO START YOUR NEXT MAINTENANCE <br />
                        PROJECT
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
                              src="/maintenance/ButtonGoldav.png"
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
                      src="/maintenance_2/MaintenanceContactimage2.webp"
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
          <div className="flex justify-center w-full px-0 sm:px-2 md:px-6 lg:px-24 xl:px-32">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Card - Areas of expertise */}
                <Link href="/our-services" className="overflow-hidden shadow-xl relative group cursor-pointer transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/maintenance_2/MaintenanceAreasOfExpertise.webp"
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
                          src="/maintenance/ButtonGoldav.png"
                          alt="Arrow"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Right Card - Global experience */}
                <div className="overflow-hidden shadow-xl relative group cursor-pointer transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/maintenance_2/MaintenanceGlobalExperience.webp"
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
                          We support clients across multiple sectors and regions
                          - maintaining critical assets in data centres, energy
                          systems, and industrial facilities.
                        </p>

                        <p
                          className="text-white/90 group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed italic font-semibold transition-colors duration-300"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Our approach combines experience, digital oversight,
                          and a strong safety culture to keep essential
                          infrastructure running.
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
          projects={maintenanceProjects}
          buttonImagePath="/maintenance/ButtonBlack.png"
        />
      </main>
      <div className="h-3 bg-[#D0B970]"></div>
      <Footer />
    </>
  );
}
