import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white pt-10 pb-10 lg:pt-12 lg:pb-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-soft/70 to-transparent"
      />
      <div className="ww-container relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full border border-brand/20 bg-white px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.12em] text-brand uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="text-[1.75rem] leading-[1.15] font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
              {description}
            </p>
          ) : null}
          {actions ? (
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              {actions}
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
