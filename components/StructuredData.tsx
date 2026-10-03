import { siteConfig } from "@/lib/site";

/**
 * Renders JSON-LD structured data. Only factual, verifiable information is
 * emitted — no ratings, reviews or invented metrics.
 */
export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is generated server-side from our own constants.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.parentUrl,
    email: siteConfig.contact.email,
    description: siteConfig.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.product,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.product,
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.product,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: siteConfig.description,
    url: siteConfig.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Pricing available on request.",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
