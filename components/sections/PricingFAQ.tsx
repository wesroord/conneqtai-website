const F=[
  {q:"How long does it take to go live?",a:"Most systems are live within 2 to 4 weeks from our first conversation. We handle everything, you just need to give us access to your content and tools."},
  {q:"Do I need technical knowledge?",a:"Zero. We build, install and maintain everything. You just use it."},
  {q:"What if the AI says something wrong?",a:"We train every system extensively before launch. If something is wrong after launch, we fix it within 24 hours, that is what the monthly fee is for."},
  {q:"Can I upgrade my package later?",a:"Absolutely. Most clients start with the Chatbot package and upgrade once they see the results. We make the transition seamless."},
  {q:"What tools does it work with?",a:"We integrate with HubSpot, Salesforce, Monday, Slack, WhatsApp, email platforms and hundreds of other tools."},
  {q:"Is there a contract?",a:"No long-term contracts. The monthly fee is month-to-month. We keep clients because of results, not contracts."}
];
export default function PricingFAQ(){
  return(
    <section style={{padding:"48px 24px 80px",background:"#020010",borderTop:"1px solid rgba(255,255,255,.07)"}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px,4vw,28px)",fontWeight:800,color:"#fff",marginBottom:"28px",letterSpacing:"-.02em"}}>Common questions.</h2>
        <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"rgba(255,255,255,.07)",borderRadius:"12px",overflow:"hidden"}}>
          {F.map(f=>(
            <div key={f.q} style={{padding:"22px 24px",background:"#000005"}}>
              <div style={{fontFamily:"'Inter',sans-serif",fontSize:"14px",fontWeight:600,color:"#fff",marginBottom:"8px",textAlign:"center" as const}}>{f.q}</div>
              <div style={{fontSize:"13px",color:"rgba(255,255,255,.6)",lineHeight:1.7}}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
