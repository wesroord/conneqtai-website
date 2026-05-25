const S=[{n:"01",t:"AI Chatbots",d:"Slimme branded chatbots die bezoekers betrekken, leads kwalificeren en klanten automatisch converteren, 24/7. Volledig gebouwd op jouw bedrijfsdata.",tags:["24/7 ACTIEF","LEAD CAPTURE","OP MAAT GETRAIND"]},{n:"02",t:"AI Klantenservice",d:"Los tickets op, beantwoord veelgestelde vragen en handel vragen op schaal af zonder één extra personeelslid.",tags:["DIRECT","CRM SYNC","AUTO-ESCALATIE"]},{n:"03",t:"Workflow Automatisering",d:"Verbind je tools, elimineer herhaling en laat complexe processen intelligent verlopen. Schaalt direct.",tags:["INTEGRATIES","NUL HERHALING","ONEINDIG SCHALEN"]}];
const T=["AI CHATBOTS","KLANTENSERVICE","WORKFLOW AUTOMATISERING","LEAD GENERATIE","CRM INTEGRATIE","24/7 BESCHIKBAAR","OP MAAT GETRAIND","AI CHATBOTS","KLANTENSERVICE","WORKFLOW AUTOMATISERING","LEAD GENERATIE","CRM INTEGRATIE","24/7 BESCHIKBAAR","OP MAAT GETRAIND"];
export default function ServicesNL(){return(<><div style={{overflow:"hidden",borderTop:"1px solid rgba(255,255,255,.04)",borderBottom:"1px solid rgba(255,255,255,.04)",background:"#010009"}}><div style={{display:"flex",whiteSpace:"nowrap",animation:"tick3 22s linear infinite"}}>{T.map((t,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:"12px",padding:"9px 18px",fontFamily:"'Inter',sans-serif",fontSize:"9px",letterSpacing:".1em",color:"rgba(255,255,255,.6)",borderRight:"1px solid rgba(255,255,255,.04)",flexShrink:0}}><span style={{width:"3px",height:"3px",borderRadius:"50%",background:"#ff00aa",display:"inline-block"}}/>{t}</div>)}</div></div>
<section id="oplossingen" style={{padding:"44px 22px",background:"#000005"}}>
  <div style={{maxWidth:1100,margin:"0 auto"}}>
    <div style={{fontFamily:"'Inter',sans-serif",fontSize:"9px",letterSpacing:".18em",textTransform:"uppercase",color:"rgba(255,0,170,.6)",marginBottom:"18px",display:"flex",alignItems:"center",gap:"8px"}}>oplossingen<span style={{flex:1,height:"1px",background:"linear-gradient(90deg,rgba(255,0,170,.3),transparent)"}}/></div>
    <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px,5vw,30px)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.08,color:"#fff",marginBottom:"8px"}}>Drie systemen.<br/>Oneindig resultaat.</h2>
    <p style={{fontSize:"12px",color:"rgba(255,255,255,.65)",lineHeight:1.75,marginBottom:"24px",maxWidth:"340px"}}>Alles gebouwd op maat. Nooit templates.</p>
    <div style={{borderTop:"1px solid rgba(255,255,255,.08)"}}>
      {S.map(s=>(
        <div key={s.n} style={{display:"flex",borderBottom:"1px solid rgba(255,255,255,.06)"}}>
          <div style={{fontFamily:"'Inter',sans-serif",fontSize:"10px",color:"rgba(255,0,170,1)",padding:"20px 14px",borderRight:"1px solid rgba(255,255,255,.05)",minWidth:"42px"}}>{s.n}</div>
          <div style={{padding:"20px 16px",flex:1}}>
            <div style={{fontFamily:"'Inter',sans-serif",fontSize:"15px",fontWeight:700,color:"#fff",marginBottom:"5px"}}>{s.t}</div>
            <div style={{fontSize:"11px",color:"rgba(255,255,255,.75)",lineHeight:1.65,marginBottom:"10px"}}>{s.d}</div>
            <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>{s.tags.map(t=><span key={t} style={{fontSize:"9px",padding:"2px 8px",borderRadius:"4px",border:"1px solid rgba(255,0,170,.2)",color:"rgba(255,0,170,.7)",fontFamily:"'Inter',sans-serif"}}>{t}</span>)}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section></>);}
