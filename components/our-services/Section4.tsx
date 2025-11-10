"use client";

import Image from "next/image";

export default function Section4() {
  const cards = [
    {
      title: "Electrical Authorised personnel",
      image: "/our-services_2/Electrical Authorised_Personnel_.webp",
      items: [
        "HV & LV Authorised and Competent Persons",
        "Switching, isolation, and energisation operations",
        "Control of Hazardous Energy (COHE) and LOTO execution",
        "Safe System of Work (SSoW) implementation",
        "Permit and isolation coordination",
        "Test engineers and protection relay specialists",
        "HV Safety Rules compliance and authorisation records",
      ],
    },
    {
      title: "Mechanical & Technical Staff",
      image: "/our-services_2/Mechanical & Technical Staff_  .webp",
      items: [
        "Mechanical fitters, supervisors, and technicians",
        "Pipework, pumps, and HVAC operations",
        "Pressure system control and mechanical isolations",
        "Cooling and plant room operations",
        "Skilled commissioning engineers (electrical/mechanical)",
        "QA/QC inspectors and field verification engineers",
        "Condition monitoring and vibration specialists",
      ],
    },
    {
      title: "Site Leadership & Support",
      image: "/our-services_2/Safety Leadership &_Assurance_.webp",
      items: [
        "Construction managers and supervisors",
        "Commissioning and maintenance leads",
        "Permit coordinators and control room staff",
        "HSEQ managers and advisors",
        "Project and interface coordinators",
        "Client representatives and technical auditors",
        "Site documentation and reporting personnel",
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
