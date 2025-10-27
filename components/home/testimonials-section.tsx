"use client";

import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const testimonials = [
  {
    quote: "Outstanding service from start to finish. Their team's expertise in offshore installations is unmatched, and their commitment to safety is evident in every aspect of their work.",
    author: "John Smith",
    role: "Operations Manager",
    company: "OilTech Ltd",
    rating: 5
  },
  {
    quote: "We've worked with them for over 10 years. Responsive, professional, and safety-conscious. They're our go-to electrical partner for all major projects.",
    author: "Sarah Johnson",
    role: "Facilities Director",
    company: "IndustrialCorp",
    rating: 5
  },
  {
    quote: "The permit to work coordination was flawless. Their systematic approach and attention to detail resulted in zero incidents and on-time completion.",
    author: "Mike Davies",
    role: "HSE Manager",
    company: "RefineGroup",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="section-container bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div ref={targetRef} className="section-header">
        <h2 className="section-title text-white">
          What Our Clients Say
        </h2>
        <p className="section-subtitle text-slate-300">
          Don't just take our word for it - hear from the companies we've helped
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            isVisible={isIntersecting}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  isVisible: boolean;
  delay: number;
}

function TestimonialCard({ testimonial, isVisible, delay }: TestimonialCardProps) {
  const { quote, author, role, company, rating } = testimonial;

  return (
    <Card
      className={`p-8 card-hover-lift bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 relative ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-700 group`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="space-y-6">
        {/* Quote Icon */}
        <Quote className="w-12 h-12 text-cyan-500/30 absolute top-6 right-6 group-hover:text-cyan-400/40 transition-colors" />

        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, idx) => (
            <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote Text */}
        <p className="text-slate-300 leading-relaxed relative z-10">
          "{quote}"
        </p>

        {/* Author Info */}
        <div className="space-y-1 pt-4 border-t border-slate-700">
          <p className="font-bold text-white">{author}</p>
          <p className="text-sm text-slate-400">{role}</p>
          <p className="text-sm text-cyan-400 font-semibold">{company}</p>
        </div>
      </div>
    </Card>
  );
}
