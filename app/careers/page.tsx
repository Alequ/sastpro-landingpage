"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import HeaderNavigation from "@/components/shared/header-navigation";
import Footer from "@/components/shared/footer";

export default function CareersPage() {
  return (
    <>
      <HeaderNavigation />
      <main
        className="min-h-screen px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
        style={{ backgroundColor: "#c4c4c4" }}
      >
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden -mx-8 sm:-mx-12 md:-mx-16 lg:-mx-24 xl:-mx-32">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/careers/JoinOurTeamHeader.png"
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
                          Have you got what it takes? Join the elite.
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
                      src="/careers/Team.png"
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
                    src="/careers/This_isnt_just_a_Job.png"
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
                      This isn't just a job.
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
                      src="/careers/LookingFor.png"
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
                      src="/careers/WhatYoullNeed.png"
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
        <section className="pb-8">
          <div className="flex justify-center w-full">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              <div className="bg-white shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
                <h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Application Form
                </h2>

                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    />
                  </div>

                  {/* Trade/Discipline Field */}
                  <div>
                    <label
                      htmlFor="trade"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Trade / Discipline
                    </label>
                    <select
                      id="trade"
                      name="trade"
                      className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors bg-white appearance-none text-black"
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        backgroundImage:
                          'url(\'data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"><path fill="%23666" d="M2 0L0 2h4zm0 5L0 3h4z"/></svg>\')',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        backgroundSize: "12px",
                      }}
                    >
                      <option
                        value=""
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        Select your trade/discipline
                      </option>
                      <option
                        value="electrical-mechanical"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        Electrical & Mechanical Technicians
                      </option>
                      <option
                        value="hv-lv"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        HV/LV Authorised Persons & Engineers
                      </option>
                      <option
                        value="commissioning"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        Commissioning Engineers (Electrical, Mechanical, C&I)
                      </option>
                      <option
                        value="qa-qc"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        QA/QC Inspectors & Technical Leads
                      </option>
                      <option
                        value="project-management"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        Project Supervisors, Site Managers & Coordinators
                      </option>
                      <option
                        value="safety-compliance"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        Safety, Compliance & Permit Personnel
                      </option>
                      <option
                        value="digital-support"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        SASTpro Digital Support & System Specialists
                      </option>
                    </select>
                  </div>

                  {/* Preferred Work Region Field */}
                  <div>
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Preferred Work / Region
                    </label>
                    <select
                      id="region"
                      name="region"
                      className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors bg-white appearance-none text-black"
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        backgroundImage:
                          'url(\'data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"><path fill="%23666" d="M2 0L0 2h4zm0 5L0 3h4z"/></svg>\')',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        backgroundSize: "12px",
                      }}
                    >
                      <option
                        value=""
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        Select your preferred region
                      </option>
                      <option
                        value="uk"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        UK
                      </option>
                      <option
                        value="europe"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        Europe
                      </option>
                      <option
                        value="usa"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        USA
                      </option>
                      <option
                        value="global"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        Global
                      </option>
                    </select>
                  </div>

                  {/* Location Field */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    />
                  </div>

                  {/* Message/Availability Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Message / Availability
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors resize-vertical"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    />
                  </div>

                  {/* Upload Files Section */}
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-3"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Upload Files
                    </label>
                    <div className="border-2 border-dashed border-black p-6 hover:border-[#D0B970] transition-colors">
                      <input
                        type="file"
                        id="files"
                        name="files"
                        multiple
                        className="hidden"
                        accept=".pdf,.doc,.docx,.txt"
                      />
                      <div className="flex justify-start">
                        <label
                          htmlFor="files"
                          className="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-300 text-black font-bold rounded-full hover:bg-gray-400 transition-colors"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Choose Files
                          <ChevronRight
                            className="ml-2 h-4 w-4"
                            strokeWidth={3}
                          />
                        </label>
                      </div>
                      <p
                        className="mt-3 text-sm text-gray-500 text-left"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Upload your CV, cover letter, and certifications
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 bg-[#D0B970] text-black font-bold rounded-full hover:bg-[#b8a55e] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Submit
                      <ChevronRight className="ml-2 h-4 w-4" strokeWidth={3} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="h-3 bg-[#D0B970]"></div>
      <Footer />
    </>
  );
}
