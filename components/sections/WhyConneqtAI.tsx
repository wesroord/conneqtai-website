// Why ConneqtAI section
const metrics = [
  {
    metric: "80%",
    label: "Support queries handled by AI",
    desc: "Free your team from repetitive questions. Let AI handle the volume while your people focus on high-value work.",
  },
  {
    metric: "3×",
    label: "Faster lead response time",
    desc: "Respond to every lead in seconds — not hours. Studies show 3× faster response dramatically increases conversion rates.",
  },
  {
    metric: "24/7",
    label: "Always-on customer experience",
    desc: "Your AI works nights, weekends and holidays. Never miss a lead or leave a customer without support again.",
  },
  {
    metric: "60%",
    label: "Reduction in operational costs",
    desc: "Automate repetitive tasks and communication at scale — without hiring more staff or burning out your team.",
  },
  {
    metric: "Weeks",
    label: "Not months to go live",
    desc: "We move fast. Most ConneqtAI systems go from strategy to live deployment in 2–4 weeks, not quarters.",
  },
  {
    metric: "∞",
    label: "Scales without limits",
    desc: "Handle 10 or 10,000 conversations simultaneously. AI infrastructure that grows with your business from day one.",
  },
];

export function WhyConneqtAI() {
  return (
    <section id="why-us" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#7b8cff",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          Why ConneqtAI
        </span>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "1.25rem",
            color: "#f0f0f8",
          }}
        >
          The business case
          <br />
          is clear
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(240,240,248,0.55)",
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: "3rem",
          }}
        >
          Real numbers. Real impact. ConneqtAI systems pay for themselves —
          typically within the first month.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {metrics.map((m) => (
            <div
              key={m.metric}
              style={{
                padding: "1.75rem",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.02)",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(108,99,255,0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
              }
            >
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #f0f0f8, #7b8cff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "0.3rem",
                }}
              >
                {m.metric}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#f0f0f8",
                  marginBottom: "0.5rem",
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontSize: "0.825rem",
                  color: "rgba(240,240,248,0.5)",
                  lineHeight: 1.6,
                }}
              >
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyConneqtAI;
