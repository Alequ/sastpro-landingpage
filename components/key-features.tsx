'use client'

import { FileText, Users, Zap, Shield, Search, BarChart3, Sparkles, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function KeyFeatures() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: FileText,
      title: "Document Management",
      description:
        "Centralized repository with version control, quick search, and instant retrieval. Never lose a safety document again.",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20",
      iconBg: "bg-blue-500/10",
      highlights: ["Version Control", "Quick Search", "Instant Retrieval"]
    },
    {
      icon: Users,
      title: "CX Tracker",
      description:
        "Log and track all customer interactions, site visits, and communication history in one organized timeline.",
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20",
      iconBg: "bg-purple-500/10",
      highlights: ["Customer Logs", "Site Visits", "Timeline View"]
    },
    {
      icon: Zap,
      title: "Energized Assets",
      description:
        "Real-time monitoring of electrical assets with safety protocols, maintenance schedules, and status tracking.",
      color: "from-yellow-500 to-orange-500",
      bgGlow: "bg-yellow-500/20",
      iconBg: "bg-yellow-500/10",
      highlights: ["Real-time Monitoring", "Safety Protocols", "Maintenance"]
    },
    {
      icon: Shield,
      title: "Compliance Automation",
      description:
        "Automated compliance checks, deadline reminders, and regulatory updates to keep you audit-ready 24/7.",
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/20",
      iconBg: "bg-green-500/10",
      highlights: ["Auto Checks", "Reminders", "Audit Ready"]
    },
    {
      icon: Search,
      title: "Smart Search & Retrieval",
      description:
        "Find any document in seconds with AI-powered search across all your safety records and engineering files.",
      color: "from-indigo-500 to-blue-500",
      bgGlow: "bg-indigo-500/20",
      iconBg: "bg-indigo-500/10",
      highlights: ["AI-Powered", "Instant Results", "Full-Text Search"]
    },
    {
      icon: BarChart3,
      title: "Audit Trails",
      description:
        "Complete activity logs and change history for every document, ensuring transparency and accountability.",
      color: "from-red-500 to-pink-500",
      bgGlow: "bg-red-500/20",
      iconBg: "bg-red-500/10",
      highlights: ["Activity Logs", "Change History", "Full Transparency"]
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 border border-primary/20">
            <Sparkles className="h-4 w-4" />
            <span>Powerful Features</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              in One Platform
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
            Powerful features designed specifically for construction safety and electrical engineering management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30 ${
                isVisible ? `animate-in fade-in slide-in-from-bottom-4 duration-700` : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl ${feature.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10`} />

              {/* Content */}
              <div className="relative">
                {/* Icon with gradient background */}
                <div className="relative mb-5">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <feature.icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Floating badge on hover */}
                  {hoveredIndex === index && (
                    <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 shadow-lg animate-in zoom-in duration-200">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-card-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                {/* Highlight tags - show on hover */}
                <div className={`mt-4 flex flex-wrap gap-1.5 transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  {feature.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary border border-primary/20"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className={`mt-5 h-1 rounded-full bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Plus many more features to streamline your workflow
          </p>
        </div>
      </div>
    </section>
  )
}
