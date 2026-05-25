const S=[{n:"340+",l:"Queries automated per month"},{n:"28h",l:"Staff time saved per week"},{n:"3x",l:"Faster response time"},{n:"€2.100",l:"Saved in staff costs monthly"}];
export default function CaseStudy(){
  return(
    <section style={{padding:"48px 24px 64px",background:"#000005"}}>
      <div style={{maxWidth:900,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"28px",padding:"20px 24px",borderRadius:"14px",border:"1px solid rgba(255,255,255,.1)",background:"rgba(255,255,255,.03)"}}>
          <div style={{width:"48px",height:"48px",borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0}}>🏓</div>
          <div>
            <div style={{fontFamily:"'Inter',sans-serif",fontSize:"17px",fontWeight:800,color:"#fff",marginBottom:"2px"}}>PadelTown</div>
            <div style={{fontSize:"12px",color:"rgba(255,255,255,.75)"}}>Sports and Recreation · AI Chatbot</div>
          </div>
          <div style={{marginLeft:"auto",fontSize:"11px",fontWeight:600,padding:"4px 10px",borderRadius:"100px",border:"1px solid rgba(255,0,170,1)",color:"#ff00aa",flexShrink:0}}>Live since 2024</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,160px),1fr))",gap:"12px",marginBottom:"28px"}}>
          {S.map(s=>(
            <div key={s.l} style={{padding:"18px",borderRadius:"12px",border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.03)",textAlign:"center"}}>
              <div style={{fontFamily:"'Inter',sans-serif",fontSize:"26px",fontWeight:800,background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",backgroundSize:"300% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"chromeShift 4s ease infinite",lineHeight:1,marginBottom:"6px"}}>{s.n}</div>
              <div style={{fontSize:"11px",color:"rgba(255,255,255,.75)",lineHeight:1.5}}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
          {[
            {tag:"The challenge",col:"#ff00aa",text:"PadelTown was receiving over 340 customer questions per month about court reservations, membership prices, opening hours and events. Their small team was spending nearly a full working day every week answering the same questions via email, phone and Instagram. They needed a solution that handled this automatically without losing their personal, friendly feel."},
            {tag:"The solution",col:"#7700ff",text:"ConneqtAI built a custom AI chatbot trained entirely on PadelTown data — pricing, court availability, membership options, events and FAQs. The chatbot was embedded on their website and trained in PadelTown friendly, sporty tone of voice. It answers questions instantly 24/7 and automatically captures contact details from visitors who want to book or get more information."},
            {tag:"The results",col:"#00aaff",text:"Within the first month the AI was handling over 85% of all incoming customer questions automatically. The PadelTown team went from spending 28 hours per month on repetitive queries to under 4 hours — saving over €2.100 in staff costs every single month. Customer response time dropped from an average of 4 hours to under 10 seconds."}
          ].map(b=>(
            <div key={b.tag} style={{padding:"24px",borderRadius:"14px",border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.02)"}}>
              <div style={{fontSize:"11px",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",color:b.col,marginBottom:"10px"}}>{b.tag}</div>
              <p style={{fontSize:"14px",color:"rgba(255,255,255,.7)",lineHeight:1.8}}>{b.text}</p>
            </div>
          ))}
        </div>
        <div style={{marginTop:"24px",padding:"24px",borderRadius:"14px",border:"1px solid rgba(255,0,170,.2)",background:"rgba(255,0,170,.04)"}}>
          <p style={{fontSize:"14px",color:"rgba(255,255,255,.8)",lineHeight:1.8,fontStyle:"italic",marginBottom:"16px"}}>The AI chatbot has completely changed how we handle customer communication. We used to stress about missing messages in the evening or on weekends. Now everything is handled automatically — and our customers actually get faster answers than before.</p>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <div style={{width:"32px",height:"32px",borderRadius:"50%",background:"linear-gradient(135deg,#ff00aa,#7700ff)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,color:"#fff"}}>PT</div>
            <div>
              <div style={{fontSize:"13px",fontWeight:600,color:"#fff"}}>Management Team</div>
              <div style={{fontSize:"11px",color:"rgba(255,255,255,.5)"}}>PadelTown</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
