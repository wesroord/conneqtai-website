"use client";
import { useState, useRef, useEffect } from "react";

const KB: {keys: string[], answer: string}[] = [
  {
    keys: ["prijs","prijzen","kost","kosten","pakket","pakketten","starter","growth","pro","investering","maand","eenmalig"],
    answer: "Ik heb drie pakketten:\n\n🚀 Starter — €1.750 eenmalig + €250/maand\nAI chatbot op je website, getraind op jouw bedrijf, lead capture, eigen tone of voice en maandelijks onderhoud.\n\n⚡ Growth — €3.750 eenmalig + €395/maand\nAlles uit Starter plus geavanceerde AI training, conversatieflows, slimmere leadkwalificatie, e-mail notificaties en meerdere databronnen.\n\n🏢 Pro — €6.950 eenmalig + €695/maand\nAlles uit Growth plus WhatsApp integratie, CRM koppeling, afspraakplanner, meertalige chatbot en prioriteit support.\n\nAlle prijzen zijn exclusief btw en vanaf-prijzen. Geen langlopend contract."
  },
  {
    keys: ["whatsapp","whats app"],
    answer: "WhatsApp integratie zit in het Pro pakket (€6.950 eenmalig + €695/maand).\n\nDe chatbot is dan ook bereikbaar via WhatsApp. Daarvoor heb je een WhatsApp Business API account nodig — dat vraag je gratis aan via Meta en duurt 1 tot 3 dagen. De rest regel ik."
  },
  {
    keys: ["crm","hubspot","salesforce","pipedrive"],
    answer: "CRM koppelingen zitten in het Pro pakket.\n\nIk koppel de chatbot aan jouw CRM systeem — denk aan HubSpot, Salesforce, Pipedrive en meer. Nieuwe leads worden automatisch aangemaakt zonder dat iemand er iets voor hoeft te doen."
  },
  {
    keys: ["lang","snel","live","weken","bouwen","bouwtijd","oplevering","wanneer"],
    answer: "De bouwtijd hangt af van het pakket:\n\n🚀 Starter — 1 tot 2 weken\n⚡ Growth — 2 tot 3 weken\n🏢 Pro — 3 tot 4 weken\n\nDe exacte tijd hangt ook af van hoe snel jij de benodigde informatie aanlevert. Zodra ik alles heb, ga ik direct aan de slag."
  },
  {
    keys: ["contract","opzeggen","opzeg","vast","verplicht","verplichting"],
    answer: "Geen langlopend contract. De maandelijkse fee is maand tot maand opzegbaar.\n\nIk behoud klanten op basis van resultaten, niet contracten."
  },
  {
    keys: ["technisch","installeren","installatie","code","website","wordpress","webflow"],
    answer: "Jij hoeft niets technisch te doen.\n\nIk bouw de chatbot, ik installeer hem en ik onderhoud hem. De installatie is een klein stukje code in de header van je website — dat regel ik zelf of samen met je webbouwer."
  },
  {
    keys: ["padeltown","padel","voorbeeld","case","resultaat","bewijs","klant"],
    answer: "PadelTown is een van mijn klanten. Voor hen gebouwd in 2024.\n\nResultaten:\n✓ 340+ vragen per maand automatisch afgehandeld\n✓ 28 uur personeelstijd bespaard per week\n✓ 3x snellere reactietijd\n✓ €2.100 bespaard op personeelskosten per maand\n\nDe chatbot handelt 85% van alle vragen automatisch af. Live te zien op padel-town.nl."
  },
  {
    keys: ["wat","bouw","maak","specialiseer","doen","dienst","service","aanbieding"],
    answer: "Ik ben gespecialiseerd in één ding: maatwerk AI chatbots.\n\nVan een simpele chatbot die vragen beantwoordt en leads opvangt, tot een volledig geïntegreerd systeem met WhatsApp, CRM en een afspraakplanner.\n\nDrie pakketten. Één doel: resultaat voor jouw bedrijf."
  },
  {
    keys: ["contact","mail","email","bellen","afspraak","gesprek","kennismaking"],
    answer: "Stuur een mail naar hello@conneqtai.com en ik kom binnen 24 uur met een helder plan.\n\nOf ga naar de prijzenpagina en klik op 'Neem contact op' bij het pakket dat bij je past."
  },
  {
    keys: ["onderhoud","update","optimalisatie","fout","verkeerd","aanpassen"],
    answer: "Als de chatbot iets verkeerd zegt, los ik dat binnen 24 uur op.\n\nElk systeem wordt uitgebreid getest voor de livegang. En elke maand check ik de gespreksdata en optimaliseer waar nodig. Dat is waar de maandelijkse fee voor is."
  },
  {
    keys: ["roi","terugverdien","rendement","investering","waard","lonen","verdien"],
    answer: "De meeste klanten verdienen hun investering terug binnen de eerste maand.\n\nAls je team nu 20 uur per maand kwijt is aan repetitieve berichten en emails, en een medewerker kost €20 per uur — dan is dat €400 per maand. Een Starter chatbot kost €250 per maand. Al na de eerste maand goedkoper, en dan heeft de chatbot ook nog eens nooit een slechte dag."
  },
  {
    keys: ["wes","oprichter","founder","wie","achter","persoon","eigenaar"],
    answer: "Ik ben Wes Roord, oprichter van ConneqtAI.\n\nVia mijn werk bij Sleiderink Bouwmaterialen als e-commerce specialist raakte ik in aanraking met AI tools. Ik begon thuis te experimenteren en zag al snel hoe groot de impact kon zijn voor bedrijven.\n\nIk startte met gratis chatbots bouwen voor bedrijven uit mijn omgeving. Ze waren er zo blij mee dat ik besloot er een bedrijf van te maken. Ik ben ook eigenaar van PadelTown — mijn eerste echte case."
  },
  {
    keys: ["taal","meertalig","engels","duits","frans","spaans","internationaal"],
    answer: "Meertalige chatbots zitten in het Pro pakket.\n\nDe chatbot kan dan in meerdere talen communiceren — handig als je internationale klanten hebt of actief bent in meerdere landen."
  },
  {
    keys: ["afspraak","plannen","agenda","calendly","boeken","booking"],
    answer: "Een afspraakplanner koppeling zit in het Pro pakket.\n\nDe chatbot kan dan direct afspraken inplannen in jouw agenda — via Calendly, SimplyBook of een ander systeem. Bezoekers hoeven niet meer te mailen of te bellen voor een afspraak."
  },
  {
    keys: ["getraind","data","informatie","kennis","leren","trainen"],
    answer: "Elk systeem wordt volledig getraind op jouw bedrijfsdata.\n\nIk gebruik je website, productinformatie, veelgestelde vragen, prijslijsten en eventuele PDF documenten. De chatbot leert jouw bedrijf van binnen en buiten kennen. Geen generieke antwoorden."
  },
];

function getAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const item of KB) {
    if (item.keys.some(k => lower.includes(k))) return item.answer;
  }
  return "Goede vraag! Stuur een mail naar hello@conneqtai.com en ik kom binnen 24 uur met een helder antwoord en een concreet plan voor jouw bedrijf.";
}

export default function DemoSectionNL(){
  const [msgs,setMsgs]=useState([
    {r:"bot",t:"Hey! Ik ben de ConneqtAI chatbot. Stel me alles over de pakketten, prijzen, bouwtijd of wat ik voor jouw bedrijf kan doen."},
    {r:"user",t:"Wat bouwt ConneqtAI precies?"},
    {r:"bot",t:"Ik ben gespecialiseerd in één ding: maatwerk AI chatbots.\n\nVan een simpele chatbot die vragen beantwoordt en leads opvangt, tot een volledig geïntegreerd systeem met WhatsApp, CRM en afspraakplanner.\n\nDrie pakketten. Één doel: resultaat voor jouw bedrijf."}
  ]);
  const [input,setInput]=useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (msgs.length <= 3) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
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
        <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px,5vw,30px)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.08,color:"#fff",marginBottom:"8px"}}>Zie het live.<br/>Meteen nu.</h2>
        <p style={{fontSize:"12px",color:"rgba(255,255,255,.65)",lineHeight:1.75,marginBottom:"24px",maxWidth:"340px"}}>Stel een vraag over de pakketten, prijzen of wat ik voor jouw bedrijf kan doen.</p>
        <div style={{border:"1px solid rgba(255,255,255,.07)",borderRadius:"16px",overflow:"hidden",background:"#000005"}}>
          <div style={{padding:"12px 16px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",gap:"10px",background:"rgba(255,255,255,.02)"}}>
            <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:700,color:"#fff",flexShrink:0}}>AI</div>
            <div>
              <div style={{fontSize:"12px",fontWeight:600}}>ConneqtAI Chatbot</div>
              <div style={{fontSize:"9px",color:"#ff00aa",display:"flex",alignItems:"center",gap:"3px",fontFamily:"'Inter',sans-serif"}}><span style={{width:"4px",height:"4px",borderRadius:"50%",background:"#ff00aa",display:"inline-block",animation:"nbp 1.5s ease infinite"}}/>ONLINE</div>
            </div>
          </div>
          <div style={{padding:"12px",display:"flex",flexDirection:"column",gap:"7px",minHeight:"200px",maxHeight:"320px",overflowY:"auto"}}>
            {msgs.map((m,i)=><div key={i} style={{maxWidth:"90%",padding:"8px 11px",borderRadius:"11px",fontSize:"11px",lineHeight:1.6,whiteSpace:"pre-line",...(m.r==="bot"?{background:"rgba(255,0,170,.07)",border:"1px solid rgba(255,0,170,.15)",borderBottomLeftRadius:"3px",alignSelf:"flex-start"}:{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderBottomRightRadius:"3px",alignSelf:"flex-end",color:"rgba(255,255,255,.75)"})}}>{m.t}</div>)}
            <div ref={bottomRef}/>
          </div>
          <div style={{padding:"9px 13px",borderTop:"1px solid rgba(255,255,255,.06)",display:"flex",gap:"7px"}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Stel een vraag over prijzen, pakketten, bouwtijd..." style={{flex:1,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"8px",padding:"7px 10px",fontSize:"11px",color:"#fff",outline:"none",fontFamily:"inherit"}}/>
            <button onClick={send} style={{width:"30px",height:"30px",borderRadius:"8px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",border:"none",cursor:"pointer",color:"#fff",fontSize:"14px",flexShrink:0}}>↑</button>
          </div>
        </div>
      </div>
    </section>
  );
}
