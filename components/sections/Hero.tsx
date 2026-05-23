"use client";
import { useEffect, useRef } from "react";
export default function Hero() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const C = ref.current; if (!C) return;
    const cx = C.getContext("2d")!;
    C.width = C.offsetWidth || 380; C.height = 600;
    const W = C.width, H = C.height;
    const cols = ["255,0,170","119,0,255","0,170,255"];
    const pts = Array.from({length:70}, () => ({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*1.2+.3,a:Math.random()*.2+.06,ph:Math.random()*Math.PI*2,ps:.003+Math.random()*.005,col:cols[Math.floor(Math.random()*cols.length)]}));
    let raf: number;
    function frame() {
      cx.clearRect(0,0,W,H);
      pts.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.ph+=p.ps; if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1; cx.beginPath(); cx.arc(p.x,p.y,p.r*(.8+.2*Math.sin(p.ph)),0,Math.PI*2); cx.fillStyle="rgba("+p.col+","+String(p.a*(.5+.5*Math.sin(p.ph)))+")"; cx.fill(); });
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) { const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy); if(d<85){cx.beginPath();cx.moveTo(pts[i].x,pts[i].y);cx.lineTo(pts[j].x,pts[j].y);cx.strokeStyle="rgba("+pts[i].col+","+String(.06*(1-d/85))+")";cx.lineWidth=.3;cx.stroke();} }
      raf = requestAnimationFrame(frame);
    }
    frame(); return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <section style={{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"100px 22px 60px",overflow:"hidden"}}>
      <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}} />
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 120% 80% at 20% 50%,rgba(119,0,255,.15) 0%,transparent 55%),radial-gradient(ellipse 100% 80% at 80% 30%,rgba(255,0,170,.12) 0%,transparent 50%),#000005",zIndex:0}} />
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",backgroundSize:"40px 40px",maskImage:"radial-gradient(ellipse 90% 90% at 50% 50%,black 5%,transparent 100%)",zIndex:0}} />
      <div style={{position:"absolute",width:"min(400px,80vw)",height:"min(400px,80vw)",background:"radial-gradient(circle,rgba(119,0,255,.2),rgba(255,0,170,.1),transparent 70%)",top:"-100px",left:"-100px",borderRadius:"50%",filter:"blur(80px)",animation:"aMove 12s ease-in-out infinite",zIndex:0}} />
      <div style={{position:"absolute",width:"min(350px,70vw)",height:"min(350px,70vw)",background:"radial-gradient(circle,rgba(0,170,255,.18),rgba(119,0,255,.08),transparent 70%)",bottom:"-80px",right:"-80px",borderRadius:"50%",filter:"blur(80px)",animation:"aMove2 10s ease-in-out infinite",zIndex:0}} />
      <div style={{position:"absolute",top:"12%",right:"10%",width:"60px",height:"60px",border:"1px solid rgba(255,0,170,.25)",borderRadius:"50%",animation:"flFloat 8s ease-in-out infinite",zIndex:1}} />
      <div style={{position:"absolute",top:"18%",left:"7%",width:"40px",height:"40px",border:"1px solid rgba(119,0,255,.3)",animation:"flSpin 6s ease-in-out infinite",zIndex:1}} />
      <div style={{position:"relative",zIndex:2,width:"100%",maxWidth:"660px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginBottom:"20px",animation:"fup3 .8s ease .05s both"}}>
          <span style={{flex:1,height:"1px",maxWidth:"44px",background:"linear-gradient(90deg,transparent,rgba(255,0,170,.5))"}} />
          <span style={{fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".18em",textTransform:"uppercase",color:"rgba(255,0,170,.7)"}}>AI infrastructure for ambitious businesses</span>
          <span style={{flex:1,height:"1px",maxWidth:"44px",background:"linear-gradient(270deg,transparent,rgba(255,0,170,.5))"}} />
        </div>
        <div style={{animation:"fup3 .8s ease .1s both",marginBottom:"18px"}}>
          <span style={{fontFamily:"'Space Mono',monospace",fontSize:"clamp(10px,2vw,13px)",color:"rgba(255,255,255,.4)",display:"block",letterSpacing:".1em",textTransform:"uppercase",marginBottom:"10px"}}>next generation</span>
          <span style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(36px,9vw,66px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:.92,display:"block"}}>
            <span style={{color:"#fff",display:"block"}}>Your business.</span>
            <span className="chrome" style={{display:"block"}}>Supercharged.</span>
            <span style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(14px,3vw,22px)",fontWeight:700,color:"rgba(255,255,255,.25)",display:"block",letterSpacing:"-.02em",marginTop:"10px"}}>by AI that never sleeps.</span>
          </span>
        </div>
        <p style={{fontSize:"clamp(12px,2vw,14px)",color:"rgba(255,255,255,.38)",maxWidth:"420px",lineHeight:1.85,margin:"0 auto 26px",fontWeight:300,animation:"fup3 .8s ease .2s both"}}>We build <strong style={{color:"rgba(255,255,255,.72)",fontWeight:400}}>AI chatbots, customer support systems and workflow automations</strong> that run 24/7.</p>
        <div style={{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap",marginBottom:"32px",animation:"fup3 .8s ease .25s both"}}>
          <div style={{position:"relative",display:"inline-block"}}>
            <div style={{position:"absolute",inset:"-3px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",zIndex:-1,animation:"glowRot 3s linear infinite",filter:"blur(10px)",opacity:.55}} />
            <a href="mailto:hello@conneqtai.com" style={{position:"relative",padding:"13px 28px",fontSize:"13px",fontWeight:700,borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",display:"inline-block",overflow:"hidden"}}>Start building</a>
          </div>
          <a href="#solutions" style={{padding:"13px 28px",fontSize:"11px",fontWeight:500,borderRadius:"8px",border:"1px solid rgba(255,255,255,.12)",background:"rgba(255,255,255,.04)",color:"rgba(255,255,255,.65)",textDecoration:"none",display:"inline-block",fontFamily:"'Space Mono',monospace"}}>VIEW SOLUTIONS</a>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1px",background:"rgba(255,255,255,.05)",borderRadius:"12px",overflow:"hidden",border:"1px solid rgba(255,255,255,.06)",animation:"fup3 .8s ease .35s both"}}>
          {[{n:"24/7",l:"Always on"},{n:"80%",l:"Automated"},{n:"3x",l:"Faster"},{n:"60%",l:"Cost saved"}].map(s => (
            <div key={s.l} style={{background:"#000005",padding:"14px 8px",textAlign:"center"}}>
              <span style={{fontFamily:"'Syne',sans-serif",fontSize:"19px",fontWeight:800,display:"block",marginBottom:"2px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",backgroundSize:"300% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"chromeShift 4s ease infinite"}}>{s.n}</span>
              <span style={{fontFamily:"'Space Mono',monospace",fontSize:"7px",letterSpacing:".08em",textTransform:"uppercase",color:"rgba(255,255,255,.22)"}}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
