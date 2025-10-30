"use client";

import Image from "next/image";

export default function Section12() {
  const cards = [
    {
      title: "Fault Response & Diagnostics",
      image: "/our-services/Fault Response &�Diagnostics�.png",
      items: [
        "24/7 emergency callout and remote technical support",
        "HV/LV fault finding and diagnostics",
        "Cable testing, VLF, and insulation checks",
        "Relay and protection fault investigation",
        "Mechanical breakdown analysis and response",
        "Incident reporting and recovery documentation",

      ],
    },
    {
      title: "On-Site Technical Support",
      image: "/our-services/On-Site Technical�Support�.png",
      items: [
        "Short-term and project-based engineering support",
        "Site supervision and permit coordination",
        "HV/LV switching and isolation services",
        "Temporary power setup and management",
        "Mechanical operations and shutdown support",
        "QA/QC inspections and equipment verification",

      ],
    },
    {
      title: "Preventative & Advisory Services",
      image: "/our-services/Preventative & Advisory Services�.png",
      items: [
        "Root cause analysis and reliability improvement",
        "Equipment health checks and condition monitoring",
        "Electrical and mechanical system audits",
        "Operational risk reviews and energy optimisation",
        "Documentation updates and procedural reviews",
        "Client-side advisory for commissioning or shutdown events",

      ],
    },
  ];

  return (
    <section className="py-6 sm:py-8">
      <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full" style={{ maxWidth: "1600px" }}>
          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[500px] md:min-h-[600px] lg:min-h-[400px] cursor-pointer"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#D0B970] opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                {/* Content on Top of Background */}
                <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3
                      className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-[#D0B970] group-hover:text-black transition-colors duration-300"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* List Items */}
                  <ul className="space-y-2 sm:space-y-2 pb-4">
                    {card.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-white group-hover:text-black transition-colors duration-300"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] group-hover:bg-black rounded-full mt-2 transition-colors duration-300"></span>
                        <span
                          className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
