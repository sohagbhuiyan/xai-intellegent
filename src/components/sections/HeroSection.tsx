
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ParticleTransformation from "../animations/ParticleTransformation";


export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Three.js Particle Background - Chaos to Order */}
      <div className="absolute inset-0 z-0">
        <ParticleTransformation scrollProgress={scrollYProgress} />
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f]/60 pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 relative z-10 text-center max-w-5xl"
      >
        {/* Minimal badge - Data Science theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-flex items-center gap-2 mb-12 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          {/* <span className="text-xs font-medium text-white/70 tracking-wide">
            AI-POWERED INTELLIGENCE WORKSPACE
          </span> */}
        </motion.div>

        {/* Main Headline - Minimal, impactful */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] tracking-tight"
        >
          <span className="block text-white/40">Raw Data</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white">
            Into Intelligence
          </span>
        </motion.h1>

        {/* Subheadline - Ultra minimal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
        >
          We ingest, analyze, and transform complexity into clarity.
        </motion.p>

        {/* CTA - Minimal, intentional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-4 py-3 bg-white text-[#0a0a0f] rounded-lg font-medium overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center cursor-pointer gap-2">
              Start Transforming
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-3 border cursor-pointer border-white/20 text-white rounded-lg font-medium backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
          >
            View Demo
          </motion.button>
        </motion.div>

        {/* Stats - Minimal presentation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap justify-center gap-12 md:gap-16 mt-24 border-t border-white/10 pt-12"
        >
          {[
            { value: "10K+", label: "Active Users" },
            { value: "99.9%", label: "Uptime" },
            { value: "50M+", label: "Data Points" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-xl md:text-4xl font-light text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/40 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/30 text-xs uppercase tracking-widest"
        >
          <span>Scroll to explore</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}