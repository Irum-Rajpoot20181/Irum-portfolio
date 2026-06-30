import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const NAVY = "#0A1628";
const BLUE = "#2563EB";
const GREEN = "#10B981";
const LIGHT_BLUE = "#EFF6FF";
const LIGHT_GREEN = "#ECFDF5";

const servicesData = {
  1: {
    title: "Web Design",
    tagline: "Beautiful interfaces that convert visitors into customers.",
    accentColor: BLUE,
    category: "Design",
    pills: ["Figma", "UI/UX", "Responsive", "Wireframing", "Prototyping"],
    overview:
      "I design modern, pixel-perfect web interfaces with a strong focus on user experience and conversion. Every design decision is intentional — from typography to color to spacing — crafted to make your brand unforgettable.",
    process: [
      { step: "01", title: "Discovery", desc: "Understanding your brand, goals, audience, and competitors." },
      { step: "02", title: "Wireframing", desc: "Low-fidelity sketches and structure before visual polish." },
      { step: "03", title: "UI Design", desc: "High-fidelity Figma screens with full color, type, and components." },
      { step: "04", title: "Handoff", desc: "Developer-ready files with specs, assets, and style guide." },
    ],
    features: [
      "Custom Figma wireframes & prototypes",
      "Mobile-first responsive layouts",
      "User-centered interaction design",
      "Accessibility & contrast compliance",
      "Brand-aligned color & typography systems",
      "Component library creation",
    ],
    faqs: [
      { q: "Do you design for mobile too?", a: "Yes — all designs are mobile-first and fully responsive across all screen sizes." },
      { q: "Will I get the Figma source file?", a: "Absolutely. You'll receive the complete editable Figma file with all components and assets." },
      { q: "How long does a web design project take?", a: "Typically 5–10 business days depending on scope and number of pages." },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2.5" />
        <path d="M8 21h8" /><path d="M12 17v4" />
        <path d="M6 7h3" /><path d="M6 10.5h6" /><rect x="13.5" y="6.5" width="5" height="5" rx="1" />
      </svg>
    ),
  },
  2: {
    title: "Web Development",
    tagline: "Fast, scalable websites built with clean, semantic code.",
    accentColor: "#7C3AED",
    category: "Development",
    pills: ["HTML/CSS", "JavaScript", "SEO", "Performance", "Cross-browser"],
    overview:
      "I build websites that are fast, accessible, and optimized for search engines. Every line of code is written with performance in mind — your site will load instantly and rank higher.",
    process: [
      { step: "01", title: "Planning", desc: "Tech stack selection, sitemap, and project scope definition." },
      { step: "02", title: "Development", desc: "Clean semantic HTML, CSS, and JavaScript implementation." },
      { step: "03", title: "Testing", desc: "Cross-browser, cross-device, and performance testing." },
      { step: "04", title: "Launch", desc: "Deployment, DNS setup, and post-launch monitoring." },
    ],
    features: [
      "Performance-optimized builds (90+ Lighthouse score)",
      "SEO-friendly semantic HTML/CSS",
      "Cross-browser & device tested",
      "Accessibility (WCAG) compliance",
      "Clean, maintainable codebase",
      "Git version control & documentation",
    ],
    faqs: [
      { q: "What technologies do you use?", a: "HTML5, CSS3, JavaScript (ES6+), React, and Next.js depending on project needs." },
      { q: "Do you handle hosting and deployment?", a: "Yes — I can deploy to Vercel, Netlify, or any hosting provider you prefer." },
      { q: "Will the site be SEO-friendly?", a: "Absolutely. Semantic markup, meta tags, og tags, sitemap, and schema are all included." },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  3: {
    title: "Content Writing",
    tagline: "SEO-optimized content that ranks and drives real engagement.",
    accentColor: GREEN,
    category: "Writing",
    pills: ["SEO", "Blogs", "Copywriting", "Product Copy", "Brand Voice"],
    overview:
      "I write content that speaks to your audience and pleases search engines. From keyword-driven blog posts to persuasive product descriptions, every word serves a purpose.",
    process: [
      { step: "01", title: "Research", desc: "Keyword research, competitor analysis, and topic mapping." },
      { step: "02", title: "Outline", desc: "Structured outline approved before writing begins." },
      { step: "03", title: "Writing", desc: "Engaging, on-brand copy delivered on time." },
      { step: "04", title: "Revisions", desc: "Unlimited revisions until you're 100% satisfied." },
    ],
    features: [
      "Keyword-driven blog posts & articles",
      "Persuasive product & landing page copy",
      "Brand voice & tone consistency",
      "Meta titles & descriptions included",
      "Plagiarism-free, AI-reviewed content",
      "Urdu/English bilingual writing available",
    ],
    faqs: [
      { q: "Do you write in Urdu too?", a: "Yes — I offer bilingual content in both English and Urdu for Pakistani market targeting." },
      { q: "How many revisions do I get?", a: "Unlimited revisions within the agreed scope until you're satisfied." },
      { q: "Can you match our existing brand voice?", a: "Absolutely. Share existing content samples and I'll match the tone perfectly." },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  4: {
    title: "Shopify",
    tagline: "Custom Shopify stores built to grow your D2C brand.",
    accentColor: "#059669",
    category: "eCommerce",
    pills: ["Liquid", "Dawn Theme", "Apps", "AJAX Cart", "Metafields"],
    overview:
      "I build and customize Shopify stores that look stunning and convert visitors into buyers. From Liquid theme development to app integrations, I handle every technical detail so you can focus on growing your brand.",
    process: [
      { step: "01", title: "Store Audit", desc: "Reviewing existing store or planning new architecture." },
      { step: "02", title: "Theme Development", desc: "Custom Liquid sections, blocks, and schema settings." },
      { step: "03", title: "Optimization", desc: "Speed, SEO, and conversion rate optimization." },
      { step: "04", title: "Launch & Support", desc: "Go-live support and post-launch bug fixes." },
    ],
    features: [
      "Liquid theme customization (Dawn, Debut, custom)",
      "Custom sections with schema settings",
      "AJAX cart & dynamic pricing",
      "Metafield & metaobject integration",
      "App integrations (Judge.me, Klaviyo, etc.)",
      "Mobile-first, performance-optimized",
    ],
    faqs: [
      { q: "Can you work on my existing Shopify theme?", a: "Yes — I can customize any existing theme or build custom sections from scratch." },
      { q: "Do you handle Shopify app integrations?", a: "Yes — including Judge.me reviews, Klaviyo email, WhatsApp buttons, and more." },
      { q: "What's your Shopify experience?", a: "3+ years of Liquid development for D2C brands including skincare and pharma clients in Pakistan." },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  5: {
    title: "WordPress",
    tagline: "Custom WordPress builds from themes to WooCommerce stores.",
    accentColor: "#0284C7",
    category: "CMS",
    pills: ["Elementor", "WooCommerce", "Speed", "Custom Theme", "Plugins"],
    overview:
      "I build fast, secure WordPress websites and WooCommerce stores tailored to your business needs. From custom theme development to plugin configuration and performance tuning.",
    process: [
      { step: "01", title: "Setup", desc: "Hosting, domain, WordPress installation and configuration." },
      { step: "02", title: "Design & Build", desc: "Custom theme or Elementor page builder implementation." },
      { step: "03", title: "WooCommerce", desc: "Product setup, payment gateway, shipping configuration." },
      { step: "04", title: "Speed & Launch", desc: "Caching, image optimization, CDN, and go-live." },
    ],
    features: [
      "Custom theme development",
      "WooCommerce setup & configuration",
      "Elementor Pro page builder",
      "Plugin setup & performance tuning",
      "Speed optimization (WP Rocket, Smush)",
      "Security hardening & backups",
    ],
    faqs: [
      { q: "Can you migrate my existing WordPress site?", a: "Yes — I handle full site migrations including database, files, and DNS transfer." },
      { q: "Will my site be fast?", a: "Yes — I implement caching, image optimization, lazy loading, and CDN for top speed scores." },
      { q: "Do you set up WooCommerce payments?", a: "Yes — including Stripe, PayPal, and local Pakistani payment gateways." },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  6: {
    title: "React Frontend",
    tagline: "Dynamic, component-based UIs that are smooth and production-ready.",
    accentColor: "#06B6D4",
    category: "Frontend",
    pills: ["React", "Next.js", "Hooks", "API Integration", "Tailwind"],
    overview:
      "I build modern React and Next.js frontends with clean component architecture, smooth animations, and seamless API integrations. Production-ready, fast, and scalable.",
    process: [
      { step: "01", title: "Architecture", desc: "Component structure, routing, and state management planning." },
      { step: "02", title: "Development", desc: "Reusable components, hooks, and API integration." },
      { step: "03", title: "Polish", desc: "Animations, responsive design, and performance optimization." },
      { step: "04", title: "Deployment", desc: "Vercel/Netlify deployment with CI/CD setup." },
    ],
    features: [
      "Reusable component architecture",
      "API integration & state management (Context/Redux)",
      "Next.js SSR & SSG optimization",
      "Tailwind CSS & custom styling",
      "Smooth animations (Framer Motion)",
      "TypeScript support available",
    ],
    faqs: [
      { q: "Do you use TypeScript?", a: "Yes — I can build with TypeScript for better type safety and maintainability." },
      { q: "Can you integrate third-party APIs?", a: "Absolutely — REST APIs, GraphQL, Firebase, Supabase, and more." },
      { q: "Do you handle deployment?", a: "Yes — Vercel, Netlify, or any platform with environment variables and CI/CD." },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <path d="M2 12c0 2.21 4.48 4 10 4s10-1.79 10-4" />
        <path d="M2 12c0-2.21 4.48-4 10-4s10 1.79 10 4" />
        <line x1="12" y1="8" x2="12" y2="16" />
      </svg>
    ),
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const service = servicesData[serviceId];

  if (!service)
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
        <h2 style={{ color: NAVY, fontSize: 24, fontWeight: 700 }}>Service not found</h2>
        <button
          onClick={() => navigate("/")}
          style={{ marginTop: 20, padding: "12px 28px", background: BLUE, color: "#fff", border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 600, fontSize: 14 }}
        >
          ← Back to Home
        </button>
      </div>
    );

  const accent = service.accentColor;

  const styles = {
    page: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: "#F8FAFC",
      minHeight: "100vh",
      color: NAVY,
    },

    // ── HERO ──
    hero: {
      background: NAVY,
      padding: "0 24px 64px",
      position: "relative",
      overflow: "hidden",
    },
    heroGlow: {
      position: "absolute",
      top: -120,
      right: -120,
      width: 500,
      height: 500,
      background: accent,
      borderRadius: "50%",
      opacity: 0.08,
      pointerEvents: "none",
    },
    heroGlow2: {
      position: "absolute",
      bottom: -80,
      left: -80,
      width: 300,
      height: 300,
      background: accent,
      borderRadius: "50%",
      opacity: 0.05,
      pointerEvents: "none",
    },
    heroInner: {
      maxWidth: 860,
      margin: "0 auto",
      paddingTop: 100,
      position: "relative",
      zIndex: 1,
    },
    backBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      color: "rgba(255,255,255,0.7)",
      borderRadius: 100,
      padding: "8px 16px",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      marginBottom: 40,
      transition: "all 0.2s",
      outline: "none",
    },
    categoryBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 14px",
      borderRadius: 100,
      background: `${accent}20`,
      border: `1px solid ${accent}40`,
      color: accent,
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginBottom: 20,
    },
    iconDot: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: accent,
    },
    heroTitle: {
      fontSize: "clamp(36px, 6vw, 60px)",
      fontWeight: 800,
      color: "#fff",
      letterSpacing: -2,
      lineHeight: 1.05,
      marginBottom: 16,
    },
    heroTagline: {
      fontSize: 17,
      color: "rgba(255,255,255,0.55)",
      lineHeight: 1.7,
      maxWidth: 520,
      marginBottom: 32,
      fontWeight: 400,
    },
    pillsRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 0,
    },
    pill: {
      padding: "6px 14px",
      borderRadius: 100,
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "rgba(255,255,255,0.6)",
      fontSize: 12,
      fontWeight: 500,
    },

    // ── BODY ──
    body: {
      maxWidth: 860,
      margin: "0 auto",
      padding: "56px 24px 80px",
    },

    sectionLabel: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: accent,
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 800,
      color: NAVY,
      letterSpacing: -0.5,
      marginBottom: 20,
    },

    // Overview card
    overviewCard: {
      background: "#fff",
      border: "1px solid #E2E8F0",
      borderRadius: 20,
      padding: "32px 36px",
      marginBottom: 48,
      borderLeft: `4px solid ${accent}`,
    },
    overviewText: {
      fontSize: 15.5,
      color: "#475569",
      lineHeight: 1.85,
      margin: 0,
    },

    // Process
    processGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: 14,
      marginBottom: 48,
    },
    processCard: {
      background: "#fff",
      border: "1px solid #E2E8F0",
      borderRadius: 18,
      padding: "24px 20px",
      transition: "box-shadow 0.2s",
      position: "relative",
      overflow: "hidden",
    },
    processNum: {
      fontSize: 11,
      fontWeight: 800,
      color: accent,
      letterSpacing: "0.1em",
      marginBottom: 14,
      fontVariantNumeric: "tabular-nums",
    },
    processTitle: {
      fontSize: 15,
      fontWeight: 700,
      color: NAVY,
      marginBottom: 8,
    },
    processDesc: {
      fontSize: 13,
      color: "#64748B",
      lineHeight: 1.65,
    },
    processAccentBar: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: accent,
      borderRadius: "18px 18px 0 0",
    },

    // Features
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 10,
      marginBottom: 48,
    },
    featureItem: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "#fff",
      border: "1px solid #E2E8F0",
      borderRadius: 12,
      padding: "14px 18px",
    },
    checkCircle: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: `${accent}15`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    featureText: {
      fontSize: 13.5,
      color: "#334155",
      fontWeight: 500,
    },

    // FAQ
    faqList: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginBottom: 56,
    },
    faqItem: {
      background: "#fff",
      border: "1px solid #E2E8F0",
      borderRadius: 14,
      overflow: "hidden",
    },
    faqBtn: {
      width: "100%",
      textAlign: "left",
      padding: "18px 22px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      fontSize: 14.5,
      fontWeight: 600,
      color: NAVY,
      outline: "none",
    },
    faqAnswer: {
      padding: "0 22px 18px",
      fontSize: 14,
      color: "#64748B",
      lineHeight: 1.75,
    },

    // CTA
    cta: {
      background: NAVY,
      borderRadius: 24,
      padding: "48px 40px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },
    ctaGlow: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      height: 200,
      background: accent,
      borderRadius: "50%",
      opacity: 0.12,
      filter: "blur(60px)",
      pointerEvents: "none",
    },
    ctaTitle: {
      fontSize: 26,
      fontWeight: 800,
      color: "#fff",
      marginBottom: 10,
      position: "relative",
      zIndex: 1,
    },
    ctaSubtitle: {
      fontSize: 15,
      color: "rgba(255,255,255,0.5)",
      marginBottom: 32,
      position: "relative",
      zIndex: 1,
    },
    ctaBtns: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      flexWrap: "wrap",
      position: "relative",
      zIndex: 1,
    },
    ctaPrimaryBtn: {
      padding: "13px 30px",
      background: accent,
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
    },
    ctaSecondaryBtn: {
      padding: "13px 24px",
      background: "transparent",
      color: "rgba(255,255,255,0.65)",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 500,
      cursor: "pointer",
    },
  };

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <div style={styles.page}>
      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.heroGlow} />
        <div style={styles.heroGlow2} />
        <div style={styles.heroInner}>
          <button style={styles.backBtn} onClick={() => navigate(-1)}>
            ← Back
          </button>

          <div style={styles.categoryBadge}>
            <div style={styles.iconDot} />
            {service.category}
          </div>

          <h1 style={styles.heroTitle}>{service.title}</h1>
          <p style={styles.heroTagline}>{service.tagline}</p>

          <div style={styles.pillsRow}>
            {service.pills.map((pill, i) => (
              <span key={i} style={styles.pill}>{pill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={styles.body}>

        {/* Overview */}
        <div style={{ marginBottom: 48 }}>
          <p style={styles.sectionLabel}>About this service</p>
          <div style={styles.overviewCard}>
            <p style={styles.overviewText}>{service.overview}</p>
          </div>
        </div>

        {/* Process */}
        <div style={{ marginBottom: 48 }}>
          <p style={styles.sectionLabel}>How it works</p>
          <h2 style={styles.sectionTitle}>My Process</h2>
          <div style={styles.processGrid}>
            {service.process.map((p, i) => (
              <div key={i} style={styles.processCard}>
                <div style={styles.processAccentBar} />
                <div style={styles.processNum}>{p.step}</div>
                <h3 style={styles.processTitle}>{p.title}</h3>
                <p style={styles.processDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: 48 }}>
          <p style={styles.sectionLabel}>Deliverables</p>
          <h2 style={styles.sectionTitle}>What's Included</h2>
          <div style={styles.featuresGrid}>
            {service.features.map((f, i) => (
              <div key={i} style={styles.featureItem}>
                <div style={styles.checkCircle}><CheckIcon /></div>
                <span style={styles.featureText}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div style={{ marginBottom: 56 }}>
          <p style={styles.sectionLabel}>Got questions?</p>
          <h2 style={styles.sectionTitle}>FAQs</h2>
          <div style={styles.faqList}>
            {service.faqs.map((faq, i) => (
              <div key={i} style={{
                ...styles.faqItem,
                border: `1px solid ${openFaq === i ? accent + "40" : "#E2E8F0"}`,
              }}>
                <button
                  style={{
                    ...styles.faqBtn,
                    background: openFaq === i ? `${accent}08` : "transparent",
                  }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: openFaq === i ? accent : "#F1F5F9",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontSize: 18, lineHeight: 1,
                    color: openFaq === i ? "#fff" : "#94A3B8",
                    transition: "all 0.2s",
                  }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div style={styles.faqAnswer}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={styles.cta}>
          <div style={styles.ctaGlow} />
          <h2 style={styles.ctaTitle}>Ready to get started?</h2>
          <p style={styles.ctaSubtitle}>
            Let's build something great together.
          </p>
          <div style={styles.ctaBtns}>
            <button style={styles.ctaPrimaryBtn} onClick={() => navigate("/#contact")}>
              Get In Touch →
            </button>
            <button style={styles.ctaSecondaryBtn} onClick={() => navigate(-1)}>
              ← View All Services
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}