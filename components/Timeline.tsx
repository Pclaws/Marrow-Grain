"use client";

import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "You choose",
    weeks: "Week 1",
    copy:
      "We talk. Dimensions, species, finish, delivery window. You approve a drawing. Nothing moves until you say go.",
  },
  {
    num: "02",
    title: "We source",
    weeks: "Weeks 2–3",
    copy:
      "Your boards are selected at Harrowfield Mill, trucked to our shop, and acclimate to our space before any cut is made.",
  },
  {
    num: "03",
    title: "We build",
    weeks: "Weeks 4–8",
    copy:
      "Hand tools and machines, in that order. Mortises cut by hand. Tenons fitted by feel. Surfaces finished in three stages.",
  },
  {
    num: "04",
    title: "We deliver",
    weeks: "Weeks 9–10",
    copy:
      "White-glove delivery to your room. We place it, we level it, we leave you with care instructions and a spare tin of finish.",
  },
];

export default function Timeline() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden"
      aria-label="Made-to-order process and timeline"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
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
              The Process
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#1A1714",
              lineHeight: 1.1,
              maxWidth: "26ch",
            }}
          >
            Six to ten weeks is not the wait.
            <br />
            <em>It is the point.</em>
          </h2>

          <p
            className="mt-5 max-w-xl"
            style={{
              fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "#4A4440",
            }}
          >
            Nothing we make is in stock. Everything is made for one person, once.
            That is the only supply chain that interests us.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{ backgroundColor: "rgba(26,23,20,0.1)" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
              >
                {/* Oversized numeral */}
                <div
                  className="mb-4 leading-none"
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "5rem",
                    fontWeight: 700,
                    color: "rgba(26,23,20,0.06)",
                    lineHeight: 0.85,
                    userSelect: "none",
                  }}
                >
                  {step.num}
                </div>

                {/* Step dot on the line */}
                <div
                  className="hidden lg:block absolute top-12 left-0 w-2 h-2 rounded-full -translate-y-1/2"
                  style={{ backgroundColor: "#1A1714", opacity: 0.35 }}
                  aria-hidden="true"
                />

                <div
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                    fontSize: "0.625rem",
                    letterSpacing: "0.14em",
                    color: "#C8882A",
                    textTransform: "uppercase",
                  }}
                >
                  {step.weeks}
                </div>

                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    color: "#1A1714",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "#4A4440",
                  }}
                >
                  {step.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
