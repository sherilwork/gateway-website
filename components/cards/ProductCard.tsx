import Link from "next/link";
import { IconArrowRight, IconCheck } from "@/components/icons";
import type { Product } from "@/lib/content/products";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const Icon = product.icon;

  return (
    <div
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-colors duration-200 hover:border-brand/30",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[0.6875rem] font-semibold tracking-[0.1em] text-muted uppercase">
            {product.tagline}
          </p>
          <h3 className="text-base font-semibold text-ink">{product.name}</h3>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {product.description}
      </p>

      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
        {product.bullets.slice(0, 4).map((bullet) => (
          <li
            key={bullet}
            className="flex items-center gap-2 text-[0.8125rem] text-ink-secondary"
          >
            <IconCheck className="h-3.5 w-3.5 shrink-0 text-brand" />
            {bullet}
          </li>
        ))}
      </ul>

      <Link
        href={product.href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
      >
        Explore
        <IconArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
