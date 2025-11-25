"use client";

import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  company: {
    title: "Can We Help You?",
    links: [
   
      { label: "Book A Consultation", href: "/consultation" },
      { label: "Contact Us", href: "/contact" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  services: {
    title: "More About S.A.S Transition",
    links: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Careers", href: "/careers" },
      { label: "News And Publications", href: "/latest-news" },
      // { label: "Business customers", href: "/services/emergency" },
    ],
  },
  resources: {
    title: "S.A.S.T Tools",
    links: [
      { label: "SASTpro", href: "/consultation" },
      { label: "SASTAcademy", href: "/consultation" },
    ],
  },
  contact: {
    title: "Connect With Us",
    items: [
      {
        label: "Info@sastransition.com",
        href: "mailto:Info@sastransition.com",
        icon: Mail,
      },
      {
        label: "Estonia: Tuleviku Tee 10, Peetri, 75312 Harju Maakond",
        href: "#",
        icon: MapPin,
      },
      {
        label: "UK: 1 Marischal Square, Aberdeen, AB10 1BL",
        href: "#",
        icon: MapPin,
      },
      {
        label: "NL: Rhijnspoorplein 10-38, Amsterdam, 1018 TX, Netherlands",
        href: "#",
        icon: MapPin,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/s-a-s-transition/posts/?feedView=all",
        icon: Linkedin,
      },
    ],
    phoneNumbers: [
      { label: "+372 5886 4233", href: "tel:+37258864233" },
      // { label: "+44 1224034200", href: "tel:+441224034200" },
      // { label: "+31 202991400", href: "tel:+31202991400" },
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
    <footer style={{ backgroundColor: "#222323" }} className="text-white">
      <div
        className="section-container"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
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
            phoneNumbers={footerLinks.contact.phoneNumbers}
          />
        </div>

        {/* <Separator className="bg-gray-800 mb-2" /> */}

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} S.A.S Transition All rights reserved.
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
    <div className="space-y-4 mt-6 md:mt-0">
      <h4 className="font-bold whitespace-nowrap" style={{ color: "#D0B970" }}>
        {title}
      </h4>
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
  phoneNumbers?: Array<{
    label: string;
    href: string;
  }>;
}

function FooterContactColumn({
  title,
  items,
  phoneNumbers,
}: FooterContactColumnProps) {
  return (
    <div className="space-y-4">
      <h4 className="font-bold whitespace-nowrap" style={{ color: "#D0B970" }}>
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          const isLinkedIn = item.label === "LinkedIn";
          const isLocation = item.icon === MapPin;
          const isLastAddress =
            item.label ===
            "Rhijnspoorplein 10-38, Amsterdam, 1018 TX, Netherlands";

          return (
            <div key={item.label}>
              <li>
                {isLocation ? (
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <IconComponent
                      size={16}
                      className="flex-shrink-0"
                      style={{ color: "#D0B970" }}
                    />
                    <span>{item.label}</span>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
                    target={isLinkedIn ? "_blank" : undefined}
                    rel={isLinkedIn ? "noopener noreferrer" : undefined}
                  >
                    <IconComponent
                      size={16}
                      className="flex-shrink-0"
                      style={{ color: "#D0B970" }}
                    />
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
              {isLastAddress && phoneNumbers && (
                <li className="flex items-center gap-2 text-sm text-gray-400 mt-3">
                  <Phone
                    size={16}
                    className="flex-shrink-0"
                    style={{ color: "#D0B970" }}
                  />
                  <div className="flex items-center gap-2">
                    {phoneNumbers.map((phone, phoneIndex) => (
                      <div
                        key={phone.label}
                        className="flex items-center gap-2"
                      >
                        <Link
                          href={phone.href}
                          className="hover:text-white transition-colors duration-300"
                        >
                          {phone.label}
                        </Link>
                        {phoneIndex < phoneNumbers.length - 1 && (
                          <span className="text-gray-600">|</span>
                        )}
                      </div>
                    ))}
                  </div>
                </li>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
