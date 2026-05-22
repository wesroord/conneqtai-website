"use client";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 2rem",height:"60px",background:scrolled?"rgba(5,5,12,0.97)":"rgba(5,5,12,0.8)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
        <span style={{fontFamily:"sans-serif",fontSize:"1.2rem",fontWeight:800,background:"linear-gradient(90deg,#fff,#a89cff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>ConneqtAI</span>
        <div style={{display:"flex",gap:"2rem",alignItems:"center"}} className="desktop-nav">
          {["Solutions","How It Works","Demo","Why Us"].map(link=>(
            <a key={link} href={`#${link.toLowerCase().replace(/\s/g,"-")}`} style={{fontSize:"0.85rem",color:"rgba(240,240,248,0.5)",textDecoration:"none"}}>{link}</a>
          ))}
        </div>
        <a href="mailto:hello@conneqtai.com" style={{fontSize:"0.85rem",fontWeight:500,padding:"0.5rem 1.25rem",borderRadius:"8px",border:"1px solid rgba(168,156,255,0.35)",background:"rgba(168,156,255,0.08)",color:"#a89cff",textDecoration:"none"}}>Get in touch</a>
        <button onClick={()=>setMenuOpen(!menuOpen)} style={{display:"none",background:"none",border:"none",cursor:"pointer",color:"#f0f0f8",fontSize:"1.4rem"}} className="hamburger">☰</button>
      </nav>
      {menuOpen&&(
        <div style={{position:"fixed",top:"60px",left:0,right:0,zIndex:99,background:"rgba(5,5,12,0.98)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"1.5rem 2rem",display:"flex",flexDirection:"column",gap:"1.25rem"}}>
          {["Solutions","How It Works","Demo","Why Us"].map(link=>(
            <a key={link} href={`#${link.toLowerCase().replace(/\s/g,"-")}`} onClick={()=>setMenuOpen(false)} style={{fontSize:"1rem",color:"rgba(240,240,248,0.7)",textDecoration:"none"}}>{link}</a>
          ))}
          <a href="mailto:hello@conneqtai.com" onClick={()=>setMenuOpen(false)} style={{fontSize:"1rem",color:"#a89cff",textDecoration:"none",fontWeight:500}}>Get in touch →</a>
        </div>
      )}
      <style>{`.desktop-nav{display:flex!important}.hamburger{display:none!important}@media(max-width:768px){.desktop-nav{display:none!important}.hamburger{display:flex!important}}`}</style>
    </>
  );
}
