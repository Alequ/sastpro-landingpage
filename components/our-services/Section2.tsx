"use client";

import Image from "next/image";

export default function Section2() {
  const cards = [
    {
      title: "Electrical Systems",
      image: "/our-services/card-1.jpg",
      items: [
        "High voltage distribution and management",
        "Power generation and backup systems",
        "Smart grid integration solutions",
        "Energy efficiency optimization",
        "Renewable energy connections",
        "Emergency power restoration",
        "System monitoring and diagnostics",
      ],
    },
    {
      title: "Safety & Compliance",
      image: "/our-services/card-2.jpg",
      items: [
        "Comprehensive safety audits",
        "Regulatory compliance assessments",
        "Risk mitigation strategies",
        "Safety training programs",
        "Documentation and reporting",
        "Emergency response planning",
        "Industry standard certification",
      ],
    },
    {
      title: "Maintenance Services",
      image: "/our-services/card-3.jpg",
      items: [
        "Preventive maintenance scheduling",
        "Equipment inspection and testing",
        "Fault diagnosis and repair",
        "Component replacement services",
        "Performance optimization",
        "24/7 emergency support",
        "Long-term maintenance contracts",
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
                className="relative rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 aspect-square"
              >
                {/* Background Image - Full Card */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content on Top of Background */}
                <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3
                      className="text-xl sm:text-2xl md:text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {card.title}
                    </h3>
                    <div className="w-16 h-1 bg-[#D0B970] mt-2"></div>
                  </div>

                  {/* List Items */}
                  <ul className="space-y-2 sm:space-y-3">
                    {card.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-white"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                        <span
                          className="text-xs sm:text-sm leading-relaxed"
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
