"use client";
import { useState } from "react";

const services = [
  { icon: "🤖", title: "AI Chatbots", desc: "Smart branded chatbots that handle customer queries, qualify leads and convert visitors — 24/7, without human intervention." },
  { icon: "⚡", title: "AI Agents", desc: "Autonomous agents that reason, plan and execute multi-step tasks across your business tools and data sources." },
  { icon: "🎯", title: "AI Customer Support", desc: "Intelligent support systems that resolve tickets, answer FAQs and escalate complex issues — reducing support costs dramatically." },
  { icon: "🔄", title: "Workflow Automation", desc: "End-to-end AI workflows that connect your tools, eliminate repetitive tasks and run complex processes automatically." },
  { icon: "🌐", title: "Website Development", desc: "Modern, fast and conversion-focused websites built with the latest tech — designed to represent your business professionally online." },
  { icon: "🏢", title: "Internal AI Systems", desc: "Custom AI tools for your team — knowledge bases, internal assistants and intelligent onboarding systems built for your organisation." },
];

function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "1.75rem", borderRadius: "16px",
        border: `1px solid ${hovered ? "rgba(108,99,255,0.4)" : "rgba(255,255,255,0.07)"}`,
        background: hovered ? "rgba(108,99,255,0.04)" : "rgba(255,255,255,0.02)",
        transition: "all 0.3s", transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.3)" : "none",
        cursor: "default",
      }}
    >
      <div style={{
        width: 42, height: 42, borderRadius: "10px",
        background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.3rem", marginBottom: "1rem",
      }}>{icon}</div>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0f8" }}>{title}</div>
      <div style={{ fontSize: "0.875rem", color: "rgba(240,240,248,0.5)", lineHeight: 1.65 }}>{desc}</div>
      <div style={{ fontSize: "0.78rem", color: "#a89cff", marginTop: "1rem", opacity: hovered ? 1 : 0, transform: hovered ? "translateX(0)" : "translateX(-8px)", transition: "all 0.3s" }}>Learn more →</div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="solutions" style={{ padding: "5rem 1.5rem", background: "#05050c" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#a89cff", display: "block", marginBottom: "0.875rem" }}>Our Solutions</span>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.12, marginBottom: "1rem", color: "#f0f0f8" }}>
          Everything your business<br />needs from AI
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(240,240,248,0.5)", maxWidth: 520, lineHeight: 1.7, marginBottom: "3rem" }}>
          From intelligent chatbots to full workflow automation — production-ready AI systems tailored to your operations.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1rem" }}>
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}
