"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/Website_Video2.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold tracking-[0.15em] sm:text-6xl lg:text-7xl leading-[0.85] font-[family-name:var(--font-montserrat)]">
            <span className="text-white">ELECTRICAL</span> <br />
            <span className="text-[#D0B970]">MECHANICAL</span> <br />
            <span className="text-[#9f9b9b]">TURNKEY</span>
            <br />
            <span className="text-white">ENGINEERING</span> <br />
            <span className="text-[#D0B970]">SOLUTIONS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 max-w-3xl mx-auto">
            Expert electrical engineering, maintenance, and safety services for
            onshore and offshore installations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/consultation"
              className="px-8 py-4 bg-transparent border-2 border-[#D0B970] text-white font-bold text-lg hover:bg-[#D0B970] hover:text-black transition-all duration-300 rounded-full"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-[#D0B970] text-white font-bold text-lg hover:bg-[#D0B970] hover:text-black transition-all duration-300 rounded-full"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Contact Us
            </Link>
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
