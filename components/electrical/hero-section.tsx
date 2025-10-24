"use client";

import { Button } from "@/components/ui/button";
import { Shield, Award, CheckCircle, Briefcase } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const handleScrollToContact = () => {
    const contactSection = document.querySelector('[data-section="contact"]');
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-construction-site-with-electrical-equipment.jpg"
          alt="Modern construction site with electrical equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Headline */}
            <h1 className="text-balance text-4xl font-bold tracking-[0.15em] sm:text-6xl lg:text-7xl leading-[0.85]">
            <span className="text-white">ELECTRICAL</span>{" "}<br />
            <span className="text-[#D4AF37]">MECHANICAL</span>{" "}<br />
            <span className="text-white">TURNKEY</span>
            <br />
            <span className="text-white">ENGINEERING</span>{" "}<br />
            <span className="text-[#D4AF37]">SOLUTIONS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 max-w-3xl mx-auto">
            Expert electrical engineering, maintenance, and safety services for onshore and offshore installations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#C49F2F] text-white px-8 py-6 text-lg glow-pulse"
              onClick={handleScrollToContact}
            >
              Find out more
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={handleScrollToContact}
            >
              Watch Our Video
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            <TrustBadge
              icon={Shield}
              text="15+ Years Experience"
            />
            <TrustBadge
              icon={Award}
              text="ISO 9001 Certified"
            />
            <TrustBadge
              icon={CheckCircle}
              text="NICEIC Approved"
            />
            <TrustBadge
              icon={Briefcase}
              text="50+ Projects Completed"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

interface TrustBadgeProps {
  icon: React.ElementType;
  text: string;
}

function TrustBadge({ icon: Icon, text }: TrustBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
      <Icon className="w-8 h-8 text-blue-400" />
      <p className="text-sm font-semibold text-center">{text}</p>
    </div>
  );
}
