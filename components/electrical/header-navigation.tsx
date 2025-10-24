"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import RequestQuoteDialog from "./request-quote-dialog";
import Link from "next/link";

export default function HeaderNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "SASTPRO Platform", href: "/sastpro", external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-slate-800"
          : "bg-slate-900/50 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/sast-logo.svg"
              alt="SAST Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.external ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href.replace("#", ""))}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                </button>
              )
            ))}
          </div>

        

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-cyan-400 hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl shadow-cyan-500/10 mt-2 border border-slate-700">
            <div className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                link.external ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-left py-2 px-3 text-slate-300 hover:bg-slate-700/50 hover:text-cyan-400 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href.replace("#", ""))}
                    className="text-left py-2 px-3 text-slate-300 hover:bg-slate-700/50 hover:text-cyan-400 rounded-md transition-colors"
                  >
                    {link.label}
                  </button>
                )
              ))}
           
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
