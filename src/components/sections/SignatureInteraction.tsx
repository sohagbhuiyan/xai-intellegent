"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import Three.js component to avoid SSR issues
const ThreeScene = dynamic(() => import("@/src/components/animations/ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-150 flex items-center justify-center">
      <div className="text-text-secondary">Loading 3D Scene...</div>
    </div>
  ),
});

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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            {
              title: "Real-time Processing",
              description: "Process data streams with minimal latency",
              icon: "⚡",
              color: "#f59e0b",
            },
            {
              title: "Advanced Analytics",
              description: "Leverage ML for predictive insights",
              icon: "📊",
              color: "#06b6d4",
            },
            {
              title: "Automated Workflows",
              description: "Set up actions based on insights",
              icon: "🔄",
              color: "#8b5cf6",
            },
            {
              title: "Secure & Compliant",
              description: "Enterprise-grade security",
              icon: "🔒",
              color: "#10b981",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="text-center p-6 rounded-xl bg-background-card border border-white/10 hover:border-brand-primary/30 transition-all cursor-pointer overflow-hidden">
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.color}10, transparent)`,
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-4 inline-block"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {feature.description}
                  </p>
                </div>
                
                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}