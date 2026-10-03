import Link from "next/link";
import { IconArrowRight, IconGlobe } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { footerColumns } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="ww-container py-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2.6fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.product} — a platform for restaurants to launch and
              operate their own branded ordering, dashboard and rider apps.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex w-fit items-center gap-2 font-medium text-ink-secondary transition-colors hover:text-brand"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.parentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-muted transition-colors hover:text-brand"
              >
                <IconGlobe className="h-4 w-4" />
                webwrite.in
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h2 className="text-xs font-semibold tracking-[0.12em] text-ink uppercase">
                  {column.title}
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.href}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-5 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="/contact?intent=demo"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-colors hover:text-brand-strong"
          >
            Book a Free Demo
            <IconArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
