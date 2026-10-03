import type { ReactNode } from "react";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type ProductDetailProps = {
  eyebrow: string;
  title: string;
  description: string;
  mockup: ReactNode;
  mockupFirst?: boolean;
  featureHeading: string;
  featureDescription: string;
  features: { title: string; description: string }[];
  ctaLabel: string;
  ctaHref: string;
};

export function ProductDetail({
  eyebrow,
  title,
  description,
  mockup,
  mockupFirst = false,
  featureHeading,
  featureDescription,
  features,
  ctaLabel,
  ctaHref,
}: ProductDetailProps) {
  const copy = (
    <>
      <span className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
        {eyebrow}
      </span>
      <h2 className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
        {description}
      </p>
      <ButtonLink href={ctaHref} size="lg" className="w-fit">
        {ctaLabel}
        <IconArrowRight className="h-4 w-4" />
      </ButtonLink>
    </>
  );

  return (
    <>
      <section className="ww-section bg-white">
        <div className="ww-container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div
              className={
                mockupFirst
                  ? "order-2 flex justify-center lg:order-1"
                  : "flex flex-col items-start gap-4"
              }
            >
              {mockupFirst ? mockup : copy}
            </div>

            <div
              className={
                mockupFirst
                  ? "order-1 flex flex-col items-start gap-4 lg:order-2"
                  : "flex justify-center"
              }
            >
              {mockupFirst ? copy : mockup}
            </div>
          </div>
        </div>
      </section>

      <section className="ww-section bg-surface">
        <div className="ww-container flex flex-col gap-8">
          <SectionHeading
            eyebrow="Capabilities"
            title={featureHeading}
            description={featureDescription}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex h-full flex-col gap-2.5 rounded-2xl border border-line bg-white p-5"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <IconCheck className="h-4 w-4" />
                </span>
                <h3 className="text-[0.9375rem] font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
