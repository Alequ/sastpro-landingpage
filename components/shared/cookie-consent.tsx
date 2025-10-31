"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0d1111] border-t-2 border-[#D0B970] shadow-lg">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p
              className="text-white text-sm sm:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking "Accept
              All", you consent to our use of cookies.{" "}
              <Link
                href="/cookie-policy"
                className="text-[#D0B970] hover:underline font-medium"
              >
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={declineCookies}
              className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-white border border-white hover:bg-white hover:text-black transition-colors duration-300"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium bg-[#D0B970] text-black hover:bg-[#b8a55e] transition-colors duration-300"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
