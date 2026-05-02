"use client";

import { motion } from "motion/react";

export default function Showroom() {
  return (
    <section
      id="showroom"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16"
      aria-label="Showroom location and hours"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-8">
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
                Showroom
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2rem, 3vw, 2.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#1A1714",
                lineHeight: 1.12,
                marginBottom: "1.5rem",
              }}
            >
              Come see the wood
              <br />
              <em>before it becomes yours.</em>
            </h2>

            <address
              className="not-italic"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                color: "#4A4440",
              }}
            >
              <p>42 Lexington Works</p>
              <p>Asheville, North Carolina 28801</p>
            </address>

            <div
              className="mt-8"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.875rem",
                lineHeight: 1.8,
                color: "#4A4440",
              }}
            >
              <p>
                <strong style={{ color: "#1A1714", fontWeight: 400 }}>
                  By appointment only
                </strong>
              </p>
              <p>
                <span style={{ color: "#8A7F78" }}>Tue – Sat</span>
                {"  "}10am – 5pm
              </p>
              <p>
                <span style={{ color: "#8A7F78" }}>Sun – Mon</span>
                {"  "}Closed
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:visit@marrowandgrain.com"
                style={{
                  fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.08em",
                  color: "#F5F0E8",
                  backgroundColor: "#1A1714",
                  padding: "14px 32px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "opacity 0.2s",
                }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                }
              >
                Book a visit →
              </a>

              <a
                href="tel:+18285551847"
                style={{
                  fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.08em",
                  color: "#1A1714",
                  border: "0.5px solid rgba(26,23,20,0.3)",
                  padding: "14px 32px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "border-color 0.2s",
                }}
              >
                (828) 555-1847
              </a>
            </div>
          </motion.div>

          {/* Map placeholder — SVG schematic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 480 360"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#EDE7D9",
              }}
              role="presentation"
            >
              {/* Grid streets */}
              {[60, 120, 180, 240, 300].map((x) => (
                <line
                  key={`v${x}`}
                  x1={x}
                  y1={0}
                  x2={x}
                  y2={360}
                  stroke="rgba(26,23,20,0.08)"
                  strokeWidth={1}
                />
              ))}
              {[60, 120, 180, 240, 300].map((y) => (
                <line
                  key={`h${y}`}
                  x1={0}
                  y1={y}
                  x2={480}
                  y2={y}
                  stroke="rgba(26,23,20,0.08)"
                  strokeWidth={1}
                />
              ))}
              {/* Major streets */}
              <line x1={0} y1={180} x2={480} y2={180} stroke="rgba(26,23,20,0.18)" strokeWidth={1.5} />
              <line x1={240} y1={0} x2={240} y2={360} stroke="rgba(26,23,20,0.18)" strokeWidth={1.5} />
              {/* Blocks */}
              {[[80, 80, 100, 70], [200, 80, 80, 70], [320, 80, 100, 70],
                [80, 200, 100, 70], [320, 200, 100, 70]].map(([x, y, w, h], i) => (
                <rect
                  key={i}
                  x={x} y={y} width={w} height={h}
                  fill="rgba(26,23,20,0.04)"
                  stroke="rgba(26,23,20,0.08)"
                  strokeWidth={0.5}
                />
              ))}
              {/* Showroom marker */}
              <rect
                x={200} y={200} width={80} height={70}
                fill="#1A1714"
                opacity={0.12}
                stroke="#1A1714"
                strokeWidth={1}
              />
              <rect x={232} y={226} width={16} height={16} rx={8} fill="#C8882A" />
              {/* Label */}
              <text
                x={240}
                y={274}
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontSize={8}
                fill="rgba(26,23,20,0.5)"
                letterSpacing={1}
              >
                42 LEXINGTON WORKS
              </text>
              {/* Compass */}
              <text x={448} y={24} fontFamily="Georgia, serif" fontSize={9} fill="rgba(26,23,20,0.3)">N</text>
              <line x1={452} y1={26} x2={452} y2={38} stroke="rgba(26,23,20,0.3)" strokeWidth={0.75} />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
