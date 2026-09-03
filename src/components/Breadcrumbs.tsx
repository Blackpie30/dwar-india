"use client";

import React from "react";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
  current?: boolean;
}

export const Breadcrumbs: React.FC<{ items?: BreadcrumbItem[] }> = ({
  items = [
    { name: "Home", href: "/" },
    { name: "Natural Stone Products", href: "/#products" },
    { name: "Chokhat Fabrication", href: "/#craftsmanship" },
    { name: "Factory Direct", current: true },
  ],
}) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-4 max-w-7xl mx-auto w-full">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-2">
              {index === 0 && <Home className="w-3.5 h-3.5 text-[#938275]" />}
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <span
                  className={
                    isLast
                      ? "text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)]"
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.name}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="w-3.5 h-3.5 text-[var(--border-hover)]" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
