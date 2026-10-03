import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTA } from "@/components/CTA";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Features",
  description:
    "Explore the WebWrite Restaurant SaaS feature set — online ordering, menu and item management, order management, riders, delivery, reporting, team permissions and app management.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Built for Modern Restaurant Operations"
        description="Every capability your restaurant needs to take orders, manage delivery and understand how the business is performing — in one connected platform."
        actions={
          <>
            <ButtonLink href="/contact?intent=demo" size="lg">
              Book a Free Demo
            </ButtonLink>
            <ButtonLink href="/products" variant="secondary" size="lg">
              Explore Platform
            </ButtonLink>
          </>
        }
      />
      <FeaturesSection />
      <CTA />
    </>
  );
}
