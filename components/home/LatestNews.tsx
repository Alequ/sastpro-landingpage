"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LatestNews() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link href="/latest-news" className="block">
          <div
            className="group relative h-[420px] overflow-hidden cursor-pointer transition-all duration-700"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background Image */}
            <Image
              src="/home_2/LatestNews.webp"
              alt="Latest News"
              fill
              sizes="(max-width: 1024px) 100vw, 1280px"
              className={`object-cover transition-transform duration-700 ${
                isHovered ? "scale-110" : ""
              }`}
              priority
            />

            {/* Gold accent line on top (hover) */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Dark Overlay with Yellow Hover */}
            <div
              className="absolute inset-0 transition-all duration-500"
              style={{
                background: isHovered
                  ? "rgba(208, 185, 112, 0.5)"
                  : "rgba(0, 0, 0, 0.25)",
              }}
            />

            {/* Content */}
            <div className="relative h-full flex items-start justify-between px-8 pt-8">
              {/* Left: Latest News Text */}
              <h2
                className="text-3xl font-bold transition-colors duration-300 drop-shadow-lg"
                style={{
                  color: isHovered ? "#000000" : "#ffffff",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                Latest News
              </h2>

              {/* Right: Arrow Icon */}
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 group-hover:translate-x-1 transition-transform duration-300">
                <Image
                  src="/shared/ButtonGoldav.png"
                  alt="Arrow"
                  fill
                  sizes="36px"
                  className="object-contain transition-all duration-500"
                  style={{
                    filter: isHovered ? "brightness(0)" : "none",
                  }}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
