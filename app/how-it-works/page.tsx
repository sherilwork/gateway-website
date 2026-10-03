import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/CTA";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "How It Works",
  description:
    "See how WebWrite takes your restaurant from choosing a plan to launching its own branded app, dashboard and rider workflow.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From Sign-Up to Launch in Four Steps"
        description="A clear onboarding path so you know exactly what happens between first conversation and going live."
        actions={
          <ButtonLink href="/contact?intent=demo" size="lg">
            Book a Free Demo
          </ButtonLink>
        }
      />
      <HowItWorks className="bg-surface" />
      <CTA />
    </>
  );
}
