import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marrow & Grain — Made-to-Order Solid Wood Furniture",
  description:
    "Solid wood furniture made to your specifications. White oak, walnut, and cherry. Handbuilt in 6–10 weeks. Starting from $1,800.",
  openGraph: {
    title: "Marrow & Grain",
    description: "Made-to-order solid wood furniture. Handbuilt. Unhurried.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${ibmPlexSerif.variable}`}
    >
      <body className="grain-overlay antialiased">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
