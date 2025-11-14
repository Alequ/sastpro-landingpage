"use client";

import {
  HardHat,
  ClipboardCheck,
  Building2,
  Users,
  Target,
  TrendingUp,
  Quote,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function UseCases() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const useCases = [
    {
      icon: HardHat,
      title: "Safety Managers",
      description:
        "Maintain complete safety documentation, track incidents, and ensure OSHA compliance across all job sites.",
      example:
        "Reduced incident reporting time by 75% and achieved 100% audit pass rate.",
      color: "from-orange-500 to-red-500",
      bgGlow: "bg-orange-500/20",
      stat: "75%",
      statLabel: "Time Saved",
      benefits: ["OSHA Compliance", "Incident Tracking", "Site Management"],
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Officers",
      description:
        "Automate compliance tracking, manage certifications, and generate audit-ready reports instantly.",
      example:
        "Streamlined quarterly audits from 2 weeks to 2 days of preparation.",
      color: "from-blue-500 to-indigo-500",
      bgGlow: "bg-blue-500/20",
      stat: "85%",
      statLabel: "Faster Audits",
      benefits: ["Auto Tracking", "Certifications", "Instant Reports"],
    },
    {
      icon: Building2,
      title: "Facility Managers",
      description:
        "Monitor electrical assets, schedule maintenance, and track equipment lifecycle across multiple sites.",
      example:
        "Improved asset uptime by 40% with proactive maintenance scheduling.",
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20",
      stat: "40%",
      statLabel: "Uptime Boost",
      benefits: ["Asset Monitor", "Maintenance", "Multi-site"],
    },
    {
      icon: Users,
      title: "Operations Teams",
      description:
        "Collaborate seamlessly with real-time updates, shared access, and mobile-friendly document retrieval.",
      example:
        "Enabled field teams to access critical documents 10x faster on mobile devices.",
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/20",
      stat: "10x",
      statLabel: "Faster Access",
      benefits: ["Real-time Sync", "Mobile Ready", "Team Collab"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-secondary/20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-6 border border-accent/20">
            <Target className="h-4 w-4" />
            <span>Use Cases</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent via-primary to-purple-500 bg-clip-text text-transparent">
                Every Role
              </span>
              <span className="absolute bottom-2 left-0 h-3 w-full bg-accent/20 blur-sm" />
            </span>{" "}
            in Construction
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
            From the field to the office, SASTPRO empowers your entire team with
            role-specific features.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-accent/30 ${
                isVisible
                  ? `animate-in fade-in slide-in-from-bottom-4 duration-700`
                  : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 ${useCase.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}
              />

              {/* Content */}
              <div className="relative p-8">
                {/* Header with icon and stat */}
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${useCase.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <useCase.icon
                      className="h-7 w-7 text-white"
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Stat badge */}
                  <div
                    className={`rounded-lg border border-border/50 bg-background/50 px-3 py-2 backdrop-blur-sm transition-all duration-300 ${
                      hoveredIndex === index ? "scale-110" : ""
                    }`}
                  >
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}
                    >
                      {useCase.stat}
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">
                      {useCase.statLabel}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-card-foreground group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {useCase.description}
                </p>

                {/* Benefits tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {useCase.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent border border-accent/20"
                    >
                      <Star className="h-3 w-3 fill-accent" />
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Example testimonial - enhanced on hover */}
                <div
                  className={`mt-6 relative rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 p-4 border border-border/30 transition-all duration-300 ${
                    hoveredIndex === index ? "shadow-lg scale-[1.02]" : ""
                  }`}
                >
                  <Quote className="absolute top-2 right-2 h-8 w-8 text-accent/10" />
                  <div className="relative">
                    <p className="text-sm italic text-muted-foreground leading-relaxed">
                      "{useCase.example}"
                    </p>
                    {hoveredIndex === index && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-accent animate-in fade-in slide-in-from-left duration-300">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-medium">
                          Real results from actual customers
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`mt-6 h-1 rounded-full bg-gradient-to-r ${useCase.color} opacity-0 group-hover:opacity-100 transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Join hundreds of construction teams already using SASTPRO
          </p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-yellow-500 text-yellow-500"
              />
            ))}
            <span className="ml-2 text-sm font-medium text-foreground">
              4.9/5 from 200+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
