"use client";

import Image from "next/image";

export default function Section4() {
  const cards = [
    {
      title: "Commissioning & Testing Services",
      image: "/our-services/commissioning.png",
      items: [
        "Pre-commissioning inspections and system readiness checks",
        "Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT)",
        "Performance verification and functional testing",
        "Integrated system testing and coordination",
        "Defect management and punch list resolution",
        "Commissioning documentation and handover packages",
        "Post-commissioning support and optimization",
      ],
    },
    {
      title: "Training & Competency Development",
      image: "/our-services/training.png",
      items: [
        "Electrical safety training and certification",
        "Authorized Person (AP) and Competent Person (CP) training",
        "Permit to Work system training and workshops",
        "Equipment-specific operation and maintenance training",
        "COHE and safety rules implementation training",
        "Refresher courses and competency assessments",
        "Customized training programs for client requirements",
      ],
    },
    {
      title: "Compliance & Safety Audits",
      image: "/our-services/compliance.png",
      items: [
        "Regulatory compliance assessments and gap analysis",
        "Electrical installation condition reports (EICR)",
        "Safety system audits and verification",
        "Document control and record management reviews",
        "Third-party inspection coordination",
        "Non-conformance tracking and corrective actions",
        "Continuous improvement and lessons learned programs",
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
                          className="text-xs leading-relaxed"
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
