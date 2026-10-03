import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "Terms governing the use of the WebWrite Restaurant SaaS marketing website and the information published on it.",
  path: "/terms",
});

const sections: LegalSection[] = [
  {
    id: "acceptance",
    heading: "Acceptance of these terms",
    body: [
      "By accessing or using this website, you agree to these terms. If you do not agree, please do not use the website.",
    ],
  },
  {
    id: "website-purpose",
    heading: "Purpose of this website",
    body: [
      "This website provides information about the WebWrite Restaurant SaaS platform and allows restaurants to submit enquiries. It is a marketing website and does not itself provide the platform service.",
      "Product descriptions on this website are provided for information. Specific features, configuration and commercial terms are confirmed during onboarding and in the applicable agreement.",
    ],
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    body: [
      "You agree not to misuse this website, including by attempting to gain unauthorised access to our systems, submitting false information, or interfering with the website's normal operation.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual property",
    body: [
      "The content, design and branding on this website are owned by WebWrite Services or its licensors and may not be reproduced without permission, except as permitted by law.",
    ],
  },
  {
    id: "third-party-services",
    heading: "Third-party services",
    body: [
      "The platform may integrate with third-party services, such as payment providers. Those services are governed by their own terms, and their availability and features are outside our control.",
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of liability",
    body: [
      "This website is provided on an 'as is' basis. To the extent permitted by law, we are not liable for any loss arising from reliance on the information published on this website.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    body: [
      "We may update these terms from time to time. Continued use of the website after changes are published constitutes acceptance of the updated terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms that apply when you use this website."
      />
      <LegalPage
        title="Terms & Conditions"
        updated="October 2026"
        intro="These terms govern your use of the WebWrite Services marketing website for the WebWrite Restaurant SaaS platform."
        sections={sections}
      />
    </>
  );
}
