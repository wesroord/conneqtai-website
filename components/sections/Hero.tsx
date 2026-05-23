export default function Hero() {
  return (
    <section style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",position:"relative",overflow:"hidden",padding:"100px 1.5rem 60px"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 90% 70% at 50% -10%,rgba(108,99,255,0.28) 0%,transparent 60%),radial-gradient(ellipse 60% 50% at 90% 90%,rgba(0,212,170,0.12) 0%,transparent 55%),#04040e"}}/>
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)",backgroundSize:"56px 56px",maskImage:"radial-gradient(ellipse 85% 85% at 50% 50%,black 20%,transparent 100%)"}}/>
      <div style={{position:"absolute",width:"min(500px,80vw)",height:"min(500px,80vw)",borderRadius:"50%",background:"rgba(108,99,255,0.14)",filter:"blur(100px)",top:"-100px",left:"50%",transform:"translateX(-50%)",animation:"orb1 9s ease-in-out infinite"}}/>
      <div style={{position:"relative",zIndex:2,maxWidth:"820px",margin:"0 auto",width:"100%"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:"0.5rem",fontSize:"0.7rem",fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.4rem 1rem",border:"1px solid rgba(108,99,255,0.35)",borderRadius:"100px",background:"rgba(108,99,255,0.08)",color:"#b8b0ff",marginBottom:"1.75rem"}}>
          <span style={{width:5,height:5,background:"#00d4aa",borderRadius:"50%",display:"inline-block",animation:"blink 2s ease infinite"}}/>
          AI systems for modern business
        </div>
        <h1 style={{fontFamily:"'Syne',sans-serif",fontSize:"min(12vw,4.5rem)",fontWeight:800,lineHeight:1.08,letterSpacing:"-0.03em",marginBottom:"1.25rem",color:"#f0f0f8"}}>
          AI that transforms<br/>
          <span style={{background:"linear-gradient(135deg,#fff 0%,#b8b0ff 35%,#7c6dff 65%,#00d4aa 100%)",backgroundSize:"300% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"gradShift 6s ease infinite"}}>how you do business.</span>
        </h1>
        <p style={{fontSize:"min(4.5vw,1.1rem)",color:"rgba(240,240,248,0.55)",maxWidth:"540px",margin:"0 auto 2rem",lineHeight:1.7,fontWeight:300}}>
          We build AI chatbots, customer support systems and workflow automations that run 24/7 — saving time, cutting costs and growing revenue.
        </p>
        <div style={{display:"flex",gap:"0.875rem",justifyContent:"center",flexWrap:"wrap"}}>
          <a href="mailto:hello@conneqtai.com" style={{padding:"0.875rem 1.75rem",fontSize:"0.9rem",fontWeight:500,borderRadius:"10px",background:"linear-gradient(135deg,#6c63ff,#a89cff)",color:"#fff",textDecoration:"none",display:"inline-block",boxShadow:"0 0 30px rgba(108,99,255,0.4)"}}>Get in touch →</a>
          <a href="#solutions" style={{padding:"0.875rem 1.75rem",fontSize:"0.9rem",fontWeight:500,borderRadius:"10px",border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.04)",color:"rgba(240,240,248,0.8)",textDecoration:"none",display:"inline-block"}}>View solutions</a>
        </div>
      </div>
    </section>
  );
}
