const metrics = [
  { metric: "80%", label: "Support automated", desc: "Free your team from repetitive queries — let AI handle the volume." },
  { metric: "3×", label: "Faster lead response", desc: "Reply to every lead in seconds. Studies show 3× faster = dramatically higher conversion." },
  { metric: "24/7", label: "Always on", desc: "Nights, weekends, holidays — your AI never clocks off." },
  { metric: "60%", label: "Lower costs", desc: "Scale your operations without scaling your headcount." },
  { metric: "2-4wk", label: "Time to live", desc: "From strategy session to live deployment — in weeks." },
  { metric: "∞", label: "Unlimited scale", desc: "Handle 10 or 100,000 conversations simultaneously." },
];

export default function WhyConneqtAI() {
  return (
    <section id="why-us" style={{ padding: "6rem 1.5rem", background: "#04040e", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7c6dff", display: "block", marginBottom: "1rem" }}>Why ConneqtAI</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, color: "#f0f0f8", marginBottom: "1rem" }}>
            The ROI speaks<br />for itself.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(240,240,248,0.5)", maxWidth: 480, lineHeight: 1.75 }}>
            Most clients see a full return on investment within their first month.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.25rem" }}>
          {metrics.map(m => (
            <div key={m.metric} className="why-card" style={{
              padding: "1.75rem",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.02)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: "-30px", right: "-30px",
                width: "120px", height: "120px", borderRadius: "50%",
                background: "rgba(108,99,255,0.05)",
                transition: "all 0.4s ease",
              }} />
              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: "2.25rem", fontWeight: 800,
                background: "linear-gradient(135deg, #fff 0%, #b8b0ff 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                marginBottom: "0.4rem", position: "relative",
              }}>{m.metric}</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f0f0f8", marginBottom: "0.5rem", position: "relative" }}>{m.label}</div>
              <div style={{ fontSize: "0.85rem", color: "rgba(240,240,248,0.45)", lineHeight: 1.65, position: "relative" }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
