"use client";

import { Calendar, Briefcase, ShieldCheck, Users, TrendingUp, Sparkles } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect, useState } from "react";

// Smooth count-up animation hook
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(startValue + (end - startValue) * easeOutQuart);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
}

const stats = [
  {
    value: 25,
    suffix: "+",
    label: "Years Experience",
    icon: Calendar,
    description: "Industry expertise",
    color: "from-blue-400 to-cyan-400",
    bgGlow: "bg-blue-400/20"
  },
  {
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    icon: Briefcase,
    description: "Successful deliveries",
    color: "from-cyan-400 to-teal-400",
    bgGlow: "bg-cyan-400/20"
  },
  {
    value: 99.8,
    suffix: "%",
    label: "Safety Score",
    icon: ShieldCheck,
    description: "Industry-leading",
    color: "from-teal-400 to-green-400",
    bgGlow: "bg-teal-400/20"
  },
  {
    value: 100,
    suffix: "+",
    label: "Certified Engineers",
    icon: Users,
    description: "Expert team members",
    color: "from-green-400 to-emerald-400",
    bgGlow: "bg-green-400/20"
  }
];

export default function StatsMetrics() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section ref={targetRef} className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-6 border border-white/30">
            <TrendingUp className="h-4 w-4" />
            <span>Our Track Record</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Numbers That{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white">
                Speak for Themselves
              </span>
              <span className="absolute bottom-2 left-0 h-3 w-full bg-white/30 blur-sm" />
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-blue-100 max-w-xl mx-auto">
            Proven excellence across decades of electrical engineering and safety services delivery.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isIntersecting}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-white/90">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span className="text-sm font-medium">Trusted by industry leaders since 1999</span>
            <Sparkles className="h-4 w-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: typeof stats[0];
  index: number;
  isVisible: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

function StatCard({ stat, index, isVisible, hoveredIndex, setHoveredIndex }: StatCardProps) {
  const { value, suffix, label, icon: Icon, description, color, bgGlow } = stat;
  const count = useCountUp(value, 2000, isVisible);
  const isHovered = hoveredIndex === index;

  // Format the count based on whether it's a decimal
  const displayValue = value % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`group relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:shadow-2xl ${
        isVisible ? `animate-in fade-in zoom-in duration-700` : 'opacity-0'
      }`}
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 ${bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

      {/* Top gradient accent bar */}
      <div className={`h-1 bg-gradient-to-r ${color}`} />

      {/* Decorative corner element */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative p-8 text-center space-y-4">
        {/* Icon with gradient background */}
        <div className="relative inline-block">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>

          {/* Pulse ring on hover */}
          {isHovered && (
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color} animate-ping opacity-75`} />
          )}
        </div>

        {/* Value with count-up animation */}
        <div className="space-y-2">
          <div className="min-h-[60px] flex items-center justify-center">
            <p className={`text-5xl font-extrabold transition-all duration-300 ${
              isHovered
                ? `bg-gradient-to-r ${color} bg-clip-text text-transparent`
                : 'text-white'
            }`}>
              {displayValue}{suffix}
            </p>
          </div>

          {/* Label */}
          <p className="text-xl font-bold text-white tracking-wide">
            {label}
          </p>

          {/* Description */}
          <p className="text-sm text-blue-100">
            {description}
          </p>
        </div>

        {/* Sparkle indicator on hover */}
        <div className={`flex items-center justify-center gap-1 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <Sparkles className="h-4 w-4 text-white" />
          <span className="text-xs font-medium text-white">Live metric</span>
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
      </div>
    </div>
  );
}
