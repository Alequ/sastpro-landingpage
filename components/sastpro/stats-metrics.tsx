'use client'

import { TrendingUp, Clock, Shield, Users, BarChart3, Sparkles, ArrowUpRight, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Count-up animation hook
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(startValue + (end - startValue) * easeOutQuart))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, shouldStart])

  return count
}

export function StatsMetrics() {
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

  const stats = [
    {
      icon: Clock,
      value: "85%",
      numericValue: 85,
      suffix: "%",
      label: "Time Saved",
      description: "Average reduction in document retrieval time",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20",
      trend: "+15%",
    },
    {
      icon: Shield,
      value: "99.8%",
      numericValue: 99.8,
      suffix: "%",
      label: "Compliance Rate",
      description: "Audit success rate across all clients",
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/20",
      trend: "+2.3%",
    },
    {
      icon: TrendingUp,
      value: "2M+",
      numericValue: 2,
      suffix: "M+",
      label: "Documents Managed",
      description: "Safety documents securely stored",
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20",
      trend: "+500K",
    },
    {
      icon: Users,
      value: "500+",
      numericValue: 500,
      suffix: "+",
      label: "Companies",
      description: "Construction firms using SASTPRO",
      color: "from-orange-500 to-red-500",
      bgGlow: "bg-orange-500/20",
      trend: "+150",
    },
  ]

  const additionalStats = [
    {
      value: "$2.4M",
      label: "Average ROI per year",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      value: "3 weeks",
      label: "Average implementation time",
      icon: Zap,
      color: "text-blue-500"
    },
    {
      value: "24/7",
      label: "Support & uptime guarantee",
      icon: Shield,
      color: "text-purple-500"
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-secondary/20 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 border border-primary/20">
            <BarChart3 className="h-4 w-4" />
            <span>Impact Metrics</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Results That{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                Speak for Themselves
              </span>
              <span className="absolute bottom-2 left-0 h-3 w-full bg-primary/20 blur-sm" />
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
            Real metrics from real construction companies using SASTPRO.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isVisible}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Additional Stats - Enhanced ROI Banner */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className={`relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/10 to-purple-500/10 p-8 overflow-hidden backdrop-blur-sm ${
            isVisible ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-500' : 'opacity-0'
          }`}>
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-50" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-3">
              {additionalStats.map((item, index) => (
                <div
                  key={item.label}
                  className="group text-center transition-transform duration-300 hover:scale-110"
                >
                  {/* Icon */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/80 border border-border/50 mb-3 group-hover:shadow-lg transition-shadow">
                    <item.icon className={`h-6 w-6 ${item.color}`} strokeWidth={2.5} />
                  </div>

                  {/* Value */}
                  <p className="text-4xl font-extrabold text-foreground group-hover:scale-110 transition-transform">
                    {item.value}
                  </p>

                  {/* Label */}
                  <p className="mt-2 text-sm text-muted-foreground font-medium">
                    {item.label}
                  </p>

                  {/* Separator line */}
                  {index < additionalStats.length - 1 && (
                    <div className="absolute top-1/2 -right-4 hidden sm:block h-16 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-green-500/10 px-6 py-3 border border-green-500/20">
            <div className="flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-green-500 animate-pulse" />
              <Sparkles className="h-3 w-3 text-green-500 animate-pulse delay-75" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Data updated in real-time from active deployments
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// StatCard component with count-up animation
interface StatCardProps {
  stat: {
    icon: React.ElementType
    value: string
    numericValue: number
    suffix: string
    label: string
    description: string
    color: string
    bgGlow: string
    trend: string
  }
  index: number
  isVisible: boolean
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
}

function StatCard({ stat, index, isVisible, hoveredIndex, setHoveredIndex }: StatCardProps) {
  const count = useCountUp(stat.numericValue, 2000, isVisible)
  const isHovered = hoveredIndex === index

  // Format the count based on the suffix
  const displayValue = stat.suffix === '%' && stat.numericValue < 100
    ? count.toFixed(1)
    : count

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`group relative rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/30 ${
        isVisible ? `animate-in fade-in zoom-in duration-700` : 'opacity-0'
      }`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 ${stat.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

      {/* Decorative corner gradient */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative p-6 text-center">
        {/* Icon with gradient */}
        <div className="mx-auto mb-4 relative">
          <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
            <stat.icon className="h-8 w-8 text-white" strokeWidth={2.5} />
          </div>

          {/* Trend badge */}
          {isHovered && (
            <div className="absolute -top-2 -right-2 flex items-center gap-1 rounded-full bg-green-500 px-2 py-1 shadow-lg animate-in zoom-in duration-200">
              <ArrowUpRight className="h-3 w-3 text-white" />
              <span className="text-xs font-bold text-white">{stat.trend}</span>
            </div>
          )}
        </div>

        {/* Value - large and bold with count-up animation */}
        <div className="min-h-[60px] flex items-center justify-center">
          <p className={`text-5xl font-extrabold transition-all duration-300 ${
            isHovered
              ? `bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`
              : 'text-card-foreground'
          }`}>
            {displayValue}{stat.suffix}
          </p>
        </div>

        {/* Label */}
        <p className="mt-3 text-sm font-bold text-card-foreground tracking-wide uppercase">
          {stat.label}
        </p>

        {/* Description */}
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed min-h-[32px]">
          {stat.description}
        </p>

        {/* Sparkle effect on hover */}
        <div className={`mt-4 flex items-center justify-center gap-1 text-accent transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-medium">Live data</span>
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
      </div>
    </div>
  )
}
