const P=[
  {i:"🚀",n:"Starter",t:"Meest gekozen",p:"997",m:"147",d:"Een slimme AI-chatbot die 24/7 voor jouw bedrijf werkt. Beantwoordt vragen, vangt leads op en slaapt nooit.",f:["AI-chatbot op je website","Getraind op jouw producten en FAQ","Automatische lead capture","Eigen tone of voice","Maandelijks onderhoud en updates"],h:false},
  {i:"⚡",n:"Growth",t:"Beste waarde",p:"2.497",m:"197",d:"Volledige AI-klantenservice die e-mails en chat automatisch afhandelt — zodat jouw team zich richt op wat telt.",f:["Alles uit Starter","AI e-mail en chat support","Auto-escalatie naar je team","HubSpot CRM-integratie","Maandelijkse rapportage"],h:true},
  {i:"🏢",n:"Enterprise",t:"Max ROI",p:"4.997",m:"397",d:"Volledige workflow-automatisering die al je tools verbindt en repetitief werk volledig elimineert.",f:["Alles uit Growth","Volledige workflow-automatisering","Tool- en app-integraties","Automatische lead opvolging","Wekelijkse optimalisatie"],h:false},
];
export default function PricingCardsNL(){
  return(
    <section style={{padding:"48px 24px 64px",background:"#000005"}}>
      <div style={{maxWidth:900,margin:"0 auto"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          {P.map(p=>(
            <div key={p.n} style={{padding:"28px",borderRadius:"16px",border:p.h?"1px solid rgba(255,0,170,.5)":"1px solid rgba(255,255,255,.1)",background:p.h?"linear-gradient(135deg,rgba(255,0,170,.08),rgba(119,0,255,.05))":"rgba(255,255,255,.03)",position:"relative",overflow:"hidden"}}>
              {p.h&&<div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg,#ff00aa,#7700ff,#00aaff)"}}/>}
              <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:"16px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
                  <span style={{fontSize:"24px"}}>{p.i}</span>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"4px"}}>
                      <span style={{fontFamily:"'Inter',sans-serif",fontSize:"18px",fontWeight:700,color:"#fff"}}>{p.n}</span>
                      <span style={{fontSize:"10px",fontWeight:600,padding:"2px 10px",borderRadius:"100px",border:p.h?"1px solid rgba(255,0,170,.5)":"1px solid rgba(255,255,255,.2)",color:p.h?"#ff00aa":"rgba(255,255,255,.5)"}}>{p.t}</span>
                    </div>
                    <p style={{fontSize:"13px",color:"rgba(255,255,255,.65)",lineHeight:1.6,maxWidth:"480px",margin:0}}>{p.d}</p>
                  </div>
                </div>
                <div style={{textAlign:"right",flexShrink:0}}>
                  <div style={{display:"flex",alignItems:"baseline",gap:"6px",justifyContent:"flex-end"}}>
                    <span style={{fontFamily:"'Inter',sans-serif",fontSize:"32px",fontWeight:800,color:"#fff"}}>{"€"+p.p}</span>
                    <span style={{fontSize:"12px",color:"rgba(255,255,255,.4)"}}>eenmalig (vanaf)</span>
                  </div>
                  <div style={{fontSize:"13px",color:"#ff00aa",fontWeight:600}}>{"+ €"+p.m+" / maand"}</div>
                </div>
              </div>
              <div style={{marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
                <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
                  {p.f.map(x=>(<div key={x} style={{display:"flex",gap:"6px",fontSize:"12px",color:"rgba(255,255,255,.75)",alignItems:"center"}}><span style={{color:"#ff00aa"}}>✓</span>{x}</div>))}
                </div>
                <a href={"mailto:hello@conneqtai.com?subject=Interesse in het "+p.n+" pakket&body=Hallo ConneqtAI,%0D%0A%0D%0AIk heb interesse in het "+p.n+" pakket (€"+p.p+" eenmalig + €"+p.m+"/maand).%0D%0A%0D%0AKun je contact met mij opnemen?%0D%0A%0D%0AMet vriendelijke groet,"} style={{display:"inline-flex",alignItems:"center",gap:"6px",padding:"11px 22px",borderRadius:"8px",background:p.h?"linear-gradient(135deg,#ff00aa,#7700ff)":"rgba(255,255,255,.08)",border:p.h?"none":"1px solid rgba(255,255,255,.15)",color:"#fff",textDecoration:"none",fontSize:"13px",fontWeight:600,flexShrink:0}}>Neem contact op →</a>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:"32px",fontSize:"12px",color:"rgba(255,255,255,.35)"}}>Alle pakketten inclusief onboarding, training en 30 dagen support na livegang. Prijzen excl. btw. Definitieve prijs afhankelijk van projectomvang.</div>
      </div>
    </section>
  );
}
