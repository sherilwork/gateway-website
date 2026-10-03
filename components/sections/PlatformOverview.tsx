import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/cards/ProductCard";
import { products } from "@/lib/content/products";
import { cn } from "@/lib/utils";

export function PlatformOverview({
  limit,
  className,
}: {
  limit?: number;
  className?: string;
}) {
  const items = typeof limit === "number" ? products.slice(0, limit) : products;

  return (
    <section
      id="platform"
      className={cn("ww-section scroll-mt-24 bg-surface", className)}
    >
      <div className="ww-container flex flex-col gap-8">
        <SectionHeading
          eyebrow="The platform"
          title="Everything Your Restaurant Needs. In One Platform."
          description="Connected products work together so ordering, operations and delivery live in one place."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
