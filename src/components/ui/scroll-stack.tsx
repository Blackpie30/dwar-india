"use client";

import React, { useEffect, useRef, CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollStackItem {
  id: string | number;
  title: string;
  category?: string;
  description: string;
  badge?: string;
  icon?: React.ReactNode;
  image?: string;
  stats?: { label: string; value: string }[];
  ctaText?: string;
  ctaLink?: string;
  bgColor?: string;
  textColor?: string;
}

export interface ScrollStackProps {
  items: ScrollStackItem[];
  className?: string;
  cardClassName?: string;
  offset?: number;
  scaleStep?: number;
  rotationSpread?: number;
  scrub?: boolean | number;
  style?: CSSProperties;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  items,
  className = "",
  cardClassName = "",
  offset = 24,
  scaleStep = 0.04,
  rotationSpread = 2.5,
  scrub = 0.5,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || items.length === 0) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Calculate total scroll distance based on card count
      const totalCards = cards.length;

      cards.forEach((card, index) => {
        // We set the initial stacking context
        gsap.set(card, {
          position: "sticky",
          top: `calc(12vh + ${index * offset}px)`,
          zIndex: index + 1,
        });

        // If it's not the last card, animate it as the next card covers it
        if (index < totalCards - 1) {
          const targetScale = 1 - (totalCards - 1 - index) * scaleStep;
          const rotation = ((index % 2 === 0 ? -1 : 1) * rotationSpread);

          gsap.to(card, {
            scale: targetScale,
            rotation: rotation,
            opacity: 0.7,
            filter: "blur(1px)",
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top 65%",
              end: "top 20%",
              scrub: scrub,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [items, offset, scaleStep, rotationSpread, scrub]);

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[index] = el;
  };

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-container relative w-full ${className}`}
      style={style}
    >
      <div className="scroll-stack-list flex flex-col items-center gap-12 sm:gap-16 pb-20">
        {items.map((item, index) => (
          <div
            key={item.id}
            ref={setCardRef(index)}
            className={`scroll-stack-card w-full max-w-4xl rounded-3xl p-6 sm:p-10 border border-[var(--border-subtle)] shadow-2xl transition-shadow duration-300 backdrop-blur-xl ${
              item.bgColor ? "" : "bg-[var(--bg-card)]"
            } ${cardClassName}`}
            style={{
              backgroundColor: item.bgColor || "var(--bg-card)",
              color: item.textColor || "var(--text-primary)",
              willChange: "transform, opacity, filter",
            }}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="flex-1 space-y-4">
                {/* Badge / Category */}
                <div className="flex items-center gap-3">
                  {item.badge && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#C9BFB2]/15 border border-[#C9BFB2]/30 text-[#C9BFB2]">
                      {item.badge}
                    </span>
                  )}
                  {item.category && (
                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed max-w-xl">
                  {item.description}
                </p>

                {/* Stats Grid */}
                {item.stats && item.stats.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--border-subtle)]">
                    {item.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="text-xs font-mono text-[var(--text-muted)] uppercase">
                          {stat.label}
                        </div>
                        <div className="text-base sm:text-lg font-bold font-cinzel text-[var(--text-primary)]">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Link */}
                {item.ctaText && (
                  <div className="pt-2">
                    <a
                      href={
                        item.ctaLink ||
                        "https://wa.me/919828123281?text=Namaste%20Dwar%20India,%20I%20want%20to%20inquire%20about%20stone%20orders."
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#E4E2DC] via-[#C9BFB2] to-[#938275] text-[#121110] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                    >
                      {item.ctaText}
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Image / Graphic Slot */}
              {item.image && (
                <div className="w-full lg:w-72 h-48 sm:h-56 rounded-2xl overflow-hidden border border-[var(--border-subtle)] shrink-0 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollStack;
