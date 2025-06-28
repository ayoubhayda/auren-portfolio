import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const ProjectDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="inline-flex items-center gap-2 text-muted-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
          <Skeleton className="h-4 w-32" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Project Title & Status */}
            <div className="space-y-6">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    {/* Live Project Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <Skeleton className="w-4 h-4 rounded-full" />
                      <Skeleton className="h-4 w-8" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-8 w-1/2" />
                  </div>
                </div>

                {/* Share Button */}
                <Skeleton className="h-10 w-10 rounded-lg" />
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <Skeleton className="aspect-video rounded-xl" />
            </div>

            {/* Project Overview */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-xl" />
                <Skeleton className="h-8 w-48" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </section>

            {/* Key Features */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-xl" />
                <Skeleton className="h-8 w-36" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="p-4 shadow-none">
                    <div className="flex items-start gap-3">
                      <Skeleton className="w-8 h-8 rounded-lg flex-shrink-0" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Technology Stack */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-xl" />
                <Skeleton className="h-8 w-44" />
              </div>
              <div className="flex flex-wrap gap-3">
                {[...Array(8)].map((_, i) => (
                  <Skeleton key={i} className="h-8 w-20 rounded-full" />
                ))}
              </div>
            </section>

            {/* Screenshots Gallery */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-xl" />
                <Skeleton className="h-8 w-40" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="aspect-video rounded-lg" />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 shadow-none">
              <div className="flex items-center gap-2 mb-4">
                <Skeleton className="w-5 h-5" />
                <Skeleton className="h-5 w-28" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
            </Card>

            {/* Project Details */}
            <Card className="p-6 shadow-none">
              <div className="flex items-center gap-2 mb-6">
                <Skeleton className="w-5 h-5" />
                <Skeleton className="h-5 w-32" />
              </div>
              <div className="space-y-5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-4 h-4" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Project Rating */}
            <Card className="p-6 shadow-none">
              <div className="flex items-center gap-2 mb-6">
                <Skeleton className="w-5 h-5" />
                <Skeleton className="h-5 w-32" />
              </div>
              <div className="space-y-6">
                {/* Rating Display */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Skeleton key={i} className="w-6 h-6 rounded-full" />
                    ))}
                  </div>
                  <Skeleton className="h-8 w-12 mx-auto" />
                  <Skeleton className="h-4 w-32 mx-auto" />
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-8" />
                      </div>
                      <Skeleton className="h-2 w-full rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Contact CTA */}
            <Card className="p-6 shadow-none bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20">
              <div className="text-center space-y-4">
                <Skeleton className="w-14 h-14 rounded-full mx-auto" />
                <Skeleton className="h-6 w-48 mx-auto" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4 mx-auto" />
                </div>
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsSkeleton;