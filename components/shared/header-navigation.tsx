"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Linkedin } from "lucide-react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function HeaderNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: "HOME", href: "/" },
    {
      label: "WHO WE ARE",
      dropdown: [
        { label: "Who we are", href: "/who-we-are" },
        { label: "Our Team", href: "/who-we-are#team" },
        { label: "Latest News", href: "/latest-news" },

      ],
    },
    {
      label: "OUR SERVICES",
      dropdown: [
        { label: "Our Services Overview", href: "/our-services" },
        { label: "Engineering and Design Solutions", href: "/our-services#engineering-design" },
        { label: "Authorised and Competent Personnel", href: "/our-services#authorised-personnel" },
        { label: "Safety, Compliance and Management Systems", href: "/our-services#safety-compliance" },
        { label: "Digital Solutions - SASTPro", href: "/our-services#digital-solutions" },
        { label: "Training and Development - Sastacademy", href: "/our-services#training-development" },
        { label: "Callout, Fault Response and Technical Support", href: "/our-services#callout-support" },
      ],
    },
    {
      label: "SECTORS",
      dropdown: [
        { label: "Commissioning", href: "/commissioning" },
        { label: "Maintenance", href: "/maintenance" },
        { label: "Construction", href: "/constructions" },
      ],
    },
    {
      label: "CONTACT US",
      dropdown: [
        { label: "General Enquiries", href: "/contact" },
        { label: "Book A Consultation", href: "/consultation" },
        { label: "Careers", href: "/careers" },
        //{ label: "Office Locations", href: "#locations" },
      ],
    },
  ];

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#0d1111]/95 backdrop-blur-md shadow-lg border-b border-neutral-800"
          : "bg-[#0d1111]/90 backdrop-blur-sm"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/home/Logo.svg"
              alt="SAST Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="text-sm font-medium text-white hover:text-yellow-500 transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-1 w-56 z-50">
                      <div className="bg-black border border-neutral-800 rounded-md shadow-lg py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-neutral-900 hover:text-yellow-500 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  className="text-sm font-medium text-white hover:text-yellow-500 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* LinkedIn Icon - Hidden */}
            {/* <a
              href="https://www.linkedin.com/company/your-company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-yellow-500 transition-colors"
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
          <div className="lg:hidden py-4 bg-black border-t border-neutral-800">
            <div className="flex flex-col space-y-2 px-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => toggleMobileDropdown(link.label)}
                      className="w-full text-left py-2 px-3 text-white hover:bg-neutral-900 hover:text-yellow-500 rounded-md transition-colors flex items-center justify-between"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openMobileDropdown === link.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {openMobileDropdown === link.label && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block py-2 px-3 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-yellow-500 rounded-md transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    className="text-left py-2 px-3 text-white hover:bg-neutral-900 hover:text-yellow-500 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Mobile LinkedIn Link - Hidden */}
              {/* <a
                href="https://www.linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left py-2 px-3 text-white hover:bg-neutral-900 hover:text-yellow-500 rounded-md transition-colors flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
