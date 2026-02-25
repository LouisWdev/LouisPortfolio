"use client";

import { useState, useEffect } from "react";

interface BootLine {
  type: "header" | "divider" | "process" | "footer";
  text?: string;
  result?: string;
  resultColor?: string;
}

const LINES: BootLine[] = [
  { type: "header",  text: "LOUIS.EXE v2.4.1 — BOOT SEQUENCE INITIATED" },
  { type: "divider" },
  { type: "process", text: "LOADING NEURAL INTERFACE",    result: "OK" },
  { type: "process", text: "CALIBRATING NEON GRID",       result: "OK" },
  { type: "process", text: "ESTABLISHING SECURE UPLINK",  result: "OK" },
  { type: "process", text: "DECRYPTING PORTFOLIO DATA",   result: "OK" },
  { type: "process", text: "SCANNING FOR HOSTILES",       result: "ALL CLEAR" },
  { type: "process", text: "OMNISSIAH PROTOCOLS",         result: "PRAISE BE", resultColor: "#bf00ff" },
  { type: "divider" },
  { type: "footer",  text: "ALL SYSTEMS NOMINAL. WELCOME, OPERATOR." },
];

export function BootScreen() {
  const [visible, setVisible] = useState<boolean[]>(LINES.map(() => false));
  const [results, setResults] = useState<boolean[]>(LINES.map(() => false));
  const [glitch,  setGlitch]  = useState(false);
  const [exiting, setExiting] = useState(false);
  const [gone,    setGone]    = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("booted")) {
      setGone(true);
      return;
    }

    const t: ReturnType<typeof setTimeout>[] = [];

    const show = (i: number, ms: number) =>
      t.push(setTimeout(() => setVisible(p => p.map((v, j) => j === i || v)), ms));

    const res = (i: number, ms: number) =>
      t.push(setTimeout(() => setResults(p => p.map((v, j) => j === i || v)), ms));

    // Boot timeline
    show(0, 150);
    show(1, 400);
    show(2, 650);  res(2, 1050);
    show(3, 1150); res(3, 1550);
    show(4, 1650); res(4, 2050);
    show(5, 2150); res(5, 2550);
    show(6, 2650); res(6, 3050);
    show(7, 3150); res(7, 3550);
    show(8, 3750);
    show(9, 4000);

    // Glitch flashes → exit
    t.push(setTimeout(() => setGlitch(true),   4700));
    t.push(setTimeout(() => setGlitch(false),  4800));
    t.push(setTimeout(() => setGlitch(true),   4870));
    t.push(setTimeout(() => setGlitch(false),  4970));
    t.push(setTimeout(() => setExiting(true),  5050));
    t.push(setTimeout(() => {
      sessionStorage.setItem("booted", "1");
      setGone(true);
    }, 5900));

    return () => t.forEach(clearTimeout);
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] circuit-grid flex items-center justify-center"
      style={{
        background: "#05080f",
        opacity:   glitch ? 0 : exiting ? 0 : 1,
        transform: exiting ? "translateY(-2rem)" : "translateY(0)",
        transition: exiting ? "opacity 0.7s ease, transform 0.7s ease" : "none",
      }}
    >
      {/* Scanlines overlay */}
      <div className="scanlines pointer-events-none absolute inset-0" />

      {/* Terminal block */}
      <div className="relative w-full max-w-xl px-8 sm:px-0">
        {LINES.map((line, i) => {
          if (!visible[i]) return null;

          if (line.type === "divider") return (
            <div
              key={i}
              className="mb-2 select-none"
              style={{ color: "rgba(85,102,119,0.35)", fontSize: "0.65rem", letterSpacing: "0.15em" }}
            >
              {"━".repeat(52)}
            </div>
          );

          if (line.type === "header") return (
            <div key={i} className="mb-5">
              <p style={{
                color: "#ff0033",
                textShadow: "0 0 12px #ff0033, 0 0 30px rgba(255,0,51,0.5)",
                letterSpacing: "0.3em",
                fontSize: "clamp(0.65rem, 2vw, 0.85rem)",
              }}>
                {line.text}
              </p>
            </div>
          );

          if (line.type === "process") return (
            <div
              key={i}
              className="flex items-center mb-2 gap-3"
              style={{ fontSize: "clamp(0.6rem, 1.8vw, 0.78rem)" }}
            >
              <span style={{ color: "#ff0033", flexShrink: 0 }}>›</span>
              <span className="flex-1" style={{ color: "#00f3ff", letterSpacing: "0.15em" }}>
                {line.text}
              </span>
              {results[i] ? (
                <span style={{
                  color: line.resultColor ?? "#00ff41",
                  textShadow: `0 0 8px ${line.resultColor ?? "#00ff41"}`,
                  letterSpacing: "0.2em",
                  flexShrink: 0,
                }}>
                  [{line.result}]
                </span>
              ) : (
                <span
                  className="animate-pulse"
                  style={{ color: "#556677", flexShrink: 0, letterSpacing: "0.4em" }}
                >
                  ···
                </span>
              )}
            </div>
          );

          if (line.type === "footer") return (
            <div key={i} className="mt-5 flex items-center">
              <span style={{
                color: "#00f3ff",
                textShadow: "0 0 10px #00f3ff, 0 0 24px rgba(0,243,255,0.4)",
                letterSpacing: "0.25em",
                fontSize: "clamp(0.65rem, 2vw, 0.82rem)",
              }}>
                {line.text}
              </span>
              <span
                className="ml-2 animate-pulse"
                style={{ color: "#ff0033", textShadow: "0 0 8px #ff0033" }}
              >
                █
              </span>
            </div>
          );

          return null;
        })}
      </div>
    </div>
  );
}
