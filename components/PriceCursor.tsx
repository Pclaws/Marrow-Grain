"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "motion/react";

interface PriceCursorProps {
  price: string;
  visible: boolean;
}

export default function PriceCursor({ price, visible }: PriceCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);
  const [mounted, setMounted] = useState(false);

  const x = useSpring(rawX, { stiffness: 500, damping: 38, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 500, damping: 38, mass: 0.5 });

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [rawX, rawY]);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 9998,
        pointerEvents: "none",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.6,
      }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          backgroundColor: "#1A1714",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(200,136,42,0.5)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
            fontSize: "0.6875rem",
            color: "#C8882A",
            letterSpacing: "0.04em",
            fontWeight: 500,
          }}
        >
          {price}
        </span>
      </div>
    </motion.div>,
    document.body
  );
}
