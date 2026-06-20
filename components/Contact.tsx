const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
};

const LINKS = [
  { label: "GitHub",   href: "https://github.com/lewfi",                                                                                          c: "16,185,129" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/benjaminlien/",                                                                         c: "56,189,248" },
  { label: "Spotify",  href: "https://open.spotify.com/user/lulify_?si=9de70972f6a747e9",                                                        c: "139,92,246" },
  { label: "Resume",   href: "https://docs.google.com/document/d/1yWLIhhOSMvaKH6PxjRCu1Siht6F5ADCH1PZkE_3qP9g/edit?usp=sharing",                c: "251,191,36" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ position: "relative", zIndex: 2, maxWidth: "1140px", margin: "0 auto", padding: "90px 40px 60px" }}
    >
      <div
        className="reveal"
        style={{
          textAlign: "center",
          background: "radial-gradient(120% 130% at 50% 0%, rgba(139,92,246,0.14), transparent 55%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "28px",
          padding: "70px 40px",
        }}
      >
        <div style={{ ...MONO, fontSize: "13px", color: "#8b5cf6", letterSpacing: "2px", marginBottom: "22px" }}>
          04 / CONTACT
        </div>
        <h2 style={{
          fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 600,
          letterSpacing: "-1.5px", color: "#f3f5f6",
          margin: "0 0 18px",
        }}>
          Let&apos;s build something together.
        </h2>
        <p style={{ fontSize: "17px", color: "#aab0b6", margin: "0 0 36px" }}>
          Open to new-grad SWE roles and interesting collaborations.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          {LINKS.map(({ label, href, c }) => (
            <a
              key={label}
              className="social"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--c": c } as React.CSSProperties}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
