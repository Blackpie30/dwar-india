import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Layers, MessageSquare, PhoneCall } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | DWAR INDIA",
  description:
    "The architectural stone page you are looking for does not exist. Return to Dwar India's natural stone collection and chokhat fabrication catalog.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#121110] text-[#E4E2DC] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Stone Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#938275]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-xl mx-auto space-y-6">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1A17] border border-[#C9BFB2]/30 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#C9BFB2]"></span>
          <span className="text-xs uppercase tracking-widest font-bold text-[#C5BCB1]">
            Dwar India • Error 404
          </span>
        </div>

        {/* 404 Number */}
        <h1 className="text-7xl sm:text-9xl font-cinzel font-black tracking-tight text-[#E4E2DC]">
          4<span className="text-[#C9BFB2]">0</span>4
        </h1>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#FFFFFF]">
          Architectural Page Not Found
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#C5BCB1] leading-relaxed max-w-md mx-auto">
          The stone specimen or page you were looking for might have been relocated
          or is temporarily unavailable. Let us guide you back to our quarry catalog.
        </p>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E4E2DC] via-[#C9BFB2] to-[#938275] text-[#121110] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>

          <Link
            href="/#products"
            className="px-6 py-3.5 rounded-xl bg-[#1C1A17] border border-[#C9BFB2]/30 text-[#E4E2DC] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:border-[#E4E2DC] transition-all"
          >
            <Layers className="w-4 h-4 text-[#C9BFB2]" />
            Stone Collection
          </Link>

          <a
            href="https://wa.me/919828123281?text=Hello%20Dwar%20India,%20I%20need%20assistance%20finding%20stone%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            Contact WhatsApp Concierge
          </a>
        </div>
      </div>
    </main>
  );
}
