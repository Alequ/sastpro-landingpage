import { Button } from "@/components/ui/button"
import { Shield, Zap, Video } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img src="/modern-construction-site-with-electrical-equipment.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex items-center justify-center gap-2">
           
            <span className="text-2xl font-bold text-foreground">SASTPRO</span>
          </div>

          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-5xl">
            Electrical Safety & Compliance Made Simple
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            The complete platform for managing safety documents, electrical engineering assets, and compliance tracking
            in construction. Streamline your workflow and eliminate manual errors.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="text-base">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Find Out More
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              <span>OSHA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>SOC 2 Type II</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-lg border border-border bg-muted/50 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <Video className="h-20 w-20 text-muted-foreground/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
