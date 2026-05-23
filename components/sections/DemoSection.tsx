"use client";
import { useState } from "react";

const REPLIES = [
  "Great question! We have packages for every stage — Starter, Growth and Enterprise. Want to discuss which fits best?",
  "Most clients go live in 2–4 weeks. Want to book a quick call to map out your project?",
  "We'd love to help! Email us at hello@conneqtai.com and we'll respond within 24 hours.",
  "Absolutely — everything is built custom for your business. No generic solutions here.",
];

const FEATURES = [
  "Responds instantly — 24/7, no queues",
  "Trained on your products, services and FAQs",
  "Captures and qualifies leads automatically",
  "Syncs with your CRM and existing tools",
  "Escalates complex queries to your team",
];

export default function DemoSection() {
  const [messages, setMessages] = useState([
    { role: "bot" as const, text: "Hi! I'm your AI assistant. I can help with pricing, services and more. What can I do for you? 👋" },
    { role: "user" as const, text: "How much does an AI chatbot cost?" },
    { role: "bot" as const, text: "Great question! We have three packages:\n\n🚀 Starter — Website chatbot\n⚡ Growth — Chatbot + leads + CRM sync\n🏢 Enterprise — Full AI system\n\nWant to find the right fit?" },
  ]);
  const [input, setInput] = useState("");
  const [ri, setRi] = useState(0);

  const send = () => {
    const txt = input.trim();
    if (!txt) return;
    setInput("");
    setMessages(p => [...p, { role: "user" as const, text: txt }]);
    setTimeout(() => {
      setMessages(p => [...p, { role: "bot" as const, text: REPLIES[ri % REPLIES.length] }]);
      setRi(r => r + 1);
    }, 650);
  };

  return (
    <section id="demo" style={{
      padding: "6rem 1.5rem",
      background: "rgba(255,255,255,0.015)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 400,
        background: "radial-gradient(ellipse, rgba(108,99,255,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7c6dff", display: "block", marginBottom: "1rem" }}>Live preview</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, color: "#f0f0f8", marginBottom: "1rem" }}>
            See exactly what<br />your customers experience.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(240,240,248,0.5)", maxWidth: 480, lineHeight: 1.75 }}>
            Type a message below — this is what a real ConneqtAI chatbot feels like.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "3rem", alignItems: "center",
        }}>
          {/* Chat window */}
          <div style={{
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "24px", overflow: "hidden",
            background: "rgba(6,6,18,0.97)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(108,99,255,0.08)",
          }}>
            {/* Header */}
            <div style={{
              padding: "1rem 1.375rem",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              display: "flex", alignItems: "center", gap: "0.875rem",
              background: "rgba(255,255,255,0.025)",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "10px",
                background: "linear-gradient(135deg, #6c63ff, #00d4aa)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.75rem", fontWeight: 700, color: "#fff", flexShrink: 0,
                boxShadow: "0 0 16px rgba(108,99,255,0.5)",
              }}>AI</div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>ConneqtAI Assistant</div>
                <div style={{ fontSize: "0.72rem", color: "#00d4aa", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <span style={{ width: 5, height: 5, background: "#00d4aa", borderRadius: "50%", display: "inline-block", animation: "blink 2s ease infinite" }} />
                  Online — responding instantly
                </div>
              </div>
            </div>

            {/* Messages */}
            <div style={{
              padding: "1.375rem",
              display: "flex", flexDirection: "column", gap: "0.875rem",
              minHeight: 260, maxHeight: 300, overflowY: "auto",
            }}>
              {messages.map((m, i) => (
                <div key={i} style={{
                  maxWidth: "88%", padding: "0.8rem 1rem",
                  borderRadius: "14px", fontSize: "0.875rem", lineHeight: 1.55,
                  whiteSpace: "pre-line",
                  ...(m.role === "bot"
                    ? { background: "rgba(108,99,255,0.13)", border: "1px solid rgba(108,99,255,0.22)", borderBottomLeftRadius: "4px", alignSelf: "flex-start", color: "#f0f0f8" }
                    : { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderBottomRightRadius: "4px", alignSelf: "flex-end", color: "rgba(240,240,248,0.7)" }),
                }}>
                  {m.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div style={{
              padding: "1rem 1.375rem",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              display: "flex", gap: "0.75rem",
            }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && send()}
                placeholder="Type a message..."
                style={{
                  flex: 1, background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "10px", padding: "0.7rem 1rem",
                  fontSize: "0.875rem", color: "#f0f0f8",
                  outline: "none", fontFamily: "inherit",
                  transition: "border-color 0.2s ease",
                }}
              />
              <button onClick={send} style={{
                width: 38, height: 38, borderRadius: "10px",
                background: "linear-gradient(135deg, #6c63ff, #a89cff)",
                border: "none", cursor: "pointer", color: "#fff",
                fontSize: "1rem", flexShrink: 0,
                transition: "transform 0.2s ease",
              }}>↑</button>
            </div>
          </div>

          {/* Features */}
          <div>
            <p style={{ fontSize: "1rem", color: "rgba(240,240,248,0.5)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Every ConneqtAI system is custom-built and brand-trained — production-ready from day one.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {FEATURES.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: "6px", minWidth: 22,
                    background: "rgba(0,212,170,0.08)",
                    border: "1px solid rgba(0,212,170,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.72rem", color: "#00d4aa", marginTop: "2px",
                  }}>✓</div>
                  <span style={{ fontSize: "0.925rem", color: "rgba(240,240,248,0.65)", lineHeight: 1.55 }}>{f}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <a href="mailto:hello@conneqtai.com"
                className="cta-btn-primary"
                style={{
                  padding: "0.875rem 2rem", fontSize: "0.9rem", fontWeight: 500,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #6c63ff, #a89cff)",
                  color: "#fff", textDecoration: "none", display: "inline-block",
                  boxShadow: "0 0 30px rgba(108,99,255,0.35)",
                }}>
                Get your own AI chatbot →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
