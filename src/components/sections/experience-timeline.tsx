"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Trophy,
  Award,
  ExternalLink,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { experiences } from "@/data/experience";
import { certificates, Certificate } from "@/data/certificates";
import { CertificateShowcase } from "@/components/sections/certificate-showcase";
import { CertificateModal } from "@/components/sections/certificate-modal";
import { cn } from "@/lib/utils";

interface ExperienceTimelineProps {
  locale: string;
}

const TYPE_ICONS = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Trophy,
};

export function ExperienceTimeline({ locale }: ExperienceTimelineProps) {
  const t = useTranslations("Experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openCertificateById = (certId: string) => {
    const found = certificates.find((c) => c.id === certId);
    if (found) setSelectedCert(found);
  };

  return (
    <section
      id="experience"
      className="section-padding border-t border-border/40 bg-muted/10"
    >
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-10 md:mb-12"
        >
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-primary">
            {t("sectionTag")}
          </span>
          <h2 className="mt-1 sm:mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">{t("title")}</h2>
        </motion.div>

        <div className="relative ml-3 space-y-4 sm:space-y-6 border-l border-border/60 pl-5 sm:ml-4 md:space-y-8 sm:pl-8">
          {experiences.map((exp, idx) => {
            const Icon = TYPE_ICONS[exp.type];
            const role = locale === "id" ? exp.roleId : exp.role;
            const description =
              locale === "id" ? exp.descriptionId : exp.description;
            const achievements =
              locale === "id" ? exp.achievementsId : exp.achievements;
            const isExpanded = !!expandedIds[exp.id];

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Timeline node */}
                <div className="absolute -left-[34px] sm:-left-[48px] flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-border bg-background text-muted-foreground transition-all group-hover:border-primary group-hover:text-primary">
                  <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </div>

                <div className="rounded-xl sm:rounded-2xl glass p-3.5 sm:p-5 md:p-6 transition-all hover:border-primary/40">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">
                      {role}{" "}
                      <span className="text-primary">· {exp.company}</span>
                    </h3>
                    <span className="shrink-0 font-mono text-[11px] sm:text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed",
                      !isExpanded && "line-clamp-2 md:line-clamp-none"
                    )}
                  >
                    {description}
                  </p>

                  {/* Collapsible highlights on mobile, always expanded on desktop */}
                  <ul
                    className={cn(
                      "mt-3 space-y-1.5 md:mt-4 md:space-y-2",
                      !isExpanded && "hidden md:block"
                    )}
                  >
                    {achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Mobile expand toggle + Credential Trigger */}
                  <div
                    className={cn(
                      "mt-2.5 flex flex-wrap items-center justify-between gap-2",
                      (exp.certificateId || isExpanded) && "border-t border-border/40 pt-2.5 md:mt-5 md:pt-4"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-1 py-1 font-mono text-[11px] font-medium text-muted-foreground transition-colors hover:text-primary md:hidden"
                    >
                      <span>
                        {isExpanded
                          ? locale === "id"
                            ? "Ringkas"
                            : "Show less"
                          : locale === "id"
                          ? `${achievements.length} pencapaian`
                          : `${achievements.length} highlights`}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>

                    {exp.certificateId && (
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <button
                          type="button"
                          onClick={() => openCertificateById(exp.certificateId!)}
                          className="group/btn inline-flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-primary/30 bg-primary/10 px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-95"
                        >
                          <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          <span>
                            {locale === "id"
                              ? "Lihat Sertifikat"
                              : "View Credential"}
                          </span>
                          <ExternalLink className="h-3 w-3 opacity-70 transition-transform group-hover/btn:translate-x-0.5" />
                        </button>
                        <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          {locale === "id" ? "Terverifikasi" : "Verified"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Certificates & Honors Gallery */}
        <CertificateShowcase
          locale={locale}
          onSelectCertificate={setSelectedCert}
        />
      </div>

      {/* Interactive Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        certificates={certificates}
        locale={locale}
        onClose={() => setSelectedCert(null)}
        onSelect={setSelectedCert}
      />
    </section>
  );
}
