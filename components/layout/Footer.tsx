export default function Footer() {
  return (
    <footer style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 22px",borderTop:"1px solid rgba(255,255,255,.06)",background:"rgba(3,3,10,.95)",position:"relative",zIndex:5,flexWrap:"wrap",gap:"8px"}}>
      <div style={{fontFamily:"'Syne',sans-serif",fontSize:"13px",fontWeight:800,color:"rgba(240,240,248,.45)"}}>ConneqtAI</div>
      <div style={{fontFamily:"'Space Mono',monospace",fontSize:"8px",color:"rgba(240,240,248,.15)",letterSpacing:".06em"}}>© 2025 CONNEQTAI // ALL RIGHTS RESERVED</div>
    </footer>
  );
}
