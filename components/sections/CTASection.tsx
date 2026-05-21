"use client";
export default function CTASection() {
  return (
    <section
      style={{
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, rgba(108,99,255,0.06) 0%, rgba(0,212,170,0.04) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Center glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 300,
          background:
            "radial-gradient(ellipse, rgba(108,99,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#7b8cff",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          Get Started
        </span>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "1.25rem",
            color: "#f0f0f8",
          }}
        >
          Ready to implement AI
          <br />
          in your business?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(240,240,248,0.55)",
            maxWidth: 560,
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Book a free 30-minute strategy call. We&apos;ll identify your biggest
          automation opportunities and show you exactly what&apos;s possible.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "0.875rem 2rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #6c63ff 0%, #7b8cff 100%)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(108,99,255,0.3)",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 0 45px rgba(108,99,255,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(108,99,255,0.3)";
            }}
          >
            Book a Free Strategy Call →
          </button>
          <button
            style={{
              padding: "0.875rem 2rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "#f0f0f8",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
