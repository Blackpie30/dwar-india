"use client";

import React from "react";
import { ScrollExpand } from "@/components/ui/ScrollExpand";
import { Sparkles, Layers, PhoneCall } from "lucide-react";

export const ArchitecturalScrollHero: React.FC = () => {
  return (
    <section className="relative bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="w-full">
        <ScrollExpand
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Dwar India Architectural Stone Gateway"
          title="Monolithic Stone Portals"
          scrollHint="Scroll to Expand Perspective"
          useWindowScroll={true}
          startWidth={44}
          startHeight={54}
          startRadius={28}
          endRadius={0}
          mediaZoom={1.25}
          scrollDistance={1.4}
          holdDistance={0.5}
          smoothing={0.08}
          overlayScrim={0.6}
          className="w-full"
        >
          <div className="max-w-3xl mx-auto text-center px-4 py-8 space-y-5 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#C9BFB2]/40 backdrop-blur-md shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-[#C9BFB2]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E4E2DC]">
                Quarry Direct Architecture
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-black tracking-tight text-[#FFFFFF] drop-shadow-lg leading-tight">
              Precision Engineering for <br />
              <span className="text-[#C9BFB2]">Generational Architecture</span>
            </h3>

            <p className="text-sm sm:text-base text-[#E4E2DC] font-light max-w-xl mx-auto leading-relaxed drop-shadow-md">
              From Suket limestone beds to high-load Bijoliya quartzitic sandstone spans,
              every Chokhat frame is carved to endure 100+ years.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#products"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E4E2DC] via-[#C9BFB2] to-[#938275] text-[#121110] font-bold text-xs uppercase tracking-[0.14em] shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <Layers className="w-4 h-4" />
                Browse Stone Collection
              </a>

              <a
                href="https://wa.me/919828123281?text=Namaste%20Dwar%20India,%20I%20want%20to%20inquire%20about%20monolithic%20stone%20door%20frames."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-black/70 border border-[#C9BFB2]/40 text-[#E4E2DC] font-semibold text-xs uppercase tracking-[0.14em] backdrop-blur-md hover:border-white transition-all flex items-center gap-2 shadow-xl"
              >
                <PhoneCall className="w-4 h-4 text-[#C9BFB2]" />
                WhatsApp Direct Desk
              </a>
            </div>
          </div>
        </ScrollExpand>
      </div>
    </section>
  );
};
