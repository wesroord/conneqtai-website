"use client";
const steps = [
  { num: "01", title: "Strategy", desc: "We audit your workflows, identify automation opportunities and design the AI architecture that fits your exact business needs." },
  { num: "02", title: "Development", desc: "Our team builds your custom AI system, trained on your data, tuned to your brand voice, tested for real-world performance." },
  { num: "03", title: "Integration", desc: "We connect the AI to your existing tools, website, CRM, WhatsApp, email, Slack, so it plugs seamlessly into how you work." },
  { num: "04", title: "Optimisation", desc: "Ongoing monitoring, performance tuning and updates, so your AI system keeps improving and delivering value over time." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "6rem 2rem", background: "#0a0a10" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ff00aa", display: "block", marginBottom: "1rem" }}>
          The Process
        </span>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1.25rem", color: "#f0f0f8" }}>
          From strategy to<br />live AI system in weeks
        </h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(240,240,248,0.55)", maxWidth: 560, lineHeight: 1.7, marginBottom: "3.5rem" }}>
          A proven 4-step process that takes your business from idea to production-ready AI, fast.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {steps.map((step) => (
            <div key={step.num}
              style={{ padding: "2rem 1.75rem", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", background: "rgba(255,255,255,0.02)", transition: "border-color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,0,170,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "3rem", fontWeight: 800, lineHeight: 1, marginBottom: "1rem", background: "linear-gradient(135deg, #ff00aa, #7700ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {step.num}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0f8" }}>
                {step.title}
              </div>
              <div style={{ fontSize: "0.875rem", color: "rgba(240,240,248,0.55)", lineHeight: 1.65 }}>
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
