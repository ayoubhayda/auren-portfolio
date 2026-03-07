"use client";
import React, { useMemo, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Briefcase,
  Users,
  FolderKanban,
} from "lucide-react";
import LightHeroImage from "@/assets/Hero/light-hero-side-image.png";
import DarkHeroImage from "@/assets/Hero/dark-hero-side-image.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";

/* ─── Shared Stats Data ─── */
const stats = [
  {
    icon: <Briefcase className="h-4 w-4 text-primary" />,
    value: "3+",
    label: "Years of\nExperience",
    shortLabel: "Years",
  },
  {
    icon: <Users className="h-4 w-4 text-primary" />,
    value: "12+",
    label: "Happy\nClients",
    shortLabel: "Clients",
  },
  {
    icon: <FolderKanban className="h-4 w-4 text-primary" />,
    value: "20+",
    label: "Finished\nProjects",
    shortLabel: "Projects",
  },
];

/* ─── Horizontal Stats Bar (Tablet & Mobile) ─── */
const StatsBar = ({ compact = false }: { compact?: boolean }) => (
  <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-6 w-full">
    {stats.map((stat, index) => (
      <React.Fragment key={stat.shortLabel}>
        {index > 0 && <div className="w-px h-8 bg-border" />}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
            {stat.icon}
          </div>
          <div className="flex items-center gap-1">
            <span
              className={`font-bold text-primary leading-none ${compact ? "text-lg" : "text-xl"}`}
            >
              {stat.value}
            </span>
            <span className="text-[10px] font-medium sm:text-start text-muted-foreground leading-tight whitespace-pre-line">
              {compact ? stat.shortLabel : stat.label}
            </span>
          </div>
        </div>
      </React.Fragment>
    ))}
  </div>
);

const MainHero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroImage =
    mounted && resolvedTheme === "dark" ? DarkHeroImage : LightHeroImage;

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
    [],
  );

  const { scrollToSection } = useSectionNavigation(sectionIds);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const leftSlideVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const floatCardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <div className="h-[calc(100vh-68px)] md:h-[calc(100vh-76px)] flex items-center px-4 ">
      {/* ═══════════════════════════════════════════════════════════
          MOBILE LAYOUT (< 768px) — Ultra-minimal, centered
       ═══════════════════════════════════════════════════════════ */}
      <motion.div
        className="flex md:hidden flex-col items-center justify-center text-center w-full h-full py-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Image */}
        <motion.div
          className="relative w-[140px] h-[140px] shrink-0 mb-5"
          variants={imageVariants}
        >
          <Image
            src={heroImage}
            alt="Ayoub Hayda"
            fill
            className="object-contain"
            priority
            sizes="140px"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-[1.75rem] font-bold leading-tight mb-3"
          variants={fadeUpVariants}
        >
          <span className="text-primary">Ayoub Hayda</span>
        </motion.h1>

        {/* Role — minimal pill badge */}
        <motion.div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-4"
          variants={fadeUpVariants}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
          </span>
          <span className="text-[11px] font-semibold text-primary/80 tracking-[0.12em] uppercase">
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-muted-foreground text-[13px] leading-relaxed max-w-[260px] mb-6"
          variants={fadeUpVariants}
        >
          Building modern, scalable web applications with clean code.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeUpVariants} className="mb-8">
          <Button
            size="lg"
            className="text-white px-8 shadow-none cursor-pointer rounded-full"
            onClick={() => handleNavClick("contact")}
          >
            Contact me
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Stats — Elegant unified pill */}
        <motion.div
          variants={fadeUpVariants}
          className="flex items-center justify-center w-full max-w-[320px] rounded-full bg-card/60 dark:bg-card/50 backdrop-blur-md border border-border/40 py-3 px-2"
        >
          {stats.map((stat, index) => (
            <React.Fragment key={stat.shortLabel}>
              {index > 0 && <div className="w-px h-8 bg-border/60 mx-1" />}
              <div className="flex-1 flex flex-col items-center gap-0.5">
                <span className="text-lg font-bold text-primary leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] font-medium text-muted-foreground/80 tracking-wider uppercase">
                  {stat.shortLabel}
                </span>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════
          TABLET LAYOUT (768px – 1023px) — Centered, compact
       ═══════════════════════════════════════════════════════════ */}
      <motion.div
        className="hidden md:flex lg:hidden flex-col items-center justify-center text-center w-full h-full gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Image */}
        <motion.div
          className="relative w-[200px] h-[200px] shrink-0"
          variants={imageVariants}
        >
          <Image
            src={heroImage}
            alt="Ayoub Hayda"
            fill
            className="object-contain"
            priority
            sizes="200px"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
          variants={fadeUpVariants}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-primary font-semibold text-xs tracking-[0.15em] uppercase">
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={fadeUpVariants}>
          <h1 className="text-4xl font-bold leading-tight">
            Hello, my name is <span className="text-primary">Ayoub Hayda</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-muted-foreground text-base leading-relaxed max-w-md"
          variants={fadeUpVariants}
        >
          I design and build modern, scalable web applications with clean
          architecture and pixel-perfect interfaces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center gap-4"
          variants={fadeUpVariants}
        >
          <Button
            size="lg"
            className="text-white px-6 shadow-none cursor-pointer rounded-full"
            onClick={() => handleNavClick("contact")}
          >
            Contact me
            <Mail className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-6 shadow-none cursor-pointer rounded-full"
            asChild
          >
            <a
              href="https://u32tyflba0.ufs.sh/f/kc5DWd3AVQkLba2eufGMutRgEr6TP3KoQOCfd2ZlB79WGiwq"
              rel="noreferrer"
              target="_blank"
              download
            >
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div variants={fadeUpVariants} className="w-full max-w-md mt-1">
          <StatsBar />
        </motion.div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP LAYOUT (≥ 1024px) — Original two-column design
       ═══════════════════════════════════════════════════════════ */}
      <motion.div
        className="hidden lg:flex flex-row items-center justify-between w-full max-w-7xl mx-auto gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Left Column: Text Content ── */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left"
          variants={containerVariants}
        >
          {/* Subtitle */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5"
            variants={leftSlideVariants}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary font-semibold text-xs tracking-[0.15em] uppercase">
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={leftSlideVariants}>
            <h1 className="text-[3.4rem] font-bold leading-tight mb-5">
              Hello, my name is{" "}
              <span className="text-primary block">Ayoub Hayda</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg"
            variants={leftSlideVariants}
          >
            I design and build modern, scalable web applications with clean
            architecture and pixel-perfect interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={leftSlideVariants}
          >
            <Button
              size="lg"
              className="text-white px-6 shadow-none cursor-pointer rounded-full"
              onClick={() => handleNavClick("contact")}
            >
              Contact me
              <Mail className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-6 shadow-none cursor-pointer rounded-full"
              asChild
            >
              <a
                href="https://u32tyflba0.ufs.sh/f/kc5DWd3AVQkLba2eufGMutRgEr6TP3KoQOCfd2ZlB79WGiwq"
                rel="noreferrer"
                target="_blank"
                download
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            variants={leftSlideVariants}
          >
            <motion.a
              href="https://github.com/ayoubhayda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ayoubhayda/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Right Column: Hero Image + Floating Stats ── */}
        <motion.div
          className="flex-1 flex items-center justify-center relative w-full max-w-[340px] xl:max-w-[380px]"
          variants={imageVariants}
        >
          {/* Hero Image */}
          <div className="relative w-full aspect-square">
            <Image
              src={heroImage}
              alt="Ayoub Hayda"
              fill
              className="object-contain"
              priority
              sizes="380px"
            />

            {/* Floating Stat Cards */}
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`absolute bg-card/80 dark:bg-card/90 backdrop-blur-md border border-border rounded-lg px-2.5 py-2 shadow-md flex items-center gap-2 ${
                  index === 0
                    ? "top-[6%] -left-[8%]"
                    : index === 1
                      ? "top-[42%] -right-[10%] 2xl:-right-[15%]"
                      : "bottom-[8%] -left-[10%]"
                }`}
                variants={floatCardVariants}
                animate={{
                  y: [0, index === 1 ? -8 : 8, 0],
                }}
                transition={{
                  y: {
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  },
                }}
              >
                {/* Icon circle */}
                <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                {/* Value + Label */}
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-primary leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-medium text-muted-foreground leading-tight whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainHero;
