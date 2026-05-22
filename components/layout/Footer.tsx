export default function Footer() {
  return (
    <footer style={{padding:"3rem 1.5rem 2rem",background:"#05050c",borderTop:"1px solid rgba(255,255,255,0.07)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"2.5rem",marginBottom:"2.5rem"}}>
          <div style={{maxWidth:260}}>
            <div style={{fontFamily:"sans-serif",fontSize:"1.2rem",fontWeight:800,background:"linear-gradient(90deg,#fff,#a89cff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"0.75rem"}}>ConneqtAI</div>
            <p style={{fontSize:"0.85rem",color:"rgba(240,240,248,0.35)",lineHeight:1.65,marginBottom:"1.25rem"}}>Modern AI solutions that help businesses automate communication, support, sales and workflows.</p>
            <a href="mailto:hello@conneqtai.com" style={{fontSize:"0.85rem",color:"#a89cff",textDecoration:"none"}}>✉ hello@conneqtai.com</a>
          </div>
          <div style={{display:"flex",gap:"3rem",flexWrap:"wrap"}}>
            <div>
              <h4 style={{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,240,248,0.25)",marginBottom:"1rem"}}>Solutions</h4>
              {["AI Chatbots","AI Agents","AI Support","Workflow Automation","Website Development"].map(i=>(
                <div key={i} style={{fontSize:"0.85rem",color:"rgba(240,240,248,0.45)",marginBottom:"0.6rem"}}>{i}</div>
              ))}
            </div>
            <div>
              <h4 style={{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,240,248,0.25)",marginBottom:"1rem"}}>Contact</h4>
              <a href="mailto:hello@conneqtai.com" style={{display:"block",fontSize:"0.85rem",color:"rgba(240,240,248,0.45)",marginBottom:"0.6rem",textDecoration:"none"}}>hello@conneqtai.com</a>
            </div>
          </div>
        </div>
        <div style={{paddingTop:"1.5rem",borderTop:"1px solid rgba(255,255,255,0.07)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"}}>
          <span style={{fontSize:"0.78rem",color:"rgba(240,240,248,0.2)"}}>© 2025 ConneqtAI. All rights reserved.</span>
          <span style={{fontSize:"0.78rem",color:"rgba(240,240,248,0.2)"}}>Built with AI. Powered by ConneqtAI.</span>
        </div>
      </div>
    </footer>
  );
}
