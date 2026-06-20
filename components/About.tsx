const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

const CARD: React.CSSProperties = {
  background: "rgba(20,24,27,0.6)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "16px",
  padding: "22px",
};

const SKILL_GROUPS = [
  {
    label: "languages",
    color: "10,185,129",
    skills: ["TypeScript", "Python", "JavaScript", "Java", "C/C++", "HTML/CSS"],
  },
  {
    label: "frameworks",
    color: "139,92,246",
    skills: ["React", "Next.js", "Tailwind", "ReCharts", "scikit-learn", "NumPy", "Scapy"],
  },
  {
    label: "tools & db",
    color: "56,189,248",
    skills: ["PostgreSQL", "Neon", "Supabase", "Git", "Vercel", "VS Code"],
  },
  {
    label: "certifications",
    color: "251,191,36",
    skills: ["CompTIA A+", "AWS Cloud Practitioner"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ position: "relative", zIndex: 2, maxWidth: "1140px", margin: "0 auto", padding: "130px 40px 90px" }}
    >
      <div className="reveal" style={{ ...MONO, fontSize: "13px", color: "#10b981", letterSpacing: "2px", marginBottom: "26px" }}>
        01 / ABOUT
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "64px", alignItems: "start" }}>
        {/* Bio */}
        <div className="reveal">
          <h2 style={{
            fontSize: "clamp(30px, 4vw, 46px)", lineHeight: "1.12", fontWeight: 600,
            letterSpacing: "-1px", margin: "0 0 26px", color: "#f3f5f6",
          }}>
            I build across{" "}
            <span style={{ color: "#10b981" }}>full-stack</span> and{" "}
            <span style={{ color: "#38bdf8" }}>data engineering</span>.
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#aab0b6", margin: "0 0 18px", maxWidth: "540px" }}>
            I recently graduated from UC Santa Cruz with a degree in Computer Science. I enjoy working where thoughtful engineering meets real product value — using data to deliver meaningful insights, and shipping interfaces that feel great to use.
          </p>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#aab0b6", margin: 0, maxWidth: "540px" }}>
            Right now I&apos;m a Full-Stack Developer at Eclypse Media Group, and I&apos;m open to new-grad software roles where I can build at scale.
          </p>
        </div>

        {/* Education card */}
        <div
          className="reveal tilt"
          style={{
            background: "linear-gradient(160deg, rgba(20,24,27,0.9), rgba(12,15,17,0.8))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "18px",
            padding: "30px",
            willChange: "transform",
            transition: "transform .15s ease-out",
          }}
        >
          <div style={{ ...MONO, fontSize: "12px", color: "#6f757b", letterSpacing: "1px", marginBottom: "20px" }}>~/education</div>
          <div style={{ fontSize: "21px", fontWeight: 600, color: "#f3f5f6", marginBottom: "6px" }}>UC Santa Cruz</div>
          <div style={{ fontSize: "15px", color: "#aab0b6", marginBottom: "22px" }}>B.A. Computer Science</div>

          <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
            <div style={{ flex: 1, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.28)", borderRadius: "10px", padding: "12px 14px" }}>
              <div style={{ ...MONO, fontSize: "22px", fontWeight: 700, color: "#10b981" }}>3.82</div>
              <div style={{ ...MONO, fontSize: "11px", color: "#8a9197", marginTop: "2px" }}>GPA</div>
            </div>
            <div style={{ flex: 1, background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.28)", borderRadius: "10px", padding: "12px 14px" }}>
              <div style={{ ...MONO, fontSize: "22px", fontWeight: 700, color: "#a78bfa" }}>&apos;26</div>
              <div style={{ ...MONO, fontSize: "11px", color: "#8a9197", marginTop: "2px" }}>CLASS OF</div>
            </div>
          </div>

          <div style={{ ...MONO, fontSize: "12px", color: "#6f757b", letterSpacing: "1px", marginBottom: "12px" }}>coursework</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
            {["Machine Learning", "Artificial Intelligence", "Computer Security", "Advanced Networks", "Systems Design"].map(c => (
              <span key={c} style={{ ...MONO, fontSize: "11px", color: "#c2c7cc", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "5px 10px", borderRadius: "6px" }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="reveal" style={{ marginTop: "80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px" }}>
          {SKILL_GROUPS.map(({ label, color, skills }) => (
            <div key={label} style={CARD}>
              <div style={{ ...MONO, fontSize: "12px", color: `rgb(${color})`, letterSpacing: "1px", marginBottom: "16px" }}>{label}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills.map(s => (
                  <span key={s} className="sk" style={{ "--c": color } as React.CSSProperties}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
