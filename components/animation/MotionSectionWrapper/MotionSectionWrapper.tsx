"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

interface MotionSectionWrapperProps {
  id?: string;
  children: React.ReactNode;
}

const MotionSectionWrapper = ({ id, children }: MotionSectionWrapperProps) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <span className="hash.span" id={id}></span>
      {children}
    </motion.section>
  );
};

export default MotionSectionWrapper;
