"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { IconClose } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";
import type { NavLink } from "@/lib/content/navigation";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  isActive: (href: string) => boolean;
};

export function MobileMenu({ open, onClose, links, isActive }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape to close + focus management.
  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "absolute top-0 right-0 flex h-full w-[min(20rem,85vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex-1 overflow-y-auto px-3 py-4"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-brand-soft text-brand"
                        : "text-ink hover:bg-surface",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-line px-5 py-5">
          <div className="grid grid-cols-2 gap-3">
            <ButtonLink
              href="/login"
              variant="secondary"
              size="lg"
              onClick={onClose}
            >
              Login
            </ButtonLink>
            <ButtonLink href="/signup" size="lg" onClick={onClose}>
              Sign Up
            </ButtonLink>
          </div>
          <ButtonLink
            href="/contact?intent=demo"
            variant="primary"
            size="lg"
            className="w-full"
            onClick={onClose}
          >
            Book a Free Demo
          </ButtonLink>
          <ButtonLink
            href="/contact?intent=sales"
            variant="secondary"
            size="lg"
            className="w-full"
            onClick={onClose}
          >
            Talk to Sales
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
