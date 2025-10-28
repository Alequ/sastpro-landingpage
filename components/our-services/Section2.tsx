"use client";

import Image from "next/image";

export default function Section2() {
  const cards = [
    {
      title: "Electrical & Mechanical Design",
      image: "/our-services/EMDESIGN.png",
      items: [
        "HV/LV network and load studies",
        "Cable sizing, fault level, and discrimination analysis",
        "Earthing, bonding, and lightning protection design",
        "Mechanical layouts for HVAC, piping, and pumping systems",
        "3D model coordination and spatial planning",
        "Control and instrumentation design (BMS, PLC, SCADA)",
        "As-built and red-line documentation",
      ],
    },
    {
      title: "Technical & Engineering Studies",
      image: "/our-services/TESTUDIES.png",
      items: [

 
        "Protection coordination and grading studies",
        "Power quality and harmonic analysis",
        "Short-circuit, arc flash, and transient stability studies",
        "Energy efficiency and optimisation assessments",
        "Equipment selection and specification support",
        "Design verification and peer review",
        "QA/QC checks and compliance validation",
      ],
    },
    {
      title: "Project Support & Documentation",
      image: "/our-services/psdocumentation.png",
      items: [
        "Engineering packages and work packs",
        "Interface and design coordination with clients and vendors",
        "Technical drawing and data managementr",
        "Review of installation methodologies and constructability",
        "Change control and design updates",
        "O&M manuals and commissioning documentation",
        "Engineering governance and revision control",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full" style={{ maxWidth: "1600px" }}>
          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 min-h-[500px] md:min-h-[600px] lg:min-h-[400px]"
              >
                {/* Background Image - Full Card */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Overlay */}
              

                {/* Content on Top of Background */}
                <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3
                      className="text-xl sm:text-2xl md:text-2xl font-bold"
                      style={{ fontFamily: "var(--font-montserrat)", color: "#D0B970" }}
                    >
                      {card.title}
                    </h3>
                  
                  </div>

                  {/* List Items */}
                  <ul className="space-y-1.5 sm:space-y-2 pb-4">
                    {card.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-white"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                        <span
                          className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
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
