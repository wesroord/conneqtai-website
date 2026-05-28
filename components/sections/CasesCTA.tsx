export default function CasesCTA(){
  return(
    <section style={{padding:"64px 24px",textAlign:"center",background:"#020010",borderTop:"1px solid rgba(255,255,255,.07)"}}>
      <div style={{maxWidth:"600px",margin:"0 auto"}}>
        <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(24px,5vw,36px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.1,color:"#fff",marginBottom:"12px"}}>Ready for a chatbot<br/><span className="chrome">like PadelTown's?</span></h2>
        <p style={{fontSize:"14px",color:"rgba(255,255,255,.7)",marginBottom:"28px",lineHeight:1.75}}>We will show you exactly what a chatbot can do for your business. Free. No fluff.</p>
        <div style={{position:"relative",display:"inline-block"}}>
          <div style={{position:"absolute",inset:"-3px",borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",zIndex:-1,animation:"glowRot 3s linear infinite",filter:"blur(10px)",opacity:.55}}/>
          <a href="mailto:hello@conneqtai.com?subject=Chatbot enquiry&body=Hi ConneqtAI,%0D%0A%0D%0AI would like to know more about what a chatbot can do for my business.%0D%0A%0D%0ACould you get in touch?%0D%0A%0D%0AKind regards," style={{position:"relative",padding:"14px 32px",fontSize:"14px",fontWeight:600,borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",display:"inline-block"}}>Get in touch</a>
        </div>
      </div>
    </section>
  );
}
