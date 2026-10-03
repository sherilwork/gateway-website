export type PricingPlan = {
  name: string;
  price: string;
  priceNote: string;
  summary: string;
  cta: { label: string; href: string };
  highlighted?: boolean;
  featureGroups: { title: string; items: string[] }[];
};

/**
 * Commercial pricing has not been finalised, so plans intentionally avoid
 * invented figures. Replace `price`/`priceNote` once rates are confirmed.
 */
export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Talk to Sales",
    priceNote: "Pricing coming soon",
    summary:
      "For a single restaurant getting started with its own branded ordering experience.",
    cta: { label: "Talk to Sales", href: "/contact?intent=sales" },
    featureGroups: [
      {
        title: "Includes",
        items: [
          "Branded customer app",
          "Restaurant dashboard",
          "Menu & item management",
          "Order management",
        ],
      },
      {
        title: "Support",
        items: ["Onboarding assistance", "Standard support"],
      },
    ],
  },
  {
    name: "Growth",
    price: "Talk to Sales",
    priceNote: "Pricing coming soon",
    summary:
      "For restaurants that need delivery operations, reporting and team access in one place.",
    cta: { label: "Talk to Sales", href: "/contact?intent=sales" },
    highlighted: true,
    featureGroups: [
      {
        title: "Everything in Starter, plus",
        items: [
          "Rider app",
          "Delivery management",
          "Reports & analytics",
          "Coupons & offers",
        ],
      },
      {
        title: "Support",
        items: ["Team access controls", "Priority support"],
      },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "Tailored to your operation",
    summary:
      "For multi-outlet operations and groups that need configuration across multiple restaurants.",
    cta: { label: "Contact Sales", href: "/contact?intent=sales" },
    featureGroups: [
      {
        title: "Everything in Growth, plus",
        items: [
          "Multi-restaurant setup",
          "Centralised platform management",
          "Restaurant-specific configuration",
        ],
      },
      {
        title: "Support",
        items: ["Onboarding planning", "Dedicated support"],
      },
    ],
  },
];
