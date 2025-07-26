"use client";
import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import lightAvatar from "@/assets/public/avatar-green-light.png";
import darkAvatar from "@/assets/public/avatar-green-dark.png";
import Image from "next/image";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";

const Hero = () => {
  // Memoize section IDs to prevent recreation on each render
  const sectionIds = useMemo(
    () => [
      "hero",
      "services-bar",
      "mywork",
      "services",
      "skills",
      "testimonials",
      "contact",
    ],
    []
  );

  const { scrollToSection } = useSectionNavigation(sectionIds);
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier easing
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier easing
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier easing
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier easing
      },
    },
  };

  // Handle navigation click
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <div className="min-h-[calc(100vh-76px)] flex items-center justify-center px-4 py-8">
      <motion.div
        className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* My Information */}
        <motion.div variants={itemVariants} className="mb-6">
          {/* Photo */}
          <motion.div
            className="size-24 md:size-28 rounded-full overflow-hidden mb-6 mx-auto"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={lightAvatar}
              alt="Ayoub Hayda"
              width={112}
              height={112}
              className="w-full h-full object-cover dark:hidden"
              priority
            />
            <Image
              src={darkAvatar}
              alt="Ayoub Hayda"
              width={112}
              height={112}
              className="w-full h-full object-cover hidden dark:block"
              priority
            />
          </motion.div>

          {/* My Name */}
          <motion.div
            className="text-muted-foreground flex items-center justify-center gap-2 text-base md:text-lg font-medium"
            variants={itemVariants}
          >
            <span className="text-lg md:text-xl">👋</span>
            <span>Hi, I&apos;m</span>
            <h1 className="text-foreground font-semibold">Ayoub Hayda</h1>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 max-w-5xl"
          variants={itemVariants}
        >
          Creative{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
            Full-Stack Developer
          </span>{" "}
          Building Scalable Web Experiences
        </motion.h2>

        {/* Short About */}
        <motion.p
          className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
          variants={itemVariants}
        >
          I craft forward-thinking digital solutions that blend innovation with
          reliability—transforming ideas into seamless, scalable web
          experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
          variants={itemVariants}
        >
          <motion.div variants={buttonVariants}>
            <Button size="lg" className=" text-white px-6 shadow-none cursor-pointer" asChild>
              <a href="https://u32tyflba0.ufs.sh/f/kc5DWd3AVQkLcsKZ7YkM1TDQt4evgSYxW7lfu32BjAdPULyO" rel="noreferrer" target={"_blank"} download>
                <Download className="mr-1 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <Button
              variant="outline"
              size="lg"
              className="px-6 shadow-none cursor-pointer"
              onClick={() => handleNavClick("contact")}
            >
              <Mail className="mr-1 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex items-center gap-4" variants={itemVariants}>
          <motion.a
            href="https://github.com/ayoubhayda"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={buttonVariants}
          >
            <Github className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">GitHub</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ayoubhayda/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={buttonVariants}
          >
            <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
