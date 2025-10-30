"use client";

import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  company: {
    title: "Can we help you?",
    links: [
      { label: "General enquiries", href: "/contact" },
      { label: "Book a consultation", href: "/consultation" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  services: {
    title: "More about S.A.S Transition",
    links: [
      { label: "Who we are", href: "/who-we-are" },
      { label: "Careers", href: "/careers" },
      { label: "News and Publications", href: "/latest-news" },
      // { label: "Business customers", href: "/services/emergency" },
    ],
  },
  resources: {
    title: "S.A.S.T Tools",
    links: [
      { label: "SASTpro", href: "/consultation" },
      { label: "SastAcademy", href: "/consultation" },
    ],
  },
  contact: {
    title: "Connect with us",
    items: [
      { label: "enquiries@sastransition.com", href: "mailto:enquiries@sastransition.com", icon: Mail },
      { label: "Tuleviku tee 10, Peetri, 75312 Harju maakond", href: "#", icon: MapPin },
      { label: "+372 5886 4233", href: "tel:+37258864233", icon: Phone },
      { label: "1 Marischal Square, Aberdeen, AB10 1BL", href: "#", icon: MapPin },
      { label: "+44 1224034200", href: "tel:+441224034200", icon: Phone },
      { label: "Rhijnspoorplein 10-38, Amsterdam, 1018 TX, Netherlands", href: "#", icon: MapPin },
      { label: "+31 202991400", href: "tel:+31202991400", icon: Phone },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/s-a-s-transition/posts/?feedView=all", icon: Linkedin },
    ],
  },
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

// const legalLinks = [
//   { label: "Privacy Policy", href: "/privacy" },
//   { label: "Terms & Conditions", href: "/terms" },
//   { label: "Cookie Policy", href: "/cookies" },
// ];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#223232" }} className="text-white">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between">
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

        {/* <Separator className="bg-gray-800 mb-2" /> */}

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Electrical Services. All rights reserved.
          </p>

          {/* <div className="flex flex-wrap gap-6 justify-center">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div> */}
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
          const isLinkedIn = item.label === "LinkedIn";
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
                target={isLinkedIn ? "_blank" : undefined}
                rel={isLinkedIn ? "noopener noreferrer" : undefined}
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
