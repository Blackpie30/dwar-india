"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleQuickSend = (msg: string) => {
    window.open(
      `https://wa.me/919828123281?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Concierge Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-hover)] p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h4 className="text-xs font-cinzel font-bold text-[var(--text-primary)]">
                  Dwar India WhatsApp
                </h4>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  Factory Desk Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">
            Namaste! Message Mahendra Kumar Saini directly for stone door frame
            prices, Kota stone flooring, or custom sizes:
          </p>

          <div className="space-y-1.5">
            {[
              "🏛️ Stone Door Frame (Chokhat) Rates",
              "📦 Kota Stone Flooring Prices",
              "🏗️ Bijoliya Roofing Pati Slabs",
              "📐 Send House Door Sizes & Plan",
            ].map((text) => (
              <button
                key={text}
                onClick={() =>
                  handleQuickSend(
                    `Namaste Dwar India, I want to inquire about ${text.replace(/^[^\s]+\s/, "")}.`
                  )
                }
                className="w-full text-left p-2.5 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] transition-all flex items-center justify-between group shadow-sm"
              >
                <span className="truncate">{text}</span>
                <Send className="w-3.5 h-3.5 text-[#938275] opacity-60 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
              </button>
            ))}
          </div>

          <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] text-center">
            <a
              href="https://wa.me/919828123281"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-[#938275] hover:underline block"
            >
              Chat on WhatsApp (+91 98281 23281) →
            </a>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
        aria-label="Direct WhatsApp Concierge"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C9BFB2] border-2 border-[var(--bg-primary)] flex items-center justify-center text-[9px] font-black text-[#121110]">
          1
        </span>
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};
