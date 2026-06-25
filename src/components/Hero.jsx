import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document.getElementById("hero-fonts")) return;
    const link = document.createElement("link");
    link.id = "hero-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <section style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.3); }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(0,220,255,0.35);
          border-radius: 999px;
          padding: 10px 20px;
          background: rgba(11,14,21,0.55);
          backdrop-filter: blur(10px);
          margin-bottom: 28px;
          animation: fadeUp 0.6s ease both;
        }
        .hero-badge span {
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
        }
        .hero-badge .fl-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #40e060;
          box-shadow: 0 0 8px #40e060;
          flex-shrink: 0;
          animation: pulseDot 2s ease-in-out infinite;
        }

        .hero-name {
          font-size: clamp(26px, 4vw, 44px);
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin-bottom: 22px;
          overflow-wrap: break-word;
          animation: fadeUp 0.6s 0.1s ease both;
        }

        @media (min-width: 640px) {
          .hero-name { white-space: nowrap; }
        }

        .hero-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto;
          animation: fadeUp 0.6s 0.2s ease both;
        }
      `}</style>

      {/* background video */}
      <video
        ref={videoRef}
        style={styles.video}
        autoPlay
        muted
        loop
        playsInline
        poster=""
      >
        {/* apni video ka URL yahan daalein */}
        <source src="src/assets/299527.mp4" type="video/mp4" />      </video>

      {/* dark layer on top of video, color #0b0e15 */}
      <div style={styles.overlayFlat} />

      {/* vignette so center text always pops */}
      <div style={styles.vignette} />

      <div style={styles.inner}>
        <div className="hero-badge">
          <div className="fl-dot" />
          <span>Available for Freelance Projects</span>
        </div>

        <h1 className="hero-name">Web Development That Converts</h1>

        <p className="hero-desc">
          Freelance expert in SEO, Graphic Design &amp; Web Development —<br />
          building fast, scalable experiences for Shopify, MERN &amp; WordPress.
        </p>
      </div>
    </section>
  );
}

const styles = {
  root: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Inter', sans-serif",
    background: "#0b0e15",
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
  },
  overlayFlat: {
    position: "absolute",
    inset: 0,
    background: "#0b0e15",
    opacity: 0.65,
    zIndex: 1,
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at center, transparent 30%, #0b0e15 100%)",
    zIndex: 1,
  },
  inner: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "820px",
    minWidth: 0,
    margin: "0 auto",
    padding: "40px 24px",
    textAlign: "center",
    boxSizing: "border-box",
  },
};