const C = [
  {
    icon: "❌",
    title: "Niets doen",
    sub: "De verborgen kosten van stilstaan",
    col: "rgba(255,60,60,1)",
    border: "rgba(255,60,60,0.2)",
    bg: "rgba(255,60,60,0.04)",
    items: [
      {icon:"💸", text:"Elke gemiste chat is een gemiste lead. De meeste bezoekers vertrekken binnen 30 seconden als ze geen reactie krijgen."},
      {icon:"🕐", text:"Je team verspilt elke week uren aan het beantwoorden van dezelfde vragen."},
      {icon:"😴", text:"Buiten kantooruren is je bedrijf onzichtbaar. Geen reacties, geen conversies."},
      {icon:"📉", text:"Concurrenten met een chatbot reageren direct. Jij reageert morgen. Zij winnen."},
      {icon:"💰", text:"Een gemiddeld bedrijf verliest €2.000 tot €5.000 per maand aan gemiste leads en verspilde personeelstijd."},
    ]
  },
  {
    icon: "⚠️",
    title: "Standaard chatbottool",
    sub: "Tidio, Intercom, Freshchat",
    col: "rgba(255,180,0,1)",
    border: "rgba(255,180,0,0.2)",
    bg: "rgba(255,180,0,0.04)",
    items: [
      {icon:"🤖", text:"Generieke templates die jouw bedrijf, producten of tone of voice niet kennen."},
      {icon:"🔧", text:"Je moet hem zelf instellen, trainen en onderhouden. Dat kost tijd die je niet hebt."},
      {icon:"📋", text:"Antwoorden voelen robotachtig en off-brand. Klanten merken het, vertrouwen daalt."},
      {icon:"💳", text:"Maandelijkse abonnementskosten die oplopen, zonder resultaten die het rechtvaardigen."},
      {icon:"🔌", text:"Beperkte integraties. CRM koppeling, WhatsApp en maatwerk flows kosten extra of zijn niet mogelijk."},
    ]
  },
  {
    icon: "✅",
    title: "ConneqtAI chatbot",
    sub: "Gebouwd voor jouw bedrijf. Niets anders.",
    col: "#ff00aa",
    border: "rgba(255,0,170,0.35)",
    bg: "rgba(255,0,170,0.06)",
    items: [
      {icon:"🎯", text:"100% getraind op jouw data. Jouw producten, jouw FAQ, jouw toon. Klanten merken niet dat het een bot is."},
      {icon:"⚡", text:"Reageert binnen 2 seconden, 24 uur per dag, 7 dagen per week. Mist nooit een lead."},
      {icon:"📈", text:"De meeste klanten verdienen hun investering al in de eerste maand terug door besparing op personeelstijd."},
      {icon:"🔗", text:"Koppelt aan WhatsApp, CRM, e-mail en afspraken systemen. Alles op één plek."},
      {icon:"🛠️", text:"Ik bouw het, wij installeren het, wij onderhouden het. Jij kijkt toe hoe het werkt."},
    ]
  }
];

const comparison = [
  {feature:"Installatie", nothing:"Handmatig", tool:"Zelf doen", conneqt:"Ik regel alles"},
  {feature:"Training op jouw data", nothing:"❌", tool:"⚠️ Beperkt", conneqt:"✅ Volledig"},
  {feature:"Reactietijd", nothing:"Uren", tool:"Direct", conneqt:"Direct"},
  {feature:"24/7 beschikbaar", nothing:"❌", tool:"✅", conneqt:"✅"},
  {feature:"Eigen tone of voice", nothing:"❌", tool:"⚠️ Basis", conneqt:"✅ Volledig"},
  {feature:"WhatsApp integratie", nothing:"❌", tool:"⚠️ Extra kosten", conneqt:"✅ Pro pakket"},
  {feature:"CRM koppeling", nothing:"❌", tool:"⚠️ Extra kosten", conneqt:"✅ Pro pakket"},
  {feature:"Maandelijks onderhoud", nothing:"❌", tool:"Zelf beheren", conneqt:"✅ Inbegrepen"},
  {feature:"ROI in maand 1", nothing:"❌", tool:"⚠️ Onwaarschijnlijk", conneqt:"✅ Meeste klanten"},
];

export default function WhyPageNL(){
  return(
    <div style={{background:"#000005",minHeight:"100vh"}}>
      <section style={{padding:"80px 24px 48px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 100% 80% at 50% 0%,rgba(119,0,255,.18) 0%,transparent 60%),#000005",zIndex:0}}/>
        <div style={{position:"relative",zIndex:2,maxWidth:"700px",margin:"0 auto"}}>
          <span style={{fontSize:"11px",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:"#ff00aa",display:"block",marginBottom:"16px"}}>Waarom ConneqtAI</span>
          <h1 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(32px,6vw,52px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.1,color:"#fff",marginBottom:"16px"}}>Stop met leads verliezen<br/><span className="chrome">terwijl jij slaapt.</span></h1>
          <p style={{fontSize:"clamp(14px,2vw,16px)",color:"rgba(255,255,255,.7)",maxWidth:"520px",margin:"0 auto",lineHeight:1.75}}>Elk uur zonder chatbot is geld dat je laat liggen. Bekijk precies wat het kost om te wachten, en wat er verandert als je dat niet doet.</p>
        </div>
      </section>

      <section style={{padding:"0 24px 64px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:"20px",marginBottom:"64px"}}>
            {C.map(c=>(
              <div key={c.title} style={{borderRadius:"20px",border:`1px solid ${c.border}`,background:c.bg,overflow:"hidden",display:"flex",flexDirection:"column"}}>
                <div style={{padding:"28px 28px 20px",borderBottom:`1px solid ${c.border}`}}>
                  <div style={{fontSize:"32px",marginBottom:"12px"}}>{c.icon}</div>
                  <div style={{fontFamily:"'Inter',sans-serif",fontSize:"20px",fontWeight:800,color:"#fff",marginBottom:"4px"}}>{c.title}</div>
                  <div style={{fontSize:"12px",color:c.col,fontWeight:500}}>{c.sub}</div>
                </div>
                <div style={{padding:"24px 28px",display:"flex",flexDirection:"column",gap:"16px",flex:1}}>
                  {c.items.map((item,i)=>(
                    <div key={i} style={{display:"flex",gap:"12px",alignItems:"flex-start"}}>
                      <span style={{fontSize:"16px",flexShrink:0,marginTop:"1px"}}>{item.icon}</span>
                      <span style={{fontSize:"13px",color:"rgba(255,255,255,.75)",lineHeight:1.65}}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{marginBottom:"64px"}}>
            <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px,4vw,32px)",fontWeight:800,color:"#fff",marginBottom:"32px",textAlign:"center",letterSpacing:"-.02em"}}>Vergelijking op een rij</h2>
            <div style={{borderRadius:"16px",overflow:"hidden",border:"1px solid rgba(255,255,255,.08)"}}>
              <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",background:"rgba(255,255,255,.04)",padding:"14px 20px",gap:"8px"}}>
                <div style={{fontSize:"11px",fontWeight:700,color:"rgba(255,255,255,.4)",textTransform:"uppercase",letterSpacing:".08em"}}>Onderdeel</div>
                <div style={{fontSize:"11px",fontWeight:700,color:"rgba(255,60,60,.8)",textTransform:"uppercase",letterSpacing:".08em",textAlign:"center"}}>Niets</div>
                <div style={{fontSize:"11px",fontWeight:700,color:"rgba(255,180,0,.8)",textTransform:"uppercase",letterSpacing:".08em",textAlign:"center"}}>Standaard tool</div>
                <div style={{fontSize:"11px",fontWeight:700,color:"#ff00aa",textTransform:"uppercase",letterSpacing:".08em",textAlign:"center"}}>ConneqtAI</div>
              </div>
              {comparison.map((row,i)=>(
                <div key={row.feature} style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",padding:"14px 20px",gap:"8px",background:i%2===0?"#000005":"rgba(255,255,255,.02)",borderTop:"1px solid rgba(255,255,255,.05)"}}>
                  <div style={{fontSize:"13px",color:"rgba(255,255,255,.8)",fontWeight:500}}>{row.feature}</div>
                  <div style={{fontSize:"12px",color:"rgba(255,100,100,.8)",textAlign:"center"}}>{row.nothing}</div>
                  <div style={{fontSize:"12px",color:"rgba(255,200,50,.8)",textAlign:"center"}}>{row.tool}</div>
                  <div style={{fontSize:"12px",color:"rgba(255,0,170,.9)",textAlign:"center",fontWeight:600}}>{row.conneqt}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{textAlign:"center",padding:"48px 24px",borderRadius:"20px",border:"1px solid rgba(255,0,170,.2)",background:"rgba(255,0,170,.04)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:400,height:200,background:"radial-gradient(ellipse,rgba(255,0,170,.1) 0%,transparent 70%)",pointerEvents:"none"}}/>
            <div style={{position:"relative",zIndex:1}}>
              <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(24px,5vw,36px)",fontWeight:800,color:"#fff",marginBottom:"12px",letterSpacing:"-.02em"}}>Klaar om te stoppen met leads verliezen?</h2>
              <p style={{fontSize:"15px",color:"rgba(255,255,255,.7)",marginBottom:"28px",lineHeight:1.75}}>Stuur mij een bericht. Helder plan binnen 24 uur. Geen gedoe.</p>
              <div style={{position:"relative",display:"inline-block"}}>
                <div style={{position:"absolute",inset:"-3px",borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",zIndex:-1,animation:"glowRot 3s linear infinite",filter:"blur(10px)",opacity:.55}}/>
                <a href="mailto:hello@conneqtai.nl" style={{position:"relative",padding:"14px 32px",fontSize:"14px",fontWeight:700,borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",display:"inline-block"}}>Neem contact op</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
