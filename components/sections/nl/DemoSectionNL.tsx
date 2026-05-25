"use client";
import { useState } from "react";
const REPLIES=["Alles 100% op maat. Jouw data, jouw toon, jouw merk. Nooit templates.","De meeste klanten gaan live in 2 tot 4 weken. Wil je dat we uitwerken wat we voor jou bouwen?","Mail hello@conneqtai.com en we reageren binnen 24 uur met een helder plan.","ROI is meestal al zichtbaar in week één. De meeste klanten besparen 60% op supportkosten."];
export default function DemoSectionNL(){
  const [msgs,setMsgs]=useState([{r:"bot",t:"Hey! Ik ben jouw AI. Stel me alles over prijzen, tijdlijnen of wat we bouwen."},{r:"user",t:"Wat kan ConneqtAI voor ons bouwen?"},{r:"bot",t:"We bouwen drie kernsystemen:\n\nAI Chatbots, bezoekers betrekken en converteren 24/7\nAI Support, vragen afhandelen op schaal\nWorkflow Automatisering, herhaling elimineren\n\nAlles gebouwd op maat op jouw data."}]);
  const [input,setInput]=useState("");
  const [ri,setRi]=useState(0);
  const send=()=>{const t=input.trim();if(!t)return;setInput("");setMsgs(p=>[...p,{r:"user",t}]);setTimeout(()=>{setMsgs(p=>[...p,{r:"bot",t:REPLIES[ri%REPLIES.length]}]);setRi(r=>r+1)},900);};
  return(
    <section id="demo" style={{padding:"44px 22px",background:"#020010",borderTop:"1px solid rgba(255,255,255,.05)",borderBottom:"1px solid rgba(255,255,255,.05)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:"9px",letterSpacing:".18em",textTransform:"uppercase",color:"rgba(255,0,170,.6)",marginBottom:"18px",display:"flex",alignItems:"center",gap:"8px"}}>demo<span style={{flex:1,height:"1px",background:"linear-gradient(90deg,rgba(255,0,170,.3),transparent)"}}/></div>
        <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px,5vw,30px)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.08,color:"#fff",marginBottom:"8px"}}>Zie het live.<br/>Meteen nu.</h2>
        <p style={{fontSize:"12px",color:"rgba(255,255,255,.65)",lineHeight:1.75,marginBottom:"24px",maxWidth:"340px"}}>Dit is wat jouw klanten ervaren. Probeer het.</p>
        <div style={{border:"1px solid rgba(255,255,255,.07)",borderRadius:"16px",overflow:"hidden",background:"#000005"}}>
          <div style={{padding:"12px 16px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",gap:"10px",background:"rgba(255,255,255,.02)"}}>
            <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:700,color:"#fff",flexShrink:0}}>AI</div>
            <div>
              <div style={{fontSize:"12px",fontWeight:600}}>ConneqtAI Assistent</div>
              <div style={{fontSize:"9px",color:"#ff00aa",display:"flex",alignItems:"center",gap:"3px",fontFamily:"'Inter',sans-serif"}}><span style={{width:"4px",height:"4px",borderRadius:"50%",background:"#ff00aa",display:"inline-block",animation:"nbp 1.5s ease infinite"}}/>ONLINE</div>
            </div>
          </div>
          <div style={{padding:"12px",display:"flex",flexDirection:"column",gap:"7px",minHeight:"200px",maxHeight:"220px",overflowY:"auto"}}>
            {msgs.map((m,i)=><div key={i} style={{maxWidth:"90%",padding:"8px 11px",borderRadius:"11px",fontSize:"11px",lineHeight:1.5,whiteSpace:"pre-line",...(m.r==="bot"?{background:"rgba(255,0,170,.07)",border:"1px solid rgba(255,0,170,.15)",borderBottomLeftRadius:"3px",alignSelf:"flex-start"}:{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderBottomRightRadius:"3px",alignSelf:"flex-end",color:"rgba(255,255,255,.75)"})}}>{m.t}</div>)}
          </div>
          <div style={{padding:"9px 13px",borderTop:"1px solid rgba(255,255,255,.06)",display:"flex",gap:"7px"}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Stel een vraag..." style={{flex:1,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"8px",padding:"7px 10px",fontSize:"11px",color:"#fff",outline:"none",fontFamily:"inherit"}}/>
            <button onClick={send} style={{width:"30px",height:"30px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",border:"none",cursor:"pointer",color:"#fff",fontSize:"11px",flexShrink:0}}>↑</button>
          </div>
        </div>
      </div>
    </section>
  );
}
