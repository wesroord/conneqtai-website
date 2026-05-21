const footerLinks = {
  Solutions: [
    "AI Chatbots",
    "AI Agents",
    "AI Support",
    "Workflow Automation",
    "Lead Generation",
  ],
  Company: ["About", "Case Studies", "Blog", "Contact"],
  Connect: ["hello@conneqtai.com", "LinkedIn", "Twitter / X", "Book a Demo"],
};

export default function Footer() {
  return (
    <footer
      style={{
        padding: "3.5rem 2rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "#050508",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "1.2rem",
                fontWeight: 800,
                background: "linear-gradient(120deg, #fff 0%, #7b8cff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.75rem",
              }}
            >
              ConneqtAI
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(240,240,248,0.5)",
                lineHeight: 1.6,
              }}
            >
              Modern AI solutions that help businesses automate communication,
              support, sales and workflows.
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(240,240,248,0.25)",
                    marginBottom: "1rem",
                  }}
                >
                  {heading}
                </h4>
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      color: "rgba(240,240,248,0.5)",
                      marginBottom: "0.6rem",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#f0f0f8")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(240,240,248,0.5)")
                    }
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span style={{ fontSize: "0.8rem", color: "rgba(240,240,248,0.25)" }}>
            © 2025 ConneqtAI. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {["in", "𝕏", "▶"].map((icon) => (
              <div
                key={icon}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  color: "rgba(240,240,248,0.5)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(108,99,255,0.4)";
                  el.style.color = "#f0f0f8";
                  el.style.background = "rgba(108,99,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.color = "rgba(240,240,248,0.5)";
                  el.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
