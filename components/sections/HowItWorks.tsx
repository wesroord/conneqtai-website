const steps = [
  { num: "01", title: "Strategy", desc: "We map your workflows, find automation opportunities and design the perfect AI architecture for your business." },
  { num: "02", title: "Build", desc: "Your custom AI is built, trained on your data and tuned to your brand voice — tested end-to-end before launch." },
  { num: "03", title: "Launch", desc: "We integrate your AI into your website, CRM and tools — then go live. Fast." },
  { num: "04", title: "Optimise", desc: "Ongoing monitoring and improvements — your AI keeps getting smarter and more valuable over time." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "6rem 1.5rem", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7c6dff", display: "block", marginBottom: "1rem" }}>The process</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, color: "#f0f0f8", marginBottom: "1rem" }}>
            From idea to live AI<br />in weeks — not months.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(240,240,248,0.5)", maxWidth: 480, lineHeight: 1.75 }}>
            A clear, proven process that gets you live fast and keeps improving.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "1.25rem" }}>
          {steps.map((s, i) => (
            <div key={s.num} className="step-card" style={{
              padding: "2rem",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.02)",
              position: "relative",
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: "2.75rem", fontWeight: 800,
                background: `linear-gradient(135deg, rgba(108,99,255,${0.8 - i * 0.1}), rgba(108,99,255,0.15))`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                lineHeight: 1, marginBottom: "1.25rem",
              }}>{s.num}</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.625rem", color: "#f0f0f8" }}>{s.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "rgba(240,240,248,0.5)", lineHeight: 1.7 }}>{s.desc}</p>

              {i < steps.length - 1 && (
                <div style={{
                  position: "absolute", top: "2rem", right: "-0.75rem",
                  fontSize: "1rem", color: "rgba(108,99,255,0.4)",
                  display: "none",
                }} className="step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
