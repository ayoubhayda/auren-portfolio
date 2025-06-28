"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, Zap, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScreenshotsGalleryProps {
  screenshots: string[];
  projectTitle: string;
}

const ScreenshotsGallery = ({
  screenshots,
  projectTitle,
}: ScreenshotsGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
          <Eye className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold">Project Gallery</h2>
      </div>

      {/* Gallery Grid */}
      <div className="space-y-8">
        {/* Hero Screenshot */}
        <div className="relative group">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted shadow ring-1 ring-border">
            <Image
              src={screenshots[selectedImageIndex]}
              alt={`${projectTitle} screenshot ${selectedImageIndex + 1}`}
              fill
              className="object-cover group-hover:scale-[1.02] transition-all duration-700 ease-out"
              priority
            />

            {/* Navigation Arrows */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={handlePreviousImage}
                  className="absolute z-50 left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-md rounded-full shadow-lg border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute z-50 right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-md rounded-full shadow-lg border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {screenshots.length > 1 && (
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md rounded-full px-3 py-1.5 text-sm font-medium shadow-lg border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {selectedImageIndex + 1} / {screenshots.length}
              </div>
            )}

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-60" />

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <div className="bg-background/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-border/50">
                <h3 className="font-semibold mb-1">
                  {selectedImageIndex === 0
                    ? "Main Interface"
                    : `Feature View ${selectedImageIndex + 1}`}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedImageIndex === 0
                    ? "Primary user interface showcasing core functionality"
                    : "Detailed view of key features and functionality"}
                </p>
              </div>
            </div>

            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {screenshots.length > 1 && (
          <div className="space-y-6">
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={cn(
                    "group relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-muted/30 to-muted transition-all duration-300 border cursor-pointer",
                    selectedImageIndex === index
                      ? "border-primary"
                      : "border-border hover:border-primary hover:scale-102"
                  )}
                >
                  <Image
                    src={screenshot}
                    alt={`${projectTitle} thumbnail ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Selection Indicator */}
                  {selectedImageIndex === index && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Image Number */}
                  <div className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1}
                  </div>
                </button>
              ))}
            </div>

            {/* Gallery Navigation Dots */}
            <div className="flex justify-center gap-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    selectedImageIndex === index
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Gallery Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/50">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Eye className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <div className="font-medium text-sm">Interactive Demo</div>
              <div className="text-xs text-muted-foreground">
                Live preview available
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <div className="font-medium text-sm">Responsive Design</div>
              <div className="text-xs text-muted-foreground">
                All device sizes
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Award className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <div className="font-medium text-sm">Best Practices</div>
              <div className="text-xs text-muted-foreground">
                Modern standards
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsGallery;
