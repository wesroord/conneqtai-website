const services = [
  {
    icon: "🤖",
    title: "AI Chatbots",
    desc: "Smart, branded chatbots that engage visitors, answer questions and convert leads — automatically, around the clock.",
    tags: ["24/7 availability", "Lead capture", "Custom trained"],
  },
  {
    icon: "🎯",
    title: "AI Customer Support",
    desc: "Resolve tickets, answer FAQs and handle customer queries at scale — without adding headcount.",
    tags: ["Instant replies", "CRM sync", "Auto-escalation"],
  },
  {
    icon: "🔄",
    title: "Workflow Automation",
    desc: "Connect your tools and eliminate repetitive tasks with intelligent end-to-end AI workflows built for your operations.",
    tags: ["Tool integrations", "Zero repetition", "Scales instantly"],
  },
];

export default function Services() {
  return (
    <section id="solutions" style={{ padding: "6rem 1.5rem", background: "#04040e" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#7c6dff",
            display: "block", marginBottom: "1rem",
          }}>What we build</span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1,
            color: "#f0f0f8", marginBottom: "1rem",
          }}>
            Three solutions.<br />Infinite impact.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(240,240,248,0.5)", maxWidth: 500, lineHeight: 1.75 }}>
            We focus on what actually moves the needle for your business — no fluff, no bloat.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.25rem" }}>
          {services.map((s, i) => (
            <div key={s.title} className="service-card" style={{
              padding: "2rem",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.02)",
              position: "relative", overflow: "hidden",
              animationDelay: `${i * 0.1}s`,
            }}>
              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: "linear-gradient(90deg, #6c63ff, #00d4aa)",
                opacity: 0.6,
              }} />

              <div style={{
                width: 52, height: 52, borderRadius: "14px",
                background: "rgba(108,99,255,0.1)",
                border: "1px solid rgba(108,99,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem", marginBottom: "1.5rem",
              }}>{s.icon}</div>

              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontSize: "1.15rem",
                fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0f8",
              }}>{s.title}</h3>

              <p style={{ fontSize: "0.9rem", color: "rgba(240,240,248,0.5)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {s.desc}
              </p>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: "0.72rem", fontWeight: 500, padding: "0.3rem 0.75rem",
                    borderRadius: "100px",
                    background: "rgba(108,99,255,0.08)",
                    border: "1px solid rgba(108,99,255,0.2)",
                    color: "#b8b0ff",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
