"use client";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "8rem 2rem 5rem",
        textAlign: "center",
      }}
    >
      {/* Layered background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(0,212,170,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 20% 90%, rgba(123,140,255,0.06) 0%, transparent 60%),
            #050508
          `,
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Glowing orb */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(108,99,255,0.1)",
          filter: "blur(100px)",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "heroPulse 8s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860, margin: "0 auto" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.78rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.4rem 1rem",
            border: "1px solid rgba(108,99,255,0.3)",
            borderRadius: "100px",
            background: "rgba(108,99,255,0.08)",
            color: "#7b8cff",
            marginBottom: "2rem",
            animation: "fadeUp 0.8s ease both",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: "#00d4aa",
              borderRadius: "50%",
              animation: "blink 2s ease infinite",
              display: "inline-block",
            }}
          />
          Next-generation AI systems for business
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            animation: "fadeUp 0.8s ease 0.1s both",
          }}
        >
          AI systems that{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #fff 0%, #7b8cff 45%, #00d4aa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            actually work
          </span>{" "}
          for your business.
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "1.15rem",
            color: "rgba(240,240,248,0.55)",
            maxWidth: 620,
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
            animation: "fadeUp 0.8s ease 0.2s both",
          }}
        >
          ConneqtAI builds intelligent AI agents, chatbots and automations that
          save time, improve customer experience and increase efficiency — at
          scale.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeUp 0.8s ease 0.3s both",
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
            Book a Demo →
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
            View Solutions
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes heroPulse {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.1); }
        }
      `}</style>
    </section>
  );
}
