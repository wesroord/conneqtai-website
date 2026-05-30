"use client";
import { useState, useRef, useEffect } from "react";

const KB: {keys: string[], answer: string}[] = [
  {
    keys: ["project","projects","made","built","client","clients","case","cases","result","results","reference","example","work","portfolio"],
    answer: "So far I have completed the following projects:\n\n🏓 PadelTown (2024)\nAn AI chatbot for this padel sports club. The chatbot handles 85% of all customer questions automatically.\n\nResults:\n✓ 340+ questions automated per month\n✓ 28 hours of staff time saved per week\n✓ 3x faster response time\n✓ €2,100 saved in staff costs per month\n\nLive at padel-town.nl.\n\nMore projects coming soon. Will you be next?"
  },
  {
    keys: ["price","pricing","cost","costs","package","packages","starter","growth","pro","investment","month","one-time"],
    answer: "I have three packages:\n\n🚀 Starter — €1,750 one-time + €375/month\nAI chatbot on your website, trained on your business, lead capture, custom tone of voice and monthly maintenance.\n\n⚡ Growth — €3,750 one-time + €595/month\nEverything in Starter plus advanced AI training, conversation flows, smarter lead qualification, email notifications and multiple data sources.\n\n🏢 Pro — €7,950 one-time + €895/month\nEverything in Growth plus WhatsApp integration, CRM connection, appointment scheduler, multilingual chatbot and priority support.\n\nAll prices are excluding VAT and starting prices. No long-term contract."
  },
  {
    keys: ["whatsapp","whats app"],
    answer: "WhatsApp integration is included in the Pro package (€6,950 one-time + €695/month).\n\nThe chatbot becomes available on WhatsApp too. You need a WhatsApp Business API account — free to apply for via Meta, takes 1 to 3 days. I handle everything else."
  },
  {
    keys: ["crm","hubspot","salesforce","pipedrive"],
    answer: "CRM connections are included in the Pro package.\n\nI connect the chatbot to your CRM system — HubSpot, Salesforce, Pipedrive and more. New leads are automatically created without anyone having to do anything manually."
  },
  {
    keys: ["long","fast","live","weeks","build","timeline","delivery","when","launch"],
    answer: "The build time depends on the package:\n\n🚀 Starter — 1 to 2 weeks\n⚡ Growth — 2 to 3 weeks\n🏢 Pro — 3 to 4 weeks\n\nThe exact time also depends on how quickly you provide the required information. Once I have everything, I get started straight away."
  },
  {
    keys: ["contract","cancel","cancellation","commitment","obligation","lock","payment","pay","deposit","invoice"],
    answer: "No long-term contract. The monthly fee is month-to-month cancellable.\n\nPayment is split in two:\n✓ 50% deposit before I start building\n✓ 50% upon delivery of the chatbot\n\nThe monthly fee starts after the chatbot goes live. I keep clients through results, not contracts."
  },
  {
    keys: ["technical","install","installation","code","website","wordpress","webflow"],
    answer: "You don't need to do anything technical.\n\nI build the chatbot, I install it and I maintain it. The installation is a small piece of code in your website header — I handle that myself or together with your web developer."
  },
  {
    keys: ["padeltown","padel","example","case","result","proof","client","customer"],
    answer: "PadelTown is one of my clients. Built for them in 2024.\n\nResults:\n✓ 340+ questions automated per month\n✓ 28 hours of staff time saved per week\n✓ 3x faster response time\n✓ €2,100 saved in staff costs per month\n\nThe chatbot handles 85% of all questions automatically. Live at padel-town.nl."
  },
  {
    keys: ["what","build","make","specialise","do","service","offer"],
    answer: "I specialise in one thing: custom AI chatbots.\n\nFrom a simple chatbot that answers questions and captures leads, to a fully integrated system with WhatsApp, CRM and an appointment scheduler.\n\nThree packages. One goal: results for your business."
  },
  {
    keys: ["contact","mail","email","call","appointment","meeting","intro"],
    answer: "Send an email to hello@conneqtai.com and I will come back within 24 hours with a clear plan.\n\nOr go to the pricing page and click 'Get in touch' on the package that suits you."
  },
  {
    keys: ["maintenance","update","optimisation","wrong","fix","adjust"],
    answer: "If the chatbot says something wrong, I fix it within 24 hours.\n\nEvery system is thoroughly tested before launch. And every month I check the conversation data and optimise where needed. That is what the monthly fee is for."
  },
  {
    keys: ["roi","return","value","worth","pay off","earn back"],
    answer: "Most clients recover their investment within the first month.\n\nIf your team currently spends 20 hours a month on repetitive messages and emails, and a staff member costs €20 per hour, that is €400 per month. A Starter chatbot costs €250 per month. Already cheaper from month one — and the chatbot never has a bad day."
  },
  {
    keys: ["wes","founder","who","behind","person","owner"],
    answer: "I am Wes Roord, founder of ConneqtAI.\n\nThrough my work at Sleiderink as an e-commerce specialist I got into AI tools. I started experimenting at home and quickly saw how big the impact could be for businesses.\n\nI started building free chatbots for businesses around me. They were so happy with them that I decided to turn it into a business. I am also the owner of PadelTown — my first real case."
  },
  {
    keys: ["language","multilingual","english","german","french","spanish","international"],
    answer: "Multilingual chatbots are included in the Pro package.\n\nThe chatbot can then communicate in multiple languages — useful if you have international customers or operate in multiple countries."
  },
  {
    keys: ["appointment","schedule","calendar","calendly","book","booking"],
    answer: "An appointment scheduler connection is included in the Pro package.\n\nThe chatbot can then directly schedule appointments in your calendar — via Calendly, SimplyBook or another system. Visitors no longer need to email or call to make an appointment."
  },
  {
    keys: ["trained","data","information","knowledge","learn","training"],
    answer: "Every system is fully trained on your business data.\n\nI use your website, product information, frequently asked questions, price lists and any PDF documents. The chatbot learns your business inside and out. No generic answers."
  },
];

function getAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const item of KB) {
    if (item.keys.some(k => lower.includes(k))) return item.answer;
  }
  return "Great question! Send an email to hello@conneqtai.com and I will come back within 24 hours with a clear answer and a concrete plan for your business.";
}

export default function DemoSection(){
  const [msgs,setMsgs]=useState([
    {r:"bot",t:"Hey! I am the ConneqtAI chatbot. Ask me anything about the packages, pricing, build time or what I can do for your business."},
    {r:"user",t:"What exactly does ConneqtAI build?"},
    {r:"bot",t:"I specialise in one thing: custom AI chatbots.\n\nFrom a simple chatbot that answers questions and captures leads, to a fully integrated system with WhatsApp, CRM and appointment scheduling.\n\nThree packages. One goal: results for your business."}
  ]);
  const [input,setInput]=useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (msgs.length <= 3) return;
    if (chatBoxRef.current) chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [msgs]);

  const send=()=>{
    const t=input.trim();
    if(!t)return;
    setInput("");
    setMsgs(p=>[...p,{r:"user",t}]);
    setTimeout(()=>{
      setMsgs(p=>[...p,{r:"bot",t:getAnswer(t)}]);
    },700);
  };

  return(
    <section id="demo" style={{padding:"44px 22px",background:"#020010",borderTop:"1px solid rgba(255,255,255,.05)",borderBottom:"1px solid rgba(255,255,255,.05)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:"9px",letterSpacing:".18em",textTransform:"uppercase",color:"rgba(255,0,170,.6)",marginBottom:"18px",display:"flex",alignItems:"center",gap:"8px"}}>demo<span style={{flex:1,height:"1px",background:"linear-gradient(90deg,rgba(255,0,170,.3),transparent)"}}/></div>
        <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px,5vw,30px)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.08,color:"#fff",marginBottom:"8px"}}>See it live.<br/>Right now.</h2>
        <p style={{fontSize:"12px",color:"rgba(255,255,255,.65)",lineHeight:1.75,marginBottom:"24px",maxWidth:"340px"}}>Ask anything about the packages, pricing or what I can do for your business.</p>
        <div style={{border:"1px solid rgba(255,255,255,.07)",borderRadius:"16px",overflow:"hidden",background:"#000005"}}>
          <div style={{padding:"12px 16px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",gap:"10px",background:"rgba(255,255,255,.02)"}}>
            <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:700,color:"#fff",flexShrink:0}}>AI</div>
            <div>
              <div style={{fontSize:"12px",fontWeight:600}}>ConneqtAI Chatbot</div>
              <div style={{fontSize:"9px",color:"#ff00aa",display:"flex",alignItems:"center",gap:"3px",fontFamily:"'Inter',sans-serif"}}><span style={{width:"4px",height:"4px",borderRadius:"50%",background:"#ff00aa",display:"inline-block",animation:"nbp 1.5s ease infinite"}}/>ONLINE</div>
            </div>
          </div>
          <div ref={chatBoxRef} style={{padding:"12px",display:"flex",flexDirection:"column",gap:"7px",minHeight:"200px",maxHeight:"320px",overflowY:"auto"}}>
            {msgs.map((m,i)=><div key={i} style={{maxWidth:"90%",padding:"8px 11px",borderRadius:"11px",fontSize:"11px",lineHeight:1.6,whiteSpace:"pre-line",...(m.r==="bot"?{background:"rgba(255,0,170,.07)",border:"1px solid rgba(255,0,170,.15)",borderBottomLeftRadius:"3px",alignSelf:"flex-start"}:{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderBottomRightRadius:"3px",alignSelf:"flex-end",color:"rgba(255,255,255,.75)"})}}>{m.t}</div>)}
            
          </div>
          <div style={{padding:"9px 13px",borderTop:"1px solid rgba(255,255,255,.06)",display:"flex",gap:"7px"}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Ask about pricing, packages, build time..." style={{flex:1,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"8px",padding:"7px 10px",fontSize:"11px",color:"#fff",outline:"none",fontFamily:"inherit"}}/>
            <button onClick={send} style={{width:"30px",height:"30px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",border:"none",cursor:"pointer",color:"#fff",fontSize:"14px",flexShrink:0}}>↑</button>
          </div>
        </div>
      </div>
    </section>
  );
}
