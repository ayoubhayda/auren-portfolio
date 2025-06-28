// Skills section
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Star, Code2, Layers } from "lucide-react";

const Skills = () => {
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

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code2,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "Next.js", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Shadcn/ui", level: "Expert" },
        { name: "Material-UI", level: "Advanced" },
        { name: "Framer Motion", level: "Advanced" }
      ]
    },
    {
      category: "Backend Development",
      icon: Layers,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Express.js", level: "Expert" },
        { name: "PHP", level: "Expert" },
        { name: "Laravel", level: "Expert" },
        { name: "Python", level: "Intermediate" },
        { name: "RESTful APIs", level: "Expert" },
        { name: "NextAuth.js", level: "Advanced" },
        { name: "Inngest", level: "Intermediate" }
      ]
    },
    {
      category: "Database & Tools",
      icon: Star,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "MySQL", level: "Expert" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Prisma", level: "Advanced" },
        { name: "Neon", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "Git", level: "Expert" },
        { name: "Strapi", level: "Advanced" },
        { name: "Arcjet", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Advanced":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const specialties = [
    "Payment Integration",
    "Authentication Systems",
    "Performance Optimization",
    "Responsive Design",
    "API Development",
    "Database Design"
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary)/0.04)_1px,_transparent_0)] bg-[size:60px_60px]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>

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
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              Technologies & Expertise
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            My{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              Skills
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className={`relative p-6 rounded-2xl border border-border bg-card`}
              variants={itemVariants}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-background/20 border border-border/80 dark:border-white/5 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/20 backdrop-blur-sm border border-border/80 dark:border-white/5"
                    variants={skillVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Specialties */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <motion.h3
            className="text-2xl font-bold mb-6"
            variants={itemVariants}
          >
            Specializations
          </motion.h3>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm hover:bg-primary/20 transition-colors duration-200"
                variants={skillVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {specialty}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50"
          variants={containerVariants}
        >
          {[
            { number: "25+", label: "Technologies Mastered" },
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                className="text-2xl md:text-3xl font-bold text-primary mb-1"
                variants={skillVariants}
              >
                {stat.number}
              </motion.div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;