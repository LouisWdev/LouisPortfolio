"use client";

import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "hero",     label: "HOME",     num: "01" },
  { id: "about",    label: "ABOUT",    num: "02" },
  { id: "projects", label: "PROJECTS", num: "03" },
  { id: "contact",  label: "CONTACT",  num: "04" },
];

export function PageTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const detect = () => {
      let current = 0;
      SECTIONS.forEach(({ id }, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.55) {
          current = i;
        }
      });
      setActiveIndex(current);
    };

    detect(); // set on mount immediately
    window.addEventListener("scroll", detect, { passive: true });
    return () => window.removeEventListener("scroll", detect);
  }, []);

  const navigate = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end select-none">

      {/* Header */}
      <div
        className="text-[8px] tracking-[0.45em] mb-5"
        style={{ color: "rgba(85,102,119,0.55)" }}
      >
        SYS://LOC
      </div>

      {/* Nodes */}
      <div className="flex flex-col items-end">
        {SECTIONS.map((section, i) => {
          const isActive = i === activeIndex;
          const isPast   = i < activeIndex;

          return (
            <div key={section.id} className="flex flex-col items-end">

              <button
                onClick={() => navigate(section.id)}
                className="flex items-center gap-2 cursor-pointer"
                aria-label={`Go to ${section.label}`}
              >
                {/* Label */}
                <span
                  className="text-[9px] tracking-[0.25em] whitespace-nowrap transition-all duration-300"
                  style={{
                    color:   isActive ? "#00f3ff" : "#556677",
                    opacity: isActive ? 1 : 0.35,
                    textShadow: isActive ? "0 0 8px #00f3ff, 0 0 16px rgba(0,243,255,0.4)" : "none",
                    transform: isActive ? "translateX(0)" : "translateX(4px)",
                  }}
                >
                  {isActive ? `> ${section.label}` : section.label}
                </span>

                {/* Number */}
                <span
                  className="text-[7px] tracking-widest transition-all duration-300"
                  style={{
                    color:   isActive ? "#ff0033" : "#556677",
                    opacity: isActive ? 1 : 0.4,
                    textShadow: isActive ? "0 0 6px #ff0033" : "none",
                  }}
                >
                  {section.num}
                </span>

                {/* Diamond */}
                <div
                  className="shrink-0 transition-all duration-300"
                  style={{
                    width:  isActive ? "14px" : "8px",
                    height: isActive ? "14px" : "8px",
                    transform: "rotate(45deg)",
                    background: isActive
                      ? "#ff0033"
                      : isPast
                      ? "rgba(191,0,255,0.6)"
                      : "transparent",
                    border: isActive
                      ? "2px solid #ff0033"
                      : isPast
                      ? "1px solid rgba(191,0,255,0.7)"
                      : "1px solid rgba(0,243,255,0.25)",
                    boxShadow: isActive
                      ? "0 0 10px #ff0033, 0 0 24px rgba(255,0,51,0.6), 0 0 40px rgba(255,0,51,0.2)"
                      : isPast
                      ? "0 0 5px rgba(191,0,255,0.5)"
                      : "none",
                    animation: isActive ? "pulse-neon 2s ease-in-out infinite" : "none",
                  }}
                />
              </button>

              {/* Connector */}
              {i < SECTIONS.length - 1 && (
                <div
                  className="w-px mr-[6px] h-9 transition-all duration-500"
                  style={{
                    background:
                      i < activeIndex
                        ? "linear-gradient(to bottom, #ff0033, #bf00ff)"
                        : isActive
                        ? "linear-gradient(to bottom, #ff0033 20%, rgba(0,243,255,0.12))"
                        : "rgba(0,243,255,0.1)",
                    boxShadow: i < activeIndex ? "0 0 5px rgba(255,0,51,0.3)" : "none",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Counter */}
      <div
        className="text-[8px] tracking-[0.35em] mt-5"
        style={{
          color: "#ff0033",
          textShadow: "0 0 6px rgba(255,0,51,0.5)",
          opacity: 0.7,
        }}
      >
        [{String(activeIndex + 1).padStart(2, "0")}/{SECTIONS.length}]
      </div>
    </aside>
  );
}
