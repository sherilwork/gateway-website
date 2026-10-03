"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconMenuBars } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { primaryNav } from "@/lib/content/navigation";
import { cn } from "@/lib/utils";

function isLinkActive(pathname: string, href: string) {
  const path = href.split("#")[0];
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the header renders for a new route.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 w-full border-b border-line bg-white/90 backdrop-blur-sm">
        <div className="ww-container flex h-[var(--ww-header-height)] items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((link) => {
                const active = isLinkActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200",
                        active
                          ? "bg-brand-soft text-brand"
                          : "text-ink-secondary hover:text-ink",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/login"
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-ink-secondary transition-colors hover:text-ink sm:inline-flex"
            >
              Login
            </Link>
            <ButtonLink
              href="/signup"
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Sign Up
            </ButtonLink>
            <ButtonLink
              href="/contact?intent=demo"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Get Started
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface lg:hidden"
            >
              <IconMenuBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          links={primaryNav}
          isActive={(href) => isLinkActive(pathname, href)}
        />
      </div>
    </>
  );
}
