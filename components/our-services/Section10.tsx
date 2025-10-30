"use client";

import Image from "next/image";

export default function Section10() {
  const cards = [
    {
      title: "Electrical & Mechanical Training",
      image: "/our-services/Electrical & Mechanical Training�.png",
      items: [
        "HV/LV switching authorisation courses",
        "COHE & LOTO practical training",
        "Electrical safety awareness and risk management",
        "Mechanical system operation and maintenance",
        "Commissioning and energisation best practices",
        "Arc flash and high-energy safety awareness",

      ],
    },
    {
      title: "Safety & Leadership Development",
      image: "/our-services/Safety & Leadership�Development�.png",
      items: [
        "Safe System of Work implementation",
        "Permit office and control of work training",
        "HSEQ leadership and behavioural safety",
        "Incident prevention and human factors awareness",
        "Team leadership and supervisor development programs",
        "Digital safety and permit management workshops",

      ],
    },
    {
      title: "Competency & Assessment",
      image: "/our-services/Competency &�Assessment�.png",
      items: [
        "Authorisation and competence verification",
        "Ongoing refresher and re-certification training",
        "Performance tracking through SASTpro",
        "Client-specific course design and delivery",
        "Blended learning (classroom, practical, digital)",
        "Skills gap analysis and workforce development planning",

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
