"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  once?: boolean;
  duration?: number;
  stagger?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number | "some" | "all";
  };
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  duration = 0.8,
  stagger = 0,
  viewport,
}: ScrollRevealProps) {
  const ref = useRef(null);
  
  // Build viewport options conditionally to avoid type errors
  const viewportOptions: any = {
    once,
    amount: viewport?.amount || 0.3,
  };
  
  // Only add margin if it's provided
  if (viewport?.margin) {
    viewportOptions.margin = viewport.margin;
  }
  
  const isInView = useInView(ref, viewportOptions);

  const variants = {
    up: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: -60 },
      animate: { opacity: 1, y: 0 },
    },
    left: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    none: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  };

  const variant = variants[direction];

  return (
    <motion.div
      ref={ref}
      initial={variant.initial}
      animate={isInView ? variant.animate : variant.initial}
      transition={{
        duration,
        delay: delay + stagger,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for premium feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax Scroll Component for depth effects
interface ParallaxScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxScroll({ 
  children, 
  speed = 0.5, 
  className = "" 
}: ParallaxScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container for sequential reveals
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: StaggerItemProps) {
  const variants = {
    up: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      variants={variants[direction]}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}