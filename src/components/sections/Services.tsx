// Services section - Elegant redesign with 6 services
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Code,
  Smartphone,
  Database,
  Cloud,
  Zap,
  Shield,
  Wrench,
} from "lucide-react";

const Services = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Building complete web applications with modern technologies like React, Next.js, and Node.js for seamless user experiences.",
      features: [
        "React & Next.js",
        "Node.js & Express",
        "TypeScript",
        "RESTful APIs",
      ],
      gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
      iconBg: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description:
        "Creating pixel-perfect, mobile-first designs that work flawlessly across all devices and screen sizes.",
      features: [
        "Mobile-First Design",
        "Cross-Browser Testing",
        "Performance Optimization",
        "Accessibility",
      ],
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      iconBg: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-500",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description:
        "Designing and implementing robust database architectures with MySQL, MongoDB, and Prisma ORM for optimal performance.",
      features: [
        "Database Architecture",
        "Query Optimization",
        "Data Migration",
        "Backup Solutions",
      ],
      gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
      iconBg: "bg-gradient-to-br from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-500",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Deploying and managing applications on cloud platforms with containerization using Docker and modern DevOps practices.",
      features: [
        "Docker Containerization",
        "CI/CD Pipelines",
        "Cloud Deployment",
        "Auto-scaling",
      ],
      gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
      iconBg: "bg-gradient-to-br from-violet-500/10 to-purple-500/10",
      iconColor: "text-violet-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing applications for lightning-fast speed, SEO excellence, and superior user experience.",
      features: [
        "Code Splitting",
        "Lazy Loading",
        "SEO Optimization",
        "Core Web Vitals",
      ],
      gradient: "from-rose-500/20 via-pink-500/20 to-red-500/20",
      iconBg: "bg-gradient-to-br from-rose-500/10 to-pink-500/10",
      iconColor: "text-rose-500",
    },
    {
      icon: Shield,
      title: "Security & Authentication",
      description:
        "Implementing bulletproof authentication systems and security best practices to protect your users and data.",
      features: [
        "NextAuth.js Integration",
        "JWT Security",
        "OAuth Providers",
        "Security Audits",
      ],
      gradient: "from-slate-500/20 via-gray-500/20 to-zinc-500/20",
      iconBg: "bg-gradient-to-br from-slate-500/10 to-gray-500/10",
      iconColor: "text-slate-600",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            variants={itemVariants}
          >
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              What I Offer
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            My{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              Services
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Comprehensive web development services tailored to bring your
            digital vision to life with cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Elegant Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
            >
              {/* Card Container */}
              <motion.div
                className="relative p-8 rounded-2xl bg-card backdrop-blur-xl border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl ${service.iconBg} backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-xs"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mr-3 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                        ></motion.div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 text-sm text-muted-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary"></div>
            <span>Ready to bring your vision to life?</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
