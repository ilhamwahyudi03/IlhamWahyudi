"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { Briefcase, Layers, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const t = useTranslations("About");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding border-t border-border/40">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-5 sm:mb-8 lg:mb-12"
        >
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-primary">
            {t("sectionTag")}
          </span>
          <h2 className="mt-1 sm:mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-4 sm:gap-8 lg:grid-cols-12 lg:gap-10">
          {/* MOBILE/TABLET (< 1024px): Compact Horizontal Credential Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:hidden"
          >
            <div className="flex items-center gap-3.5 rounded-xl border border-border/80 bg-card p-3 shadow-sm">
              <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/images/ilham-about.jpeg?v=3"
                  alt="M. Ilham Wahyudi - Fullstack Web & Data"
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-foreground">
                    <Award className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="truncate">S1 TI · IPK 3.51</span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[10px] text-emerald-500 dark:text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </span>
                </div>
                <p className="font-mono text-[11px] leading-snug text-muted-foreground">
                  Universitas &apos;Aisyiyah Yogyakarta
                </p>
                <p className="font-mono text-[10px] text-muted-foreground/80">
                  2022 – 2026 · Fullstack & Data
                </p>
              </div>
            </div>
          </motion.div>

          {/* DESKTOP (>= 1024px): Tall Editorial Portrait Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="group rounded-2xl border border-border/80 bg-card p-3 shadow-sm">
              <div className="relative h-[390px] w-full overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/images/ilham-about.jpeg?v=3"
                  alt="M. Ilham Wahyudi - Fullstack Web & Data"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>

              {/* Clean Identity Footer */}
              <div className="mt-3 space-y-2 px-1 pb-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 shrink-0 text-primary" />
                    <span className="font-mono text-xs font-semibold text-foreground">
                      S1 Teknologi Informasi · IPK 3.51
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-500 dark:text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified
                  </span>
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                  Universitas &apos;Aisyiyah Yogyakarta (2022 – 2026)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Narrative & Engineering Principles Column (7 cols) */}
          <div className="space-y-3 sm:space-y-5 lg:space-y-6 lg:col-span-7">
            {/* Background Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-xl sm:rounded-2xl border border-border/80 bg-card p-4 sm:p-6 lg:p-8 transition-colors hover:border-primary/40"
            >
              <div className="mb-2.5 sm:mb-4 flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-foreground">
                  {t("backgroundTitle")}
                </h3>
              </div>
              <p className="leading-relaxed text-muted-foreground text-[13px] sm:text-base">
                {t("backgroundText")}
              </p>
            </motion.div>

            {/* Technical Approach Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="rounded-xl sm:rounded-2xl border border-border/80 bg-card p-4 sm:p-6 lg:p-8 transition-colors hover:border-primary/40"
            >
              <div className="mb-2.5 sm:mb-4 flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Layers className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-foreground">
                  {t("philosophyTitle")}
                </h3>
              </div>
              <p className="leading-relaxed text-muted-foreground text-[13px] sm:text-base">
                {t("philosophyText")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
