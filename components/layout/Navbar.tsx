"use client";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  return (
    <>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 22px",background:scrolled?"rgba(0,0,5,.97)":"rgba(0,0,5,.85)",backdropFilter:"blur(24px)",borderBottom:"1px solid rgba(255,255,255,.06)",transition:"background .3s"}}>
        <div style={{fontFamily:"'Syne',sans-serif",fontSize:"17px",fontWeight:800,letterSpacing:"-.04em",display:"flex",alignItems:"center"}}>
          <span style={{color:"#fff"}}>Conneqt</span>
          <span style={{background:"linear-gradient(90deg,#ff00aa,#7700ff,#00aaff,#ff00aa)",backgroundSize:"300% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"logoShift 3s ease infinite"}}>AI</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div className="desktop-nav" style={{fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".12em",color:"rgba(255,0,170,.7)",display:"flex",alignItems:"center",gap:"5px",padding:"5px 10px",border:"1px solid rgba(255,0,170,.2)",borderRadius:"4px"}}>
            <span style={{width:"4px",height:"4px",borderRadius:"50%",background:"#ff00aa",boxShadow:"0 0 8px #ff00aa",display:"inline-block",animation:"nbp 1.5s ease infinite"}} />SYSTEMS ACTIVE
          </div>
          <a href="mailto:hello@conneqtai.com" style={{fontFamily:"'Inter',sans-serif",fontSize:"12px",fontWeight:600,padding:"8px 18px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none"}}>Get in touch</a>
          <button onClick={()=>setOpen(!open)} className="hamburger" style={{display:"none",background:"none",border:"none",cursor:"pointer",color:"#fff",fontSize:"1.3rem"}}>{open?"✕":"☰"}</button>
        </div>
      </nav>
      {open && (
        <div style={{position:"fixed",top:"52px",left:0,right:0,zIndex:99,background:"rgba(0,0,5,.99)",backdropFilter:"blur(24px)",borderBottom:"1px solid rgba(255,255,255,.06)",padding:"2rem",display:"flex",flexDirection:"column",gap:"1.5rem"}}>
          {["Solutions","Process","Results","Demo"].map(l => <a key={l} href={"#"+l.toLowerCase()} onClick={()=>setOpen(false)} style={{fontSize:"12px",color:"rgba(255,255,255,.7)",textDecoration:"none",fontFamily:"'Space Mono',monospace"}}>{l}</a>)}
          <a href="mailto:hello@conneqtai.com" onClick={()=>setOpen(false)} style={{fontSize:"13px",fontWeight:700,color:"#fff",textDecoration:"none",padding:"12px 20px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",textAlign:"center"}}>Get in touch</a>
        </div>
      )}
      <style>{".desktop-nav{display:flex!important}.hamburger{display:none!important}@media(max-width:768px){.desktop-nav{display:none!important}.hamburger{display:flex!important}}"}</style>
    </>
  );
}
