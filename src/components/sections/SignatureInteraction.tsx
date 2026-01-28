"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import ThreeScene from "../animations/ThreeScene";
import { 
  Brain, 
  Zap, 
  Lock, 
  TrendingUp, 
  Network, 
  Globe, 
  Microscope, 
  Atom 
} from "lucide-react";

const FEATURES_DATA = [
  {
    title: "Neural Network Architecture",
    description: "Transformer-based models with attention mechanisms for complex pattern recognition and multi-dimensional data processing",
    icon: Brain,
    color: "#8b5cf6",
    gradient: "from-purple-500/20 to-violet-600/20",
    details: "Self-attention layers • 175B+ parameters",
  },
  {
    title: "Distributed Computing",
    description: "Horizontal scalability through microservices orchestration and event-driven architecture with Apache Kafka pipelines",
    icon: Zap,
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-orange-600/20",
    details: "99.99% uptime • Sub-50ms latency",
  },
  {
    title: "Cryptographic Security",
    description: "End-to-end AES-256 encryption with zero-knowledge proofs, HSM key management, and SOC 2 Type II compliance",
    icon: Lock,
    color: "#10b981",
    gradient: "from-emerald-500/20 to-green-600/20",
    details: "GDPR & HIPAA compliant • Blockchain audit",
  },
  {
    title: "Predictive Analytics",
    description: "Advanced time-series forecasting using LSTM networks, gradient boosting, and Bayesian inference for probabilistic modeling",
    icon: TrendingUp,
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-blue-600/20",
    details: "R² > 0.95 • Real-time inference",
  },
  {
    title: "Graph Neural Networks",
    description: "Relationship mapping through GNN architectures for knowledge graphs, entity extraction, and semantic understanding",
    icon: Network,
    color: "#ec4899",
    gradient: "from-pink-500/20 to-rose-600/20",
    details: "Billion-edge graphs • Neo4j integration",
  },
  {
    title: "Federated Learning",
    description: "Privacy-preserving model training across distributed datasets without centralizing sensitive data repositories",
    icon: Globe,
    color: "#6366f1",
    gradient: "from-indigo-500/20 to-blue-600/20",
    details: "Differential privacy • Secure aggregation",
  },
  {
    title: "AutoML Pipelines",
    description: "Automated hyperparameter optimization, neural architecture search, and feature engineering with ensemble methods",
    icon: Microscope,
    color: "#f97316",
    gradient: "from-orange-500/20 to-red-600/20",
    details: "Bayesian optimization • Meta-learning",
  },
  {
    title: "Quantum Computing",
    description: "Hybrid classical-quantum algorithms for optimization problems leveraging quantum annealing and variational circuits",
    icon: Atom,
    color: "#a855f7",
    gradient: "from-violet-500/20 to-purple-600/20",
    details: "QAOA • VQE algorithms • IBM Qiskit",
  },
];

export default function SignatureInteraction() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm md:text-display font-bold mb-6">
            Intelligence in Motion
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Experience the power of data visualization through interactive 3D exploration
          </p>
        </motion.div>

        {/* 3D Interactive Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-background-card p-8">
            <Suspense fallback={<div className="h-150" />}>
              <ThreeScene />
            </Suspense>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
          >
            <div className="glass-effect px-6 py-3 rounded-full text-sm text-text-secondary">
              <span className="inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                Drag to rotate • Scroll to zoom
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid - Enhanced Professional Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {FEATURES_DATA.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative h-full"
            >
              <div className="relative h-full p-6 rounded-xl bg-background-card border border-white/10 hover:border-brand-primary/50 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col">
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
                  className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                  style={{ backgroundColor: feature.color }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
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
                        className="w-12 h-12"
                        style={{ color: feature.color }}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 group-hover:text-brand-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-grow">
                    {feature.description}
                  </p>
                  
                  {/* Technical details badge */}
                  <div className="mt-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-text-secondary group-hover:border-brand-primary/30 transition-colors"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: feature.color }}
                      />
                      {feature.details}
                    </motion.div>
                  </div>
                </div>
                
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}