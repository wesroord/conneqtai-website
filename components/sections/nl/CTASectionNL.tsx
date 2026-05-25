"use client";
import { useEffect, useRef } from "react";
export default function CTASectionNL(){
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const el=ref.current; if(!el)return;
    const ctx=el.getContext("2d")!;
    const pr=el.parentElement?.getBoundingClientRect();
    el.width=pr?.width||380; el.height=pr?.height||300;
    const W=el.width, H=el.height;
    const cols=["255,0,170","119,0,255","0,170,255"];
    const rings=[{p:0,col:cols[0]},{p:-.28,col:cols[1]},{p:-.56,col:cols[2]}];
    let raf=0;
    function frame(){
      ctx.clearRect(0,0,W,H);
      rings.forEach((rg)=>{
        rg.p+=.0035;if(rg.p>1)rg.p=0;if(rg.p<0)return;
        const rv=rg.p*Math.min(W,H)*.72;
        ctx.beginPath();ctx.arc(W/2,H/2,rv,0,Math.PI*2);
        ctx.strokeStyle="rgba("+rg.col+","+String((1-rg.p)*.2)+")";
        ctx.lineWidth=1;ctx.stroke();
      });
      raf=requestAnimationFrame(frame);
    }
    frame(); return()=>cancelAnimationFrame(raf);
  },[]);
  return(
    <section style={{padding:"64px 22px",textAlign:"center",position:"relative",overflow:"hidden",background:"#000005"}}>
      <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"relative",zIndex:2}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:"9px",letterSpacing:".2em",textTransform:"uppercase",color:"rgba(255,0,170,.5)",marginBottom:"14px",display:"block"}}>aan de slag</span>
        <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(26px,6.5vw,42px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.04,marginBottom:"12px",color:"#fff"}}>Jouw bedrijf verdient<br/><span className="chrome">AI die echt werkt.</span></h2>
        <p style={{fontSize:"13px",color:"rgba(255,255,255,.65)",marginBottom:"26px",maxWidth:"280px",marginLeft:"auto",marginRight:"auto",lineHeight:1.75}}>Stuur ons een bericht. Helder plan binnen 24 uur. Geen gedoe.</p>
        <div style={{position:"relative",display:"inline-block"}}>
          <div style={{position:"absolute",inset:"-3px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",zIndex:-1,animation:"glowRot 3s linear infinite",filter:"blur(10px)",opacity:.55}}/>
          <a href="mailto:hello@conneqtai.com" style={{position:"relative",padding:"14px 32px",fontSize:"14px",fontWeight:700,borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",display:"inline-block"}}>Neem contact op</a>
        </div>
        <a href="mailto:hello@conneqtai.com" style={{display:"block",fontFamily:"'Inter',sans-serif",fontSize:"10px",color:"rgba(255,0,170,.5)",textDecoration:"none",marginTop:"14px"}}>hello@conneqtai.com</a>
        <div style={{fontSize:"10px",color:"rgba(255,255,255,.14)",marginTop:"11px",fontFamily:"'Inter',sans-serif"}}>geen verplichtingen. geen gedoe. gewoon resultaat.</div>
      </div>
    </section>
  );
}
