import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="border-y border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ready to Transform Your Safety Operations?
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Join hundreds of construction companies that have modernized their document management and compliance
            tracking. Get started today with a free demo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full text-base sm:w-auto">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="w-full text-base sm:w-auto bg-transparent">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>

          <div className="mt-12 rounded-lg border border-border bg-card p-6">
            <p className="text-sm font-semibold text-card-foreground">Limited Time Offer</p>
            <p className="mt-2 text-muted-foreground">
              Get 20% off your first year when you sign up before the end of the month. Plus, free onboarding and
              training for your entire team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
