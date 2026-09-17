const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

const SKILLS = [
  { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "Swift", "SQL"] },
  { category: "Frameworks", items: ["FastAPI", "Next.js", "React", "SwiftUI", "Tailwind CSS"] },
  { category: "Data & Infra", items: ["PostgreSQL", "Supabase", "SQLite", "Docker", "Vercel", "SQLAlchemy"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ position: "relative", background: "#14161a", padding: "110px clamp(20px,6vw,64px)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ ...MONO, fontSize: "13px", letterSpacing: "2px", color: "#d4ff3d", textTransform: "uppercase", marginBottom: "44px" }}>
          03 / Stack
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {SKILLS.map(group => (
            <div
              key={group.category}
              className="reveal"
              style={{
                display: "grid", gridTemplateColumns: "180px 1fr", gap: "32px",
                borderBottom: "1px solid rgba(255,255,255,0.09)", paddingBottom: "28px",
              }}
            >
              <div style={{ ...MONO, fontSize: "13px", color: "#6f757b", paddingTop: "6px" }}>{group.category}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 22px" }}>
                {group.items.map(item => (
                  <span key={item} style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 500, color: "#f5f3ec" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
