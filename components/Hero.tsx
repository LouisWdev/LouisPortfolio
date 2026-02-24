"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const TYPING_STRINGS = [
  "[ FULL-STACK DEVELOPER ]",
  "[ CHAOS SPACE MARINE ]",
  "[ DIAMOND TERRAN ]",
  "[ SERVANT OF THE OMNISSIAH ]",
];

function TypingSubtitle() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => {
        setPause(false);
        setDeleting(true);
      }, 2200);
      return () => clearTimeout(t);
    }

    const speed = deleting ? 45 : 75;
    const target = TYPING_STRINGS[index];

    const t = setTimeout(() => {
      if (!deleting) {
        if (subIndex < target.length) {
          setSubIndex((s) => s + 1);
        } else {
          setPause(true);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((s) => s - 1);
        } else {
          setDeleting(false);
          setIndex((i) => (i + 1) % TYPING_STRINGS.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [subIndex, deleting, pause, index]);

  return (
    <div className="h-9 flex items-center justify-center">
      <span className="neon-text-blue text-base md:text-xl tracking-[0.18em]">
        {TYPING_STRINGS[index].substring(0, subIndex)}
        <span
          className="animate-pulse ml-0.5"
          style={{ color: "#ff0033", textShadow: "0 0 5px #ff0033" }}
        >
          █
        </span>
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden circuit-grid"
    >
      {/* Static scanlines texture */}
      <div className="scanlines absolute inset-0 z-[1] pointer-events-none" />

      {/* Moving scanline beam */}
      <div
        className="absolute left-0 w-full h-0.5 pointer-events-none z-[2] animate-scanline"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,243,255,0.25), transparent)",
        }}
      />

      {/* Corner decorations */}
      <div
        className="absolute top-20 left-4 md:left-10 text-xs tracking-widest pointer-events-none z-[3]"
        style={{ color: "#ff0033", opacity: 0.6 }}
      >
        &gt; SYS_BOOT_OK
        <br />
        &gt; NEURAL_LINK: ACTIVE
        <br />
        &gt; THREAT_LEVEL: NOMINAL
      </div>
      <div
        className="absolute top-20 right-4 md:right-10 text-xs tracking-widest text-right pointer-events-none z-[3]"
        style={{ color: "#00f3ff", opacity: 0.6 }}
      >
        VER: 2.7.4_OMEGA
        <br />
        SEC: ALPHA-CLEARANCE
        <br />
        ENV: PRODUCTION
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 select-none">
        {/* Pre-title */}
        <p
          className="text-xs md:text-sm tracking-[0.5em] mb-6"
          style={{ color: "#556677" }}
        >
          {"// IDENTITY CONFIRMED — PORTFOLIO v2.0 //"}
        </p>

        {/* Glitch title */}
        <h1
          className="glitch text-7xl sm:text-8xl md:text-[10rem] font-bold tracking-[0.15em] mb-2"
          data-text="LOUIS"
          style={{
            fontFamily: "var(--font-share-tech-mono)",
            color: "#ff4466",
            textShadow: "0 0 10px rgba(255,68,102,0.7), 0 0 28px rgba(255,68,102,0.3)",
          }}
        >
          LOUIS
        </h1>

        {/* Typing subtitle */}
        <div className="mt-4 mb-10">
          <TypingSubtitle />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 justify-center mb-10">
          <span
            className="h-px flex-1 max-w-[80px]"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,0,51,0.5))",
            }}
          />
          <span className="text-xs tracking-[0.3em]" style={{ color: "#556677" }}>
            OMNISSIAH WILLS IT
          </span>
          <span
            className="h-px flex-1 max-w-[80px]"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(0,243,255,0.5))",
            }}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-neon-red text-sm tracking-[0.2em]"
          >
            &gt; VIEW_PROJECTS
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-neon-blue text-sm tracking-[0.2em]"
          >
            &gt; ESTABLISH_LINK
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <ChevronDown size={24} style={{ color: "#556677" }} />
      </div>
    </section>
  );
}
