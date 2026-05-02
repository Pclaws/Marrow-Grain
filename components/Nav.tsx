"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Materials", href: "#materials" },
  { label: "Process", href: "#process" },
  { label: "Showroom", href: "#showroom" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{ backgroundColor: "#F5F0E8" }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="transition-all duration-300"
        style={{
          borderBottom: scrolled
            ? "0.5px solid rgba(26,23,20,0.2)"
            : "0.5px solid transparent",
        }}
      >
        <nav
          className="mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16"
          style={{ height: "64px" }}
          aria-label="Main navigation"
        >
          <a
            href="/"
            className="font-display text-base font-medium tracking-wide text-ink no-underline"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              letterSpacing: "0.02em",
              color: "#1A1714",
            }}
            aria-label="Marrow & Grain — home"
          >
            Marrow &amp; Grain
          </a>

          {/* Desktop nav */}
          <ul
            className="hidden md:flex items-center gap-8"
            role="list"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs tracking-widest uppercase transition-opacity duration-200 hover:opacity-60"
                  style={{
                    fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                    color: "#1A1714",
                    letterSpacing: "0.12em",
                    fontSize: "0.6875rem",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#samples"
                className="inline-flex items-center gap-1 text-xs tracking-widest uppercase transition-opacity duration-200 hover:opacity-70 border-b"
                style={{
                  fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                  color: "#1A1714",
                  letterSpacing: "0.12em",
                  fontSize: "0.6875rem",
                  borderColor: "rgba(26,23,20,0.35)",
                  paddingBottom: "1px",
                }}
              >
                Request samples
              </a>
            </li>
          </ul>

          {/* Mobile: just the CTA */}
          <a
            href="#samples"
            className="md:hidden text-xs tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
              color: "#1A1714",
              letterSpacing: "0.1em",
              fontSize: "0.625rem",
            }}
          >
            Samples
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
