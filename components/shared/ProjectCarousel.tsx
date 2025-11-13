"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectExample {
  id: string;
  title: string;
  client: string;
  location: string;
  description: string;
}

interface ProjectCarouselProps {
  projects: ProjectExample[];
  buttonImagePath: string;
}

export default function ProjectCarousel({
  projects,
  buttonImagePath,
}: ProjectCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calculate number of slides (3 projects per slide)
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Group projects into slides
  const slides = [];
  for (let i = 0; i < totalSlides; i++) {
    slides.push(
      projects.slice(i * projectsPerSlide, (i + 1) * projectsPerSlide)
    );
  }

  return (
    <section className="pb-16 sm:pb-20 md:pb-24 lg:pb-32">
      <div className="flex justify-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full" style={{ maxWidth: "1600px" }}>
          <div className="relative">
            {/* Navigation Arrows - Outside the cards */}
            <button
              onClick={prevSlide}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 hover:opacity-80 transition-opacity duration-300"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rotate-180">
                <Image
                  src={buttonImagePath}
                  alt="Previous"
                  fill
                  className="object-contain"
                />
              </div>
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 hover:opacity-80 transition-opacity duration-300"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                <Image
                  src={buttonImagePath}
                  alt="Next"
                  fill
                  className="object-contain"
                />
              </div>
            </button>

            {/* Project Cards Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slideProjects, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                  >
                    {slideProjects.map((project) => (
                      <div
                        key={project.id}
                        className="bg-white shadow-xl p-6 sm:p-8 min-h-[400px] flex flex-col"
                      >
                        <div className="space-y-6 flex-1">
                          <div>
                            <h3
                              className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
                              style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                              Project
                            </h3>
                            <p
                              className="text-gray-600 text-sm sm:text-base"
                              style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                              {project.title}
                            </p>
                          </div>

                          <div>
                            <h4
                              className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                              style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                              Client
                            </h4>
                            <p
                              className="text-gray-600 text-sm sm:text-base"
                              style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                              {project.client}
                            </p>
                          </div>

                          <div>
                            <h4
                              className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                              style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                              Location
                            </h4>
                            <p
                              className="text-gray-600 text-sm sm:text-base mb-4"
                              style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                              {project.location}
                            </p>
                          </div>

                          <p
                            className="text-gray-700 text-sm sm:text-base leading-relaxed"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            {project.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
