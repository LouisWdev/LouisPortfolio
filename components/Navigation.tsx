"use client";

import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";


export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[#00f3ff]/25"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <button
          onClick={() =>
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
          }
className="flex items-center gap-2 cursor-pointer"
        >
          <Terminal size={18} className="text-[#ff0033]" />
          <span
            className="neon-text-red text-lg tracking-widest font-bold animate-flicker"
            style={{ fontFamily: "var(--font-share-tech-mono)" }}
          >
            LOUISW.EXE
          </span>
        </button>
      </div>
    </nav>
  );
}
