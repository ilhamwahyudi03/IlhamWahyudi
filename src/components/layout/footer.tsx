import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/10 px-4 py-8 sm:px-6 sm:py-10 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base font-semibold">M. Ilham Wahyudi</p>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              {t("madeWith")} Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ilhamwahyudi03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/m-ilham-wahyudi-0b1365310"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:ilhamwahyudi4625@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-6 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear} M. Ilham Wahyudi. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
