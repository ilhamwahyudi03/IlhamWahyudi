"use client";

import { useTranslations } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Code2, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface HeroSectionProps {
  locale: string;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center section-padding pt-20 pb-8 md:min-h-[88vh] md:pt-28 md:pb-14 lg:min-h-[92vh] lg:pt-32 lg:pb-16"
    >
      <div className="container mx-auto max-w-6xl">
        {/* MOBILE DEDICATED LAYOUT (< 768px): Compact, thumb-friendly identity profile */}
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          animate="visible"
          className="md:hidden"
        >
          {/* Compact Avatar + Identity Header */}
          <motion.div variants={ITEM_VARIANTS} className="flex items-center gap-3.5">
            <div className="relative shrink-0">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-sm">
                <Image
                  src="/images/ilham-hero.jpg?v=3"
                  alt="M. Ilham Wahyudi"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <span
                className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-500"
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="truncate text-xl font-extrabold tracking-tight text-foreground leading-tight">
                {t("name")}
              </h1>
              <p className="mt-0.5 text-xs font-semibold text-primary leading-snug">
                {t("title")}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                <span className="inline-flex items-center gap-1 text-emerald-500 dark:text-emerald-400 font-medium">
                  {locale === "id" ? "Siap Kerja" : "Available"}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 truncate">
                  <MapPin className="h-3 w-3 shrink-0 text-primary" />
                  Yogyakarta
                </span>
              </div>
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.p
            variants={ITEM_VARIANTS}
            className="mt-3.5 text-[13px] leading-relaxed text-muted-foreground"
          >
            {t("valueProp")}
          </motion.p>

          {/* Compact 3-Metric Strip */}
          <motion.div
            variants={ITEM_VARIANTS}
            className="mt-4 grid grid-cols-3 rounded-xl border border-border/60 bg-card/50 py-2.5 px-2"
          >
            <div className="text-center">
              <p className="font-mono text-base font-bold text-foreground">6+</p>
              <p className="mt-0.5 font-mono text-[10px] leading-tight text-muted-foreground">
                {locale === "id" ? "Proyek Web/ML" : "Web/ML Apps"}
              </p>
            </div>
            <div className="border-x border-border/50 px-1 text-center">
              <p className="font-mono text-base font-bold text-foreground">5</p>
              <p className="mt-0.5 font-mono text-[10px] leading-tight text-muted-foreground">
                {locale === "id" ? "Prestasi & HAKI" : "Awards & IP"}
              </p>
            </div>
            <div className="text-center">
              <p className="font-mono text-base font-bold text-primary">3</p>
              <p className="mt-0.5 font-mono text-[10px] leading-tight text-muted-foreground">
                Web · UI · Data
              </p>
            </div>
          </motion.div>

          {/* Single-Row Thumb-Zone Actions (44px+ touch targets) */}
          <motion.div variants={ITEM_VARIANTS} className="mt-4 flex items-center gap-2">
            <a
              href={`/cv/CV_M_Ilham_Wahyudi_${locale.toUpperCase()}.pdf`}
              download
              className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
              <Download className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{t("ctaDownloadCv")}</span>
            </a>

            <a
              href="#projects"
              className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3 text-xs font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-muted active:scale-[0.98]"
            >
              <Code2 className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{t("ctaProjects")}</span>
            </a>

            <a
              href="#contact"
              aria-label={t("ctaContact")}
              title={t("ctaContact")}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* TABLET & DESKTOP LAYOUT (>= 768px): Editorial 12-column showcase */}
        <div className="hidden md:grid md:grid-cols-12 md:items-center md:gap-8 lg:gap-12">
          {/* Left Column: Bio & Value Proposition */}
          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate="visible"
            className="space-y-5 lg:space-y-6 md:col-span-7"
          >
            {/* Status & Location Pill Badges */}
            <motion.div variants={ITEM_VARIANTS} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-500 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                {t("availableForHire")}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3.5 py-1 text-xs font-mono text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Yogyakarta, Indonesia
              </span>
            </motion.div>

            {/* Greeting Eyebrow - Cleanly separated from Location */}
            <motion.div
              variants={ITEM_VARIANTS}
              className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-semibold"
            >
              {t("greeting")}
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={ITEM_VARIANTS}
              className="text-4xl font-extrabold tracking-tight text-foreground lg:text-[3.8rem] lg:leading-[1.08]"
            >
              {t("name")}
            </motion.h1>

            {/* Role Title */}
            <motion.h2
              variants={ITEM_VARIANTS}
              className="text-xl font-semibold text-primary lg:text-2xl"
            >
              {t("title")}
            </motion.h2>

            {/* Value Proposition */}
            <motion.p
              variants={ITEM_VARIANTS}
              className="max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg"
            >
              {t("valueProp")}
            </motion.p>

            {/* Verified Delivery Metrics */}
            <motion.div
              variants={ITEM_VARIANTS}
              className="grid grid-cols-3 gap-4 border-y border-border/60 py-4.5 max-w-lg"
            >
              <div>
                <p className="font-mono text-2xl font-bold text-foreground">6+</p>
                <p className="mt-0.5 text-xs text-muted-foreground font-mono">
                  {locale === "id" ? "Proyek Web & ML" : "Web & ML Projects"}
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-foreground">5</p>
                <p className="mt-0.5 text-xs text-muted-foreground font-mono">
                  {locale === "id" ? "Prestasi & HAKI" : "Awards & IP Certs"}
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-primary">3</p>
                <p className="mt-0.5 text-xs text-muted-foreground font-mono">
                  Web · UI/UX · Data
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={ITEM_VARIANTS}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href={`/cv/CV_M_Ilham_Wahyudi_${locale.toUpperCase()}.pdf`}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                {t("ctaDownloadCv")}
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-muted active:scale-[0.98]"
              >
                <Code2 className="h-4 w-4" />
                {t("ctaProjects")}
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                {t("ctaContact")}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Editorial Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center md:col-span-5"
          >
            <div className="group relative w-[270px] lg:w-[340px] rounded-2xl border border-border/80 bg-card p-3 shadow-xl">
              <div className="relative h-[330px] lg:h-[420px] w-full overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/images/ilham-hero.jpg?v=3"
                  alt="M. Ilham Wahyudi"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 270px, 340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Clean Caption Bar below photo */}
              <div className="mt-3 flex items-center justify-between px-1 pb-1">
                <p className="text-sm font-bold text-foreground leading-none">
                  M. Ilham Wahyudi
                </p>
                <span className="font-mono text-[11px] text-muted-foreground">
                  Yogyakarta, ID
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (Desktop only so mobile stays compact) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden lg:flex lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2"
      >
        <a
          href="#about"
          aria-label="Scroll to About"
          className="flex flex-col items-center gap-1.5 text-xs font-mono tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          <span>{t("scrollLabel")}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
