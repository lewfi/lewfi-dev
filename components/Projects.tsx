const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

const PROJECTS = [
  {
    name: "Job Tracker",
    desc: "A full-stack job application tracker with a FastAPI backend, React dashboard, and Neon-hosted PostgreSQL database — deployed with multi-user JWT authentication, bcrypt password hashing, and an append-only status history log powering four analytics endpoints.",
    tags: ["Python", "FastAPI", "Neon", "SQLAlchemy", "Docker", "JWT"],
    link: "https://github.com/lewfi/job-tracker",
    linkLabel: "View repo",
    demo: "https://job-tracker-indol-eight.vercel.app/",
    demoLabel: "Live demo",
  },
  {
    name: "ChariWork",
    desc: "An automated charity donation platform. As a frontend developer I built a dynamic account-settings experience and wired live donation data into the dashboard.",
    tags: ["TypeScript", "React", "Neon", "ReCharts"],
    link: "https://chari-work-115.vercel.app/",
    linkLabel: "View site",
    demo: null,
    demoLabel: null,
  },
  {
    name: "Self-Hosted Photo Server",
    desc: "A self-hosted photo library built with FastAPI, replacing cloud storage — client-side SHA-256 hashing with automatic retry, EXIF-based orientation correction, RAW & HEIC support, and full album management, with all remote access routed through a Tailscale VPN mesh instead of exposed ports.",
    tags: ["Python", "FastAPI", "Pillow"],
    link: "https://github.com/lewfi/photoserver",
    linkLabel: "View repo",
    demo: null,
    demoLabel: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ position: "relative", background: "#f4f1e8", color: "#14161a", padding: "110px clamp(20px,6vw,64px)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ ...MONO, fontSize: "13px", letterSpacing: "2px", color: "#8a8362", textTransform: "uppercase", marginBottom: "44px" }}>
          02 / Projects
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {PROJECTS.map(proj => (
            <div
              key={proj.name}
              className="reveal proj-card"
              style={{
                border: "1px solid rgba(20,22,26,0.14)", borderRadius: "20px",
                padding: "clamp(28px,4vw,44px)", background: "#fbfaf5",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
                <h3 style={{ margin: 0, fontSize: "clamp(26px,3.6vw,40px)", fontWeight: 700, letterSpacing: "-0.5px" }}>
                  {proj.name}
                </h3>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-hover"
                    style={{ ...MONO, fontSize: "13px", color: "#14161a" }}
                  >
                    {proj.linkLabel} →
                  </a>
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-hover"
                      style={{ ...MONO, fontSize: "13px", color: "#8a8362" }}
                    >
                      {proj.demoLabel} →
                    </a>
                  )}
                </div>
              </div>

              <p style={{ margin: "18px 0 24px", fontSize: "16px", lineHeight: "1.6", color: "#4a4740", maxWidth: "640px" }}>
                {proj.desc}
              </p>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {proj.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      ...MONO, fontSize: "12px", padding: "6px 12px",
                      border: "1px solid rgba(20,22,26,0.18)", borderRadius: "999px", color: "#6b675c",
                    }}
                  >
                    {tag}
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
