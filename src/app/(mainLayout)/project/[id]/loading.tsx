import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ═══ MINIMAL HERO SKELETON ═══ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-9 w-9 rounded-lg" />
        </div>

        {/* Status + Title + Meta */}
        <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
          <Skeleton className="h-7 w-28 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-8 sm:h-10 lg:h-12 w-3/4 max-w-xl" />
            <Skeleton className="h-8 sm:h-10 lg:h-12 w-1/2 max-w-sm" />
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-14" />
          </div>
        </div>

        {/* Thumbnail */}
        <Skeleton className="aspect-video rounded-xl sm:rounded-2xl" />
      </section>

      {/* ═══ MOBILE ACTION STRIP SKELETON ═══ */}
      <div className="lg:hidden max-w-6xl mx-auto px-4 sm:px-6 mt-5">
        <div className="flex gap-3">
          <Skeleton className="h-10 flex-1 rounded-lg" />
          <Skeleton className="h-10 flex-1 rounded-lg" />
        </div>
      </div>

      {/* ═══ MAIN CONTENT GRID SKELETON ═══ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ─── Main Content ─── */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            {/* Project Overview */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Skeleton className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl" />
                <Skeleton className="h-7 sm:h-8 w-44" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </section>

            {/* Key Features */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Skeleton className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl" />
                <Skeleton className="h-7 sm:h-8 w-36" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border p-5 sm:p-6 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <Skeleton className="w-8 h-8 rounded-lg" />
                      <Skeleton className="h-5 w-20 rounded-full" />
                    </div>
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))}
              </div>
            </section>

            {/* Technology Stack */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Skeleton className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl" />
                <Skeleton className="h-7 sm:h-8 w-44" />
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[...Array(8)].map((_, i) => (
                  <Skeleton
                    key={i}
                    className="h-8 sm:h-9 rounded-full"
                    style={{
                      width: `${[72, 88, 96, 80, 104, 76, 92, 84][i]}px`,
                    }}
                  />
                ))}
              </div>
            </section>

            {/* Screenshots Gallery */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Skeleton className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl" />
                <Skeleton className="h-7 sm:h-8 w-40" />
              </div>
              <Skeleton className="aspect-[16/10] rounded-2xl" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="aspect-[4/3] rounded-lg" />
                ))}
              </div>
            </section>
          </div>

          {/* ─── Sidebar Skeleton (Desktop) ─── */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Quick Actions */}
              <div className="rounded-2xl border border-border p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-4 h-4" />
                  <Skeleton className="h-5 w-28" />
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-11 w-full rounded-lg" />
                  <Skeleton className="h-11 w-full rounded-lg" />
                </div>
              </div>

              {/* Project Info */}
              <div className="rounded-2xl border border-border p-6 space-y-1">
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton className="w-4 h-4" />
                  <Skeleton className="h-5 w-24" />
                </div>
                <div className="divide-y divide-border/50">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3"
                    >
                      <div className="flex items-center gap-2">
                        <Skeleton className="w-4 h-4" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <Skeleton className="h-4 w-20" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-primary/8 to-primary/5 p-6">
                <div className="text-center space-y-4">
                  <Skeleton className="w-12 h-12 rounded-full mx-auto" />
                  <Skeleton className="h-6 w-48 mx-auto" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                  </div>
                  <Skeleton className="h-11 w-full rounded-lg" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ═══ MOBILE CTA SKELETON ═══ */}
      <div className="lg:hidden max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-primary/8 to-primary/5 p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Skeleton className="w-12 h-12 rounded-full shrink-0" />
            <div className="flex-1 space-y-2 w-full">
              <Skeleton className="h-5 w-48 mx-auto sm:mx-0" />
              <Skeleton className="h-4 w-40 mx-auto sm:mx-0" />
            </div>
            <Skeleton className="h-10 w-full sm:w-32 rounded-lg shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsSkeleton;
