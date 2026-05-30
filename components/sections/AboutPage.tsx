export default function AboutPage(){
  return(
    <div style={{background:"#000005",minHeight:"100vh"}}>
      <section style={{padding:"80px 24px 64px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 100% 80% at 50% 0%,rgba(119,0,255,.18) 0%,transparent 60%),#000005",zIndex:0}}/>
        <div style={{position:"relative",zIndex:2,maxWidth:"900px",margin:"0 auto"}}>
          <span style={{fontSize:"11px",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:"#ff00aa",display:"block",marginBottom:"16px"}}>About</span>
          <h1 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(32px,6vw,52px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.1,color:"#fff",marginBottom:"24px"}}>Built by someone who<br/><span className="chrome">actually uses AI every day.</span></h1>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",gap:"48px",marginTop:"48px",alignItems:"start"}}>
            <div>
              <div style={{width:"80px",height:"80px",borderRadius:"20px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px",marginBottom:"24px"}}>👋</div>
              <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"28px",fontWeight:800,color:"#fff",marginBottom:"8px",letterSpacing:"-.02em"}}>Wes Roord</h2>
              <p style={{fontSize:"13px",color:"#ff00aa",fontWeight:600,marginBottom:"24px",letterSpacing:".04em",textTransform:"uppercase"}}>Founder, ConneqtAI</p>
              <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                {[
                  {icon:"🏢",label:"E-commerce Specialist","val":"Sleiderink Bouwmaterialen"},
                  {icon:"🏓",label:"Owner","val":"PadelTown"},
                  {icon:"📍",label:"Location","val":"Wherever my laptop is"},
                  {icon:"🎂",label:"Born","val":"April 22, 1999"},
                ].map(item=>(
                  <div key={item.label} style={{display:"flex",gap:"14px",alignItems:"center",padding:"14px 18px",borderRadius:"12px",border:"1px solid rgba(255,255,255,.07)",background:"rgba(255,255,255,.02)"}}>
                    <span style={{fontSize:"20px"}}>{item.icon}</span>
                    <div>
                      <div style={{fontSize:"10px",color:"rgba(255,255,255,.4)",textTransform:"uppercase",letterSpacing:".08em",marginBottom:"2px"}}>{item.label}</div>
                      <div style={{fontSize:"14px",color:"#fff",fontWeight:500}}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
              <div style={{padding:"28px",borderRadius:"16px",border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.02)"}}>
                <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",fontWeight:700,color:"#fff",marginBottom:"12px"}}>How it started</h3>
                <p style={{fontSize:"14px",color:"rgba(255,255,255,.7)",lineHeight:1.8}}>Through my work at Sleiderink I got introduced to AI tools early on. It grabbed me straight away. At home I started experimenting, building things and testing them out. I quickly saw how big the impact could be for businesses and knew: I want to do something with this.</p>
              </div>
              <div style={{padding:"28px",borderRadius:"16px",border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.02)"}}>
                <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",fontWeight:700,color:"#fff",marginBottom:"12px"}}>The first clients</h3>
                <p style={{fontSize:"14px",color:"rgba(255,255,255,.7)",lineHeight:1.8}}>I started applying what I built to businesses around me. For free. Just to see what happened. The results were immediate. Business owners who were drowning in repetitive messages suddenly had their evenings back. That reaction — that relief — is what made me realise this needed to be a business.</p>
              </div>
              <div style={{padding:"28px",borderRadius:"16px",border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.02)"}}>
                <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",fontWeight:700,color:"#fff",marginBottom:"12px"}}>Why ConneqtAI</h3>
                <p style={{fontSize:"14px",color:"rgba(255,255,255,.7)",lineHeight:1.8}}>Most AI tools are built for enterprises with big budgets and dedicated IT teams. I wanted to bring that same power to every ambitious small business. A chatbot that knows your business inside out, works while you sleep and pays for itself within a month. That is ConneqtAI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:"0 24px 64px"}}>
        <div style={{maxWidth:"900px",margin:"0 auto"}}>
          <div style={{padding:"48px",borderRadius:"20px",border:"1px solid rgba(255,0,170,.2)",background:"rgba(255,0,170,.04)",position:"relative",overflow:"hidden",textAlign:"center"}}>
            <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:400,height:200,background:"radial-gradient(ellipse,rgba(255,0,170,.1) 0%,transparent 70%)",pointerEvents:"none"}}/>
            <div style={{position:"relative",zIndex:1}}>
              <div style={{fontSize:"48px",marginBottom:"16px"}}>🎯</div>
              <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px,4vw,32px)",fontWeight:800,color:"#fff",marginBottom:"16px",letterSpacing:"-.02em"}}>My mission</h2>
              <p style={{fontSize:"16px",color:"rgba(255,255,255,.8)",lineHeight:1.85,maxWidth:"600px",margin:"0 auto 32px"}}>Every business deserves a chatbot that actually works. Not a generic template. Not a tool you have to figure out yourself. A real AI system, built on your data, trained in your voice, working for your customers 24 hours a day. I exist to make that accessible to every ambitious business, regardless of size.</p>
              <div style={{position:"relative",display:"inline-block"}}>
                <div style={{position:"absolute",inset:"-3px",borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",zIndex:-1,animation:"glowRot 3s linear infinite",filter:"blur(10px)",opacity:.55}}/>
                <a href="mailto:hello@conneqtai.com" style={{position:"relative",padding:"14px 32px",fontSize:"14px",fontWeight:700,borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",display:"inline-block"}}>Work with me</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
