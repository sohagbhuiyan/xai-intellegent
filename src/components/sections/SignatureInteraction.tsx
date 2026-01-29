"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import ThreeScene from "../animations/ThreeScene";
import { 
  Eye, 
  ShieldCheck, 
  FileText, 
  BarChart3, 
  GitBranch, 
  Lightbulb, 
  Scale, 
  Users,
  Brain,
  Sparkles
} from "lucide-react";

const FEATURES_DATA = [
  {
    title: "SHAP Analysis",
    description: "SHapley Additive exPlanations for interpreting individual predictions through game-theoretic feature attribution and contribution values",
    icon: BarChart3,
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-blue-600/20",
    details: "Shapley values • Feature importance",
    badge: "Core XAI"
  },
  {
    title: "LIME Explanations",
    description: "Local Interpretable Model-agnostic Explanations generating human-understandable justifications for black-box model predictions",
    icon: Lightbulb,
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-orange-600/20",
    details: "Local fidelity • Sparse linear models",
    badge: "Interpretability"
  },
  {
    title: "Model Transparency",
    description: "End-to-end visibility into decision-making processes with detailed model cards, data lineage, and algorithmic audit trails",
    icon: Eye,
    color: "#8b5cf6",
    gradient: "from-purple-500/20 to-violet-600/20",
    details: "Model cards • Audit logs",
    badge: "Transparency"
  },
  {
    title: "Fairness Testing",
    description: "Algorithmic fairness validation across protected attributes using demographic parity, equalized odds, and calibration metrics",
    icon: Scale,
    color: "#10b981",
    gradient: "from-emerald-500/20 to-green-600/20",
    details: "Bias detection • Fairness metrics",
    badge: "Ethics"
  },
  {
    title: "Counterfactual Analysis",
    description: "What-if scenario generation through minimal perturbations to explain alternative outcomes and model decision boundaries",
    icon: GitBranch,
    color: "#ec4899",
    gradient: "from-pink-500/20 to-rose-600/20",
    details: "Minimal changes • Alternative paths",
    badge: "Analysis"
  },
  {
    title: "Feature Attribution",
    description: "Gradient-based and perturbation methods including Integrated Gradients and DeepLIFT for neural network explanation",
    icon: Brain,
    color: "#6366f1",
    gradient: "from-indigo-500/20 to-blue-600/20",
    details: "Integrated Gradients • DeepLIFT",
    badge: "Deep Learning"
  },
  {
    title: "Human-in-the-Loop",
    description: "Interactive explanation refinement through user feedback, expert validation, and continuous alignment with human reasoning",
    icon: Users,
    color: "#f97316",
    gradient: "from-orange-500/20 to-red-600/20",
    details: "Expert feedback • Active learning",
    badge: "Collaboration"
  },
  {
    title: "Compliance Reports",
    description: "Automated regulatory documentation for AI governance including EU AI Act, GDPR Article 22, and algorithmic accountability",
    icon: FileText,
    color: "#14b8a6",
    gradient: "from-teal-500/20 to-cyan-600/20",
    details: "EU AI Act • GDPR Article 22",
    badge: "Regulatory"
  },
];

export default function SignatureInteraction() {
  return (
    <section id="features" className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" strokeWidth={2} />
            <span className="text-xs sm:text-sm font-medium text-cyan-400">Advanced XAI Capabilities</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent">
            Explainability in Action
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-400 max-w-3xl mx-auto px-4">
            State-of-the-art explainable AI techniques that make complex models transparent, fair, and trustworthy
          </p>
        </motion.div>

        {/* 3D Interactive Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-purple-500/10">
            <Suspense fallback={
              <div className="h-64 sm:h-96 lg:h-[500px] flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full"
                />
              </div>
            }>
              <ThreeScene />
            </Suspense>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 text-center"
          >
            <div className="backdrop-blur-xl bg-slate-900/80 border border-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm text-slate-300 shadow-xl">
              <span className="inline-flex items-center gap-2">
                <motion.svg 
                  className="w-3 h-3 sm:w-4 sm:h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </motion.svg>
                <span className="hidden sm:inline">Drag to rotate • Scroll to zoom</span>
                <span className="sm:hidden">Drag • Scroll</span>
              </span>
            </div>
          </motion.div>

          {/* Floating metrics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block absolute top-8 left-8 backdrop-blur-xl bg-slate-900/80 border border-white/10 rounded-xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <ShieldCheck className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs text-slate-400">Transparency</div>
                <div className="text-lg font-bold text-white">97.8%</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="hidden lg:block absolute top-8 right-8 backdrop-blur-xl bg-slate-900/80 border border-white/10 rounded-xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Brain className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs text-slate-400">Explainability</div>
                <div className="text-lg font-bold text-white">94.2%</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid - Enhanced Professional Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {FEATURES_DATA.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative h-full"
            >
              <div className="relative h-full p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col shadow-lg hover:shadow-2xl">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient}`}
                  initial={false}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                
                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
                  style={{ backgroundColor: feature.color }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Badge */}
                  <div className="mb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                      className="inline-block px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold border"
                      style={{
                        backgroundColor: `${feature.color}15`,
                        borderColor: `${feature.color}30`,
                        color: feature.color
                      }}
                    >
                      {feature.badge}
                    </motion.div>
                  </div>

                  {/* Icon with pulse animation */}
                  <motion.div 
                    className="mb-4 inline-block w-fit"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{
                        filter: [
                          "drop-shadow(0 0 0px rgba(255,255,255,0))",
                          `drop-shadow(0 0 8px ${feature.color})`,
                          "drop-shadow(0 0 0px rgba(255,255,255,0))",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <feature.icon 
                        className="w-10 h-10 sm:w-12 sm:h-12"
                        style={{ color: feature.color }}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3 sm:mb-4 flex-grow">
                    {feature.description}
                  </p>
                  
                  {/* Technical details badge */}
                  <div className="mt-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono text-slate-400 group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-all"
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: feature.color }}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      {feature.details}
                    </motion.div>
                  </div>
                </div>
                
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${feature.color}15, transparent)`,
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Bottom shine effect */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Particle effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{ 
                        backgroundColor: feature.color,
                        top: `${20 + i * 30}%`,
                        left: `${10 + i * 20}%`
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                <Eye className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base font-semibold text-white">Ready to make AI transparent?</div>
                <div className="text-xs sm:text-sm text-slate-400">Explore our XAI platform capabilities</div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white text-sm sm:text-base font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all whitespace-nowrap cursor-pointer"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}