"use client";

const STATS = [
  { label: "YRS_CODING", value: "5+" },
  { label: "CUPS_OF_RECAF", value: "9999+" },
  { label: "BUGS_SQUASHED", value: "∞" },
  { label: "COMMITS", value: "3,400+" },
  { label: "W40K_FACTION", value: "Mechanicus" },
  { label: "SC2_RANK", value: "DIAMOND" },
  { label: "RACE", value: "TERRAN" },
  { label: "STATUS", value: "ONLINE" },
];

const SKILLS = [
  { name: "TypeScript", level: 90, color: "#00f3ff" },
  { name: "React / Next.js", level: 88, color: "#00f3ff" },
  { name: "Node.js", level: 82, color: "#00ff41" },
  { name: "PostgreSQL", level: 75, color: "#00ff41" },
  { name: "Docker", level: 70, color: "#bf00ff" },
  { name: "C++", level: 25, color: "#ff0033" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4" style={{ background: "#05080f" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="text-xs tracking-[0.5em] mb-2" style={{ color: "#556677" }}>
            {"// SECTION_02"}
          </p>
          <h2 className="text-3xl md:text-5xl tracking-widest neon-text-blue">
            ABOUT.EXE
          </h2>
          <div
            className="h-px max-w-[120px] mx-auto mt-4"
            style={{
              background: "linear-gradient(to right, #ff0033, #00f3ff)",
            }}
          />
        </div>

        {/* Terminal window */}
        <div className="terminal-window rounded-sm overflow-hidden">
          {/* Title bar */}
          <div className="terminal-titlebar">
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#ff0033", boxShadow: "0 0 5px #ff0033" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#ffaa00", boxShadow: "0 0 5px #ffaa00" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#00ff41", boxShadow: "0 0 5px #00ff41" }}
            />
            <span
              className="ml-4 text-xs tracking-wider"
              style={{ color: "#556677" }}
            >
              louis@omnissiah:~$ ./about.sh --verbose
            </span>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            {/* Left: Stats + Skills */}
            <div className="space-y-8">
              {/* Stats grid */}
              <div>
                <p
                  className="text-xs tracking-[0.3em] mb-4"
                  style={{ color: "#ff0033" }}
                >
                  &gt; SYSTEM_STATS
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {STATS.map(({ label, value }) => (
                    <div
                      key={label}
                      className="p-2 border text-xs"
                      style={{
                        borderColor: "rgba(0,243,255,0.15)",
                        background: "rgba(0,243,255,0.03)",
                      }}
                    >
                      <span style={{ color: "#556677" }}>{label}:</span>
                      <br />
                      <span className="neon-text-green font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill bars */}
              <div>
                <p
                  className="text-xs tracking-[0.3em] mb-4"
                  style={{ color: "#ff0033" }}
                >
                  &gt; TECH_STACK
                </p>
                <div className="space-y-3">
                  {SKILLS.map(({ name, level, color }) => (
                    <div key={name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span style={{ color: "#c9d1d9" }}>{name}</span>
                        <span style={{ color }}>{level}%</span>
                      </div>
                      <div
                        className="h-1.5 w-full"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          borderRadius: "1px",
                        }}
                      >
                        <div
                          className="h-full transition-all duration-1000"
                          style={{
                            width: `${level}%`,
                            background: color,
                            boxShadow: `0 0 6px ${color}`,
                            borderRadius: "1px",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Bio */}
            <div className="space-y-5">
              <p
                className="text-xs tracking-[0.3em]"
                style={{ color: "#ff0033" }}
              >
                &gt; INITIATING_BIO_SEQUENCE...
              </p>

              <p className="text-sm leading-relaxed" style={{ color: "#c9d1d9" }}>
                Greetings, flesh-being. I am{" "}
                <span className="neon-text-red">Louis</span> — full-stack
                developer and devotee of the{" "}
                <span className="neon-text-purple">Omnissiah</span>. Every line
                of code I write is a prayer to the Machine God; every deployment
                an offering to the digital divine.
              </p>

              <p className="text-sm leading-relaxed" style={{ color: "#c9d1d9" }}>
                My augmetic implants — TypeScript-cortex, React-dendrites, and
                Node-spine — allow me to interface directly with the Machine
                Spirit of any codebase. I specialize in crafting{" "}
                <span className="neon-text-blue">scalable systems</span> that
                serve the Imperium&apos;s digital infrastructure.
              </p>

              <div
                className="border-l-2 pl-4 py-2 my-4 text-sm italic"
                style={{
                  borderColor: "#ff0033",
                  color: "#8899aa",
                }}
              >
                &ldquo;In service of the Omnissiah, every line of code is a
                prayer to the Machine God. To debug is to commune with the
                Machine Spirit. To deploy is to grant it new life.&rdquo;
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "#c9d1d9" }}>
                When not at my cogitator-array, I command{" "}
                <span className="neon-text-red">Diamond-tier Terran</span> forces
                in StarCraft II — a bio-mech specialist, fond of mass Marine +
                Medivac with Viking air support. The battlefield teaches what
                algorithms confirm: adaptability wins wars.
              </p>

              <div
                className="flex flex-wrap gap-2 mt-4"
              >
                {["Next.js", "TypeScript", "PostgreSQL", "Docker", "Rust", "Tailwind"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs tracking-wider border"
                      style={{
                        borderColor: "rgba(0,243,255,0.3)",
                        color: "#00f3ff",
                        background: "rgba(0,243,255,0.05)",
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
