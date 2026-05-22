// TrustStrip section
export default function TrustStrip() {
  const stats = [
    { num: "24/7", label: "Always Online" },
    { num: "80%", label: "Support Automated" },
    { num: "3×", label: "Faster Response" },
    { num: "60%", label: "Cost Reduction" },
    { num: "100%", label: "Custom Built" },
  ];

  return (
    <div
      style={{
        padding: "2.5rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "3rem",
        }}
      >
        {stats.map((s, i) => (
          <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #f0f0f8, #7b8cff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(240,240,248,0.5)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginTop: "0.2rem",
                }}
              >
                {s.label}
              </div>
            </div>
            {i < stats.length - 1 && (
              <div
                style={{
                  width: 1,
                  height: 40,
                  background: "rgba(255,255,255,0.08)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
