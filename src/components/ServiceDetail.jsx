import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
const BLUE = "#004a6a";
const GREEN = "#338c3a";

const servicesData = {
  1: {
    title: "Web Design",
    tagline: "Beautiful interfaces that convert visitors into customers.",
    heroColor: BLUE,
    pills: ["Figma", "UI/UX", "Responsive", "Wireframing", "Prototyping"],
    overview: "I design modern, pixel-perfect web interfaces with a strong focus on user experience and conversion. Every design decision is intentional — from typography to color to spacing — crafted to make your brand unforgettable.",
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
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2.5"/><path d="M8 21h8"/><path d="M12 17v4"/>
        <path d="M6 7h3"/><path d="M6 10.5h6"/><rect x="13.5" y="6.5" width="5" height="5" rx="1"/>
      </svg>
    ),
  },
  2: {
    title: "Web Development",
    tagline: "Fast, scalable websites built with clean, semantic code.",
    heroColor: "#0d3d57",
    pills: ["HTML/CSS", "JavaScript", "SEO", "Performance", "Cross-browser"],
    overview: "I build websites that are fast, accessible, and optimized for search engines. Every line of code is written with performance in mind — your site will load instantly and rank higher.",
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
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  3: {
    title: "Content Writing",
    tagline: "SEO-optimized content that ranks and drives real engagement.",
    heroColor: "#1a5c38",
    pills: ["SEO", "Blogs", "Copywriting", "Product Copy", "Brand Voice"],
    overview: "I write content that speaks to your audience and pleases search engines. From keyword-driven blog posts to persuasive product descriptions, every word serves a purpose.",
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
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
      </svg>
    ),
  },
  4: {
    title: "Shopify",
    tagline: "Custom Shopify stores built to grow your D2C brand.",
    heroColor: "#004a6a",
    pills: ["Liquid", "Dawn Theme", "Apps", "AJAX Cart", "Metafields"],
    overview: "I build and customize Shopify stores that look stunning and convert visitors into buyers. From Liquid theme development to app integrations, I handle every technical detail so you can focus on growing your brand.",
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
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
  },
  5: {
    title: "WordPress",
    tagline: "Custom WordPress builds from themes to WooCommerce stores.",
    heroColor: "#21759b",
    pills: ["Elementor", "WooCommerce", "Speed", "Custom Theme", "Plugins"],
    overview: "I build fast, secure WordPress websites and WooCommerce stores tailored to your business needs. From custom theme development to plugin configuration and performance tuning.",
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
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  6: {
    title: "React Frontend",
    tagline: "Dynamic, component-based UIs that are smooth and production-ready.",
    heroColor: "#0d3d57",
    pills: ["React", "Next.js", "Hooks", "API Integration", "Tailwind"],
    overview: "I build modern React and Next.js frontends with clean component architecture, smooth animations, and seamless API integrations. Production-ready, fast, and scalable.",
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
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4"/>
        <path d="M2 12c0 2.21 4.48 4 10 4s10-1.79 10-4"/>
        <path d="M2 12c0-2.21 4.48-4 10-4s10 1.79 10 4"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
      </svg>
    ),
  },
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const service = servicesData[serviceId];

  if (!service) return (
    <div style={{ textAlign: "center", padding: 80 }}>
      <h2>Service not found</h2>
      <button onClick={() => navigate("/")} style={{ marginTop: 20, padding: "12px 28px", background: BLUE, color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", fontWeight: 700 }}>
        ← Back to Home
      </button>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#fff", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div style={{ background: service.heroColor, padding: "70px 20px 80px" }}>
        <div style={{ maxWidth: 900, margin: "70px auto 20px auto" }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff", borderRadius: 10, padding: "9px 18px",
              fontSize: 13.5, fontWeight: 600, cursor: "pointer", marginBottom: 36,
            }}
          >
            ← Back
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 24 }}>
            <div style={{
              width: 72, height: 72, borderRadius: 18,
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              {service.icon}
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>
                Service
              </p>
              <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, color: "#fff", letterSpacing: -1.5, lineHeight: 1.05 }}>
                {service.title}
              </h1>
            </div>
          </div>

          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, maxWidth: 600, marginBottom: 28 }}>
            {service.tagline}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {service.pills.map((pill, i) => (
              <span key={i} style={{
                padding: "6px 16px", borderRadius: 100,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.22)",
                color: "#fff", fontSize: 12.5, fontWeight: 600,
              }}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 20px" }}>

        {/* Overview */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 14, letterSpacing: -0.5 }}>Overview</h2>
          <p style={{ fontSize: 15.5, color: "#5a6a7a", lineHeight: 1.85 }}>{service.overview}</p>
        </section>

        {/* Process */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 28, letterSpacing: -0.5 }}>My Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 18 }}>
            {service.process.map((p, i) => (
              <div key={i} style={{
                background: "#f8fafc", borderRadius: 18, padding: "24px 20px",
                border: "1px solid #e2e8f0",
              }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: `${BLUE}22`, letterSpacing: -1, marginBottom: 10 }}>{p.step}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 22, letterSpacing: -0.5 }}>What's Included</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {service.features.map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "#f0f9f1", border: "1px solid #c8e6ca",
                borderRadius: 12, padding: "14px 18px",
              }}>
                <CheckIcon />
                <span style={{ fontSize: 14, color: "#2d4a30", fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 22, letterSpacing: -0.5 }}>FAQs</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {service.faqs.map((faq, i) => (
              <div key={i} style={{
                border: `1.5px solid ${openFaq === i ? BLUE : "#e2e8f0"}`,
                borderRadius: 14, overflow: "hidden",
                transition: "border-color 0.2s",
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", textAlign: "left", padding: "18px 22px",
                    background: openFaq === i ? "#f0f6fa" : "#fff",
                    border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontSize: 15, fontWeight: 700, color: "#0f172a",
                    transition: "background 0.2s",
                  }}
                >
                  {faq.q}
                  <span style={{
                    fontSize: 20, color: BLUE, fontWeight: 400,
                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.2s", flexShrink: 0, marginLeft: 12,
                  }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 22px 18px", fontSize: 14.5, color: "#5a6a7a", lineHeight: 1.75 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{
          background: `linear-gradient(135deg, ${BLUE}, ${GREEN})`,
          borderRadius: 22, padding: "44px 40px", textAlign: "center",
        }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 10 }}>
            Interested in {service.title}?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.78)", marginBottom: 28 }}>
            Let's discuss your project and get started today.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/#contact")}
              style={{
                padding: "13px 32px", background: "#fff", color: BLUE,
                border: "none", borderRadius: 12, fontSize: 14, fontWeight: 800, cursor: "pointer",
              }}
            >
              Get In Touch →
            </button>
            <button
              onClick={() => navigate(-1)}
              style={{
                padding: "13px 28px", background: "transparent", color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: 12,
                fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}
            >
              ← Back to Services
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}