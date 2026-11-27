import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Code2,
} from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { projects } from "@/data/projects";
import {
  ProjectVideoPlayer,
  SystemArchitectureSection,
  ProjectVisualWalkthrough,
} from "@/components/projects/project-showcase";

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id, locale } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  const title = locale === "id" ? project.titleId : project.title;
  return {
    title: `${title} — M. Ilham Wahyudi`,
    description: locale === "id" ? project.descriptionId : project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const currentIndex = projects.findIndex((p) => p.id === id);
  if (currentIndex === -1) notFound();

  const project = projects[currentIndex];
  const isId = locale === "id";

  const title = isId ? project.titleId : project.title;
  const shortSummary = isId ? project.descriptionId : project.description;
  const description = isId ? project.longDescriptionId : project.longDescription;
  const category = isId ? project.categoryId : project.category;

  const otherFeatured = projects.filter(
    (p) => p.featured && p.id !== project.id
  );

  return (
    <main className="min-h-screen overflow-x-hidden px-4 pb-24 pt-28 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-12 sm:space-y-14">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {isId ? "Kembali ke Portfolio" : "Back to Portfolio"}
          </Link>
        </div>

        {/* Zone 1: Hero Banner & Metrics */}
        <section
          className={`rounded-2xl bg-gradient-to-br ${project.accentColor} border border-border/60 bg-card/70 p-7 sm:p-10 backdrop-blur-sm`}
        >
          <div className="max-w-3xl">
            <span className="inline-flex rounded-md border border-border/60 bg-card/80 px-3 py-1 text-xs font-mono font-medium backdrop-blur-sm">
              {category}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {shortSummary}
            </p>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-card/85 px-4 py-2.5 text-sm font-semibold backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card active:scale-95"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Metrics Row */}
          {project.metrics.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border/60 bg-background/60 p-4 text-center backdrop-blur-sm"
                >
                  <p className="text-xl font-extrabold text-primary sm:text-2xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Zone 1B: Video Demo Theater OR Primary Hero Visual */}
        {project.videoDemo ? (
          <section className="space-y-4">
            <ProjectVideoPlayer
              src={project.videoDemo}
              poster={project.videoPoster}
              caption={
                isId ? project.videoCaptionId : project.videoCaption
              }
              locale={locale}
            />
          </section>
        ) : (
          project.previewImage && (
            <section className="rounded-2xl border border-border/60 bg-card/60 p-3 shadow-lg backdrop-blur-sm">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted/20">
                <Image
                  src={project.previewImage}
                  alt={title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </section>
          )
        )}

        {/* Zone 2: Structured System Overview & Framework Stack Breakdown */}
        {project.systemOverview && project.frameworkStack ? (
          <SystemArchitectureSection
            overview={project.systemOverview}
            frameworkStack={project.frameworkStack}
            locale={locale}
          />
        ) : (
          <section className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-8 backdrop-blur-sm md:col-span-2">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
                <Code2 className="h-5 w-5 text-primary" />
                {isId ? "Detail Teknis" : "Technical Details"}
              </h2>
              <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/40 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-bold">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-muted px-3 py-1.5 text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Zone 3: Alternating Curated Visual Walkthrough + Lightbox */}
        {project.gallery && project.gallery.length > 0 && (
          <ProjectVisualWalkthrough modules={project.gallery} locale={locale} />
        )}

        {/* Zone 4: Full Tech Badges & Cross-Project Navigation */}
        <section className="space-y-8 border-t border-border/50 pt-10">
          <div>
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {isId ? "Ekosistem Teknologi Lengkap" : "Complete Technology Stack"}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-mono text-foreground/85"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {otherFeatured.length > 0 && (
            <div className="space-y-4 pt-4">
              <h2 className="text-lg font-bold tracking-tight">
                {isId ? "Eksplorasi Studi Kasus Lainnya" : "Explore Other Case Studies"}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {otherFeatured.map((other) => (
                  <Link
                    key={other.id}
                    href={`/projects/${other.id}`}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-card/60 p-5 transition-all hover:border-primary/50 hover:bg-card active:scale-[0.99]"
                  >
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-primary">
                        {isId ? other.categoryId : other.category}
                      </span>
                      <p className="mt-1 truncate text-base font-bold text-foreground group-hover:text-primary">
                        {isId ? other.titleId : other.title}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
