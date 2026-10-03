import { Hero } from "@/components/sections/Hero";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTA } from "@/components/CTA";
import {
  StructuredData,
  faqSchema,
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/components/StructuredData";
import { faqs } from "@/lib/content/faqs";

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={websiteSchema()} />
      <StructuredData data={softwareApplicationSchema()} />
      <StructuredData data={faqSchema(faqs)} />

      <Hero />
      <PlatformOverview limit={3} />
      <HowItWorks />
      <FeaturesSection limit={8} />
      <PricingSection compact />
      <CTA />
    </>
  );
}
