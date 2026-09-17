const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

const GRID_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n2)' opacity='0.05'/%3E%3C/svg%3E\"), " +
  "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 120px), " +
  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 120px)";

const RESUME_HREF = "https://drive.google.com/file/d/1MTlDd8UzfAGbiaHqs3UYEYrMxdH9Nyqo/view?usp=sharing";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ position: "relative", background: "#14161a", padding: "140px clamp(20px,6vw,64px) 90px", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: GRID_TEXTURE }} />

      <div className="reveal" style={{ position: "relative", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ ...MONO, fontSize: "13px", letterSpacing: "2px", color: "#d4ff3d", textTransform: "uppercase", marginBottom: "28px" }}>
          04 / Contact
        </div>
        <h2 style={{
          margin: 0, fontSize: "clamp(40px,7vw,84px)", fontWeight: 700,
          letterSpacing: "-1.5px", lineHeight: "1.05", color: "#f5f3ec",
        }}>
          Let&apos;s build<br />something.
        </h2>
        <div style={{ display: "flex", gap: "18px", justifyContent: "center", alignItems: "center", marginTop: "48px", flexWrap: "wrap" }}>
          <a
            href="mailto:benjaminlien17@gmail.com"
            className="pill-btn"
            style={{
              background: "#d4ff3d", color: "#14161a", fontSize: "16px", fontWeight: 600,
              padding: "16px 32px", borderRadius: "999px",
            }}
          >
            benjaminlien17@gmail.com
          </a>
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-hover"
            style={{ ...MONO, fontSize: "14px", color: "#9ca2a8" }}
          >
            View résumé →
          </a>
        </div>
      </div>

      <div style={{
        position: "relative", marginTop: "110px", paddingTop: "24px",
        borderTop: "1px solid rgba(255,255,255,0.09)",
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px",
        ...MONO, fontSize: "12px", color: "#6f757b",
      }}>
        <span>© 2026 Benjamin Lien</span>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="https://www.linkedin.com/in/benjaminlien/" target="_blank" rel="noopener noreferrer" className="underline-hover">
            linkedin.com/in/benjaminlien
          </a>
          <a href="https://github.com/lewfi" target="_blank" rel="noopener noreferrer" className="underline-hover">
            github.com/lewfi
          </a>
        </div>
      </div>
    </section>
  );
}
