"use client";
import { useEffect, useRef } from "react";
export default function Hero() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const cx = el.getContext("2d")!;
    el.width = el.offsetWidth || 380; el.height = 600;
    const W = el.width, H = el.height;
    const cols = ["255,0,170","119,0,255","0,170,255"];
    const pts = Array.from({length:70}, () => ({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*1.2+.3,a:Math.random()*.2+.06,ph:Math.random()*Math.PI*2,ps:.003+Math.random()*.005,col:cols[Math.floor(Math.random()*cols.length)]}));
    let raf = 0;
    function frame() {
      cx.clearRect(0,0,W,H);
      pts.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.ph+=p.ps; if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1; cx.beginPath(); cx.arc(p.x,p.y,p.r,0,Math.PI*2); cx.fillStyle="rgba("+p.col+","+String(p.a*(.5+.5*Math.sin(p.ph)))+")"; cx.fill(); });
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) { const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy); if(d<85){cx.beginPath();cx.moveTo(pts[i].x,pts[i].y);cx.lineTo(pts[j].x,pts[j].y);cx.strokeStyle="rgba("+pts[i].col+","+String(.06*(1-d/85))+")";cx.lineWidth=.3;cx.stroke();} }
      raf = requestAnimationFrame(frame);
    }
    frame(); return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <section style={{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"100px 24px 60px",overflow:"hidden"}}>
      <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}} />
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 120% 80% at 20% 50%,rgba(119,0,255,.15) 0%,transparent 55%),radial-gradient(ellipse 100% 80% at 80% 30%,rgba(255,0,170,.12) 0%,transparent 50%),#000005",zIndex:0}} />
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",backgroundSize:"40px 40px",maskImage:"radial-gradient(ellipse 90% 90% at 50% 50%,black 5%,transparent 100%)",zIndex:0}} />
      <div style={{position:"absolute",width:"min(400px,80vw)",height:"min(400px,80vw)",background:"radial-gradient(circle,rgba(119,0,255,.2),rgba(255,0,170,.1),transparent 70%)",top:"-100px",left:"-100px",borderRadius:"50%",filter:"blur(80px)",animation:"aMove 12s ease-in-out infinite",zIndex:0}} />
      <div style={{position:"absolute",width:"min(350px,70vw)",height:"min(350px,70vw)",background:"radial-gradient(circle,rgba(0,170,255,.18),rgba(119,0,255,.08),transparent 70%)",bottom:"-80px",right:"-80px",borderRadius:"50%",filter:"blur(80px)",animation:"aMove2 10s ease-in-out infinite",zIndex:0}} />
      <div style={{position:"absolute",top:"12%",right:"8%",width:"50px",height:"50px",border:"1px solid rgba(255,0,170,.2)",borderRadius:"50%",animation:"flFloat 8s ease-in-out infinite",zIndex:1}} />
      <div style={{position:"absolute",top:"18%",left:"6%",width:"35px",height:"35px",border:"1px solid rgba(119,0,255,.25)",animation:"flSpin 6s ease-in-out infinite",zIndex:1}} />
      <div style={{position:"relative",zIndex:2,width:"100%",maxWidth:"700px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginBottom:"20px",animation:"fup3 .8s ease .05s both"}}>
          <span style={{flex:1,height:"1px",maxWidth:"40px",background:"linear-gradient(90deg,transparent,rgba(255,0,170,.5))"}} />
          <span style={{fontFamily:"'Inter',sans-serif",fontSize:"11px",letterSpacing:".1em",textTransform:"uppercase",color:"rgba(255,0,170,.7)",fontWeight:500}}>AI infrastructure for ambitious businesses</span>
          <span style={{flex:1,height:"1px",maxWidth:"40px",background:"linear-gradient(270deg,transparent,rgba(255,0,170,.5))"}} />
        </div>
        <div style={{animation:"fup3 .8s ease .1s both",marginBottom:"20px"}}>
          <span style={{fontFamily:"'Inter',sans-serif",fontSize:"12px",color:"rgba(255,255,255,.7)",display:"block",letterSpacing:".08em",textTransform:"uppercase",marginBottom:"14px",fontWeight:500}}>next generation</span>
          <h1 style={{margin:0,padding:0}}>
            <span style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(28px,6vw,52px)",fontWeight:700,color:"#fff",display:"block",lineHeight:1.1,letterSpacing:"-.02em"}}>Your business,</span>
            <span style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(32px,7vw,58px)",fontWeight:800,display:"block",lineHeight:1.1,letterSpacing:"-.02em",background:"linear-gradient(135deg,#fff 0%,#ff00aa 30%,#7700ff 60%,#00aaff 100%)",backgroundSize:"300% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"chromeShift 4s ease infinite"}}>supercharged by AI.</span>
          </h1>
        </div>
        <p style={{fontSize:"clamp(14px,2vw,16px)",color:"rgba(255,255,255,.6)",maxWidth:"480px",lineHeight:1.75,margin:"0 auto 28px",fontWeight:400,animation:"fup3 .8s ease .2s both"}}>
          We build <strong style={{color:"rgba(255,255,255,.85)",fontWeight:600}}>AI chatbots, customer support systems and workflow automations</strong> that run 24/7 — cutting costs and growing revenue.
        </p>
        <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",marginBottom:"36px",animation:"fup3 .8s ease .25s both"}}>
          <div style={{position:"relative",display:"inline-block"}}>
            <div style={{position:"absolute",inset:"-3px",borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",zIndex:-1,animation:"glowRot 3s linear infinite",filter:"blur(10px)",opacity:.6}} />
            <a href="mailto:hello@conneqtai.com" style={{position:"relative",padding:"14px 32px",fontSize:"15px",fontWeight:600,borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",display:"inline-block"}}>Start building</a>
          </div>
          <a href="#solutions" style={{padding:"14px 28px",fontSize:"13px",fontWeight:500,borderRadius:"10px",border:"1px solid rgba(255,255,255,.15)",background:"rgba(255,255,255,.05)",color:"rgba(255,255,255,.8)",textDecoration:"none",display:"inline-block"}}>View solutions</a>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1px",background:"rgba(255,255,255,.06)",borderRadius:"12px",overflow:"hidden",border:"1px solid rgba(255,255,255,.07)",animation:"fup3 .8s ease .35s both"}}>
          {[{n:"24/7",l:"Always on"},{n:"80%",l:"Automated"},{n:"3x",l:"Faster"},{n:"60%",l:"Cost saved"}].map(s => (
            <div key={s.l} style={{background:"#000005",padding:"16px 8px",textAlign:"center"}}>
              <span style={{fontFamily:"'Inter',sans-serif",fontSize:"20px",fontWeight:700,display:"block",marginBottom:"4px",color:"#fff"}}>{s.n}</span>
              <span style={{fontFamily:"'Inter',sans-serif",fontSize:"10px",color:"rgba(255,255,255,.7)",textTransform:"uppercase",letterSpacing:".04em"}}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
