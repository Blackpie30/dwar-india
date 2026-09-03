"use client";

import React, { useEffect, useRef, CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type AllowedTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

export interface ThreeDTextRevealProps {
  text: string;
  as?: AllowedTag;
  className?: string;
  containerClassName?: string;
  scrollTrigger?: boolean;
  triggerOffset?: string;
  stagger?: number;
  duration?: number;
  ease?: string;
  rotationX?: number;
  translateY?: number;
  translateZ?: number;
  perspective?: number;
  highlightWords?: string[];
  highlightClassName?: string;
  style?: CSSProperties;
  onComplete?: () => void;
}

export const ThreeDTextReveal: React.FC<ThreeDTextRevealProps> = ({
  text,
  as = "h2",
  className = "",
  containerClassName = "",
  scrollTrigger = true,
  triggerOffset = "top 80%",
  stagger = 0.025,
  duration = 1.1,
  ease = "power4.out",
  rotationX = 85,
  translateY = 30,
  translateZ = -60,
  perspective = 1000,
  highlightWords = [],
  highlightClassName = "text-[#C9BFB2] drop-shadow-[0_2px_14px_rgba(201,191,178,0.35)] font-bold",
  style,
  onComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Split text into words and letters for natural wrapping and 3D character flipping
  const words = text.split(" ");

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll<HTMLSpanElement>(
      ".reveal-char"
    );

    if (!chars.length) return;

    const ctx = gsap.context(() => {
      // Set initial 3D transform on every character
      gsap.set(chars, {
        opacity: 0,
        rotateX: rotationX,
        y: translateY,
        z: translateZ,
        transformOrigin: "50% 50% -50px",
      });

      const animationConfig: gsap.TweenVars = {
        opacity: 1,
        rotateX: 0,
        y: 0,
        z: 0,
        duration,
        stagger,
        ease,
        onComplete,
      };

      if (scrollTrigger) {
        animationConfig.scrollTrigger = {
          trigger: containerRef.current,
          start: triggerOffset,
          toggleActions: "play none none none",
        };
      }

      gsap.to(chars, animationConfig);
    }, containerRef);

    return () => ctx.revert();
  }, [
    text,
    scrollTrigger,
    triggerOffset,
    stagger,
    duration,
    ease,
    rotationX,
    translateY,
    translateZ,
    onComplete,
  ]);

  const renderedWords = words.map((word, wordIdx) => {
    const isHighlighted = highlightWords.some(
      (hw) => hw.toLowerCase() === word.toLowerCase()
    );

    return (
      <span
        key={`${word}-${wordIdx}`}
        className={`inline-block whitespace-nowrap mr-[0.28em] ${
          isHighlighted ? highlightClassName : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {word.split("").map((char, charIdx) => (
          <span
            key={`${char}-${charIdx}`}
            className="reveal-char inline-block will-change-transform"
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
  });

  const contentElement = React.createElement(
    as,
    {
      className: `threed-text-reveal ${className}`,
      style: {
        transformStyle: "preserve-3d",
        display: "inline-block",
        lineHeight: "1.25",
      },
    },
    renderedWords
  );

  return (
    <div
      ref={containerRef}
      className={`threed-text-reveal-wrapper ${containerClassName}`}
      style={{ perspective: `${perspective}px`, ...style }}
    >
      {contentElement}
    </div>
  );
};

export default ThreeDTextReveal;
