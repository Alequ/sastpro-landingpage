"use client";

import { ArrowRight, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Link from "next/link";

const industries = [
  {
    name: "Oil & Gas",
    subtitle: "",
    description: "Safe, compliant, and efficient solutions for onshore and offshore facilities. Our teams deliver electrical, mechanical, and digital services that keep critical energy assets operating at peak performance.",
    image: "/home_2/OilAndGas.webp",
    applications: [
      "Platform systems",
      "Hazardous area compliance",
      "COHE/LOTO",
      "Commissioning support"
    ]
  },
  {
    name: "Nuclear",
    subtitle: "",
    description: "Trusted engineering support for nuclear generation and decommissioning projects. We provide safe systems of work, authorised personnel, and digital asset control to ensure safety and compliance at every level.",
    image: "/home_2/Nuclearav.webp",
    applications: [
      "Authorised personnel",
      "SSOW setup",
      "COHE/LOTO",
      "Testing & maintenance"
    ]
  },
  {
    name: "Renewables",
    subtitle: "",
    description: "Delivering electrical and mechanical expertise for wind, solar, and battery energy storage systems (BESS), including EV infrastructure. We help clients design, connect, and maintain assets that power a cleaner future.",
    image: "/home_2/DataCentresav.webp",
    applications: [
      "Grid connection",
      "HV substations",
      "BESS integration",
      "Renewable maintenance"
    ]
  },
  {
    name: "Data Center",
    subtitle: "",
    description: "Turnkey electrical and mechanical solutions for hyperscale and enterprise data centres. From design and installation to commissioning and maintenance, we ensure uptime, efficiency, and safety at every stage.",
    image: "/home_2/GridAndInfastructure.webp",
    applications: [
      "HV installations",
      "Cooling & containment",
      "IST & maintenance",
      "SASTpro integration"
    ]
  }
];

export default function IndustriesServed() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Get card width dynamically for responsive scrolling
      const cardWidth = scrollContainerRef.current.querySelector('div')?.offsetWidth || 280;
      const scrollAmount = cardWidth * 1; // Scroll by 1 card at a time
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={targetRef} className="relative overflow-hidden py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Carousel Container with Navigation */}
        <div className="relative">
          {/* Left Navigation Arrow - positioned outside scroll area */}
          {/* <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37]/90 hover:bg-[#D4AF37] text-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button> */}

          {/* Right Navigation Arrow - positioned outside scroll area */}
          {/* <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37]/90 hover:bg-[#D4AF37] text-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button> */}

          {/* Industries Carousel - responsive card display */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.name}
                industry={industry}
                index={index}
                isVisible={isIntersecting}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface IndustryCardProps {
  industry: typeof industries[0];
  index: number;
  isVisible: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

function IndustryCard({ industry, index, isVisible, hoveredIndex, setHoveredIndex }: IndustryCardProps) {
  const { name, subtitle, description, image, applications } = industry;
  const isHovered = hoveredIndex === index;

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl flex-shrink-0 snap-start
        h-[550px]
        w-full sm:w-1/2 md:w-1/3 lg:w-1/4
        ${isVisible ? `animate-in fade-in slide-in-from-bottom-6 duration-700` : 'opacity-0'
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gold accent line on top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        {/* Header with arrow */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#E5C158] transition-colors duration-300 drop-shadow-lg">
              {name}
            </h3>
            <p className="text-sm font-medium text-[#D4AF37] drop-shadow-lg">{subtitle}</p>
          </div>

          {/* Arrow appears on hover */}
          {/* <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 backdrop-blur-sm transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}>
            <ArrowRight className="h-5 w-5 text-[#D4AF37]" />
          </div> */}
        </div>

        {/* Description */}
        <p className="text-sm text-white mb-4 transition-all duration-300 drop-shadow-lg leading-relaxed">
          {description}
        </p>

        {/* Applications list */}
        <div className="space-y-3">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 transition-all duration-300`}
              style={{
                transitionDelay: isHovered ? `${idx * 50}ms` : '0ms'
              }}
            >
              <div className={`w-2 h-2 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0 shadow-lg shadow-[#D4AF37]/50 ${
                isHovered ? 'scale-125' : 'scale-100'
              } transition-transform duration-300`} />
              <span className="text-sm text-white/90 leading-tight font-medium drop-shadow-lg">{app}</span>
            </div>
          ))}
        </div>

        {/* Contact us button */}
        <Link href="/contact">
          <button className="mt-6 w-full rounded-full border-2 border-[#D4AF37] bg-transparent hover:bg-[#D4AF37] text-white hover:text-black font-semibold py-3 px-6 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/30">
            <span>Contact us</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </Link>

        {/* Bottom gold accent line */}
        <div className="mt-6 h-0.5 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform origin-center scale-x-0 group-hover:scale-x-100" />
      </div>
    </div>
  );
}
