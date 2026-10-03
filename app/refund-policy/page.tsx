import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Refund Policy",
  description:
    "How refunds and cancellations are handled for WebWrite Restaurant SaaS subscriptions, and how to raise a billing enquiry.",
  path: "/refund-policy",
});

const sections: LegalSection[] = [
  {
    id: "scope",
    heading: "Scope of this policy",
    body: [
      "This policy explains how refunds are handled for subscriptions and services purchased from WebWrite Services.",
      "Because commercial plans are agreed individually, the specific billing, cancellation and refund terms that apply to you are set out in your agreement. Where this policy and your agreement differ, your agreement takes precedence.",
    ],
  },
  {
    id: "subscription-payments",
    heading: "Subscription payments",
    body: [
      "Subscription fees are generally billed in advance for the agreed billing period. Fees for a billing period that has already begun are ordinarily non-refundable, except where required by law or expressly agreed otherwise.",
    ],
  },
  {
    id: "cancellation",
    heading: "Cancellation",
    body: [
      "You may request cancellation of your subscription by contacting us. Unless your agreement states otherwise, cancellation takes effect at the end of the current billing period, and you retain access until that date.",
    ],
  },
  {
    id: "eligible-refunds",
    heading: "When a refund may apply",
    body: [
      "Refunds may be considered where a duplicate payment was made, where a payment was made in error, or where required by applicable law.",
      "Refund requests are reviewed individually based on the circumstances and the terms of your agreement.",
    ],
  },
  {
    id: "how-to-request",
    heading: "How to request a refund",
    body: [
      "To raise a refund or billing enquiry, contact us using the email address below with your restaurant name, the invoice or payment reference, and a short description of the issue.",
      "We will acknowledge your request and respond with the outcome after review.",
    ],
  },
  {
    id: "third-party-charges",
    heading: "Third-party charges",
    body: [
      "Where payment services or other third parties are involved, their own refund and dispute processes may apply to charges they process. We will help direct you appropriately where this is the case.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refund Policy"
        description="How cancellations and refunds are handled for WebWrite subscriptions."
      />
      <LegalPage
        title="Refund Policy"
        updated="October 2026"
        intro="This policy outlines the general approach to refunds for WebWrite Restaurant SaaS subscriptions. Your individual agreement sets out the terms specific to your plan."
        sections={sections}
      />
    </>
  );
}
