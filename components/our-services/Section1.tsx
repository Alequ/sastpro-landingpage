"use client";

import Image from "next/image";

export default function Section1() {
  return (
    <section className="pt-0 ">
      <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full" style={{ maxWidth: "1600px" }}>
          {/* Decorative Border Element */}
          <div className="flex justify-center w-full mb-15">
            <div
              className="bg-white border-[#D0B970]"
              style={{
                height: "40px",
                width: "100%",
                borderBottomWidth: "4px",
              }}
            />
          </div>

          {/* White Card Container */}
          <div className="bg-white rounded-lg shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="relative h-[300px]  rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/our-services/ed.png"
                    alt="Construction site with workers and cranes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 sm:space-y-8">
                {/* Title with underline */}
                <div className="space-y-0">
                  <h2
                    className="text-xl sm:text-2xl md:text-1xl lg:text-1xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Engineering & design solutions
                  </h2>
                       <p
                    className="text-base sm:text-lg md:text-xl text-gray-600 font-medium"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Precision from concept to completion.
                  </p>
                  <div className="w-full h-1 bg-[#D0B970] mt-4"></div>
               
                </div>

                {/* Content paragraphs */}
                <div className="space-y-4 sm:space-y-6">
                  <p
                    className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    S.A.S Transition provides full electrical and mechanical engineering
design support - from initial feasibility to detailed construction
documentation. Our multi-discipline engineers deliver practical,
compliant, and buildable solutions that integrate safety, performance,
and maintainability from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
