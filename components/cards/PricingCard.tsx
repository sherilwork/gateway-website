import { IconCheck } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import type { PricingPlan } from "@/lib/content/pricing";
import { cn } from "@/lib/utils";

export function PricingCard({
  plan,
  compact = false,
}: {
  plan: PricingPlan;
  compact?: boolean;
}) {
  const groups = compact ? plan.featureGroups.slice(0, 1) : plan.featureGroups;

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-white p-6",
        plan.highlighted
          ? "border-brand/40 shadow-[0_24px_60px_-30px_rgba(227,27,35,0.5)]"
          : "border-line shadow-[0_12px_30px_-24px_rgba(17,24,39,0.35)]",
      )}
    >
      {plan.highlighted ? (
        <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[0.6875rem] font-semibold tracking-wide text-white">
          Recommended for growing restaurants
        </span>
      ) : null}

      <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
      <p className="mt-2.5 text-2xl font-bold text-ink">{plan.price}</p>
      <p className="mt-1 text-xs font-medium text-muted">{plan.priceNote}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{plan.summary}</p>

      <div className="mt-5 flex flex-col gap-4">
        {groups.map((group) => (
          <div key={group.title} className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold tracking-[0.1em] text-ink uppercase">
              {group.title}
            </p>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-ink-secondary"
                >
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <ButtonLink
          href={plan.cta.href}
          variant={plan.highlighted ? "primary" : "secondary"}
          size="lg"
          className="w-full"
        >
          {plan.cta.label}
        </ButtonLink>
      </div>
    </div>
  );
}
