import { useState } from "react";

const BLUE = "#004a6a";
const GREEN = "#338c3a";
const BLUE_BG = "#e6f0f5";
const GREEN_BG = "#eaf4eb";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: { monthly: 49, yearly: 39 },
    desc: "Perfect for small businesses & startups getting online.",
    accent: BLUE,
    accentBg: BLUE_BG,
    popular: false,
    features: [
      { text: "1 Page Website / Landing Page", included: true },
      { text: "Mobile Responsive Design", included: true },
      { text: "Basic SEO Setup", included: true },
      { text: "Contact Form Integration", included: true },
      { text: "2 Revision Rounds", included: true },
      { text: "E-commerce Integration", included: false },
      { text: "Custom Animations", included: false },
      { text: "Priority Support", included: false },
    ],
    cta: "Get Started",
  },
  {
    id: "standard",
    name: "Standard",
    price: { monthly: 99, yearly: 79 },
    desc: "Ideal for growing brands that need a full web presence.",
    accent: GREEN,
    accentBg: GREEN_BG,
    popular: true,
    features: [
      { text: "Up to 5 Pages Website", included: true },
      { text: "Mobile Responsive Design", included: true },
      { text: "Advanced SEO Optimization", included: true },
      { text: "Contact Form + WhatsApp", included: true },
      { text: "5 Revision Rounds", included: true },
      { text: "Shopify / WordPress Setup", included: true },
      { text: "Custom Animations", included: false },
      { text: "Priority Support", included: false },
    ],
    cta: "Most Popular",
  },
  {
    id: "premium",
    name: "Premium",
    price: { monthly: 199, yearly: 159 },
    desc: "Full-scale solution for serious brands & e-commerce stores.",
    accent: BLUE,
    accentBg: BLUE_BG,
    popular: false,
    features: [
      { text: "Unlimited Pages", included: true },
      { text: "Mobile Responsive Design", included: true },
      { text: "Full SEO + Content Strategy", included: true },
      { text: "All Integrations Included", included: true },
      { text: "Unlimited Revisions", included: true },
      { text: "Shopify / WordPress / React", included: true },
      { text: "Custom Animations & Effects", included: true },
      { text: "Priority Support (30 days)", included: true },
    ],
    cta: "Go Premium",
  },
];

function CheckIcon({ filled }) {
  return filled ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill={GREEN} />
      <polyline points="7 12.5 10.5 16 17 9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#f1f5f9" />
      <line x1="8" y1="8" x2="16" y2="16" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="8" x2="8" y2="16" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlanCard({ plan, yearly }) {
  const price = yearly ? plan.price.yearly : plan.price.monthly;

  return (
    <div style={{
      background: plan.popular ? `linear-gradient(160deg, ${BLUE} 0%, #006a40 100%)` : "#fff",
      borderRadius: 24,
      padding: plan.popular ? "2px" : 0,
      boxShadow: plan.popular
        ? `0 24px 60px rgba(0,74,106,0.22)`
        : "0 2px 12px rgba(0,0,0,0.06)",
      position: "relative",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      transform: plan.popular ? "scale(1.04)" : "scale(1)",
    }}
      className="pricing-card"
    >
      {/* Popular badge */}
      {plan.popular && (
        <div style={{
          position: "absolute", top: -14, left: "50%",
          transform: "translateX(-50%)",
          background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
          color: "#fff", fontSize: 11, fontWeight: 700,
          padding: "5px 18px", borderRadius: 100,
          letterSpacing: "0.08em", textTransform: "uppercase",
          whiteSpace: "nowrap", zIndex: 2,
          boxShadow: "0 4px 12px rgba(0,74,106,0.3)",
        }}>
          ⭐ Most Popular
        </div>
      )}

      <div style={{
        background: plan.popular
          ? `linear-gradient(160deg, #005a80 0%, #005a30 100%)`
          : "#fff",
        borderRadius: plan.popular ? 22 : 24,
        padding: "36px 28px",
        border: plan.popular ? "none" : `1.5px solid #e8edf3`,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}>

        {/* Icon + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{
            width: 46, height: 46, borderRadius: 12,
            background: plan.popular ? "rgba(255,255,255,0.15)" : plan.accentBg,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke={plan.popular ? "#fff" : plan.accent}
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {plan.id === "basic" && <>
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M9 9h6M9 12h4" />
              </>}
              {plan.id === "standard" && <>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </>}
              {plan.id === "premium" && <>
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </>}
            </svg>
          </div>
          <div>
            <p style={{
              fontSize: 12, fontWeight: 600, textTransform: "uppercase",
              letterSpacing: "0.08em", margin: 0,
              color: plan.popular ? "rgba(255,255,255,0.65)" : "#94a3b8",
            }}>Package</p>
            <h3 style={{
              fontSize: 20, fontWeight: 800, margin: 0,
              color: plan.popular ? "#fff" : "#0f172a",
            }}>{plan.name}</h3>
          </div>
        </div>

        {/* Price */}
        <div style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
            <span style={{
              fontSize: 13, fontWeight: 600,
              color: plan.popular ? "rgba(255,255,255,0.7)" : "#64748b",
              marginBottom: 6,
            }}>$</span>
            <span style={{
              fontSize: 52, fontWeight: 800, lineHeight: 1,
              color: plan.popular ? "#fff" : BLUE,
            }}>{price}</span>
            <span style={{
              fontSize: 13, fontWeight: 500, marginBottom: 8,
              color: plan.popular ? "rgba(255,255,255,0.6)" : "#94a3b8",
            }}>/mo</span>
          </div>
          {yearly && (
            <p style={{
              fontSize: 12, margin: "4px 0 0",
              color: plan.popular ? "rgba(255,255,255,0.6)" : GREEN,
              fontWeight: 600,
            }}>
              Save ${(plan.price.monthly - plan.price.yearly) * 12}/yr 🎉
            </p>
          )}
        </div>

        {/* Desc */}
        <p style={{
          fontSize: 13.5, lineHeight: 1.7, marginBottom: 24,
          color: plan.popular ? "rgba(255,255,255,0.75)" : "#64748b",
        }}>{plan.desc}</p>

        {/* Divider */}
        <div style={{
          height: 1, marginBottom: 22,
          background: plan.popular
            ? "rgba(255,255,255,0.15)"
            : `linear-gradient(90deg, ${BLUE_BG}, ${GREEN_BG})`,
        }} />

        {/* Features */}
        <ul style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28, flex: 1, padding: 0, listStyle: "none" }}>
          {plan.features.map((f, i) => (
            <li key={i} style={{
              display: "flex", alignItems: "center", gap: 10,
              fontSize: 13.5,
              color: f.included
                ? (plan.popular ? "rgba(255,255,255,0.9)" : "#334155")
                : (plan.popular ? "rgba(255,255,255,0.35)" : "#cbd5e1"),
              textDecoration: f.included ? "none" : "line-through",
            }}>
              <CheckIcon filled={f.included} />
              {f.text}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button style={{
          width: "100%", padding: "14px 0",
          borderRadius: 12, fontSize: 14.5, fontWeight: 700,
          cursor: "pointer", border: "none",
          background: plan.popular
            ? "#fff"
            : `linear-gradient(135deg, ${BLUE}, ${GREEN})`,
          color: plan.popular ? BLUE : "#fff",
          boxShadow: plan.popular
            ? "0 4px 16px rgba(255,255,255,0.2)"
            : `0 4px 16px rgba(0,74,106,0.25)`,
          transition: "transform 0.2s, box-shadow 0.2s",
          letterSpacing: "0.02em",
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = plan.popular
              ? "0 8px 24px rgba(255,255,255,0.3)"
              : `0 8px 24px rgba(0,74,106,0.35)`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = plan.popular
              ? "0 4px 16px rgba(255,255,255,0.2)"
              : `0 4px 16px rgba(0,74,106,0.25)`;
          }}
        >
          {plan.cta} →
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: GREEN_BG, border: `1px solid #b6ddb8`,
            borderRadius: 100, padding: "6px 16px", marginBottom: 18,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: GREEN }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: GREEN, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Transparent Pricing
            </span>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: GREEN }} />
          </div>

          <h2 style={{
            fontSize: "clamp(30px, 5vw, 46px)",
            fontWeight: 800, color: "#0f172a",
            lineHeight: 1.1, marginBottom: 14, letterSpacing: -1,
          }}>
            Simple,{" "}
            <span style={{ color: BLUE }}>Honest</span>{" "}
            Pricing
          </h2>

          <p style={{
            fontSize: 16, color: "#64748b", lineHeight: 1.75,
            maxWidth: 460, margin: "0 auto 28px",
          }}>
            No hidden fees. Pick a plan that fits your needs and let's build something great together.
          </p>

          {/* Toggle */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: "#fff", border: "1.5px solid #e8edf3",
            borderRadius: 100, padding: "6px 8px",
          }}>
            <button
              onClick={() => setYearly(false)}
              style={{
                padding: "8px 20px", borderRadius: 100, border: "none",
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                background: !yearly ? BLUE : "transparent",
                color: !yearly ? "#fff" : "#94a3b8",
                transition: "all 0.25s",
              }}
            >Monthly</button>
            <button
              onClick={() => setYearly(true)}
              style={{
                padding: "8px 20px", borderRadius: 100, border: "none",
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                background: yearly ? GREEN : "transparent",
                color: yearly ? "#fff" : "#94a3b8",
                transition: "all 0.25s",
                display: "flex", alignItems: "center", gap: 6,
              }}
            >
              Yearly
              <span style={{
                fontSize: 10, fontWeight: 700, background: GREEN_BG,
                color: GREEN, padding: "2px 7px", borderRadius: 100,
                display: yearly ? "none" : "inline",
              }}>Save 20%</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: 24,
          alignItems: "center",
        }}>
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} yearly={yearly} />
          ))}
        </div>

        {/* Bottom note */}
        <p style={{
          textAlign: "center", marginTop: 40,
          fontSize: 13.5, color: "#94a3b8",
        }}>
          Need something custom?{" "}
          <a href="#contact" style={{ color: BLUE, fontWeight: 600, textDecoration: "none" }}>
            Let's talk →
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-card { transform: scale(1) !important; }
        }
      `}</style>
    </section>
  );
}