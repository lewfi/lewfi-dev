const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

const EXPERIENCES = [
  {
    period: "May — July 2026",
    title: "Full-Stack Developer",
    org: "Eclypse Media Group",
    location: "Pacifica, CA",
    bullets: [
      "Built a 5-page responsive portfolio site with React, Next.js, Tailwind & TypeScript, translating a concept design into production",
      "Developed a reusable component library — category filtering, hover-triggered video previews, and Framer Motion animations",
      "Implemented responsive nav, form validation & SEO; laid groundwork for AWS deployment + SES-powered contact backend",
    ],
  },
  {
    period: "Mar — Jun 2026",
    title: "Course Reader",
    org: "Baskin Engineering, UCSC",
    location: "Intro to Computer Networks",
    bullets: [
      "Supported course instruction — graded assignments, gave timely feedback, and reinforced students' understanding of the material",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ position: "relative", zIndex: 2, maxWidth: "1140px", margin: "0 auto", padding: "90px 40px" }}
    >
      <div className="reveal" style={{ ...MONO, fontSize: "13px", color: "#38bdf8", letterSpacing: "2px", marginBottom: "38px" }}>
        03 / EXPERIENCE
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {EXPERIENCES.map((exp, i) => (
          <div
            key={i}
            className="reveal exprow"
            style={{
              display: "grid", gridTemplateColumns: "200px 1fr", gap: "40px",
              padding: "30px 22px", margin: "0 -22px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              transition: "background .2s",
            }}
          >
            <div style={{ ...MONO, fontSize: "13px", color: "#6f757b", paddingTop: "4px" }}>{exp.period}</div>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "23px", fontWeight: 600, color: "#f3f5f6", margin: 0 }}>{exp.title}</h3>
                <span style={{ fontSize: "15px", color: "#38bdf8" }}>{exp.org}</span>
                <span style={{ ...MONO, fontSize: "13px", color: "#6f757b" }}>· {exp.location}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
                {exp.bullets.map(b => (
                  <li key={b} style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#aab0b6", lineHeight: "1.55" }}>
                    <span style={{ color: "#38bdf8", flexShrink: 0 }}>▹</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "0 -22px" }} />
      </div>
    </section>
  );
}
