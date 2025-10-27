import { Metadata } from "next";
import HeaderNavigation from "@/components/home/header-navigation";

export const metadata: Metadata = {
  title: "Commissioning Services - Expert Solutions",
  description: "Professional commissioning services for electrical systems, installations, and infrastructure. Ensuring quality and compliance.",
  keywords: "commissioning services, electrical commissioning, system testing, installation verification, quality assurance",
};

export default function CommissioningPage() {
  return (
    <>
      <HeaderNavigation />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">Commissioning Services</h1>
          <p className="mt-4 text-lg">Welcome to our commissioning page.</p>
        </div>
      </main>
    </>
  );
}
