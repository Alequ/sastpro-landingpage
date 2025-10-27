"use client";

import { Search, FileEdit, Hammer, CheckCircle2, ArrowRight, Workflow } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const processSteps = [
  {
    number: 1,
    icon: Search,
    title: "Consultation & Assessment",
    summary: "Understanding your needs and evaluating site requirements.",
    color: "from-[#B8941E] to-[#D4AF37]",
    bgGlow: "bg-[#D4AF37]/20",
    description: [
      "Initial site survey and analysis",
      "Requirements gathering",
      "Risk assessment",
      "Feasibility study"
    ]
  },
  {
    number: 2,
    icon: FileEdit,
    title: "Planning & Design",
    summary: "Developing comprehensive technical specifications and project plans.",
    color: "from-[#D4AF37] to-[#E5C158]",
    bgGlow: "bg-[#D4AF37]/20",
    description: [
      "Technical specifications",
      "Compliance review",
      "Resource allocation",
      "Project timeline"
    ]
  },
  {
    number: 3,
    icon: Hammer,
    title: "Execution & Implementation",
    summary: "Professional installation with rigorous quality and safety standards.",
    color: "from-[#E5C158] to-[#F0D977]",
    bgGlow: "bg-[#E5C158]/20",
    description: [
      "Professional installation",
      "Quality assurance checks",
      "Safety protocols",
      "Progress reporting"
    ]
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: "Testing & Handover",
    summary: "Thorough testing, documentation, and seamless project completion.",
    color: "from-[#F0D977] to-[#F5E5A0]",
    bgGlow: "bg-[#F0D977]/20",
    description: [
      "Commissioning tests",
      "Documentation package",
      "Training delivery",
      "Ongoing support"
    ]
  }
];

export default function HowWeWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section ref={targetRef} className="relative py-24 overflow-hidden bg-[#0A0A0A]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_50%)]" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-[#D4AF37] mb-8 border border-[#D4AF37]/30 shadow-lg shadow-[#D4AF37]/5">
            <Workflow className="h-4 w-4" />
            <span>Our Process</span>
          </div>

          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            A{" "}
            <span className="bg-gradient-to-r from-[#B8941E] via-[#D4AF37] to-[#E5C158] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Proven Process
            </span>
            {" "}for Success
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto">
            A systematic approach ensuring quality, safety, and compliance at every stage of your project.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mt-20">
          {/* Connecting Line - Desktop only */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-1">
            <div className="relative h-full">
              {/* Background line */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#B8941E]/20 via-[#D4AF37]/20 via-[#E5C158]/20 to-[#F0D977]/20 rounded-full" />
              {/* Animated progress line */}
              <div className={`absolute inset-0 bg-gradient-to-r from-[#B8941E] via-[#D4AF37] via-[#E5C158] to-[#F0D977] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-1500 ease-out ${
                isIntersecting ? 'scale-x-100' : 'scale-x-0'
              } origin-left`} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                isVisible={isIntersecting}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider font-semibold">
            Ready to get started?
          </p>
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-black font-bold shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E5C158] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Discuss Your Project</span>
            <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  step: typeof processSteps[0];
  index: number;
  isVisible: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

function ProcessStep({ step, index, isVisible, hoveredIndex, setHoveredIndex }: ProcessStepProps) {
  const { number, icon: Icon, title, summary, color, bgGlow, description } = step;
  const isHovered = hoveredIndex === index;

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`relative ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-700`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Step Number Badge with Pulse */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
        <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-black font-bold text-2xl shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 ${
          isHovered ? 'scale-110 shadow-[0_0_50px_rgba(212,175,55,0.6)]' : ''
        }`}>
          <span className="relative z-10">{number}</span>
          {/* Pulse rings on hover */}
          {isHovered && (
            <>
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} animate-ping opacity-40`} />
              <div className={`absolute -inset-2 rounded-full bg-gradient-to-br ${color} opacity-20 blur-md`} />
            </>
          )}
        </div>
      </div>

      {/* Card */}
      <div className={`group relative rounded-2xl border overflow-hidden transition-all duration-500 h-full pt-14 pb-8 px-6 ${
        isHovered
          ? 'bg-[#1a1a1a]/90 border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(212,175,55,0.2)] -translate-y-2'
          : 'bg-[#141414]/60 border-[#D4AF37]/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
      }`}>
        {/* Glass morphism backdrop */}
        <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-[#1a1a1a]/80 to-[#0a0a0a]/80" />

        {/* Animated gradient border effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${color} blur-xl`}
          style={{ transform: 'translateZ(0)', filter: 'blur(40px)', opacity: isHovered ? 0.1 : 0 }}
        />

        {/* Glow effect on hover */}
        <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 ${
              isHovered ? 'scale-110 rotate-6 shadow-[0_0_40px_rgba(212,175,55,0.5)]' : ''
            }`}>
              <Icon className="h-8 w-8 text-black" strokeWidth={2.5} />
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-xl font-bold text-center mb-3 transition-all duration-300 ${
            isHovered
              ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C158] bg-clip-text text-transparent scale-105'
              : 'text-white'
          }`}>
            {title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-center text-gray-400 mb-6 min-h-[40px] leading-relaxed">
            {summary}
          </p>

          {/* Description list - expands on hover */}
          <div className={`space-y-2.5 transition-all duration-500 overflow-hidden ${
            isHovered ? 'max-h-56 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-4 border-t border-[#D4AF37]/20">
              {description.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-sm text-gray-300 mb-3 transition-all duration-300"
                  style={{
                    transitionDelay: isHovered ? `${idx * 75}ms` : '0ms',
                    transform: isHovered ? 'translateX(0)' : 'translateX(-10px)'
                  }}
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color} mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300 ${
                    isHovered ? 'scale-125' : 'scale-100'
                  }`} />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step indicator at bottom */}
          <div className={`flex justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'mt-6' : 'mt-4'
          }`}>
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  n === number
                    ? `w-10 bg-gradient-to-r ${color} shadow-[0_0_10px_rgba(212,175,55,0.5)]`
                    : 'w-1.5 bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
