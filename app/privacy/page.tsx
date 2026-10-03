import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How WebWrite Services collects, uses and protects information submitted through the WebWrite Restaurant SaaS website.",
  path: "/privacy",
});

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    heading: "Information we collect",
    body: [
      "When you submit the contact form on this website, we collect the details you provide: your name, restaurant name, mobile number, email address, and any optional information such as your city, number of outlets, current ordering method and message.",
      "We collect this information solely to respond to your enquiry, arrange a demonstration and discuss your requirements.",
    ],
  },
  {
    id: "how-we-use-information",
    heading: "How we use your information",
    body: [
      "We use the information you submit to contact you about your enquiry, provide product information, arrange a demo and support onboarding if you choose to proceed.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    id: "data-retention",
    heading: "Data retention",
    body: [
      "We retain enquiry information for as long as necessary to respond to your request and to maintain records of our business communications, or as required by applicable law.",
    ],
  },
  {
    id: "security",
    heading: "Security",
    body: [
      "We take reasonable technical and organisational measures to protect the information you submit. Form submissions are validated on our servers before being processed.",
      "No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies and similar technologies",
    body: [
      "This website is designed to function without requiring cookies for essential functionality. If analytics or similar technologies are introduced, this policy will be updated to describe what is used and why.",
      "You can control cookies through your browser settings.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your choices",
    body: [
      "You may request access to, correction of, or deletion of the personal information you have submitted to us by contacting us using the email address below.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time. Material changes will be reflected by updating the date at the top of this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains what information we collect through this website and how we handle it."
      />
      <LegalPage
        title="Privacy Policy"
        updated="October 2026"
        intro="WebWrite Services operates this website to provide information about the WebWrite Restaurant SaaS platform and to respond to enquiries from restaurants."
        sections={sections}
      />
    </>
  );
}
