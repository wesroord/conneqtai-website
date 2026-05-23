"use client";
import { useEffect, useRef } from "react";
export default function CTASection(){
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const C=ref.current; if(!C)return;
    const ctx=C.getContext("2d"); if(!ctx)return;
    const pr=C.parentElement?.getBoundingClientRect();
    C.width=pr?.width||380; C.height=pr?.height||300;
    const cols=["255,0,170","119,0,255","0,170,255"];
    const rings:[{p:number,col:string}]=[{p:0,col:cols[0]},{p:-.28,col:cols[1]},{p:-.56,col:cols[2]}];
    let raf:number;
    const draw=ctx;
    function frame(){
      draw.clearRect(0,0,C.width,C.height);
      rings.forEach((rg)=>{
        rg.p+=.0035;if(rg.p>1)rg.p=0;if(rg.p<0)return;
        const rv=rg.p*Math.min(C.width,C.height)*.72;
        draw.beginPath();draw.arc(C.width/2,C.height/2,rv,0,Math.PI*2);
        draw.strokeStyle="rgba("+rg.col+","+String((1-rg.p)*.2)+")";
        draw.lineWidth=1;draw.stroke();
      });
      raf=requestAnimationFrame(frame);
    }
    frame(); return()=>cancelAnimationFrame(raf);
  },[]);
  return(
    <section style={{padding:"64px 22px",textAlign:"center",position:"relative",overflow:"hidden",background:"#000005"}}>
      <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"relative",zIndex:2}}>
        <span style={{fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".2em",textTransform:"uppercase",color:"rgba(255,0,170,.5)",marginBottom:"14px",display:"block"}}>ready to build</span>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(26px,6.5vw,42px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.04,marginBottom:"12px",color:"#fff"}}>Your business deserves<br/><span className="chrome">AI that actually works.</span></h2>
        <p style={{fontSize:"13px",color:"rgba(255,255,255,.3)",marginBottom:"26px",maxWidth:"280px",marginLeft:"auto",marginRight:"auto",lineHeight:1.75}}>Drop us a message. Clear plan within 24 hours. No fluff.</p>
        <div style={{position:"relative",display:"inline-block"}}>
          <div style={{position:"absolute",inset:"-3px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",zIndex:-1,animation:"glowRot 3s linear infinite",filter:"blur(10px)",opacity:.55}}/>
          <a href="mailto:hello@conneqtai.com" style={{position:"relative",padding:"14px 32px",fontSize:"14px",fontWeight:700,borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",display:"inline-block"}}>Get in touch</a>
        </div>
        <a href="mailto:hello@conneqtai.com" style={{display:"block",fontFamily:"'Space Mono',monospace",fontSize:"10px",color:"rgba(255,0,170,.5)",textDecoration:"none",marginTop:"14px"}}>hello@conneqtai.com</a>
        <div style={{fontSize:"10px",color:"rgba(255,255,255,.14)",marginTop:"11px",fontFamily:"'Space Mono',monospace"}}>no commitment. no fluff. just results.</div>
      </div>
    </section>
  );
}
