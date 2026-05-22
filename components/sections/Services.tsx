"use client";
"use client";
import { useState } from "react";

const services = [
  {
    icon: "🤖",
    title: "AI Chatbots",
    desc: "Smart, branded chatbots that handle customer queries, qualify leads and convert visitors — 24/7, without human intervention.",
  },
  {
    icon: "⚡",
    title: "AI Agents",
    desc: "Autonomous AI agents that reason, plan and execute multi-step tasks across your business tools and data sources.",
  },
  {
    icon: "🎯",
    title: "AI Customer Support",
    desc: "Intelligent support systems that resolve tickets, answer FAQs and escalate complex issues — reducing support costs dramatically.",
  },
  {
    icon: "🔄",
    title: "Workflow Automation",
    desc: "End-to-end AI workflows that connect your tools, eliminate repetitive tasks and run complex processes automatically.",
  },
  {
    icon: "📊",
    title: "AI Lead Generation",
    desc: "Proactive AI systems that engage website visitors, qualify prospects and deliver sales-ready leads directly to your pipeline.",
  },
  {
    icon: "🏢",
    title: "Internal AI Systems",
    desc: "Custom AI tools for your team — knowledge bases, internal assistants and intelligent onboarding systems built for your organisation.",
  },
];

function ServiceCard({ icon, title, desc }: (typeof services)[0]) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "2rem",
        border: `1px solid ${hovered ? "rgba(108,99,255,0.35)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "16px",
        background: hovered
          ? "rgba(108,99,255,0.04)"
          : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(108,99,255,0.1)"
          : "none",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "12px",
          background:
            "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,170,0.1))",
          border: "1px solid rgba(108,99,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          marginBottom: "1.25rem",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "1.05rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
          color: "#f0f0f8",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "0.9rem",
          color: "rgba(240,240,248,0.55)",
          lineHeight: 1.65,
        }}
      >
        {desc}
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          fontSize: "0.8rem",
          color: "#7b8cff",
          marginTop: "1rem",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-8px)",
          transition: "all 0.3s",
        }}
      >
        Explore ↗
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="solutions" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "1rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#7b8cff",
            }}
          >
            Our Solutions
          </span>
        </div>
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
          Everything your business
          <br />
          needs from AI
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(240,240,248,0.55)",
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: "3rem",
          }}
        >
          From intelligent chatbots to full workflow automation — we build
          production-ready AI systems tailored to your operations.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
