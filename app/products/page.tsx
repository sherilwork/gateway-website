import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { CTA } from "@/components/CTA";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Products",
  description:
    "Four connected products: a branded customer app, restaurant dashboard, rider app and the WebWrite SaaS control platform.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="One Platform. Three Core Products."
        description="The customer app, restaurant dashboard and rider app work together on shared infrastructure managed by the WebWrite SaaS control platform."
        actions={
          <>
            <ButtonLink href="/contact?intent=demo" size="lg">
              Book a Free Demo
            </ButtonLink>
            <ButtonLink href="/pricing" variant="secondary" size="lg">
              View Pricing
            </ButtonLink>
          </>
        }
      />
      <PlatformOverview />
      <CTA />
    </>
  );
}
