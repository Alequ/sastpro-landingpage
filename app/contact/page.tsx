import type { Metadata } from "next";
import ContactForms from "@/components/contact/contact-forms";
import HeaderNavigation from "@/components/shared/header-navigation";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Contact Us | Electrical Engineering & Safety Services",
  description:
    "Get in touch with our team for electrical engineering services, safety consultations, and emergency support. Multiple office locations across the UK.",
  keywords: [
    "contact",
    "electrical engineering contact",
    "safety services enquiry",
    "book consultation",
    "UK offices",
    "emergency electrical services",
  ],
};

export default function ContactPage() {
  return (
    <>
      <HeaderNavigation />
      <main className="theme-electrical min-h-screen">
        <ContactForms />
      </main>
      <Footer />
    </>
  );
}
