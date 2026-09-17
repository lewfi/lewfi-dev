"use client";

import { useState } from "react";

const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky", top: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
        padding: "18px clamp(20px,4vw,48px)",
        background: "rgba(20,22,26,0.82)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        willChange: "backdrop-filter",
        transform: "translateZ(0)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
        <a href="#top" style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.5px", color: "#f5f3ec" }}>
          lewfi<span style={{ color: "#d4ff3d" }}>.</span>dev
        </a>
        <span style={{
          ...MONO, fontSize: "11px", letterSpacing: "1px", color: "#f5f3ec",
          border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px",
          padding: "5px 12px", textTransform: "uppercase",
        }}>
          Open to new grad roles
        </span>
      </div>

      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
          style={{
            width: "42px", height: "38px", borderRadius: "10px",
            background: "#1e2126", border: "1px solid rgba(255,255,255,0.1)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: "4px", cursor: "pointer",
          }}
        >
          <span style={{ width: "16px", height: "1.5px", background: "#f5f3ec" }} />
          <span style={{ width: "16px", height: "1.5px", background: "#f5f3ec" }} />
          <span style={{ width: "16px", height: "1.5px", background: "#f5f3ec" }} />
        </button>

        <a
          href="mailto:benjaminlien17@gmail.com"
          className="pill-btn"
          style={{
            background: "#d4ff3d", color: "#14161a", fontSize: "13px", fontWeight: 600,
            padding: "11px 20px", borderRadius: "999px", whiteSpace: "nowrap",
          }}
        >
          Get in touch
        </a>

        {menuOpen && (
          <div style={{
            position: "absolute", top: "100%", right: 0, marginTop: "10px",
            background: "#1e2126", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px",
            padding: "10px", display: "flex", flexDirection: "column", minWidth: "180px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="menu-link"
                style={{ padding: "10px 14px", borderRadius: "8px", fontSize: "14px", color: "#f5f3ec" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
