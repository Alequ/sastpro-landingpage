"use client";

import Image from "next/image";

export default function Section8() {
  const cards = [
    {
      title: "Permit & Isolation Management",
      image: "/our-services_2/Permit & Isolation_Management_.webp",
      items: [
        "Isolation tagging and control of hazardous energy (COHE)",
        "Lock-out / tag-out tracking and verification",
        "Permit office operations",
        "Digital SSoW workflows and authorisation control",
        "Multi-user access and role-based permissions",
        "Live digital permit system (electrical, mechanical,high-risk works)",

      ],
    },
    {
      title: "Asset & Document Management",
      image: "/our-services_2/Asset & Document_Management_.webp",
      items: [
        "Asset registers and equipment history tracking",
        "Planned maintenance scheduling and logging",
        "Work order and inspection workflows",
        "Document management (RAMS, drawings, QA packs)",
        "Live reporting dashboards and KPI metrics",
        "QR and NFC tagging for field verification",

      ],
    },
    {
      title: "Training, Competency & Analytics",
      image: "/our-services_2/Training, Competency & Analytics.webp",
      items: [
        "Competency and authorisation records",
        "Digital training matrix and certificate tracking",
        "SASTacademy integration for learning verification",
        "Audit trail of safety actions and performance",
        "Live analytics for compliance and workforce metrics",
        "Cloud-based and offline capability for field environments",

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
