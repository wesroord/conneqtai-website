export default function Services() {
  const services = [
    { icon: "🤖", title: "AI Chatbots", desc: "Smart branded chatbots that handle customer queries, qualify leads and convert visitors — 24/7, without human intervention." },
    { icon: "⚡", title: "AI Agents", desc: "Autonomous agents that reason, plan and execute multi-step tasks across your business tools and data sources." },
    { icon: "🎯", title: "AI Customer Support", desc: "Intelligent support systems that resolve tickets, answer FAQs and escalate complex issues — reducing support costs dramatically." },
    { icon: "🔄", title: "Workflow Automation", desc: "End-to-end AI workflows that connect your tools, eliminate repetitive tasks and run complex processes automatically." },
    { icon: "🌐", title: "Website Development", desc: "Modern, fast and conversion-focused websites built with the latest tech — designed to represent your business professionally." },
    { icon: "🏢", title: "Internal AI Systems", desc: "Custom AI tools for your team — knowledge bases, internal assistants and intelligent onboarding systems." },
  ];
  return (
    <section id="solutions" style={{padding:"5rem 1.5rem",background:"#05050c"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <span style={{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#a89cff",display:"block",marginBottom:"0.875rem"}}>Our Solutions</span>
        <h2 style={{fontFamily:"sans-serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:800,letterSpacing:"-0.02em",lineHeight:1.12,marginBottom:"1rem",color:"#f0f0f8"}}>Everything your business<br/>needs from AI</h2>
        <p style={{fontSize:"1rem",color:"rgba(240,240,248,0.5)",maxWidth:520,lineHeight:1.7,marginBottom:"3rem"}}>From intelligent chatbots to full workflow automation — production-ready AI systems tailored to your operations.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:"1rem"}}>
          {services.map(s => (
            <div key={s.title} style={{padding:"1.75rem",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.07)",background:"rgba(255,255,255,0.02)"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"1rem"}}>{s.icon}</div>
              <div style={{fontFamily:"sans-serif",fontSize:"1rem",fontWeight:700,marginBottom:"0.5rem",color:"#f0f0f8"}}>{s.title}</div>
              <div style={{fontSize:"0.875rem",color:"rgba(240,240,248,0.5)",lineHeight:1.65}}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
