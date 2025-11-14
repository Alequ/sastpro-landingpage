"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  ShieldCheck,
  FileCheck,
  Briefcase,
  UserCheck,
  Settings,
  AlertTriangle,
  Waves,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const certifications = [
  {
    name: "ISO 9001:2015",
    icon: Award,
    description: "Quality Management Systems",
    color: "blue",
  },
  {
    name: "NICEIC Approved",
    icon: ShieldCheck,
    description: "Electrical Contractor Certification",
    color: "green",
  },
  {
    name: "ConstructionLine Gold",
    icon: Briefcase,
    description: "Pre-Qualification Service",
    color: "amber",
  },
  {
    name: "SafeContractor",
    icon: AlertTriangle,
    description: "Health & Safety Assessment",
    color: "red",
  },
  {
    name: "CHAS Accredited",
    icon: FileCheck,
    description: "Contractors Health and Safety",
    color: "purple",
  },
  {
    name: "ECS Card Scheme",
    icon: UserCheck,
    description: "Electrotechnical Certification",
    color: "cyan",
  },
  {
    name: "IOSH Certified",
    icon: Settings,
    description: "Occupational Safety & Health",
    color: "indigo",
  },
  {
    name: "OPITO Approved",
    icon: Waves,
    description: "Offshore Survival Training",
    color: "teal",
  },
];

const colorClasses = {
  blue: "from-blue-600 to-blue-700",
  green: "from-green-600 to-green-700",
  amber: "from-amber-600 to-amber-700",
  red: "from-red-600 to-red-700",
  purple: "from-purple-600 to-purple-700",
  cyan: "from-cyan-600 to-cyan-700",
  indigo: "from-indigo-600 to-indigo-700",
  teal: "from-teal-600 to-teal-700",
};

export default function CertificationsSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="section-container bg-white">
      <div ref={targetRef} className="section-header">
        <h2 className="section-title gradient-text-blue">
          Trusted & Certified
        </h2>
        <p className="section-subtitle">
          Accredited by leading industry bodies to ensure the highest standards
          of quality and safety
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            certification={cert}
            isVisible={isIntersecting}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}

interface CertificationCardProps {
  certification: (typeof certifications)[0];
  isVisible: boolean;
  delay: number;
}

function CertificationCard({
  certification,
  isVisible,
  delay,
}: CertificationCardProps) {
  const { name, icon: Icon, description, color } = certification;

  return (
    <Card
      className={`p-6 card-hover-lift border-2 hover:border-primary hover:shadow-primary/20 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      } transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="space-y-4 text-center">
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${
            colorClasses[color as keyof typeof colorClasses]
          } flex items-center justify-center mx-auto`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-foreground">{name}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>

        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
          Certified
        </Badge>
      </div>
    </Card>
  );
}
