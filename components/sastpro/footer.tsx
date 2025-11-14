"use client";

import {
  Shield,
  Mail,
  Linkedin,
  Twitter,
  Github,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Security", href: "#security" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-8 border-b border-border/50">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SASTPRO
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Complete platform for managing safety documents and electrical
              engineering assets in construction.
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <a
              href="mailto:contact@sastpro.com"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              contact@sastpro.com
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8">
          {/* Left: Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 SASTPRO. All rights reserved.
            </p>
          </div>

          {/* Center: Quick links */}
          <div className="flex flex-wrap items-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Right: Social + Legal */}
          <div className="flex items-center gap-6">
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card hover:bg-accent/10 hover:border-primary/30 hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-border" />

            {/* Legal links */}
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
