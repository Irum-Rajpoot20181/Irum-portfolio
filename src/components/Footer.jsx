import { useState } from "react";

const BLUE = "#004a6a";
const GREEN = "#338c3a";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Web Design", href: "#services" },
  { label: "Web Development", href: "#services" },
  { label: "Shopify Development", href: "#services" },
  { label: "WordPress", href: "#services" },
  { label: "React Frontend", href: "#services" },
  { label: "Content Writing", href: "#services" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
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
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourprofile",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <text x="3" y="18" fontSize="17" fontWeight="bold" fontFamily="sans-serif">f</text>
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer style={{
      background: "linear-gradient(160deg, #001e2e 0%, #002318 100%)",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background blobs */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(0,120,180,0.1)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(51,140,58,0.1)", filter: "blur(50px)", pointerEvents: "none" }} />

      {/* ── TOP CTA STRIP ── */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "48px 24px",
        position: "relative", zIndex: 1,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <h3 style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>
              Ready to start your{" "}
              <span style={{ color: "#5dd8f8" }}>next project?</span>
            </h3>
            <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.5)", margin: 0 }}>
              Let's build something amazing together.
            </p>
          </div>
          <a
            href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 12,
              background: `linear-gradient(135deg, ${BLUE}, ${GREEN})`,
              color: "#fff", textDecoration: "none",
              fontSize: 14.5, fontWeight: 700,
              boxShadow: "0 6px 24px rgba(0,74,106,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,74,106,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,74,106,0.4)"; }}
          >
            Let's Talk
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── MAIN FOOTER BODY ── */}
      <div style={{ padding: "56px 24px 40px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="footer-grid" style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1.4fr",
            gap: 40,
          }}>

            {/* Col 1 — Brand */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `linear-gradient(135deg, ${BLUE}, ${GREEN})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 14px rgba(0,74,106,0.5)",
                }}>
                  <span style={{ color: "#fff", fontSize: 18, fontWeight: 900 }}>I</span>
                </div>
                <span style={{ color: "#fff", fontSize: 20, fontWeight: 800, letterSpacing: -0.5 }}>
                  Irum<span style={{ color: "#5dd8f8" }}>.</span>
                </span>
              </div>

              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: 0 }}>
                Freelance web designer & developer crafting pixel-perfect digital experiences — from Shopify stores to React frontends.
              </p>

              {/* Availability badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(51,140,58,0.15)",
                border: "1px solid rgba(51,140,58,0.3)",
                borderRadius: 100, padding: "6px 14px", alignSelf: "flex-start",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#6ddb74", display: "block",
                  boxShadow: "0 0 0 3px rgba(109,219,116,0.25)", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "#6ddb74" }}>Available for Projects</span>
              </div>

              {/* Socials */}
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    style={{
                      width: 38, height: 38, borderRadius: 10,
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.6)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = i % 2 === 0 ? "rgba(0,153,198,0.3)" : "rgba(51,140,58,0.3)";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 20px" }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: 14, color: "rgba(255,255,255,0.55)",
                        textDecoration: "none", transition: "color 0.2s",
                        display: "flex", alignItems: "center", gap: 7,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = "#5dd8f8"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: GREEN, flexShrink: 0 }} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 20px" }}>
                Services
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {services.map((s, i) => (
                  <li key={i}>
                    <a
                      href={s.href}
                      style={{
                        fontSize: 14, color: "rgba(255,255,255,0.55)",
                        textDecoration: "none", transition: "color 0.2s",
                        display: "flex", alignItems: "center", gap: 7,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = "#6ddb74"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: BLUE, flexShrink: 0 }} />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Newsletter */}
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 20px" }}>
                Stay Updated
              </h4>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 18 }}>
                Get tips on web design, Shopify & freelancing — straight to your inbox.
              </p>

              {subscribed ? (
                <div style={{
                  background: "rgba(51,140,58,0.15)",
                  border: "1px solid rgba(51,140,58,0.3)",
                  borderRadius: 12, padding: "14px 16px",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6ddb74" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: 13.5, color: "#6ddb74", fontWeight: 600 }}>Subscribed! 🎉</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    style={{
                      padding: "12px 16px", borderRadius: 10, fontSize: 13.5,
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#fff", outline: "none",
                      transition: "border 0.2s",
                    }}
                    onFocus={e => e.target.style.border = "1px solid rgba(0,153,198,0.6)"}
                    onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: "12px 0", borderRadius: 10, border: "none",
                      background: `linear-gradient(135deg, ${BLUE}, ${GREEN})`,
                      color: "#fff", fontSize: 13.5, fontWeight: 700,
                      cursor: "pointer", transition: "opacity 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >
                    Subscribe →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "20px 24px",
        position: "relative", zIndex: 1,
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0 }}>
            © {new Date().getFullYear()} Irum Rajpoot. All rights reserved. Made with{" "}
            <span style={{ color: "#e25555" }}>♥</span> in Pakistan 🇵🇰
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service"].map((t, i) => (
              <a key={i} href="#" style={{
                fontSize: 12.5, color: "rgba(255,255,255,0.3)",
                textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(109,219,116,0.25); }
          50% { box-shadow: 0 0 0 6px rgba(109,219,116,0.1); }
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}