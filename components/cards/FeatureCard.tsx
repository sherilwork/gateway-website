import type { IconComponent } from "@/lib/content/types";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: IconComponent;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-5 transition-colors duration-200 hover:border-brand/30",
        className,
      )}
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
        <Icon className="h-[1.125rem] w-[1.125rem]" />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[0.9375rem] font-semibold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
