"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Image moves at 70% scroll speed (30% parallax lag)
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#F9F8F6]"
      aria-label="Featured piece — Ridgeline Dining Table"
    >
      {/* Left — static text */}
      <div className="w-full lg:w-1/2 flex items-center px-6 md:px-12 lg:pl-16 lg:pr-24 pt-32 pb-16 lg:py-0 z-10 min-h-[50vh] lg:min-h-screen">
        <motion.div
          className="w-full max-w-xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          {/* Specimen label */}
          <motion.p
            className="text-xs tracking-widest uppercase mb-8 opacity-60"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
              letterSpacing: "0.14em",
              fontSize: "0.625rem",
              color: "#1A1714",
            }}
          >
            No. 001 — Featured Space
          </motion.p>

          <motion.h1
            className="font-display leading-none mb-8"
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.025em",
              color: "#1A1714",
            }}
          >
            Ridgeline
            <br />
            <em>Dining</em>
            <br />
            Table
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p
              className="mb-8 max-w-sm"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "#4A4440",
              }}
            >
              White oak, sustainably sourced from Harrowfield Mill. Mortise-and-tenon
              joinery. No fasteners. Made to your dimensions.
            </p>

            <p
              className="text-sm mb-12"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.875rem",
                color: "#4A4440",
              }}
            >
              from{" "}
              <span
                style={{
                  color: "#C8882A",
                  fontSize: "1.35rem",
                  fontWeight: 500,
                }}
              >
                $2,400
              </span>
            </p>

            <a
              href="#samples"
              className="inline-flex items-center gap-3 group relative overflow-hidden px-6 py-3 bg-[#1A1714] text-[#F9F8F6] rounded-full hover:bg-[#3A3530] transition-colors duration-300"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.8125rem",
                letterSpacing: "0.06em",
                textDecoration: "none",
              }}
            >
              Request samples
              <span
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </motion.div>

          {/* Scroll cue */}
          <div className="mt-20 lg:mt-32 hidden lg:flex items-center gap-4 opacity-40">
            <div
              className="w-12 h-px"
              style={{ backgroundColor: "#1A1714" }}
              aria-hidden="true"
            />
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.625rem",
                letterSpacing: "0.14em",
                color: "#1A1714",
                textTransform: "uppercase",
              }}
            >
              Scroll
            </span>
          </div>
        </motion.div>
      </div>

      {/* Right — parallax image half screen WOW effect */}
      <motion.div
        className="relative w-full lg:w-1/2 h-[60vh] lg:h-screen overflow-hidden"
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1] }}
      >
        <motion.div
          className="relative w-full h-full origin-bottom"
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.15]),
            y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&w=1600&q=80"
            alt="Stunning modern minimalist interior with white oak dining table"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Subtle vignette/glassmorphism overlay for dramatic effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/60 via-transparent to-transparent pointer-events-none" />

          {/* Inset caption overlaying the image */}
          <motion.div
            className="absolute bottom-10 left-8 right-8 lg:bottom-16 lg:left-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            aria-hidden="true"
          >
            <div
              className="w-12 h-[2px] mb-4"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            />
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.6875rem",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.9)",
                textTransform: "uppercase",
              }}
            >
              White Oak — Ref. RDG-001
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
