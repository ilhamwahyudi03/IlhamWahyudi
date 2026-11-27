"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2, Loader2, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const t = useTranslations("Contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`
    );
    window.location.href = `mailto:ilhamwahyudi4625@gmail.com?subject=${subject}&body=${body}`;
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding border-t border-border/40">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {t("sectionTag")}
          </span>
          <h2 className="mt-2 text-2xl font-bold sm:text-5xl">{t("title")}</h2>
          <p className="mx-auto mt-2 sm:mt-4 max-w-xl text-xs sm:text-base text-muted-foreground">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-10 md:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2"
        >
          {/* Contact Links: Compact 2x2 grid on mobile, clean stack on desktop */}
          <div className="grid grid-cols-2 gap-2.5 md:flex md:flex-col md:gap-4">
            <a
              href="mailto:ilhamwahyudi4625@gmail.com"
              className="group flex items-center gap-2.5 sm:gap-4 rounded-xl sm:rounded-2xl glass p-3 sm:p-4 md:p-5 transition-all hover:border-primary/40"
            >
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0 overflow-hidden">
                <p className="font-semibold text-xs sm:text-base">Email</p>
                <p className="truncate text-[11px] sm:text-sm text-muted-foreground">ilhamwahyudi4625@gmail.com</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/m-ilham-wahyudi-0b1365310"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 sm:gap-4 rounded-xl sm:rounded-2xl glass p-3 sm:p-4 md:p-5 transition-all hover:border-blue-500/40"
            >
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0 overflow-hidden">
                <p className="font-semibold text-xs sm:text-base">{t("ctaLinkedIn")}</p>
                <p className="truncate text-[11px] sm:text-sm text-muted-foreground">
                  m-ilham-wahyudi
                </p>
              </div>
            </a>
            <a
              href="https://github.com/ilhamwahyudi03"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 sm:gap-4 rounded-xl sm:rounded-2xl glass p-3 sm:p-4 md:p-5 transition-all hover:border-border"
            >
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0 overflow-hidden">
                <p className="font-semibold text-xs sm:text-base">{t("ctaGitHub")}</p>
                <p className="truncate text-[11px] sm:text-sm text-muted-foreground">
                  ilhamwahyudi03
                </p>
              </div>
            </a>
            <a
              href="https://wa.me/6287871563112"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 sm:gap-4 rounded-xl sm:rounded-2xl glass p-3 sm:p-4 md:hidden transition-all hover:border-emerald-500/40"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                <Phone className="h-4 w-4" />
              </div>
              <div className="min-w-0 overflow-hidden">
                <p className="text-xs font-semibold">WhatsApp</p>
                <p className="truncate text-[11px] text-muted-foreground">+62 878-7156...</p>
              </div>
            </a>
            <div className="hidden md:grid md:grid-cols-2 md:gap-3">
              <a
                href="https://wa.me/6287871563112"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl glass p-4 transition-all hover:border-emerald-500/40"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold">WhatsApp</p>
                  <p className="truncate text-xs text-muted-foreground">+62 878-7156-3112</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-2xl glass p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold">Domisili</p>
                  <p className="truncate text-xs text-muted-foreground">Yogyakarta, ID</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl sm:rounded-2xl glass p-4 sm:p-6"
          >
            {sent ? (
              <div className="flex h-full min-h-[260px] flex-col items-center justify-center gap-3 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                <p className="font-semibold text-foreground">Pesan terkirim!</p>
                <p className="text-sm text-muted-foreground">
                  Saya akan segera menghubungi kamu.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs text-primary hover:underline"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Nama
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                    placeholder="Nama kamu"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                    placeholder="kamu@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Pesan
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                    placeholder="Ceritakan proyekmu..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all",
                    sending
                      ? "cursor-not-allowed opacity-70"
                      : "hover:scale-[1.02] hover:bg-primary/90 active:scale-95"
                  )}
                >
                  {sending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {t("ctaSayHello")}
                </button>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
