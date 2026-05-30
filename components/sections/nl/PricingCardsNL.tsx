"use client";
import { useState } from "react";
const P=[
  {i:"🚀",n:"Starter",t:"Meest gekozen",p:"1.750",m:"375",d:"Een slimme AI-chatbot die 24/7 voor jouw bedrijf werkt. Beantwoordt vragen, vangt leads op en slaapt nooit.",f:["AI-chatbot op je website","Getraind op jouw bedrijf","Lead capture","Eigen tone of voice","Basis optimalisatie","Maandelijks onderhoud"],h:false},
  {i:"⚡",n:"Growth",t:"Beste waarde",p:"3.750",m:"595",d:"Geavanceerde AI die leads slimmer kwalificeert, meerdere databronnen beheert en elke maand verbetert.",f:["Alles uit Starter","Geavanceerde AI-training op jouw bedrijfsdata","Conversatieflows","Slimmere leadkwalificatie","E-mail notificaties","Meerdere databronnen","Maandelijkse optimalisatie en onderhoud"],h:true},
  {i:"🏢",n:"Pro",t:"Max ROI",p:"7.950",m:"895",d:"Het complete AI-systeem met WhatsApp, CRM, afspraakplanner en meertalige ondersteuning.",f:["Alles uit Growth","WhatsApp integratie","CRM koppelingen","Afspraakplanner","Meertalige AI-chatbot","Conversatie analyses en optimalisatie","Prioriteit support","Maandelijkse optimalisatie en onderhoud"],h:false},
];
export default function PricingCardsNL(){
  const [selected, setSelected] = useState(1);
  return(
    <section style={{padding:"48px 24px 64px",background:"#000005"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,280px),1fr))",gap:"16px"}}>
          {P.map((p,i)=>(
            <div key={p.n} onClick={()=>setSelected(i)} style={{padding:"28px 22px",borderRadius:"16px",border:selected===i?"1px solid rgba(255,0,170,.6)":"1px solid rgba(255,255,255,.1)",background:selected===i?"linear-gradient(135deg,rgba(255,0,170,.1),rgba(119,0,255,.07))":"rgba(255,255,255,.03)",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",cursor:"pointer",transition:"all 0.25s",boxShadow:selected===i?"0 0 30px rgba(255,0,170,.15)":"none"}}>
              {selected===i&&<div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg,#ff00aa,#7700ff,#00aaff)"}}/>}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"}}>
                <span style={{fontSize:"22px"}}>{p.i}</span>
                <span style={{fontFamily:"'Inter',sans-serif",fontSize:"10px",fontWeight:600,padding:"3px 10px",borderRadius:"100px",border:selected===i?"1px solid rgba(255,0,170,.5)":"1px solid rgba(255,255,255,.2)",color:selected===i?"#ff00aa":"rgba(255,255,255,.6)"}}>{p.t}</span>
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
              <a href={"mailto:hello@conneqtai.com?subject=Interesse in het "+p.n+" pakket&body=Hallo ConneqtAI,%0D%0A%0D%0AIk heb interesse in het "+p.n+" pakket (€"+p.p+" eenmalig + €"+p.m+"/maand).%0D%0A%0D%0AKun je contact met mij opnemen?%0D%0A%0D%0AMet vriendelijke groet,"} onClick={e=>e.stopPropagation()} style={{display:"block",textAlign:"center",padding:"12px 16px",borderRadius:"8px",background:selected===i?"linear-gradient(135deg,#ff00aa,#7700ff)":"rgba(255,255,255,.08)",border:selected===i?"none":"1px solid rgba(255,255,255,.15)",color:"#fff",textDecoration:"none",fontFamily:"'Inter',sans-serif",fontSize:"13px",fontWeight:600}}>Neem contact op →</a>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:"32px",fontFamily:"'Inter',sans-serif",fontSize:"12px",color:"rgba(255,255,255,.6)"}}>
          Prijzen zijn vanaf-prijzen en kunnen afwijken afhankelijk van de projectomvang. Er wordt 50% aanbetaald voor aanvang en 50% bij oplevering van de chatbot. De maandelijkse fee gaat in vanaf de livegang. Excl. btw.
        </div>
      </div>
    </section>
  );
}
