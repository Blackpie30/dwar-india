"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles, PhoneCall } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "Chokhats" | "Kota Stone" | "Bijoliya & Logistics";
}

const FAQS: FAQItem[] = [
  {
    question: "Why should I choose a Natural Stone Chokhat instead of a wooden or UPVC door frame?",
    answer:
      "Unlike wood, natural stone door frames (Chokhats) are 100% immune to termite infestations, never rot from floor moisture, and will never expand or jam during monsoon seasons. A stone Chokhat easily lasts 100+ years with zero maintenance or repainting costs.",
    category: "Chokhats",
  },
  {
    question: "What is the difference between Single Paitam and Double Paitam Chokhats?",
    answer:
      "A 'Paitam' is the machine-cut rebate groove that holds the door. Single Paitam has one groove for a single main door shutter (ideal for bathrooms and interior rooms). Double Paitam has two parallel grooves allowing you to install both a main wooden door and an insect/mosquito wire mesh door on the same frame.",
    category: "Chokhats",
  },
  {
    question: "Can standard hinges and heavy wooden/flush doors be fixed into stone Chokhats?",
    answer:
      "Yes, absolutely. During installation or on-site fitting, holes are drilled into the stone frame using standard masonry bits, and nylon anchor sleeves (rawl plugs) or SS screws are used to secure standard brass, SS, or antique hinges tightly.",
    category: "Chokhats",
  },
  {
    question: "How does Kota Stone flooring compare to vitrified tiles or marble?",
    answer:
      "Original Kota Stone is a high-density natural limestone with remarkable thermal properties—it stays naturally cool underfoot during hot Indian summers. Unlike vitrified tiles which can crack under impact, Kota Stone can be repolished decades later to look brand new.",
    category: "Kota Stone",
  },
  {
    question: "What thicknesses and finishes are available for Kota Stone & Bijoliya Slabs?",
    answer:
      "Kota stone slabs are available from 20mm to 40mm thickness in Mirror Polish, Semi-Honed, Antique Leather, and Rough/Bush-Hammered anti-skid finishes. Bijoliya slabs are supplied in 25mm to 60mm thickness for high-load verandahs and roofing spans.",
    category: "Bijoliya & Logistics",
  },
  {
    question: "Do you deliver truckloads directly to construction sites across India?",
    answer:
      "Yes. We dispatch truckload orders directly from our Suket (Kota) and Bijoliya (Bhilwara) manufacturing plants with GST invoice billing, timber-padded crating, and reliable pan-India logistics to states including Rajasthan, Gujarat, Maharashtra, Delhi NCR, UP, MP, Punjab, and Haryana.",
    category: "Bijoliya & Logistics",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Chokhats", "Kota Stone", "Bijoliya & Logistics"];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 relative bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#938275]" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--text-secondary)]">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-[var(--text-primary)] leading-[1.2]">
            Everything You Need to Know About{" "}
            <span className="soft-stone-gradient-text">Stone Door Frames & Slabs</span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal mt-3 leading-relaxed">
            Direct answers to common questions about stone Chokhat installation,
            Paitam rebate grooves, Kota flooring, and pan-India truckload logistics.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[#C9BFB2] text-[#121110] shadow-md scale-105"
                    : "bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] overflow-hidden transition-all duration-200 hover:border-[var(--border-hover)] shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-cinzel font-bold text-base sm:text-lg text-[var(--text-primary)] hover:text-[#C9BFB2] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#C9BFB2]/20 border-[#C9BFB2]/40" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#938275]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed border-t border-[var(--border-subtle)]/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Card */}
        <div className="mt-12 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-cinzel font-bold text-[var(--text-primary)]">
              Still have questions about sizes or door rebate drawings?
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
              Talk directly with proprietor Mahendra Kumar Saini for instant guidance.
            </p>
          </div>
          <a
            href="https://wa.me/919828123281?text=Namaste%20Mahendra%20ji,%20I%20have%20a%20question%20regarding%20stone%20door%20frames."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E4E2DC] via-[#C9BFB2] to-[#938275] text-[#121110] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 transition-all shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
