"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { TechMarquee } from "@/components/sections/tech-marquee";

interface SkillsSectionProps {
  locale: string;
}

export function SkillsSection({ locale }: SkillsSectionProps) {
  const t = useTranslations("Skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding border-t border-border/40 overflow-hidden">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.15 }}
          className="mb-5 sm:mb-8 md:mb-12"
        >
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-primary">
            {t("sectionTag")}
          </span>
          <h2 className="mt-1 sm:mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">{t("title")}</h2>
        </motion.div>

        {/* MOBILE DEDICATED LAYOUT (< 768px): Compact inline tag pills */}
        <div className="space-y-2.5 md:hidden">
          {skillGroups.map((group) => (
            <div key={group.category} className="rounded-xl glass p-3.5">
              <div className="flex items-center gap-2">
                <span className="text-base">{group.icon}</span>
                <h3 className="font-mono text-xs font-semibold text-primary">
                  {locale === "id" ? group.categoryId : group.category}
                </h3>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* TABLET & DESKTOP LAYOUT (>= 768px): 4-column structured grid */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.15, delay: idx * 0.1 }}
              className="group rounded-2xl glass p-6 transition-all hover:border-primary/40"
            >
              <div className="text-2xl">{group.icon}</div>
              <h3 className="mt-3 font-mono text-sm font-semibold text-primary">
                {locale === "id" ? group.categoryId : group.category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50 transition-colors group-hover:bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Infinite Horizontal Tech Logo Marquee */}
        <div className="mt-7 sm:mt-10 md:mt-14 pt-5 sm:pt-8 border-t border-border/40">
          <div className="mb-3 sm:mb-4 flex items-center justify-between px-1">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {locale === "id" ? "Teknologi & Ekosistem Terapan" : "Applied Technology & Ecosystem"}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground hidden sm:inline-block">
              {locale === "id" ? "Arahkan kursor untuk jeda" : "Hover to pause"}
            </span>
          </div>
          <TechMarquee />
        </div>
      </div>
    </section>
  );
}
