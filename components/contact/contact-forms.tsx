"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Home, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Zod validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens and apostrophes"
    ),
  company: z
    .string()
    .max(200, "Company name must be less than 200 characters")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .regex(/^[\d\s()+-]+$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 characters")
    .max(20, "Phone number must be less than 20 characters")
    .optional()
    .or(z.literal("")),
  enquiryType: z.string().min(1, "Please select an enquiry type"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForms() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (submitStatus.type === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [submitStatus.type]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for contacting us! We'll get back to you soon.",
        });
        // Reset form
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
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

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden -mx-8 sm:-mx-12 md:-mx-16 lg:-mx-24 xl:-mx-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact_2/ContactUsHeader.webp"
            alt="Contact us"
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
                CONTACT US
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
                Delivering trusted, expert support from planning to completion.
                Our dedicated team ensures every system performs safely and
                efficiently.
              </p>
              <p
                className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl lg:text-xl"
                style={{
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                working safely and efficiently.
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

      {/* Info Section (Similar to Section1) */}
      <section className="pt-0 mb-15">
        <div className="flex justify-center w-full">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                {/* Left Column - Image */}
                <div className="relative">
                  <div className="relative h-[300px] overflow-hidden shadow-xl">
                    <Image
                      src="/contact_2/ContactUsImage 1.webp"
                      alt="Contact our team"
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
                      Contact S.A.S Transition
                    </h2>
                    <p
                      className="text-base sm:text-lg md:text-xl text-gray-600 font-medium"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      We’re responsive, reliable, and ready to move.
                    </p>
                    <div className="w-full h-1 bg-[#D0B970] mt-4"></div>
                  </div>

                  {/* Content paragraphs */}
                  <div className="space-y-4 sm:space-y-6">
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Whether you’re submitting documentation, requesting
                      project details, or need immediate support — we’ll get you
                      to the right person fast. From electrical and mechanical
                      projects to SASTpro integration and training, our team
                      handles every enquiry with precision and urgency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-16">
        <div className="flex justify-center w-full">
          <div className="w-full" style={{ maxWidth: "1600px" }}>
            {/* White Card Container */}
            <div className="bg-white shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                {/* Left Column - Contact Details */}
                <div className="space-y-8">
                  <div>
                    <h2
                      className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Get In Touch
                    </h2>
                    <p
                      className="text-base sm:text-lg text-gray-600 italic"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Let&apos;s get your project, your systems, and your people
                      working safely and efficiently.
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
                            href="mailto:Info@sastransition.com"
                            className="text-gray-700 hover:text-[#D0B970] transition-colors italic"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            Info@sastransition.com
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
                            +372 5886 4233
                          </a>
                          <span
                            className="text-gray-600 italic ml-2"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            (24/7 Callout)
                          </span>
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
                            Hours: Mon–Fri 08:00–18:00 | 24/7 Emergency Response
                          </p>
                        </div>
                      </div>

                      {/* Address - Estonia */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Home className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <p
                            className="text-gray-700 font-semibold"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            Estonia
                          </p>
                          <p
                            className="text-gray-700"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            Tuleviku tee 10, Peetri,
                          </p>
                          <p
                            className="text-gray-700"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            75312 Harju maakond
                          </p>
                        </div>
                      </div>

                      {/* Address - UK */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Home className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <p
                            className="text-gray-700 font-semibold"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            United Kingdom
                          </p>
                          <p
                            className="text-gray-700"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            1 Marischal Square, Aberdeen,
                          </p>
                          <p
                            className="text-gray-700"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            AB10 1BL
                          </p>
                          <p
                            className="text-gray-700"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            <a
                              href="tel:+44 1224 012923"
                              className="hover:text-[#D0B970] transition-colors"
                            >
                              +44 1224 012923
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Address - Netherlands */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Home className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <p
                            className="text-gray-700 font-semibold"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            Netherlands
                          </p>
                          <p
                            className="text-gray-700"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            Rhijnspoorplein 10-38, Amsterdam,
                          </p>
                          <p
                            className="text-gray-700"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            1018 TX
                          </p>
                          <p
                            className="text-gray-700"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            <a
                              href="tel:+31202991400"
                              className="hover:text-[#D0B970] transition-colors"
                            >
                              +31 20 2991400
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="space-y-6">
                  {/* Status Message */}
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded ${
                        submitStatus.type === "success"
                          ? "bg-green-100 text-green-800 border border-green-300"
                          : "bg-red-100 text-red-800 border border-red-300"
                      }`}
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name")}
                        className={`w-full px-4 py-3 border ${
                          errors.name ? "border-red-500" : "border-black"
                        } focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors text-black bg-white`}
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          color: "#000000",
                          backgroundColor: "#ffffff",
                        }}
                        autoComplete="name"
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          {errors.name.message}
                        </p>
                      )}
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
                        {...register("company")}
                        className={`w-full px-4 py-3 border ${
                          errors.company ? "border-red-500" : "border-black"
                        } focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors text-black bg-white`}
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          color: "#000000",
                          backgroundColor: "#ffffff",
                        }}
                        autoComplete="organization"
                        placeholder="Enter your company name"
                      />
                      {errors.company && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          {errors.company.message}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className={`w-full px-4 py-3 border ${
                          errors.email ? "border-red-500" : "border-black"
                        } focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors text-black bg-white`}
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          color: "#000000",
                          backgroundColor: "#ffffff",
                        }}
                        autoComplete="email"
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          {errors.email.message}
                        </p>
                      )}
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
                        {...register("phone")}
                        className={`w-full px-4 py-3 border ${
                          errors.phone ? "border-red-500" : "border-black"
                        } focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors text-black bg-white`}
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          color: "#000000",
                          backgroundColor: "#ffffff",
                        }}
                        autoComplete="tel"
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Enquiry Type Dropdown */}
                    <div>
                      <label
                        htmlFor="enquiryType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Enquiry Type *
                      </label>
                      <select
                        id="enquiryType"
                        {...register("enquiryType")}
                        className={`w-full px-4 py-3 border ${
                          errors.enquiryType ? "border-red-500" : "border-black"
                        } focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors bg-white appearance-none text-black`}
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          color: "#000000",
                          backgroundColor: "#ffffff",
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
                          Select an enquiry type
                        </option>
                        <option
                          value="general"
                          style={{ backgroundColor: "white", color: "black" }}
                        >
                          General Enquiry
                        </option>
                        <option
                          value="quote"
                          style={{ backgroundColor: "white", color: "black" }}
                        >
                          Request a Quote
                        </option>
                        <option
                          value="support"
                          style={{ backgroundColor: "white", color: "black" }}
                        >
                          Technical Support
                        </option>
                        <option
                          value="emergency"
                          style={{ backgroundColor: "white", color: "black" }}
                        >
                          Emergency Callout
                        </option>
                        <option
                          value="partnership"
                          style={{ backgroundColor: "white", color: "black" }}
                        >
                          Partnership Enquiry
                        </option>
                      </select>
                      {errors.enquiryType && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          {errors.enquiryType.message}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Send Message *
                      </label>
                      <textarea
                        id="message"
                        {...register("message")}
                        rows={5}
                        className={`w-full px-4 py-3 border ${
                          errors.message ? "border-red-500" : "border-black"
                        } focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors resize-vertical text-black bg-white`}
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          color: "#000000",
                          backgroundColor: "#ffffff",
                        }}
                        placeholder="Enter your message here..."
                      />
                      {errors.message && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Upload Files - TEMPORARILY DISABLED */}
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
                          id="file"
                          name="file"
                          multiple
                          className="hidden"
                          accept=".pdf,.doc,.docx,.txt"
                        />
                        <div className="flex justify-start">
                          <label
                            htmlFor="file"
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
                          Upload project documents, specifications, or
                          requirements
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
                        <ChevronRight
                          className="ml-2 h-4 w-4"
                          strokeWidth={3}
                        />
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
