"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const NAV_ITEMS = ["about", "projects", "skills", "experience", "contact"] as const;

interface NavbarProps {
  locale: string;
}

export function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("Navigation");
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    const nextLocale = locale === "id" ? "en" : "id";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold font-mono transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
            IW
          </div>
          <span className="hidden font-semibold text-sm sm:block tracking-tight">
            M. Ilham Wahyudi
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
              {t(item)}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-lg border border-border/60 px-3 py-1.5 text-xs font-mono font-semibold transition-all hover:bg-muted hover:border-border"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            {locale.toUpperCase()}
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {t(item)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
