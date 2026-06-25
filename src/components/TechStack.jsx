import { useEffect, useRef, useState } from "react";

const BLUE  = "#004a6a";
const GREEN = "#338c3a";

const DotIcon = ({ color }) => (
  <svg width="8" height="8" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="4" fill={color} />
  </svg>
);

// ── All skill icons: BLUE bg, white icon, size 26 ────────────────────────────
const skills = [
  {
    name: "Shopify Development",
    level: 95,
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
        <path d="M14 3.5c-.4-1.2-1.4-2-2.5-2h-.3c-.2-.3-.5-.6-.9-.6C8 1 7 4 6.6 5.4L4.6 6c-.3.1-.6.5-.6.8l1 8.5c0 .4.4.7.7.7l10-.1c.4 0 .7-.3.7-.7l1-8.5c0-.3-.2-.6-.5-.7L14 3.5zm-2.5-1c.5 0 .9.3 1.1.7l-2.3.7c.3-.9.7-1.4 1.2-1.4zm.5 7.5c0 1-.8 1.8-1.8 1.8S8.4 11 8.4 10s.8-1.8 1.8-1.8 1.8.8 1.8 1.8z"/>
      </svg>
    ),
  },
  {
    name: "WordPress Development",
    level: 90,
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.5 12c0-1.232.264-2.402.727-3.46L7.7 18.872A8.513 8.513 0 0 1 3.5 12zm8.5 8.5a8.51 8.51 0 0 1-2.413-.349l2.563-7.444 2.625 7.193c.017.042.038.08.06.117A8.508 8.508 0 0 1 12 20.5zm1.181-12.816c.516-.027.981-.081.981-.081.462-.055.408-.733-.054-.706 0 0-1.386.109-2.281.109-.84 0-2.254-.109-2.254-.109-.463-.027-.517.678-.055.706 0 0 .437.054.898.081l1.334 3.655-1.874 5.617-3.117-9.272c.516-.027.979-.081.979-.081.461-.055.407-.733-.055-.706 0 0-1.386.109-2.28.109a9.207 9.207 0 0 0-.252-.004A8.507 8.507 0 0 1 12 3.5a8.48 8.48 0 0 1 6.064 2.527c-.078-.005-.157-.009-.236-.009-.84 0-1.437.731-1.437 1.517 0 .705.407 1.3.839 2.005.326.571.706 1.301.706 2.358 0 .732-.282 1.58-.651 2.764l-.854 2.852-3.05-9.074zm2.555 11.286 2.614-7.549c.487-1.219.65-2.195.65-3.065 0-.315-.021-.607-.058-.883A8.505 8.505 0 0 1 20.5 12a8.507 8.507 0 0 1-4.264 7.37z"/>
      </svg>
    ),
  },
  {
    name: "Frontend Development",
    level: 88,
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    name: "UI/UX & Figma",
    level: 85,
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zM12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0zM5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
      </svg>
    ),
  },
  {
    name: "Social Media Marketing",
    level: 82,
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "Graphics Designing",
    level: 80,
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="3" fill="white"/>
        <line x1="12" y1="2"  x2="12" y2="6"/>
        <line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="2"  y1="12" x2="6"  y2="12"/>
        <line x1="18" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
];

// ── Right: Tech Icon Cards ────────────────────────────────────────────────────
const techCards = [
  {
    name: "React",
    bg: BLUE,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="1.4">
        <circle cx="12" cy="12" r="2.2" fill="white"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    bg: GREEN,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 17.85 9.5 19 12 19c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
      </svg>
    ),
  },
  {
    name: "Shopify",
    bg: BLUE,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
        <path d="M14 3.5c-.4-1.2-1.4-2-2.5-2h-.3c-.2-.3-.5-.6-.9-.6C8 1 7 4 6.6 5.4L4.6 6c-.3.1-.6.5-.6.8l1 8.5c0 .4.4.7.7.7l10-.1c.4 0 .7-.3.7-.7l1-8.5c0-.3-.2-.6-.5-.7L14 3.5zm-2.5-1c.5 0 .9.3 1.1.7l-2.3.7c.3-.9.7-1.4 1.2-1.4zm.5 7.5c0 1-.8 1.8-1.8 1.8S8.4 11 8.4 10s.8-1.8 1.8-1.8 1.8.8 1.8 1.8z"/>
      </svg>
    ),
  },
  {
    name: "WordPress",
    bg: GREEN,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.5 12c0-1.232.264-2.402.727-3.46L7.7 18.872A8.513 8.513 0 0 1 3.5 12zm8.5 8.5a8.51 8.51 0 0 1-2.413-.349l2.563-7.444 2.625 7.193.06.117A8.508 8.508 0 0 1 12 20.5zm1.181-12.816.981-.081c.462-.055.408-.733-.054-.706l-2.281.109c-.84 0-2.254-.109-2.254-.109-.463-.027-.517.678-.055.706l.898.081 1.334 3.655-1.874 5.617-3.117-9.272.979-.081c.461-.055.407-.733-.055-.706l-2.28.109-.252-.004A8.507 8.507 0 0 1 12 3.5a8.48 8.48 0 0 1 6.064 2.527l-.236-.009c-.84 0-1.437.731-1.437 1.517 0 .705.407 1.3.839 2.005.326.571.706 1.301.706 2.358 0 .732-.282 1.58-.651 2.764l-.854 2.852-3.05-9.074zm2.555 11.286 2.614-7.549c.487-1.219.65-2.195.65-3.065 0-.315-.021-.607-.058-.883A8.505 8.505 0 0 1 20.5 12a8.507 8.507 0 0 1-4.264 7.37z"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    bg: BLUE,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zM12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0zM5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    bg: GREEN,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    bg: BLUE,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.12-.22V7.7c0-.09.04-.17.12-.22l7.44-4.29c.07-.04.16-.04.22 0l7.44 4.29c.08.05.12.13.12.22v8.58c0 .09-.04.17-.12.22l-7.44 4.29c-.06.04-.15.04-.22 0L9.59 19.5c-.06-.04-.14-.04-.2-.01-.56.31-.67.36-1.19.51-.13.04-.33.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05a1.6 1.6 0 0 0-.78-.2z"/>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    bg: GREEN,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218z"/>
      </svg>
    ),
  },
  {
    name: "Social Media",
    bg: BLUE,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "UI/UX Design",
    bg: GREEN,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    name: "Digital Mktg",
    bg: BLUE,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    name: "Elementor",
    bg: GREEN,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.25 14H8.5V8h2.25v8zm4.5 0h-2.25v-8h2.25v8z"/>
      </svg>
    ),
  },
];

// ── Animated SkillBar ─────────────────────────────────────────────────────────
function SkillBar({ name, level, icon, animate }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 7 }}>
        {/* Icon: always BLUE bg, white icon */}
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: BLUE,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: `0 4px 14px ${BLUE}44`,
          }}
        >
          {icon}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#0f2a38" }}>{name}</span>
            <span style={{ fontSize: 12.5, fontWeight: 800, color: GREEN }}>{level}%</span>
          </div>

          {/* Track */}
          <div style={{ height: 7, background: "#e2e8f0", borderRadius: 100, overflow: "hidden" }}>
            {/* Green fill — animates from 0 to level */}
            <div
              style={{
                height: "100%",
                width: animate ? `${level}%` : "0%",
                background: `linear-gradient(90deg, ${GREEN}, #40ae49)`,
                borderRadius: 100,
                transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Tech Icon Card ────────────────────────────────────────────────────────────
function TechCard({ name, bg, icon }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: "16px 8px",
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 14,
        boxShadow: "0 2px 10px rgba(15,42,56,0.05)",
        transition: "box-shadow 0.25s, transform 0.25s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 8px 24px ${bg}33`;
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "0 2px 10px rgba(15,42,56,0.05)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: 13,
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 6px 16px ${bg}44`,
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: 11.5, fontWeight: 700, color: "#0f2a38", textAlign: "center", lineHeight: 1.3 }}>
        {name}
      </span>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function TechStack() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ width: "100%", background: "#f8fafc", padding: "80px 16px" }}>
      <style>{`
        .ts-wrap {
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }
        .ts-left { flex: 0 0 38%; }
        .ts-divider {
          width: 1px;
          align-self: stretch;
          flex-shrink: 0;
          background: linear-gradient(180deg, transparent, #cbd5e1bb, #cbd5e1bb, transparent);
        }
        .ts-right { flex: 1; }
        .ts-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        @media (max-width: 900px) {
          .ts-tech-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .ts-wrap { flex-direction: column; gap: 36px; }
          .ts-left, .ts-right { flex: unset; width: 100%; }
          .ts-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, #cbd5e1, transparent); align-self: unset; }
          .ts-tech-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 480px) {
          .ts-tech-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#eaf4eb", border: "1px solid #b6ddb8", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
            <DotIcon color={GREEN} />
            <span style={{ fontSize: 11, fontWeight: 700, color: GREEN, letterSpacing: "0.1em", textTransform: "uppercase" }}>Skills</span>
            <DotIcon color={GREEN} />
          </div>
          <h2 style={{ fontSize: "clamp(26px,5vw,42px)", fontWeight: 800, color: "#000", letterSpacing: -1, marginBottom: 10, lineHeight: 1.15 }}>
            TECH <span style={{ color: BLUE }}>STACK</span>
          </h2>
          <p style={{ fontSize: 14.5, color: "#5a6a7a", maxWidth: 460, lineHeight: 1.8 }}>
            Tools and technologies I use to build fast, clean, and scalable products.
          </p>
        </div>

        {/* 40 | 60 Layout */}
        <div className="ts-wrap">

          {/* LEFT 40% — Skill Bars */}
          <div className="ts-left">
            <h3 style={{ fontSize: 13, fontWeight: 800, color: BLUE, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 22, paddingBottom: 10, borderBottom: `2px solid ${BLUE}22` }}>
              Skills Overview
            </h3>
            {skills.map((s, i) => (
              <SkillBar key={i} name={s.name} icon={s.icon} level={s.level} animate={animate} />
            ))}
          </div>

          {/* Divider */}
          <div className="ts-divider" />

          {/* RIGHT 60% — Tech Cards */}
          <div className="ts-right">
            <h3 style={{ fontSize: 13, fontWeight: 800, color: GREEN, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 22, paddingBottom: 10, borderBottom: `2px solid ${GREEN}22` }}>
              Technologies & Tools
            </h3>
            <div className="ts-tech-grid">
              {techCards.map((t, i) => (
                <TechCard key={i} name={t.name} bg={t.bg} icon={t.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}