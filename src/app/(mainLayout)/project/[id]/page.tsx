// project details page
import EmptyState from "@/components/general/EmptyState";
import JsonToHtml from "@/components/general/JsonToHtml";
import ProjectKeyFeatures from "@/components/general/ProjectKeyFeatures";
import ScreenshotsGallery from "@/components/general/ScreenshotsGallery";
import ShareButton from "@/components/general/ShareButton";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProjectMutation } from "@/lib/Services";
import { cn } from "@/lib/utils";
import { technologies } from "@/utils/ListOfTechniques";
import {
  Github,
  ExternalLink,
  Code,
  ArrowLeft,
  Star,
  Eye,
  MessageCircle,
  Calendar,
  Clock,
  Activity,
  Layers,
  Target,
  TrendingUp,
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
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation with breadcrumb styling */}
        <Link
          href="/#mywork"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Project Title & Status with better visual hierarchy */}
            <div className="space-y-6">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-600 font-medium text-sm">
                        Live Project
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">4.8</span>
                      <span className="text-muted-foreground/70">
                        (24 reviews)
                      </span>
                    </div>
                  </div>

                  <h1 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
                    {projectData.longTitle}
                  </h1>
                </div>

                {/* Share Button*/}
                <ShareButton
                  title="Share this project"
                  description="Copy the link below to share this amazing project with others"
                />
              </div>
            </div>

            {/* Project Image with overlay improvements */}
            <div className="relative group">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border">
                <Image
                  src={projectData.thumbnailUrl}
                  alt={projectData.longTitle}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Floating action buttons on image */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
            </div>

            {/* Project Description with better spacing */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Project Overview
                </h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none prose-lg">
                <JsonToHtml json={JSON.parse(projectData.longDescription)} />
              </div>
            </section>

            {/* Key Features with enhanced design */}
            <ProjectKeyFeatures />

            {/* Technologies Used with better organization */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Technology Stack
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => {
                    const isExist = projectData.technologies.includes(tech.id);
                    if (isExist) {
                      return (
                        <Badge
                          key={tech.id}
                          variant="default"
                          className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all cursor-pointer hover:scale-105"
                        >
                          <span className="flex items-center gap-2">
                            {tech.icon}
                            {tech.label}
                          </span>
                        </Badge>
                      );
                    }
                  })}
                </div>
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

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions with better styling */}
            <Card className="p-6 shadow-none">
              <h3 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                <ExternalLink className="w-5 h-5 text-primary" />
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
                      "w-full text-white shadow-none group"
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
                      "w-full shadow-none group"
                    )}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Source Code
                  </a>
                )}
              </div>
            </Card>

            {/* Enhanced Project Details */}
            <Card className="p-6 shadow-none border-border">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Project Details
              </h3>
              <div className="space-y-5">
                <div className="flex items-center justify-between py-2 border-b border-border/50">
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
                      }
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Last Updated</span>
                  </div>
                  <span className="text-sm font-medium">
                    {new Date(projectData.updatedAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Status</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-600 border-green-500/30">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5" />
                    Active
                  </Badge>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Layers className="w-4 h-4" />
                    <span className="text-sm">Tech Stack</span>
                  </div>
                  <span className="text-sm font-medium">
                    {projectData.technologies.length} technologies
                  </span>
                </div>
              </div>
            </Card>

            {/* Enhanced Rating Card */}
            <Card className="p-6 shadow-none">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Project Rating
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-6 h-6 transition-colors",
                          i < 4
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <div className="text-3xl font-bold">4.8</div>
                  <div className="text-sm text-muted-foreground">
                    Based on 24 reviews
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Code Quality", value: 95 },
                    { label: "Design", value: 92 },
                    { label: "Performance", value: 98 },
                    { label: "Documentation", value: 88 },
                  ].map((metric, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {metric.label}
                        </span>
                        <span className="font-medium">{metric.value}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${metric.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Enhanced Contact CTA */}
            <Card className="p-6 shadow-none bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative text-center space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl">
                  Interested in Similar Work?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Let&apos;s discuss how I can help bring your ideas to life
                  with modern web technologies and proven development practices.
                </p>
                <Link
                  href="/#contact"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "w-full text-white shadow-none transition-all hover:scale-105 group"
                  )}
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
