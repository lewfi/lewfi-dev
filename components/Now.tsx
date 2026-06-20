const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

export default function Now() {
  return (
    <section
      id="now"
      style={{ position: "relative", zIndex: 2, maxWidth: "1140px", margin: "0 auto", padding: "90px 40px" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "stretch" }}>
        {/* Currently building */}
        <div
          className="reveal"
          style={{
            background: "linear-gradient(160deg, rgba(16,185,129,0.1), rgba(12,15,17,0.7))",
            border: "1px solid rgba(16,185,129,0.22)",
            borderRadius: "20px", padding: "34px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "20px" }}>
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 0 4px rgba(16,185,129,0.18)" }} />
            <span style={{ ...MONO, fontSize: "12px", color: "#10b981", letterSpacing: "2px" }}>NOW</span>
          </div>
          <h3 style={{ fontSize: "25px", fontWeight: 600, color: "#f3f5f6", margin: "0 0 14px", letterSpacing: "-0.5px" }}>
            Currently building &amp; looking
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#aab0b6", margin: "0 0 16px" }}>
            Shipping a media-showcase site at Eclypse with a reusable component library and Framer Motion polish, and prepping it for AWS deployment.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#aab0b6", margin: 0 }}>
            Open to <span style={{ color: "#10b981" }}>new-grad software engineering</span> roles — full-stack and data.
          </p>
        </div>

        {/* Spotify */}
        <div
          className="reveal"
          style={{
            background: "linear-gradient(160deg, rgba(20,24,27,0.85), rgba(12,15,17,0.75))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px", padding: "34px",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ ...MONO, fontSize: "12px", color: "#6f757b", letterSpacing: "2px", marginBottom: "20px" }}>LISTENING</div>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#aab0b6", margin: "0 0 24px" }}>
              There&apos;s usually something playing while I build — here&apos;s what&apos;s on rotation.
            </p>
          </div>
          <a
            className="mag"
            href="https://open.spotify.com/user/lulify_?si=9de70972f6a747e9"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: "16px", textDecoration: "none",
              background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)",
              borderRadius: "14px", padding: "16px 18px", willChange: "transform",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "28px", width: "28px", flexShrink: 0 }}>
              {[0, 0.25, 0.5, 0.15].map((delay, i) => (
                <span key={i} style={{
                  width: "4px", background: "#10b981", borderRadius: "2px",
                  animation: `eq 0.9s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                }} />
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#f3f5f6" }}>On repeat</div>
              <div style={{ ...MONO, fontSize: "12px", color: "#8a9197" }}>find me on Spotify →</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
