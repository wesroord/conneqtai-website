const F=[
  {q:"Hoe lang duurt het voordat het live is?",a:"De meeste systemen zijn binnen 2 tot 4 weken na ons eerste gesprek live. Wij regelen alles, jij hoeft alleen toegang te geven tot je content en tools."},
  {q:"Heb ik technische kennis nodig?",a:"Nul. Wij bouwen, installeren en onderhouden alles. Jij gebruikt het gewoon."},
  {q:"Wat als de AI iets verkeerds zegt?",a:"We trainen elk systeem uitgebreid voor de livegang. Als er na de lancering iets niet klopt, lossen we het binnen 24 uur op, dat is waarvoor het maandelijkse bedrag is."},
  {q:"Kan ik later upgraden naar een groter pakket?",a:"Absoluut. De meeste klanten starten met het Chatbot pakket en upgraden zodra ze de resultaten zien. Wij maken de overstap naadloos."},
  {q:"Met welke tools werkt het?",a:"We integreren met HubSpot, Salesforce, Monday, Slack, WhatsApp, e-mailplatforms en honderden andere tools."},
  {q:"Zit ik vast aan een contract?",a:"Geen langlopende contracten. Het maandelijkse bedrag is maand-tot-maand opzegbaar. We behouden klanten op basis van resultaten, niet contracten."}
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
