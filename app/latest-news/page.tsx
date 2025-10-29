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
        <section className="pt-0 mb-8 sm:mb-12 md:mb-15">
          <div className="flex justify-center w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
              {/* Decorative Border Element */}
              <div className="flex justify-center w-full mb-8 sm:mb-12 md:mb-15">
                <div
                  className="bg-white border-[#D0B970]"
                  style={{
                    height: "40px",
                    width: "100%",
                    borderBottomWidth: "4px",
                  }}
                />
              </div>

              {/* Two Column Layout - Cards and Image */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 sm:gap-6 md:gap-8">
                {/* Left Column - Two Cards */}
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  {/* First Card - Larger */}
                  <div
                    className="bg-white shadow-xl p-4 sm:p-6 md:p-8"
                    style={{ minHeight: "350px" }}
                  >
                    <div className="space-y-4">
                      <div>
                        <h3
                          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Contractor of the month
                        </h3>
                        <p
                          className="text-sm sm:text-base italic text-gray-600 mt-2"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Awards & Recognition / Thursday 24th July
                        </p>
                      </div>
                      <div className="w-full h-1 bg-[#D0B970]"></div>
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        We’re incredibly proud to announce that our team at GRQ
                        5A has been awarded Contractor of the Month for July
                        2025 by Dornan Engineering – A Turner Company. This
                        recognition reflects the commitment, professionalism,
                        and attention to detail of our amazing on-site team and
                        stands as a testament to the consistent quality we aim
                        to deliver on every mission-critical project
                      </p>
                    </div>
                  </div>

                  {/* Second Card - Smaller */}
                  <div
                    className="group relative shadow-xl p-4 sm:p-6 md:p-8 overflow-hidden cursor-pointer"
                    style={{ minHeight: "180px" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <Image
                        src="/latest-news/LatestNewsHeader.png"
                        alt="Background"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-[#D0B970]/80 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-4 flex items-center justify-center h-full">
                      <p
                        className="text-sm sm:text-base md:text-lg text-white group-hover:text-black leading-relaxed text-center transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        A big thank you to Dornan for the acknowledgement - and
                        an even bigger thank you to our GRQ team for continuing
                        to represent S.A.S Transition at the highest standard.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative order-first lg:order-last">
                  <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] shadow-xl overflow-hidden">
                    <Image
                      src="/latest-news/ContractorOfTheMonthImage1.png"
                      alt="Contractor of the month"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Line */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div className="w-full">
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>

        {/* Skate Starter Scheme Section */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Top Card - Main Content (Full Width) */}
                <div
                  className="group relative shadow-xl p-6 sm:p-8 overflow-hidden w-full cursor-pointer"
                  style={{ minHeight: "300px" }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                      src="/latest-news/CattleSkateImage1.png"
                      alt="Skateboarding background"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-[#D0B970]/80 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4 h-full flex flex-col">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        The skate starter scheme
                      </h3>
                      <p
                        className="text-sm sm:text-base italic text-white group-hover:text-black mt-2 transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Partners & Clients / Monday 25th August
                      </p>
                    </div>
                    <div className="w-full h-1 bg-[#D0B970]"></div>
                    <div className="flex-1 flex items-center">
                      <p
                        className="text-sm sm:text-base md:text-lg text-white leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        With several of our team, including our founder Ailyn
                        Coady, growing up in Banff, Scotland, our partnership
                        with CattleSkate Academy CIC is a meaningful way for us
                        to support local young people and promote wellbeing
                        through sport. Recently, we've been working with team at
                        CattleSkate Academy CIC to deliver introductory
                        skateboarding sessions for young people in Banff as part
                        of the S.A.S Skate Starters Scheme, funded by S.A.S
                        Transition. Throughout August, the CattleSkate Academy
                        team ran seven free coaching sessions, including one for
                        a complete skating beginner. Participants explored
                        different skating positions, tested their pushing power
                        with a power push game, and learned how to safely kick
                        the board into their hands.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row - Two Cards Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {/* Left Card - Image */}
                  <div className="relative">
                    <div className="relative h-[250px] sm:h-[280px] md:h-[300px] shadow-xl overflow-hidden">
                      <Image
                        src="/latest-news/CattleSkateImage2.png"
                        alt="Young person wearing skateboarding helmet"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Card - Content with Background */}
                  <div
                    className="group relative shadow-xl p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden cursor-pointer"
                    style={{ minHeight: "250px" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <Image
                        src="/latest-news/CattleSkateImage3.png"
                        alt="Background"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-[#D0B970]/80 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      <p
                        className="text-sm sm:text-base md:text-lg text-white leading-relaxed text-center"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        The team also highlighted the importance of wearing
                        safety gear and explained how to stay safe around the
                        skatepark. To wrap up the day, everyone enjoyed a free
                        skate around the park in the sunshine. A big thank you
                        to the CattleSkate Academy CIC team and to all the
                        participants who joined the sessions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Line */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div className="w-full">
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>

        {/* Meet our founder Section */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
              {/* White Card Container */}
              <div className="bg-white shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-stretch">
                    {/* Left Column - Text Content with Title and Yellow Line */}
                    <div className="flex flex-col justify-center space-y-6">
                      {/* Title with underline */}
                      <div className="space-y-3 sm:space-y-4">
                        <h2
                          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Meet our founder: Allyn Coady
                        </h2>
                        <p
                          className="text-sm sm:text-base italic text-gray-600"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          People & Culture / Thursday 11th September
                        </p>
                        <div className="w-full h-1 bg-[#D0B970]"></div>
                      </div>

                      {/* First Paragraph */}
                      <div>
                        <p
                          className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Introducing our Founder and Company Director at S.A.S
                          Transition, Allyn Coady. Having worked as an engineer
                          in both the oil and gas industry and in data centres,
                          Allyn identified a key shortcoming: the lack of
                          rigorous health and safety protocols within the data
                          centre sector compared to its counterparts. Soon
                          after, in 2021, S.A.S Transition was founded with a
                          mission to deliver complete solutions in electrical
                          and mechanical engineering - including design, HV
                          switching, commissioning, and safety.
                        </p>
                      </div>
                    </div>

                    {/* Right Column - Video */}
                    <div
                      className="relative w-full"
                      style={{ aspectRatio: "16/10" }}
                    >
                      <video
                        className="w-full h-full object-cover"
                        controls
                        src="/videos/Post.mp4"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  {/* Full Width Text Below */}
                  <div className="mt-6 pt-4">
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Thanks to his ambition and the dedication of our
                      incredible S.A.S team, we've partnered with countless
                      clients, delivering projects that make critical
                      infrastructure safer and more compliant across Europe.
                      Learn more about Allyn, his background, and more in the
                      video!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Line */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div className="w-full">
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>

        {/* Calorie Crusher Champion Section */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch"
                style={{ minHeight: "800px" }}
              >
                {/* Left Card - Image */}
                <div className="relative">
                  <div className="relative h-full shadow-xl overflow-hidden">
                    <Image
                      src="/latest-news/CalorieCrusherImage1.png"
                      alt="Calorie crusher champion award ceremony"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Right Card - Content */}
                <div className="bg-white shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Celebrating our calorie crusher champion
                      </h3>
                      <p
                        className="text-sm sm:text-base italic text-gray-600 mt-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        People & Culture / Friday 10th October
                      </p>
                    </div>
                    <div className="w-full h-1 bg-[#D0B970]"></div>
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      At S.A.S Transition, we're committed to supporting both
                      the physical and mental wellbeing of our team. We
                      recognise that the nature of our work can be demanding,
                      and regular exercise plays a key role in helping to manage
                      stress, improve focus, and maintain a healthy mindset.
                      That's why we launched the Calorie Crusher Health &
                      Wellbeing Challenge in August to encourage everyone to
                      stay active and make time for themselves. The challenge
                      ran for one month and gave everyone a chance to turn
                      everyday exercise into a shared goal, promoting fitness,
                      friendly competition, and mental wellbeing along the way.
                      Door Monitor Kamal Wahab came out on top, burning an
                      incredible 41,099 calories in just one month. Last week,
                      we were delighted to present him with his prize (pictured
                      on the left, with MD SAP Gary Watson on the right). A
                      winning certificate, a year-long gym membership of his
                      choice, and SportsDirect store vouchers so he can keep
                      smashing his goals long after the challenge has ended.
                      Huge congratulations once again, Kamal - you deserve it!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Line */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div className="w-full">
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>

        {/* Safety Expo Aberdeen Section */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Top Card - Main Content (Full Width) */}
                <div
                  className="group relative shadow-xl p-6 sm:p-8 overflow-hidden w-full cursor-pointer"
                  style={{ minHeight: "300px" }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                      src="/latest-news/SafetyInAberdeenImage1.png"
                      alt="Safety in Aberdeen background"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-[#D0B970]/80 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4 h-full flex flex-col">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Discovering the latest in safety in Aberdeen
                      </h3>
                      <p
                        className="text-sm sm:text-base italic text-white group-hover:text-black mt-2 transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Events & Conferences / Wednesday 15th October
                      </p>
                    </div>
                    <div className="w-full h-1 bg-[#D0B970]"></div>
                    <div className="flex-1 flex items-center">
                      <p
                        className="text-sm sm:text-base md:text-lg text-white leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        The S.A.S Transition team was thrilled to attend Safety
                        Expo 2025 on Wednesday, 8 October, to explore the latest
                        innovations in safety solutions, products, and services.
                        Our HSEQ Manager, Brian Wishart, and Media and
                        Development Manager, Laurence Woods, headed to P&J Live
                        in Aberdeen last week to connect with QHSE and
                        procurement professionals and companies from around the
                        world. They spent the day connecting with existing
                        clients, building new relationships, and gaining
                        insights from talks on topics such as Safety Root Cause
                        Analysis and Safety Performance and Culture. It was also
                        a great opportunity to introduce and discuss SASTpro -
                        our live mimic and safety documentation software.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row - Two Image Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {/* Left Image Card */}
                  <div className="relative">
                    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] shadow-xl overflow-hidden">
                      <Image
                        src="/latest-news/SafetyInAberdeenImage2.png"
                        alt="Safety in Aberdeen event"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Image Card */}
                  <div className="relative">
                    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] shadow-xl overflow-hidden">
                      <Image
                        src="/latest-news/SafetyInAberdeenImage3.png"
                        alt="Safety in Aberdeen networking"
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

        {/* Horizontal Line */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div className="w-full">
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>

        {/* Hiring Beyond Technical Skills Section */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
              <div
                className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 sm:gap-6 md:gap-8 items-stretch"
                style={{ minHeight: "350px" }}
              >
                {/* Left Card - Content */}
                <div className="bg-white shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Hiring beyond technical skills
                      </h3>
                      <p
                        className="text-sm sm:text-base italic text-gray-600 mt-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        People & Culture / Wednesday 15th October
                      </p>
                    </div>
                    <div className="w-full h-1 bg-[#D0B970]"></div>
                    <div className="space-y-4">
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        When we're hiring new talent at S.A.S Transition, we always look
                        beyond certificates and years of experience. Why? While
                        these are a minimum requirement, they simply aren't
                        enough to prove that someone is the right fit for our
                        team. Many of our colleagues work in critical,
                        high-pressure environments where safety is on the line,
                        so we make it a priority to assess key competencies when
                        looking for future talent.
                      </p>
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Even if we're not currently hiring, you're welcome to
                        reach out via our contact page or send us an email at{" "}
                        <span className="font-semibold text-[#D0B970]">
                          recruitment@sastransition.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Card - Image with Overlay Text */}
                <div className="group relative shadow-xl overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                      src="/latest-news/HiringBeyondTechnicalSkillsImage1.png"
                      alt="Technical skills and teamwork"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-[#D0B970]/80 transition-colors duration-300" />
                  </div>

                  {/* Overlay Content */}
                  <div className="relative z-10 h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                    <p
                      className="text-sm sm:text-base md:text-lg text-white group-hover:text-black leading-relaxed text-center transition-colors duration-300"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      These include the ability to stay composed, collaborate
                      with others, and, most importantly, communicate
                      effectively, both within our team and with external
                      clients. If someone has all of that, as well as the
                      required skills and technical experience, then they might
                      just be a fit. Because at S.A.S Transition, we don't just need
                      technical experts — we need great communicators.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Line */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div className="w-full">
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>

        {/* DCD Connect Virginia Section */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Top Card - Main Content (Full Width) */}
                <div className="bg-white shadow-xl p-4 sm:p-6 md:p-8">
                  <div className="space-y-4">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Conferences: Where We’ve Been and Where We’re Going
                      </h3>
                      <p
                        className="text-sm sm:text-base italic text-gray-600 mt-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Events & Conferences / Monday 21st October
                      </p>
                    </div>
                    <div className="w-full h-1 bg-[#D0B970]"></div>
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      On 3-4 November, S.A.S Transition will be back in Virginia
                      for DCD{">"}Connect to network with industry leaders and
                      showcase who we are and what we do. Whether it's inspiring
                      future talent at Võru Tulevikku in Tallinn, exchanging
                      insights on safety and sustainability at the Offshore
                      Energies UK HSE Conference in Aberdeen, or connecting with
                      data centre experts at DCD{">"}Connect in Virginia, we
                      always make it a priority to be present at conferences and
                      events around the world whenever we can.
                    </p>
                  </div>
                </div>

                {/* Bottom Row - Three Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {/* First Image */}
                  <div className="relative">
                    <div className="relative h-[250px] sm:h-[280px] md:h-[300px] shadow-xl overflow-hidden">
                      <Image
                        src="/latest-news/DCDConnectImage1.png"
                        alt="DCD Connect networking event"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Second Image */}
                  <div className="relative">
                    <div className="relative h-[300px] shadow-xl overflow-hidden">
                      <Image
                        src="/latest-news/DCDConnectImage2.png"
                        alt="DCD Connect conference presentation"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Third Image */}
                  <div className="relative">
                    <div className="relative h-[300px] shadow-xl overflow-hidden">
                      <Image
                        src="/latest-news/DCDConnectImage3.png"
                        alt="DCD Connect team meeting"
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

        {/* Horizontal Line */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div className="w-full">
              <hr className="border-t-2 border-black" />
            </div>
          </div>
        </section>

        {/* Expanding Services Section */}
        <section
          className="pb-16 sm:pb-20 md:pb-24 lg:pb-32"
          style={{ paddingTop: "20px" }}
        >
          <div className="flex justify-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
                style={{ minHeight: "500px" }}
              >
                {/* Left Card - Content */}
                <div className="bg-white shadow-xl p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Expanding our services: Call-outs now available
                      </h3>
                      <p
                        className="text-sm sm:text-base italic text-gray-600 mt-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Our services / Friday 10th October
                      </p>
                    </div>
                    <div className="w-full h-1 bg-[#D0B970]"></div>
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      We can be on your project in a matter of hours. At S.A.S
                      Transition, we recognise that downtime on critical
                      projects isn't an option. That's why we now offer a
                      dedicated call-out service for clients who need urgent
                      on-site support from qualified engineers, often within
                      hours. Just one month ago, we were contacted on a Saturday
                      evening by a client who urgently needed an Authorised
                      Engineer after their original engineer became unavailable.
                      The project couldn't afford to stop. Within hours, our
                      team responded, confirmed the scope of support required,
                      and connected them with the right engineer from our
                      network. By Monday morning, our engineer was on site,
                      fully briefed and ready to integrate with the client's
                      team. Here's an example of our call-out service in action:
                      Just one month ago, we were contacted on a Saturday
                      evening by a client who urgently needed an Authorised
                      Engineer after their original engineer became unavailable.
                      Within hours, our team responded, confirmed the scope of
                      support required, and connected them with the right
                      engineer from our network. By Monday morning, our engineer
                      was on site, fully briefed and ready to integrate with the
                      client's team.
                    </p>
                  </div>
                </div>

                {/* Right Card - Image */}
                <div className="relative">
                  <div className="relative h-full shadow-xl overflow-hidden">
                    <Image
                      src="/latest-news/ExpandingOurServicesImage1.png"
                      alt="Engineer working on site with safety equipment"
                      fill
                      className="object-cover"
                    />
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
