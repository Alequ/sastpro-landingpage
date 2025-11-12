"use client";

import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Image from "next/image";

const services = [
  {
    title: "Who Are We",
    image: "/home_2/AboutUS.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-3 row-span-1",
    link: "/who-we-are",
  },
  {
    title: "Our Services",
    image: "/home_2/OurServices.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-3 row-span-1",
    link: "/our-services",
  },
  {
    title: "Construction",
    image: "/home_2/Construction.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-2 row-span-1",
    link: "/constructions",
  },
  {
    title: "Commissioning",
    image: "/home_2/Commissioning.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-2 row-span-1",
    link: "/commissioning",
  },
  {
    title: "Maintenance",
    image: "/home_2/Maintenance.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-2 row-span-1",
    link: "/maintenance",
  },
];

export default function ServicesOverview() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section ref={targetRef} className="relative pt-16 pb-4 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[280px] transition-all duration-1000 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
  isVisible: boolean;
}

function ServiceCard({ service, index, isVisible }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { title, image, span, link } = service;

  return (
    <a
      href={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${span} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url(${image})`,
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      />

      {/* Dark Overlay with Yellow Hover */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isHovered
            ? "rgba(208, 185, 112, 0.75)"
            : "rgba(0, 0, 0, 0.35)",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-start justify-between p-6">
        {/* Title */}
        <h3
          className="text-3xl font-bold transition-colors duration-500"
          style={{
            color: isHovered ? "#000000" : "#ffffff",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          {title}
        </h3>

        {/* Arrow Icon */}
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
          <Image
            src="/shared/ButtonGoldav.png"
            alt="Arrow"
            fill
            sizes="32px"
            className="object-contain transition-all duration-500"
            style={{
              filter: isHovered ? "brightness(0)" : "none",
            }}
          />
        </div>
      </div>

      {/* Hover Border Glow */}
      <div
        className="absolute inset-0 border-2 border-transparent transition-all duration-500"
        style={{
          borderColor: isHovered ? "rgba(255, 255, 255, 0.3)" : "transparent",
          boxShadow: isHovered ? "0 0 30px rgba(255, 255, 255, 0.2)" : "none",
        }}
      />
    </a>
  );
}
