"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ZoomIn,
  ZoomOut,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { Certificate } from "@/data/certificates";
import { cn } from "@/lib/utils";

interface CertificateModalProps {
  certificate: Certificate | null;
  certificates: Certificate[];
  locale: string;
  onClose: () => void;
  onSelect: (cert: Certificate) => void;
}

export function CertificateModal({
  certificate,
  certificates,
  locale,
  onClose,
  onSelect,
}: CertificateModalProps) {
  const [activePage, setActivePage] = useState<1 | 2>(1);
  const [zoomed, setZoomed] = useState(false);

  // Reset page and zoom when switching certificates
  useEffect(() => {
    setActivePage(1);
    setZoomed(false);
  }, [certificate?.id]);

  // Keyboard navigation & Escape close
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  if (!certificate) return null;

  const currentIndex = certificates.findIndex((c) => c.id === certificate.id);
  const handlePrev = () => {
    const prevIdx =
      (currentIndex - 1 + certificates.length) % certificates.length;
    onSelect(certificates[prevIdx]);
  };
  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % certificates.length;
    onSelect(certificates[nextIdx]);
  };

  const title = locale === "id" ? certificate.titleId : certificate.title;
  const issuer = locale === "id" ? certificate.issuerId : certificate.issuer;
  const description =
    locale === "id" ? certificate.descriptionId : certificate.description;

  const currentImageSrc =
    activePage === 2 && certificate.secondaryImage
      ? certificate.secondaryImage
      : certificate.image;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-2 backdrop-blur-md sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex items-start justify-between gap-2.5 sm:gap-4 border-b border-border/60 bg-muted/20 px-3.5 py-3 sm:px-6 sm:py-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-medium text-emerald-400">
                  <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  {locale === "id" ? "Terverifikasi" : "Verified"}
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-muted-foreground truncate">
                  {issuer} · {certificate.year}
                </span>
              </div>
              <h3 className="mt-1 truncate text-sm font-bold text-foreground sm:text-lg">
                {title}
              </h3>
            </div>

            <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
              <button
                type="button"
                onClick={() => setZoomed((z) => !z)}
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95"
                title={zoomed ? "Perkecil" : "Perbesar"}
                aria-label={zoomed ? "Zoom out" : "Zoom in"}
              >
                {zoomed ? (
                  <ZoomOut className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                ) : (
                  <ZoomIn className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                )}
              </button>
              <a
                href={currentImageSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95"
                title={locale === "id" ? "Buka di Tab Baru" : "Open Original"}
                aria-label="Open original image"
              >
                <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-destructive/50 hover:bg-destructive/10 hover:text-destructive active:scale-95"
                aria-label="Close modal"
              >
                <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>

          {/* Image Viewport */}
          <div className="relative flex-1 overflow-auto bg-black/40 p-2 sm:p-6">
            <div
              className={cn(
                "relative mx-auto flex items-center justify-center transition-all duration-300",
                zoomed ? "w-[140%] max-w-none cursor-zoom-out" : "w-full cursor-zoom-in"
              )}
              onClick={() => setZoomed((z) => !z)}
            >
              <div className="relative aspect-[4/3] w-full max-h-[60vh] overflow-hidden rounded-xl border border-border/40 bg-background/50">
                <Image
                  src={currentImageSrc}
                  alt={title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 95vw, 900px"
                  priority
                />
              </div>
            </div>

            {/* Prev / Next Navigation Arrows */}
            {certificates.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/85 text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-primary active:scale-95"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/85 text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-primary active:scale-95"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Info & Multi-page Switcher */}
          <div className="flex flex-col gap-3 border-t border-border/60 bg-muted/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {description}
            </p>

            <div className="flex shrink-0 items-center gap-2">
              {certificate.secondaryImage && (
                <div className="flex items-center gap-1 rounded-lg border border-border/60 bg-background/60 p-1">
                  <button
                    type="button"
                    onClick={() => setActivePage(1)}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-mono transition-colors",
                      activePage === 1
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <FileText className="h-3 w-3" />
                    Hal 1
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePage(2)}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-mono transition-colors",
                      activePage === 2
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <FileText className="h-3 w-3" />
                    Hal 2
                  </button>
                </div>
              )}

              <span className="font-mono text-xs text-muted-foreground">
                {currentIndex + 1} / {certificates.length}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
