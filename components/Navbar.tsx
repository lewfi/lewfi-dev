const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

export default function Navbar() {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 40px",
      background: "rgba(10,12,14,0.72)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <a href="#top" style={{ ...MONO, fontSize: "16px", fontWeight: 700, color: "#e8eaec", textDecoration: "none" }}>
        lewfi<span style={{ color: "#10b981" }}>.dev</span>
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: "28px", ...MONO, fontSize: "13px", color: "#9aa0a6" }}>
        <a href="#about"      style={{ textDecoration: "none", color: "inherit" }}>about</a>
        <a href="#projects"   style={{ textDecoration: "none", color: "inherit" }}>projects</a>
        <a href="#experience" style={{ textDecoration: "none", color: "inherit" }}>experience</a>
        <a href="#contact"    style={{ textDecoration: "none", color: "inherit" }}>contact</a>
        <a
          className="mag"
          href="https://docs.google.com/document/d/1yWLIhhOSMvaKH6PxjRCu1Siht6F5ADCH1PZkE_3qP9g/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...MONO, textDecoration: "none",
            color: "#04140e", background: "#10b981",
            padding: "9px 16px", borderRadius: "8px",
            fontWeight: 600, display: "inline-block",
            willChange: "transform",
          }}
        >
          resume →
        </a>
      </div>
    </nav>
  );
}
