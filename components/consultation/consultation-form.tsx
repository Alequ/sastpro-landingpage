"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Home, ChevronDown, ChevronRight } from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    console.log("Selected file:", selectedFile);
    // Add form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative min-h-250 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/consultation/ConsultationHeader.png"
            alt="Book a consultation"
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
               CONSULTATION PAGE
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
                Committed to clear communication and reliable project delivery.
Every solution is crafted in collaboration with you - bespoke, compliant, and built to perform.
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

      {/* Info Section */}
      <section className="pt-0">
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
            <div className="bg-white rounded-lg shadow-xl p-8 sm:p-10 md:p-12 lg:p-16 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                {/* Left Column - Image */}
                <div className="relative">
                  <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl bg-gray-50">
                    <Image
                      src="/consultation/Image 1.png"
                      alt="Consultation services"
                      fill
                      className="object-contain"
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
                      Book a Consultation or SASTpro Demo
                    </h2>
                    <p
                      className="text-base sm:text-lg md:text-xl text-gray-600 font-medium"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Talk to the experts. Let's plan it right, from day one.
                    </p>
                    <div className="w-full h-1 bg-[#D0B970] mt-4"></div>
                  </div>

                  {/* Content paragraphs */}
                  <div className="space-y-4 sm:space-y-6">
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Every great project starts with clarity. Whether it's construction, commissioning, maintenance, or
safety strategy, S.A.S Transition offers direct consultation with our technical and management teams.
We'll review your project, assess requirements, and show how our six core services and SASTpro digital
system can deliver control, compliance, and performance on site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Form Section */}
      <section className="pt-0 pb-16">
        <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="w-full" style={{ maxWidth: "1600px" }}>

            {/* White Card Container */}
            <div className="bg-white rounded-lg shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                {/* Left Column - Get In Touch & Contact Details */}
                <div className="space-y-8">
                  <div>
                    <h2
                      className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Get In Touch
                    </h2>
                    <p
                      className="text-base sm:text-lg text-gray-700 italic leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Let&apos;s get your project, your systems, and your people working safely and efficiently.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-6"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Contact Details
                    </h3>

                    <div className="space-y-6">
                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Mail className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <a
                            href="mailto:enquiries@sastransition.com"
                            className="text-gray-700 hover:text-[#D0B970] transition-colors italic"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            enquiries@sastransition.com
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Phone className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <a
                            href="tel:+37258864233"
                            className="text-gray-700 hover:text-[#D0B970] transition-colors"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            +372 5886 4233 (24/7 Callout)
                          </a>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <MapPin className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <p
                            className="text-gray-700"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            Operating Across: UK | Europe | USA
                          </p>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Clock className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <p
                            className="text-gray-700"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            Hours: Mon–Fri 08:00-18:00 | 24/7 Emergency Response
                          </p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Home className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <p
                            className="text-gray-700"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            Tuleviku tee 10, Peetri,
                            <br />
                            75312
                            <br />
                            Harju maakond
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D0B970] focus:border-transparent transition-all"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        required
                      />
                    </div>

                    {/* Company Field */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D0B970] focus:border-transparent transition-all"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D0B970] focus:border-transparent transition-all"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D0B970] focus:border-transparent transition-all"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      />
                    </div>

                    {/* Enquiry Type Dropdown */}
                    <div>
                      <label
                        htmlFor="enquiryType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Enquiry Type
                      </label>
                      <div className="relative">
                        <select
                          id="enquiryType"
                          name="enquiryType"
                          value={formData.enquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D0B970] focus:border-transparent transition-all appearance-none"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                          required
                        >
                          <option value="">Select enquiry type</option>
                          <option value="general">General Enquiry</option>
                          <option value="electrical-design">Electrical Design & Engineering</option>
                          <option value="safety-compliance">Safety & Compliance Review</option>
                          <option value="sastpro">SASTpro Platform</option>
                          <option value="maintenance">Maintenance Services</option>
                          <option value="permit-to-work">Permit to Work Systems</option>
                          <option value="emergency">Emergency Support</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Send Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D0B970] focus:border-transparent transition-all resize-none"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        required
                      />
                    </div>

                    {/* Upload Files */}
                    <div>
                      <label
                        htmlFor="file-upload"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Upload Files
                      </label>
                      <div className="flex items-center gap-4">
                        <label
                          htmlFor="file-upload"
                          className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors cursor-pointer inline-flex items-center gap-2 font-medium"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          Choose File
                          <ChevronRight className="w-4 h-4" />
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        {selectedFile && (
                          <span
                            className="text-sm text-gray-600"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            {selectedFile.name}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-[#D0B970] text-white rounded-md hover:bg-[#C0A960] transition-colors font-semibold flex items-center gap-2 group"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Submit
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
