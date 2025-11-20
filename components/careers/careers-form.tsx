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
  // Honeypot field - should always be empty
  website: z.string().max(0, "Invalid submission").optional().or(z.literal("")),
  // GDPR consent checkbox
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy to submit your application",
  }),
});

type CareersFormData = z.infer<typeof careersFormSchema>;

export default function CareersForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareersFormData>({
    resolver: zodResolver(careersFormSchema),
    mode: "onBlur",
  });

  // File upload configuration
  const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
  const MAX_FILES = 1;
  const ALLOWED_FILE_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

  // Validate file
  const validateFile = (file: File): string | null => {
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return `${file.name} is too large. Maximum size is 3MB.`;
    }

    // Check file type by extension
    const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
      return `${file.name} has an invalid file type. Only PDF, DOC, and DOCX files are allowed.`;
    }

    // Check MIME type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return `${file.name} has an invalid MIME type. Only PDF, DOC, and DOCX files are allowed.`;
    }

    return null;
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const files = event.target.files;

    if (!files || files.length === 0) return;

    // Check total file count
    if (selectedFiles.length + files.length > MAX_FILES) {
      setFileError(`You can only upload up to ${MAX_FILES} files in total.`);
      return;
    }

    const newFiles: File[] = [];
    const errors: string[] = [];

    // Validate each file
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const error = validateFile(file);

      if (error) {
        errors.push(error);
      } else {
        // Check for duplicate file names
        const isDuplicate = [...selectedFiles, ...newFiles].some(
          (existingFile) => existingFile.name === file.name
        );
        if (isDuplicate) {
          errors.push(`${file.name} is already selected.`);
        } else {
          newFiles.push(file);
        }
      }
    }

    // Display errors if any
    if (errors.length > 0) {
      setFileError(errors.join(" "));
    }

    // Add valid files to selected files
    if (newFiles.length > 0) {
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }

    // Reset input value to allow selecting the same file again after removal
    event.target.value = "";
  };

  // Remove file from selection
  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setFileError("");
  };

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
    // Validate that at least one file is uploaded
    if (selectedFiles.length === 0) {
      setFileError("Please upload a file (CV, cover letter, or certifications)");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Create FormData to handle both form fields and files
      const formData = new FormData();

      // Append form fields
      formData.append("name", data.name);
      formData.append("email", data.email);
      if (data.phone) formData.append("phone", data.phone);
      formData.append("trade", data.trade);
      formData.append("region", data.region);
      if (data.location) formData.append("location", data.location);
      if (data.message) formData.append("message", data.message);

      // Append honeypot field (should be empty)
      formData.append("website", data.website || "");

      // Append consent (GDPR)
      formData.append("consent", data.consent.toString());

      // Append files
      selectedFiles.forEach((file, index) => {
        formData.append(`files`, file);
      });

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData, // Note: Don't set Content-Type header, browser will set it with boundary
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your application! We'll review it and get back to you soon.",
        });
        // Reset form and files
        reset();
        setSelectedFiles([]);
        setFileError("");
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

              {/* Honeypot Field - Hidden from users, catches bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  {...register("website")}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Upload Files Section */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Upload File (CV, Cover Letter, or Certifications) *
                </label>
                <div className="border-2 border-dashed border-black p-6 hover:border-[#D0B970] transition-colors">
                  <input
                    type="file"
                    id="files"
                    name="files"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    disabled={selectedFiles.length >= MAX_FILES}
                  />
                  <div className="flex justify-start">
                    <label
                      htmlFor="files"
                      className={`cursor-pointer inline-flex items-center px-4 py-2 ${
                        selectedFiles.length >= MAX_FILES
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-gray-300 text-black hover:bg-gray-400"
                      } font-bold rounded-full transition-colors`}
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Choose File
                      <ChevronRight
                        className="ml-2 h-4 w-4"
                        strokeWidth={3}
                      />
                    </label>
                  </div>
                  <p
                    className="mt-3 text-sm text-gray-600 text-left"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Upload your CV, cover letter, or certifications (PDF, DOC,
                    DOCX)
                  </p>
                  <p
                    className="mt-1 text-xs text-gray-500 text-left"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Required - Maximum 3MB per file
                  </p>

                  {/* File Error Display */}
                  {fileError && (
                    <div
                      className="mt-3 p-3 bg-red-100 border border-red-300 rounded text-sm text-red-800"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {fileError}
                    </div>
                  )}

                  {/* Selected Files Display */}
                  {selectedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p
                        className="text-sm font-medium text-gray-700"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Selected File:
                      </p>
                      {selectedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 border border-gray-300 rounded"
                        >
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <svg
                              className="h-5 w-5 text-gray-500 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div className="flex-1 min-w-0">
                              <p
                                className="text-sm font-medium text-gray-900 truncate"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                              >
                                {file.name}
                              </p>
                              <p
                                className="text-xs text-gray-500"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                              >
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="ml-4 text-red-600 hover:text-red-800 transition-colors flex-shrink-0"
                            aria-label={`Remove ${file.name}`}
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* GDPR Consent Checkbox */}
              <div className="pt-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="consent"
                      {...register("consent")}
                      className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-[#D0B970] text-[#D0B970] cursor-pointer"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="consent"
                      className="text-gray-700 cursor-pointer"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      I consent to the processing of my personal data in
                      accordance with the{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D0B970] underline hover:text-[#b8a55e]"
                      >
                        Privacy Policy
                      </a>{" "}
                      and agree to be contacted regarding my application. *
                    </label>
                  </div>
                </div>
                {errors.consent && (
                  <p
                    className="mt-2 text-sm text-red-600"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {errors.consent.message}
                  </p>
                )}
              </div>

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
