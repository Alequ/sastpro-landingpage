"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Globe, Anchor } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const serviceAreas = {
  primary: {
    title: "Primary Service Area",
    icon: MapPin,
    regions: ["North Sea Region", "Scottish Offshore", "Northeast England"],
    badge: "Main Coverage",
  },
  secondary: {
    title: "Extended Coverage",
    icon: Globe,
    regions: ["England", "Scotland", "Wales", "Northern Ireland"],
    badge: "UK Wide",
  },
  specialization: {
    title: "Specialized Services",
    icon: Anchor,
    areas: ["Offshore Platforms", "Hazardous Environments", "Remote Locations"],
    badge: "Expert",
  },
};

export default function ServiceAreas() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="section-container bg-white">
      <div ref={targetRef} className="section-header">
        <h2 className="section-title gradient-text-blue">
          Regional Coverage, National Reach
        </h2>
        <p className="section-subtitle">
          Serving clients across the UK with specialized offshore capabilities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Primary Service Area */}
        <ServiceAreaCard
          title={serviceAreas.primary.title}
          icon={serviceAreas.primary.icon}
          items={serviceAreas.primary.regions}
          badge={serviceAreas.primary.badge}
          isVisible={isIntersecting}
          delay={0}
        />

        {/* Extended Coverage */}
        <ServiceAreaCard
          title={serviceAreas.secondary.title}
          icon={serviceAreas.secondary.icon}
          items={serviceAreas.secondary.regions}
          badge={serviceAreas.secondary.badge}
          isVisible={isIntersecting}
          delay={150}
        />

        {/* Specialized Services */}
        <ServiceAreaCard
          title={serviceAreas.specialization.title}
          icon={serviceAreas.specialization.icon}
          items={serviceAreas.specialization.areas}
          badge={serviceAreas.specialization.badge}
          isVisible={isIntersecting}
          delay={300}
        />
      </div>

      {/* Map Placeholder */}
      <div
        className={`mt-16 rounded-2xl overflow-hidden border-4 border-primary/20 ${
          isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } transition-all duration-1000`}
        style={{ transitionDelay: "450ms" }}
      >
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 h-96 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin className="w-16 h-16 text-primary mx-auto" />
            <p className="text-2xl font-bold text-foreground">
              Service Coverage Map
            </p>
            <p className="text-muted-foreground">
              Comprehensive coverage across the UK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceAreaCardProps {
  title: string;
  icon: React.ElementType;
  items: string[];
  badge: string;
  isVisible: boolean;
  delay: number;
}

function ServiceAreaCard({
  title,
  icon: Icon,
  items,
  badge,
  isVisible,
  delay,
}: ServiceAreaCardProps) {
  return (
    <Card
      className={`p-8 card-hover-lift border-2 hover:border-primary hover:shadow-primary/20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            {badge}
          </Badge>
        </div>

        <h3 className="text-2xl font-bold text-foreground">{title}</h3>

        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
