export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Strategy", desc: "We analyse your workflows and design the AI architecture that fits your exact business needs." },
    { num: "02", title: "Development", desc: "Custom AI built on your data, tuned to your brand voice, tested for real-world performance." },
    { num: "03", title: "Integration", desc: "Connected to your website, CRM, WhatsApp, email and all your existing tools." },
    { num: "04", title: "Optimisation", desc: "Ongoing monitoring and updates — your AI system keeps improving and delivering value." },
  ];
  return (
    <section id="how-it-works" style={{padding:"5rem 1.5rem",background:"rgba(255,255,255,0.012)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <span style={{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#a89cff",display:"block",marginBottom:"0.875rem"}}>The Process</span>
        <h2 style={{fontFamily:"sans-serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:800,letterSpacing:"-0.02em",lineHeight:1.12,marginBottom:"1rem",color:"#f0f0f8"}}>From strategy to live<br/>AI system in weeks</h2>
        <p style={{fontSize:"1rem",color:"rgba(240,240,248,0.5)",maxWidth:500,lineHeight:1.7,marginBottom:"3rem"}}>A proven 4-step process that takes your business from idea to production-ready AI — fast.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",gap:"1rem"}}>
          {steps.map(s=>(
            <div key={s.num} style={{padding:"1.75rem",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"16px",background:"rgba(255,255,255,0.02)"}}>
              <div style={{fontFamily:"sans-serif",fontSize:"2.5rem",fontWeight:800,color:"rgba(108,99,255,0.6)",marginBottom:"0.875rem",lineHeight:1}}>{s.num}</div>
              <div style={{fontFamily:"sans-serif",fontSize:"1rem",fontWeight:700,marginBottom:"0.5rem",color:"#f0f0f8"}}>{s.title}</div>
              <div style={{fontSize:"0.875rem",color:"rgba(240,240,248,0.5)",lineHeight:1.65}}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
