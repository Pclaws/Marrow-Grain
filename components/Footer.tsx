"use client";

import { useState, useId } from "react";

const navGroups = [
  {
    heading: "Collection",
    links: [
      { label: "Dining Tables", href: "#collection" },
      { label: "Lounge Chairs", href: "#collection" },
      { label: "Side Tables", href: "#collection" },
      { label: "Storage", href: "#collection" },
      { label: "Benches", href: "#collection" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "Materials", href: "#materials" },
      { label: "Process", href: "#process" },
      { label: "Showroom", href: "#showroom" },
      { label: "Request samples", href: "#samples" },
      { label: "Custom work", href: "#samples" },
    ],
  },
  {
    heading: "Info",
    links: [
      { label: "Shipping & delivery", href: "#" },
      { label: "Care instructions", href: "#" },
      { label: "Warranty", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

export default function Footer() {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
    }
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
    fontSize: "0.8125rem",
    color: "rgba(245,240,232,0.8)",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "0.5px solid rgba(245,240,232,0.25)",
    outline: "none",
    paddingBottom: "8px",
    flex: 1,
    minWidth: 0,
  };

  return (
    <footer
      style={{ backgroundColor: "#1A1714" }}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Upper footer */}
      <div
        className="px-6 md:px-12 lg:px-16 pt-16 pb-12"
        style={{ borderBottom: "0.5px solid rgba(245,240,232,0.08)" }}
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {navGroups.map((group) => (
            <div key={group.heading}>
              <p
                className="mb-5"
                style={{
                  fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                  fontSize: "0.5625rem",
                  letterSpacing: "0.16em",
                  color: "rgba(245,240,232,0.35)",
                  textTransform: "uppercase",
                }}
              >
                {group.heading}
              </p>
              <ul role="list" className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily:
                          "var(--font-ibm-plex-serif), Georgia, serif",
                        fontSize: "0.875rem",
                        color: "rgba(245,240,232,0.65)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        lineHeight: 1.4,
                      }}
                      onMouseOver={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "#F5F0E8")
                      }
                      onMouseOut={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(245,240,232,0.65)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <p
              className="mb-5"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.5625rem",
                letterSpacing: "0.16em",
                color: "rgba(245,240,232,0.35)",
                textTransform: "uppercase",
              }}
            >
              From the shop
            </p>
            <p
              className="mb-5"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.875rem",
                lineHeight: 1.65,
                color: "rgba(245,240,232,0.55)",
              }}
            >
              Notes on materials, process, and the occasional finished piece.
              Monthly, at most.
            </p>

            {subscribed ? (
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                  fontSize: "0.8125rem",
                  color: "#C8882A",
                  fontStyle: "italic",
                }}
              >
                You&rsquo;re on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex gap-3 items-end"
                aria-label="Newsletter subscription"
              >
                <div className="flex-1 min-w-0">
                  <label
                    htmlFor={`${emailId}-newsletter`}
                    className="sr-only"
                  >
                    Email address
                  </label>
                  <input
                    id={`${emailId}-newsletter`}
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    autoComplete="email"
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                    fontSize: "0.625rem",
                    letterSpacing: "0.12em",
                    color: "#F5F0E8",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    paddingBottom: "8px",
                    textTransform: "uppercase",
                    opacity: 0.7,
                    transition: "opacity 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseOver={(e) =>
                    ((e.target as HTMLButtonElement).style.opacity = "1")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLButtonElement).style.opacity = "0.7")
                  }
                >
                  Subscribe →
                </button>
              </form>
            )}

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-8"
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                color: "rgba(245,240,232,0.45)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(245,240,232,0.8)")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(245,240,232,0.45)")
              }
              aria-label="Marrow & Grain on Instagram (opens in new tab)"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @marrowandgrain
            </a>
          </div>
        </div>
      </div>

      {/* Lower footer */}
      <div className="px-6 md:px-12 lg:px-16 py-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.3)",
              fontStyle: "italic",
            }}
          >
            Marrow &amp; Grain
          </p>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
              fontSize: "0.625rem",
              letterSpacing: "0.1em",
              color: "rgba(245,240,232,0.25)",
              textTransform: "uppercase",
            }}
          >
            © {new Date().getFullYear()} Marrow &amp; Grain. Asheville, NC.
          </p>
        </div>
      </div>
    </footer>
  );
}
