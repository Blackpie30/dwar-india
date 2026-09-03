"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ChevronDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const IntroDwarPortal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const portalGlowRef = useRef<HTMLDivElement>(null);

  const line1 = ["THE", "DWAR"];
  const line2 = ["TO", "YOUR", "DREAMS"];

  useEffect(() => {
    if (!containerRef.current || !stageRef.current) return;

    const chars = headlineRef.current?.querySelectorAll<HTMLSpanElement>(".intro-char");
    if (!chars || !chars.length) return;

    const ctx = gsap.context(() => {
      // 1. Initial State: completely invisible and rotated slightly in 3D
      gsap.set(chars, {
        opacity: 0,
        rotateX: 70,
        y: 40,
        z: -60,
        transformOrigin: "50% 50% -40px",
      });

      if (badgeRef.current) {
        gsap.set(badgeRef.current, { opacity: 0, y: -20 });
      }

      // 2. Timeline scrubbed to page scroll across the 200vh track
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      // Step 1: Reveal Badge and ambient background glow
      tl.to(
        badgeRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        0.05
      );

      if (portalGlowRef.current) {
        tl.to(
          portalGlowRef.current,
          {
            scale: 1.4,
            opacity: 0.9,
            ease: "sine.inOut",
          },
          0.1
        );
      }

      // Step 2: 3D Characters flip into crisp view as you scroll
      tl.to(
        chars,
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          z: 0,
          stagger: 0.03,
          duration: 0.45,
          ease: "power3.out",
        },
        0.12
      );

      // Step 3: Fade out the scroll cue
      if (hintRef.current) {
        tl.to(
          hintRef.current,
          {
            opacity: 0,
            y: 15,
            duration: 0.15,
          },
          0.08
        );
      }

      // Step 4: Portal exit - smooth lift & dissolve into the main website
      tl.to(
        [headlineRef.current, badgeRef.current],
        {
          opacity: 0,
          scale: 1.12,
          y: -40,
          filter: "blur(6px)",
          ease: "power2.in",
          duration: 0.35,
        },
        0.75
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="intro-portal-track relative w-full h-[220vh] bg-[var(--bg-primary)] z-30"
    >
      {/* Sticky Fullscreen Stage */}
      <div
        ref={stageRef}
        className="sticky top-0 w-full h-screen flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 py-10 overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        {/* Background ambient lighting */}
        <div
          ref={portalGlowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-gradient-to-tr from-[#938275]/20 via-[#C9BFB2]/15 to-transparent rounded-full blur-[140px] pointer-events-none opacity-40"
        />
        <div className="absolute inset-0 noise-bg pointer-events-none opacity-40" />

        {/* Top Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] backdrop-blur-md shadow-lg z-10 opacity-0"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#938275]" />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--text-secondary)]">
            DWAR INDIA • Architectural Gateway
          </span>
        </div>

        {/* Center: 3D Animated Grand Headline formatted in two elegant lines */}
        <div
          ref={headlineRef}
          className="my-auto text-center max-w-5xl z-10 flex flex-col items-center gap-2 sm:gap-4"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Line 1: THE DWAR */}
          <div className="flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-5">
            {line1.map((word, wIdx) => {
              const isHighlight = word === "DWAR";
              return (
                <span
                  key={`l1-${word}-${wIdx}`}
                  className={`inline-block font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight ${
                    isHighlight
                      ? "text-[#E4E2DC] drop-shadow-[0_4px_24px_rgba(201,191,178,0.35)]"
                      : "text-[var(--text-primary)]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {word.split("").map((char, cIdx) => (
                    <span
                      key={`l1-${char}-${cIdx}`}
                      className="intro-char inline-block will-change-transform opacity-0"
                      style={{
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              );
            })}
          </div>

          {/* Line 2: TO YOUR DREAMS */}
          <div className="flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-5">
            {line2.map((word, wIdx) => {
              const isHighlight = word === "DREAMS";
              return (
                <span
                  key={`l2-${word}-${wIdx}`}
                  className={`inline-block font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight ${
                    isHighlight
                      ? "text-[#C9BFB2] drop-shadow-[0_4px_24px_rgba(201,191,178,0.35)]"
                      : "text-[var(--text-secondary)]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {word.split("").map((char, cIdx) => (
                    <span
                      key={`l2-${char}-${cIdx}`}
                      className="intro-char inline-block will-change-transform opacity-0"
                      style={{
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              );
            })}
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Rajasthan Natural Stone Monoliths & Fabrication
          </p>
        </div>

        {/* Bottom Scroll Cue */}
        <div
          ref={hintRef}
          className="flex flex-col items-center gap-2 z-10 text-[var(--text-secondary)]"
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.2em]">
            Scroll to Enter Sanctuary
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#938275]" />
        </div>
      </div>
    </div>
  );
};

export default IntroDwarPortal;
