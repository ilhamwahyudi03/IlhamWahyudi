"use client";

import React from "react";

interface TechItem {
  name: string;
  category: string;
  color: string;
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: "Laravel",
    category: "Backend Framework",
    color: "#FF2D20",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.578 5.617c-.015-.02-.032-.036-.051-.051a.634.634 0 0 0-.256-.123L12.593.076a.658.658 0 0 0-.616 0L3.3 5.443a.65.65 0 0 0-.307.561v11.992c0 .235.12.451.307.561l8.677 5.367a.658.658 0 0 0 .616 0l8.678-5.367c.187-.11.307-.326.307-.561V6.004a.658.658 0 0 0-.053-.387zM12.285 1.34l7.632 4.721-3.23 2-7.632-4.721zm-8.232 5.09l7.632 4.722v8.835L4.053 15.267zm8.682 13.557v-8.835l3.23-2v8.835zm4.28-2.648v-8.835l3.23-2v8.835z" />
      </svg>
    ),
  },
  {
    name: "Vue.js",
    category: "Frontend Reactive",
    color: "#4FC08D",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.197 1.6H15.44L12 7.56 8.56 1.6H0l12 20.8 12-20.8h-4.803zM3.86 3.2h3.337L12 11.53 16.803 3.2h3.337L12 17.26 3.86 3.2z" />
      </svg>
    ),
  },
  {
    name: "React.js",
    category: "Frontend UI",
    color: "#61DAFB",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(30 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(90 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(150 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.8" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Fullstack App Router",
    color: "#E2E8F0",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.5l-6-8.5v8.5H9V6.5h1.5l6 8.5V6.5H18v11h-1.5z" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Data & ML Pipeline",
    color: "#38BDF8",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.64 6.2 2.64l.006 2.736h5.816v.824H3.844S0 5.756 0 11.872c0 6.114 3.344 5.9 3.344 5.9h1.996v-2.8s-.11-3.344 3.286-3.344h5.652s3.176.05 3.176-3.076V3.078S17.974 0 11.914 0zM8.7 1.834a.973.973 0 1 1 0 1.947.973.973 0 0 1 0-1.947zm3.386 22.166c6.094 0 5.714-2.64 5.714-2.64l-.006-2.736h-5.816v-.824h8.178s3.844.444 3.844-5.672c0-6.114-3.344-5.9-3.344-5.9h-1.996v2.8s.11 3.344-3.286 3.344H9.686s-3.176-.05-3.176 3.076v5.476S6.026 24 12.086 24zm3.214-1.834a.973.973 0 1 1 0-1.947.973.973 0 0 1 0 1.947z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "Core Language",
    color: "#FACC15",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.621-1.797-1.025-.114-.19-.105-.445-.045-.63.09-.27.39-.42.75-.42.45 0 .825.135 1.125.435.15.15.285.39.375.465l1.635-1.05c-.345-.585-.75-.99-1.35-1.275-.72-.345-1.635-.45-2.52-.39-1.125.075-2.085.66-2.475 1.575-.54 1.29-.12 2.76.99 3.42 1.35.81 2.82 1.095 2.895 1.845.06.63-.42.975-1.185.99-.915.015-1.575-.405-1.935-.99l-1.665 1.05c.42.84 1.035 1.455 1.86 1.8 1.035.42 2.43.435 3.51-.06 1.335-.615 1.89-1.86 1.83-2.87zm-7.635-7.38h-2.19v7.875c0 1.065-.06 2.055-.75 2.7-.585.54-1.425.645-2.22.465-.63-.135-1.185-.495-1.545-.96-.345-.45-.495-.9-.54-1.44l1.98-.375c.045.39.21.735.54.915.345.195.84.18 1.185-.06.27-.195.36-.51.36-.96V10.896z" />
      </svg>
    ),
  },
  {
    name: "PHP",
    category: "Backend Engine",
    color: "#818CF8",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-4.7 15.5l.8-4.2h1.7c1.3 0 2.2.8 1.9 2.2-.2 1.4-1.4 2-2.7 2H7.3zm7.8 0l.8-4.2h1.7c1.3 0 2.2.8 1.9 2.2-.2 1.4-1.4 2-2.7 2h-1.7z" />
      </svg>
    ),
  },
  {
    name: "C Language",
    category: "Systems & Algorithms",
    color: "#67E8F9",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zm3.5-11.5a5 5 0 0 0-7 0 5 5 0 0 0 0 7 5 5 0 0 0 7 0l1.4 1.4a7 7 0 0 1-9.8 0 7 7 0 0 1 0-9.8 7 7 0 0 1 9.8 0z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Relational DB",
    color: "#60A5FA",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5c-3.03 0-5.5-2.47-5.5-5.5S9.97 7.5 13 7.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5zm0-9c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    category: "Relational DB",
    color: "#38BDF8",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Utility Styling",
    color: "#22D3EE",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Hadoop HDFS",
    category: "Big Data Storage",
    color: "#FACC15",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7.003 7.003 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7.003 7.003 0 0 1 11 3.07V3a1 1 0 0 1 2 0v.07A7.003 7.003 0 0 1 18.93 9H19a1 1 0 0 1 0 2h-.07A7.003 7.003 0 0 1 13 16.93zM12 6a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" />
      </svg>
    ),
  },
  {
    name: "Apache Hive",
    category: "Data Warehouse",
    color: "#FDE047",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2zm0 2.3L5.8 7.8 12 11.2l6.2-3.4L12 4.3zm-6.2 5v6.9l6.2 3.5v-6.9L5.8 9.3zm12.4 0l-6.2 3.5v6.9l6.2-3.5V9.3z" />
      </svg>
    ),
  },
  {
    name: "LSTM & ML",
    category: "Machine Learning",
    color: "#34D399",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3a9 9 0 0 0-9 9v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a9 9 0 0 0-9-9zm-5 9a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm5 4a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm5-4a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "JS Runtime",
    color: "#4ADE80",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5l10.392 6v12L12 25.5 1.608 19.5V7.5L12 1.5zm0 2.31L3.608 8.655v9.69L12 23.19l8.392-4.845v-9.69L12 3.81z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    color: "#FB7185",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.5 24A5.5 5.5 0 0 1 0 18.5V13h5.5a5.5 5.5 0 1 1 0 11zM0 7.5A5.5 5.5 0 0 1 5.5 2H11v11H5.5A5.5 5.5 0 0 1 0 7.5zM11 2h5.5a5.5 5.5 0 1 1 0 11H11V2zm0 11h5.5a5.5 5.5 0 1 1 0 11H11V13z" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    color: "#FB923C",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.122 0L8.87 2.527l2.673 2.674a1.78 1.78 0 0 1 2.253 2.267l2.57 2.57a1.78 1.78 0 1 1-1.066 1.065l-2.39-2.39a1.78 1.78 0 0 1-2.164-.374 1.78 1.78 0 0 1-.365-2.155L7.766 3.633.454 10.945a1.5 1.5 0 0 0 0 2.122l10.48 10.48a1.5 1.5 0 0 0 2.122 0l10.48-10.48a1.5 1.5 0 0 0 .01-2.137z" />
      </svg>
    ),
  },
  {
    name: "Gemini API",
    category: "AI Integration",
    color: "#60A5FA",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
      </svg>
    ),
  },
  {
    name: "DeepSeek API",
    category: "AI LLM Engine",
    color: "#818CF8",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
      </svg>
    ),
  },
  {
    name: "Midtrans",
    category: "Payment Gateway",
    color: "#38BDF8",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 14H3V8h18v10zm-10-7H5v2h6v-2z" />
      </svg>
    ),
  },
  {
    name: "Leaflet.js",
    category: "Geospatial Maps",
    color: "#4ADE80",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    category: "CSS Framework",
    color: "#A855F7",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 3.5H5.2C4.2 3.5 3.5 4.3 3.5 5.3v13.4c0 1 .8 1.8 1.7 1.8h13.6c1 0 1.7-.8 1.7-1.8V5.3c0-1-.7-1.8-1.7-1.8zm-7.6 13.3H7.5V7.2h3.7c1.8 0 2.9 1 2.9 2.3 0 .9-.6 1.7-1.5 2 .9.2 1.8 1 1.8 2.3 0 1.7-1.3 3-3.2 3zm.3-5.2c.9 0 1.5-.5 1.5-1.2 0-.8-.6-1.2-1.5-1.2H9.2v2.4h2.3zm.2 3.5c1 0 1.7-.5 1.7-1.3s-.7-1.3-1.7-1.3H9.2v2.6h2.5z" />
      </svg>
    ),
  },
];

export function TechMarquee() {
  const duplicatedItems = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="relative w-full overflow-hidden py-2 sm:py-3">
      {/* Edge Gradients for Smooth In/Out Fading - Narrower on mobile to preserve viewport space */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background via-background/70 to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background via-background/70 to-transparent sm:w-20" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee items-center gap-3 sm:gap-4 hover:[animation-play-state:paused]">
        {duplicatedItems.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="group flex shrink-0 items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-border/70 bg-card/60 px-3.5 py-2 sm:px-5 sm:py-3 shadow-sm sm:shadow-md backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-card/90"
          >
            <div
              className="flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl p-1 sm:p-1.5 transition-transform duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xs sm:text-sm text-foreground tracking-tight whitespace-nowrap">
                {tech.name}
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-muted-foreground whitespace-nowrap">
                {tech.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
