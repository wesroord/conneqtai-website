export default function WhyConneqtAI() {
  const metrics = [
    { metric: "80%", label: "Support automated", desc: "Free your team from repetitive questions and focus on high-value work." },
    { metric: "3×", label: "Faster lead response", desc: "Respond to every lead in seconds — dramatically increasing conversion rates." },
    { metric: "24/7", label: "Always available", desc: "Your AI works nights, weekends and holidays. Never miss a lead again." },
    { metric: "60%", label: "Cost reduction", desc: "Automate repetitive tasks at scale without hiring more staff." },
    { metric: "Weeks", label: "Not months to go live", desc: "Most ConneqtAI systems go from strategy to live in just 2–4 weeks." },
    { metric: "∞", label: "Scales without limits", desc: "Handle 10 or 10,000 conversations simultaneously from day one." },
  ];
  return (
    <section id="why-us" style={{padding:"5rem 1.5rem",background:"rgba(255,255,255,0.012)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <span style={{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#a89cff",display:"block",marginBottom:"0.875rem"}}>Why ConneqtAI</span>
        <h2 style={{fontFamily:"sans-serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:800,letterSpacing:"-0.02em",lineHeight:1.12,marginBottom:"1rem",color:"#f0f0f8"}}>The business case<br/>is clear</h2>
        <p style={{fontSize:"1rem",color:"rgba(240,240,248,0.5)",maxWidth:500,lineHeight:1.7,marginBottom:"3rem"}}>Real numbers. Real impact. ConneqtAI systems pay for themselves — typically within the first month.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,280px),1fr))",gap:"1rem"}}>
          {metrics.map(m => (
            <div key={m.metric} style={{padding:"1.5rem",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"14px",background:"rgba(255,255,255,0.02)"}}>
              <div style={{fontFamily:"sans-serif",fontSize:"2rem",fontWeight:800,color:"#a89cff",marginBottom:"0.3rem"}}>{m.metric}</div>
              <div style={{fontSize:"0.875rem",fontWeight:500,color:"#f0f0f8",marginBottom:"0.4rem"}}>{m.label}</div>
              <div style={{fontSize:"0.825rem",color:"rgba(240,240,248,0.45)",lineHeight:1.6}}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
