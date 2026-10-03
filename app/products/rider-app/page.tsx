import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { CTA } from "@/components/CTA";
import { RiderAppMockup } from "@/components/mockups/RiderAppMockup";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Rider App",
  description:
    "A dedicated rider app for picking up delivery work, claiming orders and keeping delivery status updated from pickup to drop-off.",
  path: "/products/rider-app",
});

const features = [
  {
    title: "Rider login",
    description: "Riders sign in to access the deliveries assigned to them.",
  },
  {
    title: "Available orders",
    description:
      "New delivery work becomes visible to riders as orders are ready.",
  },
  {
    title: "Claim order",
    description:
      "A rider can claim a delivery so it is clearly owned by one person.",
  },
  {
    title: "Active delivery",
    description:
      "The current delivery stays front and centre while it is in progress.",
  },
  {
    title: "Order status",
    description:
      "Riders update the order's status as it moves toward the customer.",
  },
  {
    title: "Delivery verification",
    description:
      "Completing a delivery is confirmed through the app rather than assumed.",
  },
  {
    title: "Notifications",
    description: "Riders are notified when new delivery work is available.",
  },
  {
    title: "Location-related workflow",
    description:
      "Delivery steps follow the pickup-to-drop-off journey your riders follow.",
  },
];

export default function RiderAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Rider App"
        title="Keep Delivery Under Control"
        description="Give your riders a focused app for picking up work and keeping every delivery's status accurate."
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
        eyebrow="Rider App"
        title="A Clear Path From Pickup to Drop-Off"
        description="Riders see the work available to them, claim a delivery and update its status as they go. Your dashboard stays in step, so your team always knows where an order is."
        mockup={<RiderAppMockup />}
        mockupFirst
        featureHeading="What Your Riders Can Do"
        featureDescription="The essentials of delivery work, in a focused rider experience."
        features={features}
        ctaLabel="Explore Rider App"
        ctaHref="/contact?intent=demo"
      />
      <CTA />
    </>
  );
}
