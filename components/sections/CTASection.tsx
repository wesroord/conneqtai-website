export default function CTASection() {
  return (
    <section style={{
      padding: "7rem 1.5rem", textAlign: "center",
      position: "relative", overflow: "hidden",
      background: "rgba(255,255,255,0.015)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(600px, 90vw)", height: 350,
        background: "radial-gradient(ellipse, rgba(108,99,255,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
        animation: "ringPulse 5s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: "min(800px, 110vw)", height: 450,
        border: "1px solid rgba(108,99,255,0.06)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        animation: "ringPulse 5s ease-in-out infinite 0.5s",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
        <span style={{
          fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#7c6dff",
          display: "block", marginBottom: "1.25rem",
        }}>Ready to start?</span>

        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          fontWeight: 800, letterSpacing: "-0.03em",
          lineHeight: 1.08, marginBottom: "1.25rem", color: "#f0f0f8",
        }}>
          Let's build something<br />
          <span className="grad-text">extraordinary together.</span>
        </h2>

        <p style={{
          fontSize: "1.05rem", color: "rgba(240,240,248,0.5)",
          maxWidth: 500, margin: "0 auto 2.75rem", lineHeight: 1.75,
        }}>
          Drop us a message and we'll come back to you within 24 hours with a clear plan for your business.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:hello@conneqtai.com"
            className="cta-btn-primary"
            style={{
              padding: "1rem 2.5rem", fontSize: "1rem", fontWeight: 500,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #6c63ff 0%, #a89cff 100%)",
              color: "#fff", textDecoration: "none", display: "inline-block",
              boxShadow: "0 0 40px rgba(108,99,255,0.4)",
            }}>
            hello@conneqtai.com →
          </a>
        </div>

        <p style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "rgba(240,240,248,0.3)" }}>
          No commitment. No fluff. Just results.
        </p>
      </div>
    </section>
  );
}
