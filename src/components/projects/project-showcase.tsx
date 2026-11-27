"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  Play,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Layers,
  Cpu,
  AlertCircle,
  Wrench,
} from "lucide-react";
import type {
  FrameworkRole,
  ProjectScreenModule,
  SystemOverview,
} from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectVideoPlayerProps {
  src: string;
  poster?: string;
  caption?: string;
  locale: string;
}

export function ProjectVideoPlayer({
  src,
  poster,
  caption,
  locale,
}: ProjectVideoPlayerProps) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/70 p-2 sm:p-3 shadow-lg backdrop-blur-sm">
      {/* Window Header */}
      <div className="mb-2 flex items-center justify-between gap-2 border-b border-border/40 px-2.5 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/75" />
          </div>
          <span className="truncate text-xs font-mono text-muted-foreground">
            {locale === "id" ? "demo-sistem.webm" : "walkthrough.webm"}
          </span>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-primary">
          <Play className="h-3 w-3 fill-current" />
          {locale === "id" ? "Video Demo" : "Live Recording"}
        </span>
      </div>

      {/* Video Surface */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/40 bg-background/90">
        <video
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-contain"
        >
          {locale === "id"
            ? "Browser Anda tidak mendukung pemutaran video HTML5."
            : "Your browser does not support HTML5 video playback."}
        </video>
      </div>

      {caption && (
        <p className="mt-2.5 px-2 pb-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          {caption}
        </p>
      )}
    </div>
  );
}

interface SystemArchitectureSectionProps {
  overview: SystemOverview;
  frameworkStack: FrameworkRole[];
  locale: string;
}

export function SystemArchitectureSection({
  overview,
  frameworkStack,
  locale,
}: SystemArchitectureSectionProps) {
  const isId = locale === "id";

  return (
    <section className="space-y-8">
      {/* Section Heading */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
          <Cpu className="h-3.5 w-3.5" />
          <span>{isId ? "Arsitektur & Framework" : "Architecture & Stack"}</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {isId
            ? "Penjelasan Sistem & Peran Framework"
            : "System Overview & Framework Breakdown"}
        </h2>
      </div>

      {/* Problem / Solution / Architecture Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{isId ? "Masalah" : "Challenge"}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {isId ? overview.problemId : overview.problem}
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <Wrench className="h-4 w-4 shrink-0" />
            <span>{isId ? "Solusi Sistem" : "Solution"}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {isId ? overview.solutionId : overview.solution}
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
            <Layers className="h-4 w-4 shrink-0" />
            <span>{isId ? "Pola Arsitektur" : "Architecture"}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {isId ? overview.architectureNoteId : overview.architectureNote}
          </p>
        </div>
      </div>

      {/* Framework Stack Roles */}
      <div className="grid gap-4 sm:grid-cols-2">
        {frameworkStack.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-mono font-medium text-primary">
                {isId ? item.layerId : item.layer}
              </span>
            </div>
            <h3 className="mt-3 text-base font-bold text-foreground sm:text-lg">
              {item.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {isId ? item.roleId : item.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

interface ProjectVisualWalkthroughProps {
  modules: ProjectScreenModule[];
  locale: string;
}

export function ProjectVisualWalkthrough({
  modules,
  locale,
}: ProjectVisualWalkthroughProps) {
  const isId = locale === "id";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const openModal = useCallback((idx: number) => {
    setActiveIndex(idx);
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + modules.length) % modules.length
    );
  }, [modules.length]);

  const showNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % modules.length
    );
  }, [modules.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [activeIndex, closeModal, showPrev, showNext]);

  const activeModule = activeIndex !== null ? modules[activeIndex] : null;

  return (
    <section className="space-y-10">
      {/* Section Header */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <Layers className="h-3.5 w-3.5" />
            <span>
              {isId ? "Dokumentasi Antarmuka" : "Visual Interface Walkthrough"}
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {isId
              ? "Mockup Pilihan & Penjelasan Fitur"
              : "Curated Mockups & Module Breakdown"}
          </h2>
        </div>
        <p className="text-xs font-mono text-muted-foreground">
          {isId
            ? "Klik gambar mana saja untuk memperbesar"
            : "Click any screen to inspect full view"}
        </p>
      </div>

      {/* Alternating Zig-Zag Storyboard */}
      <div className="space-y-10 sm:space-y-12">
        {modules.map((mod, idx) => {
          const isEven = idx % 2 === 0;
          const title = isId ? mod.titleId : mod.title;
          const summary = isId ? mod.summaryId : mod.summary;
          const tag = isId ? mod.tagId : mod.tag;
          const highlights = isId ? mod.highlightsId : mod.highlights;

          return (
            <div
              key={mod.id}
              className="grid grid-cols-1 items-center gap-6 sm:gap-8 rounded-2xl border border-border/60 bg-card/40 p-4 sm:p-7 backdrop-blur-sm lg:grid-cols-12"
            >
              {/* Mockup Image Column */}
              <div className={cn("lg:col-span-7", !isEven && "lg:order-2")}>
                <button
                  type="button"
                  onClick={() => openModal(idx)}
                  aria-label={isId ? `Perbesar ${title}` : `Inspect ${title}`}
                  className="group relative block w-full overflow-hidden rounded-xl border border-border/60 bg-background/80 text-left shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.99]"
                >
                  {/* Optional Browser Chrome for clean raw captures */}
                  {mod.frameStyle === "browser" && (
                    <div className="flex items-center justify-between gap-2 border-b border-border/60 bg-muted/50 px-3 py-2">
                      <div className="flex shrink-0 items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/75" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/75" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/75" />
                      </div>
                      <span className="min-w-0 truncate rounded bg-background/80 px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                        {mod.browserUrl ?? "app.local"}
                      </span>
                      <span className="hidden w-8 sm:inline-block" aria-hidden="true" />
                    </div>
                  )}

                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/20">
                    <Image
                      src={mod.image}
                      alt={title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 620px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/10" />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-background/90 px-2.5 py-1 text-[11px] font-mono font-medium text-foreground shadow-sm backdrop-blur-md transition-transform duration-200 group-hover:scale-105">
                      <Maximize2 className="h-3 w-3 text-primary" />
                      {isId ? "Perbesar" : "Zoom"}
                    </span>
                  </div>
                </button>
              </div>

              {/* Explanation Column */}
              <div
                className={cn(
                  "flex min-w-0 flex-col justify-center space-y-4 lg:col-span-5",
                  !isEven && "lg:order-1"
                )}
              >
                <span className="inline-flex w-fit max-w-full truncate rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-mono font-medium text-primary">
                  {tag}
                </span>

                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {summary}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 pt-1">
                  {highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Frameworks Used */}
                <div className="border-t border-border/40 pt-3">
                  <p className="mb-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    {isId ? "Framework & Teknologi" : "Frameworks & Tech"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {mod.frameworksUsed.map((fw) => (
                      <span
                        key={fw}
                        className="rounded-md border border-border/60 bg-muted/60 px-2.5 py-1 text-xs font-mono text-foreground/80"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal via Portal (cleanly above Navbar & Chatbot) */}
      {typeof document !== "undefined" &&
        activeModule &&
        activeIndex !== null &&
        createPortal(
          <div
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={isId ? activeModule.titleId : activeModule.title}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/92 p-3 sm:p-8 backdrop-blur-md animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3 sm:px-6">
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-mono text-primary">
                    {isId ? activeModule.tagId : activeModule.tag} (
                    {activeIndex + 1}/{modules.length})
                  </p>
                  <h4 className="truncate text-sm font-bold text-foreground sm:text-base">
                    {isId ? activeModule.titleId : activeModule.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label={isId ? "Tutup pratinjau" : "Close preview"}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/50 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Image Area */}
              <div className="relative flex flex-1 items-center justify-center overflow-auto bg-background/70 p-3 sm:p-5">
                <Image
                  src={activeModule.image}
                  alt={isId ? activeModule.titleId : activeModule.title}
                  width={activeModule.width}
                  height={activeModule.height}
                  unoptimized
                  className="h-auto max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-md"
                />
              </div>

              {/* Footer Controls & Caption */}
              <div className="flex flex-col gap-3 border-t border-border/60 bg-card px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p className="max-w-2xl text-xs text-muted-foreground line-clamp-2">
                  {isId ? activeModule.summaryId : activeModule.summary}
                </p>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label={isId ? "Sebelumnya" : "Previous"}
                    className="inline-flex h-9 items-center gap-1 rounded-lg border border-border/60 px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      {isId ? "Sebelumnya" : "Prev"}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label={isId ? "Berikutnya" : "Next"}
                    className="inline-flex h-9 items-center gap-1 rounded-lg border border-border/60 px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
                  >
                    <span className="hidden sm:inline">
                      {isId ? "Berikutnya" : "Next"}
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
