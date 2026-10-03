import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "WebWrite Restaurant SaaS | Your Restaurant. Your Brand. Your Own App.",
    template: "%s | WebWrite Restaurant SaaS",
  },
  description: siteConfig.description,
  applicationName: siteConfig.product,
  icons: {
    icon: "/_Group_-1.png",
  },
  keywords: [
    "restaurant SaaS",
    "restaurant app",
    "food ordering app",
    "restaurant dashboard",
    "rider app",
    "white label restaurant app",
    "online ordering for restaurants",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.parentUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    siteName: siteConfig.product,
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "WebWrite Restaurant SaaS | Your Restaurant. Your Brand. Your Own App.",
    description: siteConfig.description,
    images: ["/_Group_-1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebWrite Restaurant SaaS",
    description: siteConfig.description,
    images: ["/_Group_-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteConfig.url },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e31b23",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-canvas text-ink antialiased">
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
