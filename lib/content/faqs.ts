export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Can I get my own branded app?",
    answer:
      "Yes. WebWrite Restaurant SaaS is built around your own branded customer app. Your restaurant's identity is configured on the platform so customers order from your brand rather than a shared marketplace listing.",
  },
  {
    question: "Can I manage orders from one dashboard?",
    answer:
      "Yes. The restaurant dashboard brings orders, items, menu, coupons, reporting, riders, deliveries and team access into a single place, so your team works from one system instead of several disconnected tools.",
  },
  {
    question: "Can I manage riders?",
    answer:
      "Yes. The rider app and the dashboard's rider and delivery views let you manage your delivery workflow, including rider access, available orders and delivery status updates.",
  },
  {
    question: "Can I customize my restaurant branding?",
    answer:
      "You can configure your restaurant's branding on the platform, including your identity, content and restaurant-specific settings. Exact customization options are confirmed during onboarding so we only commit to what your plan supports.",
  },
  {
    question: "Can I manage team access?",
    answer:
      "Yes. Team access is role-based, so you can control what each team member is able to view and manage across the dashboard and its pages.",
  },
  {
    question: "Can multiple restaurants use WebWrite?",
    answer:
      "Yes. WebWrite runs as a multi-restaurant platform. Each restaurant is onboarded with its own configuration and data, while sharing the same underlying platform infrastructure.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Customers can pay online through supported payment infrastructure, while restaurant-specific payment and settlement workflows are configured according to the selected payment provider. The exact setup is agreed during onboarding.",
  },
  {
    question: "How does onboarding work?",
    answer:
      "Onboarding starts with a short conversation about your restaurant, your outlets and how you currently take orders. From there we set up your restaurant, configure your branding and prepare your apps before launch.",
  },
  {
    question: "How quickly can my restaurant launch?",
    answer:
      "Launch time depends on how much menu and branding content is ready to configure, and whether you are running one outlet or several. Your onboarding plan gives you a clear timeline for your specific setup.",
  },
];
