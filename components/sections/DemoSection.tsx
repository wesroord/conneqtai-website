"use client";
import { useState } from "react";
const REPLIES = [
  "Every system is 100% custom — your data, your tone, your brand. No templates. Ever.",
  "Most clients go live in 2–4 weeks. Want us to map out exactly what we'd build for you?",
  "Email us at hello@conneqtai.com — we'll respond within 24 hours with a clear proposal.",
  "The ROI usually becomes obvious in week one. Most clients save 60%+ on support costs alone.",
  "Absolutely. Let's set up a free strategy session and show you exactly what's possible.",
];
export default function DemoSection() {
  const [messages,setMessages] = useState([
    {r:"bot",t:"Hey. I'm your AI. Ask me anything — pricing, what we build, how fast we move. 👋"},
    {r:"user",t:"What makes ConneqtAI different?"},
    {r:"bot",t:"We don't sell templates or generic bots.\n\nEvery system is built from scratch — trained on your data, your tone, your exact workflows.\n\nThe result? AI that sounds like you and solves your real problems.\n\nWant to see what we'd build for your business?"},
  ]);
  const [input,setInput] = useState("");
  const [ri,setRi] = useState(0);
  const send = () => {
    const t = input.trim(); if(!t) return;
    setInput("");
    setMessages(p=>[...p,{r:"user",t}]);
    setTimeout(()=>{
      setMessages(p=>[...p,{r:"bot",t:REPLIES[ri%REPLIES.length]}]);
      setRi(r=>r+1);
    },900);
  };
  return (
    <section id="demo" style={{padding:"44px 20px",position:"relative",zIndex:5,background:"rgba(255,255,255,.012)",borderTop:"1px solid rgba(255,255,255,.05)",borderBottom:"1px solid rgba(255,255,255,.05)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".18em",textTransform:"uppercase",color:"rgba(0,212,170,.7)",marginBottom:"20px",display:"flex",alignItems:"center",gap:"8px"}}>// 04 — demo<span style={{flex:1,height:"1px",background:"linear-gradient(90deg,rgba(0,212,170,.3),transparent)"}}/></div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(22px,5vw,30px)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.08,color:"#f0f0f8",marginBottom:"8px"}}>See it. Feel it.<br/>Ship it.</h2>
        <p style={{fontSize:"12px",color:"rgba(240,240,248,.38)",lineHeight:1.75,marginBottom:"26px",maxWidth:"360px"}}>This is exactly what your customers will experience. Try it now.</p>
        <div style={{border:"1px solid rgba(255,255,255,.08)",borderRadius:"20px",overflow:"hidden",background:"rgba(4,4,16,.98)",boxShadow:"0 32px 80px rgba(0,0,0,.6),0 0 0 1px rgba(108,99,255,.05)"}}>
          <div style={{padding:"12px 16px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",gap:"10px",background:"rgba(255,255,255,.025)"}}>
            <div style={{width:"32px",height:"32px",borderRadius:"9px",background:"linear-gradient(135deg,#6c63ff,#00d4aa)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:700,color:"#fff",flexShrink:0,boxShadow:"0 0 16px rgba(108,99,255,.5)"}}>AI</div>
            <div>
              <div style={{fontSize:"12px",fontWeight:600}}>ConneqtAI Assistant</div>
              <div style={{fontSize:"10px",color:"#00d4aa",display:"flex",alignItems:"center",gap:"3px"}}><span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#00d4aa",boxShadow:"0 0 5px #00d4aa",display:"inline-block",animation:"dotPulse 2s ease infinite"}}/> responding instantly</div>
            </div>
          </div>
          <div style={{padding:"14px",display:"flex",flexDirection:"column",gap:"8px",minHeight:"200px",maxHeight:"220px",overflowY:"auto"}}>
            {messages.map((m,i)=>(
              <div key={i} style={{maxWidth:"90%",padding:"8px 12px",borderRadius:"12px",fontSize:"11px",lineHeight:1.5,whiteSpace:"pre-line",...(m.r==="bot"?{background:"rgba(108,99,255,.12)",border:"1px solid rgba(108,99,255,.2)",borderBottomLeftRadius:"3px",alignSelf:"flex-start"}:{background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",borderBottomRightRadius:"3px",alignSelf:"flex-end",color:"rgba(240,240,248,.65)"})}}>
                {m.t}
              </div>
            ))}
          </div>
          <div style={{padding:"10px 14px",borderTop:"1px solid rgba(255,255,255,.06)",display:"flex",gap:"8px"}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Ask anything..." style={{flex:1,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:"9px",padding:"7px 11px",fontSize:"11px",color:"#f0f0f8",outline:"none",fontFamily:"inherit"}}/>
            <button onClick={send} style={{width:"32px",height:"32px",borderRadius:"9px",background:"linear-gradient(135deg,#6c63ff,#a89cff)",border:"none",cursor:"pointer",color:"#fff",fontSize:"12px",flexShrink:0}}>↑</button>
          </div>
        </div>
      </div>
    </section>
  );
}
