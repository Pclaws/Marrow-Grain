"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import PriceCursor from "./PriceCursor";

interface Piece {
  id: string;
  ref: string;
  name: string;
  material: string;
  dimensions: string;
  copy: string;
  price: string;
  image: string;
  imageAlt: string;
  aspect: string;
}

const pieces: Piece[] = [
  {
    id: "rdg",
    ref: "No. 001",
    name: "Ridgeline Dining Table",
    material: "White Oak",
    dimensions: '84" × 38" × 30"',
    copy: "Mortise-and-tenon joinery, no hardware. A table that becomes the room.",
    price: "$3,200",
    image: "/hero_table.png",
    imageAlt: "Ridgeline Dining Table in white oak, studio photograph",
    aspect: "aspect-[7/9]",
  },
  {
    id: "shl",
    ref: "No. 002",
    name: "Shelter Lounge Chair",
    material: "Walnut + Natural Linen",
    dimensions: '31" × 32" × 34"',
    copy: "Solid walnut frame. Natural linen upholstery. A body that gives.",
    price: "$2,400",
    image: "/lounge_chair.png",
    imageAlt: "Shelter Lounge Chair in walnut with natural linen upholstery",
    aspect: "aspect-[4/5]",
  },
  {
    id: "crn",
    ref: "No. 003",
    name: "Cairn Side Table",
    material: "Cherry",
    dimensions: '18" × 18" × 22"',
    copy: "Single-pedestal cherry. The simplest honest object we make.",
    price: "$1,800",
    image: "/side_table.png",
    imageAlt: "Cairn Side Table in cherry, pedestal base",
    aspect: "aspect-[3/4]",
  },
  {
    id: "brk",
    ref: "No. 004",
    name: "Brink Credenza",
    material: "Ebonized Oak",
    dimensions: '72" × 18" × 32"',
    copy: "Ebonized white oak. Three compartments. Flush push-to-open doors.",
    price: "$4,800",
    image: "/credenza.png",
    imageAlt: "Brink Credenza in ebonized oak, full-width view",
    aspect: "aspect-[16/9]",
  },
  {
    id: "wtr",
    ref: "No. 005",
    name: "Watershed Bench",
    material: "Walnut",
    dimensions: '60" × 16" × 18"',
    copy: "Solid walnut slab on tapered legs. Entry, bedroom, or end of bed.",
    price: "$2,100",
    image: "/bench.png",
    imageAlt: "Watershed Bench in walnut, tapered legs",
    aspect: "aspect-[16/7]",
  },
];

function SpecimenCard({
  piece,
  index,
  onEnter,
  onLeave,
}: {
  piece: Piece;
  index: number;
  onEnter: (price: string) => void;
  onLeave: () => void;
}) {
  return (
    <motion.article
      className="group relative cursor-none"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      onMouseEnter={() => onEnter(piece.price)}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${piece.aspect} bg-cream-mid mb-5`}
        style={{ backgroundColor: "#E8E1D4" }}
      >
        <Image
          src={piece.image}
          alt={piece.imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        />
        {/* Ref label */}
        <span
          className="absolute top-4 left-4"
          style={{
            fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
            fontSize: "0.5625rem",
            letterSpacing: "0.14em",
            color: "rgba(26,23,20,0.5)",
            textTransform: "uppercase",
          }}
        >
          {piece.ref}
        </span>
      </div>

      {/* Caption */}
      <div className="px-1">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1.125rem",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "#1A1714",
              lineHeight: 1.2,
            }}
          >
            {piece.name}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
              fontSize: "0.9375rem",
              color: "#C8882A",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {piece.price}
          </span>
        </div>

        <div
          className="flex items-center gap-3 mb-3"
          style={{
            fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
            fontSize: "0.6875rem",
            letterSpacing: "0.08em",
            color: "#8A7F78",
            textTransform: "uppercase",
          }}
        >
          <span>{piece.material}</span>
          <span aria-hidden="true">·</span>
          <span style={{ color: "#C8882A" }}>{piece.dimensions}</span>
        </div>

        <p
          style={{
            fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "#4A4440",
          }}
        >
          {piece.copy}
        </p>

        <a
          href="#samples"
          className="inline-flex items-center gap-1 mt-4 group/link"
          style={{
            fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
            fontSize: "0.6875rem",
            letterSpacing: "0.1em",
            color: "#1A1714",
            textTransform: "uppercase",
            textDecoration: "none",
            borderBottom: "0.5px solid rgba(26,23,20,0.4)",
            paddingBottom: "1px",
          }}
        >
          Inquire
          <span
            className="inline-block transition-transform duration-200 group-hover/link:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </div>
    </motion.article>
  );
}

export default function Collection() {
  const [cursorPrice, setCursorPrice] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const handleEnter = useCallback((price: string) => {
    setCursorPrice(price);
    setCursorVisible(true);
  }, []);

  const handleLeave = useCallback(() => {
    setCursorVisible(false);
  }, []);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <section
      id="collection"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16"
      aria-label="Collection"
    >
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
            Current Collection
          </span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: "#1A1714",
            lineHeight: 1.1,
            maxWidth: "18ch",
          }}
        >
          Five pieces.
          <br />
          <em>Each one unhurried.</em>
        </h2>
      </motion.div>

      {/* Custom cursor — desktop only */}
      {!isTouch && (
        <PriceCursor price={cursorPrice} visible={cursorVisible} />
      )}

      {/* Grid — 2 col / full-width feature / 2 col */}
      <div className="space-y-6 md:space-y-8">
        {/* Row 1: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <SpecimenCard
            piece={pieces[0]}
            index={0}
            onEnter={handleEnter}
            onLeave={handleLeave}
          />
          <SpecimenCard
            piece={pieces[1]}
            index={1}
            onEnter={handleEnter}
            onLeave={handleLeave}
          />
        </div>

        {/* Row 2: Full-width feature */}
        <div>
          <SpecimenCard
            piece={pieces[3]}
            index={2}
            onEnter={handleEnter}
            onLeave={handleLeave}
          />
        </div>

        {/* Row 3: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:items-end">
          <SpecimenCard
            piece={pieces[2]}
            index={3}
            onEnter={handleEnter}
            onLeave={handleLeave}
          />
          <SpecimenCard
            piece={pieces[4]}
            index={4}
            onEnter={handleEnter}
            onLeave={handleLeave}
          />
        </div>
      </div>
    </section>
  );
}
