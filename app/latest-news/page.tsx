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
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden -mx-8 sm:-mx-12 md:-mx-16 lg:-mx-24 xl:-mx-32">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/latest-news_2/LatestNewsHeader.webp"
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
          <div className="flex justify-center w-full">
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

              {/* Two Column Layout - Text and Image */}
              <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 sm:gap-6 md:gap-8">
                {/* Left Column - Text Content */}
                <div className="bg-white shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        S.A.S Transition Earns Gazelle Status
                      </h3>
                      <p
                        className="text-sm sm:text-base italic text-gray-600 mt-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Awards & Recognition / Friday 21st November
                      </p>
                    </div>
                    <div className="w-full h-1 bg-[#D0B970]"></div>
                    <div className="space-y-4">
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Only 1% of Estonian companies earn Gazelle status, and S.A.S Transition is now one of them.
                      </p>
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        We're extremely proud to share that we've recently been recognised as a Gazelle company in Estonia! What does it mean?
                      </p>
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        A Gazelle company is one that experiences rapid growth over a three-year period, creates most new jobs, and exemplifies the key characteristics of a fast-growing organisation.
                      </p>
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        With less than 1% of Estonian companies achieving this status, we're honoured to be part of such a select group.
                      </p>
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Thank you to the entire S.A.S Transition team for your continued hard work and dedication in getting us here.
                      </p>
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-semibold"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        The best part? We're only just getting started.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative order-first lg:order-last">
                  <div className="relative h-[400px] lg:h-full min-h-[400px] shadow-xl overflow-hidden">
                    <Image
                      src="/latest-news_2/sast-gazzele.jpg"
                      alt="S.A.S Transition Gazelle Status Award"
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

        {/* Spot The Hazard with Dornan Section */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
              {/* Two Column Layout - Image and Text */}
              <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 sm:gap-6 md:gap-8">
                {/* Left Column - Image */}
                <div className="relative">
                  <div className="relative h-[400px] lg:h-full min-h-[400px] shadow-xl overflow-hidden">
                    <Image
                      src="/latest-news_2/spot-the-hazard-sast.jpg"
                      alt="Spot The Hazard with Dornan"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Right Column - Text Content */}
                <div className="bg-white shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Spot The Hazard with Dornan!
                      </h3>
                      <p
                        className="text-sm sm:text-base italic text-gray-600 mt-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Partners & Clients / Friday 6th November
                      </p>
                    </div>
                    <div className="w-full h-1 bg-[#D0B970]"></div>
                    <div className="space-y-4">
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Recently, we teamed up with our partners at Dornan to challenge the team with a Spot the Hazard quiz.
                      </p>
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        As part of the activity, participants were asked to identify multiple hazards within an electrical room scenario.
                      </p>
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        As the key lead for on-site energisations and Hazard Energy Awareness Training (HEAT), the S.A.S Transition team were there to interact with personnel about potential hazards in the electrical room, how to identify them, and what to look out for in real-world situations.
                      </p>
                      <p
                        className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        A huge thanks to everyone who took part, and congratulations to the winner who took home an iPad for their impressive hazard-spotting skills!
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

        {/* DCD>Connect Virginia Day Section */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
              {/* Two Column Layout - Text and Image */}
              <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 sm:gap-6 md:gap-8">
                {/* Left Column - Text Content */}
                <div className="bg-white shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        DCD{">"}Connect Virginia Day
                      </h3>
                      <p
                        className="text-sm sm:text-base italic text-gray-600 mt-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Events & Conferences / Tuesday 4th November
                      </p>
                    </div>
                    <div className="w-full h-1 bg-[#D0B970]"></div>
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      In November, our S.A.S Transition Team, Company Director Allyn Coady, Business Development Manager Matthew Sellars, Media Development Manager Laurence Woods, attended DatacenterDynamics{">"}Connect in Virginia, a leading industry event focused on data‑centre operations, innovation, and networking.
                    </p>
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      From inspiring talks and insightful conversations to some great compliments on their kilts (their favourite part, of course!), the team had a fantastic time at the event, catching up with familiar faces and making new connections.
                    </p>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative order-first lg:order-last">
                  <div className="relative h-[400px] lg:h-full min-h-[400px] shadow-xl overflow-hidden">
                    <Image
                      src="/latest-news_2/dcd-sast.jpg"
                      alt="DCD Connect Virginia Day"
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

        {/* Expanding Services Section */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
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
                        Expanding Our Services: Call-outs Now Available
                      </h3>
                      <p
                        className="text-sm sm:text-base italic text-gray-600 mt-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Our Services / Friday 10th October
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
                      src="/latest-news_2/ExpandingOurServicesImage1.webp"
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
          <div className="flex justify-center w-full">
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
                      src="/latest-news_2/SafetyInAberdeenImage1.webp"
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
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-black transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Discovering the Latest in Safety in Aberdeen
                      </h3>
                      <p
                        className="text-sm sm:text-base italic text-white group-hover:text-black mt-2 transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Events & Conferences / Wednesday 15th October
                      </p>
                    </div>
                    <div className="w-full h-1 bg-[#D0B970] group-hover:bg-black transition-colors duration-300"></div>
                    <div className="flex-1 flex items-center">
                      <p
                        className="text-sm sm:text-base md:text-lg text-white group-hover:text-black leading-relaxed transition-colors duration-300"
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
                        src="/latest-news_2/SafetyInAberdeenImage2.webp"
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
                        src="/latest-news_2/SafetyInAberdeenImage3.webp"
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

        {/* Calorie Crusher Champion Section */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch"
                style={{ minHeight: "800px" }}
              >
                {/* Left Card - Image */}
                <div className="relative">
                  <div className="relative h-[600px] lg:h-full min-h-[600px] shadow-xl overflow-hidden">
                    <Image
                      src="/latest-news_2/CalorieCrusherImage1.webp"
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
                        Celebrating Our Calorie Crusher Champion
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

        {/* Meet our founder Section */}
        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="flex justify-center w-full">
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
                          Meet Our Founder: Allyn Coady
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
                        src="/videos/Post_2.mp4"
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

        {/* Contractor of the Month Section */}
        <section
          className="pb-16 sm:pb-20 md:pb-24 lg:pb-32"
          style={{ paddingTop: "20px" }}
        >
          <div className="flex justify-center w-full">
            <div className="w-full" style={{ maxWidth: "1400px" }}>
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
                          Contractor of the Month
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
                        We're incredibly proud to announce that our team at GRQ
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
                        src="/latest-news_2/LatestNewsHeader.webp"
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
                  <div className="relative h-[600px] lg:h-full min-h-[600px] lg:min-h-[400px] shadow-xl overflow-hidden">
                    <Image
                      src="/latest-news_2/ContractorOfTheMonthImage1.webp"
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
      </main>
      <div className="h-3 bg-[#D0B970]"></div>
      <Footer />
    </>
  );
}
