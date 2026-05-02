"use client";

import { useState, useId } from "react";
import { motion } from "motion/react";

const materialOptions = [
  { id: "white-oak", label: "White Oak" },
  { id: "walnut", label: "Walnut" },
  { id: "cherry", label: "Cherry" },
  { id: "ebonized-oak", label: "Ebonized Oak" },
  { id: "natural-linen", label: "Natural Linen" },
];

interface FormState {
  name: string;
  email: string;
  materials: string[];
  address: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  materials?: string;
  address?: string;
}

export default function SampleRequest() {
  const formId = useId();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    materials: [],
    address: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "A valid email address is required";
    if (form.materials.length === 0)
      next.materials = "Select at least one material";
    if (!form.address.trim()) next.address = "Shipping address is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleMaterial = (id: string) => {
    setForm((prev) => ({
      ...prev,
      materials: prev.materials.includes(id)
        ? prev.materials.filter((m) => m !== id)
        : [...prev.materials, id],
    }));
    if (errors.materials) setErrors((e) => ({ ...e, materials: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputBase: React.CSSProperties = {
    fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
    fontSize: "0.9375rem",
    color: "#1A1714",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "0.5px solid rgba(26,23,20,0.3)",
    outline: "none",
    width: "100%",
    paddingBottom: "10px",
    paddingTop: "4px",
    lineHeight: 1.4,
    transition: "border-color 0.2s",
  };

  const labelBase: React.CSSProperties = {
    fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
    fontSize: "0.625rem",
    letterSpacing: "0.14em",
    color: "#8A7F78",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "8px",
  };

  return (
    <section
      id="samples"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16"
      aria-label="Request material samples"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — context */}
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
                Before You Commit
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#1A1714",
                lineHeight: 1.12,
                marginBottom: "1.5rem",
              }}
            >
              Hold the wood
              <br />
              <em>in your hands first.</em>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "#4A4440",
                maxWidth: "44ch",
              }}
            >
              We send material samples — finished on one face, raw on the
              other — so you can feel the weight and see the grain in your own
              light, against your own walls. No obligation. No rush. Free,
              always.
            </p>

            <div
              className="mt-10 grid grid-cols-2 gap-6"
              style={{
                borderTop: "0.5px solid rgba(26,23,20,0.12)",
                paddingTop: "2rem",
              }}
            >
              {[
                { label: "Species available", value: "5" },
                { label: "Lead time", value: "6–10 wks" },
                { label: "Starting price", value: "$1,800" },
                { label: "Sample cost", value: "Free" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                      fontSize: "0.625rem",
                      letterSpacing: "0.12em",
                      color: "#8A7F78",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1.25rem",
                      color:
                        stat.label === "Starting price" ||
                        stat.label === "Lead time"
                          ? "#C8882A"
                          : "#1A1714",
                      fontWeight: 500,
                    }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-16 text-center"
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#1A1714",
                    marginBottom: "1rem",
                  }}
                >
                  <em>On its way.</em>
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                    fontSize: "0.9375rem",
                    color: "#4A4440",
                    lineHeight: 1.7,
                  }}
                >
                  Samples ship within 3 business days. We will follow up
                  personally by email.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Material sample request form"
              >
                {/* Name */}
                <div className="mb-8">
                  <label
                    htmlFor={`${formId}-name`}
                    style={labelBase}
                  >
                    Your name
                  </label>
                  <input
                    id={`${formId}-name`}
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, name: e.target.value }));
                      if (errors.name)
                        setErrors((er) => ({ ...er, name: undefined }));
                    }}
                    style={{
                      ...inputBase,
                      borderBottomColor: errors.name
                        ? "#C8882A"
                        : "rgba(26,23,20,0.3)",
                    }}
                    aria-describedby={
                      errors.name ? `${formId}-name-err` : undefined
                    }
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p
                      id={`${formId}-name-err`}
                      role="alert"
                      style={{
                        fontFamily:
                          "var(--font-ibm-plex-serif), Georgia, serif",
                        fontSize: "0.75rem",
                        color: "#C8882A",
                        marginTop: "4px",
                      }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-8">
                  <label
                    htmlFor={`${formId}-email`}
                    style={labelBase}
                  >
                    Email address
                  </label>
                  <input
                    id={`${formId}-email`}
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, email: e.target.value }));
                      if (errors.email)
                        setErrors((er) => ({ ...er, email: undefined }));
                    }}
                    style={{
                      ...inputBase,
                      borderBottomColor: errors.email
                        ? "#C8882A"
                        : "rgba(26,23,20,0.3)",
                    }}
                    aria-describedby={
                      errors.email ? `${formId}-email-err` : undefined
                    }
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p
                      id={`${formId}-email-err`}
                      role="alert"
                      style={{
                        fontFamily:
                          "var(--font-ibm-plex-serif), Georgia, serif",
                        fontSize: "0.75rem",
                        color: "#C8882A",
                        marginTop: "4px",
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Materials */}
                <fieldset className="mb-8" style={{ border: "none", padding: 0, margin: 0 }}>
                  <legend style={labelBase}>
                    Which materials? (select all that interest you)
                  </legend>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {materialOptions.map((opt) => {
                      const checked = form.materials.includes(opt.id);
                      return (
                        <label
                          key={opt.id}
                          className="flex items-center gap-2 cursor-pointer select-none"
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={checked}
                            onChange={() => handleMaterial(opt.id)}
                          />
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              padding: "5px 12px",
                              border: checked
                                ? "1px solid #1A1714"
                                : "0.5px solid rgba(26,23,20,0.25)",
                              backgroundColor: checked
                                ? "#1A1714"
                                : "transparent",
                              color: checked
                                ? "#F5F0E8"
                                : "#4A4440",
                              fontFamily:
                                "var(--font-ibm-plex-serif), Georgia, serif",
                              fontSize: "0.75rem",
                              letterSpacing: "0.06em",
                              transition: "all 0.15s ease",
                            }}
                          >
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.materials && (
                    <p
                      role="alert"
                      style={{
                        fontFamily:
                          "var(--font-ibm-plex-serif), Georgia, serif",
                        fontSize: "0.75rem",
                        color: "#C8882A",
                        marginTop: "8px",
                      }}
                    >
                      {errors.materials}
                    </p>
                  )}
                </fieldset>

                {/* Address */}
                <div className="mb-10">
                  <label
                    htmlFor={`${formId}-address`}
                    style={labelBase}
                  >
                    Shipping address
                  </label>
                  <textarea
                    id={`${formId}-address`}
                    rows={3}
                    autoComplete="street-address"
                    value={form.address}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, address: e.target.value }));
                      if (errors.address)
                        setErrors((er) => ({ ...er, address: undefined }));
                    }}
                    style={{
                      ...inputBase,
                      resize: "none",
                      borderBottom: "none",
                      border: errors.address
                        ? "0.5px solid #C8882A"
                        : "0.5px solid rgba(26,23,20,0.3)",
                      padding: "10px 12px",
                    }}
                    aria-describedby={
                      errors.address ? `${formId}-address-err` : undefined
                    }
                    aria-invalid={!!errors.address}
                  />
                  {errors.address && (
                    <p
                      id={`${formId}-address-err`}
                      role="alert"
                      style={{
                        fontFamily:
                          "var(--font-ibm-plex-serif), Georgia, serif",
                        fontSize: "0.75rem",
                        color: "#C8882A",
                        marginTop: "4px",
                      }}
                    >
                      {errors.address}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    fontFamily: "var(--font-ibm-plex-serif), Georgia, serif",
                    fontSize: "0.8125rem",
                    letterSpacing: "0.1em",
                    color: "#F5F0E8",
                    backgroundColor: "#1A1714",
                    border: "none",
                    padding: "16px 40px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    transition: "opacity 0.2s",
                    width: "100%",
                  }}
                  onMouseOver={(e) =>
                    ((e.target as HTMLButtonElement).style.opacity = "0.85")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLButtonElement).style.opacity = "1")
                  }
                >
                  Send me samples →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
