"use client";

import {
  Upload,
  FolderTree,
  Activity,
  Workflow,
  ArrowRight,
  Check,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
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

  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload & Import",
      description:
        "Easily upload existing documents or import from your current systems. Supports all major file formats.",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20",
      features: ["Drag & Drop", "Bulk Upload", "All Formats"],
    },
    {
      number: "02",
      icon: FolderTree,
      title: "Organize & Tag",
      description:
        "Automatically categorize documents with smart tagging. Create custom folders and access controls.",
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20",
      features: ["Auto-Tagging", "Custom Folders", "Access Control"],
    },
    {
      number: "03",
      icon: Activity,
      title: "Track & Monitor",
      description:
        "Real-time monitoring of all assets and documents. Get alerts for compliance deadlines and updates.",
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/20",
      features: ["Real-time Alerts", "Dashboards", "Compliance Tracking"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-border bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 py-24 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 border border-primary/20">
            <Workflow className="h-4 w-4" />
            <span>Simple Process</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Get Started in{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Minutes
              </span>
              <span className="absolute bottom-2 left-0 h-3 w-full bg-primary/20 blur-sm" />
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
            Our intuitive platform makes it simple to transition from chaos to
            complete control.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            {/* Connecting line - desktop */}
            <div className="absolute left-0 top-20 hidden h-1 w-full lg:block">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-border via-border to-border opacity-30" />
                {isVisible && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 animate-in slide-in-from-left duration-[2000ms]" />
                )}
              </div>
            </div>

            {steps.map((step, index) => (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={`group relative ${
                  isVisible
                    ? `animate-in fade-in slide-in-from-bottom-8 duration-700`
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Card */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 ${step.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-150`}
                    />

                    {/* Icon circle */}
                    <div
                      className={`relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}
                    >
                      <step.icon
                        className="h-10 w-10 text-white"
                        strokeWidth={2.5}
                      />

                      {/* Number badge */}
                      <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary shadow-lg">
                        <span className="text-sm font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Check badge on hover */}
                    {activeStep === index && (
                      <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-green-500 shadow-lg animate-in zoom-in duration-200">
                        <Check className="h-4 w-4 text-white" strokeWidth={3} />
                      </div>
                    )}
                  </div>

                  {/* Arrow connector - mobile */}
                  {index < steps.length - 1 && (
                    <div className="my-4 flex items-center justify-center lg:hidden">
                      <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
                    </div>
                  )}

                  {/* Content Card */}
                  <div
                    className={`rounded-2xl border border-border/50 bg-card p-6 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl ${
                      activeStep === index ? "scale-105" : ""
                    }`}
                  >
                    <h3 className="text-xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Feature list - show on hover */}
                    <div
                      className={`mt-4 space-y-2 transition-all duration-300 ${
                        activeStep === index
                          ? "opacity-100 max-h-32"
                          : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      {step.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <div
                            className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${step.color}`}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom accent */}
                    <div
                      className={`mt-4 h-1 rounded-full bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-green-500/10 px-6 py-3 border border-green-500/20">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              Average setup time: Less than 15 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
