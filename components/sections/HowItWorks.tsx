"use client";
const steps = [
  { num: "01", title: "Strategy", desc: "We learn your business inside out. Your products, tone of voice, FAQs and goals. Then we design the chatbot that fits exactly." },
  { num: "02", title: "Build", desc: "We build your custom AI chatbot from scratch, trained entirely on your data. No templates. Tested before it goes anywhere near your customers." },
  { num: "03", title: "Launch", desc: "We install the chatbot on your website and connect it to your tools, WhatsApp, CRM or email, depending on your package." },
  { num: "04", title: "Optimise", desc: "We monitor every conversation, keep improving the chatbot and make sure it keeps delivering results month after month." },
];
export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "6rem 2rem", background: "#0a0a10" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ff00aa", display: "block", marginBottom: "1rem" }}>The Process</span>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1.25rem", color: "#f0f0f8" }}>
          From first call to<br />live chatbot in weeks
        </h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(240,240,248,0.7)", maxWidth: 560, lineHeight: 1.7, marginBottom: "3.5rem" }}>
          A simple 4-step process. We do all the work, you get a chatbot that actually performs.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {steps.map((step) => (
            <div key={step.num}
              style={{ padding: "2rem 1.75rem", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", background: "rgba(255,255,255,0.02)", transition: "border-color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,0,170,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "3rem", fontWeight: 800, lineHeight: 1, marginBottom: "1rem", background: "linear-gradient(135deg, #ff00aa, #7700ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{step.num}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0f8" }}>{step.title}</div>
              <div style={{ fontSize: "0.875rem", color: "rgba(240,240,248,0.7)", lineHeight: 1.65 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
