"use client";

import { useEffect, useRef } from "react";

const SECTIONS = ["hero", "about", "projects", "contact"];

export function SectionScroller() {
  const isAnimating = useRef(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const getCurrentIndex = () => {
      let index = 0;
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          index = i;
        }
      });
      return index;
    };

    const scrollTo = (index: number) => {
      const clamped = Math.max(0, Math.min(SECTIONS.length - 1, index));
      const el = document.getElementById(SECTIONS[clamped]);
      if (!el) return;
      isAnimating.current = true;
      el.scrollIntoView({ behavior: "smooth" });
      // release lock after animation completes
      setTimeout(() => {
        isAnimating.current = false;
      }, 900);
    };

    const handleWheel = (e: WheelEvent) => {
      // always block scroll during animation so it doesn't stack
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      const idx = getCurrentIndex();
      const el = document.getElementById(SECTIONS[idx]);
      if (!el) return;
      const rect = el.getBoundingClientRect();

      if (e.deltaY > 0) {
        // scrolling down — only jump when we've seen the section's bottom
        const atBottom = rect.bottom <= window.innerHeight + 6;
        if (atBottom) {
          e.preventDefault();
          scrollTo(idx + 1);
        }
      } else if (e.deltaY < 0) {
        // scrolling up — only jump when we're at the section's top
        const atTop = rect.top >= -6;
        if (atTop) {
          e.preventDefault();
          scrollTo(idx - 1);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null || isAnimating.current) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 60) return; // ignore tiny swipes

      const idx = getCurrentIndex();
      const el = document.getElementById(SECTIONS[idx]);
      if (!el) return;
      const rect = el.getBoundingClientRect();

      if (delta > 0 && rect.bottom <= window.innerHeight + 6) {
        scrollTo(idx + 1);
      } else if (delta < 0 && rect.top >= -6) {
        scrollTo(idx - 1);
      }
      touchStartY.current = null;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return null;
}
