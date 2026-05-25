const P=[
  {i:"🚀",n:"Starter",t:"Meest gekozen",p:"997",m:"147",d:"Een slimme AI-chatbot die 24/7 voor jouw bedrijf werkt. Beantwoordt vragen, vangt leads op en slaapt nooit.",f:["AI-chatbot op je website","Getraind op jouw producten en FAQ","Automatische lead capture","Eigen tone of voice","Maandelijks onderhoud en updates"],h:false},
  {i:"⚡",n:"Growth",t:"Beste waarde",p:"2.497",m:"197",d:"Volledige AI-klantenservice die e-mails en chat automatisch afhandelt — zodat jouw team zich richt op wat telt.",f:["Alles uit Starter","AI e-mail en chat support","Auto-escalatie naar je team","HubSpot CRM-integratie","Maandelijkse rapportage"],h:true},
  {i:"🏢",n:"Enterprise",t:"Max ROI",p:"4.997",m:"397",d:"Volledige workflow-automatisering die al je tools verbindt en repetitief werk volledig elimineert.",f:["Alles uit Growth","Volledige workflow-automatisering","Tool- en app-integraties","Automatische lead opvolging","Wekelijkse optimalisatie"],h:false},
];
export default function PricingCardsNL(){
  return(
    <section style={{padding:"48px 24px 64px",background:"#000005"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,280px),1fr))",gap:"16px"}}>
          {P.map(p=>(
            <div key={p.n} style={{padding:"28px 22px",borderRadius:"16px",border:p.h?"1px solid rgba(255,0,170,.5)":"1px solid rgba(255,255,255,.1)",background:p.h?"linear-gradient(135deg,rgba(255,0,170,.1),rgba(119,0,255,.07))":"rgba(255,255,255,.03)",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column"}}>
              {p.h&&<div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg,#ff00aa,#7700ff,#00aaff)"}}/>}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"}}>
                <span style={{fontSize:"22px"}}>{p.i}</span>
                <span style={{fontFamily:"'Inter',sans-serif",fontSize:"10px",fontWeight:600,padding:"3px 10px",borderRadius:"100px",border:p.h?"1px solid rgba(255,0,170,.5)":"1px solid rgba(255,255,255,.2)",color:p.h?"#ff00aa":"rgba(255,255,255,.6)"}}>{p.t}</span>
              </div>
              <div style={{fontFamily:"'Inter',sans-serif",fontSize:"18px",fontWeight:700,color:"#fff",marginBottom:"10px"}}>{p.n}</div>
              <div style={{marginBottom:"4px",display:"flex",alignItems:"baseline",gap:"6px"}}>
                <span style={{fontFamily:"'Inter',sans-serif",fontSize:"28px",fontWeight:700,color:"#fff"}}>{"€"+p.p}</span>
                <span style={{fontSize:"12px",color:"rgba(255,255,255,.5)"}}>eenmalig (vanaf)</span>
              </div>
              <div style={{fontFamily:"'Inter',sans-serif",fontSize:"12px",color:"#ff00aa",marginBottom:"14px",fontWeight:500}}>{"+ €"+p.m+" / maand"}</div>
              <p style={{fontSize:"13px",color:"rgba(255,255,255,.65)",lineHeight:1.65,marginBottom:"18px",flex:1}}>{p.d}</p>
              <div style={{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"22px"}}>
                {p.f.map(x=>(<div key={x} style={{display:"flex",gap:"8px",fontSize:"12px",color:"rgba(255,255,255,.75)"}}><span style={{color:"#ff00aa",flexShrink:0}}>✓</span>{x}</div>))}
              </div>
              <a href={"mailto:hello@conneqtai.com?subject=Interesse in het "+p.n+" pakket&body=Hallo ConneqtAI,%0D%0A%0D%0AIk heb interesse in het "+p.n+" pakket (€"+p.p+" eenmalig + €"+p.m+"/maand).%0D%0A%0D%0AKun je contact met mij opnemen?%0D%0A%0D%0AMet vriendelijke groet,"} style={{display:"block",textAlign:"center",padding:"12px 16px",borderRadius:"8px",background:p.h?"linear-gradient(135deg,#ff00aa,#7700ff)":"rgba(255,255,255,.08)",border:p.h?"none":"1px solid rgba(255,255,255,.15)",color:"#fff",textDecoration:"none",fontFamily:"'Inter',sans-serif",fontSize:"13px",fontWeight:600}}>Neem contact op →</a>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:"32px",fontFamily:"'Inter',sans-serif",fontSize:"12px",color:"rgba(255,255,255,.35)"}}>
          Alle pakketten inclusief onboarding, training en 30 dagen support na livegang. Prijzen excl. btw. Definitieve prijs afhankelijk van projectomvang.
        </div>
      </div>
    </section>
  );
}
