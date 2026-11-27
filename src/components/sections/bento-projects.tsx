"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ArrowRight, PlayCircle, Layers } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

interface BentoProjectsProps {
  locale: string;
}

export function BentoProjects({ locale }: BentoProjectsProps) {
  const t = useTranslations("Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="section-padding border-t border-border/40 bg-muted/10"
    >
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-5 sm:mb-10 md:mb-12 flex flex-col justify-between gap-2 sm:gap-4 md:flex-row md:items-end"
        >
          <div>
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-primary">
              {t("sectionTag")}
            </span>
            <h2 className="mt-1 sm:mt-1.5 text-2xl font-bold sm:text-3xl lg:text-4xl">{t("title")}</h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* MOBILE DEDICATED LAYOUT (< 768px): Compact horizontal snap carousel */}
        <div className="md:hidden">
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 no-scrollbar">
            {featuredProjects.map((project) => {
              const title = locale === "id" ? project.titleId : project.title;
              const description =
                locale === "id" ? project.descriptionId : project.description;
              const category =
                locale === "id" ? project.categoryId : project.category;
              const topMetric = project.metrics[0];

              return (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className={cn(
                    "group flex w-[78vw] max-w-[290px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-border/60 bg-card/85 transition-all active:scale-[0.98]",
                    `bg-gradient-to-br ${project.accentColor}`
                  )}
                >
                  {project.previewImage && (
                    <div className="relative h-32 w-full overflow-hidden border-b border-border/50 bg-muted/30">
                      <Image
                        src={project.previewImage}
                        alt={title}
                        fill
                        sizes="290px"
                        className="object-cover object-center"
                      />
                      <span className="absolute left-2.5 top-2.5 rounded-md border border-border/60 bg-background/85 px-2 py-0.5 font-mono text-[10px] font-medium backdrop-blur-md">
                        {category}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col justify-between p-3.5">
                    <div>
                      <h3 className="line-clamp-1 text-sm font-bold tracking-tight text-foreground">
                        {title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {description}
                      </p>

                      <div className="mt-2.5 flex flex-wrap items-center gap-1">
                        {topMetric && (
                          <span className="rounded-md border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-primary">
                            {topMetric.value}
                          </span>
                        )}
                        {project.tech.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-muted/70 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-border/40 pt-2.5 text-xs font-semibold text-primary">
                      <span>{t("viewCaseStudy")}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="mt-2 flex items-center justify-end gap-1 font-mono text-[11px] text-muted-foreground">
            <span>
              {locale === "id"
                ? `Geser untuk ${featuredProjects.length} proyek`
                : `Swipe through ${featuredProjects.length} projects`}
            </span>
            <ArrowRight className="h-3 w-3 text-primary" />
          </p>
        </div>

        {/* TABLET & DESKTOP BENTO GRID (>= 768px): 1 Flagship Split Card + 2 Equal Featured Cards */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-6">
          {featuredProjects.map((project, idx) => {
            const title = locale === "id" ? project.titleId : project.title;
            const description =
              locale === "id" ? project.descriptionId : project.description;
            const category =
              locale === "id" ? project.categoryId : project.category;
            const isHeroCard = project.size === "large";
            const screenCount = project.gallery?.length ?? 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className={cn(isHeroCard && "md:col-span-2")}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/80 transition-all duration-300",
                    "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    "active:scale-[0.995]",
                    `bg-gradient-to-br ${project.accentColor}`,
                    isHeroCard && "lg:grid lg:grid-cols-12 lg:items-center"
                  )}
                >
                  {/* Visual Preview Frame (unobstructed artwork) */}
                  {project.previewImage && (
                    <div
                      className={cn(
                        "relative aspect-[16/10] w-full overflow-hidden border-b border-border/50 bg-muted/30",
                        isHeroCard &&
                          "lg:col-span-6 lg:h-full lg:border-b-0 lg:border-r"
                      )}
                    >
                      <Image
                        src={project.previewImage}
                        alt={title}
                        fill
                        sizes={
                          isHeroCard
                            ? "(max-width: 1024px) 100vw, 560px"
                            : "(max-width: 768px) 100vw, 540px"
                        }
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  )}

                  {/* Details Content */}
                  <div
                    className={cn(
                      "flex flex-1 flex-col p-4 sm:p-6 lg:p-8",
                      isHeroCard && "lg:col-span-6 lg:justify-between"
                    )}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-md border border-border/60 bg-card/80 px-2.5 py-1 text-xs font-mono font-medium backdrop-blur-sm">
                            {category}
                          </span>
                          {project.videoDemo && (
                            <span className="inline-flex items-center gap-1 rounded-md border border-primary/35 bg-primary/10 px-2 py-1 text-[11px] font-mono font-medium text-primary">
                              <PlayCircle className="h-3 w-3" />
                              {locale === "id" ? "Video Demo" : "Demo Video"}
                            </span>
                          )}
                          {screenCount > 0 && (
                            <span className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-muted/60 px-2 py-1 text-[11px] font-mono text-muted-foreground">
                              <Layers className="h-3 w-3" />
                              {screenCount} {locale === "id" ? "Modul" : "Screens"}
                            </span>
                          )}
                        </div>
                        <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                      </div>

                      <h3 className="mt-5 text-xl font-bold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                        {title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>

                      {/* Key Metrics */}
                      {project.metrics.length > 0 && (
                        <div
                          className={cn(
                            "mt-5 grid gap-2.5",
                            isHeroCard
                              ? "grid-cols-2 sm:grid-cols-4"
                              : "grid-cols-2 sm:grid-cols-3"
                          )}
                        >
                          {project.metrics
                            .slice(0, isHeroCard ? 4 : 3)
                            .map((metric) => (
                              <div
                                key={metric.label}
                                className="rounded-lg border border-border/50 bg-background/50 px-3 py-2.5 text-center backdrop-blur-sm"
                              >
                                <p className="text-sm font-bold text-primary sm:text-base">
                                  {metric.value}
                                </p>
                                <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
                                  {metric.label}
                                </p>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>

                    {/* Footer: Tech Stack & CTA */}
                    <div className="mt-6 border-t border-border/40 pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-muted/70 px-2 py-0.5 text-xs font-mono text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="rounded-md bg-muted/70 px-2 py-0.5 text-xs font-mono text-muted-foreground">
                            +{project.tech.length - 5}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary transition-transform duration-200 group-hover:translate-x-1">
                        <span>{t("viewCaseStudy")}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
