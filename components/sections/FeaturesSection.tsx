import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { features } from "@/lib/content/features";
import { cn } from "@/lib/utils";

export function FeaturesSection({
  limit,
  className,
}: {
  limit?: number;
  className?: string;
}) {
  const items = typeof limit === "number" ? features.slice(0, limit) : features;

  return (
    <section
      id="features"
      className={cn("ww-section scroll-mt-24 bg-white", className)}
    >
      <div className="ww-container flex flex-col gap-8">
        <SectionHeading
          eyebrow="Features"
          title="Built for Modern Restaurant Operations"
          description="The capabilities your team uses day to day, brought together in one connected platform."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
