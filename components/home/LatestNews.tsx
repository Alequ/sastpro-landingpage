"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LatestNews() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link href="/latest-news" className="block">
          <div
            className="relative h-[420px] overflow-hidden cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background Image */}
            <Image
              src="/home/LatestNews.png"
              alt="Latest News"
              fill
              className="object-cover"
              priority
            />

            {/* Dark Overlay with Yellow Hover */}
            <div
              className="absolute inset-0 transition-all duration-500"
              style={{
                background: isHovered
                  ? 'rgba(208, 185, 112, 0.5)'
                  : 'rgba(0, 0, 0, 0.25)'
              }}
            />

            {/* Content */}
            <div className="relative h-full flex items-start justify-between px-8 pt-8">
              {/* Left: Latest News Text */}
              <h2
                className="text-3xl font-bold transition-colors duration-500"
                style={{
                  color: isHovered ? '#000000' : '#ffffff',
                  fontFamily: "var(--font-montserrat)"
                }}
              >
                Latest News
              </h2>

              {/* Right: Arrow Icon */}
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 group-hover:translate-x-1 transition-transform duration-300">
                <Image
                  src="/maintenance/ButtonGoldav.png"
                  alt="Arrow"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
