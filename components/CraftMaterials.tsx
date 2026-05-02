"use client";

import { motion } from "motion/react";

const swatches = [
  {
    id: "white-oak",
    name: "White Oak",
    code: "WO",
    lines: ["#8B7A5E", "#9E8B72", "#7A6B52", "#A89B80", "#8B7A5E"],
    bg: "#C4B89A",
  },
  {
    id: "walnut",
    name: "Walnut",
    code: "WN",
    lines: ["#5C4030", "#6B4E3A", "#4E3428", "#7A5A44", "#5C4030"],
    bg: "#8B6848",
  },
  {
    id: "cherry",
    name: "Cherry",
    code: "CH",
    lines: ["#8B4A35", "#9E5840", "#7A3E2A", "#A86050", "#8B4A35"],
    bg: "#C47860",
  },
  {
    id: "ebonized-oak",
    name: "Ebonized Oak",
    code: "EO",
    lines: ["#2A2018", "#1E1610", "#342820", "#281E14", "#2A2018"],
    bg: "#1A1410",
  },
  {
    id: "natural-linen",
    name: "Natural Linen",
    code: "NL",
    lines: ["#D4C8AA", "#C8BC9E", "#DED2B4", "#CCB898", "#D4C8AA"],
    bg: "#E8DCB8",
  },
];

function MaterialSwatch({
  swatch,
  index,
}: {
  swatch: (typeof swatches)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      {/* SVG grain swatch */}
      <svg
        viewBox="0 0 120 80"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full mb-3"
        role="img"
        aria-label={`${swatch.name} wood grain sample`}
      >
        <rect width="120" height="80" fill={swatch.bg} />
        {/* Grain lines */}
        {Array.from({ length: 22 }).map((_, i) => (
          <line
            key={i}
            x1={0}
            y1={i * 4 + Math.sin(i * 0.8) * 2}
            x2={120}
            y2={i * 4 + 1 + Math.sin(i * 1.2) * 2}
            stroke={swatch.lines[i % swatch.lines.length]}
            strokeWidth={0.6}
            opacity={0.5 + (i % 3) * 0.1}
          />
        ))}
        {/* Subtle knot for some */}
        {index === 0 && (
          <ellipse cx="72" cy="44" rx="10" ry="6" fill="none" stroke={swatch.lines[0]} strokeWidth="0.5" opacity="0.4" />
        )}
        {/* Code stamp */}
        <text
          x="8"
          y="70"
          fontSize="8"
          fontFamily="Georgia, serif"
          fill={index === 3 ? "rgba(200,136,42,0.7)" : "rgba(255,255,255,0.4)"}
          letterSpacing="1"
        >
          {swatch.code}
        </text>
      </svg>

      <p
        style={{
          fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
          fontSize: "0.6875rem",
          letterSpacing: "0.1em",
          color: "rgba(245,240,232,0.6)",
          textTransform: "uppercase",
        }}
      >
        {swatch.name}
      </p>
    </motion.div>
  );
}

export default function CraftMaterials() {
  return (
    <section
      id="materials"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: "#1A1714" }}
      aria-label="Craft and Materials"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — editorial text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-6 mb-10">
              <div
                className="w-12 h-px"
                style={{ backgroundColor: "rgba(200,136,42,0.4)" }}
                aria-hidden="true"
              />
              <span
                style={{
                  fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                  fontSize: "0.625rem",
                  letterSpacing: "0.16em",
                  color: "#C8882A",
                  textTransform: "uppercase",
                }}
              >
                The Wood
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#F5F0E8",
                lineHeight: 1.15,
                marginBottom: "2rem",
              }}
            >
              Everything begins
              <br />
              <em>at the mill.</em>
            </h2>

            <div
              className="space-y-5"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.72)",
              }}
            >
              <p>
                We source exclusively from{" "}
                <strong style={{ color: "#F5F0E8", fontWeight: 400 }}>
                  Harrowfield Mill
                </strong>{" "}
                in Asheville, North Carolina — a family-run sawmill operating
                since 1948. Every board arrives air-dried for a minimum of three
                years before it touches our shop floor.
              </p>
              <p>
                Air-drying is slower than kiln-drying. It costs more in time and
                warehouse space. It is the only way to preserve the figure of the
                grain — the movement that makes a walnut slab unmistakably itself.
              </p>
              <p>
                We work with five species, chosen for their structural honesty as
                much as their beauty. Each one behaves differently under the hand
                plane. Each one ages differently in your home.
              </p>
              <p>
                A piece from Marrow & Grain contains no composite materials, no
                pocket screws, no filler. If you look underneath, it looks like the
                inside of a good book — worth the examination.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote
              className="mt-10 pl-6"
              style={{
                borderLeft: "1px solid rgba(200,136,42,0.4)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "1.0625rem",
                  fontStyle: "italic",
                  color: "rgba(245,240,232,0.8)",
                  lineHeight: 1.55,
                }}
              >
                &ldquo;The grain is a document. It records every drought,
                every wet spring, every decade of growth. We read it before we
                cut it.&rdquo;
              </p>
              <footer
                className="mt-3"
                style={{
                  fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.08em",
                  color: "#C8882A",
                  textTransform: "uppercase",
                }}
              >
                — Harrowfield Mill, Est. 1948
              </footer>
            </blockquote>
          </motion.div>

          {/* Right — swatch grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.6875rem",
                letterSpacing: "0.14em",
                color: "rgba(245,240,232,0.4)",
                textTransform: "uppercase",
              }}
            >
              Available Species &amp; Materials
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {swatches.map((swatch, i) => (
                <MaterialSwatch key={swatch.id} swatch={swatch} index={i} />
              ))}
            </div>

            {/* Finish note */}
            <div
              className="mt-12 pt-8"
              style={{
                borderTop: "0.5px solid rgba(245,240,232,0.1)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                  fontSize: "0.8125rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.5)",
                }}
              >
                All pieces are finished with{" "}
                <span style={{ color: "rgba(245,240,232,0.8)" }}>
                  Rubio Monocoat
                </span>{" "}
                — a single-layer hardwax oil that does not build a film on the
                surface. The wood remains wood. It dents. It scratches. It
                becomes yours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
