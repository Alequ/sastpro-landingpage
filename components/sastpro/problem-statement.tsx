"use client";

import { AlertTriangle, FileX, Clock, TrendingDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ProblemStatement() {
  const [isVisible, setIsVisible] = useState(false);
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

  const problems = [
    {
      icon: FileX,
      title: "Scattered Documents",
      description:
        "Safety documents spread across emails, drives, and filing cabinets making retrieval impossible during audits.",
      color: "from-red-500 to-orange-500",
      bgGlow: "bg-red-500/10",
      delay: "delay-100",
    },
    {
      icon: AlertTriangle,
      title: "Compliance Risks",
      description:
        "Missing or outdated documentation leading to failed inspections and potential project shutdowns.",
      color: "from-orange-500 to-yellow-500",
      bgGlow: "bg-orange-500/10",
      delay: "delay-200",
    },
    {
      icon: Clock,
      title: "Manual Tracking Errors",
      description:
        "Hours wasted on spreadsheets and paper trails that are prone to human error and version conflicts.",
      color: "from-yellow-500 to-red-500",
      bgGlow: "bg-yellow-500/10",
      delay: "delay-300",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-border bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 py-24 overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header with badge */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive mb-6 border border-destructive/20">
            <TrendingDown className="h-4 w-4" />
            <span>The Challenge</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Construction Safety{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Shouldn't Be This Hard</span>
              <span className="absolute bottom-1 left-0 h-3 w-full bg-destructive/20 -rotate-1" />
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
            Every day, construction teams lose valuable time and face
            unnecessary risks due to outdated document management systems.
          </p>
        </div>

        {/* Problem cards */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className={`group relative rounded-xl border border-border/50 bg-card p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-destructive/30 ${
                isVisible
                  ? `animate-in fade-in slide-in-from-bottom-4 ${problem.delay}`
                  : "opacity-0"
              }`}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-xl ${problem.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              />

              {/* Content */}
              <div className="relative">
                {/* Icon container */}
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${problem.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <problem.icon
                    className="h-6 w-6 text-white"
                    strokeWidth={2.5}
                  />
                </div>

                {/* Number badge */}
                <div className="absolute top-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10 text-xs font-bold text-destructive border border-destructive/20">
                  {index + 1}
                </div>

                <h3 className="mt-4 text-xl font-bold text-card-foreground group-hover:text-destructive transition-colors">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>

                {/* Decorative line */}
                <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-destructive to-transparent opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom transition text */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
            <span className="font-medium">There's a better way</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
