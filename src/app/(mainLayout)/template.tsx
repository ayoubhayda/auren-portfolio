"use client";
import React from "react";
import { motion } from "framer-motion";
import useScrollProgress from "@/hooks/useScrollProgress";

// variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.4,
          delay: 0.2,
        }}
      >
        {children}
      </motion.main>

      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 top-0 bottom-0 right-0 w-1 bg-primary transition-all duration-700"
      ></span>
    </>
  );
};

export default Template;
