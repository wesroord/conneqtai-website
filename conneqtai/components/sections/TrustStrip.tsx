"use client";

const stats = [
  { num: "24/7", label: "Always online" },
  { num: "80%", label: "Support automated" },
  { num: "3×", label: "Faster response" },
  { num: "60%", label: "Cost reduction" },
  { num: "100%", label: "Custom built" },
];

export default function TrustStrip() {
  return (
    <div style={{
      padding: "2rem 1.5rem",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(255,255,255,0.015)",
      overflowX: "auto",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: "clamp(1.5rem, 4vw, 3rem)", flexWrap: "wrap",
      }}>
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center", minWidth: "80px" }}>
            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.4rem, 3vw, 1.75rem)", fontWeight: 800,
              background: "linear-gradient(135deg, #f0f0f8, #a89cff)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>{s.num}</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(240,240,248,0.4)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "0.2rem" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
