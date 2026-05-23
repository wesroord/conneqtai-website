export default function Footer() {
  return (
    <footer style={{padding:"3.5rem 1.5rem 2rem",background:"#04040e",borderTop:"1px solid rgba(255,255,255,0.07)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"2.5rem",marginBottom:"3rem"}}>
          <div style={{maxWidth:280}}>
            <div style={{fontFamily:"'Syne',sans-serif",fontSize:"1.3rem",fontWeight:800,background:"linear-gradient(90deg,#fff,#b8b0ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"0.875rem"}}>ConneqtAI</div>
            <p style={{fontSize:"0.875rem",color:"rgba(240,240,248,0.35)",lineHeight:1.7,marginBottom:"1.5rem"}}>Modern AI solutions that help businesses automate communication, support and workflows.</p>
            <a href="mailto:hello@conneqtai.com" style={{fontSize:"0.875rem",color:"#b8b0ff",textDecoration:"none"}}>✉ hello@conneqtai.com</a>
          </div>
          <div style={{display:"flex",gap:"3rem",flexWrap:"wrap"}}>
            <div>
              <h4 style={{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,240,248,0.25)",marginBottom:"1.25rem"}}>Solutions</h4>
              {["AI Chatbots","AI Customer Support","Workflow Automation"].map(i=>(
                <div key={i} style={{fontSize:"0.875rem",color:"rgba(240,240,248,0.45)",marginBottom:"0.7rem"}}>{i}</div>
              ))}
            </div>
            <div>
              <h4 style={{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,240,248,0.25)",marginBottom:"1.25rem"}}>Contact</h4>
              <a href="mailto:hello@conneqtai.com" style={{display:"block",fontSize:"0.875rem",color:"rgba(240,240,248,0.45)",textDecoration:"none"}}>hello@conneqtai.com</a>
            </div>
          </div>
        </div>
        <div style={{paddingTop:"1.5rem",borderTop:"1px solid rgba(255,255,255,0.07)"}}>
          <span style={{fontSize:"0.8rem",color:"rgba(240,240,248,0.2)"}}>© 2025 ConneqtAI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
