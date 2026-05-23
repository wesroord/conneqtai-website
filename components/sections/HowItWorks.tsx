const steps = [
  {n:"01 // strategy",t:"Map & design",d:"We audit your workflows, find automation opportunities and architect the perfect AI system specifically for your business."},
  {n:"02 // build",t:"Train & test",d:"Your AI is built on your data, trained on your brand voice and exhaustively tested before it ever touches a customer."},
  {n:"03 // deploy",t:"Integrate & launch",d:"Connected to your website, CRM, WhatsApp and all your tools — then live. Usually within 2–4 weeks of kickoff."},
  {n:"04 // optimise",t:"Learn & improve",d:"Continuous monitoring and weekly improvements — your AI gets smarter every single week."},
];
export default function HowItWorks() {
  return (
    <section id="process" style={{padding:"44px 20px",position:"relative",zIndex:5,background:"rgba(255,255,255,.012)",borderTop:"1px solid rgba(255,255,255,.05)",borderBottom:"1px solid rgba(255,255,255,.05)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".18em",textTransform:"uppercase",color:"rgba(0,212,170,.7)",marginBottom:"20px",display:"flex",alignItems:"center",gap:"8px"}}>// 02 — process<span style={{flex:1,height:"1px",background:"linear-gradient(90deg,rgba(0,212,170,.3),transparent)"}}/></div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(22px,5vw,30px)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.08,color:"#f0f0f8",marginBottom:"8px"}}>Idea to live AI.<br/>Weeks, not months.</h2>
        <p style={{fontSize:"12px",color:"rgba(240,240,248,.38)",lineHeight:1.75,marginBottom:"26px",maxWidth:"360px"}}>A proven 4-step system that gets you deployed fast and keeps improving forever.</p>
        <div style={{position:"relative",paddingLeft:"32px"}}>
          <div style={{position:"absolute",left:"12px",top:"10px",bottom:"10px",width:"1px",background:"linear-gradient(180deg,#6c63ff,#00d4aa)"}}/>
          {steps.map((s,i)=>(
            <div key={s.n} style={{position:"relative",marginBottom:i<steps.length-1?"28px":"0"}}>
              <div style={{position:"absolute",left:"-24px",top:"6px",width:"16px",height:"16px",borderRadius:"50%",background:"#03030a",border:"1px solid #6c63ff",boxShadow:"0 0 14px rgba(108,99,255,.35)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"6px",height:"6px",borderRadius:"50%",background:"#6c63ff",animation:"innerPulse 2s ease infinite"}}/>
              </div>
              <div style={{fontFamily:"'Space Mono',monospace",fontSize:"9px",color:"rgba(108,99,255,.5)",letterSpacing:".05em",marginBottom:"4px"}}>{s.n}</div>
              <div style={{fontFamily:"'Syne',sans-serif",fontSize:"14px",fontWeight:700,color:"#f0f0f8",marginBottom:"4px"}}>{s.t}</div>
              <div style={{fontSize:"11px",color:"rgba(240,240,248,.42)",lineHeight:1.65}}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
