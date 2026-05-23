"use client";
import { useEffect, useRef } from "react";
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const C = canvasRef.current; if (!C) return;
    const cx = C.getContext("2d")!;
    let W = C.width = C.offsetWidth, H = C.height = 600;
    const pts = Array.from({length:70},()=>({
      x:Math.random()*W, y:Math.random()*H,
      vx:(Math.random()-.5)*.22, vy:(Math.random()-.5)*.22,
      r:Math.random()*1.4+.3, a:Math.random()*.3+.08,
      ph:Math.random()*Math.PI*2, ps:.005+Math.random()*.008,
      col:Math.random()>.7?"0,212,170":"108,99,255"
    }));
    let raf: number;
    function frame() {
      cx.clearRect(0,0,W,H);
      pts.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy; p.ph+=p.ps;
        if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1;
        cx.beginPath(); cx.arc(p.x,p.y,p.r*(.8+.2*Math.sin(p.ph)),0,Math.PI*2);
        cx.fillStyle=`rgba(${p.col},${p.a*(.6+.4*Math.sin(p.ph))})`; cx.fill();
      });
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<100){cx.beginPath();cx.moveTo(pts[i].x,pts[i].y);cx.lineTo(pts[j].x,pts[j].y);cx.strokeStyle=`rgba(108,99,255,${.07*(1-d/100)})`;cx.lineWidth=.35;cx.stroke();}
      }
      raf=requestAnimationFrame(frame);
    }
    frame();
    return ()=>cancelAnimationFrame(raf);
  },[]);
  return (
    <section style={{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"100px 20px 60px",overflow:"hidden"}}>
      <canvas ref={canvasRef} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 120% 90% at 50% -15%,rgba(108,99,255,.32) 0%,transparent 55%),radial-gradient(ellipse 80% 70% at 100% 100%,rgba(0,212,170,.14) 0%,transparent 50%),radial-gradient(ellipse 60% 70% at 0% 80%,rgba(124,109,255,.09) 0%,transparent 50%),#03030a",zIndex:0}}/>
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",backgroundSize:"44px 44px",maskImage:"radial-gradient(ellipse 90% 90% at 50% 50%,black 5%,transparent 100%)",zIndex:0}}/>
      <div style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)",width:"min(420px,80vw)",height:"min(420px,80vw)",background:"radial-gradient(circle at 40% 40%,rgba(108,99,255,.2),rgba(0,212,170,.08),transparent 70%)",animation:"morphOrb 12s ease-in-out infinite",zIndex:0}}/>
      <div style={{position:"absolute",top:0,left:"-100%",width:"40%",height:"100%",background:"linear-gradient(90deg,transparent,rgba(108,99,255,.04),rgba(108,99,255,.02),transparent)",animation:"scanBeam 6s ease-in-out infinite",zIndex:1,pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:2,width:"100%",maxWidth:"680px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginBottom:"20px",animation:"fadeUp .7s ease .05s both"}}>
          <span style={{flex:1,height:"1px",background:"linear-gradient(90deg,transparent,rgba(108,99,255,.5))",maxWidth:"50px"}}/>
          <span style={{fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".2em",textTransform:"uppercase",color:"rgba(108,99,255,.75)"}}>next generation ai infrastructure</span>
          <span style={{flex:1,height:"1px",background:"linear-gradient(270deg,transparent,rgba(108,99,255,.5))",maxWidth:"50px"}}/>
        </div>
        <span style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(22px,5.5vw,38px)",fontWeight:800,letterSpacing:"-.03em",color:"rgba(240,240,248,.7)",display:"block",lineHeight:1.1,animation:"fadeUp .7s ease .1s both"}}>We don&apos;t build chatbots.</span>
        <span style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(38px,9.5vw,68px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:.95,display:"block",animation:"fadeUp .7s ease .15s both"}}>
          <span className="grad">We build intelligence.</span>
        </span>
        <p style={{fontSize:"clamp(12px,2.5vw,14px)",color:"rgba(240,240,248,.42)",maxWidth:"440px",lineHeight:1.85,margin:"18px auto 28px",fontWeight:300,animation:"fadeUp .7s ease .2s both"}}>
          AI systems that <strong style={{color:"rgba(240,240,248,.72)",fontWeight:400}}>think, respond and automate</strong> — so your business runs smarter, faster and without limits. Day and night.
        </p>
        <div style={{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap",marginBottom:"36px",animation:"fadeUp .7s ease .25s both"}}>
          <div style={{position:"relative",display:"inline-block"}}>
            <div style={{position:"absolute",inset:"-2px",borderRadius:"100px",background:"linear-gradient(135deg,#6c63ff,#00d4aa)",zIndex:-1,animation:"glowRotate 3s linear infinite",filter:"blur(8px)",opacity:.5}}/>
            <a href="mailto:hello@conneqtai.com" style={{position:"relative",padding:"13px 30px",fontSize:"13px",fontWeight:600,borderRadius:"100px",background:"linear-gradient(135deg,#6c63ff,#a89cff)",color:"#fff",border:"none",cursor:"pointer",fontFamily:"'Inter',sans-serif",textDecoration:"none",display:"inline-block",overflow:"hidden",letterSpacing:".02em"}}>
              Start building →
              <span style={{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)",animation:"shimmer 2.5s ease infinite"}}/>
            </a>
          </div>
          <a href="#solutions" style={{padding:"13px 30px",fontSize:"13px",fontWeight:500,borderRadius:"100px",border:"1px solid rgba(255,255,255,.12)",background:"rgba(255,255,255,.04)",color:"rgba(240,240,248,.8)",textDecoration:"none",display:"inline-block",backdropFilter:"blur(12px)"}}>View solutions</a>
        </div>
        <div style={{background:"rgba(4,4,16,.97)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",overflow:"hidden",maxWidth:"400px",width:"100%",margin:"0 auto 32px",boxShadow:"0 0 80px rgba(108,99,255,.08),inset 0 1px 0 rgba(255,255,255,.04)",animation:"fadeUp .7s ease .3s both"}}>
          <div style={{display:"flex",alignItems:"center",gap:"6px",padding:"10px 14px",borderBottom:"1px solid rgba(255,255,255,.06)",background:"rgba(255,255,255,.02)"}}>
            <div style={{width:"9px",height:"9px",borderRadius:"50%",background:"#ff5f56"}}/>
            <div style={{width:"9px",height:"9px",borderRadius:"50%",background:"#ffbd2e"}}/>
            <div style={{width:"9px",height:"9px",borderRadius:"50%",background:"#27c93f"}}/>
            <span style={{fontFamily:"'Space Mono',monospace",fontSize:"8px",color:"rgba(240,240,248,.2)",marginLeft:"auto",letterSpacing:".05em"}}>conneqtai.system v3.1 // connected</span>
          </div>
          <div style={{padding:"13px 15px",fontFamily:"'Space Mono',monospace",fontSize:"10px",lineHeight:2}}>
            {[
              {c:"#00d4aa",t:"$ boot sequence initiated..."},
              {c:"#a89cff",t:"✓ chatbot_engine     → online [2ms latency]"},
              {c:"#00d4aa",t:"✓ support_ai         → active [1,247 req/hr]"},
              {c:"#a89cff",t:"✓ workflow_engine    → running [4,891 tasks]"},
              {c:"rgba(240,240,248,.25)",t:"✓ crm_bridge        → salesforce [synced]"},
            ].map((l,i)=><span key={i} style={{display:"block",color:l.c}}>{l.t}</span>)}
            <span style={{display:"block",color:"#00d4aa"}}>✓ uptime <span style={{display:"inline-block",width:"72px",height:"5px",background:"linear-gradient(90deg,#6c63ff,#00d4aa)",borderRadius:"3px",verticalAlign:"middle",margin:"0 6px",animation:"barGrow 2s ease forwards"}}/> 99.98% <span style={{display:"inline-block",width:"7px",height:"12px",background:"#6c63ff",borderRadius:"1px",verticalAlign:"middle",marginLeft:"3px",animation:"curBlink .75s ease infinite"}}/></span>
          </div>
        </div>
        <div style={{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap",animation:"fadeUp .7s ease .4s both"}}>
          {[{n:"24/7",l:"Always on"},{n:"80%",l:"Automated"},{n:"3×",l:"Faster"},{n:"60%",l:"Cost saved"}].map(c=>(
            <div key={c.l} style={{padding:"8px 14px",border:"1px solid rgba(255,255,255,.07)",borderRadius:"100px",background:"rgba(255,255,255,.025)",display:"flex",alignItems:"center",gap:"8px",backdropFilter:"blur(10px)"}}>
              <span style={{fontFamily:"'Syne',sans-serif",fontSize:"15px",fontWeight:800,color:"#f0f0f8"}}>{c.n}</span>
              <span style={{width:"1px",height:"14px",background:"rgba(255,255,255,.1)"}}/>
              <span style={{fontSize:"9px",color:"rgba(240,240,248,.35)",letterSpacing:".06em",textTransform:"uppercase"}}>{c.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
