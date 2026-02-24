"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero",     label: "HOME"     },
  { id: "about",    label: "ABOUT"    },
  { id: "projects", label: "PROJECTS" },
  { id: "contact",  label: "CONTACT"  },
];

export function ScrollProgress() {
  const [progress,    setProgress]    = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [positions,   setPositions]   = useState<number[]>([]);

  useEffect(() => {
    const calcPositions = () => {
      const max =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (max <= 0) return;
      setPositions(
        SECTIONS.map(({ id }) => {
          const el = document.getElementById(id);
          return el ? (el.offsetTop / max) * 100 : 0;
        })
      );
    };

    const onScroll = () => {
      const el  = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const max = el.scrollHeight - el.clientHeight;

      setProgress(max > 0 ? (scrolled / max) * 100 : 0);

      let active = 0;
      SECTIONS.forEach(({ id }, i) => {
        const section = document.getElementById(id);
        if (section && scrolled >= section.offsetTop - 140) active = i;
      });
      setActiveIndex(active);
    };

    calcPositions();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", calcPositions);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calcPositions);
    };
  }, []);

  const navigate = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    /* track — full width, sits at very top */
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "3px",
        zIndex: 9999,
        background: "rgba(0,243,255,0.07)",
        overflow: "visible",
        pointerEvents: "none",
      }}
    >
      {/* filled progress bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${progress}%`,
          height: "100%",
          background: "linear-gradient(90deg, #ff0033, #bf00ff, #00f3ff)",
          boxShadow: "0 0 8px #ff0033, 0 0 16px rgba(0,243,255,0.5)",
          transition: "width 0.08s ease",
        }}
      />

      {/* section marker diamonds */}
      {positions.map((pct, i) => {
        const isActive = i === activeIndex;
        const isPast   = i < activeIndex;

        return (
          <button
            key={SECTIONS[i].id}
            onClick={() => navigate(SECTIONS[i].id)}
            title={SECTIONS[i].label}
            aria-label={`Go to ${SECTIONS[i].label}`}
            style={{
              position: "absolute",
              left: `${pct}%`,
              top: "50%",
              width:  isActive ? "11px" : "7px",
              height: isActive ? "11px" : "7px",
              transform: "translate(-50%, -50%) rotate(45deg)",
              background: isActive
                ? "#ff0033"
                : isPast
                ? "#bf00ff"
                : "#05080f",
              border: isActive
                ? "1.5px solid #ff0033"
                : isPast
                ? "1.5px solid #bf00ff"
                : "1.5px solid rgba(0,243,255,0.35)",
              boxShadow: isActive
                ? "0 0 10px #ff0033, 0 0 22px rgba(255,0,51,0.55)"
                : isPast
                ? "0 0 6px rgba(191,0,255,0.5)"
                : "none",
              transition: "all 0.3s ease",
              cursor: "pointer",
              pointerEvents: "auto",
            }}
          />
        );
      })}
    </div>
  );
}
