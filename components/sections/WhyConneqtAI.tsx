const metrics = [
  {n:"80%",l:"Support automated",d:"Free your team from repetitive queries. Let AI handle the volume."},
  {n:"3×",l:"Faster response",d:"Speed closes deals. Reply in seconds, not hours."},
  {n:"24/7",l:"Always on",d:"Nights, weekends, holidays — never offline, never tired."},
  {n:"60%",l:"Lower costs",d:"Scale your operations without scaling your headcount."},
  {n:"2wk",l:"Time to live",d:"From strategy session to live deployment in weeks."},
  {n:"∞",l:"Unlimited scale",d:"100,000 simultaneous conversations. No ceiling."},
];
export default function WhyConneqtAI() {
  return (
    <section id="results" style={{padding:"44px 20px",position:"relative",zIndex:5,background:"#03030a"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".18em",textTransform:"uppercase",color:"rgba(108,99,255,.7)",marginBottom:"20px",display:"flex",alignItems:"center",gap:"8px"}}>// 03 — results<span style={{flex:1,height:"1px",background:"linear-gradient(90deg,rgba(108,99,255,.3),transparent)"}}/></div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(22px,5vw,30px)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.08,color:"#f0f0f8",marginBottom:"8px"}}>The ROI speaks<br/>for itself.</h2>
        <p style={{fontSize:"12px",color:"rgba(240,240,248,.38)",lineHeight:1.75,marginBottom:"26px",maxWidth:"360px"}}>Most clients recover their full investment within the first month.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
          {metrics.map(m=>(
            <div key={m.n} style={{padding:"18px",borderRadius:"16px",background:"linear-gradient(135deg,rgba(108,99,255,.06),rgba(0,212,170,.02))",border:"1px solid rgba(255,255,255,.06)",position:"relative",overflow:"hidden",transition:"transform .3s,border-color .3s"}} className="metric-card">
              <div style={{fontFamily:"'Syne',sans-serif",fontSize:"28px",fontWeight:800,background:"linear-gradient(135deg,#fff,#a89cff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1,marginBottom:"4px"}}>{m.n}</div>
              <div style={{fontSize:"11px",fontWeight:600,color:"#f0f0f8",marginBottom:"3px"}}>{m.l}</div>
              <div style={{fontSize:"10px",color:"rgba(240,240,248,.35)",lineHeight:1.55}}>{m.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
