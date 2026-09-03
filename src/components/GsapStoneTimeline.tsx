"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BorderGlow } from "@/components/ui/BorderGlow";
import {
  Pickaxe,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Truck,
  ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Geological Selection",
    location: "Suket & Bijoliya Quarry Mines",
    desc: "Extraction of raw massive monolithic limestone and quartzitic sandstone blocks with zero fissures.",
    icon: Pickaxe,
    highlight: "High-Density Core",
    metrics: "2.70 g/cm³ Bulk Density",
  },
  {
    step: "02",
    title: "CNC Diamond Calibration",
    location: "Suket Processing Hub",
    desc: "Computerized diamond wire-saws slice blocks into precise slab profiles with strict millimeter tolerance.",
    icon: Cpu,
    highlight: "±0.5mm Accuracy",
    metrics: "Zero Warp Calibration",
  },
  {
    step: "03",
    title: "Groove & Edge Profiling",
    location: "Bijoliya Fabrication Center",
    desc: "Routing of single & double Paitam door rebates and custom Bullnose or Ogee edge molding curves.",
    icon: Layers,
    highlight: "Single/Double Paitam",
    metrics: "Dual Mesh & Door Rebates",
  },
  {
    step: "04",
    title: "Direct Site Logistics",
    location: "Pan-India Direct Dispatch",
    desc: "Custom timber-padded crates and dedicated transport logistics delivered straight to your building site.",
    icon: Truck,
    highlight: "100% Transit Safe",
    metrics: "Direct Quarry Billing",
  },
];

export const GsapStoneTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Headline GSAP Reveal
      if (headlineRef.current) {
        gsap.from(headlineRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        });
      }

      // Timeline Cards GSAP Stagger
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 60,
          opacity: 0,
          scale: 0.96,
          duration: 0.8,
          stagger: 0.18,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="fabrication-journey"
      className="py-24 sm:py-32 relative bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#938275]/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* GSAP Animated Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#938275]" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--text-secondary)]">
              GSAP Motion & Precision Journey
            </span>
          </div>

          <h2
            ref={headlineRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-[var(--text-primary)] leading-[1.2]"
          >
            <span>From Deep Rajasthan Mines to</span>{" "}
            <span className="soft-stone-gradient-text">Finished Architectural Portals</span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal mt-4 leading-relaxed">
            Witness how raw geological stone blocks are transformed with computerized
            diamond machinery into generational Chokhat door frameworks.
          </p>
        </div>

        {/* 4 Steps Grid wrapped in React Bits <BorderGlow /> */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TIMELINE_STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <BorderGlow
                key={item.step}
                borderRadius={20}
                glowRadius={35}
                glowIntensity={1.2}
                edgeSensitivity={25}
                glowColor="35 30 75"
                backgroundColor="var(--bg-card)"
                colors={["#E4E2DC", "#C9BFB2", "#938275"]}
                className="h-full"
              >
                <div className="p-6 sm:p-7 flex flex-col justify-between h-full min-h-[320px]">
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] font-cinzel font-black text-sm text-[var(--text-primary)] flex items-center justify-center shadow-sm">
                        {item.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#C9BFB2]/15 border border-[#C9BFB2]/30 flex items-center justify-center text-[#938275]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#938275] font-bold block mb-1">
                      {item.location}
                    </span>

                    <h3 className="text-lg font-cinzel font-bold text-[var(--text-primary)] mb-2.5 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-light mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Metric Badge */}
                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                    <span className="text-[11px] font-bold text-[var(--text-primary)]">
                      {item.highlight}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      {item.metrics}
                    </span>
                  </div>
                </div>
              </BorderGlow>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C9BFB2]/20 border border-[#C9BFB2]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#938275]" />
            </div>
            <div>
              <h4 className="text-base font-cinzel font-bold text-[var(--text-primary)]">
                Have Architectural Drawings or Custom Sizes?
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
                Share your door schedules for a detailed computerized stone estimate.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919828123281?text=Namaste%20Mahendra%20ji,%20I%20have%20architectural%20drawings%20for%20stone%20door%20frames."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#E4E2DC] via-[#C9BFB2] to-[#938275] text-[#121110] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 transition-all shrink-0"
          >
            <span>Send Plans on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
