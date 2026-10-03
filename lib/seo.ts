import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  ogTitle,
  noIndex,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      title: ogTitle ?? title,
      description,
      siteName: siteConfig.product,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
    },
  };
}
