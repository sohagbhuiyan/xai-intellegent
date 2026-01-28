// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useState, useEffect } from "react";
// import Button from "@/src/components/ui/Button";
// import ParticleField from "@/src/components/animations/ParticleField";
// import { fadeIn, slideUp, staggerContainer } from "@/src/lib/animation-variants";

// export default function HeroSection() {
//   const [text, setText] = useState("");
//   const [showCursor, setShowCursor] = useState(true);
//   const fullText = "Transform Raw Data Into Intelligence";
//   const { scrollY } = useScroll();
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);
//   const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

//   useEffect(() => {
//     let currentIndex = 0;
//     const interval = setInterval(() => {
//       if (currentIndex <= fullText.length) {
//         setText(fullText.slice(0, currentIndex));
//         currentIndex++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 50);

//     const cursorInterval = setInterval(() => {
//       setShowCursor(prev => !prev);
//     }, 500);

//     return () => {
//       clearInterval(interval);
//       clearInterval(cursorInterval);
//     };
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
//     >
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 z-0">
//         <motion.div
//           className="absolute inset-0 opacity-30"
//           animate={{
//             background: [
//               "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
//               "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
//               "radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
//               "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
//             ],
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//         />
//       </div>

//       {/* Particle Background */}
//       <div className="absolute inset-0 z-0">
//         <ParticleField />
//       </div>

//       {/* Floating orbs */}
//       <motion.div
//         className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"
//         animate={{
//           x: [0, 100, 0],
//           y: [0, -100, 0],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl"
//         animate={{
//           x: [0, -100, 0],
//           y: [0, 100, 0],
//           scale: [1, 1.3, 1],
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Content */}
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         animate="visible"
//         className="container-custom relative z-10 text-center"
//       >
//         {/* Badge */}
//         <motion.div 
//           variants={fadeIn} 
//           className="inline-block mb-8"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div 
//             className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/30 text-brand-primary text-sm font-medium cursor-pointer backdrop-blur-sm shadow-lg"
//             animate={{
//               boxShadow: [
//                 "0 0 20px rgba(99, 102, 241, 0.3)",
//                 "0 0 40px rgba(139, 92, 246, 0.4)",
//                 "0 0 20px rgba(99, 102, 241, 0.3)",
//               ],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
//             </span>
//             <span className="bg-linear-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
//               ✨ AI-Powered Intelligence Workspace
//             </span>
//           </motion.div>
//         </motion.div>

//         {/* Main Headline */}
//         <motion.div style={{ opacity, scale }}>
//           <motion.h1
//             variants={slideUp}
//             className="text-5xl md:text-7xl lg:text-[96px] font-bold mb-8 leading-tight relative"
//           >
//             <motion.span
//               className="inline-block"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Transform{" "}
//             </motion.span>
//             <br className="md:hidden" />
//             <motion.span
//               className="relative inline-block"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               <span className="text-gradient relative z-10">Raw Data</span>
//               <motion.span
//                 className="absolute -inset-2 bg-linear-to-r from-brand-primary/20 to-brand-secondary/20 blur-xl -z-10"
//                 animate={{
//                   opacity: [0.5, 0.8, 0.5],
//                 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//             </motion.span>
//             <br />
//             <motion.span
//               className="inline-block"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//             >
//               Into{" "}
//               <span className="text-gradient">Intelligence</span>
//             </motion.span>
//             {showCursor && text.length < fullText.length && (
//               <motion.span
//                 className="inline-block w-1 h-20 md:h-28 bg-brand-primary ml-2"
//                 animate={{ opacity: [1, 0] }}
//                 transition={{ duration: 0.5, repeat: Infinity }}
//               />
//             )}
//           </motion.h1>
//         </motion.div>

//         {/* Subheadline */}
//         <motion.p
//           variants={slideUp}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
//         >
//           <motion.span
//             animate={{ opacity: [0.7, 1, 0.7] }}
//             transition={{ duration: 3, repeat: Infinity }}
//           >
//             Your AI-powered workspace for turning information into actionable
//             insights through advanced automation and machine learning
//           </motion.span>
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           variants={slideUp}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//         >
//           <motion.div
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Button variant="primary" size="lg" className="relative overflow-hidden group">
//               <motion.span
//                 className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: "100%" }}
//                 transition={{ duration: 0.5 }}
//               />
//               <span className="relative z-10 flex items-center gap-2">
//                 Get Started
//                 <motion.svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   animate={{ x: [0, 4, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 7l5 5m0 0l-5 5m5-5H6"
//                   />
//                 </motion.svg>
//               </span>
//             </Button>
//           </motion.div>
          
//           <motion.div
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Button variant="secondary" size="lg" className="relative group">
//               <span className="relative z-10 flex items-center gap-2">
//                 <motion.svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </motion.svg>
//                 View Demo
//               </span>
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2 }}
//           className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16"
//         >
//           {[
//             { value: "10K+", label: "Active Users" },
//             { value: "99.9%", label: "Uptime" },
//             { value: "50M+", label: "Data Points" },
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 1.4 + index * 0.1 }}
//               whileHover={{ scale: 1.1 }}
//               className="text-center"
//             >
//               <motion.div 
//                 className="text-3xl md:text-4xl font-bold text-gradient mb-1"
//                 animate={{ 
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 {stat.value}
//               </motion.div>
//               <div className="text-sm text-text-tertiary">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2 }}
//           className="absolute bottom-12 left-1/2 -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             className="flex flex-col items-center gap-3 text-text-tertiary cursor-pointer group"
//             whileHover={{ scale: 1.1 }}
//           >
//             <span className="text-sm font-medium group-hover:text-brand-primary transition-colors">Scroll to explore</span>
//             <motion.div
//               className="w-6 h-10 rounded-full border-2 border-brand-primary/30 flex items-start justify-center p-2"
//               whileHover={{ borderColor: "rgba(99, 102, 241, 0.6)" }}
//             >
//               <motion.div
//                 className="w-1.5 h-1.5 bg-brand-primary rounded-full"
//                 animate={{ y: [0, 12, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//               />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

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
          className="text-6xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] tracking-tight"
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
            className="group relative px-8 py-4 bg-white text-[#0a0a0f] rounded-lg font-medium overflow-hidden transition-all duration-300"
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
            className="px-8 py-4 border cursor-pointer border-white/20 text-white rounded-lg font-medium backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
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
              <div className="text-3xl md:text-4xl font-light text-white mb-1">
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
          <span>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}