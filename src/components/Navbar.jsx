import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      document.body.classList.add("other-page-active");
    } else {
      document.body.classList.remove("other-page-active");
    }
    return () => document.body.classList.remove("other-page-active");
  }, [isHomePage]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/AboutUs" },
    { label: "Skills", href: "/TechStack" },
    { label: "Services", href: "/Servicesection" },
    { label: "Projects", href: "/Portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap');

        .fh-wrap {
          position: absolute;
          top: 20px;
          left: 80px;
          right: 80px;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 20px;
          border-radius: 32px;
          background: linear-gradient(180deg, rgba(16,46,58,0.5) 0%, rgba(16,46,58,0.18) 100%);
          border: none;
          backdrop-filter: blur(26px);
          -webkit-backdrop-filter: blur(26px);
          font-family: 'Inter', sans-serif;
          transition: top 0.25s ease;
          animation: headerGlow 2.6s ease-in-out infinite;
        }
        

        /* Other pages - Solid Blue background */
        .fh-wrap.other-page {
          background: #004a6a;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          animation: headerGlowBlue 2.6s ease-in-out infinite;
          margin-bottom: 80px;   
        }
        .fh-wrap.other-page.scrolled {
          background: #004a6a;
        }

        @media (max-width: 640px) {
          .fh-wrap { left: 16px; right: 16px; }
        }

        @keyframes headerGlow {
          0%, 100% {
            box-shadow: 0 10px 36px rgba(0,0,0,0.4), 0 0 18px rgba(0,180,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06);
          }
          50% {
            box-shadow: 0 10px 36px rgba(0,0,0,0.4), 0 0 32px rgba(0,220,255,0.3), inset 0 1px 0 rgba(255,255,255,0.06);
          }
        }

        @keyframes headerGlowBlue {
          0%, 100% {
            box-shadow: 0 10px 36px rgba(0,0,0,0.4), 0 0 18px rgba(51,140,58,0.12), inset 0 1px 0 rgba(255,255,255,0.06);
          }
          50% {
            box-shadow: 0 10px 36px rgba(0,0,0,0.4), 0 0 32px rgba(51,140,58,0.3), inset 0 1px 0 rgba(255,255,255,0.06);
          }
        }

        .fh-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          text-decoration: none;
        }

        .fh-mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #004b6a 0%, #006d8f 50%, #0099c6 100%);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 16px;
          color: #ffffff;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(0,153,198,0.4);
        }

        /* Other pages - Green mark */
        .other-page .fh-mark {
          background: linear-gradient(135deg, #338c3a 0%, #2d7830 50%, #25a833 100%);
          box-shadow: 0 4px 14px rgba(51,140,58,0.4);
        }

        .fh-logo {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
        }

        .fh-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .fh-nav a {
          position: relative;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          white-space: nowrap;
          padding: 9px 16px;
          border-radius: 999px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .fh-nav a:hover { color: #ffffff; }
        .fh-nav a.active { color: #ffffff; }
        .fh-nav a.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #0099c6, transparent);
        }

        /* Other pages - Green active line */
        .other-page .fh-nav a.active::after {
          background: linear-gradient(90deg, transparent, #338c3a, transparent);
        }

        @media (max-width: 920px) {
          .fh-nav { display: none; }
        }

        .fh-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 22px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.2);
          background: linear-gradient(135deg, #004b6a 0%, #006d8f 50%, #0099c6 100%);
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: transform 0.2s ease;
          flex-shrink: 0;
          animation: ctaGlow 2.4s ease-in-out infinite;
        }
        .fh-cta:hover { transform: translateY(-2px); }

        /* Other pages - Green button */
        .other-page .fh-cta {
          background: linear-gradient(135deg, #338c3a 0%, #2d7830 50%, #25a833 100%);
          animation: ctaGlowGreen 2.4s ease-in-out infinite;
        }

        @keyframes ctaGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(0,153,198,0.45), 0 6px 20px rgba(0,153,198,0.3);
            border-color: rgba(255,255,255,0.2);
          }
          50% {
            box-shadow: 0 0 0 5px rgba(0,153,198,0), 0 8px 26px rgba(0,153,198,0.5);
            border-color: rgba(0,220,255,0.6);
          }
        }

        @keyframes ctaGlowGreen {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(51,140,58,0.45), 0 6px 20px rgba(51,140,58,0.3);
            border-color: rgba(255,255,255,0.2);
          }
          50% {
            box-shadow: 0 0 0 5px rgba(51,140,58,0), 0 8px 26px rgba(51,140,58,0.5);
            border-color: rgba(51,140,58,0.6);
          }
        }

        .fh-burger {
          display: none;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }
        .fh-burger span {
          display: block;
          width: 16px;
          height: 2px;
          background: #e2e8f0;
          position: relative;
        }
        .fh-burger span::before,
        .fh-burger span::after {
          content: '';
          position: absolute;
          left: 0;
          width: 16px;
          height: 2px;
          background: #e2e8f0;
        }
        .fh-burger span::before { top: -5px; }
        .fh-burger span::after  { top: 5px; }

        @media (max-width: 920px) {
          .fh-burger { display: flex; }
        }

        .fh-mobile-menu {
          position: absolute;
          top: 86px;
          left: 48px;
          right: 48px;
          z-index: 49;
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 14px;
          border-radius: 20px;
          background: rgba(8,11,17,0.95);
          border: 1.5px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(18px);
          font-family: 'Inter', sans-serif;
          animation: fhFadeDown 0.2s ease both;
        }
        .fh-mobile-menu a {
          padding: 10px 12px;
          border-radius: 10px;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
        }
        .fh-mobile-menu a:hover { background: rgba(0,220,255,0.08); color: #00dcff; }
        .fh-mobile-menu a.active { background: rgba(0,220,255,0.1); color: #00dcff; }

        /* Other pages - Green mobile menu */
        .other-page .fh-mobile-menu a:hover { background: rgba(51,140,58,0.08); color: #2d7830; }
        .other-page .fh-mobile-menu a.active { background: rgba(51,140,58,0.1); color: #2d7830; }

        @media (max-width: 640px) {
          .fh-mobile-menu { left: 16px; right: 16px; }
        }

        @keyframes fhFadeDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Content wrapper padding - use this class on your page container */
        .page-with-navbar {
          padding-top: 100px;
          padding-bottom: 80px;
        }
      `}</style>

      <header className={`fh-wrap${scrolled ? " scrolled" : ""}${!isHomePage ? " other-page" : ""}`}>
        {/* Brand / Logo */}
        <Link to="/" className="fh-brand">
          <div className="fh-mark">I</div>
          <div className="fh-logo">Irum Rajput</div>
        </Link>

        {/* Desktop Nav */}
        <nav className="fh-nav">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={active === l.label ? "active" : ""}
              onClick={() => setActive(l.label)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Burger */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button className="fh-cta">Hire Me</button>
          </Link>
          <div className="fh-burger" onClick={() => setMenuOpen((v) => !v)}>
            <span />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fh-mobile-menu">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={active === l.label ? "active" : ""}
              onClick={() => {
                setActive(l.label);
                setMenuOpen(false);
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}