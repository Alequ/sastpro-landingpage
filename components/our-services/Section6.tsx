"use client";

import Image from "next/image";

export default function Section6() {
  const cards = [
    {
      title: "Safe Systems & Permit Management",
      image: "/our-services_2/Safe Systems & Permit Management_.webp",
      items: [
        "Safe System of Work (SSoW) implementation",
        "COHE and LOTO programs",
        "Isolation coordination and lock management",
        "Authorisation management systems",
        "Digital permit tracking through SASTpro",
        "Permit-to-Work systems (electrical, mechanical, confined space, hot work)",

      ],
    },
    {
      title: "Auditing, Governance & Compliance",
      image: "/our-services_2/Auditing, Governance & Compliance_.webp",
      items: [
        "Internal and third-party audits",
        "QA/QC inspection programs",
        "Compliance with EN, IEC, NFPA, and DNO standards",
        "Risk assessments, HAZOP, and method statement reviews",
        "Technical governance and reporting frameworks",
        "Non-conformance tracking and corrective actions",
  
      ],
    },
    {
      title: "Safety Leadership & Assurance",
      image: "/our-services_2/Safety Leadership &_Assurance_.webp",
      items: [
        "Safety rule creation and revision",
        "Toolbox talks and behavioural safety programs",
        "Competency and authorisation tracking",
        "HSEQ monitoring and performance metrics",
        "Root cause and incident investigations",
        "Continuous improvement and lessons learned programs",
  
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
