export default function Hero() {
  return (
    <section style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",position:"relative",overflow:"hidden",padding:"100px 1.5rem 60px"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% -5%,rgba(108,99,255,0.22) 0%,transparent 65%),radial-gradient(ellipse 50% 40% at 85% 85%,rgba(0,212,170,0.1) 0%,transparent 55%),#05050c"}}/>
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",backgroundSize:"52px 52px",maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)"}}/>
      <div style={{position:"relative",zIndex:2,maxWidth:"800px",margin:"0 auto",width:"100%"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:"0.5rem",fontSize:"0.72rem",fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.4rem 1rem",border:"1px solid rgba(108,99,255,0.3)",borderRadius:"100px",background:"rgba(108,99,255,0.08)",color:"#a89cff",marginBottom:"2rem"}}>
          <span style={{width:6,height:6,background:"#00d4aa",borderRadius:"50%",display:"inline-block"}}/>
          AI solutions for modern businesses
        </div>
        <h1 style={{fontFamily:"sans-serif",fontSize:"clamp(2.6rem,6vw,5rem)",fontWeight:800,lineHeight:1.05,letterSpacing:"-0.03em",marginBottom:"1.5rem",color:"#f0f0f8"}}>
          AI systems that<br/>
          <span style={{background:"linear-gradient(135deg,#fff 0%,#a89cff 40%,#00d4aa 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>actually work</span><br/>
          for your business.
        </h1>
        <p style={{fontSize:"clamp(0.95rem,2vw,1.15rem)",color:"rgba(240,240,248,0.5)",maxWidth:"560px",margin:"0 auto 2.5rem",lineHeight:1.75,fontWeight:300}}>
          ConneqtAI builds intelligent AI agents, chatbots and automations that save time, improve customer experience and increase efficiency.
        </p>
        <div style={{display:"flex",gap:"0.875rem",justifyContent:"center",flexWrap:"wrap"}}>
          <a href="mailto:hello@conneqtai.com" style={{padding:"0.875rem 2rem",fontSize:"0.9rem",fontWeight:500,borderRadius:"10px",background:"linear-gradient(135deg,#6c63ff,#a89cff)",color:"#fff",textDecoration:"none",boxShadow:"0 0 30px rgba(108,99,255,0.35)",display:"inline-block"}}>Get in touch →</a>
          <a href="#solutions" style={{padding:"0.875rem 2rem",fontSize:"0.9rem",fontWeight:500,borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.04)",color:"rgba(240,240,248,0.8)",textDecoration:"none",display:"inline-block"}}>View solutions</a>
        </div>
      </div>
    </section>
  );
}
