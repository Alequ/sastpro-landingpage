import Image from "next/image";
import HeaderNavigation from "@/components/shared/header-navigation";
import Footer from "@/components/shared/footer";
import CareersForm from "@/components/careers/careers-form";

export default function CareersPage() {
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
              src="/careers_2/JoinOurTeamHeader.webp"
              alt="Careers at S.A.S Transition"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
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
                  CAREERS
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
              <div className="max-w-4xl mx-auto text-center px-4 pt-4">
                <p
                  className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl lg:text-xl"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  Be part of a dynamic team driving innovation across every
                  project. We invest in your development and create bespoke
                  pathways for your professional success.
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

        {/* First Content Section - Card with Text Left, Image Right */}
        <section className="pt-0 mb-8">
          <div className="flex justify-center w-full">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              {/* Decorative Border Element */}
              <div className="flex justify-center w-full mb-8">
                <div
                  className="bg-white border-[#D0B970]"
                  style={{
                    height: "40px",
                    width: "100%",
                    borderBottomWidth: "4px",
                  }}
                />
              </div>

              {/* Main Card with Text Left, Image Right */}
              <div className="bg-white shadow-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row min-h-[350px]">
                  {/* Text Content - Left Side (70% width) */}
                  <div className="lg:w-[70%] p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <h2
                          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Have You Got What It Takes? Join the Elite.
                        </h2>

                        <p
                          className="text-lg text-gray-600 italic"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          We're not just a workforce — we're a unit.
                        </p>
                      </div>

                      <div className="w-[90%] h-1 bg-[#D0B970]"></div>

                      <p
                        className="text-base sm:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        At S.A.S Transition, we build, commission, and maintain
                        the systems that power modern infrastructure. We hire
                        the best - disciplined, technical, adaptable
                        professionals who thrive under pressure and take pride
                        in delivering quality work, safely. Good pay,
                        flexibility, and time off come with a price - you earn
                        it through commitment, skill, and teamwork.
                      </p>
                    </div>
                  </div>

                  {/* Image - Right Side (30% width) */}
                  <div className="lg:w-[30%] relative min-h-[400px] lg:min-h-full">
                    <Image
                      src="/careers_2/We're Looking For.webp"
                      alt="S.A.S Transition Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section - Wide Card with Background Image */}
        <section className="pb-8">
          <div className="flex justify-center w-full">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              <div className="relative shadow-xl overflow-hidden min-h-[320px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/careers_2/This isnt just a Job.webp"
                    alt="This isn't just a job"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex items-center min-h-[320px] p-8 sm:p-12 md:p-16 lg:p-20">
                  <div className="max-w-4xl">
                    <h2
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D0B970] mb-6 leading-tight"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      This Isn't Just a Job.
                    </h2>
                    <p
                      className="text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      It's a career, a culture, and a crew where camaraderie
                      runs deep and standards stay high.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Ethos & Mission Section */}
        <section className="pb-8">
          <div className="flex justify-center w-full">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Our Ethos Card */}
                <div className="group relative overflow-hidden shadow-xl min-h-[350px] cursor-pointer transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/careers_2/We're Looking For.webp"
                      alt="We're Looking For background"
                      fill
                      className="object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#D0B970] opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 sm:p-10 md:p-12 h-full flex flex-col justify-start">
                    <div className="space-y-6">
                      <h3
                        className="text-[#D0B970] group-hover:text-black text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        We’re Looking For:
                      </h3>

                      <ul className="space-y-3">
                        <li
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 flex items-center"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="text-[#D0B970] group-hover:text-black mr-3 text-xl font-bold">
                            •
                          </span>
                          Electrical & Mechanical Technicians
                        </li>
                        <li
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 flex items-center"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="text-[#D0B970] group-hover:text-black mr-3 text-xl font-bold">
                            •
                          </span>
                          HV/LV Authorised Persons & Engineers
                        </li>
                        <li
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 flex items-center"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="text-[#D0B970] group-hover:text-black mr-3 text-xl font-bold">
                            •
                          </span>
                          Commissioning Engineers (Electrical, Mechanical, C&I)
                        </li>
                        <li
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 flex items-center"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="text-[#D0B970] group-hover:text-black mr-3 text-xl font-bold">
                            •
                          </span>
                          QA/QC Inspectors & Technical Leads
                        </li>
                        <li
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 flex items-center"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="text-[#D0B970] group-hover:text-black mr-3 text-xl font-bold">
                            •
                          </span>
                          Project Supervisors, Site Managers & Coordinators
                        </li>
                        <li
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 flex items-center"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="text-[#D0B970] group-hover:text-black mr-3 text-xl font-bold">
                            •
                          </span>
                          Safety, Compliance & Permit Personnel
                        </li>
                        <li
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 flex items-center"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="text-[#D0B970] group-hover:text-black mr-3 text-xl font-bold">
                            •
                          </span>
                          SASTpro Digital Support & System Specialists
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Our Mission Card */}
                <div className="group relative overflow-hidden shadow-xl min-h-[350px] cursor-pointer transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/careers_2/WhatYoullNeed.webp"
                      alt="Our Mission background"
                      fill
                      className="object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#D0B970] opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 sm:p-10 md:p-12 h-full flex flex-col justify-start">
                    <div className="space-y-6">
                      <h3
                        className="text-[#D0B970] group-hover:text-black text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        What You’ll Need:
                      </h3>

                      <ul className="space-y-3">
                        <li
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 flex items-center"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="text-[#D0B970] group-hover:text-black mr-3 text-xl font-bold">
                            •
                          </span>
                          CV / Resume
                        </li>
                        <li
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 flex items-center"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="text-[#D0B970] group-hover:text-black mr-3 text-xl font-bold">
                            •
                          </span>
                          Cover Letter (tell us what makes you stand out)
                        </li>
                        <li
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 flex items-center"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="text-[#D0B970] group-hover:text-black mr-3 text-xl font-bold">
                            •
                          </span>
                          Relevant Certifications (electrical, mechanical,
                          safety, authorisation)
                        </li>
                        <li
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 flex items-center"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="text-[#D0B970] group-hover:text-black mr-3 text-xl font-bold">
                            •
                          </span>
                          Region of Availability: UK | Europe | USA | Global
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <CareersForm />
      </main>
      <div className="h-3 bg-[#D0B970]"></div>
      <Footer />
    </>
  );
}
