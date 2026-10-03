import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { CTA } from "@/components/CTA";
import { CustomerAppMockup } from "@/components/mockups/CustomerAppMockup";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Customer App",
  description:
    "A branded food ordering app where customers browse your menu, build a cart, place orders and track them — all under your restaurant's identity.",
  path: "/products/customer-app",
});

const features = [
  {
    title: "Branded food ordering",
    description:
      "Customers order directly from your restaurant's own app experience.",
  },
  {
    title: "Categories & products",
    description:
      "Your menu is organised into categories so customers can find items quickly.",
  },
  {
    title: "Search",
    description: "Customers can search your menu for the dishes they want.",
  },
  {
    title: "Cart",
    description:
      "A familiar cart flow lets customers review items before placing an order.",
  },
  {
    title: "Order tracking",
    description:
      "Order status stays visible as the order moves through preparation and delivery.",
  },
  {
    title: "Order history",
    description: "Customers can revisit their previous orders in the app.",
  },
  {
    title: "Notifications",
    description:
      "Order updates reach customers so they know what is happening next.",
  },
  {
    title: "Account/profile",
    description:
      "Customers manage their account details within your branded experience.",
  },
];

export default function CustomerAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer App"
        title="Your Restaurant, Right in Your Customer's Pocket"
        description="Give customers a branded ordering experience that belongs to your restaurant — not a shared marketplace."
        actions={
          <>
            <ButtonLink href="/contact?intent=demo" size="lg">
              Book a Free Demo
            </ButtonLink>
            <ButtonLink href="/products" variant="secondary" size="lg">
              All Products
            </ButtonLink>
          </>
        }
      />
      <ProductDetail
        eyebrow="Customer App"
        title="Ordering That Carries Your Brand"
        description="Customers browse your menu, add items to a cart and place an order in an app configured for your restaurant. Order updates keep them informed from confirmation through to delivery."
        mockup={<CustomerAppMockup />}
        featureHeading="What Your Customers Can Do"
        featureDescription="The customer app focuses on the essentials of ordering — presented under your own brand."
        features={features}
        ctaLabel="See Customer App"
        ctaHref="/contact?intent=demo"
      />
      <CTA />
    </>
  );
}
