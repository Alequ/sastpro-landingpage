"use client";

import Image from "next/image";

export default function Section11() {
  return (
    <section className="py-6 sm:py-8">
      <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full" style={{ maxWidth: "1600px" }}>


          {/* White Card Container */}
          <div className="bg-white shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-6 sm:space-y-8">
                {/* Title with underline */}
                <div className="space-y-0">
                  <h2
                    className="text-xl sm:text-2xl md:text-1xl lg:text-1xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Callout, fault response & technical support
                  </h2>
                  <p
                    className="text-base sm:text-lg md:text-xl text-gray-600 font-medium"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    When systems fail — we respond.
                  </p>
                  <div className="w-full h-1 bg-[#D0B970] mt-4"></div>
                </div>

                {/* Content paragraphs */}
                <div className="space-y-4 sm:space-y-6">
                  <p
                    className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                   S.A.S Transition provides 24/7 callout coverage and technical response
teams to diagnose, repair, and restore systems safely and efficiently.
Our engineers combine deep experience with live digital oversight
through SASTpro, ensuring every action is controlled and traceable.

                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="relative h-[300px] overflow-hidden shadow-xl">
                  <Image
                    src="/our-services/Callout, fault response & technical support.png"
                    alt="Compliance and documentation management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
