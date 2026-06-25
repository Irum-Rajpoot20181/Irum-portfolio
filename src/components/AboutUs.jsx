import { useState, useEffect } from "react";

const BLUE = "#004a6a";
const GREEN = "#338c3a";

const ArrowIcon = ({ hovered }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: "transform 0.22s cubic-bezier(0.4,0,0.2,1)", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const skills = [
  { label: "Shopify" },
  { label: "React / Next.js" },
  { label: "UI/UX Design" },
  { label: "WordPress" },
];

const DotIcon = ({ color }) => (
  <svg width="8" height="8" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="4" fill={color} />
  </svg>
);

function useTypewriter(text, speed = 90) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

export default function AboutUs() {
  const [hovered, setHovered] = useState(false);
  const [cvHovered, setCvHovered] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const typedName = useTypewriter("Irum Rajpoot", 90);
  const isTypingDone = typedName === "Irum Rajpoot";

  useEffect(() => {
    if (isTypingDone) {
      const t = setTimeout(() => setShowCursor(false), 1000);
      return () => clearTimeout(t);
    }
  }, [isTypingDone]);

  return (
    <section className="about-section">
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .about-section {
          background: #fff;
          padding: 90px 20px;
        }
        .about-inner {
          max-width: 1120px;
          margin: 0 auto;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Desktop: content left, image right */
        .about-content { order: 1; }
        .about-image   { order: 2; position: relative; height: 520px; }

        .about-collage-glow {
          position: absolute;
          top: 15%; left: 10%;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, #004a6a25 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }
        .about-box1 {
          position: absolute;
          top: 0; left: 0;
          width: 295px; height: 310px;
          border-radius: 24px;
          background: #004a6a;
          overflow: hidden;
          box-shadow: 0 20px 55px rgba(0,74,106,0.28);
          z-index: 3;
        }
        .about-box2 {
          position: absolute;
          bottom: 0; left: 12%;
          width: 410px; height: 265px;
          border-radius: 24px;
          background: #338c3a;
          overflow: hidden;
          box-shadow: 0 20px 55px rgba(51,140,58,0.28);
          z-index: 2;
        }
        .about-box3 {
          position: absolute;
          top: 35px; right: 0;
          width: 220px; height: 300px;
          border-radius: 24px;
          background: #deeaf1;
          overflow: hidden;
          box-shadow: 0 14px 40px rgba(0,74,106,0.15);
          z-index: 1;
        }
        .about-circle {
          position: absolute;
          bottom: -18px; left: -18px;
          width: 110px; height: 110px;
          border-radius: 50%;
          background: #e8f0ec;
          z-index: 0;
        }
        .about-box-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }
        .about-btn-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* Tablet (640px – 1023px) */
        @media (max-width: 1023px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          /* image first, content second */
          .about-content { order: 2; }
          .about-image   { order: 1; height: 380px; }

          .about-collage-glow { width: 220px; height: 220px; }
          .about-box1 { width: 50%; height: 57%; }
          .about-box2 { width: 74%; height: 47%; }
          .about-box3 { width: 32%; height: 54%; }
          .about-circle { width: 80px; height: 80px; bottom: -12px; left: -12px; }
        }

        /* Mobile (< 640px) — sirf ek image show hogi */
        @media (max-width: 639px) {
          .about-section { padding: 52px 16px; }
          .about-grid { gap: 36px; }

          .about-image {
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .about-collage-glow {
            width: 220px;
            height: 220px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .about-box1 {
            position: relative;
            top: auto;
            left: auto;
            width: 85%;
            height: 92%;
            border-radius: 20px;
          }

          .about-box2,
          .about-box3,
          .about-circle {
            display: none;
          }

          .about-btn-row { flex-direction: column; }
          .about-btn-row button { width: 100% !important; justify-content: center; }
        }
      `}</style>

      <div className="about-inner">
        <div className="about-grid">

          {/* LEFT: Content */}
          <div className="about-content">
            {/* Badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "#eaf4eb",
              border: "1px solid #b6ddb8",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
            }}>
              <DotIcon color={GREEN} />
              <span style={{ fontSize: 11.5, fontWeight: 700, color: GREEN, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                About Me
              </span>
              <DotIcon color={GREEN} />
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 800,
              color: "#0f2a38",
              letterSpacing: -0.8,
              marginBottom: 6,
              lineHeight: 1.18,
            }}>
              Hi, I'm{" "}
              <span style={{ color: BLUE }}>
                {typedName}
                {showCursor && (
                  <span style={{
                    display: "inline-block",
                    width: 3,
                    height: "0.85em",
                    background: BLUE,
                    marginLeft: 3,
                    verticalAlign: "middle",
                    borderRadius: 2,
                    animation: "blink 0.7s step-end infinite",
                  }} />
                )}
              </span>
            </h2>

            <h3 style={{
              fontSize: "clamp(15px, 2vw, 19px)",
              fontWeight: 500,
              color: "#64748b",
              marginBottom: 22,
              letterSpacing: 0,
            }}>
              Freelance Developer &amp; Designer
            </h3>

            <p style={{
              fontSize: 15,
              color: "#5a6a7a",
              lineHeight: 1.9,
              marginBottom: 32,
            }}>
              I build fast, beautiful, and conversion-focused web experiences — from custom Shopify stores to React frontends and WordPress sites. Based in Pakistan, working with clients worldwide.
            </p>

            {/* Skill chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
              {skills.map((s, i) => (
                <div key={i} style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: BLUE,
                  border: `1px solid ${BLUE}`,
                  borderRadius: 50,
                  padding: "8px 16px",
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: "#ffffff",
                  whiteSpace: "nowrap",
                }}>
                  <DotIcon color="#ffffff" />
                  {s.label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="about-btn-row">
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#fff",
                  background: hovered ? `linear-gradient(135deg, ${GREEN}, ${BLUE})` : GREEN,
                  border: "none",
                  borderRadius: 12,
                  padding: "13px 30px",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  boxShadow: hovered ? `0 14px 36px ${GREEN}45` : "0 4px 14px rgba(51,140,58,0.22)",
                  transform: hovered ? "translateY(-2px)" : "translateY(0)",
                }}
              >
                Get In Touch
                <ArrowIcon hovered={hovered} />
              </button>

              <button
                onMouseEnter={() => setCvHovered(true)}
                onMouseLeave={() => setCvHovered(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  color: cvHovered ? "#fff" : BLUE,
                  background: cvHovered ? BLUE : "transparent",
                  border: `1.5px solid ${BLUE}`,
                  borderRadius: 12,
                  padding: "13px 30px",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  boxShadow: cvHovered ? `0 8px 24px ${BLUE}30` : "none",
                  transform: cvHovered ? "translateY(-2px)" : "translateY(0)",
                }}
              >
                ↓ Download CV
              </button>
            </div>
          </div>

          {/* RIGHT: Image Collage */}
          <div className="about-image">
            <div className="about-collage-glow" />

            <div className="about-box1">
              <img src="src/assets/image8.jpg" alt="Irum working" className="about-box-img"
                onError={e => { e.target.style.display = "none"; }} />
            </div>

            <div className="about-box2">
              <img src="src/assets/image 1.jpg" alt="Design work" className="about-box-img"
                onError={e => { e.target.style.display = "none"; }} />
            </div>

            <div className="about-box3">
              <img src="src/assets/image 3.jpg" alt="Results" className="about-box-img"
                onError={e => { e.target.style.display = "none"; }} />
            </div>

            <div className="about-circle" />
          </div>

        </div>
      </div>
    </section>
  );
}