"use client";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      textAlign: "center", position: "relative", overflow: "hidden",
      padding: "100px 1.5rem 60px",
    }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(108,99,255,0.22) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 85% 85%, rgba(0,212,170,0.1) 0%, transparent 55%), #05050c",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
      }} />
      <div style={{
        position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
        background: "rgba(108,99,255,0.12)", filter: "blur(100px)",
        top: "-150px", left: "50%", transform: "translateX(-50%)",
        animation: "heroOrb 8s ease-in-out infinite",
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto", width: "100%" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
          padding: "0.4rem 1rem", border: "1px solid rgba(108,99,255,0.3)",
          borderRadius: "100px", background: "rgba(108,99,255,0.08)", color: "#a89cff",
          marginBottom: "2rem",
        }}>
          <span style={{ width: 6, height: 6, background: "#00d4aa", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 6px #00d4aa", animation: "blink 2s ease infinite" }} />
          AI solutions for modern businesses
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2.6rem, 6vw, 5rem)",
          fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em",
          marginBottom: "1.5rem", color: "#f0f0f8",
        }}>
          AI systems that<br />
          <span style={{
            background: "linear-gradient(135deg, #fff 0%, #a89cff 40%, #00d4aa 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto", animation: "gradShift 5s ease infinite",
          }}>actually work</span><br />
          for your business.
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
          color: "rgba(240,240,248,0.5)", maxWidth: "560px",
          margin: "0 auto 2.5rem", lineHeight: 1.75, fontWeight: 300,
        }}>
          ConneqtAI builds intelligent AI agents, chatbots and automations that save time, improve customer experience and increase efficiency.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:hello@conneqtai.com" style={{
            padding: "0.875rem 2rem", fontSize: "0.9rem", fontWeight: 500,
            borderRadius: "10px", background: "linear-gradient(135deg, #6c63ff, #a89cff)",
            color: "#fff", border: "none", cursor: "pointer", textDecoration: "none",
            boxShadow: "0 0 30px rgba(108,99,255,0.35)", transition: "all 0.25s", display: "inline-block",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 45px rgba(108,99,255,0.5)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(108,99,255,0.35)"; }}
          >Get in touch →</a>
          <a href="#solutions" style={{
            padding: "0.875rem 2rem", fontSize: "0.9rem", fontWeight: 500,
            borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)", color: "rgba(240,240,248,0.8)",
            textDecoration: "none", transition: "all 0.2s", display: "inline-block",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
          >View solutions</a>
        </div>
      </div>

      <style>{`
        @keyframes heroOrb { 0%,100% { transform: translateX(-50%) scale(1); } 50% { transform: translateX(-50%) scale(1.1); } }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.2; } }
        @keyframes gradShift { 0%,100% { background-position:0%; } 50% { background-position:100%; } }
      `}</style>
    </section>
  );
}
