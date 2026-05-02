# Furni — Bespoke Furniture Studio

A premium, modern storefront website for a bespoke handcrafted furniture studio. Built with **Next.js 16**, **Tailwind CSS v4**, and **Motion (Framer Motion)** — designed to feel unhurried, editorial, and beautifully crafted.

---

## ✨ Features

- **Cinematic Hero Section** — Full-screen split layout with a `clip-path` reveal animation and parallax scroll effect
- **Live Collection Grid** — Five-piece specimen catalog with a custom price-tag cursor on hover (desktop)
- **Craft Materials Showcase** — Material storytelling with animated entry transitions
- **Process Timeline** — Step-by-step narrative of the studio's craft process
- **Sample Request Form** — Inline form with smooth validation and transitions
- **In-Context Gallery** — Staggered, overlapping editorial photo layout
- **Press / Testimonials** — Media mentions and client quotes
- **Showroom Section** — Studio visit CTA with location details
- **Responsive & Accessible** — Mobile-first layout, semantic HTML, ARIA attributes throughout

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Motion (Framer Motion)](https://motion.dev/) |
| Images | `next/image` with Unsplash remote patterns |
| Fonts | Playfair Display · IBM Plex Serif |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18`
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/furni.git
cd furni

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
furni/
├── app/
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Home page composition
├── components/
│   ├── Nav.tsx            # Navigation bar
│   ├── Hero.tsx           # Split-screen hero with parallax
│   ├── Collection.tsx     # Piece catalog grid
│   ├── CraftMaterials.tsx # Materials storytelling section
│   ├── Timeline.tsx       # Process timeline
│   ├── SampleRequest.tsx  # Sample request form
│   ├── Gallery.tsx        # In-context photo gallery
│   ├── Press.tsx          # Press & testimonials
│   ├── Showroom.tsx       # Showroom visit CTA
│   ├── Footer.tsx         # Site footer
│   └── PriceCursor.tsx    # Custom price-tag cursor (desktop)
├── public/                # Static assets & product images
├── next.config.ts         # Next.js config (image domains, etc.)
└── package.json
```

---

## 🎨 Design System

The site uses a warm, editorial color palette inspired by natural wood tones:

| Token | Value | Usage |
|---|---|---|
| `#1A1714` | Near-black | Headings, borders |
| `#4A4440` | Warm dark grey | Body text |
| `#8A7F78` | Muted taupe | Labels, captions |
| `#C8882A` | Amber gold | Prices, accents |
| `#F9F8F6` | Warm off-white | Backgrounds |

Typography uses **Playfair Display** for editorial headings and **IBM Plex Serif** for all body and label copy.

---

## 📸 Image Credits

Hero and gallery images sourced from [Unsplash](https://unsplash.com/). Product specimen images are AI-generated for demonstration purposes.

---

## 📄 License

This project is for portfolio/demonstration purposes. All rights reserved.
