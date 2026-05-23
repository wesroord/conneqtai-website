"use client";
import { useEffect, useRef } from "react";
export default function CTASection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const C = canvasRef.current; if(!C) return;
    const cx = C.getContext("2d")!;
    const r = C.parentElement!.getBoundingClientRect();
    let W = C.width = r.width||380, H = C.height = r.height||320;
    const rings = [0,.25,.5,.75].map(d=>({p:-d}));
    let raf: number;
    function frame() {
      cx.clearRect(0,0,W,H);
      rings.forEach(ring=>{
        ring.p+=.004; if(ring.p>1) ring.p=0;
        if(ring.p<0) return;
        const maxR = Math.min(W,H)*.75;
        cx.beginPath();
        cx.ellipse(W/2,H/2,ring.p*maxR,ring.p*maxR*.55,0,0,Math.PI*2);
        cx.strokeStyle=`rgba(108,99,255,${(1-ring.p)*.2})`;
        cx.lineWidth=1; cx.stroke();
      });
      raf=requestAnimationFrame(frame);
    }
    frame();
    return ()=>cancelAnimationFrame(raf);
  },[]);
  return (
    <section style={{padding:"64px 20px",textAlign:"center",position:"relative",zIndex:5,overflow:"hidden",background:"#060614"}}>
      <canvas ref={canvasRef} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"300px",height:"200px",background:"radial-gradient(ellipse,rgba(108,99,255,.12) 0%,transparent 70%)",animation:"glowRotate 8s linear infinite",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"relative",zIndex:2}}>
        <span style={{fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".2em",textTransform:"uppercase",color:"rgba(108,99,255,.6)",marginBottom:"16px",display:"block"}}>{`// ready to build?`}</span>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(28px,7vw,44px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.04,marginBottom:"14px",color:"#f0f0f8"}}>
          Your business deserves<br/><span className="grad">AI that actually works.</span>
        </h2>
        <p style={{fontSize:"13px",color:"rgba(240,240,248,.38)",marginBottom:"28px",maxWidth:"300px",marginLeft:"auto",marginRight:"auto",lineHeight:1.75}}>Drop us a message. We&apos;ll reply within 24 hours with a clear plan — no pitch decks, no fluff.</p>
        <div style={{position:"relative",display:"inline-block"}}>
          <div style={{position:"absolute",inset:"-2px",borderRadius:"100px",background:"linear-gradient(135deg,#6c63ff,#00d4aa)",zIndex:-1,animation:"glowRotate 3s linear infinite",filter:"blur(8px)",opacity:.5}}/>
          <a href="mailto:hello@conneqtai.com" style={{position:"relative",padding:"14px 34px",fontSize:"14px",fontWeight:600,borderRadius:"100px",background:"linear-gradient(135deg,#6c63ff,#a89cff)",color:"#fff",textDecoration:"none",display:"inline-block",overflow:"hidden"}}>
            Get in touch →
            <span style={{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)",animation:"shimmer 2.5s ease infinite"}}/>
          </a>
        </div>
        <a href="mailto:hello@conneqtai.com" style={{display:"block",fontFamily:"'Space Mono',monospace",fontSize:"10px",color:"#a89cff",textDecoration:"none",marginTop:"16px",opacity:.6,letterSpacing:".04em"}}>hello@conneqtai.com</a>
        <div style={{fontSize:"10px",color:"rgba(240,240,248,.16)",marginTop:"12px",fontFamily:"'Space Mono',monospace",letterSpacing:".08em"}}>{`// no commitment · no fluff · just results`}</div>
      </div>
    </section>
  );
}
