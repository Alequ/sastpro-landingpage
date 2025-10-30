"use client";

import { User, FileEdit, Hammer, CheckCircle2, Workflow } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const processSteps = [
  {
    number: "150+",
    icon: User,
    title: "Expert team members",
    description: "Number of certified engineers working for S.A.S Transition.",
    color: "from-[#B8941E] to-[#D4AF37]"
  },
  {
    number: "28,500+",
    icon: CheckCircle2,
    title: "Permits",
    description: "Number of permits issues trough our SASTpro software.",
    color: "from-[#D4AF37] to-[#E5C158]"
  },
  {
    number: "100%",
    icon: Workflow,
    title: "Safety Score",
    description: "Number of projects completed without safety incidents.",
    color: "from-[#E5C158] to-[#F0D977]"
  },
  {
    number: "28,500",
    icon: CheckCircle2,
    title: "Training courses",
    description: "Number of training courses completed trough SASTacademy",
    color: "from-[#F0D977] to-[#F5E5A0]"
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
          

          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#B8941E] via-[#D4AF37] to-[#E5C158] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Track Record
            </span>
          
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto">
           Numbers that speak for themselves. Our proven excellence across decades of electriocal engineering
and safety services delivery
          </p>
        </div>

        {/* Progress Bar at Top - Desktop only */}
        <div className="hidden lg:block relative mt-20 mb-16 mx-auto" style={{ width: '75%' }}>
          <div className="relative h-1">
            {/* Background line */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B8941E]/20 via-[#D4AF37]/20 via-[#E5C158]/20 to-[#F0D977]/20 rounded-full" />
            {/* Animated progress line */}
            <div className={`absolute inset-0 bg-gradient-to-r from-[#B8941E] via-[#D4AF37] via-[#E5C158] to-[#F0D977] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-1500 ease-out ${
              isIntersecting ? 'scale-x-100' : 'scale-x-0'
            } origin-left`} />
          </div>

          {/* Progress Circles */}
          <div className="absolute inset-0 flex justify-between items-center">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`w-4 h-4 rounded-full border-2 border-[#0A0A0A] bg-gradient-to-br ${step.color} shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-700 ${
                  isIntersecting ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{
                  transitionDelay: `${(index + 1) * 300}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
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
          <button
            className="px-8 py-4 bg-transparent border-2 border-[#D0B970] text-white font-bold text-lg hover:bg-[#D0B970] hover:text-black transition-all duration-300 rounded-full"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Discuss Your Project
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
  const { number, icon: Icon, title, description, color } = step;
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
      {/* Card */}
      <div className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 h-full py-12 px-8 ${
        isHovered
          ? 'bg-[#0A0A0A] border-gray-400 shadow-[0_8px_30px_rgba(212,175,55,0.15)] -translate-y-1'
          : 'bg-[#0A0A0A] border-gray-600 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
      }`}>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-8">
            <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${color}`}>
              <Icon className="h-10 w-10 text-black" strokeWidth={2.5} />
            </div>
          </div>

          {/* Number */}
          <div className="mb-4">
            <h3 className="text-5xl font-bold text-white tracking-tight">
              {number}
            </h3>
          </div>

          {/* Title */}
          <h4 className="text-xl font-semibold text-white mb-6 leading-tight">
            {title}
          </h4>

          {/* Description */}
          <p className="text-sm text-[#D4AF37] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
