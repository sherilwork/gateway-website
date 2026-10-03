import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  children: ReactNode;
  className?: string;
  label?: string;
  screenClassName?: string;
};

export function PhoneMockup({
  children,
  className,
  label,
  screenClassName,
}: PhoneMockupProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className="relative w-[min(17rem,80vw)] rounded-[2.25rem] border border-line bg-ink p-[0.4rem] shadow-[0_24px_50px_-20px_rgba(17,24,39,0.45)]">
        <div className="relative overflow-hidden rounded-[1.85rem] bg-white">
          {/* Notch / status bar */}
          <div className="relative flex items-center justify-between px-5 pt-3 pb-1 text-[0.625rem] font-semibold text-ink">
            <span>9:41</span>
            <span
              aria-hidden
              className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-ink"
            />
            <span className="flex items-center gap-1" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-ink/70" />
              <span className="h-2 w-3.5 rounded-sm bg-ink/70" />
            </span>
          </div>
          <div className={cn("h-[26rem] overflow-hidden", screenClassName)}>
            {children}
          </div>
        </div>
      </div>
      {label ? (
        <span className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
          {label}
        </span>
      ) : null}
    </div>
  );
}