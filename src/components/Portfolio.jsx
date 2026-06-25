import { useState, useEffect } from "react";
import { GitBranch as Github, ExternalLink, Lock } from "lucide-react";

// ─── Theme tokens (white/light only) ─────────────────────────────────────────
const BLUE  = "#004a6a";
const GREEN = "#338c3a";

const T = {
  sectionBg:     "#ffffff",
  cardBg:        "#ffffff",
  cardBorder:    "#e2e8f0",
  placeholderBg: "#f1f5f9",
  titleColor:    "#0f2a38",
  descColor:     "#5a6a7a",
  chipBg:        "#eef5f8",
  chipBorder:    `${BLUE}22`,
  chipText:      BLUE,
  divider:       "#f1f5f9",
  badgeBg:       "#eaf4eb",
  badgeBorder:   "#b6ddb8",
  filterBorder:  "#cbd5e1",
  filterText:    BLUE,
  mutedText:     "#94a3b8",
  headingColor:  "#0f2a38",
  subColor:      "#5a6a7a",
  shadowIdle:    "0 4px 16px rgba(15,42,56,0.07)",
  shadowHover:   "0 20px 44px rgba(0,74,106,0.14)",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const categories = ["All", "Shopify", "MERN Stack", "WordPress", "UI/UX Design"];

const categoryColor = {
  Shopify:        BLUE,
  "MERN Stack":   GREEN,
  WordPress:      BLUE,
  "UI/UX Design": GREEN,
};

const projects = [
  {
    id: 1,
    title: "Skincare E-Commerce Store",
    category: "Shopify",
    description:
      "Custom Shopify theme for a skincare brand — concern-based product selector, sale popups with countdown timers, and a fully schema-driven Theme Customizer.",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
    tags: ["Liquid", "CSS", "JS", "Theme Customizer"],
    liveUrl: "https://www.charisma.com.pk/",
    githubUrl: null,
  },
  {
    id: 2,
    title: "Property Listings Web App",
    category: "MERN Stack",
    description:
      "Full-stack listings platform with filterable search, saved favorites, and a dashboard for agents to manage property data in real time.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/repo",
  },
  {
    id: 3,
    title: "Landscaping Company Website",
    category: "WordPress",
    description:
      "Elementor-built site with a custom revision workflow — logo updates, content edits, and an optimized media pipeline for fast load times.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    tags: ["WordPress", "Elementor", "ImageMagick"],
    liveUrl: "https://example.com",
    githubUrl: null,
  },
  {
    id: 4,
    title: "Skin Concern Selector UI",
    category: "UI/UX Design",
    description:
      "Tabbed product-discovery component with before/after sliders and pill navigation, designed to guide shoppers to the right product fast.",
    image: "https://tse1.mm.bing.net/th/id/OIP.-7S_kDFxOFi1i_cwi6KAXAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["Figma", "Liquid", "CSS Variables"],
    liveUrl: "https://example.com",
    githubUrl: null,
  },
  {
    id: 5,
    title: "Wholesale Price Comparison Tool",
    category: "MERN Stack",
    description:
      "Automated scraper that compares product pricing across two supplier sites and exports a clean, ready-to-share Excel report.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["Python", "React", "Excel Export"],
    liveUrl: null,
    githubUrl: "https://github.com/your-username/repo",
  },
  {
    id: 6,
    title: "Freelancer Portfolio Site",
    category: "UI/UX Design",
    description:
      "Personal portfolio with a typewriter hero, glowing avatar ring, and animated skill chips — built fast and deployed on Netlify.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/repo",
  },
];

// ─── DotIcon ──────────────────────────────────────────────────────────────────
const DotIcon = ({ color }) => (
  <svg width="8" height="8" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="4" fill={color} />
  </svg>
);

// ─── PlaceholderImage (fallback agar URL load na ho) ─────────────────────────
const categoryIcons = {
  Shopify:        "🛍️",
  "MERN Stack":   "⚙️",
  WordPress:      "🌐",
  "UI/UX Design": "🎨",
};

const placeholderGradients = [
  "linear-gradient(135deg,#004a6a18 0%,#338c3a18 100%)",
  "linear-gradient(135deg,#338c3a18 0%,#004a6a18 100%)",
  "linear-gradient(135deg,#004a6a22 0%,#0099c622 100%)",
  "linear-gradient(135deg,#40ae4918 0%,#004a6a18 100%)",
  "linear-gradient(135deg,#0099c618 0%,#338c3a18 100%)",
  "linear-gradient(135deg,#004a6a18 0%,#40ae4918 100%)",
];

function PlaceholderImage({ index, category }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: placeholderGradients[index % placeholderGradients.length],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <span style={{ fontSize: 38 }}>{categoryIcons[category] || "💻"}</span>
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: categoryColor[category] || BLUE,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          opacity: 0.75,
        }}
      >
        {category}
      </span>
    </div>
  );
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 90);
    return () => clearTimeout(t);
  }, [index]);

  const tagColor = categoryColor[project.category] || BLUE;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? T.shadowHover : T.shadowIdle,
        background: T.cardBg,
        border: `1px solid ${T.cardBorder}`,
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 200,
          overflow: "hidden",
          background: T.placeholderBg,
          flexShrink: 0,
        }}
      >
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        ) : (
          <PlaceholderImage index={index} category={project.category} />
        )}

        {/* Category pill */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: tagColor,
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.04em",
            padding: "5px 13px",
            borderRadius: 100,
            boxShadow: `0 4px 12px ${tagColor}55`,
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "20px 22px 22px",
        }}
      >
        <h3
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: T.titleColor,
            letterSpacing: -0.3,
            lineHeight: 1.3,
            marginBottom: 8,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: 13.5,
            color: T.descColor,
            lineHeight: 1.75,
            marginBottom: 16,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
          {project.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: T.chipText,
                background: T.chipBg,
                border: `1px solid ${T.chipBorder}`,
                borderRadius: 100,
                padding: "4px 11px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
            paddingTop: 14,
            borderTop: `1px solid ${T.divider}`,
          }}
        >
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
                background: GREEN,
                borderRadius: 10,
                padding: "9px 16px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = BLUE)}
              onMouseLeave={(e) => (e.currentTarget.style.background = GREEN)}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          ) : (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                color: T.mutedText,
                padding: "9px 0",
              }}
            >
              <Lock size={13} />
              Client Project
            </span>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 700,
                color: BLUE,
                background: "transparent",
                border: `1.5px solid ${BLUE}`,
                borderRadius: 10,
                padding: "8px 14px",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = BLUE;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = BLUE;
              }}
            >
              <Github size={14} />
              Code
            </a>
          ) : (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                color: T.mutedText,
                padding: "8px 0",
              }}
            >
              <Lock size={13} />
              Private Repo
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Portfolio (main export) ──────────────────────────────────────────────────
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section style={{ width: "100%", background: T.sectionBg, padding: "80px 16px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* Section header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: T.badgeBg,
              border: `1px solid ${T.badgeBorder}`,
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 18,
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
              Portfolio
            </span>
            <DotIcon color={GREEN} />
          </div>

          <h2
            style={{
              fontSize: "clamp(28px,5vw,44px)",
              fontWeight: 800,
              color: "#000",
              letterSpacing: -1,
              marginBottom: 12,
            }}
          >
            SELECTED<span style={{ color: BLUE }}>  WORK</span>
          </h2>

          <p style={{ fontSize: 15, color: T.subColor, maxWidth: 520, lineHeight: 1.8 }}>
            A mix of Shopify stores, full-stack web apps, and WordPress sites — built
            for real clients with real deadlines.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            marginBottom: 48,
          }}
        >
          {categories.map((cat) => {
            const active = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: active ? "#fff" : T.filterText,
                  background: active ? BLUE : "transparent",
                  border: `1.5px solid ${active ? BLUE : T.filterBorder}`,
                  borderRadius: 100,
                  padding: "9px 20px",
                  cursor: "pointer",
                  outline: "none",
                  transition: "all 0.25s",
                  boxShadow: active ? `0 8px 20px ${BLUE}35` : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: T.mutedText, fontSize: 14, marginTop: 32 }}>
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}