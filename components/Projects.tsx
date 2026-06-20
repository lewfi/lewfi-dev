import Image from "next/image";

const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ position: "relative", zIndex: 2, maxWidth: "1140px", margin: "0 auto", padding: "90px 40px" }}
    >
      <div className="reveal" style={{ ...MONO, fontSize: "13px", color: "#8b5cf6", letterSpacing: "2px", marginBottom: "44px" }}>
        02 / PROJECTS
      </div>

      <a
        className="reveal tilt"
        href="https://chari-work-115.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block", textDecoration: "none",
          background: "linear-gradient(155deg, rgba(22,26,29,0.92), rgba(12,15,17,0.85))",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: "22px", overflow: "hidden",
          willChange: "transform", transition: "transform .18s ease-out",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr" }}>
          {/* Details */}
          <div style={{ padding: "44px 46px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <span style={{
                width: "38px", height: "38px", borderRadius: "10px",
                background: "rgba(16,185,129,0.16)", border: "1px solid rgba(16,185,129,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#10b981", fontWeight: 700, ...MONO,
              }}>C</span>
              <span style={{ ...MONO, fontSize: "12px", color: "#6f757b" }}>Sep — Dec 2025 · team of 4 · Agile/Scrum</span>
            </div>

            <h3 style={{ fontSize: "34px", fontWeight: 600, letterSpacing: "-0.8px", color: "#f3f5f6", margin: "0 0 12px" }}>ChariWork</h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#aab0b6", margin: "0 0 24px", maxWidth: "440px" }}>
              An automated charity donation platform. As a frontend developer I built a dynamic account-settings experience and wired live donation data into the dashboard.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "11px" }}>
              {[
                "Dynamic account settings — update info, manage username/email, account deletion",
                "Live data integration with ReCharts as users donate, improving UX & scalability",
                "Collaborated in a 4-person Scrum team end-to-end",
              ].map(item => (
                <li key={item} style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#c2c7cc", lineHeight: "1.5" }}>
                  <span style={{ color: "#10b981", flexShrink: 0 }}>▹</span>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "26px" }}>
              {[["TypeScript","16,185,129"],["React","139,92,246"],["Neon","56,189,248"],["ReCharts","139,92,246"]].map(([s,c]) => (
                <span key={s} className="sk" style={{ "--c": c } as React.CSSProperties}>{s}</span>
              ))}
            </div>

            <span className="mag" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              ...MONO, fontSize: "13px", fontWeight: 600,
              color: "#04140e", background: "#10b981",
              padding: "12px 20px", borderRadius: "9px", willChange: "transform",
            }}>
              visit live site →
            </span>
          </div>

          {/* Screenshot */}
          <div style={{
            position: "relative",
            background: "radial-gradient(120% 100% at 80% 0%, rgba(16,185,129,0.18), transparent 60%)",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "30px", minHeight: "320px",
          }}>
            <div style={{ width: "100%", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Image
                src="https://api.microlink.io/?url=https://chari-work-115.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
                alt="ChariWork"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
