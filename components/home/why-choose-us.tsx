"use client";

import { Award, Clock, ShieldCheck, FileCheck, Anchor, Target, Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const values = [
  {
    icon: Award,
    title: "Certified Expertise",
    description: "Our team holds all necessary industry certifications and undergoes continuous professional development to stay ahead of regulatory requirements.",
    badge: "50+ Certifications",
    color: "from-amber-500 to-yellow-500",
    bgGlow: "bg-amber-500/20",
    iconBg: "bg-amber-500/10"
  },
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Round-the-clock emergency support with rapid deployment capabilities across the region. Critical systems failures resolved within hours.",
    badge: "< 2hr Response",
    color: "from-red-500 to-orange-500",
    bgGlow: "bg-red-500/20",
    iconBg: "bg-red-500/10"
  },
  {
    icon: ShieldCheck,
    title: "Safety First Culture",
    description: "Zero-harm commitment backed by comprehensive safety protocols and an industry-leading track record of incident-free operations.",
    badge: "99.8% Safety Score",
    color: "from-green-500 to-emerald-500",
    bgGlow: "bg-green-500/20",
    iconBg: "bg-green-500/10"
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Full compliance with all relevant standards and regulations. Audit-ready documentation and proactive updates on regulatory changes.",
    badge: "100% Compliant",
    color: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/20",
    iconBg: "bg-blue-500/10"
  },
  {
    icon: Anchor,
    title: "Offshore Capability",
    description: "Marine-certified personnel with extensive offshore experience. Specialized logistics and harsh environment expertise.",
    badge: "Offshore Certified",
    color: "from-indigo-500 to-purple-500",
    bgGlow: "bg-indigo-500/20",
    iconBg: "bg-indigo-500/10"
  },
  {
    icon: Target,
    title: "Quality Assurance",
    description: "ISO certified processes with rigorous testing protocols. All work backed by comprehensive warranties and quality guarantees.",
    badge: "ISO 9001:2015",
    color: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/20",
    iconBg: "bg-purple-500/10"
  }
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section ref={targetRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-secondary/20 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 mb-6 border border-blue-500/20">
            <TrendingUp className="h-4 w-4" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Excellence in{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Every Connection
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
            What sets us apart in electrical engineering and safety services - delivering beyond expectations.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              value={value}
              index={index}
              isVisible={isIntersecting}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Bottom stats hint */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Trusted by industry leaders for over 25 years</span>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ValueCardProps {
  value: typeof values[0];
  index: number;
  isVisible: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

function ValueCard({ value, index, isVisible, hoveredIndex, setHoveredIndex }: ValueCardProps) {
  const { icon: Icon, title, description, badge, color, bgGlow } = value;
  const isHovered = hoveredIndex === index;

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-primary/30 ${
        isVisible ? `animate-in fade-in slide-in-from-bottom-4 duration-700` : 'opacity-0'
      }`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl ${bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10`} />

      {/* Content */}
      <div className="relative space-y-4">
        {/* Icon and Badge Row */}
        <div className="flex items-start justify-between gap-3">
          {/* Icon with gradient background */}
          <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            <Icon className="h-7 w-7 text-white" strokeWidth={2.5} />
          </div>

          {/* Badge - animates on hover */}
          <div className={`rounded-full px-3 py-1.5 text-xs font-semibold bg-gradient-to-r ${color} text-white shadow-md transition-all duration-300 ${
            isHovered ? 'scale-105 shadow-lg' : 'scale-100'
          }`}>
            {badge}
          </div>
        </div>

        {/* Title with gradient on hover */}
        <h3 className="text-xl font-bold text-card-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Bottom accent line with gradient */}
        <div className={`h-1 rounded-full bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100`} />

        {/* Decorative corner element on hover */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500`} />
      </div>
    </div>
  );
}
