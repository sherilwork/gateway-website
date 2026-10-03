import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTA } from "@/components/CTA";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "WebWrite Services builds restaurant technology that lets restaurants run their own branded ordering, dashboard and delivery operations.",
  path: "/about",
});

const principles = [
  {
    title: "Restaurant-owned digital presence",
    description:
      "The platform is built so the customer experience belongs to the restaurant, not to a shared marketplace.",
  },
  {
    title: "One connected system",
    description:
      "Ordering, operations and delivery work from the same platform instead of disconnected tools.",
  },
  {
    title: "Clear, factual communication",
    description:
      "We describe what the platform does today and are explicit about what is configured during onboarding.",
  },
  {
    title: "Support through onboarding",
    description:
      "We work with each restaurant to configure branding, menus and access before launch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About WebWrite"
        title="Restaurant Technology That Belongs to the Restaurant"
        description={`${siteConfig.name} builds the platform behind your own branded ordering, operations and delivery experience.`}
        actions={
          <>
            <ButtonLink href="/contact?intent=demo" size="lg">
              Book a Free Demo
            </ButtonLink>
            <ButtonLink href="/contact?intent=sales" variant="secondary" size="lg">
              Talk to Sales
            </ButtonLink>
          </>
        }
      />

      <section className="ww-section bg-white">
        <div className="ww-container flex flex-col gap-8">
          <SectionHeading
            eyebrow="Our approach"
            title="Built Around How Restaurants Actually Operate"
            description="WebWrite focuses on the practical work of running a restaurant: taking orders, preparing them, delivering them and understanding the results."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="flex h-full flex-col gap-2.5 rounded-2xl border border-line bg-surface/60 p-5"
              >
                <h3 className="text-[0.9375rem] font-semibold text-ink">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
