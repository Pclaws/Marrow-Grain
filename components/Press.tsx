"use client";

import { motion } from "motion/react";

const pressItems = [
  {
    outlet: "Architectural Digest",
    quote:
      "A studio that treats lead time as a feature, not a bug. The Ridgeline table is one of the finest dining tables made in America today.",
    year: "2024",
  },
  {
    outlet: "Dwell",
    quote:
      "Marrow & Grain are doing something quietly radical: furniture that is designed to outlast the people who ordered it.",
    year: "2023",
  },
];

const testimonials = [
  {
    quote:
      "We waited nine weeks. The table arrived on a Tuesday morning and we haven't stopped eating at home since.",
    name: "Sarah & James L.",
    location: "Asheville, NC",
  },
  {
    quote:
      "I sent the dimensions of an awkward alcove. They came back with a drawing that solved a problem I'd had for four years.",
    name: "Marcus T.",
    location: "Nashville, TN",
  },
  {
    quote:
      "The ebonized credenza is the first piece of furniture I have ever been emotionally attached to. That sounds absurd. It is true.",
    name: "Claire H.",
    location: "Charleston, SC",
  },
];

export default function Press() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16"
      style={{
        borderTop: "0.5px solid rgba(26,23,20,0.1)",
        borderBottom: "0.5px solid rgba(26,23,20,0.1)",
      }}
      aria-label="Press and testimonials"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Press mentions */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {pressItems.map((item, i) => (
            <motion.div
              key={item.outlet}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div
                className="flex-shrink-0 w-px self-stretch"
                style={{ backgroundColor: "rgba(26,23,20,0.15)" }}
                aria-hidden="true"
              />
              <div>
                <div
                  className="flex items-baseline gap-3 mb-3"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                      fontSize: "0.625rem",
                      letterSpacing: "0.14em",
                      color: "#8A7F78",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.outlet}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                      fontSize: "0.625rem",
                      color: "#C8882A",
                    }}
                  >
                    {item.year}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.0625rem",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    color: "#1A1714",
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section label */}
        <div className="flex items-center gap-6 mb-12">
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
            From clients
          </span>
        </div>

        {/* Client testimonials */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.75,
                  color: "#4A4440",
                  marginBottom: "1rem",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                    fontSize: "0.625rem",
                    letterSpacing: "0.1em",
                    color: "#1A1714",
                    textTransform: "uppercase",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                    fontSize: "0.625rem",
                    letterSpacing: "0.08em",
                    color: "#8A7F78",
                    textTransform: "uppercase",
                    marginTop: "2px",
                  }}
                >
                  {t.location}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
