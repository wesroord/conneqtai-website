const F=[
  {q:"Hoe lang duurt het voordat het live is?",a:"De meeste chatbots zijn binnen 2 tot 4 weken na ons eerste gesprek live. Ik regel alles, jij hoeft alleen de benodigde informatie aan te leveren."},
  {q:"Heb ik technische kennis nodig?",a:"Nul. Ik bouw, installeer en onderhoud alles. Jij gebruikt het gewoon."},
  {q:"Wat als de chatbot iets verkeerds zegt?",a:"Ik train elk systeem uitgebreid voor de livegang. Als er daarna iets niet klopt, los ik het binnen 24 uur op. Dat is waar de maandelijkse fee voor is."},
  {q:"Hoe werkt de betaling?",a:"De betaling gaat in twee delen. Je betaalt 50% voor aanvang zodat ik kan starten, en de overige 50% bij oplevering van de chatbot. De maandelijkse fee gaat pas in vanaf de livegang van de chatbot."},
  {q:"Zijn de prijzen vast?",a:"De getoonde prijzen zijn vanaf-prijzen. De definitieve prijs hangt af van de omvang en complexiteit van het project. Je krijgt altijd een duidelijke offerte voordat we starten, zodat er geen verrassingen zijn."},
  {q:"Kan ik later upgraden naar een groter pakket?",a:"Absoluut. De meeste klanten starten met Starter en upgraden naar Growth of Pro zodra ze de resultaten zien. De overstap verloopt naadloos."},
  {q:"Met welke tools werkt het?",a:"Ik integreer met HubSpot, Salesforce, Monday, Slack, WhatsApp, e-mailplatforms en honderden andere tools. WhatsApp en CRM zijn inbegrepen vanaf het Pro pakket."},
  {q:"Zit ik vast aan een contract?",a:"Geen langlopende contracten. De maandelijkse fee is maand-tot-maand opzegbaar. Ik behoud klanten op basis van resultaten, niet contracten."},
];
export default function PricingFAQNL(){
  return(
    <section style={{padding:"48px 24px 80px",background:"#020010",borderTop:"1px solid rgba(255,255,255,.07)"}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px,4vw,28px)",fontWeight:800,color:"#fff",marginBottom:"28px",letterSpacing:"-.02em"}}>Veelgestelde vragen.</h2>
        <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"rgba(255,255,255,.07)",borderRadius:"12px",overflow:"hidden"}}>
          {F.map(f=>(
            <div key={f.q} style={{padding:"22px 24px",background:"#000005"}}>
              <div style={{fontFamily:"'Inter',sans-serif",fontSize:"14px",fontWeight:600,color:"#fff",marginBottom:"8px"}}>{f.q}</div>
              <div style={{fontSize:"13px",color:"rgba(255,255,255,.7)",lineHeight:1.7}}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
