import { useState } from "react";

const BLUE = "#004a6a";
const GREEN = "#338c3a";
const BLUE_BG = "#e6f0f5";
const GREEN_BG = "#eaf4eb";

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/yourprofile",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourprofile",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Fiverr",
    href: "https://fiverr.com/yourprofile",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <text x="3" y="18" fontSize="17" fontWeight="bold" fontFamily="sans-serif">f</text>
      </svg>
    ),
  },
];

const infoItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "irum@yourdomain.com",
    href: "mailto:irum@yourdomain.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Faisalabad, Pakistan",
    href: null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Working Hours",
    value: "Mon–Sat, 9AM–9PM PKT",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  return (
    <section id="contact" style={{ background: "#f8fafc", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: BLUE_BG, border: `1px solid #b6d4e2`,
            borderRadius: 100, padding: "6px 16px", marginBottom: 16,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: BLUE }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: BLUE, letterSpacing: "0.08em", textTransform: "uppercase" }}>Get In Touch</span>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: BLUE }} />
          </div>
          <h2 style={{ fontSize: "clamp(30px,5vw,46px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.1, marginBottom: 12, letterSpacing: -1 }}>
            Let's <span style={{ color: GREEN }}>Work Together</span>
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.75, maxWidth: 440, margin: "0 auto" }}>
            Have a project in mind? Drop a message and I'll get back within 24 hours.
          </p>
        </div>

        {/* 2-col grid */}
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 28, alignItems: "stretch" }}>

          {/* ── LEFT — dark glassmorphism card ── */}
          <div style={{
            borderRadius: 24,
            padding: "40px 32px",
            background: "linear-gradient(145deg, #002f45 0%, #003d2a 100%)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}>

            {/* Glass blobs */}
            <div style={{
              position: "absolute", top: -60, right: -60,
              width: 220, height: 220, borderRadius: "50%",
              background: "rgba(0,153,198,0.18)",
              filter: "blur(48px)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: -50, left: -40,
              width: 180, height: 180, borderRadius: "50%",
              background: "rgba(51,140,58,0.2)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", top: "45%", left: "30%",
              width: 120, height: 120, borderRadius: "50%",
              background: "rgba(0,100,160,0.12)",
              filter: "blur(32px)",
              pointerEvents: "none",
            }} />

            {/* Heading */}
            <div style={{ position: "relative", zIndex: 1, marginBottom: 32 }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>
                Contact Info
              </h3>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>
                Reach out through any channel — I'm always happy to connect.
              </p>
            </div>

            {/* Info items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", zIndex: 1, marginBottom: 32 }}>
              {infoItems.map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14, padding: "14px 18px",
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: i % 2 === 0
                      ? "rgba(0,153,198,0.25)"
                      : "rgba(51,140,58,0.25)",
                    border: `1px solid ${i % 2 === 0 ? "rgba(0,153,198,0.4)" : "rgba(51,140,58,0.4)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: i % 2 === 0 ? "#5dd8f8" : "#6ddb74",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 2px" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: 14, fontWeight: 600, color: "#fff", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: 14, fontWeight: 600, color: "#fff", margin: 0 }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923001234567?text=Hi%20Irum!%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                background: "#25d366",
                color: "#fff", textDecoration: "none",
                borderRadius: 14, padding: "14px 20px",
                fontSize: 14.5, fontWeight: 700,
                boxShadow: "0 6px 24px rgba(37,211,102,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
                position: "relative", zIndex: 1, marginBottom: 28,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(37,211,102,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,211,102,0.35)"; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.103 1.523 5.83L.057 23.428a.5.5 0 00.611.625l5.756-1.507A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.073-1.388l-.362-.215-3.759.984.999-3.648-.236-.374A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 24, position: "relative", zIndex: 1 }} />

            {/* Social icons */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                Follow Me
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    style={{
                      width: 42, height: 42, borderRadius: 11,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      color: "rgba(255,255,255,0.7)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = i % 2 === 0 ? "rgba(0,153,198,0.35)" : "rgba(51,140,58,0.35)";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.border = `1px solid ${i % 2 === 0 ? "rgba(0,153,198,0.6)" : "rgba(51,140,58,0.6)"}`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.14)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT — Form ── */}
          <div style={{
            background: "#fff",
            borderRadius: 24,
            padding: "40px 36px",
            border: "1.5px solid #e8edf3",
            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{
                  width: 76, height: 76, borderRadius: "50%",
                  background: GREEN_BG, margin: "0 auto 20px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 8px 24px ${GREEN}30`,
                }}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>Message Sent! 🎉</h3>
                <p style={{ fontSize: 14.5, color: "#64748b", lineHeight: 1.7 }}>
                  Shukriya! I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  style={{
                    marginTop: 20, padding: "11px 28px", borderRadius: 10,
                    background: BLUE, color: "#fff", border: "none",
                    fontSize: 13.5, fontWeight: 600, cursor: "pointer",
                  }}
                >
                  Send Another →
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ marginBottom: 4 }}>
                  <h3 style={{ fontSize: 21, fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>Send a Message</h3>
                  <p style={{ fontSize: 13.5, color: "#94a3b8", margin: 0 }}>I'll respond within 24 hours ⚡</p>
                </div>

                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "e.g. Ahmed Khan" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                ].map((field) => (
                  <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#475569" }}>{field.label}</label>
                    <input
                      name={field.name}
                      type={field.type}
                      required
                      value={form[field.name]}
                      onChange={handle}
                      placeholder={field.placeholder}
                      style={{
                        padding: "13px 16px", borderRadius: 12, fontSize: 14,
                        border: `1.5px solid ${form[field.name] ? BLUE : "#e2e8f0"}`,
                        outline: "none", background: "#f8fafc", color: "#0f172a",
                        transition: "border 0.2s, background 0.2s",
                      }}
                      onFocus={e => { e.target.style.border = `1.5px solid ${BLUE}`; e.target.style.background = "#fff"; }}
                      onBlur={e => { e.target.style.border = `1.5px solid ${form[field.name] ? BLUE : "#e2e8f0"}`; e.target.style.background = "#f8fafc"; }}
                    />
                  </div>
                ))}

                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#475569" }}>Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handle}
                    placeholder="Tell me about your project..."
                    style={{
                      padding: "13px 16px", borderRadius: 12, fontSize: 14,
                      border: `1.5px solid ${form.message ? BLUE : "#e2e8f0"}`,
                      outline: "none", background: "#f8fafc", color: "#0f172a",
                      resize: "vertical", fontFamily: "inherit",
                      transition: "border 0.2s, background 0.2s",
                    }}
                    onFocus={e => { e.target.style.border = `1.5px solid ${BLUE}`; e.target.style.background = "#fff"; }}
                    onBlur={e => { e.target.style.border = `1.5px solid ${form.message ? BLUE : "#e2e8f0"}`; e.target.style.background = "#f8fafc"; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: "15px 0", borderRadius: 12, border: "none",
                    fontSize: 15, fontWeight: 700,
                    cursor: loading ? "not-allowed" : "pointer",
                    background: loading ? "#94a3b8" : `linear-gradient(135deg, ${BLUE} 0%, ${GREEN} 100%)`,
                    color: "#fff",
                    boxShadow: loading ? "none" : `0 6px 22px rgba(0,74,106,0.3)`,
                    transition: "all 0.25s",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 28px rgba(0,74,106,0.38)`; }}}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 6px 22px rgba(0,74,106,0.3)`; }}
                >
                  {loading ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83">
                          <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite" />
                        </path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" fill="#fff" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}