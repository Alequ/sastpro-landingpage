import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance Services - Expert Solutions",
  description: "Professional maintenance services for electrical systems, equipment, and installations. Preventive and corrective maintenance solutions.",
  keywords: "maintenance services, electrical maintenance, preventive maintenance, equipment servicing, system upkeep",
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Maintenance Services</h1>
        <p className="mt-4 text-lg">Welcome to our maintenance page.</p>
      </div>
    </main>
  );
}
