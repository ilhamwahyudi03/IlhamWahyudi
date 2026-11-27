import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { BentoProjects } from "@/components/sections/bento-projects";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ContactSection } from "@/components/sections/contact-section";
import { ChatbotWidget } from "@/components/ai-assistant/chatbot-widget";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection locale={locale} />
      <AboutSection />
      <BentoProjects locale={locale} />
      <SkillsSection locale={locale} />
      <ExperienceTimeline locale={locale} />
      <ContactSection />
      <ChatbotWidget />
    </>
  );
}
