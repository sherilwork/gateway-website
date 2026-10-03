import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTA } from "@/components/CTA";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";
import {
  StructuredData,
  faqSchema,
} from "@/components/StructuredData";
import { faqs } from "@/lib/content/faqs";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "WebWrite Restaurant SaaS plans for single restaurants, growing operations and multi-outlet groups. Talk to sales for current rates and onboarding timelines.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <StructuredData data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Pricing"
        title="Plans That Scale With Your Restaurant"
        description="Choose the level of platform that matches how your restaurant operates today — and where you want it to grow."
        actions={
          <>
            <ButtonLink href="/contact?intent=demo" size="lg">
              Book a Free Demo
            </ButtonLink>
            <ButtonLink href="/contact?intent=sales" variant="secondary" size="lg">
              Talk to Sales
            </ButtonLink>
          </>
        }
      />
      <PricingSection />
      <CTA />
    </>
  );
}
