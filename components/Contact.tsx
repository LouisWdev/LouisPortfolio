"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4"
      style={{ background: "#05080f" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p
            className="text-xs tracking-[0.5em] mb-2"
            style={{ color: "#556677" }}
          >
            {"// SECTION_04"}
          </p>
          <h2 className="text-3xl md:text-5xl tracking-widest neon-text-purple">
            CONTACT.SH
          </h2>
          <div
            className="h-px max-w-[120px] mx-auto mt-4"
            style={{
              background: "linear-gradient(to right, #ff0033, #bf00ff)",
            }}
          />
          <p
            className="text-xs tracking-[0.2em] mt-4"
            style={{ color: "#556677" }}
          >
            &gt; SECURE_CHANNEL_OPEN — TRANSMIT_MESSAGE
          </p>
        </div>

        {/* Terminal form card */}
        <div className="terminal-window rounded-sm overflow-hidden">
          {/* Title bar */}
          <div className="terminal-titlebar">
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#ff0033", boxShadow: "0 0 5px #ff0033" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#ffaa00" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#00ff41" }}
            />
            <span
              className="ml-4 text-xs tracking-wider"
              style={{ color: "#556677" }}
            >
              louis@omnissiah:~$ ./contact.sh --secure
            </span>
          </div>

          <div className="p-6 md:p-8">
            {formState === "success" ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle
                  size={48}
                  className="mx-auto"
                  style={{ color: "#00ff41", filter: "drop-shadow(0 0 10px #00ff41)" }}
                />
                <p className="neon-text-green text-lg tracking-widest">
                  TRANSMISSION_RECEIVED
                </p>
                <p className="text-sm" style={{ color: "#556677" }}>
                  Your message has been routed through the Warp. I will respond
                  within 24-48 standard hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="btn-neon-blue text-xs mt-4"
                >
                  &gt; SEND_ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    className="block text-xs tracking-[0.2em] mb-2"
                    style={{ color: "#556677" }}
                    htmlFor="name"
                  >
                    &gt; IDENTIFIER (NAME)
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your designation..."
                    className="neon-input w-full px-4 py-3 text-sm rounded-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-xs tracking-[0.2em] mb-2"
                    style={{ color: "#556677" }}
                    htmlFor="email"
                  >
                    &gt; COMM_CHANNEL (EMAIL)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@address.void"
                    className="neon-input w-full px-4 py-3 text-sm rounded-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs tracking-[0.2em] mb-2"
                    style={{ color: "#556677" }}
                    htmlFor="message"
                  >
                    &gt; TRANSMISSION (MESSAGE)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Speak your intent, traveler..."
                    className="neon-input w-full px-4 py-3 text-sm rounded-sm resize-none"
                  />
                </div>

                {/* Error state */}
                {formState === "error" && (
                  <div
                    className="flex items-center gap-2 text-xs p-3 border"
                    style={{
                      color: "#ff0033",
                      borderColor: "rgba(255,0,51,0.3)",
                      background: "rgba(255,0,51,0.05)",
                    }}
                  >
                    <AlertCircle size={14} />
                    TRANSMISSION_FAILED — Check your Formspree ID or try again.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="btn-neon-red w-full flex items-center justify-center gap-2 text-sm"
                  style={{
                    opacity: formState === "loading" ? 0.7 : 1,
                    cursor: formState === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {formState === "loading" ? (
                    <>
                      <Loader size={15} className="animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      &gt; SEND_TRANSMISSION
                    </>
                  )}
                </button>

                <p
                  className="text-[10px] text-center tracking-wider"
                  style={{ color: "#556677" }}
                >
                  {"// Powered by Formspree — replace YOUR_FORM_ID to activate //"}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
