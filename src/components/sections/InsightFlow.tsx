"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Badge from "@/src/components/ui/Badge";

// Enhanced insight flow with more detailed stages
const insightFlowSteps = [
  {
    id: 1,
    number: "01",
    title: "Data Ingestion",
    subtitle: "Raw Data Collection",
    description: "Connect to multiple data sources and ingest data in various formats.",
    details: ["CSV, JSON, XML", "Databases", "APIs", "Real-time streams"],
    color: "#00d4ff",
    gradient: "from-cyan-500 to-blue-600",
    icon: "database",
    dataState: "Raw & Unstructured",
    badgeVariant: "info"
  },
  {
    id: 2,
    number: "02",
    title: "Data Cleaning",
    subtitle: "Normalization & Validation",
    description: "Remove duplicates, handle missing values, and standardize formats.",
    details: ["Remove duplicates", "Handle nulls", "Standardize", "Validate"],
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    icon: "filter",
    dataState: "Clean & Structured",
    badgeVariant: "warning"
  },
  {
    id: 3,
    number: "03",
    title: "AI Analysis",
    subtitle: "Pattern Recognition",
    description: "ML models detect patterns, anomalies, and predict trends.",
    details: ["Pattern detection", "Anomaly ID", "Trend prediction", "Correlation"],
    color: "#7c3aed",
    gradient: "from-purple-500 to-violet-600",
    icon: "brain",
    dataState: "Analyzed & Enriched",
    badgeVariant: "default"
  },
  {
    id: 4,
    number: "04",
    title: "Insight Generation",
    subtitle: "Actionable Intelligence",
    description: "Transform analysis into visualizations and recommendations.",
    details: ["Dashboards", "Reports", "Recommendations", "Alerts"],
    color: "#10b981",
    gradient: "from-emerald-500 to-green-600",
    icon: "sparkles",
    dataState: "Actionable Insights",
    badgeVariant: "success"
  },
  {
    id: 5,
    number: "05",
    title: "Delivery & Action",
    subtitle: "Intelligence Distribution",
    description: "Deploy insights through APIs, dashboards, and integrations.",
    details: ["REST APIs", "Dashboards", "Alerts", "Slack/Teams"],
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600",
    icon: "rocket",
    dataState: "Deployed & Active",
    badgeVariant: "error"
  }
];

// Icon components
const DatabaseIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const FilterIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

// Animated data particle component
const DataParticle = ({ delay = 0, color = "#00d4ff" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0],
      y: [0, -100]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatDelay: 2
    }}
    className="absolute w-2 h-2 rounded-full"
    style={{ backgroundColor: color, left: `${Math.random() * 100}%` }}
  />
);

// Step card component
const StepCard = ({ step, index, isActive }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group flex-1"
    >
      {/* Connection arrow - Desktop only */}
      {index < insightFlowSteps.length - 1 && (
        <>
          {/* Horizontal arrow */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-6 xl:-right-12 w-12 xl:w-24 h-0.5 z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </motion.div>
            {isInView && (
              <>
                <motion.div
                  className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: step.color, boxShadow: `0 0 8px ${step.color}` }}
                  animate={{ x: [0, 48, 96], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: step.color, boxShadow: `0 0 8px ${step.color}` }}
                  animate={{ x: [0, 48, 96], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                />
              </>
            )}
          </div>

          {/* Vertical arrow - Mobile */}
          <div className="lg:hidden absolute left-1/2 -translate-x-1/2 -bottom-6 w-0.5 h-12 z-20">
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" />
              </svg>
            </motion.div>
          </div>
        </>
      )}

      {/* Card */}
      <div className={`relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 overflow-hidden transition-all duration-500 h-full ${isHovered ? 'lg:scale-105 lg:border-white/20 lg:shadow-2xl' : ''}`}>
        
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${step.gradient}`}
          style={{ opacity: isHovered ? 0.05 : 0 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-3 sm:mb-4">
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative overflow-hidden lg:group-hover:scale-110 transition-transform duration-500">
              <motion.div
                className="absolute inset-0"
                style={{ backgroundColor: step.color }}
                animate={{ opacity: isHovered ? [0.1, 0.2, 0.1] : 0.05 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative w-6 sm:w-8" style={{ color: step.color }}>
                {step.icon === "database" && <DatabaseIcon />}
                {step.icon === "filter" && <FilterIcon />}
                {step.icon === "brain" && <BrainIcon />}
                {step.icon === "sparkles" && <SparklesIcon />}
                {step.icon === "rocket" && <RocketIcon />}
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="mb-3">
            <Badge variant={step.badgeVariant}>STAGE {step.number}</Badge>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            {step.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium mb-2" style={{ color: step.color }}>
            {step.subtitle}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-white/60 mb-3 sm:mb-4 leading-snug">
            {step.description}
          </p>

          {/* Details list */}
          <div className="space-y-1 mb-3 sm:mb-4">
            {step.details.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-center gap-2 text-xs text-white/50"
              >
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: step.color }} />
                <span>{detail}</span>
              </motion.div>
            ))}
          </div>

          {/* Data state */}
          <div className="pt-2 sm:pt-3 border-t border-white/5 flex justify-between items-center">
            <span className="text-xs text-white/40">Data:</span>
            <span className="text-xs font-semibold" style={{ color: step.color }}>
              {step.dataState}
            </span>
          </div>
        </div>

        {/* Bottom line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: step.color }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default function InsightFlow() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-12 sm:py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10"
          >
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              THE INTELLIGENCE PIPELINE
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            From Raw Data to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Actionable Intelligence
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-3xl mx-auto">
            Transform data into insights through our intelligent five-stage process
          </p>
        </motion.div>

        {/* Data flow indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-1 sm:gap-2 lg:gap-4 mb-8 sm:mb-12 lg:mb-16 overflow-x-auto px-2"
        >
          {insightFlowSteps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-shrink-0">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full"
                style={{ backgroundColor: step.color }}
              />
              {index < insightFlowSteps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="w-4 sm:w-6 lg:w-12 h-0.5 bg-gradient-to-r from-white/20 to-white/5 origin-left"
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Flow steps */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-4 xl:gap-6 items-stretch">
          {insightFlowSteps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-12 lg:mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 sm:px-8 py-2.5 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-xs sm:text-base font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
          >
            <span className="flex items-center gap-2">
              Explore Methodology
              <motion.svg
                className="w-3 h-3 sm:w-5 sm:h-5"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}