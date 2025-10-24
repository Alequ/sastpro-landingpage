"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Clock, Users, DollarSign, CheckCircle, Briefcase, Building2 } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Offshore Platform Upgrade",
    client: "Major Oil & Gas Operator",
    industry: "Oil & Gas",
    scope: "Complete electrical system overhaul including switchgear replacement, control system upgrade, and emergency power systems.",
    results: [
      "99.9% uptime achieved",
      "Zero safety incidents",
      "Completed 2 weeks ahead of schedule"
    ],
    metrics: { duration: "6 months", team: "15 engineers", value: "£2.5M" },
    color: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/20"
  },
  {
    id: 2,
    title: "Manufacturing Facility Expansion",
    client: "Industrial Manufacturing Co.",
    industry: "Industrial",
    scope: "5MW power distribution installation, motor control centers, and building management systems integration.",
    results: [
      "On-time, under budget delivery",
      "30% energy efficiency improvement",
      "Seamless integration with existing systems"
    ],
    metrics: { duration: "4 months", team: "12 engineers", value: "£1.8M" },
    color: "from-orange-500 to-red-500",
    bgGlow: "bg-orange-500/20"
  },
  {
    id: 3,
    title: "Commercial Development",
    client: "Property Developer Ltd.",
    industry: "Property",
    scope: "Full electrical fit-out for 50,000 sq ft commercial building including lighting, power, fire alarm, and data systems.",
    results: [
      "LEED Gold certification achieved",
      "Smart building integration",
      "Future-proofed infrastructure"
    ],
    metrics: { duration: "8 months", team: "20 engineers", value: "£3.2M" },
    color: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/20"
  },
  {
    id: 4,
    title: "Emergency Repair Response",
    client: "Chemical Processing Plant",
    industry: "Industrial",
    scope: "Critical HV switchgear failure recovery with temporary power supply and permanent replacement installation.",
    results: [
      "8-hour emergency response",
      "Minimal production downtime",
      "Enhanced system resilience"
    ],
    metrics: { duration: "48 hours", team: "8 engineers", value: "£450K" },
    color: "from-teal-500 to-green-500",
    bgGlow: "bg-teal-500/20"
  }
];

export default function ProjectPortfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section ref={targetRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400 mb-6 border border-teal-500/20">
            <Briefcase className="h-4 w-4" />
            <span>Featured Projects</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Delivering Excellence{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Across Sectors
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
            Real projects, real results - see how we've helped clients achieve their goals with proven expertise.
          </p>
        </div>

        {/* Carousel */}
        <div className={`mt-16 max-w-6xl mx-auto ${isIntersecting ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
          <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <ProjectCard
                    project={project}
                    index={index}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Want to see your project here? <span className="text-primary font-medium cursor-pointer hover:underline">Let's talk</span>
          </p>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

function ProjectCard({ project, index, hoveredIndex, setHoveredIndex }: ProjectCardProps) {
  const { title, client, industry, scope, results, metrics, color, bgGlow } = project;
  const isHovered = hoveredIndex === index;

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="h-full"
    >
      <div className={`group relative rounded-2xl border border-border/50 bg-card p-6 h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30`}>
        {/* Glow effect on hover */}
        <div className={`absolute inset-0 rounded-2xl ${bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10`} />

        {/* Top gradient accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} rounded-t-2xl`} />

        {/* Content */}
        <div className="relative space-y-5 pt-2">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-card-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-teal-500 group-hover:bg-clip-text group-hover:text-transparent transition-all leading-tight">
                {title}
              </h3>
              <div className={`rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r ${color} text-white shadow-sm whitespace-nowrap flex-shrink-0`}>
                {industry}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span className="font-medium">{client}</span>
            </div>
          </div>

          {/* Divider */}
          <div className={`h-px bg-gradient-to-r ${color} opacity-20`} />

          {/* Project Scope */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-card-foreground uppercase tracking-wide">Project Scope</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{scope}</p>
          </div>

          {/* Key Results */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-card-foreground uppercase tracking-wide">Key Results</h4>
            <ul className="space-y-2">
              {results.map((result, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 text-sm text-muted-foreground transition-all duration-300`}
                  style={{
                    transitionDelay: isHovered ? `${idx * 50}ms` : '0ms'
                  }}
                >
                  <CheckCircle className={`w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 transition-transform duration-300 ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`} />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics Grid */}
          <div className={`grid grid-cols-3 gap-4 pt-4 border-t border-border/50`}>
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-xs uppercase tracking-wide">Duration</span>
              </div>
              <p className={`text-sm font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                {metrics.duration}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Users className="w-3.5 h-3.5" />
                <span className="text-xs uppercase tracking-wide">Team</span>
              </div>
              <p className={`text-sm font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                {metrics.team}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <DollarSign className="w-3.5 h-3.5" />
                <span className="text-xs uppercase tracking-wide">Value</span>
              </div>
              <p className={`text-sm font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                {metrics.value}
              </p>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className={`h-1 rounded-full bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100`} />
        </div>
      </div>
    </div>
  );
}
