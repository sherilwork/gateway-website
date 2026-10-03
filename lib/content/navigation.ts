export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Products", href: "/products" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Why WebWrite", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Customer App", href: "/products/customer-app" },
      { label: "Restaurant Dashboard", href: "/products/restaurant-dashboard" },
      { label: "Rider App", href: "/products/rider-app" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Support", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Cookie Policy", href: "/privacy#cookies" },
    ],
  },
];
