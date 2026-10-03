import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { IconGlobe } from "@/components/icons";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Book a free WebWrite Restaurant SaaS demo or talk to our sales team about launching your own branded restaurant app, dashboard and rider platform.",
  path: "/contact",
});

const helpPoints = [
  {
    title: "Book a free demo",
    description:
      "See how the customer app, dashboard and rider app work together for your restaurant.",
  },
  {
    title: "Talk through pricing",
    description:
      "Get current rates and understand what each plan includes for your setup.",
  },
  {
    title: "Plan your onboarding",
    description:
      "Understand what is needed to configure your branding, menu and team access.",
  },
];

type ContactPageProps = {
  searchParams: Promise<{ intent?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const intent = params.intent === "sales" ? "sales" : "demo";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Restaurant"
        description="Tell us a little about your restaurant and we'll get back to you to arrange a demo or answer your questions."
      />

      <section className="ww-section bg-white">
        <div className="ww-container">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_18px_50px_-32px_rgba(17,24,39,0.4)] sm:p-8">
              <h2 className="text-xl font-bold text-ink">
                {intent === "sales" ? "Talk to Sales" : "Request a Demo"}
              </h2>
              <p className="mt-2 mb-6 text-sm text-muted">
                Fields marked with an asterisk are required.
              </p>
              <ContactForm defaultIntent={intent} />
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-bold text-ink">How we can help</h2>
                <ul className="flex flex-col gap-4">
                  {helpPoints.map((point) => (
                    <li key={point.title} className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-ink">
                        {point.title}
                      </span>
                      <span className="text-sm leading-relaxed text-muted">
                        {point.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6">
                <h2 className="text-lg font-bold text-ink">Email us</h2>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
                >
                  {siteConfig.contact.email}
                </a>
                <a
                  href={siteConfig.parentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand"
                >
                  <IconGlobe className="h-4 w-4" />
                  webwrite.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
