"use client";

import { useState } from "react";
import { IconChevronDown } from "@/components/icons";
import type { Faq } from "@/lib/content/faqs";
import { cn } from "@/lib/utils";

export function FAQ({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white transition-colors duration-200",
              open ? "border-brand/30" : "border-line",
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-[0.9375rem] font-semibold text-ink">
                  {item.question}
                </span>
                <IconChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                    open && "rotate-180 text-brand",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-5 pb-5"
            >
              <p className="text-sm leading-relaxed text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
