import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Choose your plan",
    description: "Pick the plan that fits your restaurant and how you operate.",
  },
  {
    title: "Onboard your restaurant",
    description: "We set up your restaurant, outlets and the details we need.",
  },
  {
    title: "Configure your brand and platform",
    description: "Your branding, menu and configuration are prepared for launch.",
  },
  {
    title: "Launch and start taking orders",
    description: "Go live with your own app, dashboard and rider workflow.",
  },
];

export function HowItWorks({ className }: { className?: string }) {
  return (
    <section
      id="how-it-works"
      className={cn("ww-section scroll-mt-24 bg-surface", className)}
    >
      <div className="ww-container flex flex-col gap-8">
        <SectionHeading
          eyebrow="How it works"
          title="From Sign-Up to Launch in Four Steps"
          description="A straightforward onboarding path that gets your restaurant operating on its own platform."
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-col gap-3 rounded-2xl border border-line bg-white p-5"
            >
              <span className="text-xl font-bold text-brand/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[0.9375rem] font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
