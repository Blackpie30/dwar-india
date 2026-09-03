"use client";

import React from "react";
import {
  ShieldCheck,
  Phone,
  ArrowUp,
  FileCheck,
} from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E4E2DC] via-[#C9BFB2] to-[#938275] p-[1px] shadow-sm">
                <div className="w-full h-full bg-[var(--bg-card)] rounded-[11px] flex items-center justify-center">
                  <span className="font-cinzel text-lg font-black text-[var(--text-primary)]">
                    D
                  </span>
                </div>
              </div>
              <span className="font-cinzel font-bold text-xl tracking-[0.16em] text-[var(--text-primary)]">
                DWAR INDIA
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Direct manufacturer of 100% termite-proof natural stone door frames
              (Chokhats), original Kota stone flooring, and heavy-duty Bijoliya roofing slabs.
              Delivered across India direct from Rajasthan quarries.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-bold">
                GSTIN: 08UBJPS6187Q1ZX
              </span>
              <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold">
                Govt. Registered
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-cinzel font-bold text-xs uppercase tracking-widest text-[var(--text-primary)]">
              Stone Products
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
              <li>
                <a href="#products" className="hover:text-[var(--text-primary)] transition-colors">
                  Stone Door Frames (Chokhats)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[var(--text-primary)] transition-colors">
                  Original Kota Flooring Slabs
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[var(--text-primary)] transition-colors">
                  Bijoliya Heavy Roofing Pati
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-[var(--text-primary)] transition-colors">
                  Single vs Double Door Grooves
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-[var(--text-primary)] transition-colors">
                  Get Factory Direct Rates
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Desk */}
          <div className="lg:col-span-4 space-y-3">
            <p className="font-cinzel font-bold text-xs uppercase tracking-widest text-[var(--text-primary)]">
              Direct Factory Contacts
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)]">
              <div className="flex items-center gap-2 pt-1 font-mono font-bold text-[var(--text-primary)]">
                <Phone className="w-4 h-4 text-[#938275] shrink-0" />
                <a href="tel:+919828123281" className="hover:text-[#938275] transition-colors">
                  +91 98281 23281
                </a>
                <span>|</span>
                <a href="tel:+917852873116" className="hover:text-[#938275] transition-colors">
                  +91 78528 73116
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <InstagramIcon className="w-4 h-4 text-pink-500 shrink-0" />
                <a
                  href="https://instagram.com/dwar_india_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] font-medium transition-colors"
                >
                  @dwar_india_official
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} DWAR INDIA. Headed by{" "}
            <span className="text-[var(--text-primary)] font-bold">
              Mahendra Kumar Saini
            </span>
            . All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Natural Stone Chokhat & Slabs Factory</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all flex items-center gap-1.5 font-bold shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
