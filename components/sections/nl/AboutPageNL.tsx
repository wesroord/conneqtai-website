export default function AboutPageNL(){
  return(
    <div style={{background:"#000005",minHeight:"100vh"}}>
      <section style={{padding:"80px 24px 64px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 100% 80% at 50% 0%,rgba(119,0,255,.18) 0%,transparent 60%),#000005",zIndex:0}}/>
        <div style={{position:"relative",zIndex:2,maxWidth:"900px",margin:"0 auto"}}>
          <span style={{fontSize:"11px",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:"#ff00aa",display:"block",marginBottom:"16px"}}>Over mij</span>
          <h1 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(32px,6vw,52px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.1,color:"#fff",marginBottom:"24px"}}>Gebouwd door iemand die<br/><span className="chrome">AI elke dag gebruikt.</span></h1>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",gap:"48px",marginTop:"48px",alignItems:"start"}}>
            <div>
              <div style={{width:"80px",height:"80px",borderRadius:"20px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px",marginBottom:"24px"}}>👋</div>
              <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"28px",fontWeight:800,color:"#fff",marginBottom:"8px",letterSpacing:"-.02em"}}>Wes Roord</h2>
              <p style={{fontSize:"13px",color:"#ff00aa",fontWeight:600,marginBottom:"24px",letterSpacing:".04em",textTransform:"uppercase"}}>Oprichter, ConneqtAI</p>
              <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                {[
                  {icon:"🏢",label:"E-commerce Specialist","val":"Sleiderink Bouwmaterialen"},
                  {icon:"🏓",label:"Eigenaar","val":"PadelTown"},
                  {icon:"📍",label:"Locatie","val":"Waar mijn laptop ook is"},
                  {icon:"🎂",label:"Geboren","val":"22 april 1999"},
                ].map(item=>(
                  <div key={item.label} style={{display:"flex",gap:"14px",alignItems:"center",padding:"14px 18px",borderRadius:"12px",border:"1px solid rgba(255,255,255,.07)",background:"rgba(255,255,255,.02)"}}>
                    <span style={{fontSize:"20px"}}>{item.icon}</span>
                    <div>
                      <div style={{fontSize:"10px",color:"rgba(255,255,255,.4)",textTransform:"uppercase",letterSpacing:".08em",marginBottom:"2px"}}>{item.label}</div>
                      <div style={{fontSize:"14px",color:"#fff",fontWeight:500}}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
              <div style={{padding:"28px",borderRadius:"16px",border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.02)"}}>
                <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",fontWeight:700,color:"#fff",marginBottom:"12px"}}>Hoe het begon</h3>
                <p style={{fontSize:"14px",color:"rgba(255,255,255,.7)",lineHeight:1.8}}>Als e-commerce specialist bij Sleiderink kwam ik vroeg in aanraking met AI. Wat begon als nieuwsgierigheid werd al snel een obsessie. Ik bracht mijn avonden door met bouwen, testen, stuk maken en opnieuw bouwen, puur om te begrijpen hoe ver AI kon gaan.</p>
              </div>
              <div style={{padding:"28px",borderRadius:"16px",border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.02)"}}>
                <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",fontWeight:700,color:"#fff",marginBottom:"12px"}}>De eerste klanten</h3>
                <p style={{fontSize:"14px",color:"rgba(255,255,255,.7)",lineHeight:1.8}}>Ik begon wat ik bouwde toe te passen bij bedrijven uit mijn omgeving. Gratis. Gewoon om te zien wat er gebeurde. De resultaten waren direct zichtbaar. Ondernemers die dagelijks werden overspoeld met emails, berichten en telefoontjes hoefden dat opeens bijna niet meer te doen. De chatbot pakte het gewoon op. Die reactie maakte me duidelijk: hier zit iets in.</p>
              </div>
              <div style={{padding:"28px",borderRadius:"16px",border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.02)"}}>
                <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",fontWeight:700,color:"#fff",marginBottom:"12px"}}>Waarom ConneqtAI</h3>
                <p style={{fontSize:"14px",color:"rgba(255,255,255,.7)",lineHeight:1.8}}>De meeste AI tools zijn gebouwd voor grote bedrijven met grote budgetten. Ik wilde diezelfde kracht toegankelijk maken voor elk ambitieus MKB bedrijf. Een chatbot die jouw bedrijf van binnen en buiten kent, werkt terwijl jij slaapt en zichzelf binnen een maand terugbetaalt. Dat is ConneqtAI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:"0 24px 64px"}}>
        <div style={{maxWidth:"900px",margin:"0 auto"}}>
          <div style={{padding:"48px",borderRadius:"20px",border:"1px solid rgba(255,0,170,.2)",background:"rgba(255,0,170,.04)",position:"relative",overflow:"hidden",textAlign:"center"}}>
            <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:400,height:200,background:"radial-gradient(ellipse,rgba(255,0,170,.1) 0%,transparent 70%)",pointerEvents:"none"}}/>
            <div style={{position:"relative",zIndex:1}}>
              <div style={{fontSize:"48px",marginBottom:"16px"}}>🎯</div>
              <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px,4vw,32px)",fontWeight:800,color:"#fff",marginBottom:"16px",letterSpacing:"-.02em"}}>Mijn missie</h2>
              <p style={{fontSize:"16px",color:"rgba(255,255,255,.8)",lineHeight:1.85,maxWidth:"600px",margin:"0 auto 32px"}}>Elk bedrijf verdient een chatbot die echt werkt. Geen generiek template. Geen tool die je zelf moet uitzoeken. Een echt AI systeem, gebouwd op jouw data, getraind in jouw stem, werkend voor jouw klanten 24 uur per dag. Ik besta om dat toegankelijk te maken voor elk ambitieus bedrijf, ongeacht de grootte.</p>
              <div style={{position:"relative",display:"inline-block"}}>
                <div style={{position:"absolute",inset:"-3px",borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff,#00aaff)",zIndex:-1,animation:"glowRot 3s linear infinite",filter:"blur(10px)",opacity:.55}}/>
                <a href="mailto:hello@conneqtai.com" style={{position:"relative",padding:"14px 32px",fontSize:"14px",fontWeight:700,borderRadius:"10px",background:"linear-gradient(135deg,#ff00aa,#7700ff)",color:"#fff",textDecoration:"none",display:"inline-block"}}>Werk met mij</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
