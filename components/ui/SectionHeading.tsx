import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-semibold tracking-[0.14em] text-brand uppercase">
          {eyebrow}
        </span>
      ) : null}
      <Heading className="max-w-3xl text-2xl leading-[1.2] font-bold tracking-tight sm:text-3xl lg:text-[2.125rem]">
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
