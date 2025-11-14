"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Zod validation schema
const careersFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens and apostrophes"
    ),
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
  trade: z.string().min(1, "Please select your trade/discipline"),
  region: z.string().min(1, "Please select your preferred work region"),
  location: z
    .string()
    .max(200, "Location must be less than 200 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
    .optional()
    .or(z.literal("")),
});

type CareersFormData = z.infer<typeof careersFormSchema>;

export default function CareersForm() {
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
  } = useForm<CareersFormData>({
    resolver: zodResolver(careersFormSchema),
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

  const onSubmit = async (data: CareersFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/careers", {
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
          message:
            "Thank you for your application! We'll review it and get back to you soon.",
        });
        // Reset form
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.error || "Failed to submit application. Please try again.",
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
    <section className="pb-8">
      <div className="flex justify-center w-full">
        <div className="w-full" style={{ maxWidth: "1600px" }}>
          <div className="bg-white shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Application Form
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  placeholder="Enter your full name"
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

              {/* Trade/Discipline Field */}
              <div>
                <label
                  htmlFor="trade"
                  className="block text-sm font-medium text-gray-700 mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Trade / Discipline *
                </label>
                <select
                  id="trade"
                  {...register("trade")}
                  className={`w-full px-4 py-3 border ${
                    errors.trade ? "border-red-500" : "border-black"
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
                    Select your trade/discipline
                  </option>
                  <option
                    value="electrical-mechanical"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    Electrical & Mechanical Technicians
                  </option>
                  <option
                    value="hv-lv"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    HV/LV Authorised Persons & Engineers
                  </option>
                  <option
                    value="commissioning"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    Commissioning Engineers (Electrical, Mechanical, C&I)
                  </option>
                  <option
                    value="qa-qc"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    QA/QC Inspectors & Technical Leads
                  </option>
                  <option
                    value="project-management"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    Project Supervisors, Site Managers & Coordinators
                  </option>
                  <option
                    value="safety-compliance"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    Safety, Compliance & Permit Personnel
                  </option>
                  <option
                    value="digital-support"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    SASTpro Digital Support & System Specialists
                  </option>
                </select>
                {errors.trade && (
                  <p
                    className="mt-1 text-sm text-red-600"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {errors.trade.message}
                  </p>
                )}
              </div>

              {/* Preferred Work Region Field */}
              <div>
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700 mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Preferred Work / Region *
                </label>
                <select
                  id="region"
                  {...register("region")}
                  className={`w-full px-4 py-3 border ${
                    errors.region ? "border-red-500" : "border-black"
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
                    Select your preferred region
                  </option>
                  <option
                    value="uk"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    UK
                  </option>
                  <option
                    value="europe"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    Europe
                  </option>
                  <option
                    value="usa"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    USA
                  </option>
                  <option
                    value="global"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    Global
                  </option>
                </select>
                {errors.region && (
                  <p
                    className="mt-1 text-sm text-red-600"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {errors.region.message}
                  </p>
                )}
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
                  {...register("location")}
                  className={`w-full px-4 py-3 border ${
                    errors.location ? "border-red-500" : "border-black"
                  } focus:ring-2 focus:ring-[#D0B970] focus:border-[#D0B970] transition-colors text-black bg-white`}
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                  placeholder="Enter your preferred location"
                />
                {errors.location && (
                  <p
                    className="mt-1 text-sm text-red-600"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {errors.location.message}
                  </p>
                )}
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
                    Upload your CV, cover letter, and certifications
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
  );
}
