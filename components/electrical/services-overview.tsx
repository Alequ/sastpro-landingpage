"use client";

import { Zap, Wrench, Users, FileText, ShieldCheck, Lock, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    icon: Zap,
    title: "Electrical Engineering",
    description: "Complete electrical design, installation, and commissioning services for industrial and commercial projects.",
    color: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/20",
    points: [
      "Installation Verification,",
      "Quality Assurance",
      "Energisation Support",
      "Technical Consultancy"
    ]
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    description: "Comprehensive maintenance programs ensuring optimal performance and reliability of your electrical systems.",
    color: "from-teal-500 to-emerald-500",
    bgGlow: "bg-teal-500/20",
    points: [
      "Preventive Programs",
      "24/7 Emergency",
      "Lifecycle Management",
      "Performance Optimization"
    ]
  },
  {
    icon: Users,
    title: "Authorised Energy Engineers",
    description: "Certified professionals with extensive experience in high and low voltage operations across all industries.",
    color: "from-indigo-500 to-purple-500",
    bgGlow: "bg-indigo-500/20",
    points: [
      "Certified Personnel",
      "HV/LV Operations",
      "Expert On-Demand",
      "Offshore Qualified"
    ]
  },
  {
    icon: FileText,
    title: "Permit to Work Services",
    description: "Comprehensive PTW coordination ensuring safe system of work implementation across your facilities.",
    color: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/20",
    points: [
      "Safe Work Systems",
      "PTW Coordination",
      "Risk Assessments",
      "Compliance Docs"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Safety Rules & Procedures",
    description: "Development and implementation of site-specific safety protocols with comprehensive training programs.",
    color: "from-green-500 to-emerald-500",
    bgGlow: "bg-green-500/20",
    points: [
      "Safety Protocols",
      "Hazard Control",
      "Training & Inductions",
      "Emergency Planning"
    ]
  },
  {
    icon: Lock,
    title: "COHE Procedures",
    description: "Control of Hazardous Energy procedures with robust lockout/tagout systems for maximum safety.",
    color: "from-red-500 to-orange-500",
    bgGlow: "bg-red-500/20",
    points: [
      "Energy Control",
      "Lockout/Tagout",
      "Isolation Verification",
      "Procedure Development"
    ]
  }
];

export default function ServicesOverview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section ref={targetRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 border border-primary/20">
            <Sparkles className="h-4 w-4" />
            <span>Our Services</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Electrical & Safety Solutions
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
            We provide end-to-end electrical engineering and safety services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={isIntersecting}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Bottom hint */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            All services delivered to the highest industry standards
          </p>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  isVisible: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

function ServiceCard({ service, index, isVisible, hoveredIndex, setHoveredIndex }: ServiceCardProps) {
  const { icon: Icon, title, description, color, bgGlow, points } = service;

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`group relative rounded-2xl border border-border/40 bg-gradient-to-br from-card/95 to-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 ${
        isVisible ? `animate-in fade-in slide-in-from-bottom-6 duration-700` : 'opacity-0'
      }`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Multi-layer glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl ${bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10`} />
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />

      {/* Content */}
      <div className="relative">
        {/* Icon with gradient background */}
        <div className="relative mb-5">
          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            <Icon className="h-8 w-8 text-white drop-shadow-lg" strokeWidth={2.5} />
          </div>

          {/* Pulsing ring on hover */}
          {hoveredIndex === index && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-transparent animate-ping" />
          )}
        </div>

        <h3 className={`text-xl font-bold transition-all duration-300 ${
          hoveredIndex === index
            ? `bg-gradient-to-r ${color} bg-clip-text text-transparent`
            : 'text-card-foreground'
        }`}>
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90 group-hover:text-muted-foreground transition-colors">
          {description}
        </p>

        {/* Service points - always visible with subtle hover animation */}
        <div className={`mt-5 flex flex-wrap gap-2 transition-all duration-500 ${
          hoveredIndex === index ? 'gap-2.5' : 'gap-2'
        }`}>
          {points.map((point, pointIndex) => (
            <span
              key={point}
              className={`inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary/15 to-primary/5 px-3 py-1.5 text-xs font-medium text-foreground/80 border border-primary/30 backdrop-blur-sm transition-all duration-300 ${
                hoveredIndex === index
                  ? 'border-primary/50 bg-gradient-to-r from-primary/20 to-primary/10 shadow-md scale-105'
                  : 'hover:border-primary/40 hover:scale-105'
              }`}
              style={{
                transitionDelay: hoveredIndex === index ? `${pointIndex * 50}ms` : '0ms'
              }}
            >
              <CheckCircle2 className={`h-3 w-3 transition-all duration-300 ${
                hoveredIndex === index ? 'text-primary' : 'text-primary/60'
              }`} />
              {point}
            </span>
          ))}
        </div>

        {/* Bottom accent line - animated width */}
        <div className="mt-6 h-0.5 w-full bg-gradient-to-r from-transparent via-border to-transparent">
          <div className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-500 transform origin-left ${
            hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
          }`} />
        </div>
      </div>
    </div>
  );
}
