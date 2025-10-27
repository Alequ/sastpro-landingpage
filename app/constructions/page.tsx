import { Metadata } from "next";
import HeaderNavigation from "@/components/home/header-navigation";

export const metadata: Metadata = {
  title: "Construction Services - Expert Building Solutions",
  description: "Professional construction services for residential, commercial, and industrial projects. Expert builders delivering quality and safety.",
  keywords: "construction services, building, residential construction, commercial construction, industrial construction, project management",
};

export default function ConstructionsPage() {
  return (
    <>
      <HeaderNavigation />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">Construction Services</h1>
          <p className="mt-4 text-lg">Welcome to our construction page.</p>
        </div>
      </main>
    </>
  );
}
