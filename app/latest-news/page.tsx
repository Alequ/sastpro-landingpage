"use client";

import HeaderNavigation from "@/components/shared/header-navigation";
import Footer from "@/components/shared/footer";
import Image from "next/image";

export default function LatestNewsPage() {
  return (
    <>
      <HeaderNavigation />
      <main
        className="min-h-screen px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
        style={{ backgroundColor: "#c4c4c4" }}
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mx-8 sm:-mx-12 md:-mx-16 lg:-mx-24 xl:-mx-32">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/constructions/ConstructionHeader.png"
              alt="Latest news"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
            <div className="space-y-2">
              {/* Title with Squares */}
              <div className="flex items-center justify-center gap-6 lg:gap-8">
                {/* Left Squares */}
                <div className="hidden lg:flex flex-row gap-2 items-center">
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                </div>

                {/* Title */}
                <h1
                  className="font-bold tracking-[0.15em] text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  LATEST NEWS
                </h1>

                {/* Right Squares */}
                <div className="hidden lg:flex flex-row gap-2 items-center">
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                  <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                </div>
              </div>

              {/* Mobile Squares - Shown on smaller screens */}
              <div className="flex lg:hidden justify-center gap-2">
                <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
                <div className="w-5 h-5 border-2 border-[#D0B970]"></div>
              </div>

              {/* Description Text */}
              <div className="max-w-3xl mx-auto space-y-1 text-center px-4">
                <p
                  className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl lg:text-xl"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  Stay informed on how we’re delivering engineering excellence,
                </p>
                <p
                  className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl lg:text-xl"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  implementing cutting-edge solutions, and upholding the highest
                  industry standards.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* News Content Section */}
        <section className="pt-0 mb-15">
          <div className="flex justify-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
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
              <div className="bg-white shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {/* Left Column - Two Cards */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* First Card - Larger */}
                    <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md" style={{ minHeight: "400px" }}>
                      <div className="space-y-4">
                        <h3
                          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Featured News
                        </h3>
                        <div className="w-20 h-1 bg-[#D0B970]"></div>
                        <p
                          className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Stay updated with our latest achievements, project milestones, and industry insights.
                          Discover how S.A.S Transition continues to set new standards in electrical and
                          mechanical engineering excellence.
                        </p>
                      </div>
                    </div>

                    {/* Second Card - Smaller */}
                    <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md" style={{ minHeight: "200px" }}>
                      <div className="space-y-4">
                        <h3
                          className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Recent Updates
                        </h3>
                        <div className="w-16 h-1 bg-[#D0B970]"></div>
                        <p
                          className="text-sm sm:text-base text-gray-700 leading-relaxed"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Catch up on the latest developments and announcements from our team.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative order-first lg:order-last">
                    <div className="relative h-[400px] lg:h-full min-h-[400px]">
                      <Image
                        src="/constructions/ConstructionImage1.png"
                        alt="Latest news"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="h-3 bg-[#D0B970]"></div>
      <Footer />
    </>
  );
}
