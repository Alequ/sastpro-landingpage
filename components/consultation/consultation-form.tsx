"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Home,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: "",
    location: "",
    message: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (submitStatus.type === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [submitStatus.type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your consultation request! We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          enquiryType: "",
          location: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit consultation request. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
    <div
      className="min-h-screen px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
      style={{ backgroundColor: "#c4c4c4" }}
    >
      {/* Header Section */}
      <section className="relative min-h-250 flex items-center justify-center overflow-hidden -mx-8 sm:-mx-12 md:-mx-16 lg:-mx-24 xl:-mx-32">
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
                Every solution is crafted in collaboration with you - bespoke,
                compliant, and built to perform.
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
      <section className="pt-0 mb-8">
        <div className="flex justify-center w-full">
          <div className="w-full" style={{ maxWidth: "1600px" }}>
            {/* Decorative Border Element */}
            <div className="flex justify-center w-full mb-8">
              <div
                className="bg-white border-[#D0B970]"
                style={{
                  height: "40px",
                  width: "100%",
                  borderBottomWidth: "4px",
                }}
              />
            </div>

            {/* Main Card with Text Left, Image Right */}
            <div className="bg-white shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row min-h-[350px]">
                {/* Text Content - Left Side (70% width) */}
                <div className="lg:w-[70%] p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Book a Consultation or SASTpro Demo
                      </h2>

                      <p
                        className="text-lg text-gray-600 italic font-bold"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Talk to the experts. Let's plan it right, from day one.
                      </p>
                    </div>

                    <div className="w-[90%] h-1 bg-[#D0B970]"></div>

                    <p
                      className="text-base sm:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Every great project starts with clarity. Whether it's
                      construction, commissioning, maintenance, or safety
                      strategy, S.A.S Transition offers direct consultation with
                      our technical and management teams. We'll review your
                      project, assess requirements, and show how our six core
                      services and SASTpro digital system can deliver control,
                      compliance, and performance on site.
                    </p>
                  </div>
                </div>

                {/* Image - Right Side (30% width) */}
                <div className="lg:w-[30%] relative min-h-[300px] lg:min-h-full flex items-center justify-center p-4">
                  <div className="relative w-full h-[250px]">
                    <Image
                      src="/consultation/Image 1.png"
                      alt="Consultation services"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Form Section */}
      <section className="pt-0 pb-16">
        <div className="flex justify-center w-full">
          <div className="w-full" style={{ maxWidth: "1600px" }}>
            {/* White Card Container */}
            <div className="bg-white shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Submit Your Details
              </h2>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded mb-6 ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                  }`}
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Consultation Type Field */}
                <div>
                  <label
                    htmlFor="enquiryType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Consultation Type
                  </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors bg-white appearance-none text-black"
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        color: '#000000',
                        backgroundColor: '#ffffff',
                        backgroundImage:
                          'url(\'data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"><path fill="%23666" d="M2 0L0 2h4zm0 5L0 3h4z"/></svg>\')',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        backgroundSize: "12px",
                      }}
                    >
                    <option
                      value=""
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Select consultation type
                    </option>
                    <option
                      value="construction-installation"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Construction & Installation
                    </option>
                    <option
                      value="commissioning-testing"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Commissioning & Testing
                    </option>
                    <option
                      value="maintenance-operations"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Maintenance & Operations
                    </option>
                    <option
                      value="authorised-personnel"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Authorised Personnel & Labour
                    </option>
                    <option
                      value="safety-compliance"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Safety & Compliance
                    </option>
                    <option
                      value="engineering-design"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Engineering & Design
                    </option>
                    <option
                      value="digital-solutions-sastpro"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Digital Solutions – SASTpro
                    </option>
                    <option
                      value="training-development"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Training & Development – SASTacademy
                    </option>
                  </select>
                </div>

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
                    className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors text-black bg-white"
                    style={{ fontFamily: "var(--font-montserrat)", color: '#000000', backgroundColor: '#ffffff' }}
                    placeholder="Enter your full name"
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
                    className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors text-black bg-white"
                    style={{ fontFamily: "var(--font-montserrat)", color: '#000000', backgroundColor: '#ffffff' }}
                    placeholder="Enter your company name"
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
                    className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors text-black bg-white"
                    style={{ fontFamily: "var(--font-montserrat)", color: '#000000', backgroundColor: '#ffffff' }}
                    placeholder="Enter your email address"
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
                    className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors text-black bg-white"
                    style={{ fontFamily: "var(--font-montserrat)", color: '#000000', backgroundColor: '#ffffff' }}
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Location Field */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors text-black bg-white"
                    style={{ fontFamily: "var(--font-montserrat)", color: '#000000', backgroundColor: '#ffffff' }}
                    placeholder="Enter project location"
                  />
                </div>

                {/* Message / Scope Details Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Message / Scope Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors resize-vertical text-black bg-white"
                    style={{ fontFamily: "var(--font-montserrat)", color: '#000000', backgroundColor: '#ffffff' }}
                    placeholder="Describe your project scope, requirements, or questions..."
                  />
                </div>

                {/* Upload Files Section - TEMPORARILY DISABLED */}
                {/* <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Upload Files
                  </label>
                  <div className="border-2 border-dashed border-black p-6 hover:border-[#D0B970] transition-colors">
                    <input
                      type="file"
                      id="files"
                      name="files"
                      multiple
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileChange}
                    />
                    <div className="flex justify-start">
                      <label
                        htmlFor="files"
                        className="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-300 text-black font-bold rounded-full hover:bg-gray-400 transition-colors"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Choose Files
                        <ChevronRight
                          className="ml-2 h-4 w-4"
                          strokeWidth={3}
                        />
                      </label>
                    </div>
                    <p
                      className="mt-3 text-sm text-gray-500 text-left"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Upload project documents, specifications, or requirements
                    </p>
                  </div>
                </div> */}

                {/* Submit Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-4 py-2 bg-[#D0B970] text-black font-bold rounded-full hover:bg-[#b8a55e] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                    <ChevronRight className="ml-2 h-4 w-4" strokeWidth={3} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
