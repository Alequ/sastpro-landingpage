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
          <div className="mb-8 flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center">
                <div className="h-6 w-6 rounded-full border border-[#D4AF37]" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-[#D4AF37] tracking-wide">S.A.S TRANSITION</div>
                <div className="text-[10px] text-muted-foreground tracking-wider">SAST TRANSITION ENGINEERING & SERVICES</div>
              </div>
            </div>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
            <span className="text-white">ELECTRICAL</span>{" "}
            <span className="text-[#D4AF37]">MECHANICAL</span>{" "}
            <span className="text-white">TURNKEY</span>
            <br />
            <span className="text-white">ENGINEERING</span>{" "}
            <span className="text-[#D4AF37]">SOLUTIONS</span>
          </h1>

          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="text-base bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold">
              SASTpro
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent border-white/30 hover:bg-white/10 text-white">
              Data Centres
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
