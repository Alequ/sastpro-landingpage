"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderNavigation from "@/components/shared/header-navigation";
import Footer from "@/components/shared/footer";

export default function WhoWeArePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Add smooth scrolling behavior
  useEffect(() => {
    // Add smooth scrolling to html element
    document.documentElement.style.scrollBehavior = "smooth";

    // Handle hash navigation (e.g., /who-we-are#team)
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }

    // Cleanup function to reset scroll behavior
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
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
              src="/who-we-are/WhoWeAreHeader.png"
              alt="Who we are"
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
                  WHO WE ARE
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
                  Delivering electrical and mechanical expertise across critical
                  infrastructure worldwide.
                  <br />
                  Building reliable systems that power the future.
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

        {/* Main Content Section */}
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
        <div className="bg-white shadow-xl p-6 sm:p-8 md:p-12 w-full">
    {/* Title with underline */}
    <div className="space-y-3 mb-8 sm:mb-10">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        Our story
      </h2>
      <div className="w-24 h-1 bg-[#D0B970]"></div>
    </div>

    {/* First Row: Video + Story Text */}
    <div className="flex flex-col 2xl:flex-row 2xl:items-start gap-6 2xl:gap-12 mb-2">
      {/* Video */}
      <div className="w-full 2xl:w-[55%]">
        <video
          className="w-full h-auto shadow-md rounded-sm"
          controls
          src="/videos/Post.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Story Text */}
      <div className="w-full 2xl:w-[45%] flex items-center">
        <p
          className="text-base sm:text-lg text-gray-700 leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          S.A.S Transition was founded by Allyn Coady, an engineer who got tired
          of watching the industry trip over its own shoelaces — the wrong
          people in the wrong jobs, good engineers undervalued, and safety
          treated like paperwork instead of protection. After years in offshore
          oil & gas, data centres, and renewable energy, Allyn saw the same
          thing everywhere: talent wasted, standards slipping, and projects
          surviving on luck instead of leadership. So he built S.A.S Transition
          to flip the script — to bring together the best engineers, give them
          the tools and respect they deserve, and raise the bar across every
          site, system, and sector.
        </p>
      </div>
    </div>

    {/* Second Row: Text + Image */}
    <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-6 2xl:gap-12">
      {/* Text Section */}
      <div className="w-full 2xl:w-[55%] space-y-6">
        <p
          className="text-base sm:text-lg text-gray-700 leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          We're a team of engineers who actually engineer — people who take
          pride in doing it right the first time, safely, and with purpose. From
          design and commissioning to maintenance and digital control, we
          deliver electrical and mechanical turnkey solutions that are as sharp
          as they are safe.
        </p>

        <p
          className="text-base sm:text-lg text-gray-700 leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Our digital platform, SASTpro, developed by S.A.S Transition, turns
          all that talk about "digital transformation" into real control — live
          permits, tracked isolations, verified competence, and zero guesswork.
        </p>

        <p
          className="text-base sm:text-lg text-gray-700 leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          We're not here to tick boxes or pad CVs. We're here to build smarter,
          work safer, and give real engineers a place to thrive — while setting
          a gold standard that the rest will have to catch up to.
        </p>
      </div>

      {/* Image */}
      <div className="w-full 2xl:w-[45%] flex justify-center 2xl:justify-end">
        <Image
          src="/who-we-are/WhoWeAreOurStoryMonitor.png"
          alt="Digital solutions SASTpro"
          width={500}
          height={350}
          className="object-contain w-full max-w-md h-auto drop-shadow-lg"
        />
      </div>
    </div>
  </div>
            </div>
          </div>
        </section>

        {/* Our Ethos & Mission Section */}
        <section className="mb-15">
          <div className="flex justify-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Our Ethos Card */}
                <div className="group relative overflow-hidden shadow-xl min-h-[350px] cursor-pointer transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/who-we-are/WhoWeAreOurMission.png"
                      alt="Our Ethos background"
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
                        Our Ethos
                      </h3>

                      <div className="space-y-4">
                        <p
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Our ethos is simple: do things properly, and do them
                          safely. We believe safety, precision and integrity are
                          not optional - they are the foundation of every
                          project we deliver. At S.A.S Transition, we take
                          ownership of our work from start to finish, operating
                          with discipline, structure and accountability at every
                          stage.
                        </p>

                        <p
                          className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          We value open communication and transparency, building
                          trust within our teams and with every client we work
                          alongside. Our people are specialists who bring
                          competence, reliability and pride to everything they
                          do. Above all, we work as one. By uniting teams,
                          aligning goals and maintaining the highest standards,
                          we ensure that safety, quality and performance are
                          never compromised. That's what defines our ethos - and
                          it's what our clients depend on every day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Mission Card */}
                <div className="group relative overflow-hidden shadow-xl min-h-[350px] cursor-pointer transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/who-we-are/WhoWeAreOurEthos.png"
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
                        Our Mission
                      </h3>

                      <p
                        className="text-white group-hover:text-black text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Our mission is to lead a global shift in how safety and
                        engineering are delivered. What began as a drive to
                        raise standards has grown into a vision to redefine how
                        the industry operates through structure, discipline and
                        digital control. We're building systems and processes
                        that others will follow, setting a new benchmark for
                        safety, quality and accountability. SASTpro is at the
                        centre of this change, providing a digital platform that
                        connects people, permits and performance. Alongside it,
                        SASTacademy equips professionals with the knowledge and
                        competence to maintain those standards in every
                        environment. As we expand across Europe, the United
                        States and beyond, our goal is clear: to see our systems
                        and training set the global benchmark for safe and
                        efficient engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety First Section */}
        <section className="mb-15">
          <div className="flex justify-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
            <div className="w-full" style={{ maxWidth: "1600px" }}>
              {/* White Card Container */}
              <div className="bg-white shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column - Content */}
                  <div className="space-y-4">
                    {/* Title */}
                    <h2
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Safety First
                    </h2>

                    {/* Main Content */}
                    <div className="space-y-4">
                      <p
                        className="text-base sm:text-lg md:text-xl text-gray-700 leading-loose text-left"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Safety is more than a standard; it's the culture that
                        defines S.A.S Transition. It shapes how we think, how we
                        lead, and how we work together. Every person on our team
                        plays a part in keeping our sites and clients safe,
                        taking ownership of their actions and looking out for
                        the people around them. Our approach brings structure
                        and accountability to everything we do, but it's our
                        people who bring it to life. Through teamwork, training
                        and communication, safety becomes second nature, not a
                        rule to follow, but a mindset shared by everyone.
                      </p>

                      <p
                        className="text-base sm:text-lg md:text-xl text-gray-700 leading-loose text-left"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        SASTpro provides the control, and SASTacademy builds the
                        competence, but our culture is what makes it real.
                        Safety first means respect, responsibility and unity,
                        and that's what drives every decision on every site,
                        every day.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative w-full aspect-video lg:aspect-auto lg:h-[550px] max-w-2xl mx-auto">
                    <Image
                      src="/who-we-are/WhoWeAreEnergyHazardRecognition2.jpg"
                      alt="Energy Hazard Recognition"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section
          id="team"
          className="pb-16 sm:pb-20 md:pb-24 lg:pb-32 -mx-8 sm:-mx-12 md:-mx-16 lg:-mx-24 xl:-mx-32"
        >
          <div className="w-full">
            {/* Black Card Container - Full Width */}
            <div
              className="shadow-xl p-8 sm:p-10 md:p-12 lg:p-16"
              style={{ backgroundColor: "#222323" }}
            >
              <div className="text-center space-y-12">
                {/* Title with Squares */}
                <div className="flex items-center justify-center gap-6 lg:gap-8">
                  {/* Left Squares */}
                  <div className="hidden lg:flex flex-row gap-2 items-center">
                    <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                    <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                    <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                  </div>

                  {/* Title */}
                  <h2
                    className="font-bold tracking-[0.15em] text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                    style={{
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    OUR TEAM
                  </h2>

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
                <div className="max-w-4xl mx-auto text-center mb-12">
                  <p
                    className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl"
                    style={{
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    Our strength lies in the expertise and collaboration of our
                    people. Every member plays a vital role in delivering
                    bespoke, compliant, and reliable solutions.
                  </p>
                </div>

                {/* Team Members - First Row (4 members) */}
                <div className="flex justify-center gap-x-25 mb-8 lg:mb-12">
                  <div className="text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                      <Image
                        src="/who-we-are/Allyn.png"
                        alt="Allyn Coady"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Allyn <span className="text-[#D0B970]">Coady</span>
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Company Director
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                      <Image
                        src="/who-we-are/Simon.png"
                        alt="Simon Frew"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Simon <span className="text-[#D0B970]">Frew</span>
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Chief Technical Authority
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                      <Image
                        src="/who-we-are/Bryson.png"
                        alt="Stephen Bryson"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Stephen <span className="text-[#D0B970]">Bryson</span>
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Operations Manager
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                      <Image
                        src="/who-we-are/Brian.png"
                        alt="Brian Wishart"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Brian <span className="text-[#D0B970]">Wishart</span>
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      HSEQ Manager
                    </p>
                  </div>
                </div>

                {/* Team Members - Second Row (4 members) */}
                <div className="flex justify-center gap-x-25 mb-8 lg:mb-12">
                  <div className="text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                      <Image
                        src="/who-we-are/Matthew.png"
                        alt="Matthew Sellars"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Matthew <span className="text-[#D0B970]">Sellars</span>
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      HR / Business Manager
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                      <Image
                        src="/who-we-are/Laurence.png"
                        alt="Laurence Woods"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Laurence <span className="text-[#D0B970]">Woods</span>
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Media Development Manager
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                      <Image
                        src="/who-we-are/Lizzo.png"
                        alt="Marilis Kulamaa"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Marilis <span className="text-[#D0B970]">Kulamaa</span>
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      People & Culture Manager
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                      <Image
                        src="/who-we-are/Lewis.png"
                        alt="Lewis Sellars"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Lewis <span className="text-[#D0B970]">Sellars</span>
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Marketing Manager
                    </p>
                  </div>
                </div>

                {/* Third Row - Two members centered */}
                <div className="flex justify-center gap-x-25">
                  <div className="text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                      <Image
                        src="/who-we-are/Felix.png"
                        alt="Andries Felix"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Andries <span className="text-[#D0B970]">Felix</span>
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Lead Software Engineer
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                      <Image
                        src="/who-we-are/Alex.png"
                        alt="Alex Turcu"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Alex <span className="text-[#D0B970]">Turcu</span>
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Systems & Software Manager
                    </p>
                  </div>
                </div>

                {/* Join Our Team Button */}
                <div className="flex justify-center mt-12">
                  <Link
                    href="/careers"
                    className="px-8 py-4 bg-transparent border-2 border-[#D0B970] text-white font-bold text-lg hover:bg-[#D0B970] hover:text-black transition-all duration-300 rounded-full inline-block"
                  >
                    <span style={{ fontFamily: "var(--font-montserrat)" }}>
                      Join our team
                    </span>
                  </Link>
                </div>
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
