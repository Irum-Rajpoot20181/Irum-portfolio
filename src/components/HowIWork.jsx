import { MessageCircle, Palette, Code2, Rocket } from "lucide-react";

const BLUE  = "#004a6a";
const GREEN = "#338c3a";

const steps = [
  {
    number: "01",
    title: "Discuss",
    subtitle: "Understanding Your Vision",
    description: "We talk about your goals, audience, and requirements — no assumptions, just clarity.",
    icon: MessageCircle,
    bg: BLUE,
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Wireframes & UI Concepts",
    description: "Clean mockups tailored to your brand. You review, give feedback, we refine.",
    icon: Palette,
    bg: GREEN,
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Clean Code & Development",
    description: "Pixel-perfect dev using the right stack — Shopify, React, or WordPress.",
    icon: Code2,
    bg: BLUE,
  },
  {
    number: "04",
    title: "Deliver",
    subtitle: "Launch & Handoff",
    description: "Your project goes live with full support. Smooth delivery, every time.",
    icon: Rocket,
    bg: GREEN,
  },
];

const DotIcon = ({ color }) => (
  <svg width="8" height="8" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="4" fill={color} />
  </svg>
);

function StepCard({ step, index }) {
  const Icon = step.icon;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "0 12px",
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: step.bg,
          boxShadow: `0 10px 28px ${step.bg}50`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginBottom: 20,
          flexShrink: 0,
        }}
      >
        <Icon size={30} color="#ffffff" strokeWidth={1.8} />
        {/* Badge */}
        <div
          style={{
            position: "absolute",
            top: -3,
            right: -3,
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "#ffffff",
            color: step.bg,
            fontSize: 11,
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          {index + 1}
        </div>
      </div>

      {/* Step label */}
      <span
        style={{
          fontSize: 10.5,
          fontWeight: 800,
          color: step.bg,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: 5,
          opacity: 0.75,
        }}
      >
        Step {step.number}
      </span>

      {/* Title */}
      <h3
        style={{
          fontSize: 19,
          fontWeight: 800,
          color: "#0f2a38",
          letterSpacing: -0.3,
          marginBottom: 4,
        }}
      >
        {step.title}
      </h3>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: step.bg,
          marginBottom: 10,
        }}
      >
        {step.subtitle}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: 13,
          color: "#5a6a7a",
          lineHeight: 1.7,
          maxWidth: 190,
        }}
      >
        {step.description}
      </p>
    </div>
  );
}

export default function HowIWork() {
  return (
    <section style={{ width: "100%", background: "#f8fafc", padding: "72px 16px" }}>
      <style>{`
        .hiw-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          position: relative;
        }
        .hiw-grid::before {
          content: "";
          position: absolute;
          top: 39px;
          left: calc(12.5% + 4px);
          right: calc(12.5% + 4px);
          height: 2px;
          background: linear-gradient(90deg, ${BLUE}44, ${GREEN}44, ${BLUE}44, ${GREEN}44);
          z-index: 0;
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .hiw-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 16px;
          }
          .hiw-grid::before {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .hiw-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1060, margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "#eaf4eb",
              border: "1px solid #b6ddb8",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 16,
            }}
          >
            <DotIcon color={GREEN} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: GREEN,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Process
            </span>
            <DotIcon color={GREEN} />
          </div>

          <h2
            style={{
              fontSize: "clamp(26px, 5vw, 42px)",
              fontWeight: 800,
              color: "#000",
              letterSpacing: -1,
              marginBottom: 10,
              lineHeight: 1.15,
            }}
          >
            HOW I <span style={{ color: BLUE }}>WORK</span>
          </h2>

          <p
            style={{
              fontSize: 14.5,
              color: "#5a6a7a",
              maxWidth: 460,
              lineHeight: 1.8,
            }}
          >
            Simple, transparent process — from first conversation to final delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="hiw-grid">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}