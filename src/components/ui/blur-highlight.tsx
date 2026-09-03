"use client";

import React, { useEffect, useRef, CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface HighlightConfig {
  text: string;
  className?: string;
  bgGradient?: string;
  textColor?: string;
}

export type BlurHighlightTag = "p" | "h1" | "h2" | "h3" | "h4" | "div" | "span";

export interface BlurHighlightProps {
  text: string;
  as?: BlurHighlightTag;
  className?: string;
  containerClassName?: string;
  highlights?: (string | HighlightConfig)[];
  defaultHighlightClassName?: string;
  blurAmount?: number;
  duration?: number;
  stagger?: number;
  scrollTrigger?: boolean;
  triggerOffset?: string;
  ease?: string;
  style?: CSSProperties;
  onComplete?: () => void;
}

export const BlurHighlight: React.FC<BlurHighlightProps> = ({
  text,
  as = "p",
  className = "",
  containerClassName = "",
  highlights = [],
  defaultHighlightClassName = "px-2 py-0.5 rounded-lg bg-[#C9BFB2]/20 border border-[#C9BFB2]/40 text-[var(--text-primary)] font-semibold shadow-sm",
  blurAmount = 10,
  duration = 0.75,
  stagger = 0.035,
  scrollTrigger = true,
  triggerOffset = "top 85%",
  ease = "power3.out",
  style,
  onComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize highlights list
  const normalizedHighlights: HighlightConfig[] = highlights.map((h) =>
    typeof h === "string" ? { text: h } : h
  );

  // Helper to split paragraph text into words while keeping track of multi-word highlights
  const words = text.split(" ");

  useEffect(() => {
    if (!containerRef.current) return;

    const wordEls = containerRef.current.querySelectorAll<HTMLSpanElement>(
      ".blur-word"
    );
    const highlightEls = containerRef.current.querySelectorAll<HTMLSpanElement>(
      ".blur-highlight-target"
    );

    if (!wordEls.length) return;

    const ctx = gsap.context(() => {
      // 1. Initial State: blurred out & slightly shifted down
      gsap.set(wordEls, {
        filter: `blur(${blurAmount}px)`,
        opacity: 0,
        y: 12,
      });

      if (highlightEls.length) {
        gsap.set(highlightEls, {
          scale: 0.95,
          opacity: 0.8,
        });
      }

      // 2. Timeline Animation
      const tl = gsap.timeline({
        scrollTrigger: scrollTrigger
          ? {
              trigger: containerRef.current,
              start: triggerOffset,
              toggleActions: "play none none none",
            }
          : undefined,
        onComplete,
      });

      // De-blur and fade in all words with smooth cascade
      tl.to(wordEls, {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease,
      });

      // Illuminate and pop the highlight badges
      if (highlightEls.length) {
        tl.to(
          highlightEls,
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            stagger: 0.1,
            ease: "back.out(1.5)",
          },
          "-=0.2"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [
    text,
    blurAmount,
    duration,
    stagger,
    scrollTrigger,
    triggerOffset,
    ease,
    onComplete,
  ]);

  const renderedWords = words.map((word, index) => {
    // Strip punctuation for matching
    const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    const matchingHighlight = normalizedHighlights.find(
      (h) => h.text.toLowerCase() === cleanWord.toLowerCase()
    );

    if (matchingHighlight) {
      return (
        <span
          key={`${word}-${index}`}
          className="blur-word inline-block mr-[0.28em] will-change-transform"
        >
          <span
            className={`blur-highlight-target inline-block transition-all ${
              matchingHighlight.className || defaultHighlightClassName
            }`}
          >
            {word}
          </span>
        </span>
      );
    }

    return (
      <span
        key={`${word}-${index}`}
        className="blur-word inline-block mr-[0.28em] will-change-transform"
      >
        {word}
      </span>
    );
  });

  const contentElement = React.createElement(
    as,
    {
      className: `blur-highlight-content leading-relaxed ${className}`,
    },
    renderedWords
  );

  return (
    <div
      ref={containerRef}
      className={`blur-highlight-container ${containerClassName}`}
      style={style}
    >
      {contentElement}
    </div>
  );
};

export default BlurHighlight;
