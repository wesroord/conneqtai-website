const S=[{n:"340+",l:"Vragen per maand geautomatiseerd"},{n:"28u",l:"Personeelstijd bespaard per week"},{n:"3x",l:"Snellere reactietijd"},{n:"€2.100",l:"Bespaard op personeelskosten per maand"}];
export default function CaseStudyNL(){
  return(
    <section style={{padding:"48px 24px 64px",background:"#000005"}}>
      <div style={{maxWidth:900,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"28px",padding:"20px 24px",borderRadius:"14px",border:"1px solid rgba(255,255,255,.1)",background:"rgba(255,255,255,.03)"}}>
          <div style={{width:"48px",height:"48px",borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0}}>🏓</div>
          <div>
            <div style={{fontFamily:"'Inter',sans-serif",fontSize:"17px",fontWeight:800,color:"#fff",marginBottom:"2px"}}>PadelTown</div>
            <div style={{fontSize:"12px",color:"rgba(255,255,255,.75)"}}>Sport en Recreatie · AI-chatbot</div>
          </div>
          <a href="https://padel-town.nl" target="_blank" rel="noopener noreferrer" style={{marginLeft:"auto",fontSize:"11px",fontWeight:600,padding:"6px 14px",borderRadius:"100px",border:"1px solid rgba(255,0,170,.6)",color:"#ff00aa",textDecoration:"none",flexShrink:0,display:"inline-flex",alignItems:"center",gap:"6px"}}>Bekijk de AI-chatbot →</a>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,160px),1fr))",gap:"12px",marginBottom:"28px"}}>
          {S.map(s=>(<div key={s.l} style={{padding:"18px",borderRadius:"12px",border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.03)",textAlign:"center"}}><div style={{fontFamily:"'Inter',sans-serif",fontSize:"26px",fontWeight:800,background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",backgroundSize:"300% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"chromeShift 4s ease infinite",lineHeight:1,marginBottom:"6px"}}>{s.n}</div><div style={{fontSize:"11px",color:"rgba(255,255,255,.75)",lineHeight:1.5}}>{s.l}</div></div>))}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
          {[
            {tag:"De uitdaging",col:"#ff00aa",text:"PadelTown ontving meer dan 340 klantvragen per maand over baanreserveringen, lidmaatschapsprijzen, openingstijden en evenementen. Hun kleine team besteedde bijna een volledige werkdag per week aan het beantwoorden van dezelfde vragen via e-mail, telefoon en Instagram."},
            {tag:"De oplossing",col:"#7700ff",text:"ConneqtAI bouwde een op maat gemaakte AI-chatbot volledig getraind op PadelTown-data — prijzen, baanbeschikbaarheid, lidmaatschapsopties, evenementen en veelgestelde vragen. De chatbot werd ingebed op hun website en getraind in de vriendelijke, sportieve toon van PadelTown."},
            {tag:"De resultaten",col:"#00aaff",text:"Binnen de eerste maand handelde de AI meer dan 85% van alle inkomende klantvragen automatisch af. Het PadelTown-team ging van 28 uur per maand aan repetitieve vragen naar minder dan 4 uur — en bespaart nu meer dan €2.100 aan personeelskosten elke maand."}
          ].map(b=>(<div key={b.tag} style={{padding:"24px",borderRadius:"14px",border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.02)"}}><div style={{fontSize:"11px",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",color:b.col,marginBottom:"10px"}}>{b.tag}</div><p style={{fontSize:"14px",color:"rgba(255,255,255,.75)",lineHeight:1.8}}>{b.text}</p></div>))}
        </div>
        <div style={{marginTop:"24px",padding:"24px",borderRadius:"14px",border:"1px solid rgba(255,0,170,.2)",background:"rgba(255,0,170,.04)"}}>
          <p style={{fontSize:"14px",color:"rgba(255,255,255,.85)",lineHeight:1.8,fontStyle:"italic",marginBottom:"16px"}}>"De AI-chatbot heeft volledig veranderd hoe wij klantcommunicatie afhandelen. We maakten ons vroeger zorgen over gemiste berichten in de avond of het weekend. Nu wordt alles automatisch afgehandeld — en onze klanten krijgen zelfs sneller antwoord dan voorheen."</p>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}><div style={{width:"32px",height:"32px",borderRadius:"50%",background:"linear-gradient(135deg,#ff00aa,#7700ff)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,color:"#fff"}}>PT</div><div><div style={{fontSize:"13px",fontWeight:600,color:"#fff"}}>Management Team</div><div style={{fontSize:"11px",color:"rgba(255,255,255,.5)"}}>PadelTown</div></div></div>
        </div>
        <div style={{marginTop:"24px",padding:"28px 24px",borderRadius:"14px",border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.02)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px"}}>
          <div><div style={{fontSize:"11px",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",color:"rgba(255,255,255,.4)",marginBottom:"6px"}}>Bekijk het live</div><div style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",fontWeight:700,color:"#fff",marginBottom:"4px"}}>De chatbot staat live op de PadelTown website</div><div style={{fontSize:"13px",color:"rgba(255,255,255,.6)"}}>Bezoek hun site en probeer het zelf — hij staat in de hoek.</div></div>
          <a href="https://padel-town.nl" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 22px",borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",fontSize:"14px",fontWeight:600,flexShrink:0}}>Bezoek PadelTown →</a>
        </div>
      </div>
    </section>
  );
}
