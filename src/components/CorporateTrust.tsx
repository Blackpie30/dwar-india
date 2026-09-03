"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Phone,
  MessageSquare,
  Copy,
  Check,
  MapPin,
  Send,
  ExternalLink,
  Award,
  FileCheck,
} from "lucide-react";
import BlurHighlight from "@/components/ui/blur-highlight";

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

export const CorporateTrust: React.FC = () => {
  const [copiedGst, setCopiedGst] = useState(false);
  const [customText, setCustomText] = useState<string>("");

  const gstNumber = "08UBJPS6187Q1ZX";

  const handleCopyGST = () => {
    navigator.clipboard.writeText(gstNumber);
    setCopiedGst(true);
    setTimeout(() => setCopiedGst(false), 3000);
  };

  const INQUIRY_TEMPLATES = [
    {
      title: "Stone Door Frame (Chokhat) Rates",
      text: "Namaste Mahendra ji, I want to know the rates for stone door frames (Chokhats) for my house. Please share size options and prices.",
    },
    {
      title: "Kota Stone Flooring Wholesale Order",
      text: "Hello Dwar India, I need a quotation for original Kota stone flooring slabs (truckload supply). Please share pricing per sqft.",
    },
    {
      title: "Bijoliya Roofing Pati Slabs",
      text: "Namaste Dwar India, I want to inquire about heavy Bijoliya stone slabs for verandah/roofing. Please share available sizes and rates.",
    },
    {
      title: "Send Building Drawings / Measurements",
      text: "Hello Mahendra ji, I am building a house and want to share my door sizes and drawing for a complete stone frame quote.",
    },
  ];

  const handleSendWhatsApp = (textToSend?: string) => {
    const msg = textToSend || customText || INQUIRY_TEMPLATES[0].text;
    window.open(
      `https://wa.me/919828123281?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="credentials" className="py-20 sm:py-28 relative bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#938275]" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--text-secondary)]">
              Verified Factory & Contact
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-[var(--text-primary)] leading-[1.2]">
            Contact Dwar India & <span className="soft-stone-gradient-text">Verify Details</span>
          </h2>

          <BlurHighlight
            text="Government registered stone manufacturing business with direct quarry sourcing in Rajasthan, official GST billing, and fast truck dispatch across India."
            as="p"
            className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed mt-3 max-w-2xl mx-auto"
            highlights={["Rajasthan,", "GST", "India.", "Government", "direct"]}
            defaultHighlightClassName="px-2 py-0.5 rounded-lg bg-[#C9BFB2]/20 border border-[#C9BFB2]/40 text-[var(--text-primary)] font-semibold shadow-sm"
          />
        </motion.div>

        {/* Credentials & WhatsApp Box with Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14 sm:mb-16">
          {/* Left Column: Official Enterprise Credentials Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 shadow-md"
          >
            <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)] mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E4E2DC] to-[#938275] p-[1px] shadow-sm">
                  <div className="w-full h-full bg-[var(--bg-primary)] rounded-[11px] flex items-center justify-center">
                    <span className="font-cinzel text-xl font-black text-[var(--text-primary)]">
                      D
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-xl text-[var(--text-primary)] leading-tight">
                    DWAR INDIA
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    Rajasthan Stone Factory
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 font-bold">
                <FileCheck className="w-3.5 h-3.5" />
                GST Verified
              </span>
            </div>

            <div className="space-y-3.5">
              {/* Owner */}
              <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold block">
                    Proprietor & Factory Head
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-cinzel mt-0.5 block">
                    Mahendra Kumar Saini
                  </span>
                </div>
                <Award className="w-5 h-5 text-[#938275]" />
              </div>

              {/* GSTIN */}
              <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold block">
                    GST Number (GSTIN)
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-[var(--text-primary)] tracking-wide mt-0.5 block">
                    {gstNumber}
                  </span>
                </div>
                <button
                  onClick={handleCopyGST}
                  className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] text-xs font-bold text-[var(--text-primary)] transition-all flex items-center gap-1.5 shadow-sm"
                >
                  {copiedGst ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#938275]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Hotlines Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+919828123281"
                  className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-card)] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                    <Phone className="w-4 h-4 text-[#938275]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold block">
                      Primary Phone
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-mono">
                      +91 98281 23281
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+917852873116"
                  className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-card)] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                    <Phone className="w-4 h-4 text-[#938275]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold block">
                      Secondary Desk
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-mono">
                      +91 78528 73116
                    </span>
                  </div>
                </a>
              </div>

              {/* Instagram Profile */}
              <a
                href="https://instagram.com/dwar_india_official"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center shadow-sm">
                    <InstagramIcon className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold block">
                      Instagram Photos & Videos
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                      @dwar_india_official
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct WhatsApp Desk */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 shadow-md"
          >
            <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)] mb-6">
              <div>
                <h3 className="font-cinzel font-bold text-lg sm:text-xl text-[var(--text-primary)]">
                  Quick WhatsApp Inquiries
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-0.5 font-medium">
                  Tap any option below to chat directly with Mahendra Kumar Saini
                </p>
              </div>
              <MessageSquare className="w-5 h-5 text-[#938275]" />
            </div>

            {/* Template Buttons */}
            <div className="space-y-2.5 mb-6">
              {INQUIRY_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.title}
                  onClick={() => handleSendWhatsApp(tmpl.text)}
                  className="w-full p-3.5 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-left transition-all flex items-center justify-between group shadow-sm"
                >
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#938275]"></span>
                      {tmpl.title}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] line-clamp-1 mt-0.5">
                      {tmpl.text}
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-[#938275] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Custom Message Box */}
            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-3">
              <label className="block text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold">
                Or Type Your Own Requirement:
              </label>
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Example: Need 12 door frames (5 inch width) and 1000 sqft Kota stone for my house in Jaipur..."
                rows={3}
                className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl p-3 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[#938275] focus:outline-none"
              />

              <button
                onClick={() => handleSendWhatsApp()}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 text-white font-bold text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-900/20"
              >
                <Send className="w-4 h-4" />
                Send Message on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>

        {/* Manufacturing Plants with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#938275]" />
            </div>
            <div>
              <h4 className="text-base font-cinzel font-bold text-[var(--text-primary)] mb-1">
                Kota Stone Processing Plant
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-2 leading-relaxed">
                Industrial Area, Suket & Ramganjmandi Belt, Kota District, Rajasthan 326517.
              </p>
              <span className="text-[11px] font-bold text-[#938275]">
                ● High-volume computerized cutting & polishing
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#938275]" />
            </div>
            <div>
              <h4 className="text-base font-cinzel font-bold text-[var(--text-primary)] mb-1">
                Bijoliya Stone & Chokhat Fabrication Hub
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-2 leading-relaxed">
                Quarry Corridor, Bijoliya, Bhilwara District, Rajasthan 311602.
              </p>
              <span className="text-[11px] font-bold text-[#938275]">
                ● CNC Chokhat groove routing & heavy pati splitting
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
