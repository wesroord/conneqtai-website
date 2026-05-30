"use client";
import { useState, useEffect } from "react";
export default function NavbarNL() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  return (
    <>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 22px",background:scrolled?"rgba(0,0,5,.97)":"rgba(0,0,5,.85)",backdropFilter:"blur(24px)",borderBottom:"1px solid rgba(255,255,255,.08)",transition:"background .3s"}}>
        <a href="/" style={{textDecoration:"none",fontFamily:"'Inter',sans-serif",fontSize:"17px",fontWeight:800,letterSpacing:"-.02em",display:"flex",alignItems:"center"}}>
          <span style={{color:"#fff"}}>Conneqt</span>
          <span style={{background:"linear-gradient(90deg,#ff00aa,#7700ff,#00aaff,#ff00aa)",backgroundSize:"300% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"logoShift 3s ease infinite"}}>AI</span>
        </a>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <div className="desktop-nav" style={{display:"flex",alignItems:"center",gap:"24px"}}>
            <a href="/pricing" style={{fontFamily:"'Inter',sans-serif",fontSize:"13px",fontWeight:500,color:"rgba(255,255,255,.8)",textDecoration:"none"}}>Prijzen</a>
            <a href="/projecten" style={{fontFamily:"'Inter',sans-serif",fontSize:"13px",fontWeight:500,color:"rgba(255,255,255,.8)",textDecoration:"none"}}>Projecten</a>
          </div>
          <a href="mailto:hello@conneqtai.com" style={{fontFamily:"'Inter',sans-serif",fontSize:"13px",fontWeight:600,padding:"9px 20px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none"}}>Neem contact op</a>
          <button onClick={()=>setOpen(!open)} className="hamburger" style={{display:"none",background:"none",border:"none",cursor:"pointer",color:"#fff",fontSize:"1.3rem"}}>{open?"✕":"☰"}</button>
        </div>
      </nav>
      {open&&(<div style={{position:"fixed",top:"52px",left:0,right:0,zIndex:99,background:"rgba(0,0,5,.99)",backdropFilter:"blur(24px)",borderBottom:"1px solid rgba(255,255,255,.08)",padding:"2rem",display:"flex",flexDirection:"column",gap:"1.5rem"}}>
        <a href="/waarom" onClick={()=>setOpen(false)} style={{fontSize:"14px",color:"#fff",textDecoration:"none",fontWeight:500}}>Waarom</a><a href="/pricing" onClick={()=>setOpen(false)} style={{fontSize:"14px",color:"#fff",textDecoration:"none",fontWeight:500}}>Prijzen</a>
        <a href="/projecten" onClick={()=>setOpen(false)} style={{fontSize:"14px",color:"#fff",textDecoration:"none",fontWeight:500}}>Projecten</a>
        <a href="mailto:hello@conneqtai.com" onClick={()=>setOpen(false)} style={{fontSize:"13px",fontWeight:700,color:"#fff",textDecoration:"none",padding:"12px 20px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",textAlign:"center" as const}}>Neem contact op</a>
      </div>)}
      <style>{".desktop-nav{display:flex!important}.hamburger{display:none!important}@media(max-width:768px){.desktop-nav{display:none!important}.hamburger{display:flex!important}}"}</style>
    </>
  );
}
