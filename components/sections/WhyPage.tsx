const C = [
  {
    icon: "❌",
    title: "Doing nothing",
    sub: "The hidden cost of standing still",
    col: "rgba(255,60,60,1)",
    border: "rgba(255,60,60,0.2)",
    bg: "rgba(255,60,60,0.04)",
    items: [
      {icon:"💸", text:"Every missed chat is a missed lead. Most visitors leave within 30 seconds if they get no response."},
      {icon:"🕐", text:"Your team wastes hours every week answering the same questions over and over."},
      {icon:"😴", text:"Outside office hours, your business is invisible. No replies, no conversions."},
      {icon:"📉", text:"Competitors with chatbots respond instantly. You respond tomorrow. They win."},
      {icon:"💰", text:"The average business loses €2.000 to €5.000 per month in missed leads and wasted staff time."},
    ]
  },
  {
    icon: "⚠️",
    title: "Standard chatbot tool",
    sub: "Tidio, Intercom, Freshchat",
    col: "rgba(255,180,0,1)",
    border: "rgba(255,180,0,0.2)",
    bg: "rgba(255,180,0,0.04)",
    items: [
      {icon:"🤖", text:"Generic templates that don't know your business, your products or your tone of voice."},
      {icon:"🔧", text:"You have to set it up, train it and maintain it yourself. That takes time you don't have."},
      {icon:"📋", text:"Answers feel robotic and off-brand. Customers notice, and trust drops."},
      {icon:"💳", text:"Monthly subscription costs that add up, without the results to justify them."},
      {icon:"🔌", text:"Limited integrations. CRM sync, WhatsApp and custom flows cost extra or aren't possible."},
    ]
  },
  {
    icon: "✅",
    title: "ConneqtAI chatbot",
    sub: "Built for your business. Nothing else.",
    col: "#ff00aa",
    border: "rgba(255,0,170,0.35)",
    bg: "rgba(255,0,170,0.06)",
    items: [
      {icon:"🎯", text:"100% trained on your data. Your products, your FAQs, your tone. Customers can't tell it's a bot."},
      {icon:"⚡", text:"Responds in under 2 seconds, 24 hours a day, 7 days a week. Never misses a lead."},
      {icon:"📈", text:"Most clients recover their investment within the first month through saved staff time alone."},
      {icon:"🔗", text:"Connects to WhatsApp, CRM, email and booking systems. Everything in one place."},
      {icon:"🛠️", text:"I build it, we install it, we maintain it. You just watch it work."},
    ]
  }
];

const comparison = [
  {feature:"Setup", nothing:"Manual", tool:"Self-service", conneqt:"Done for you"},
  {feature:"Training on your data", nothing:"❌", tool:"⚠️ Limited", conneqt:"✅ Full"},
  {feature:"Response time", nothing:"Hours", tool:"Instant", conneqt:"Instant"},
  {feature:"24/7 availability", nothing:"❌", tool:"✅", conneqt:"✅"},
  {feature:"Custom tone of voice", nothing:"❌", tool:"⚠️ Basic", conneqt:"✅ Full"},
  {feature:"WhatsApp integration", nothing:"❌", tool:"⚠️ Extra cost", conneqt:"✅ Pro plan"},
  {feature:"CRM connection", nothing:"❌", tool:"⚠️ Extra cost", conneqt:"✅ Pro plan"},
  {feature:"Monthly maintenance", nothing:"❌", tool:"Self-managed", conneqt:"✅ Included"},
  {feature:"ROI in month 1", nothing:"❌", tool:"⚠️ Unlikely", conneqt:"✅ Most clients"},
];

export default function WhyPage(){
  return(
    <div style={{background:"#000005",minHeight:"100vh"}}>
      <section style={{padding:"80px 24px 48px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 100% 80% at 50% 0%,rgba(119,0,255,.18) 0%,transparent 60%),#000005",zIndex:0}}/>
        <div style={{position:"relative",zIndex:2,maxWidth:"700px",margin:"0 auto"}}>
          <span style={{fontSize:"11px",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:"#ff00aa",display:"block",marginBottom:"16px"}}>Why ConneqtAI</span>
          <h1 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(32px,6vw,52px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.1,color:"#fff",marginBottom:"16px"}}>Stop losing leads<br/><span className="chrome">while you sleep.</span></h1>
          <p style={{fontSize:"clamp(14px,2vw,16px)",color:"rgba(255,255,255,.7)",maxWidth:"520px",margin:"0 auto",lineHeight:1.75}}>Every hour without a chatbot is money left on the table. See exactly what it costs to wait, and what changes when you don't.</p>
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
            <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px,4vw,32px)",fontWeight:800,color:"#fff",marginBottom:"32px",textAlign:"center",letterSpacing:"-.02em"}}>Side by side comparison</h2>
            <div style={{borderRadius:"16px",overflow:"hidden",border:"1px solid rgba(255,255,255,.08)"}}>
              <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",background:"rgba(255,255,255,.04)",padding:"14px 20px",gap:"8px"}}>
                <div style={{fontSize:"11px",fontWeight:700,color:"rgba(255,255,255,.4)",textTransform:"uppercase",letterSpacing:".08em"}}>Feature</div>
                <div style={{fontSize:"11px",fontWeight:700,color:"rgba(255,60,60,.8)",textTransform:"uppercase",letterSpacing:".08em",textAlign:"center"}}>Nothing</div>
                <div style={{fontSize:"11px",fontWeight:700,color:"rgba(255,180,0,.8)",textTransform:"uppercase",letterSpacing:".08em",textAlign:"center"}}>Standard tool</div>
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
              <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(24px,5vw,36px)",fontWeight:800,color:"#fff",marginBottom:"12px",letterSpacing:"-.02em"}}>Ready to stop losing leads?</h2>
              <p style={{fontSize:"15px",color:"rgba(255,255,255,.7)",marginBottom:"28px",lineHeight:1.75}}>Drop me a message. Clear plan within 24 hours. No fluff.</p>
              <div style={{position:"relative",display:"inline-block"}}>
                <div style={{position:"absolute",inset:"-3px",borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",zIndex:-1,animation:"glowRot 3s linear infinite",filter:"blur(10px)",opacity:.55}}/>
                <a href="mailto:hello@conneqtai.com" style={{position:"relative",padding:"14px 32px",fontSize:"14px",fontWeight:700,borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",display:"inline-block"}}>Get in touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
