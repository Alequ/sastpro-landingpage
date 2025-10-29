"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    title: "Who are we",
    image: "/home/AboutUS.png",
    span: "col-span-1 md:col-span-1 lg:col-span-3 row-span-1",
    link: "/who-we-are"
  },
  {
    title: "Our services",
    image: "/home/OurServices.png",
    span: "col-span-1 md:col-span-1 lg:col-span-3 row-span-1",
    link: "/our-services"
  },
  {
    title: "Construction",
    image: "/home/Construction.png",
    span: "col-span-1 md:col-span-1 lg:col-span-2 row-span-1",
    link: "/constructions"
  },
  {
    title: "Commissioning",
    image: "/home/Commissioning.png",
    span: "col-span-1 md:col-span-1 lg:col-span-2 row-span-1",
    link: "/commissioning"
  },
  {
    title: "Maintenance",
    image: "/home/Maintenance.png",
    span: "col-span-1 md:col-span-1 lg:col-span-2 row-span-1",
    link: "/maintenance"
  }
];

export default function ServicesOverview() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section ref={targetRef} className="relative  pt-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[280px] transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
  service: typeof services[0];
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
      className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ${span} ${
        isVisible ? `animate-in fade-in slide-in-from-bottom-4 duration-700` : 'opacity-0'
      }`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url(${image})`,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      />

      {/* Dark Overlay with Yellow Hover */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isHovered
            ? 'rgba(208, 185, 112, 0.75)'
            : 'rgba(0, 0, 0, 0.35)'
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6">
        {/* Title */}
        <h3
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight max-w-[80%] transition-all duration-500 group-hover:translate-x-1"
          style={{
            color: isHovered ? '#000000' : '#ffffff'
          }}
        >
          {title}
        </h3>

        {/* Arrow Icon */}
        <div className="flex justify-end">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-5deg]"
            style={{
              backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              borderWidth: '1px',
              borderColor: isHovered ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.2)'
            }}
          >
            <ArrowRight
              className="w-6 h-6 transition-all duration-500 group-hover:translate-x-1"
              style={{
                color: isHovered ? '#000000' : '#ffffff'
              }}
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div
        className="absolute inset-0 border-2 border-transparent transition-all duration-500"
        style={{
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
          boxShadow: isHovered ? '0 0 30px rgba(255, 255, 255, 0.2)' : 'none'
        }}
      />
    </a>
  );
}
