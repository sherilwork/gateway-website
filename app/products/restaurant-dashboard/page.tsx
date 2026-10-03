import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { CTA } from "@/components/CTA";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Restaurant Dashboard",
  description:
    "Manage orders, items, menu, coupons, reporting, riders, deliveries and team access from one restaurant dashboard.",
  path: "/products/restaurant-dashboard",
});

const features = [
  {
    title: "Orders",
    description:
      "See incoming orders and move them through your preparation workflow.",
  },
  {
    title: "Items & Menu",
    description:
      "Keep your items and menu structure organised and current as things change.",
  },
  {
    title: "Coupons",
    description:
      "Create promotional codes to support your own offers and campaigns.",
  },
  {
    title: "Reporting",
    description:
      "Review sales and operational reporting to understand how the restaurant is performing.",
  },
  {
    title: "Riders",
    description:
      "Maintain your rider list and keep delivery assignments visible.",
  },
  {
    title: "Deliveries",
    description:
      "Track delivery activity and keep the workflow coordinated with your kitchen.",
  },
  {
    title: "Team access",
    description:
      "Control what each team member can view and manage across the dashboard.",
  },
  {
    title: "Notifications",
    description:
      "Keep your team informed as orders arrive and progress.",
  },
];

export default function RestaurantDashboardPage() {
  return (
    <>
      <PageHero
        eyebrow="Restaurant Dashboard"
        title="Run Your Restaurant From One Powerful Dashboard"
        description="A single workspace for the orders, menu, reporting, riders and team access that make up your daily operation."
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
        eyebrow="Restaurant Dashboard"
        title="One Workspace for Daily Operations"
        description="Instead of juggling disconnected tools, your team works from one dashboard. Orders, menu management, reporting, riders and deliveries all live together, with access controls that match each person's role."
        mockup={<DashboardMockup />}
        featureHeading="What Your Team Can Manage"
        featureDescription="Core operational areas, accessible from a single dashboard."
        features={features}
        ctaLabel="Explore Dashboard"
        ctaHref="/contact?intent=demo"
      />
      <CTA />
    </>
  );
}
