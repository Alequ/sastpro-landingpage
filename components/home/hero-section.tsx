"use client";

import { Button } from "@/components/ui/button";

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
          src="/home/Background1.png"
          alt="Modern construction site with electrical equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Grain Effect Overlay */}
        <div
          className="absolute inset-0 opacity-70 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Headline */}
            <h1 className="text-balance text-4xl font-bold tracking-[0.15em] sm:text-6xl lg:text-7xl leading-[0.85] font-[family-name:var(--font-montserrat)]">
            <span className="text-white">ELECTRICAL</span>{" "}<br />
            <span className="text-[#D0B970]">MECHANICAL</span>{" "}<br />
            <span className="text-[#9f9b9b]">TURNKEY</span>
            <br />
            <span className="text-white">ENGINEERING</span>{" "}<br />
            <span className="text-[#D0B970]">SOLUTIONS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 max-w-3xl mx-auto">
            Expert electrical engineering, maintenance, and safety services for onshore and offshore installations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-[#D0B970] hover:bg-[#BBA860] text-white px-8 py-6 text-lg glow-pulse rounded-full"
              onClick={handleScrollToContact}
            >
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
              onClick={handleScrollToContact}
            >
              Contact Us
            </Button>
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

