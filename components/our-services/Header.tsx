"use client";

import Image from "next/image";

export default function Header() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/constructions/ConstructionHeader.png"
          alt="Construction site"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="space-y-2">
          {/* Title with Squares */}
          <div className="flex items-center justify-center gap-6 lg:gap-8">
            {/* Left Squares */}
            <div className="hidden lg:flex flex-row gap-2 items-center">
              <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
              <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
              <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
            </div>

            {/* Title */}
            <h1
              className="font-bold tracking-[0.15em] text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              style={{
                fontFamily: "var(--font-montserrat)",
              }}
            >
              OUR SERVICES
            </h1>

            {/* Right Squares */}
            <div className="hidden lg:flex flex-row gap-2 items-center">
              <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
              <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
              <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
            </div>
          </div>

          {/* Mobile Squares - Shown on smaller screens */}
          <div className="flex lg:hidden justify-center gap-2">
            <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
            <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
            <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
          </div>

          {/* Description Text */}
          <div className="max-w-3xl mx-auto space-y-1 text-center px-4">
            <p
              className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl lg:text-xl"
              style={{
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Supporting safe, efficient delivery throughout the construction
              phase.
            </p>
            <p
              className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl lg:text-xl"
              style={{
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Ensuring systems are installed and energised to the highest
              industry standards.
            </p>
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
