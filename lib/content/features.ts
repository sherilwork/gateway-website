import {
  IconApps,
  IconBell,
  IconCard,
  IconChart,
  IconDashboard,
  IconMenu,
  IconOrdering,
  IconRider,
  IconShield,
  IconTag,
  IconTruck,
  IconUsers,
} from "@/components/icons";
import type { IconComponent } from "./types";

export type Feature = {
  icon: IconComponent;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: IconOrdering,
    title: "Online Ordering",
    description:
      "Take orders directly through your own branded app instead of relying only on marketplaces.",
  },
  {
    icon: IconMenu,
    title: "Menu Management",
    description:
      "Organise your menu into categories and keep it current as items change.",
  },
  {
    icon: IconTag,
    title: "Item Management",
    description:
      "Add, edit and price individual items with the details customers need.",
  },
  {
    icon: IconDashboard,
    title: "Order Management",
    description:
      "Track incoming orders and move them through preparation and fulfilment.",
  },
  {
    icon: IconUsers,
    title: "Customer Management",
    description:
      "Keep customer records and order history organised within your dashboard.",
  },
  {
    icon: IconCard,
    title: "Coupons & Offers",
    description:
      "Create promotional codes to support your own campaigns and repeat orders.",
  },
  {
    icon: IconRider,
    title: "Rider Management",
    description:
      "Maintain your rider list and keep delivery assignments visible.",
  },
  {
    icon: IconTruck,
    title: "Delivery Management",
    description:
      "Coordinate the delivery workflow from hand-off to completed drop-off.",
  },
  {
    icon: IconChart,
    title: "Reports & Analytics",
    description:
      "Review sales and operational reporting to understand how your restaurant is performing.",
  },
  {
    icon: IconShield,
    title: "Team Permissions",
    description:
      "Give each team member access appropriate to their role and responsibilities.",
  },
  {
    icon: IconBell,
    title: "Notifications",
    description:
      "Keep staff and customers informed as orders and deliveries progress.",
  },
  {
    icon: IconApps,
    title: "App Management",
    description:
      "Manage your restaurant's app configuration, branding and versions centrally.",
  },
];
