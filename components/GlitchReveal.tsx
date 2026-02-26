"use client";

import { useEffect, useRef, useState } from "react";

interface ScanlineRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export function GlitchReveal({ children, delay = 0 }: ScanlineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => {
            setActive(true);
            setTimeout(() => setDone(true), 800);
          }, delay);
          observer.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.08 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      {/* Scanline */}
      {active && !done && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "80px",
            pointerEvents: "none",
            zIndex: 10,
            background:
              "linear-gradient(to bottom, transparent, rgba(0,243,255,0.55) 40%, rgba(180,240,255,0.25) 50%, rgba(0,243,255,0.55) 60%, transparent)",
            boxShadow: "0 0 18px rgba(0,243,255,0.4), 0 0 40px rgba(0,243,255,0.15)",
            animation: "scanline-run 0.75s linear forwards",
          }}
        />
      )}

      {/* Content */}
      <div
        style={
          active
            ? { animation: "scanline-reveal 0.75s ease-out forwards" }
            : { opacity: 0 }
        }
      >
        {children}
      </div>
    </div>
  );
}
