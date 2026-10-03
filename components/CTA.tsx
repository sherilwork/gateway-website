import { IconArrowRight } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CTAProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function CTA({
  title = "Ready to Build Your Restaurant's Own Digital Platform?",
  description = "Talk to WebWrite and see how your restaurant can launch its own connected ordering and operations platform.",
  className,
}: CTAProps) {
  return (
    <section className={cn("ww-section", className)}>
      <div className="ww-container">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-ink px-6 py-10 text-center sm:px-12 lg:px-16 lg:py-14">
          <div
            aria-hidden
            className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <h2 className="text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-white/70 sm:text-base">
              {description}
            </p>
            <div className="mt-1 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/contact?intent=demo"
                variant="primary"
                size="lg"
              >
                Book a Free Demo
                <IconArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="/contact?intent=sales"
                variant="inverse"
                size="lg"
              >
                Talk to Sales
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
