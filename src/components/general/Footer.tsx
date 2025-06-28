"use client";
import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUp,
  ArrowLeft,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import darkLogo from "@/assets/logo/dark-logo.png";
import lightLogo from "@/assets/logo/light-logo.png";
import { usePathname } from "next/navigation";

const Footer = () => {
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

  const pathName = usePathname();

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

  // Updated quick links with section navigation
  const quickLinks = [
    { name: "Home", sectionId: "hero" },
    { name: "Work", sectionId: "mywork" },
    { name: "Services", sectionId: "services" },
    { name: "Skills", sectionId: "skills" },
    { name: "Testimonials", sectionId: "testimonials" },
    { name: "Contact", sectionId: "contact" },
  ];

  const services = [
    "Full-Stack Development",
    "Responsive Web Design",
    "Database Solutions",
    "Cloud Integration",
    "Performance Optimization",
    "Security & Authentication",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ayoubhayda",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ayoubhayda",
      icon: Linkedin,
    },
  ];

  // Handle navigation click
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary)/0.03)_1px,_transparent_0)] bg-[size:40px_40px]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80"></div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          {/* Desktop First footer */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12  ">
            {/* Brand Section */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <button
                onClick={() => handleNavClick("hero")}
                className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <Image
                  src={lightLogo}
                  alt="light-logo"
                  className="dark:hidden"
                  width={48}
                  height={48}
                />
                <Image
                  src={darkLogo}
                  alt="dark-logo"
                  className="hidden dark:block"
                  width={48}
                  height={48}
                />
                <h2 className="text-2xl font-bold">
                  Aur<span className="text-primary">en</span>
                </h2>
              </button>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Creative Full-Stack Developer passionate about building scalable
                web experiences that blend innovation with reliability.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>ayoubhayda01@gmail.com</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Casablanca, Morocco</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links - Updated with navigation */}
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-foreground mb-6 text-lg">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <button
                      onClick={() => handleNavClick(link.sectionId)}
                      className={`text-sm transition-all duration-200 capitalize text-left cursor-pointer text-muted-foreground hover:text-primary`}
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-foreground mb-6 text-lg">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-foreground mb-6 text-lg">
                Stay Connected
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                Let&apos;s connect and discuss your next project.
              </p>

              {/* CTA Button - Updated with navigation */}
              <motion.div className="mb-6">
                <Button
                  className="w-full text-white shadow-none hover:scale-105 transition-transform duration-200 cursor-pointer"
                  onClick={() => handleNavClick("contact")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </motion.div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonVariants({
                      variant: "outline",
                      size: "icon",
                    })} shadow-none cursor-pointer`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile first footer */}
          <div className="flex flex-col items-center text-center space-y-6 md:hidden">
            {/* Brand */}
            <button
              onClick={() => handleNavClick("hero")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src={lightLogo}
                alt="light-logo"
                className="dark:hidden"
                width={32}
                height={32}
              />
              <Image
                src={darkLogo}
                alt="dark-logo"
                className="hidden dark:block"
                width={32}
                height={32}
              />
              <h2 className="text-xl font-bold">
                Aur<span className="text-primary">en</span>
              </h2>
            </button>

            {/* Social Links - Compact */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-border bg-muted/30 backdrop-blur-sm"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <motion.div
                className="flex items-center gap-2 text-sm text-muted-foreground"
                variants={itemVariants}
              >
                <span>
                  © {new Date().getFullYear()} Ayoub Hayda. All Rights Reserved.
                </span>
              </motion.div>

              {/* Back to Top - Updated with navigation */}
              <motion.button
                onClick={() => handleNavClick("hero")}
                className=" hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span>
                  Back to {pathName.startsWith("/project/") ? "home" : "top"}
                </span>
                <motion.div
                  className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: pathName.startsWith("/project/")? 45: -45 }}
                >
                  {pathName.startsWith("/project/") ? (
                    <ArrowLeft className="w-3 h-3 text-primary" />
                  ) : (
                    <ArrowUp className="w-3 h-3 text-primary" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary/50 to-transparent hidden md:block"></div>
    </footer>
  );
};

export default Footer;
