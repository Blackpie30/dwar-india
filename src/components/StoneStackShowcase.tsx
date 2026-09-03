"use client";

import React from "react";
import { ScrollStack, ScrollStackItem } from "@/components/ui/scroll-stack";
import { Sparkles } from "lucide-react";

export const StoneStackShowcase: React.FC = () => {
  const STACK_ITEMS: ScrollStackItem[] = [
    {
      id: 1,
      title: "Monolithic Stone Door Frames (Chokhats)",
      category: "Architectural Framework",
      badge: "Termite Proof Forever",
      description:
        "Carved from dense natural limestone and quartzitic sandstone blocks. Unlike wooden frames, natural stone door frames never rot, swell during monsoons, or get damaged by termites.",
      stats: [
        { label: "Lifespan", value: "100+ Years" },
        { label: "Termite Risk", value: "0% Absolute" },
        { label: "Rebates", value: "Single & Double" },
      ],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      ctaText: "Inquire Chokhat Sizes",
      bgColor: "var(--bg-card)",
    },
    {
      id: 2,
      title: "Original Kota Stone Flooring Slabs",
      category: "Flooring & Paving",
      badge: "Natural Cool Comfort",
      description:
        "Quarried directly from Suket and Ramganjmandi geological beds. Features high load density, silky honed finishes, and unmatched cool temperatures even in peak Indian summers.",
      stats: [
        { label: "Origin", value: "Suket, Kota" },
        { label: "Thermal", value: "Naturally Cool" },
        { label: "Tolerance", value: "CNC Calibrated" },
      ],
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      ctaText: "Order Kota Truckloads",
      bgColor: "#1E1B18",
    },
    {
      id: 3,
      title: "Heavy Bijoliya Quartzitic Roofing Pati",
      category: "Structural Roofing & Spans",
      badge: "Ultra Heavy-Duty",
      description:
        "High-density quartzitic sandstone slabs engineered for heavy-load verandah ceilings, balcony overhangs, boundary coping, and courtyard pathways with zero color fading.",
      stats: [
        { label: "Origin", value: "Bijoliya Belt" },
        { label: "Density", value: "2.72 g/cm³" },
        { label: "Weathering", value: "Acid & Heat Proof" },
      ],
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      ctaText: "Get Bijoliya Rates",
      bgColor: "#241F1A",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#938275]" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--text-secondary)]">
              Stacked Stone Specializations
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-[var(--text-primary)] leading-[1.2]">
            Engineered for <span className="soft-stone-gradient-text">Generational Strength</span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal mt-3 leading-relaxed">
            Scroll down to watch our 3 signature stone product tiers stack seamlessly with
            physics-based GSAP tactile transitions.
          </p>
        </div>

        {/* Pinned ScrollStack component */}
        <ScrollStack items={STACK_ITEMS} offset={28} scaleStep={0.04} />
      </div>
    </section>
  );
};

export default StoneStackShowcase;
