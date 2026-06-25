import { useState, useEffect, useRef } from "react";

const BLUE = "#004a6a";
const GREEN = "#338c3a";
const BLUE_BG = "#e6f0f5";
const GREEN_BG = "#eaf4eb";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "Founder & CEO",
    rating: 5,
    quote:
      "Irum delivered our Shopify store beyond expectations. The custom Liquid code was clean, fast, and the conversion rate jumped 40% in the first month. Truly a professional!",
    avatar: "SJ",
    avatarBg: BLUE,
  },
  {
    id: 2,
    name: "Ahmed Raza",
    company: "StyleCo PK",
    role: "E-commerce Manager",
    rating: 5,
    quote:
      "Our WordPress site went from slow and outdated to blazing fast. She handled everything — theme, WooCommerce, plugins. Communication was excellent throughout the project.",
    avatar: "AR",
    avatarBg: GREEN,
  },
  {
    id: 3,
    name: "Emily Chen",
    company: "Bloom Agency",
    role: "Creative Director",
    rating: 5,
    quote:
      "The React frontend she built for our client portal is stunning and performant. Every component was pixel-perfect and the code was well-structured. Will definitely hire again!",
    avatar: "EC",
    avatarBg: BLUE,
  },
  {
    id: 4,
    name: "Omar Sheikh",
    company: "Digital Bazaar",
    role: "Marketing Head",
    rating: 5,
    quote:
      "Exceptional content writing that actually ranks! Our blog traffic tripled in 3 months after she rewrote our content strategy. SEO-focused and brand-consistent writing.",
    avatar: "OS",
    avatarBg: GREEN,
  },
  {
    id: 5,
    name: "Fatima Malik",
    company: "BeautyBrand PK",
    role: "Brand Owner",
    rating: 5,
    quote:
      "She redesigned our entire Shopify store with a gorgeous UI. The mobile experience is flawless and customer complaints about the site dropped to zero. Highly recommend!",
    avatar: "FM",
    avatarBg: BLUE,
  },
];

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? GREEN : "#e2e8f0"}
          stroke={i < rating ? GREEN : "#e2e8f0"}
          strokeWidth="1"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill={BLUE} opacity="0.12">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function TestimonialCard({ t, active }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "32px 28px",
        border: `1.5px solid ${active ? BLUE : "#e8edf3"}`,
        boxShadow: active
          ? `0 20px 50px rgba(0,74,106,0.13)`
          : "0 2px 8px rgba(0,0,0,0.05)",
        transform: active ? "scale(1.02)" : "scale(0.97)",
        opacity: active ? 1 : 0.55,
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        minWidth: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top blue accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 3,
          background: active
            ? `linear-gradient(90deg, ${BLUE}, ${GREEN})`
            : "transparent",
          borderRadius: "20px 20px 0 0",
          transition: "background 0.4s",
        }}
      />

      {/* Quote icon */}
      <div style={{ position: "absolute", top: 20, right: 24 }}>
        <QuoteIcon />
      </div>

      {/* Stars */}
      <StarRating rating={t.rating} />

      {/* Quote text */}
      <p style={{
        fontSize: 14.5,
        color: "#475569",
        lineHeight: 1.8,
        fontStyle: "italic",
        margin: 0,
      }}>
        "{t.quote}"
      </p>

      {/* Divider */}
      <div style={{
        height: 1,
        background: `linear-gradient(90deg, ${BLUE_BG}, ${GREEN_BG})`,
        borderRadius: 1,
      }} />

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* Avatar */}
        <div style={{
          width: 46,
          height: 46,
          borderRadius: "50%",
          background: t.avatarBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: `0 4px 12px ${t.avatarBg}60`,
        }}>
          <span style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: 0.5,
          }}>
            {t.avatar}
          </span>
        </div>

        <div>
          <p style={{ fontSize: 14, fontWeight: 700, color: BLUE, margin: 0, lineHeight: 1.3 }}>
            {t.name}
          </p>
          <p style={{ fontSize: 12, color: GREEN, fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
            {t.role} · {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    setActive(i);
    startTimer();
  };

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((active + 1) % testimonials.length);

  // Show 3 cards: prev, active, next
  const visible = [
    (active - 1 + testimonials.length) % testimonials.length,
    active,
    (active + 1) % testimonials.length,
  ];

  return (
    <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: BLUE_BG, border: `1px solid #b6d4e2`,
            borderRadius: 100, padding: "6px 16px", marginBottom: 18,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: BLUE }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: BLUE, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Client Love
            </span>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: BLUE }} />
          </div>

          <h2 style={{
            fontSize: "clamp(30px, 5vw, 46px)",
            fontWeight: 800, color: "#0f172a",
            lineHeight: 1.1, marginBottom: 14, letterSpacing: -1,
          }}>
            What Clients{" "}
            <span style={{ color: GREEN }}>Say</span>
          </h2>

          <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.75, maxWidth: 460, margin: "0 auto" }}>
            Real words from real clients — projects delivered with passion, precision, and results.
          </p>
        </div>

        {/* Cards — desktop 3 col, mobile single */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginBottom: 40,
        }}
          className="testimonials-grid"
        >
          {visible.map((idx, pos) => (
            <TestimonialCard
              key={testimonials[idx].id}
              t={testimonials[idx]}
              active={pos === 1}
            />
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
          {/* Prev */}
          <button
            onClick={prev}
            style={{
              width: 42, height: 42, borderRadius: "50%",
              border: `1.5px solid ${BLUE}`,
              background: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = BLUE; e.currentTarget.querySelector("svg").style.stroke = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.querySelector("svg").style.stroke = BLUE; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === active ? GREEN : "#cbd5e1",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            style={{
              width: 42, height: 42, borderRadius: "50%",
              border: `1.5px solid ${BLUE}`,
              background: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = BLUE; e.currentTarget.querySelector("svg").style.stroke = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.querySelector("svg").style.stroke = BLUE; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile CSS override */}
        <style>{`
         @media (max-width: 768px) {
            .testimonials-grid { grid-template-columns: 1fr !important; }
            .testimonials-grid > div:first-child,
            .testimonials-grid > div:last-child { display: none; }
          }
        `}</style>

      </div>
    </section>
  );
}