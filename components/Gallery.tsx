"use client";

import Image from "next/image";
import { motion } from "motion/react";

const photos = [
  {
    src: "/gallery_1.png",
    alt: "Ridgeline Dining Table in a light-filled Asheville loft, white oak against plaster walls",
    caption: "Asheville, NC — Client residence",
    w: 720,
    h: 900,
  },
  {
    src: "/credenza.png",
    alt: "Brink Credenza in ebonized oak in a dark-walled study, amber lamp glow",
    caption: "Nashville, TN — Client residence",
    w: 680,
    h: 840,
  },
  {
    src: "/lounge_chair.png",
    alt: "Shelter Lounge Chair in walnut and linen in a sun-drenched corner with a side table",
    caption: "Charleston, SC — Client residence",
    w: 760,
    h: 860,
  },
];

export default function Gallery() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden"
      aria-label="In-context gallery"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6 mb-6">
            <div
              className="w-12 h-px"
              style={{ backgroundColor: "rgba(26,23,20,0.2)" }}
              aria-hidden="true"
            />
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.625rem",
                letterSpacing: "0.16em",
                color: "#8A7F78",
                textTransform: "uppercase",
              }}
            >
              In Context
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#1A1714",
              lineHeight: 1.1,
            }}
          >
            Where they live.
          </h2>
        </motion.div>

        {/* Staggered, overlapping layout */}
        <div className="relative">
          {/* Photo 1 — left, tall */}
          <motion.figure
            className="relative z-10 ml-0 w-full md:w-[52%] mb-4 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 52vw"
              />
            </div>
            <figcaption
              className="mt-3"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.625rem",
                letterSpacing: "0.1em",
                color: "#8A7F78",
                textTransform: "uppercase",
              }}
            >
              {photos[0].caption}
            </figcaption>
          </motion.figure>

          {/* Photo 2 — right, offset up, overlapping */}
          <motion.figure
            className="relative z-20 md:absolute md:right-0 md:top-[-40px] w-full md:w-[44%] mb-4 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.12,
            }}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 44vw"
              />
            </div>
            <figcaption
              className="mt-3"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.625rem",
                letterSpacing: "0.1em",
                color: "#8A7F78",
                textTransform: "uppercase",
              }}
            >
              {photos[1].caption}
            </figcaption>
          </motion.figure>

          {/* Spacer for absolute positioning */}
          <div
            className="hidden md:block"
            style={{ paddingTop: "max(60%, 480px)" }}
            aria-hidden="true"
          />
        </div>

        {/* Photo 3 — centered, lower */}
        <motion.figure
          className="relative z-10 mx-auto w-full md:w-[58%] mt-8 md:-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
          <figcaption
            className="mt-3"
            style={{
              fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
              fontSize: "0.625rem",
              letterSpacing: "0.1em",
              color: "#8A7F78",
              textTransform: "uppercase",
            }}
          >
            {photos[2].caption}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
