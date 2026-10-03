import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { CTA } from "@/components/CTA";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";
import {
  StructuredData,
  faqSchema,
} from "@/components/StructuredData";
import { faqs } from "@/lib/content/faqs";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  description:
    "Answers about branded apps, dashboards, rider management, branding, team access, multi-restaurant setups, payments and onboarding with WebWrite Restaurant SaaS.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <StructuredData data={faqSchema(faqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="If your question isn't answered here, our team is happy to help directly."
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
      <FaqSection />
      <CTA />
    </>
  );
}
