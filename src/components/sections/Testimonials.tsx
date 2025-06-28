// Testimonials section
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Quote, Star, MessageCircle } from "lucide-react";
import Image from "next/image";
import { DavidAvatar, EmilyAvatar, JamesAvatar, LisaAvatar, MichaelAvatar, SarahAvatar } from "@/assets/avatars";

const Testimonials = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Solutions",
      avatar: SarahAvatar,
      rating: 5,
      testimonial: "Ayoub delivered an exceptional full-stack solution that exceeded our expectations. His attention to detail and technical expertise made our project a huge success. The application is fast, secure, and user-friendly.",
      gradient: "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
      borderGradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: MichaelAvatar,
      rating: 5,
      testimonial: "Working with Ayoub was a game-changer for our startup. He built our entire platform from scratch with modern technologies. His problem-solving skills and dedication are truly impressive.",
      gradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
      borderGradient: "from-emerald-500/20 to-cyan-500/20",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Digital Dynamics",
      avatar: EmilyAvatar, 
      rating: 5,
      testimonial: "Our website's performance improved dramatically after Ayoub's optimization work. The SEO improvements and speed enhancements resulted in a 40% increase in organic traffic. Highly recommended!",
      gradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
      borderGradient: "from-orange-500/20 to-yellow-500/20",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO",
      company: "CloudTech Systems",
      avatar: DavidAvatar, 
      rating: 5,
      testimonial: "Ayoub's expertise in cloud integration and DevOps practices helped us scale our infrastructure seamlessly. His Docker containerization and CI/CD pipeline setup was flawless.",
      gradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
      borderGradient: "from-violet-500/20 to-fuchsia-500/20",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "E-commerce Manager",
      company: "RetailPro",
      avatar: LisaAvatar, // Replace with actual avatar path
      rating: 5,
      testimonial: "The e-commerce platform Ayoub developed for us is robust and user-friendly. The admin dashboard and payment integration work perfectly. Our sales have increased by 60% since launch.",
      gradient: "from-rose-500/10 via-pink-500/10 to-red-500/10",
      borderGradient: "from-rose-500/20 to-red-500/20",
    },
    {
      id: 6,
      name: "James Mitchell",
      role: "Operations Director",
      company: "SecureFlow",
      avatar: JamesAvatar, // Replace with actual avatar path
      rating: 5,
      testimonial: "Security was our top priority, and Ayoub delivered a bulletproof authentication system. His implementation of JWT security and OAuth integration exceeded our compliance requirements.",
      gradient: "from-slate-500/10 via-gray-500/10 to-zinc-500/10",
      borderGradient: "from-slate-500/20 to-zinc-500/20",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 fill-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary)/0.03)_1px,_transparent_0)] bg-[size:50px_50px]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-transparent"></div>

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
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            What Clients{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              Say About Me
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say
            about working together and the results we&apos;ve achieved.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative"
              variants={cardVariants}
            >
              {/* Card Container */}
              <motion.div
                className={`relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden h-full cursor-pointer`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Quote className="w-12 h-12 text-primary" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating */}
                  <motion.div
                    className="flex items-center gap-1 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {renderStars(testimonial.rating)}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    className="text-foreground mb-6 leading-relaxed text-sm font-medium italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {`"${testimonial.testimonial}"`}
                  </motion.p>

                  {/* Client Info */}
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {/* Avatar */}
                    <motion.div
                      className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      {/* Placeholder for avatar - replace with actual Image component when you have real avatars */}
                      <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} />
                    </motion.div>

                    {/* Name and Role */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.role}
                      </p>
                      <p className="text-primary text-xs font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Hover Effect Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.borderGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />
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
            <span>Ready to be the next success story?</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;