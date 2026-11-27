"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Award } from "lucide-react";
import Image from "next/image";
import { certificates, Certificate } from "@/data/certificates";
import { cn } from "@/lib/utils";

interface CertificateShowcaseProps {
  locale: string;
  onSelectCertificate: (cert: Certificate) => void;
}

const CATEGORIES = [
  { key: "all", labelEn: "All", labelId: "Semua" },
  { key: "award", labelEn: "Awards", labelId: "Penghargaan" },
  { key: "haki", labelEn: "HAKI", labelId: "HAKI Resmi" },
  { key: "internship", labelEn: "Internship", labelId: "Magang" },
  { key: "grant", labelEn: "Grants", labelId: "Hibah" },
  { key: "course", labelEn: "Workshops", labelId: "Pelatihan" },
] as const;

export function CertificateShowcase({
  locale,
  onSelectCertificate,
}: CertificateShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  return (
    <div className="mt-10 sm:mt-16 pt-8 sm:pt-12 border-t border-border/40">
      {/* Header & Filter Pills */}
      <div className="mb-6 sm:mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-primary">
            <Award className="h-3.5 w-3.5" />
            {locale === "id"
              ? "Arsip Bukti Resmi"
              : "Verified Credentials"}
          </span>
          <h3 className="mt-1 text-xl sm:text-2xl font-bold text-foreground">
            {locale === "id"
              ? "Galeri Sertifikat & Penghargaan"
              : "Certificates & Honors Gallery"}
          </h3>
        </div>

        {/* Filter Chips: horizontal swipe on mobile, wrap on tablet/desktop */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:flex-wrap sm:overflow-x-visible no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveFilter(cat.key)}
              className={cn(
                "shrink-0 rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all active:scale-95",
                activeFilter === cat.key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border/60 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {locale === "id" ? cat.labelId : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Credential Cards: Horizontal snap carousel on mobile, 2-3 col grid on tablet/desktop */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
        {filtered.map((cert, idx) => {
          const title = locale === "id" ? cert.titleId : cert.title;
          const issuer = locale === "id" ? cert.issuerId : cert.issuer;

          return (
            <motion.button
              key={cert.id}
              type="button"
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              onClick={() => onSelectCertificate(cert)}
              className="group flex w-[72vw] max-w-[255px] shrink-0 snap-start flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-border/60 bg-card/50 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.98] sm:w-auto"
            >
              {/* Framed Thumbnail */}
              <div className="relative h-32 sm:h-auto sm:aspect-[16/10] w-full overflow-hidden bg-muted/30">
                <Image
                  src={cert.image}
                  alt={title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 255px, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />

                {/* Top Badges */}
                <div className="absolute left-2.5 right-2.5 top-2.5 sm:left-3 sm:right-3 sm:top-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-background/80 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-400 backdrop-blur-md">
                    <ShieldCheck className="h-3 w-3" />
                    {cert.year}
                  </span>
                  {cert.secondaryImage && (
                    <span className="rounded-md border border-border/60 bg-background/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur-md">
                      2 Hal
                    </span>
                  )}
                </div>

                {/* Hover Overlay Prompt (Desktop) */}
                <div className="hidden sm:flex absolute inset-0 items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
                    <Eye className="h-3.5 w-3.5" />
                    {locale === "id" ? "Lihat Sertifikat" : "View Certificate"}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col justify-between p-3 sm:p-4">
                <div>
                  <p className="truncate font-mono text-[10px] sm:text-[11px] text-primary">{issuer}</p>
                  <h4 className="mt-1 line-clamp-2 text-xs sm:text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                    {title}
                  </h4>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
