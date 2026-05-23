const svcs = [
  {n:"01",t:"AI Chatbots",d:"Smart branded chatbots that engage visitors, qualify leads and convert — automatically, around the clock. Built and trained entirely on your business data.",tags:["24/7 active","Lead capture","Custom trained"]},
  {n:"02",t:"AI Customer Support",d:"Resolve tickets, answer FAQs and handle complex queries at scale — without adding a single person to your team. Ever.",tags:["Instant replies","CRM sync","Auto-escalation"]},
  {n:"03",t:"Workflow Automation",d:"Connect your tools, eliminate repetition and run complex business processes intelligently — end-to-end, fully automated, scales infinitely.",tags:["Tool integrations","Zero repetition","Infinite scale"]},
];
export default function Services() {
  return (
    <section id="solutions" style={{padding:"44px 20px",position:"relative",zIndex:5,background:"#03030a"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".18em",textTransform:"uppercase",color:"rgba(108,99,255,.7)",marginBottom:"20px",display:"flex",alignItems:"center",gap:"8px"}}>// 01 — solutions<span style={{flex:1,height:"1px",background:"linear-gradient(90deg,rgba(108,99,255,.3),transparent)"}}/></div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(22px,5vw,30px)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.08,color:"#f0f0f8",marginBottom:"8px"}}>Three systems.<br/>Infinite impact.</h2>
        <p style={{fontSize:"12px",color:"rgba(240,240,248,.38)",lineHeight:1.75,marginBottom:"26px",maxWidth:"360px"}}>Built from scratch for your business. No templates. No compromise. Ever.</p>
        <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"rgba(255,255,255,.05)",borderRadius:"16px",overflow:"hidden",border:"1px solid rgba(255,255,255,.07)"}}>
          {svcs.map(s=>(
            <div key={s.n} style={{display:"flex",background:"#03030a",position:"relative",overflow:"hidden",transition:"background .3s"}} className="svc-item">
              <div style={{fontFamily:"'Space Mono',monospace",fontSize:"11px",color:"rgba(108,99,255,.4)",padding:"20px 14px",borderRight:"1px solid rgba(255,255,255,.05)",display:"flex",alignItems:"flex-start",paddingTop:"22px",minWidth:"42px"}}>{s.n}</div>
              <div style={{padding:"18px 16px",flex:1}}>
                <div style={{fontFamily:"'Syne',sans-serif",fontSize:"14px",fontWeight:700,color:"#f0f0f8",marginBottom:"5px"}}>{s.t}</div>
                <div style={{fontSize:"11px",color:"rgba(240,240,248,.45)",lineHeight:1.65,marginBottom:"10px"}}>{s.d}</div>
                <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>{s.tags.map(t=><span key={t} style={{fontSize:"9px",padding:"2px 8px",borderRadius:"100px",border:"1px solid rgba(108,99,255,.2)",color:"rgba(184,176,255,.7)"}}>{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
