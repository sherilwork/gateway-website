import {
  IconApps,
  IconDashboard,
  IconLayers,
  IconRider,
} from "@/components/icons";
import type { IconComponent } from "./types";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  icon: IconComponent;
  tagline: string;
  description: string;
  bullets: string[];
  href: string;
};

export const products: Product[] = [
  {
    slug: "customer-app",
    name: "Customer App",
    shortName: "Customer App",
    icon: IconApps,
    tagline: "Branded ordering",
    description:
      "A branded ordering experience where customers browse your menu, build a cart and place orders directly with your restaurant.",
    bullets: [
      "Branded food ordering",
      "Categories",
      "Products",
      "Cart",
      "Orders",
      "Profile",
      "Notifications",
    ],
    href: "/products/customer-app",
  },
  {
    slug: "restaurant-dashboard",
    name: "Restaurant Dashboard",
    shortName: "Dashboard",
    icon: IconDashboard,
    tagline: "Central operations",
    description:
      "One dashboard to run day-to-day restaurant operations, from incoming orders to reporting and team access.",
    bullets: [
      "Orders",
      "Items",
      "Menu",
      "Coupons",
      "Reporting",
      "Riders",
      "Deliveries",
      "Team access",
    ],
    href: "/products/restaurant-dashboard",
  },
  {
    slug: "rider-app",
    name: "Rider App",
    shortName: "Rider App",
    icon: IconRider,
    tagline: "Delivery workflow",
    description:
      "A dedicated rider experience for picking up delivery work and keeping order status up to date on the move.",
    bullets: [
      "Rider login",
      "Delivery queue",
      "Order claim",
      "Status updates",
      "Delivery workflow",
      "Notifications",
    ],
    href: "/products/rider-app",
  },
  {
    slug: "saas-platform",
    name: "WebWrite SaaS Control Platform",
    shortName: "WebWrite SaaS",
    icon: IconLayers,
    tagline: "Platform management",
    description:
      "The control layer that lets WebWrite onboard restaurants, manage branding and versions, and support each deployment.",
    bullets: [
      "Restaurant onboarding",
      "App management",
      "Versions",
      "Branding",
      "Platform management",
      "Support",
      "Integrations",
    ],
    href: "/products",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
