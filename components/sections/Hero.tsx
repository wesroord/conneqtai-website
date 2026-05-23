export default function Hero() {
  return (
    <section style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",position:"relative",overflow:"hidden",padding:"120px 1.5rem 80px"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 90% 70% at 50% -10%,rgba(108,99,255,0.28) 0%,transparent 60%),radial-gradient(ellipse 60% 50% at 90% 90%,rgba(0,212,170,0.12) 0%,transparent 55%),#04040e"}}/>
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)",backgroundSize:"56px 56px",maskImage:"radial-gradient(ellipse 85% 85% at 50% 50%,black 20%,transparent 100%)"}}/>
      <div style={{position:"absolute",width:"min(600px,90vw)",height:"min(600px,90vw)",borderRadius:"50%",background:"rgba(108,99,255,0.14)",filter:"blur(100px)",top:"-180px",left:"50%",transform:"translateX(-50%)",animation:"orb1 9s ease-in-out infinite"}}/>
      <div style={{position:"absolute",width:"280px",height:"280px",borderRadius:"50%",background:"rgba(0,212,170,0.09)",filter:"blur(80px)",bottom:"10%",right:"5%",animation:"orb2 7s ease-in-out infinite"}}/>
      <div style={{position:"relative",zIndex:2,maxWidth:"820px",margin:"0 auto",width:"100%"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:"0.5rem",fontSize:"0.72rem",fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.45rem 1.125rem",border:"1px solid rgba(108,99,255,0.35)",borderRadius:"100px",background:"rgba(108,99,255,0.08)",color:"#b8b0ff",marginBottom:"2.25rem",backdropFilter:"blur(10px)",animation:"fadeUp 0.8s ease 0.1s both"}}>
          <span style={{width:6,height:6,background:"#00d4aa",borderRadius:"50%",display:"inline-block",animation:"blink 2s ease infinite",boxShadow:"0 0 6px #00d4aa"}}/>
          Intelligent AI systems for modern business
        </div>
        <h1 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(2.8rem,7vw,5.5rem)",fontWeight:800,lineHeight:1.04,letterSpacing:"-0.035em",marginBottom:"1.5rem",color:"#f0f0f8",animation:"fadeUp 0.8s ease 0.2s both"}}>
          AI that transforms<br/>
          <span style={{background:"linear-gradient(135deg,#fff 0%,#b8b0ff 35%,#7c6dff 65%,#00d4aa 100%)",backgroundSize:"300% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"gradShift 6s ease infinite"}}>how you do business.</span>
        </h1>
        <p style={{fontSize:"clamp(1rem,2.5vw,1.2rem)",color:"rgba(240,240,248,0.5)",maxWidth:"580px",margin:"0 auto 2.75rem",lineHeight:1.8,fontWeight:300,animation:"fadeUp 0.8s ease 0.3s both"}}>
          We build AI chatbots, customer support systems and workflow automations that run 24/7 — saving time, cutting costs and growing revenue.
        </p>
        <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap",animation:"fadeUp 0.8s ease 0.4s both"}}>
          <a href="mailto:hello@conneqtai.com" style={{padding:"0.9rem 2.25rem",fontSize:"0.95rem",fontWeight:500,borderRadius:"10px",background:"linear-gradient(135deg,#6c63ff 0%,#a89cff 100%)",color:"#fff",textDecoration:"none",display:"inline-block",boxShadow:"0 0 35px rgba(108,99,255,0.4)"}}>Get in touch →</a>
          <a href="#solutions" style={{padding:"0.9rem 2.25rem",fontSize:"0.95rem",fontWeight:500,borderRadius:"10px",border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.04)",color:"rgba(240,240,248,0.85)",textDecoration:"none",display:"inline-block",backdropFilter:"blur(10px)"}}>View solutions</a>
        </div>
        <div style={{marginTop:"4rem",display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
          {[{n:"24/7",l:"Always online"},{n:"80%",l:"Support automated"},{n:"3x",l:"Faster response"}].map((s,i)=>(
            <div key={s.l} style={{padding:"1rem 1.5rem",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",background:"rgba(255,255,255,0.03)",backdropFilter:"blur(16px)",textAlign:"center",minWidth:"120px",animation:`float 4s ease-in-out ${i*0.4}s infinite`}}>
              <div style={{fontFamily:"'Syne',sans-serif",fontSize:"1.5rem",fontWeight:800,background:"linear-gradient(135deg,#f0f0f8,#b8b0ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{s.n}</div>
              <div style={{fontSize:"0.7rem",color:"rgba(240,240,248,0.4)",letterSpacing:"0.06em",textTransform:"uppercase",marginTop:"0.2rem"}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
