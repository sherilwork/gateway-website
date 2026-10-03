/**
 * Central site configuration.
 *
 * Every component reads contact details from this single source of truth.
 * Add verified phone/address values here when available.
 */
const DEFAULT_SITE_URL = "https://saas.webwrite.in";

function normalizeUrl(raw: string | undefined): string {
  if (!raw) return DEFAULT_SITE_URL;
  const candidate = raw.trim().replace(/\/$/, "");
  try {
    const parsed = new URL(candidate);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return candidate;
    }
  } catch {
    // fall through to default
  }
  console.warn(`Invalid NEXT_PUBLIC_SITE_URL "${raw}", using ${DEFAULT_SITE_URL}`);
  return DEFAULT_SITE_URL;
}

export const siteConfig = {
  name: "WebWrite Services",
  product: "WebWrite Restaurant SaaS",
  shortName: "WebWrite",
  tagline: "Your Restaurant. Your Brand. Your Own App.",
  description:
    "Launch your own branded restaurant app, dashboard and rider platform with WebWrite Restaurant SaaS.",
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL),
  parentUrl: "https://webwrite.in",
  locale: "en_IN",
  contact: {
    email: "webwrite.co.in@gmail.com",
    salesEmail: "webwrite.co.in@gmail.com",
    supportEmail: "webwrite.co.in@gmail.com",
  },
  social: {
    // Populate with verified profiles before launch.
    linkedin: "",
    twitter: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
