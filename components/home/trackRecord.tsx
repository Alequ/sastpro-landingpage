"use client";

import { useState } from "react";
import Image from "next/image";

const processSteps = [
  {
    number: "28,500+",
    iconSrc: "/home_2/Icon1.svg",
    title: "Training Courses",
    description: "Number of training courses completed through SASTAcademy.",
    details: [
      "500+ Authorised Person Training",
      "8K+ H.E.A.T Training",
      "20K+ CP Training",
    ],
  },
  {
    number: "330+",
    iconSrc: "/home_2/Icon2.svg",
    title: "Expert Team Members",
    description: "Certified engineers and professionals at S.A.S Transition.",
    details: [
      "150+ APs/APs (Senior & Authorised Persons)",
      "100+ Commissioning Engineers & Managers",
      "80+ Project, Technical & Safety Leaders",
    ],
  },
  {
    number: "50,000+",
    iconSrc: "/home_2/Icon3.svg",
    title: "Safety Documents",
    description:
      "Number of controlled safety documents issued through our SASTpro system.",
    details: [
      "30K+ Permits to Work (PTWs)",
      "18K+ Isolation Certificates & LOTOs",
      "2K+ HV Switching Schedules & Log Books",
    ],
  },
  {
    number: "15,000+",
    iconSrc: "/home_2/Icon4.svg",
    title: "Safety Reviews",
    description: "Continuous monitoring and improvement across all projects.",
    details: [
      "8K+ Safety Observations & Reports Logged",
      "5K+ RAMS Reviewed (Risk Assessments & Method Statements)",
      "2K+ Internal & External Audits Completed",
    ],
  },
];

export default function HowWeWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home_2/Background1.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-8 md:mb-12 lg:mb-16">
          <div className="space-y-3 md:space-y-4">
            {/* Title with Squares */}
            <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
              {/* Left Squares */}
              <div className="hidden lg:flex flex-row gap-2 items-center">
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
              </div>

              {/* Title */}
              <h1
                className="font-bold tracking-[0.1em] md:tracking-[0.15em] text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                style={{
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                OUR TRACK RECORD
              </h1>

              {/* Right Squares */}
              <div className="hidden lg:flex flex-row gap-2 items-center">
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
              </div>
            </div>

            {/* Mobile Squares - Shown on smaller screens */}
            <div className="flex lg:hidden justify-center gap-2">
              <div className="w-4 h-4 border-2 border-[#D0B970]"></div>
              <div className="w-4 h-4 border-2 border-[#D0B970]"></div>
              <div className="w-4 h-4 border-2 border-[#D0B970]"></div>
            </div>
          </div>

          <p
            className="text-white text-sm sm:text-base md:text-lg leading-relaxed mt-4 md:mt-6 px-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Numbers that speak for themselves. Our proven excellence across
            decades of electrical engineering and safety services delivery.
          </p>
        </div>

        {/* Progress Bar - hidden on mobile, shown on tablet+ */}
        <div className="hidden md:block relative mb-8 md:mb-12 lg:mb-16">
          {/* Full-width background line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-screen h-0.5 md:h-1 top-3 md:top-4">
            <div className="w-full h-full bg-gray-500 rounded-full" />
          </div>

          {/* Progress Circles - centered on cards, one line on tablet, matches card grid on desktop */}
          <div className="relative">
            {/* Tablet: 1 line with equal spacing */}
            <div className="md:flex md:justify-between lg:hidden">
              {processSteps.map((step, index) => (
                <div key={step.number} className="flex justify-center">
                  <div
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full border transition-all duration-300 z-10 ${
                      hoveredIndex === index
                        ? "bg-[#D7BE6A] border-[#D7BE6A] scale-125"
                        : "bg-black border-[#D7BE6A]"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Desktop: Grid aligned with cards */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <div key={step.number} className="flex justify-center">
                  <div
                    className={`w-8 h-8 rounded-full border transition-all duration-300 z-10 ${
                      hoveredIndex === index
                        ? "bg-[#D7BE6A] border-[#D7BE6A] scale-125"
                        : "bg-black border-[#D7BE6A]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative min-h-0 md:min-h-[32rem] mt-8 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-4 lg:-mt-4 text-center">
          <div className="space-y-3 md:space-y-4">
            {/* Title with Squares */}
            <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
              {/* Left Squares */}
              <div className="hidden lg:flex flex-row gap-2 items-center">
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
              </div>

              {/* Title */}
              <h2
                className="font-bold tracking-[0.08em] sm:tracking-[0.1em] md:tracking-[0.12em] lg:tracking-[0.15em] text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-2"
                style={{
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                READY TO GET STARTED
              </h2>

              {/* Right Squares */}
              <div className="hidden lg:flex flex-row gap-2 items-center">
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#D0B970]"></div>
              </div>
            </div>

            {/* Mobile Squares - Shown on smaller screens */}
            <div className="flex lg:hidden justify-center gap-2">
              <div className="w-4 h-4 border-2 border-[#D0B970]"></div>
              <div className="w-4 h-4 border-2 border-[#D0B970]"></div>
              <div className="w-4 h-4 border-2 border-[#D0B970]"></div>
            </div>
          </div>

          <p
            className="text-white text-sm sm:text-base md:text-lg mb-6 md:mb-8 mt-4 md:mt-6 px-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Join hundreds of companies that trust us for safe, compliant, and
            reliable electrical solutions. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <button
              className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-[#D0B970] text-white font-bold text-base md:text-lg hover:bg-[#D0B970] hover:text-black transition-all duration-300 rounded-full"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Career opportunities
            </button>
            <button
              className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-[#D0B970] text-white font-bold text-base md:text-lg hover:bg-[#D0B970] hover:text-black transition-all duration-300 rounded-full"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Business opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  step: (typeof processSteps)[0];
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

function ProcessStep({
  step,
  index,
  hoveredIndex,
  setHoveredIndex,
}: ProcessStepProps) {
  const { number, iconSrc, title, description, details } = step;
  const isHovered = hoveredIndex === index;

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative cursor-pointer"
    >
      {/* Card */}
      <div
        className={`relative border-2 rounded-lg transition-all duration-700 ease-out overflow-hidden ${
          isHovered
            ? "bg-white/10 border-[#D7BE6A] h-auto md:h-[28rem] p-6 md:p-8 scale-[1.05] shadow-2xl"
            : "bg-transparent border-gray-500 h-auto md:h-[20rem] p-6 md:p-8 scale-100"
        }`}
      >
        {/* Inner top border - appears on hover */}
        <div
          className={`absolute top-0 left-0 right-0 bg-[#D7BE6A] rounded-t-lg transition-all duration-500 ${
            isHovered ? "h-[10px] md:h-[12px] opacity-100" : "h-0 opacity-0"
          }`}
        />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          {/* Icon */}
          <div className="mb-3 md:mb-4">
            <div className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14">
              <Image
                src={iconSrc}
                alt={title}
                width={56}
                height={56}
                className="object-contain filter brightness-0 invert"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(77%) sepia(58%) saturate(348%) hue-rotate(8deg) brightness(91%) contrast(85%)",
                }}
              />
            </div>
          </div>

          {/* Number */}
          <div className="mb-3 md:mb-4">
            <h3
              className="font-bold text-white tracking-tight text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {number}
            </h3>
          </div>

          {/* Title */}
          <h4
            className="font-semibold text-white leading-tight text-lg md:text-xl mb-2 md:mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {title}
          </h4>

          {/* Description */}
          <p
            className="text-[#D7BE6A] leading-relaxed text-xs md:text-sm mb-2 md:mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {description}
          </p>

          {/* Details - shown on hover */}
          {isHovered && details && Array.isArray(details) && (
            <div className="mt-1 md:mt-2 w-full flex-1">
              <ul
                className="text-left text-[10px] md:text-xs text-white space-y-1 md:space-y-1.5"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {details.map((detail, idx) => {
                  // Bold numbers in the text (e.g., 30K+, 500+, etc.)
                  const formattedDetail = detail.replace(
                    /(\d+[KkMm]?\+?)/g,
                    "<strong>$1</strong>"
                  );
                  return (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#D7BE6A] mr-2 md:mr-3">•</span>
                      <span
                        className="italic"
                        dangerouslySetInnerHTML={{ __html: formattedDetail }}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
