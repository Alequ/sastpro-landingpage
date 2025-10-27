"use client";

import { ArrowRight, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const industries = [
  {
    name: "Oil & Gas",
    subtitle: "Offshore & Onshore",
    description: "Specialized electrical solutions for challenging offshore and onshore energy operations.",
    image: "/oil-gas.jpg",
    applications: [
      "Platform installations",
      "Refinery electrical systems",
      "Hazardous area compliance"
    ]
  },
  {
    name: "Industrial Facilities",
    subtitle: "Manufacturing & Processing",
    description: "Comprehensive electrical engineering for manufacturing and heavy industrial operations.",
    image: "/industrial.jpg", // Placeholder - replace with your image
    applications: [
      "Manufacturing plants",
      "Processing facilities",
      "Heavy industry solutions"
    ]
  },
  {
    name: "Data Centers",
    subtitle: "Hyper-scale & Enterprise",
    description: "Full-service electrical solutions for modern commercial and residential developments.",
    image: "/electrical/industries/property.jpg", // Placeholder - replace with your image
    applications: [
      "Data Centers",
      "Energy complexes",
      "Mixed-use developments"
    ]
  },
  {
    name: "Infrastructure & Utilities",
    subtitle: "Power & Transportation",
    description: "Critical infrastructure electrical services for power generation and transportation systems.",
    image: "/electrical/industries/infrastructure.jpg", // Placeholder - replace with your image
    applications: [
      "Power generation facilities",
      "Water treatment plants",
      "Transportation hubs"
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
      // Get card width dynamically for responsive scrolling (no gap between cards)
      const cardWidth = scrollContainerRef.current.querySelector('div')?.offsetWidth || 304;
      const scrollAmount = cardWidth;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={targetRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-secondary/20 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 px-4 py-1.5 text-sm font-medium text-[#D4AF37] dark:text-[#E5C158] mb-6 border border-[#D4AF37]/20">
            <Target className="h-4 w-4" />
            <span>Industries We Serve</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C9A961] bg-clip-text text-transparent">
              Leading Industries
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
            Delivering specialized electrical and safety solutions across diverse sectors with proven expertise and reliability.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-16">
          {/* Left Navigation Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37]/90 hover:bg-[#D4AF37] text-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37]/90 hover:bg-[#D4AF37] text-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Industries Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth px-8 py-4"
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
      className={`group relative rounded-2xl border border-border/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#D4AF37]/50 flex-shrink-0
        h-[550px] sm:h-[600px] lg:h-[650px]
        ${isVisible ? `animate-in fade-in slide-in-from-bottom-6 duration-700` : 'opacity-0'
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        width: 'calc((100vw - 64px) / 4)', // 4 cards visible, accounting for px-8 padding (32px each side)
        maxWidth: '304px', // (1280px max-w-7xl - 64px padding) / 4
        minWidth: '280px',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark overlay - lighter on hover to show more of the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/70 transition-all duration-500" />
      </div>

      {/* Gold accent line on top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {/* Header with arrow */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#E5C158] transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm font-medium text-[#D4AF37]">{subtitle}</p>
          </div>

          {/* Arrow appears on hover */}
          <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 backdrop-blur-sm transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}>
            <ArrowRight className="h-5 w-5 text-[#D4AF37]" />
          </div>
        </div>

        {/* Description - shows on hover */}
        <p className={`text-sm text-gray-200 mb-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
        } overflow-hidden`}>
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
              <span className="text-sm text-white/90 leading-tight font-medium">{app}</span>
            </div>
          ))}
        </div>

        {/* Contact us button */}
        <button className="mt-6 w-full bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/30">
          <span>Contact us</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>

        {/* Bottom gold accent line */}
        <div className="mt-6 h-0.5 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform origin-center scale-x-0 group-hover:scale-x-100" />
      </div>
    </div>
  );
}
