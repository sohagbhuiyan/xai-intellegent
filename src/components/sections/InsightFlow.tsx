// "use client";

// import { motion } from "framer-motion";
// import Card from "@/src/components/ui/Card";
// import { insightFlowSteps } from "@/src/lib/mock-data";
// import { staggerContainer, staggerItem } from "@/src/lib/animation-variants";

// export default function InsightFlow() {
//   return (
//     <section id="insights" className="section-padding relative">
//       <div className="container-custom">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-display-sm md:text-display font-bold mb-6">
//             How <span className="text-gradient">Xai</span> Transforms Your Data
//           </h2>
//           <p className="text-xl text-text-secondary max-w-2xl mx-auto">
//             A seamless journey from raw information to actionable intelligence
//           </p>
//         </motion.div>

//         {/* Flow Steps */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-3 gap-8 relative"
//         >
//           {insightFlowSteps.map((step, index) => (
//             <motion.div key={step.id} variants={staggerItem}>
//               <Card hover glow className="h-full relative group">
//                 {/* Step Number */}
//                 <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-linear-to-br from-brand-primary to-brand-secondary flex items-center justify-center font-bold text-lg shadow-lg">
//                   {step.number}
//                 </div>

//                 {/* Icon */}
//                 <div className="mb-6 mt-4">
//                   <div
//                     className="w-16 h-16 rounded-2xl flex items-center justify-center"
//                     style={{
//                       background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
//                     }}
//                   >
//                     <svg
//                       className="w-8 h-8"
//                       style={{ color: step.color }}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       {step.icon === "Database" && (
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
//                         />
//                       )}
//                       {step.icon === "Brain" && (
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//                         />
//                       )}
//                       {step.icon === "Sparkles" && (
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                         />
//                       )}
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-2xl font-semibold mb-3 group-hover:text-brand-primary transition-colors">
//                   {step.title}
//                 </h3>
//                 <p className="text-text-secondary leading-relaxed">
//                   {step.description}
//                 </p>

//                 {/* Connector Arrow (except last) */}
//                 {index < insightFlowSteps.length - 1 && (
//                   <div className="hidden md:block absolute top-1/2 -right-8 text-brand-primary/30">
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13 7l5 5m0 0l-5 5m5-5H6"
//                       />
//                     </svg>
//                   </div>
//                 )}
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-16"
//         >
//           <button className="group inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary-light transition-colors">
//             <span className="font-medium">Learn more about our process</span>
//             <svg
//               className="w-5 h-5 group-hover:translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 7l5 5m0 0l-5 5m5-5H6"
//               />
//             </svg>
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../animations/ScrollReveal";

// Insight flow data
const insightFlowSteps = [
  {
    id: 1,
    number: "01",
    title: "Ingest Data",
    description: "Connect to any data source. We automatically normalize, clean, and prepare your data streams for intelligent processing.",
    color: "#00d4ff",
    icon: "database"
  },
  {
    id: 2,
    number: "02",
    title: "Analyze with AI",
    description: "Advanced machine learning models detect patterns, anomalies, and relationships hidden in your data.",
    color: "#7c3aed",
    icon: "brain"
  },
  {
    id: 3,
    number: "03",
    title: "Generate Insights",
    description: "Transform analysis into clear, actionable insights with visualizations, reports, and recommendations.",
    color: "#10b981",
    icon: "sparkles"
  }
];

export default function InsightFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
//   <section id="insights" className="section-padding relative">
  return (
    <section id="insights" ref={containerRef} className=" section-padding relative py-32 overflow-hidden bg-[#0a0a0f]">
      {/* Subtle background gradients */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header - Ultra minimal */}
        <ScrollReveal direction="up" className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              From Data to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400">
                Intelligence
              </span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
              A seamless three-stage transformation process
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Flow Steps - Horizontal layout with connection lines */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-[1px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
              className="h-full bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-green-500/50 origin-left"
            />
          </div>

          <StaggerContainer staggerDelay={0.2} className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {insightFlowSteps.map((step, index) => (
              <StaggerItem key={step.id} direction="up">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative group cursor-pointer"
                >
                  {/* Step number indicator */}
                  <div className="relative mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center relative z-10"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                        border: `1px solid ${step.color}30`
                      }}
                    >
                      {/* Icon */}
                      <svg
                        className="w-8 h-8"
                        style={{ color: step.color }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {step.icon === "database" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                          />
                        )}
                        {step.icon === "brain" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        )}
                        {step.icon === "sparkles" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        )}
                      </svg>
                    </motion.div>

                    {/* Pulsing ring effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)`
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    {/* Step number badge */}
                    <div className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-medium border"
                      style={{
                        background: `${step.color}10`,
                        borderColor: `${step.color}30`,
                        color: step.color
                      }}
                    >
                      Stage {step.number}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-light mb-4 text-white group-hover:text-white/90 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-white/60 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    className="h-[1px] mt-8 origin-center"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${step.color}50, transparent)`
                    }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom CTA - Minimal */}
        <ScrollReveal direction="up" delay={0.8} className="text-center mt-24">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
          >
            <span className="font-light cursor-pointer">Explore our methodology</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
}