"use client";
import { useState } from "react";

const initialMessages = [
  {
    role: "bot" as const,
    text: "👋 Hi! I'm your AI assistant. I can help with pricing, product questions, bookings and more. What can I help you with today?",
  },
  {
    role: "user" as const,
    text: "What services do you offer and how much does it cost?",
  },
  {
    role: "bot" as const,
    text: "Great question! We offer three core packages:\n\n🚀 Starter — AI chatbot for your website\n⚡ Growth — Chatbot + lead generation + CRM sync\n🏢 Enterprise — Full AI system with agents + automations\n\nWould you like me to book a free strategy call so we can find the perfect fit?",
  },
];

const features = [
  { text: "Instant responses — no queues, no wait times, no off-hours" },
  { text: "Trained on your business — products, services, tone, FAQs" },
  { text: "Lead capture built in — qualifies and books demos automatically" },
  { text: "CRM integration — syncs leads and conversations to your tools" },
  { text: "Escalation logic — hands off complex queries to your human team" },
];

export default function DemoSection() {
  const [messages, setMessages] =
    useState<{ role: "bot" | "user"; text: string }[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Thanks for your message! A member of the ConneqtAI team will follow up shortly. Or would you like to book a free strategy call right now? 📅",
        },
      ]);
    }, 1000);
  };

  return (
    <section
      id="demo"
      style={{
        padding: "6rem 2rem",
        background: "#0f0f18",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Chat UI */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              background: "rgba(10,10,16,0.9)",
              backdropFilter: "blur(20px)",
              overflow: "hidden",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(108,99,255,0.06)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "1rem 1.5rem",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #6c63ff, #00d4aa)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                AI
              </div>
              <div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                  ConneqtAI Assistant
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#00d4aa",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      background: "#00d4aa",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                  Online — responding instantly
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                minHeight: 300,
                maxHeight: 360,
                overflowY: "auto",
              }}
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  style={{
                    maxWidth: "85%",
                    padding: "0.75rem 1rem",
                    borderRadius: "12px",
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                    ...(m.role === "bot"
                      ? {
                          background: "rgba(108,99,255,0.12)",
                          border: "1px solid rgba(108,99,255,0.2)",
                          borderBottomLeftRadius: "4px",
                          alignSelf: "flex-start",
                          color: "#f0f0f8",
                        }
                      : {
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderBottomRightRadius: "4px",
                          alignSelf: "flex-end",
                          color: "rgba(240,240,248,0.7)",
                        }),
                  }}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div
              style={{
                padding: "1rem 1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "0.6rem 0.875rem",
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.875rem",
                  color: "#f0f0f8",
                  outline: "none",
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #6c63ff, #7b8cff)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  color: "#fff",
                  transition: "all 0.2s",
                }}
              >
                ↑
              </button>
            </div>
          </div>

          {/* Text */}
          <div>
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
              Live Preview
            </span>
            <h2
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
                color: "#f0f0f8",
              }}
            >
              See your AI system
              <br />
              in action
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(240,240,248,0.55)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Every ConneqtAI system is custom-built, brand-trained and
              production-ready. This is what your customers experience from day
              one.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {features.map((f) => (
                <div
                  key={f.text}
                  style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "6px",
                      minWidth: 22,
                      background: "rgba(0,212,170,0.12)",
                      border: "1px solid rgba(0,212,170,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      color: "#00d4aa",
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </div>
                  <span style={{ fontSize: "0.9rem", color: "rgba(240,240,248,0.65)", lineHeight: 1.5 }}>
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
