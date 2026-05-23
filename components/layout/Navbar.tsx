"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Solutions", "How It Works", "Why Us"];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2rem", height: "64px",
        background: scrolled ? "rgba(4,4,14,0.97)" : "rgba(4,4,14,0.75)",
        backdropFilter: "blur(24px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <a href="#" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Syne', sans-serif", fontSize: "1.25rem", fontWeight: 800,
            letterSpacing: "-0.025em",
            background: "linear-gradient(90deg, #fff 0%, #b8b0ff 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>ConneqtAI</span>
        </a>

        <div className="desktop-nav" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="nav-link"
              style={{ fontSize: "0.875rem", color: "rgba(240,240,248,0.5)", textDecoration: "none" }}>
              {l}
            </a>
          ))}
        </div>

        <a href="mailto:hello@conneqtai.com"
          className="cta-btn-primary desktop-nav"
          style={{
            fontSize: "0.875rem", fontWeight: 500,
            padding: "0.5rem 1.375rem", borderRadius: "8px",
            border: "1px solid rgba(168,156,255,0.4)",
            background: "rgba(168,156,255,0.08)", color: "#b8b0ff",
            textDecoration: "none",
            boxShadow: "0 0 20px rgba(108,99,255,0.1)",
          }}>
          Get in touch
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#f0f0f8", fontSize: "1.5rem", padding: "0.25rem" }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
          background: "rgba(4,4,14,0.99)", backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem",
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "1.1rem", color: "rgba(240,240,248,0.7)", textDecoration: "none" }}>
              {l}
            </a>
          ))}
          <a href="mailto:hello@conneqtai.com"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "1rem", fontWeight: 600, color: "#fff", textDecoration: "none",
              padding: "0.875rem 1.5rem", borderRadius: "10px",
              background: "linear-gradient(135deg, #6c63ff, #a89cff)",
              textAlign: "center",
            }}>
            Get in touch →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
