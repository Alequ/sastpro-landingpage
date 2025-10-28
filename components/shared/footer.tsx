"use client";

import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  company: {
    title: "Can we help you?",
    links: [
      { label: "General enquiries", href: "/about" },
      { label: "Book a consultation", href: "/team" },
      { label: "Contact Us", href: "/careers" },
    ],
  },
  services: {
    title: "More about S.A.S Transition",
    links: [
      { label: "About Us", href: "/services/electrical" },
      { label: "Careers", href: "/services/maintenance" },
      { label: "News and Publications", href: "/services/safety" },
      { label: "Business customers", href: "/services/emergency" },
    ],
  },
  resources: {
    title: "S.A.S.T Tools",
    links: [
      { label: "SASTpro", href: "/case-studies" },
      { label: "SastAcademy", href: "/downloads" },
    ],
  },
  contact: {
    title: "Connect with us",
    items: [
      { label: "info@sastransition.com", href: "mailto:info@sastransition.com", icon: Mail },
      { label: "123 Business Street, Aberdeen, UK", href: "#", icon: MapPin },
      { label: "+44 1234 567890", href: "tel:+441234567890", icon: Phone },
      { label: "LinkedIn", href: "https://linkedin.com/company/sastransition", icon: Linkedin },
    ],
  },
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#223232" }} className="text-white">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-12">
          {/* Links Columns */}
          <FooterColumn
            title={footerLinks.company.title}
            links={footerLinks.company.links}
          />
          <FooterColumn
            title={footerLinks.services.title}
            links={footerLinks.services.links}
          />
          <FooterColumn
            title={footerLinks.resources.title}
            links={footerLinks.resources.links}
          />
          <FooterContactColumn
            title={footerLinks.contact.title}
            items={footerLinks.contact.items}
          />
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
          <p className="text-sm text-gray-400">
            © {currentYear} Electrical Services. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <h4 className="font-bold whitespace-nowrap" style={{ color: "#D0B970" }}>{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface FooterContactColumnProps {
  title: string;
  items: Array<{ 
    label: string; 
    href: string; 
    icon: React.ComponentType<any>;
  }>;
}

function FooterContactColumn({ title, items }: FooterContactColumnProps) {
  return (
    <div className="space-y-4">
      <h4 className="font-bold whitespace-nowrap" style={{ color: "#D0B970" }}>{title}</h4>
      <ul className="space-y-3">
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <IconComponent size={16} className="flex-shrink-0" style={{ color: "#D0B970" }} />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
