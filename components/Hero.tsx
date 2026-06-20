import PhysicsChips from "./PhysicsChips";

const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        height: "calc(100vh - 61px)",
        minHeight: "660px",
        overflow: "hidden",
        background: "radial-gradient(130% 90% at 50% -10%, #15191c 0%, #0a0c0e 58%)",
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, left: 0,
        backgroundImage: "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        pointerEvents: "none",
      }} />

      {/* Purple ambient glow */}
      <div style={{
        position: "absolute", top: "-120px", left: "-80px",
        width: "460px", height: "460px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.16), transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Blue ambient glow */}
      <div style={{
        position: "absolute", bottom: "-140px", right: "-60px",
        width: "480px", height: "480px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,189,248,0.14), transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Center content */}
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, left: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", pointerEvents: "none",
        padding: "0 24px",
      }}>
        <div style={{ ...MONO, fontSize: "13px", color: "#10b981", letterSpacing: "1px", marginBottom: "20px" }}>
          {"// full-stack developer · data engineer"}
        </div>
        <h1 style={{
          fontSize: "clamp(56px, 9vw, 116px)",
          lineHeight: "0.92", fontWeight: 700,
          letterSpacing: "-3px", color: "#f3f5f6", margin: 0,
        }}>
          Benjamin Lien
        </h1>
        <p style={{
          fontSize: "clamp(15px, 1.5vw, 18px)", color: "#9aa0a6",
          margin: "24px 0 0", maxWidth: "520px", lineHeight: "1.5",
        }}>
          CS grad from UC Santa Cruz building products that are helpful at scale — from full-stack apps to data pipelines.
        </p>
        <div style={{ ...MONO, fontSize: "12px", color: "#5f656b", marginTop: "40px", letterSpacing: "1px" }}>
          ↓ grab a chip · throw it around ↓
        </div>
      </div>

      {/* Draggable physics chips */}
      <PhysicsChips />

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "26px", left: "50%",
        transform: "translateX(-50%)",
        width: "22px", height: "36px",
        border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: "12px",
        display: "flex", justifyContent: "center", paddingTop: "7px",
        pointerEvents: "none",
      }}>
        <div style={{
          width: "3px", height: "7px", borderRadius: "2px",
          background: "#10b981", animation: "scrolldot 1.6s ease-in-out infinite",
        }} />
      </div>
    </section>
  );
}
