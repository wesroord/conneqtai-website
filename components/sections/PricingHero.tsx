export default function PricingHero(){
  return(
    <section style={{padding:"80px 24px 48px",textAlign:"center",position:"relative",overflow:"hidden",background:"#000005"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 100% 80% at 50% 0%,rgba(119,0,255,.18) 0%,transparent 60%),#000005",zIndex:0}}/>
      <div style={{position:"relative",zIndex:2,maxWidth:"700px",margin:"0 auto"}}>
        <h1 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(32px,6vw,52px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.1,color:"#fff",marginBottom:"16px"}}>One system.<br/><span className="chrome">One price. No surprises.</span></h1>
        <p style={{fontSize:"clamp(14px,2vw,16px)",color:"rgba(255,255,255,.65)",maxWidth:"480px",margin:"0 auto",lineHeight:1.75}}>Pick exactly what your business needs. Start small, scale when ready. Everything built from scratch — no templates, ever.</p>
      </div>
    </section>
  );
}
