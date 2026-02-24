"use client";

import { useState } from "react";
import { BrainCircuit, X, Terminal, AlertTriangle } from "lucide-react";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating action button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer group"
          style={{
            background: "rgba(5,8,15,0.95)",
            border: "1px solid #ff0033",
            boxShadow:
              "0 0 10px rgba(255,0,51,0.4), 0 0 25px rgba(255,0,51,0.15)",
            animation: "pulse-neon 2s ease-in-out infinite",
          }}
          aria-label="Open Neural Link Chat"
        >
          <BrainCircuit
            size={24}
            style={{
              color: "#ff0033",
              filter: "drop-shadow(0 0 4px #ff0033)",
              transition: "transform 0.2s",
            }}
          />
          {/* Ping ring */}
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{
              border: "1px solid rgba(255,0,51,0.4)",
              animationDuration: "2s",
            }}
          />
          {/* Tooltip */}
          <span
            className="absolute right-16 bottom-3 whitespace-nowrap text-[10px] tracking-wider px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
            style={{
              background: "rgba(5,8,15,0.95)",
              border: "1px solid rgba(255,0,51,0.3)",
              color: "#ff0033",
            }}
          >
            NEURAL_LINK
          </span>
        </button>
      </div>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-4 sm:p-6"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={() => setOpen(false)}
        >
          {/* Modal panel */}
          <div
            className="w-full sm:w-[380px] rounded-sm overflow-hidden"
            style={{
              background: "rgba(5,8,15,0.98)",
              border: "1px solid rgba(255,0,51,0.5)",
              boxShadow:
                "0 0 30px rgba(255,0,51,0.2), inset 0 0 30px rgba(255,0,51,0.03)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title bar */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{
                background: "rgba(255,0,51,0.08)",
                borderBottom: "1px solid rgba(255,0,51,0.3)",
              }}
            >
              <div className="flex items-center gap-2">
                <Terminal
                  size={14}
                  style={{ color: "#ff0033", filter: "drop-shadow(0 0 3px #ff0033)" }}
                />
                <span
                  className="text-xs tracking-[0.2em] neon-text-red"
                >
                  NEURAL_LINK_TERMINAL
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-xs cursor-pointer transition-colors"
                style={{ color: "#556677" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#ff0033";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#556677";
                }}
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Terminal body */}
            <div className="p-6 space-y-4">
              {/* Fake terminal lines */}
              <div
                className="font-mono text-xs space-y-1"
                style={{ color: "#556677" }}
              >
                <p>
                  <span style={{ color: "#00ff41" }}>$</span> ./neural_link
                  --connect
                </p>
                <p>
                  <span style={{ color: "#ff0033" }}>&gt;</span> Establishing
                  connection to AI core...
                </p>
                <p>
                  <span style={{ color: "#ff0033" }}>&gt;</span> Authenticating
                  neural pathway...
                </p>
                <p>
                  <span style={{ color: "#ffaa00" }}>&gt;</span> ERROR_CODE:
                  0x4E4F4B4559
                </p>
              </div>

              {/* Status message */}
              <div
                className="border p-4 space-y-3"
                style={{
                  borderColor: "rgba(255,0,51,0.3)",
                  background: "rgba(255,0,51,0.05)",
                }}
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle
                    size={18}
                    style={{ color: "#ff0033", filter: "drop-shadow(0 0 4px #ff0033)" }}
                  />
                  <span className="text-sm neon-text-red tracking-wider">
                    NEURAL LINK OFFLINE
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#8899aa" }}>
                  The AI core is currently dormant. API key authentication
                  required to establish neural pathway.
                </p>
                <p
                  className="text-xs tracking-wider"
                  style={{ color: "#556677" }}
                >
                  STATUS: API_KEY_REQUIRED
                  <br />
                  MODULE: claude-sonnet-4-6
                  <br />
                  SIGNAL: 0.00%
                </p>
              </div>

              {/* Disabled input area */}
              <div className="relative">
                <div
                  className="w-full px-4 py-3 text-xs flex items-center gap-2"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    border: "1px solid rgba(255,0,51,0.15)",
                    color: "#556677",
                    cursor: "not-allowed",
                  }}
                >
                  <span>&gt; _</span>
                  <span className="animate-pulse">|</span>
                  <span className="ml-auto text-[10px]">[LOCKED]</span>
                </div>
              </div>

              <p
                className="text-[10px] text-center tracking-wider"
                style={{ color: "#334455" }}
              >
                {"// Connect a Claude API key to enable neural uplink //"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
