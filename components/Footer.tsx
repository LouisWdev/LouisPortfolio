"use client";

import { Github, Twitter, Linkedin, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";


export function Footer() {
  const year = new Date().getFullYear();
  const [visible, setVisible] = useState(false);
  const everShown = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;

      if (atBottom) {
        everShown.current = true;
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animStyle: React.CSSProperties = !everShown.current
    ? { transform: "translateY(100%)" }
    : visible
    ? { animation: "footer-boot 0.65s cubic-bezier(0.23, 1, 0.32, 1) forwards" }
    : { animation: "footer-shutdown 0.4s ease-in forwards" };

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 py-10 px-4 border-t"
      style={{
        background: "#05080f",
        borderColor: "rgba(0,243,255,0.15)",
        zIndex: 40,
        willChange: "transform",
        ...animStyle,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal
              size={16}
              style={{ color: "#ff0033", filter: "drop-shadow(0 0 3px #ff0033)" }}
            />
            <span
              className="neon-text-red text-base tracking-widest"
              style={{ fontFamily: "var(--font-share-tech-mono)" }}
            >
              LOUIS.EXE
            </span>
          </div>

          {/* Center text */}
          <div className="text-center">
            <p className="text-xs tracking-wider" style={{ color: "#556677" }}>
              &copy; {year} — Built in service of the Omnissiah
            </p>
            <p className="text-[10px] tracking-wider mt-1" style={{ color: "#334455" }}>
              Next.js 15 &middot; TypeScript &middot; Tailwind CSS v4
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-all duration-200"
                style={{ color: "#556677" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#00f3ff";
                  (e.currentTarget as HTMLElement).style.filter =
                    "drop-shadow(0 0 4px #00f3ff)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#556677";
                  (e.currentTarget as HTMLElement).style.filter = "none";
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="mt-8 pt-4 border-t text-center"
          style={{ borderColor: "rgba(0,243,255,0.08)" }}
        >
          <p className="text-[10px] tracking-[0.3em]" style={{ color: "#2a3545" }}>
            {"// ALL RIGHTS RESERVED · IN THE EMPEROR'S NAME · PRAISE THE OMNISSIAH //"}
          </p>
        </div>
      </div>
    </footer>
  );
}
