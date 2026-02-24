"use client";

export function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-6 overflow-hidden px-8">
      {/* left arm */}
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #ff0033 60%, #bf00ff 100%)",
          boxShadow: "0 0 6px rgba(255,0,51,0.4)",
        }}
      />

      {/* centre gem */}
      <div
        className="mx-4 shrink-0 text-base leading-none select-none"
        style={{
          color: "#ff0033",
          textShadow:
            "0 0 8px #ff0033, 0 0 20px rgba(255,0,51,0.6), 0 0 40px rgba(255,0,51,0.3)",
          animation: "pulse-neon 2s ease-in-out infinite",
        }}
      >
        ◈
      </div>

      {/* right arm */}
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, #bf00ff 0%, #00f3ff 40%, transparent 100%)",
          boxShadow: "0 0 6px rgba(0,243,255,0.4)",
        }}
      />
    </div>
  );
}
