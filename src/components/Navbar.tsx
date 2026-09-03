"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Compass,
  Layers,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Sun,
  Moon,
  MessageSquare,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Stone Collection", href: "#products", icon: Layers },
    { name: "How Chokhat Works", href: "#craftsmanship", icon: Compass },
    { name: "About & Contact", href: "#credentials", icon: ShieldCheck },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--glass-nav)] backdrop-blur-xl border-b border-[var(--border-subtle)] py-3 shadow-lg shadow-black/10"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E4E2DC] via-[#C9BFB2] to-[#938275] p-[1px] shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[var(--bg-primary)] rounded-[11px] flex items-center justify-center">
                <span className="font-cinzel text-lg font-extrabold text-[var(--text-primary)] tracking-widest">
                  D
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-cinzel font-bold text-lg sm:text-xl tracking-[0.16em] text-[var(--text-primary)] leading-tight">
                  DWAR INDIA
                </span>
                <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--pill-bg)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hidden sm:inline-block font-sans font-semibold">
                  Rajasthan
                </span>
              </div>
              <span className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-muted)] font-medium mt-0.5">
                Stone Door Frames & Slabs
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.14em] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center gap-1.5 py-1 relative group"
                >
                  <Icon className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C9BFB2] group-hover:w-full transition-all duration-300" />
                </a>
              );
            })}
          </nav>

          {/* Action CTAs + Theme Switcher */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:scale-105 transition-all shadow-sm flex items-center justify-center"
              aria-label="Toggle dark and light theme"
              title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#F3E5AB] rotate-0 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-[#574D44] -rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Direct Phone */}
            <a
              href="tel:+919828123281"
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-xs text-[var(--text-primary)] bg-[var(--bg-card)] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#938275]" />
              <span className="tracking-wide font-mono font-medium">+91 98281 23281</span>
            </a>

            {/* Quote Button */}
            <a
              href="https://wa.me/919828123281?text=Namaste%20Dwar%20India,%20I%20want%20to%20know%20the%20rates%20for%20stone%20door%20frames%20and%20Kota%20stone."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-full font-medium transition-all group shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#E4E2DC] via-[#C9BFB2] to-[#938275]"></span>
              <span className="relative px-4 py-2 transition-all bg-[var(--bg-card)] rounded-full group-hover:bg-opacity-0 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[var(--text-primary)] group-hover:text-[#121110] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#938275] group-hover:text-[#121110]" />
                Get Rates on WhatsApp
              </span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-[#F3E5AB]" /> : <Moon className="w-4 h-4 text-[#574D44]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-[var(--bg-card)] border-b border-[var(--border-subtle)] p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 text-sm uppercase tracking-wider text-[var(--text-primary)] hover:text-[#938275] border-b border-[var(--border-subtle)]"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-[#938275]" />
                      {link.name}
                    </div>
                    <ChevronRight className="w-4 h-4 text-[var(--text-muted)]" />
                  </a>
                );
              })}

              <div className="pt-3 flex flex-col gap-3">
                <a
                  href="tel:+919828123281"
                  className="w-full py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-center text-xs tracking-wider uppercase text-[var(--text-primary)] flex items-center justify-center gap-2 font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#938275]" />
                  Call: +91 98281 23281
                </a>
                <a
                  href="https://wa.me/919828123281?text=Namaste%20Dwar%20India,%20I%20want%20to%20know%20rates%20for%20stone%20door%20frames."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#E4E2DC] via-[#C9BFB2] to-[#938275] text-[#121110] font-bold text-center text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  Direct WhatsApp Inquiry
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
