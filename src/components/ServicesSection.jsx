import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BLUE = "#004a6a";
const GREEN = "#338c3a";

const ArrowIcon = ({ hovered }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: "transform 0.22s cubic-bezier(0.4,0,0.2,1)", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const services = [
  {
    id: 1, title: "Web Design",
    desc: "Modern, responsive UI/UX designed to convert visitors into loyal customers.",
    points: ["Custom Figma wireframes & prototypes", "Mobile-first responsive layouts", "User-centered interaction design"],
    pills: ["Figma", "UI/UX", "Responsive"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2.5"/><path d="M8 21h8"/><path d="M12 17v4"/>
        <path d="M6 7h3"/><path d="M6 10.5h6"/><rect x="13.5" y="6.5" width="5" height="5" rx="1"/>
      </svg>
    ),
  },
  {
    id: 2, title: "Web Development",
    desc: "Fast, scalable websites with clean semantic code that ranks and loads instantly.",
    points: ["Performance-optimized builds", "SEO-friendly semantic HTML/CSS", "Cross-browser & device tested"],
    pills: ["HTML/CSS", "JavaScript", "SEO"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    id: 3, title: "Content Writing",
    desc: "SEO-optimized, audience-first content that ranks high and drives real engagement.",
    points: ["Keyword-driven blog posts", "Persuasive product copy", "Brand voice & tone consistency"],
    pills: ["SEO", "Blogs", "Copywriting"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
      </svg>
    ),
  },
  {
    id: 4, title: "Shopify",
    desc: "Custom Shopify stores built to grow your D2C brand and maximize every conversion.",
    points: ["Liquid theme customization", "Conversion-focused optimization", "App integrations & AJAX cart"],
    pills: ["Liquid", "Dawn Theme", "Apps"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
  },
  {
    id: 5, title: "WordPress",
    desc: "End-to-end WordPress builds from custom themes to blazing-fast WooCommerce stores.",
    points: ["Custom theme development", "WooCommerce setup & speed", "Plugin config & performance tuning"],
    pills: ["Elementor", "WooCommerce", "Speed"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    id: 6, title: "React Frontend",
    desc: "Dynamic, component-based UIs that are smooth, fast and production-ready.",
    points: ["Reusable component architecture", "API integration & state management", "Next.js & performance optimization"],
    pills: ["React", "Next.js", "Hooks"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4"/>
        <path d="M2 12c0 2.21 4.48 4 10 4s10-1.79 10-4"/>
        <path d="M2 12c0-2.21 4.48-4 10-4s10 1.79 10 4"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
      </svg>
    ),
  },
];

function Card({ service }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#f0f6fa" : "#fff",
        borderRadius: 22,
        border: `1.5px solid ${hovered ? GREEN : "#e2e8f0"}`,
        padding: "28px 24px 22px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? `0 0 24px ${GREEN}40, 0 20px 50px rgba(0,74,106,0.13)` : "0 1px 4px rgba(0,0,0,0.04)",
        transition: "all 0.32s cubic-bezier(0.34,1.3,0.64,1)",
        cursor: "default",
      }}
    >
      {/* Icon Box */}
      <div style={{
        width: 80,
        height: 80,
        borderRadius: 18,
        background: BLUE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        transform: hovered ? "scale(1.12) rotate(-6deg)" : "scale(1) rotate(0deg)",
        boxShadow: hovered ? "0 10px 28px rgba(0,74,106,0.32)" : "none",
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 19,
        fontWeight: 800,
        color: hovered ? BLUE : "#0f172a",
        marginBottom: 10,
        transition: "color 0.25s",
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: 14,
        color: "#64748b",
        lineHeight: 1.75,
        marginBottom: 18,
        maxWidth: 280,
      }}>
        {service.desc}
      </p>

      {/* Bullet Points */}
      <ul style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "100%",
        marginBottom: 20,
        textAlign: "left",
      }}>
        {service.points.map((pt, i) => (
          <li key={i} style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 13.5,
            color: "#475569",
          }}>
            <span style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: GREEN,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }} />
            {pt}
          </li>
        ))}
      </ul>

      {/* Pills */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        justifyContent: "center",
        marginBottom: 20,
      }}>
        {service.pills.map((pill, i) => (
          <span key={i} style={{
            fontSize: 12,
            fontWeight: 600,
            padding: "5px 14px",
            borderRadius: 100,
            background: "#e6f0f5",
            color: BLUE,
            border: "1px solid #c5dce8",
          }}>
            {pill}
          </span>
        ))}
      </div>

      {/* Read More Button */}
      <button 
      onClick={() => navigate(`/service/${service.id}`)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: hovered ? 12 : 7,
        fontSize: 13.5,
        fontWeight: 700,
        color: GREEN,
        background: "transparent",
        border: "none",
        borderRadius: 10,
        padding: "10px 0px",
        cursor: "pointer",
        transition: "all 0.22s",
      }}>
        Read More
        <ArrowIcon hovered={hovered} />
      </button>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section style={{ background: "#fff", padding: "60px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "#eaf4eb",
            border: "1px solid #b6ddb8",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 16,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: GREEN }} />
            <span style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#000",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
            }}>
              What I Offer
            </span>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: GREEN }} />
          </div>
          <h2 style={{
            fontSize: "clamp(28px,5vw,44px)",
            fontWeight: 800,
            color: "#000",
            letterSpacing: -1,
            marginBottom: 12,
          }}>
            MY <span style={{ color: BLUE }}>SERVICES</span>
          </h2>
          <p style={{
            fontSize: 15,
            color: "#64748b",
            lineHeight: 1.75,
            maxWidth: 460,
            margin: "0 auto",
          }}>
            Pixel-perfect solutions across design, development & content — crafted to convert and built to perform.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: 22,
        }}>
          {services.map(service => <Card key={service.id} service={service} />)}
        </div>
      </div>
    </section>
  );
}