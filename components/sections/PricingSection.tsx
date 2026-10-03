import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/cards/PricingCard";
import { pricingPlans } from "@/lib/content/pricing";
import { cn } from "@/lib/utils";

export function PricingSection({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <section
      id="pricing"
      className={cn("ww-section scroll-mt-24 bg-white", className)}
    >
      <div className="ww-container flex flex-col gap-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans That Scale With Your Restaurant"
          description="Commercial pricing is shared during your consultation, so we can match a plan to your outlets, delivery needs and rollout timeline."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} compact={compact} />
          ))}
        </div>
        <p className="text-center text-sm text-muted">
          Pricing coming soon — talk to our team for current rates and
          onboarding timelines.
        </p>
      </div>
    </section>
  );
}
