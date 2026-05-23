"use client";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 22px",borderBottom:"1px solid rgba(255,255,255,0.06)",background:scrolled?"rgba(3,3,10,0.97)":"rgba(3,3,10,0.85)",backdropFilter:"blur(30px)",transition:"background 0.3s"}}>
        <div style={{fontFamily:"'Syne',sans-serif",fontSize:"16px",fontWeight:800,letterSpacing:"-.03em",display:"flex",alignItems:"center",gap:"2px"}}>
          <span style={{color:"#fff"}}>Conneqt</span>
          <span style={{background:"linear-gradient(135deg,#6c63ff,#00d4aa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>AI</span>
          <span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#00d4aa",boxShadow:"0 0 8px #00d4aa",display:"inline-block",marginLeft:"2px",animation:"dotPulse 2s ease infinite"}}/>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <div className="desktop-nav" style={{display:"flex",alignItems:"center",gap:"5px",fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".12em",color:"rgba(0,212,170,.6)"}}>
            <span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#00d4aa",boxShadow:"0 0 6px #00d4aa",display:"inline-block",animation:"sdotBlink 2s ease infinite"}}/>
            SYSTEMS ONLINE
          </div>
          <a href="mailto:hello@conneqtai.com" style={{fontFamily:"'Inter',sans-serif",fontSize:"12px",fontWeight:500,padding:"7px 18px",borderRadius:"100px",border:"1px solid rgba(108,99,255,.35)",background:"rgba(108,99,255,.08)",color:"#a89cff",textDecoration:"none"}}>Get in touch</a>
          <button onClick={()=>setMenuOpen(!menuOpen)} className="hamburger" style={{display:"none",background:"none",border:"none",cursor:"pointer",color:"#f0f0f8",fontSize:"1.3rem"}}>
            {menuOpen?"✕":"☰"}
          </button>
        </div>
      </nav>
      {menuOpen&&(
        <div style={{position:"fixed",top:"52px",left:0,right:0,zIndex:99,background:"rgba(3,3,10,0.99)",backdropFilter:"blur(24px)",borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"2rem",display:"flex",flexDirection:"column",gap:"1.5rem"}}>
          {["Solutions","Process","Results","Demo"].map(l=>(
            <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setMenuOpen(false)} style={{fontSize:"1rem",color:"rgba(240,240,248,0.7)",textDecoration:"none",fontFamily:"'Space Mono',monospace",fontSize:"12px",letterSpacing:".05em"}}>{l}</a>
          ))}
          <a href="mailto:hello@conneqtai.com" onClick={()=>setMenuOpen(false)} style={{fontSize:"13px",fontWeight:600,color:"#fff",textDecoration:"none",padding:"12px 20px",borderRadius:"100px",background:"linear-gradient(135deg,#6c63ff,#a89cff)",textAlign:"center"}}>Get in touch →</a>
        </div>
      )}
      <style>{`@media(max-width:768px){.desktop-nav{display:none!important}.hamburger{display:flex!important}}`}</style>
    </>
  );
}
