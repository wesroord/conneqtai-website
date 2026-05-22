"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2.5rem",
        background: scrolled
          ? "rgba(5,5,8,0.92)"
          : "rgba(5,5,8,0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "background 0.3s ease",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "1.3rem",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          background: "linear-gradient(120deg, #fff 0%, #7b8cff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        ConneqtAI
      </span>

      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
        className="nav-links"
      >
        {["Solutions", "How It Works", "Demo", "Why Us"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
            style={{
              fontSize: "0.875rem",
              color: "rgba(240,240,248,0.55)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#f0f0f8")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color =
                "rgba(240,240,248,0.55)")
            }
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button
        style={{
          fontSize: "0.875rem",
          fontWeight: 500,
          padding: "0.5rem 1.25rem",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          background: "rgba(255,255,255,0.04)",
          color: "#f0f0f8",
          cursor: "pointer",
          transition: "all 0.2s",
          backdropFilter: "blur(10px)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.background = "rgba(255,255,255,0.08)";
          el.style.borderColor = "rgba(255,255,255,0.2)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.background = "rgba(255,255,255,0.04)";
          el.style.borderColor = "rgba(255,255,255,0.1)";
        }}
      >
        Book a Demo →
      </button>
    </nav>
  );
}
