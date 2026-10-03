import {
  IconBell,
  IconCart,
  IconLocation,
  IconSearch,
} from "@/components/icons";
import { PhoneMockup } from "./PhoneMockup";
import { cn } from "@/lib/utils";

const categories = ["Bestsellers", "Starters", "Main Course", "Desserts"];

const popular = [
  { name: "Signature Thali", price: "₹249", tag: "Bestseller" },
  { name: "Paneer Tikka", price: "₹189" },
  { name: "Butter Naan Combo", price: "₹159" },
  { name: "Gulab Jamun", price: "₹99" },
];

type CustomerAppMockupProps = {
  className?: string;
  brandName?: string;
  brandInitial?: string;
  brandColor?: string;
};

export function CustomerAppMockup({
  className,
  brandName = "Your Restaurant",
  brandInitial = "Y",
  brandColor = "var(--ww-red)",
}: CustomerAppMockupProps) {
  return (
    <PhoneMockup
      className={className}
      label="Customer App"
      screenClassName="bg-white"
    >
      <div
        className="flex h-full flex-col"
        role="img"
        aria-label={`Illustration of a branded customer ordering app for ${brandName}, showing search, categories, a promotion banner and popular items. Demo data only.`}
      >
        <div className="flex items-center justify-between gap-2 px-4 pt-3">
          <div className="flex items-center gap-2">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold text-white"
              style={{ backgroundColor: brandColor }}
            >
              {brandInitial}
            </span>
            <div className="leading-tight">
              <p className="text-[0.6875rem] font-bold text-ink">{brandName}</p>
              <p className="flex items-center gap-1 text-[0.5625rem] text-muted">
                <IconLocation className="h-2.5 w-2.5" />
                Deliver to your address
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-ink">
            <IconBell className="h-4 w-4" />
            <span className="relative">
              <IconCart className="h-4 w-4" />
              <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand text-[0.5rem] font-bold text-white">
                2
              </span>
            </span>
          </div>
        </div>

        <div className="mt-3 px-4">
          <div className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-[0.625rem] text-muted">
            <IconSearch className="h-3.5 w-3.5" />
            Search for dishes
          </div>
        </div>

        <div className="mt-3 flex gap-2 overflow-hidden px-4">
          {categories.map((category, index) => (
            <span
              key={category}
              className={cn(
                "shrink-0 rounded-full px-2.5 py-1 text-[0.5625rem] font-semibold",
                index === 0
                  ? "bg-brand text-white"
                  : "border border-line text-muted",
              )}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-3 px-4">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand to-[#ff6b6b] p-3 text-white">
            <p className="text-[0.6875rem] font-bold">Flat 20% off</p>
            <p className="mt-0.5 text-[0.5625rem] text-white/80">
              On your first order with code WELCOME
            </p>
            <span className="mt-2 inline-block rounded-full bg-white/20 px-2 py-0.5 text-[0.5rem] font-semibold">
              Sample promotion
            </span>
          </div>
        </div>

        <div className="mt-3 flex-1 overflow-hidden px-4 pb-4">
          <p className="mb-2 text-[0.625rem] font-bold text-ink">
            Popular items
          </p>
          <div className="grid grid-cols-2 gap-2">
            {popular.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-xl border border-line"
              >
                <div className="relative flex h-16 items-center justify-center bg-surface text-[0.5rem] font-medium text-muted">
                  Dish image
                  {item.tag ? (
                    <span className="absolute top-1 left-1 rounded-full bg-brand px-1.5 py-0.5 text-[0.4375rem] font-bold text-white">
                      {item.tag}
                    </span>
                  ) : null}
                </div>
                <div className="p-2">
                  <p className="truncate text-[0.5625rem] font-semibold text-ink">
                    {item.name}
                  </p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[0.5625rem] font-bold text-ink">
                      {item.price}
                    </span>
                    <span className="rounded-full bg-brand-soft px-1.5 py-0.5 text-[0.4375rem] font-bold text-brand">
                      ADD
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneMockup>
  );
}
