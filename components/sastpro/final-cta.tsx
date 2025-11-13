"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Rocket,
  CheckCircle2,
  Gift,
  Clock,
  Shield,
  Zap,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: CheckCircle2, text: "No credit card required" },
    { icon: Clock, text: "14-day free trial" },
    { icon: Shield, text: "Cancel anytime" },
  ];

  const bonuses = [
    { icon: Gift, text: "Free onboarding session" },
    { icon: Zap, text: "Priority support included" },
    { icon: Sparkles, text: "Full team training" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-border bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 py-24 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-primary/20 via-accent/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Floating elements */}
      <div
        className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-purple-500/20 px-4 py-1.5 text-sm font-medium text-primary border border-primary/30 ${
                isVisible
                  ? "animate-in fade-in zoom-in duration-500"
                  : "opacity-0"
              }`}
            >
              <Rocket className="h-4 w-4" />
              <span>Ready to Get Started?</span>
            </div>
          </div>

          {/* Main heading */}
          <div
            className={`text-center ${
              isVisible
                ? "animate-in fade-in slide-in-from-bottom duration-700 delay-100"
                : "opacity-0"
            }`}
          >
            <h2 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Ready to{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent animate-gradient">
                  Transform
                </span>
                <span className="absolute bottom-2 left-0 h-4 w-full bg-gradient-to-r from-primary/30 via-accent/30 to-purple-500/30 blur-lg" />
              </span>
              <br />
              Your Safety Operations?
            </h2>
            <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of construction companies that have modernized their
              document management and compliance tracking. Get started today
              with a free demo.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row ${
              isVisible
                ? "animate-in fade-in slide-in-from-bottom duration-700 delay-300"
                : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="group relative w-full text-base sm:w-auto bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-right transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Schedule a Demo
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group w-full text-base sm:w-auto bg-transparent border-2 hover:bg-card hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Benefits badges */}
          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-4 ${
              isVisible
                ? "animate-in fade-in slide-in-from-bottom duration-700 delay-500"
                : "opacity-0"
            }`}
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit.text}
                className="inline-flex items-center gap-2 rounded-full bg-background/80 border border-border/50 px-4 py-2 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <benefit.icon className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-foreground">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* Limited Time Offer Card */}
          <div
            className={`mt-16 relative ${
              isVisible
                ? "animate-in fade-in slide-in-from-bottom duration-700 delay-700"
                : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 p-8 backdrop-blur-sm overflow-hidden">
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/30 to-transparent rounded-bl-full" />

              {/* Content */}
              <div className="relative">
                {/* Header with icon */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg flex-shrink-0">
                    <Gift className="h-7 w-7 text-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Limited Time Offer
                      <span className="ml-2 inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white animate-pulse">
                        20% OFF
                      </span>
                    </h3>
                    <p className="text-muted-foreground">
                      Get 20% off your first year when you sign up before the
                      end of the month.
                    </p>
                  </div>
                </div>

                {/* Bonus features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {bonuses.map((bonus) => (
                    <div
                      key={bonus.text}
                      className="flex items-center gap-3 rounded-lg bg-background/50 border border-border/50 p-4 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0">
                        <bonus.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {bonus.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Urgency text */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-orange-600 dark:text-orange-400 font-medium">
                  <Clock className="h-4 w-4 animate-pulse" />
                  <span>Offer ends in 8 days • Limited spots available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div
            className={`mt-12 text-center ${
              isVisible
                ? "animate-in fade-in zoom-in duration-700 delay-1000"
                : "opacity-0"
            }`}
          >
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by 500+ construction companies worldwide
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-foreground">
                  SOC 2 Certified
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-foreground">
                  99.9% Uptime
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-foreground">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
