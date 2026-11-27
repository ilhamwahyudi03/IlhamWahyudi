import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/animations/custom-cursor";
import { TechCanvas } from "@/components/animations/tech-canvas";
import { ScrollProgressBar } from "@/components/animations/scroll-progress";
import "@/styles/globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Ilham Wahyudi | Fullstack Web Developer & Data Specialist",
  description:
    "Portfolio interaktif M. Ilham Wahyudi — Sarjana Teknologi Informasi spesialis Fullstack Web Development (Laravel, Vue.js, React), UI/UX Design, dan Data Analytics.",
  authors: [{ name: "M. Ilham Wahyudi" }],
  keywords: [
    "M. Ilham Wahyudi",
    "Fullstack Web Developer",
    "UI/UX Designer",
    "Data Analytics",
    "Laravel",
    "Vue.js",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Portfolio",
    "Yogyakarta",
    "Indonesia",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ilham-portofolio-black.vercel.app/",
    title: "M. Ilham Wahyudi | Fullstack Web Developer & Data Specialist",
    description:
      "Portfolio interaktif dan studi kasus rekayasa perangkat lunak serta analisis data M. Ilham Wahyudi.",
    siteName: "M. Ilham Wahyudi Portfolio",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "id" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${sansFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-cyan-500/20 selection:text-cyan-400">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <SmoothScrollProvider>
              {/* Interactive Futuristic Fluid Cursor */}
              <CustomCursor />

              {/* Scroll Progress Bar at top */}
              <ScrollProgressBar />

              {/* Interactive Constellation Tech Grid Canvas */}
              <TechCanvas />

              {/* Subtle single top ambient wash */}
              <div
                className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
                aria-hidden="true"
              >
                <div className="absolute -top-48 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/6 blur-[150px]" />
              </div>

              {/* App Shell */}
              <div className="relative z-10 flex min-h-screen flex-col">
                <Navbar locale={locale} />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </SmoothScrollProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
