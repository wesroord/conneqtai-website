"use client";
import { useState } from "react";
const replies = [
  "Great question! We have Starter, Growth and Enterprise packages. Want to get in touch with our team?",
  "Most clients go live within 2-4 weeks. Would you like to discuss your project?",
  "We'd love to help! Email us at hello@conneqtai.com and we'll respond within 24 hours.",
];
export default function DemoSection() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm your AI assistant. What can I help you with today? 👋" },
    { role: "user", text: "What does an AI chatbot cost?" },
    { role: "bot", text: "We have three packages:\n🚀 Starter — Website chatbot\n⚡ Growth — Chatbot + leads + CRM\n🏢 Enterprise — Full AI system\n\nWant to get in touch?" },
  ]);
  const [input, setInput] = useState("");
  const [ri, setRi] = useState(0);
  const send = () => {
    if (!input.trim()) return;
    const txt = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: txt }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: replies[ri % replies.length] }]);
      setRi(r => r + 1);
    }, 700);
  };
  return (
    <section id="demo" style={{padding:"5rem 1.5rem",background:"#05050c"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <span style={{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#a89cff",display:"block",marginBottom:"0.875rem"}}>Live Preview</span>
        <h2 style={{fontFamily:"sans-serif",fontSize:"clamp(1.8rem,3.5vw,2.5rem)",fontWeight:800,letterSpacing:"-0.02em",lineHeight:1.12,marginBottom:"1rem",color:"#f0f0f8"}}>See your AI system in action</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"3rem",alignItems:"start"}}>
          <div style={{border:"1px solid rgba(255,255,255,0.08)",borderRadius:"20px",overflow:"hidden",background:"rgba(8,8,20,0.95)"}}>
            <div style={{padding:"0.875rem 1.25rem",borderBottom:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",gap:"0.75rem",background:"rgba(255,255,255,0.02)"}}>
              <div style={{width:30,height:30,borderRadius:"8px",background:"linear-gradient(135deg,#6c63ff,#00d4aa)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",fontWeight:700,color:"#fff",flexShrink:0}}>AI</div>
              <div>
                <div style={{fontSize:"0.85rem",fontWeight:500}}>ConneqtAI Assistant</div>
                <div style={{fontSize:"0.72rem",color:"#00d4aa"}}>● Online — responding instantly</div>
              </div>
            </div>
            <div style={{padding:"1.25rem",display:"flex",flexDirection:"column",gap:"0.75rem",minHeight:240,maxHeight:280,overflowY:"auto"}}>
              {messages.map((m,i) => (
                <div key={i} style={{maxWidth:"88%",padding:"0.7rem 0.875rem",borderRadius:"11px",fontSize:"0.825rem",lineHeight:1.5,whiteSpace:"pre-line",...(m.role==="bot"?{background:"rgba(108,99,255,0.13)",border:"1px solid rgba(108,99,255,0.22)",alignSelf:"flex-start"}:{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.09)",alignSelf:"flex-end",color:"rgba(240,240,248,0.65)"})}}>
                  {m.text}
                </div>
              ))}
            </div>
            <div style={{padding:"0.875rem 1.25rem",borderTop:"1px solid rgba(255,255,255,0.07)",display:"flex",gap:"0.625rem"}}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Type your message..." style={{flex:1,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:"8px",padding:"0.6rem 0.875rem",fontSize:"0.825rem",color:"#f0f0f8",outline:"none",fontFamily:"inherit"}}/>
              <button onClick={send} style={{width:34,height:34,borderRadius:"8px",background:"linear-gradient(135deg,#6c63ff,#a89cff)",border:"none",cursor:"pointer",color:"#fff",fontSize:"0.9rem",flexShrink:0}}>↑</button>
            </div>
          </div>
          <div>
            <p style={{fontSize:"0.95rem",color:"rgba(240,240,248,0.5)",lineHeight:1.7,marginBottom:"1.75rem"}}>Every ConneqtAI system is custom-built, brand-trained and production-ready from day one.</p>
            <div style={{display:"flex",flexDirection:"column",gap:"0.875rem"}}>
              {["Instant responses — no wait times, no off-hours","Trained on your business — products, services and FAQs","Lead capture built in — qualifies visitors automatically","CRM integration — syncs leads to your existing tools","Escalation logic — hands off complex queries to your team"].map(f=>(
                <div key={f} style={{display:"flex",alignItems:"flex-start",gap:"0.75rem"}}>
                  <div style={{width:20,height:20,borderRadius:"5px",background:"rgba(0,212,170,0.1)",border:"1px solid rgba(0,212,170,0.25)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",color:"#00d4aa",minWidth:20,marginTop:"2px"}}>✓</div>
                  <span style={{fontSize:"0.875rem",color:"rgba(240,240,248,0.6)",lineHeight:1.5}}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
