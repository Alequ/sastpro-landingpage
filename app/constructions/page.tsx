"use client";

import { Metadata } from "next";
import HeaderNavigation from "@/components/home/header-navigation";
import Image from "next/image";

export default function ConstructionsPage() {
  return (
    <>
      <HeaderNavigation />
      <main className="min-h-screen" style={{ backgroundColor: "#c4c4c4" }}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/constructions/ConstructionHeader.png"
              alt="Construction site"
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
                  CONSTRUCTION
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
          <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
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
              <div className="bg-white rounded-lg shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                  {/* Left Column - Content */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* Title with underline */}
                    <div className="space-y-3 sm:space-y-4">
                      <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Construction
                      </h2>
                      <div className="w-full h-1 bg-[#D0B970]"></div>
                    </div>

                    {/* Content paragraphs */}
                    <div className="space-y-4 sm:space-y-6">
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        S.A.S Transition, construction is where expertise meets
                        precision. We deliver electrical and mechanical builds
                        that form the foundation of modern infrastructure - from
                        data centres and renewable facilities to oil and gas,
                        nuclear, and grid projects.
                      </p>

                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Our teams bring decades of field experience across HV/LV
                        electrical and mechanical installations, including
                        system design, switchgear assembly, containment and
                        cabling, transformer works, chilled water systems,
                        pumps, and HVAC plant. Every project is driven by
                        control, coordination, and safety - executed under Safe
                        Systems of Work (SSoW), COHE/LOTO, and rigorous QA/QC
                        inspection and documentation to ensure full compliance
                        and reliability.
                      </p>

                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Through our digital platform, SASTpro, we manage
                        documentation, permits, and progress tracking in real
                        time - ensuring the same consistency and quality across
                        every site. From design to delivery, SAStransition
                        provides the knowledge, structure, and reliability
                        needed to build safely in today's demanding
                        environments.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative order-first lg:order-last">
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="/constructions/ConstructionBackgroundImage.png"
                        alt="Construction site with workers and cranes"
                        fill
                        className="object-cover"
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
          <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              {/* White Card Container */}
              <div className="bg-white rounded-lg shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                  {/* Left Column - CTA Content */}
                  <div className="space-y-8">
                    <h2
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      READY TO START YOUR NEXT CONSTRUCTION PROJECT
                    </h2>

                    {/* Contact Button */}
                    <div className="flex items-center">
                      <button className="group flex items-center gap-3 text-black font-bold text-lg sm:text-xl hover:text-[#D0B970] transition-colors duration-300">
                        <span style={{ fontFamily: "var(--font-montserrat)" }}>
                          CONTACT US
                        </span>
                        <svg
                          className="w-6 h-6 text-[#D0B970] group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative order-first lg:order-last">
                    <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="/constructions/ConstructionBackgroundImage.png"
                        alt="Modern construction buildings with cranes"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Golden Bottom Border */}
                <div className="mt-16 lg:mt-24">
                  <div className="w-full h-1 bg-[#D0B970]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise & Global Experience Section */}
        <section className="mb-15">
          <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Card - Areas of expertise */}
                <div className="bg-black/70 rounded-lg overflow-hidden shadow-xl relative group cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/constructions/ConstructionBackgroundImage.png"
                      alt="Construction workers with plans"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 sm:p-10 md:p-12 h-full flex flex-col justify-center min-h-[300px] sm:min-h-[400px]">
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Areas of expertise
                      </h3>
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-[#D0B970] group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Card - Global experience */}
                <div className="bg-black/70 rounded-lg overflow-hidden shadow-xl relative">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/constructions/ConstructionBackgroundImage.png"
                      alt="Global construction site"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 sm:p-10 md:p-12 h-full flex flex-col justify-center min-h-[300px] sm:min-h-[400px]">
                    <div className="space-y-6">
                      <h3
                        className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Global experience
                      </h3>

                      <div className="space-y-4">
                        <p
                          className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          With a proven track record across Europe and
                          internationally, SAStransition has delivered complex
                          electrical and mechanical construction across data
                          centres, energy, and industrial sectors.
                        </p>

                        <p
                          className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Our reputation is built on safety, discipline, and the
                          ability to perform under pressure - wherever the work
                          takes us.
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
        <section>
          <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              <div className="relative">
                {/* Navigation Arrows - Outside the cards */}
                <button className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 p-3 hover:bg-black/10 rounded-full transition-colors duration-300">
                  <svg
                    className="w-8 h-8 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 p-3 hover:bg-black/10 rounded-full transition-colors duration-300">
                  <svg
                    className="w-8 h-8 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {/* Project Example 1 */}
                  <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
                    <div className="space-y-6">
                      <div>
                        <h3
                          className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Project
                        </h3>
                        <p
                          className="text-gray-600 text-sm sm:text-base"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Example 1
                        </p>
                      </div>

                      <div>
                        <h4
                          className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Client
                        </h4>
                        <p
                          className="text-gray-600 text-sm sm:text-base"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Confidential
                        </p>
                      </div>

                      <div>
                        <h4
                          className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Location
                        </h4>
                        <p
                          className="text-gray-600 text-sm sm:text-base mb-4"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Netherlands
                        </p>
                      </div>

                      <p
                        className="text-gray-700 text-sm sm:text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation
                      </p>
                    </div>
                  </div>

                  {/* Project Example 2 */}
                  <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
                    <div className="space-y-6">
                      <div>
                        <h3
                          className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Project
                        </h3>
                        <p
                          className="text-gray-600 text-sm sm:text-base"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Example 2
                        </p>
                      </div>

                      <div>
                        <h4
                          className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Client
                        </h4>
                        <p
                          className="text-gray-600 text-sm sm:text-base"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Confidential
                        </p>
                      </div>

                      <div>
                        <h4
                          className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Location
                        </h4>
                        <p
                          className="text-gray-600 text-sm sm:text-base mb-4"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Belgium
                        </p>
                      </div>

                      <p
                        className="text-gray-700 text-sm sm:text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation
                      </p>
                    </div>
                  </div>

                  {/* Project Example 3 */}
                  <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
                    <div className="space-y-6">
                      <div>
                        <h3
                          className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Project
                        </h3>
                        <p
                          className="text-gray-600 text-sm sm:text-base"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Example 3
                        </p>
                      </div>

                      <div>
                        <h4
                          className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Client
                        </h4>
                        <p
                          className="text-gray-600 text-sm sm:text-base"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Confidential
                        </p>
                      </div>

                      <div>
                        <h4
                          className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Location
                        </h4>
                        <p
                          className="text-gray-600 text-sm sm:text-base mb-4"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          London
                        </p>
                      </div>

                      <p
                        className="text-gray-700 text-sm sm:text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
