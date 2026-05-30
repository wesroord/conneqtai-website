const F=[
  {q:"How long does it take to go live?",a:"Most chatbots are live within 2 to 4 weeks from our first conversation. I handle everything, you just need to provide the required information."},
  {q:"Do I need technical knowledge?",a:"Zero. I build, install and maintain everything. You just use it."},
  {q:"What if the chatbot says something wrong?",a:"I train every system extensively before launch. If something is wrong after launch, I fix it within 24 hours. That is what the monthly fee is for."},
  {q:"How does payment work?",a:"Payment is split in two. You pay 50% upfront so I can start building, and the remaining 50% upon delivery of the chatbot. The monthly fee only starts after the chatbot goes live."},
  {q:"Are the prices fixed?",a:"The prices shown are starting prices. The final price depends on the size and complexity of the project. I always provide a clear quote before we start, so there are no surprises."},
  {q:"Can I upgrade my package later?",a:"Absolutely. Most clients start with Starter and upgrade to Growth or Pro once they see the results. The transition is seamless."},
  {q:"What tools does it work with?",a:"I integrate with HubSpot, Salesforce, Monday, Slack, WhatsApp, email platforms and hundreds of other tools. WhatsApp and CRM are included from the Pro package."},
  {q:"Is there a contract?",a:"No long-term contracts. The monthly fee is month-to-month cancellable. I keep clients because of results, not contracts."},
];
export default function PricingFAQ(){
  return(
    <section style={{padding:"48px 24px 80px",background:"#020010",borderTop:"1px solid rgba(255,255,255,.07)"}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px,4vw,28px)",fontWeight:800,color:"#fff",marginBottom:"28px",letterSpacing:"-.02em"}}>Common questions.</h2>
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
