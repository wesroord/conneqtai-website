export default function CasesCTA(){
  return(
    <section style={{padding:"64px 24px",textAlign:"center",background:"#020010",borderTop:"1px solid rgba(255,255,255,.07)"}}>
      <div style={{maxWidth:"600px",margin:"0 auto"}}>
        <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(24px,5vw,36px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.1,color:"#fff",marginBottom:"12px"}}>Ready to see results<br/><span className="chrome">like PadelTown?</span></h2>
        <p style={{fontSize:"14px",color:"rgba(255,255,255,.6)",marginBottom:"28px",lineHeight:1.75}}>We will map out exactly what AI can do for your business. Free. No fluff.</p>
        <div style={{position:"relative",display:"inline-block"}}>
          <div style={{position:"absolute",inset:"-3px",borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",zIndex:-1,animation:"glowRot 3s linear infinite",filter:"blur(10px)",opacity:.55}}/>
          <a href="mailto:hello@conneqtai.com?subject=Gratis strategie gesprek&body=Hallo ConneqtAI,%0D%0A%0D%0AIk wil graag meer weten over wat AI kan betekenen voor mijn bedrijf.%0D%0A%0D%0AKun je contact met mij opnemen?%0D%0A%0D%0AMet vriendelijke groet," style={{position:"relative",padding:"14px 32px",fontSize:"14px",fontWeight:600,borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",display:"inline-block"}}>Get in touch</a>
        </div>
      </div>
    </section>
  );
}
