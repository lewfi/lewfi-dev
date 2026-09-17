const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

const GRID_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\"), " +
  "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 120px), " +
  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 120px)";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 76px)",
        display: "flex", flexDirection: "column", justifyContent: "center",
        overflow: "hidden", padding: "0 clamp(20px,6vw,64px)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: GRID_TEXTURE }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", padding: "120px 0 60px" }}>
        <div style={{
          ...MONO, fontSize: "13px", letterSpacing: "2px", color: "#d4ff3d",
          textTransform: "uppercase", marginBottom: "26px",
        }}>
          Software Engineer · UC Santa Cruz
        </div>
        <h1 style={{
          margin: 0, fontSize: "clamp(52px,10vw,132px)", lineHeight: "0.95",
          fontWeight: 700, letterSpacing: "-2px", color: "#f5f3ec",
        }}>
          Benjamin Lien
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "40px" }}>
          <div style={{ width: "12px", height: "12px", border: "1.5px solid #d4ff3d", transform: "rotate(45deg)", flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: "clamp(16px,1.6vw,19px)", color: "#9ca2a8", maxWidth: "520px", lineHeight: "1.5" }}>
            CS grad from UC Santa Cruz — looking for new grad opportunities.
          </p>
        </div>
      </div>

      <div style={{
        position: "absolute", left: "clamp(16px,3vw,32px)", bottom: "36px", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
      }}>
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#d4ff3d", animation: "scrolldot 1.8s ease-in-out infinite" }} />
        <div style={{ width: "1px", height: "56px", background: "rgba(255,255,255,0.25)" }} />
        <div style={{
          ...MONO, writingMode: "vertical-rl", transform: "rotate(180deg)",
          fontSize: "11px", letterSpacing: "2px", color: "#9ca2a8", textTransform: "uppercase",
        }}>
          Scroll
        </div>
      </div>
    </section>
  );
}
