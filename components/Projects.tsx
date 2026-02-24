"use client";

import { ExternalLink, Github, Zap } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: { label: string; color: string }[];
  status: string;
  statusColor: string;
  github?: string;
  live?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "RED ALERT.EXE",
    description:
      "This very portfolio — a cyberpunk-themed personal site built with Next.js 15, TypeScript, and Tailwind CSS v4. Features glitch animations, neon aesthetics, and AI chat widget integration.",
    tags: [
      { label: "Next.js 15", color: "#00f3ff" },
      { label: "TypeScript", color: "#00f3ff" },
      { label: "Tailwind v4", color: "#bf00ff" },
      { label: "shadcn/ui", color: "#00ff41" },
    ],
    status: "LIVE",
    statusColor: "#00ff41",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Anime X Manga Site",
    description:
      "A anime and manga site",
    tags: [
      { label: "Next.js 15", color: "#00f3ff" },
      { label: "TypeScript", color: "#00f3ff" },
      { label: "Tailwind v4", color: "#bf00ff" },
      { label: "shadcn/ui", color: "#00ff41" },
    ],
    status: "DEPLOYED",
    statusColor: "#00ff41",
    github: "#",
    live: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="cyber-card rounded-sm p-5 flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <Zap
            size={14}
            style={{ color: "#ff0033", filter: "drop-shadow(0 0 3px #ff0033)" }}
          />
          <h3
            className="text-sm font-bold tracking-[0.15em]"
            style={{ color: "#c9d1d9" }}
          >
            {project.title}
          </h3>
        </div>
        <span
          className="text-[10px] tracking-wider px-2 py-0.5 border shrink-0"
          style={{
            color: project.statusColor,
            borderColor: `${project.statusColor}50`,
            background: `${project.statusColor}10`,
          }}
        >
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs leading-relaxed flex-1" style={{ color: "#8899aa" }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag.label}
            className="text-[10px] tracking-wider px-2 py-0.5"
            style={{
              color: tag.color,
              border: `1px solid ${tag.color}40`,
              background: `${tag.color}08`,
            }}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-1 border-t" style={{ borderColor: "rgba(0,243,255,0.1)" }}>
        {project.github && (
          <a
            href={project.github}
            className="flex items-center gap-1.5 text-xs tracking-wider transition-all duration-200"
            style={{ color: "#556677" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#00f3ff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#556677";
            }}
            aria-label={`GitHub for ${project.title}`}
          >
            <Github size={13} />
            SOURCE
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            className="flex items-center gap-1.5 text-xs tracking-wider transition-all duration-200"
            style={{ color: "#556677" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#ff0033";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#556677";
            }}
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalLink size={13} />
            LIVE
          </a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4"
      style={{ background: "#07090f" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p
            className="text-xs tracking-[0.5em] mb-2"
            style={{ color: "#556677" }}
          >
            {"// SECTION_03"}
          </p>
          <h2 className="text-3xl md:text-5xl tracking-widest neon-text-red">
            PROJECTS.LOG
          </h2>
          <div
            className="h-px max-w-[120px] mx-auto mt-4"
            style={{
              background: "linear-gradient(to right, #00f3ff, #ff0033)",
            }}
          />
          <p
            className="text-xs tracking-[0.2em] mt-4"
            style={{ color: "#556677" }}
          >
            &gt; LOADING 6 CLASSIFIED ENTRIES...
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
