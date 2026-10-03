import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_6px_20px_-6px_rgba(227,27,35,0.6)] hover:bg-brand-strong hover:shadow-[0_10px_28px_-8px_rgba(227,27,35,0.65)]",
  secondary:
    "bg-white text-ink border border-line hover:border-ink/20 hover:bg-surface",
  ghost: "text-ink hover:bg-surface",
  inverse:
    "bg-white text-brand hover:bg-white/90 shadow-[0_6px_20px_-8px_rgba(0,0,0,0.5)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-base",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out active:scale-[0.98] whitespace-nowrap disabled:opacity-60 disabled:pointer-events-none";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: LinkButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  const classes = cn(baseClass, variants[variant], sizes[size], className);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        rel="noopener noreferrer"
        target="_blank"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(baseClass, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
