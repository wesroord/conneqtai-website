"use client";
const steps = [
  { num: "01", title: "Strategie", desc: "We leren jouw bedrijf van binnen en van buiten kennen. Je producten, tone of voice, veelgestelde vragen en doelen. Dan ontwerpen we de chatbot die perfect past." },
  { num: "02", title: "Bouwen", desc: "We bouwen jouw maatwerk AI chatbot volledig op basis van jouw data. Geen templates. Uitgebreid getest voordat hij live gaat." },
  { num: "03", title: "Live", desc: "We installeren de chatbot op je website en koppelen hem aan je tools, WhatsApp, CRM of e-mail, afhankelijk van je pakket." },
  { num: "04", title: "Optimaliseren", desc: "We monitoren elk gesprek, blijven de chatbot verbeteren en zorgen dat hij maand na maand resultaten blijft leveren." },
];
export default function HowItWorksNL() {
  return (
    <section id="werkwijze" style={{ padding: "6rem 2rem", background: "#0a0a10" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ff00aa", display: "block", marginBottom: "1rem" }}>De werkwijze</span>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1.25rem", color: "#f0f0f8" }}>
          Van eerste gesprek tot<br />live chatbot in weken
        </h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(240,240,248,0.7)", maxWidth: 560, lineHeight: 1.7, marginBottom: "3.5rem" }}>
          Een simpel 4-stappen proces. Wij doen al het werk, jij krijgt een chatbot die echt presteert.
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
