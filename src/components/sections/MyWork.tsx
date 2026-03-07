// mywork section
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { projects } from "@/constants";
import ProjectCard from "../general/ProjectCard";

const MyWork = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-14 md:py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary)/0.04)_1px,_transparent_0)] bg-[size:40px_40px]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent"></div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6"
            variants={itemVariants}
          >
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-primary font-medium text-xs md:text-sm">
              Featured Projects
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
            variants={itemVariants}
          >
            My Recent{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              Work
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed hidden md:block"
            variants={itemVariants}
          >
            Explore my latest projects showcasing modern web technologies,
            innovative solutions, and pixel-perfect designs.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MyWork;
