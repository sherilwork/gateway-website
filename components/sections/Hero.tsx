import { IconArrowRight, IconCheck } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";

const bullets = [
  "Your Brand",
  "Full Control",
  "Direct Customer Relationship",
  "Complete Restaurant Solution",
];

const pillars = ["Customer App", "Restaurant Dashboard", "Rider App"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white pt-10 pb-12 lg:pt-14 lg:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-brand-soft/70 to-transparent"
      />
      <div className="ww-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.12em] text-brand uppercase">
              All-in-one restaurant platform
            </span>

            <h1 className="text-[2.125rem] leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-[3.75rem]">
              Grow Your Restaurant{" "}
              <span className="text-gradient-brand">With Your Own App</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted">
              Get your own branded food ordering app, restaurant dashboard,
              rider app and everything you need to run and grow your business —
              powered by WebWrite.
            </p>

            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2.5 text-sm font-medium text-ink-secondary"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <ButtonLink href="/contact?intent=demo" size="lg">
                Book a Free Demo
                <IconArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/products" variant="secondary" size="lg">
                Explore Platform
              </ButtonLink>
            </div>

            <ul className="flex flex-wrap items-center gap-2 pt-1">
              {pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-secondary"
                >
                  {pillar}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
