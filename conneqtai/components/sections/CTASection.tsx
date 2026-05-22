"use client";

export default function CTASection() {
  return (
    <section style={{ padding: "5rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden", background: "#05050c", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "min(500px, 90vw)", height: 280, background: "radial-gradient(ellipse, rgba(108,99,255,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
        <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#a89cff", display: "block", marginBottom: "1rem" }}>Get Started</span>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1.25rem", color: "#f0f0f8" }}>
          Ready to implement AI<br />in your business?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(240,240,248,0.5)", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Send us a message and we'll identify your biggest automation opportunities and show you exactly what's possible.
        </p>
        <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:hello@conneqtai.com" style={{
            padding: "0.875rem 2rem", fontSize: "0.9rem", fontWeight: 500,
            borderRadius: "10px", background: "linear-gradient(135deg, #6c63ff, #a89cff)",
            color: "#fff", textDecoration: "none", border: "none",
            boxShadow: "0 0 30px rgba(108,99,255,0.35)", transition: "all 0.25s", display: "inline-block",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 45px rgba(108,99,255,0.5)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(108,99,255,0.35)"; }}
          >Get in touch →</a>
          <a href="#solutions" style={{
            padding: "0.875rem 2rem", fontSize: "0.9rem", fontWeight: 500,
            borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)", color: "rgba(240,240,248,0.8)",
            textDecoration: "none", transition: "all 0.2s", display: "inline-block",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
          >View solutions</a>
        </div>
      </div>
    </section>
  );
}
