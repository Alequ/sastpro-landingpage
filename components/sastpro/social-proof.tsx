'use client'

import { Star, Quote, CheckCircle2, Award, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function SocialProof() {
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

  const testimonials = [
    {
      quote:
        "SASTPRO transformed how we manage compliance. We went from scattered files to complete organization in weeks.",
      author: "Michael Chen",
      role: "Safety Director",
      company: "BuildRight Construction",
      avatar: "MC",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20",
      stat: "100%",
      statLabel: "Audit Pass Rate"
    },
    {
      quote: "The electrical asset tracking feature alone saved us thousands in preventive maintenance costs.",
      author: "Sarah Johnson",
      role: "Facility Manager",
      company: "Metro Infrastructure",
      avatar: "SJ",
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20",
      stat: "$50K+",
      statLabel: "Annual Savings"
    },
    {
      quote: "Audit preparation used to take weeks. Now we're audit-ready 24/7 with just a few clicks.",
      author: "David Martinez",
      role: "Compliance Officer",
      company: "Apex Engineering",
      avatar: "DM",
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/20",
      stat: "90%",
      statLabel: "Time Reduced"
    },
  ]

  const companies = [
    { name: "BuildRight Construction", color: "text-blue-500" },
    { name: "Metro Infrastructure", color: "text-purple-500" },
    { name: "Apex Engineering", color: "text-green-500" },
    { name: "Summit Electrical", color: "text-orange-500" },
    { name: "Pioneer Safety Group", color: "text-pink-500" },
    { name: "TechBuild Solutions", color: "text-indigo-500" },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-border bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 py-24 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-6 border border-accent/20">
            <Award className="h-4 w-4" />
            <span>Customer Success Stories</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Trusted by{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent via-primary to-purple-500 bg-clip-text text-transparent">
                Industry Leaders
              </span>
              <span className="absolute bottom-2 left-0 h-3 w-full bg-accent/20 blur-sm" />
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
            Join hundreds of construction companies that have modernized their safety operations.
          </p>

          {/* Stats bar */}
          <div className="mt-8 flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-accent/30 ${
                isVisible ? `animate-in fade-in slide-in-from-bottom-4 duration-700` : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 ${testimonial.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

              {/* Content */}
              <div className="relative p-6">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 h-12 w-12 text-accent/10 group-hover:text-accent/20 transition-colors" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 fill-yellow-500 text-yellow-500 transition-all duration-300`}
                      style={{
                        transitionDelay: `${i * 50}ms`,
                        transform: hoveredIndex === index ? 'scale(1.2) rotate(15deg)' : 'scale(1)'
                      }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-card-foreground leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Stat badge - show on hover */}
                {hoveredIndex === index && (
                  <div className={`mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${testimonial.color} px-3 py-2 animate-in fade-in slide-in-from-bottom duration-300`}>
                    <TrendingUp className="h-4 w-4 text-white" />
                    <div className="text-white">
                      <div className="text-lg font-bold">{testimonial.stat}</div>
                      <div className="text-xs opacity-90">{testimonial.statLabel}</div>
                    </div>
                  </div>
                )}

                {/* Author section */}
                <div className="mt-6 flex items-center gap-3">
                  {/* Avatar */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-sm font-bold text-white">{testimonial.avatar}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground font-medium">{testimonial.company}</p>
                  </div>

                  {/* Verified badge */}
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-100 transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100`} />
              </div>
            </div>
          ))}
        </div>

        {/* Company logos section */}
        <div className="mx-auto mt-20 max-w-5xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-8">
            Trusted by Leading Companies
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className={`group flex items-center justify-center rounded-lg border border-border/50 bg-card/50 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-accent/30 ${
                  isVisible ? `animate-in fade-in zoom-in duration-500` : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${(index + 3) * 100}ms`
                }}
              >
                <span className={`text-xs font-semibold text-center transition-colors ${company.color} opacity-70 group-hover:opacity-100`}>
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-6 py-3 border border-green-500/20">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-foreground">
              Join 500+ satisfied customers today
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
