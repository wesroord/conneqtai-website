"use client";
import { useEffect, useRef, useState } from "react";

export default function ComingSoon({ lang = "en" }: { lang?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const nl = lang === "nl";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cx = el.getContext("2d")!;
    el.width = window.innerWidth;
    el.height = window.innerHeight;
    const W = el.width, H = el.height;
    const cols = ["255,0,170","119,0,255","0,170,255"];
    const pts = Array.from({length:80}, () => ({
      x:Math.random()*W, y:Math.random()*H,
      vx:(Math.random()-.5)*.15, vy:(Math.random()-.5)*.15,
      r:Math.random()*1.4+.3, a:Math.random()*.15+.04,
      ph:Math.random()*Math.PI*2, ps:.002+Math.random()*.004,
      col:cols[Math.floor(Math.random()*cols.length)]
    }));
    let raf = 0;
    function frame() {
      cx.clearRect(0,0,W,H);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy; p.ph+=p.ps;
        if(p.x<0||p.x>W) p.vx*=-1;
        if(p.y<0||p.y>H) p.vy*=-1;
        cx.beginPath();
        cx.arc(p.x,p.y,p.r,0,Math.PI*2);
        cx.fillStyle="rgba("+p.col+","+String(p.a*(.5+.5*Math.sin(p.ph)))+")";
        cx.fill();
      });
      for(let i=0;i<pts.length;i++) {
        for(let j=i+1;j<pts.length;j++) {
          const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
          const d=Math.sqrt(dx*dx+dy*dy);
          if(d<90){
            cx.beginPath();
            cx.moveTo(pts[i].x,pts[i].y);
            cx.lineTo(pts[j].x,pts[j].y);
            cx.strokeStyle="rgba("+pts[i].col+","+String(.05*(1-d/90))+")";
            cx.lineWidth=.4;
            cx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    }
    frame();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{position:"fixed",inset:0,background:"#000005",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
      <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}}/>
      <div style={{position:"absolute",width:"500px",height:"500px",background:"radial-gradient(circle,rgba(119,0,255,.2),transparent 70%)",top:"-150px",left:"-150px",borderRadius:"50%",filter:"blur(80px)",animation:"aMove 12s ease-in-out infinite"}}/>
      <div style={{position:"absolute",width:"400px",height:"400px",background:"radial-gradient(circle,rgba(255,0,170,.15),transparent 70%)",bottom:"-100px",right:"-100px",borderRadius:"50%",filter:"blur(80px)",animation:"aMove2 10s ease-in-out infinite"}}/>

      <div style={{position:"relative",zIndex:2,textAlign:"center",padding:"24px",maxWidth:"600px",width:"100%"}}>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:"24px",fontWeight:800,letterSpacing:"-.02em",marginBottom:"48px"}}>
          <span style={{color:"#fff"}}>Conneqt</span>
          <span style={{background:"linear-gradient(90deg,#ff00aa,#7700ff,#00aaff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>AI</span>
        </div>

        <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 16px",borderRadius:"100px",border:"1px solid rgba(255,0,170,.3)",background:"rgba(255,0,170,.06)",marginBottom:"28px"}}>
          <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#ff00aa",display:"inline-block",animation:"nbp 1.5s ease infinite"}}/>
          <span style={{fontFamily:"'Inter',sans-serif",fontSize:"11px",letterSpacing:".12em",textTransform:"uppercase" as const,color:"rgba(255,0,170,.8)",fontWeight:600}}>
            {nl ? "Binnenkort beschikbaar" : "Coming soon"}
          </span>
        </div>

        <h1 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(36px,8vw,72px)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.05,color:"#fff",marginBottom:"20px"}}>
          {nl ? "Iets groots" : "Something big"}<br/>
          <span style={{background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",backgroundSize:"300% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"chromeShift 4s ease infinite"}}>
            {nl ? "is onderweg." : "is coming."}
          </span>
        </h1>

        <p style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(15px,2vw,18px)",color:"rgba(255,255,255,.6)",lineHeight:1.75,maxWidth:"460px",margin:"0 auto 40px"}}>
          {nl
            ? "Wij bouwen maatwerk AI chatbots die jouw bedrijf 24/7 laten werken. De website wordt binnenkort gelanceerd."
            : "We build custom AI chatbots that keep your business running 24/7. The website launches soon."}
        </p>

        {!sent ? (
          <div style={{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap",marginBottom:"40px"}}>
            <input
              value={email}
              onChange={e=>setEmail(e.target.value)}
              placeholder={nl ? "Jouw e-mailadres" : "Your email address"}
              style={{padding:"14px 20px",borderRadius:"10px",border:"1px solid rgba(255,255,255,.12)",background:"rgba(255,255,255,.05)",color:"#fff",fontSize:"14px",fontFamily:"'Inter',sans-serif",outline:"none",width:"260px",maxWidth:"100%"}}
            />
            
              href={`mailto:hello@conneqtai.com?subject=${nl ? "Houd mij op de hoogte" : "Keep me posted"}&body=${email}`}
              onClick={()=>setSent(true)}
              style={{padding:"14px 24px",borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",fontSize:"14px",fontWeight:600,fontFamily:"'Inter',sans-serif",display:"inline-block"}}
            >
              {nl ? "Houd mij op de hoogte" : "Notify me"}
            </a>
          </div>
        ) : (
          <div style={{marginBottom:"40px",padding:"16px 24px",borderRadius:"12px",border:"1px solid rgba(255,0,170,.3)",background:"rgba(255,0,170,.06)",display:"inline-block"}}>
            <span style={{color:"#ff00aa",fontFamily:"'Inter',sans-serif",fontSize:"14px",fontWeight:600}}>
              {nl ? "Bedankt! We houden je op de hoogte." : "Thanks! We will keep you posted."}
            </span>
          </div>
        )}

        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",flexWrap:"wrap"}}>
          <a href="mailto:hello@conneqtai.com" style={{fontFamily:"'Inter',sans-serif",fontSize:"13px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>hello@conneqtai.com</a>
          <span style={{color:"rgba(255,255,255,.15)"}}>·</span>
          <span style={{fontFamily:"'Inter',sans-serif",fontSize:"13px",color:"rgba(255,255,255,.4)"}}>www.conneqtai.com</span>
        </div>
      </div>
    </div>
  );
}
