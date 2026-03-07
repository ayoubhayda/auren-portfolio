// project details page
import EmptyState from "@/components/general/EmptyState";
import JsonToHtml from "@/components/general/JsonToHtml";
import ProjectKeyFeatures from "@/components/general/ProjectKeyFeatures";
import ScreenshotsGallery from "@/components/general/ScreenshotsGallery";
import ShareButton from "@/components/general/ShareButton";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getProjectMutation } from "@/lib/Services";
import { cn } from "@/lib/utils";
import { technologies } from "@/utils/ListOfTechniques";
import {
  Github,
  ExternalLink,
  Code,
  ArrowLeft,
  Eye,
  MessageCircle,
  Calendar,
  Clock,
  Activity,
  Layers,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Params = Promise<{ id: string }>;

const page = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const projectData = await getProjectMutation(id);

  if (!projectData) {
    return (
      <div className="min-h-[calc(100vh-76px)] flex items-center justify-center">
        <EmptyState
          className="border-none"
          title="Project not found"
          description="The project you're looking for doesn't exist."
          buttonText="Back to Projects"
          href="/#mywork"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════ */}
      {/*  MINIMAL HERO SECTION                               */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Top bar: Back + Share */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <Link
            href="/#mywork"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <ShareButton
            title="Share this project"
            description="Copy the link below to share this amazing project with others"
          />
        </div>

        {/* Status + Title */}
        <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-600 dark:text-green-400 font-medium text-xs">
              Live Project
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-3xl">
            {projectData.longTitle}
          </h1>

          {/* Meta info row */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {new Date(projectData.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>{projectData.technologies.length} technologies</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Active</span>
            </div>
          </div>
        </div>

        {/* Thumbnail Image */}
        <div className="relative group rounded-xl sm:rounded-2xl overflow-hidden border border-border bg-muted">
          <div className="relative aspect-video">
            <Image
              src={projectData.thumbnailUrl}
              alt={projectData.longTitle}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          </div>

          {/* Floating action buttons on hover */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {projectData.demoLink && (
              <a
                href={projectData.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {projectData.githubLink && (
              <a
                href={projectData.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* MOBILE ACTION STRIP (visible only on small screens) */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="lg:hidden max-w-6xl mx-auto px-4 sm:px-6 mt-5">
        <div className="flex gap-3">
          {projectData.demoLink && (
            <a
              href={projectData.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "flex-1 text-white shadow-none text-sm",
              )}
            >
              <Eye className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
          {projectData.githubLink && (
            <a
              href={projectData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "flex-1 shadow-none text-sm",
              )}
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* MAIN CONTENT GRID                                   */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ─── Main Content Column ─── */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            {/* Project Overview */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Project Overview
                </h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none prose-base sm:prose-lg">
                <JsonToHtml json={JSON.parse(projectData.longDescription)} />
              </div>
            </section>

            {/* Key Features */}
            <ProjectKeyFeatures />

            {/* Technology Stack */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Technology Stack
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech) => {
                  const isExist = projectData.technologies.includes(tech.id);
                  if (isExist) {
                    return (
                      <Badge
                        key={tech.id}
                        variant="default"
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all cursor-default"
                      >
                        <span className="flex items-center gap-1.5 sm:gap-2">
                          {tech.icon}
                          {tech.label}
                        </span>
                      </Badge>
                    );
                  }
                })}
              </div>
            </section>

            {/* Screenshots Gallery */}
            {projectData.screenShots && projectData.screenShots.length > 0 && (
              <ScreenshotsGallery
                screenshots={projectData.screenShots}
                projectTitle={projectData.longTitle}
              />
            )}
          </div>

          {/* ─── Sidebar (Desktop only) ─── */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Quick Actions */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <h3 className="font-semibold text-base flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  {projectData.demoLink && (
                    <a
                      href={projectData.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "default", size: "lg" }),
                        "w-full text-white shadow-none group",
                      )}
                    >
                      <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      View Live Demo
                    </a>
                  )}
                  {projectData.githubLink && (
                    <a
                      href={projectData.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "w-full shadow-none group",
                      )}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-1">
                <h3 className="font-semibold text-base flex items-center gap-2 mb-4">
                  <Activity className="w-4 h-4 text-primary" />
                  Project Info
                </h3>

                <div className="divide-y divide-border/50">
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Created</span>
                    </div>
                    <span className="text-sm font-medium">
                      {new Date(projectData.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Updated</span>
                    </div>
                    <span className="text-sm font-medium">
                      {new Date(projectData.updatedAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">Status</span>
                    </div>
                    <Badge className="bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/25 text-xs">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5" />
                      Active
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Layers className="w-4 h-4" />
                      <span className="text-sm">Tech Stack</span>
                    </div>
                    <span className="text-sm font-medium">
                      {projectData.technologies.length} technologies
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-primary/8 to-primary/5 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">
                      Interested in Similar Work?
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Let&apos;s discuss how I can help bring your ideas to life
                      with modern web technologies.
                    </p>
                  </div>
                  <Link
                    href="/#contact"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full text-white shadow-none transition-all hover:scale-[1.02] group",
                    )}
                  >
                    <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* MOBILE CONTACT CTA (visible only on small screens) */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="lg:hidden max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-primary/8 to-primary/5 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 shrink-0">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 text-center sm:text-left space-y-1">
              <h3 className="font-bold text-base">
                Interested in Similar Work?
              </h3>
              <p className="text-sm text-muted-foreground">
                Let&apos;s bring your ideas to life.
              </p>
            </div>
            <Link
              href="/#contact"
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "text-white shadow-none shrink-0 w-full sm:w-auto",
              )}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
