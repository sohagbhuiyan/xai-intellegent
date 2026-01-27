// "use client";

// import HeroSection from "../sections/HeroSection";
// import IntelligenceCore from "./IntelligenceCore";
// import ScrollReveal, { StaggerContainer, StaggerItem, ParallaxScroll } from "./ScrollReveal";

// export default function DemoPage() {
//   return (
//     <main className="bg-[#0a0a0f] text-white">
//       {/* Hero Section with Particle Transformation */}
//       <HeroSection />

//       {/* Insight Flow Section */}
//       <section className="relative py-32 overflow-hidden">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <ScrollReveal direction="up" delay={0.2}>
//             <h2 className="text-5xl md:text-6xl font-light text-center mb-6">
//               From <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Chaos</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Clarity</span>
//             </h2>
//           </ScrollReveal>

//           <ScrollReveal direction="up" delay={0.4}>
//             <p className="text-xl text-white/50 text-center mb-20 max-w-2xl mx-auto">
//               Our three-stage intelligence pipeline transforms unstructured data into actionable insights
//             </p>
//           </ScrollReveal>

//           {/* Process Flow */}
//           <StaggerContainer staggerDelay={0.15} className="space-y-24">
//             {/* Stage 1: Ingest */}
//             <StaggerItem>
//               <div className="grid md:grid-cols-2 gap-12 items-center">
//                 <div className="order-2 md:order-1">
//                   <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-4">
//                     Stage 01
//                   </div>
//                   <h3 className="text-4xl font-light mb-4">Ingest Data</h3>
//                   <p className="text-white/60 text-lg leading-relaxed mb-6">
//                     Connect to any data source. We automatically normalize, clean, and prepare your data streams for intelligent processing.
//                   </p>
//                   <ul className="space-y-3">
//                     {["Real-time streaming", "Batch processing", "API integrations", "Database connections"].map((feature, i) => (
//                       <li key={i} className="flex items-center gap-3 text-white/70">
//                         <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="order-1 md:order-2 relative h-64 md:h-80">
//                   <ParallaxScroll speed={0.3}>
//                     <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
//                       <div className="text-6xl">📊</div>
//                     </div>
//                   </ParallaxScroll>
//                 </div>
//               </div>
//             </StaggerItem>

//             {/* Stage 2: Analyze */}
//             <StaggerItem>
//               <div className="grid md:grid-cols-2 gap-12 items-center">
//                 <div className="relative h-64 md:h-80">
//                   <ParallaxScroll speed={0.4}>
//                     <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
//                       <div className="text-6xl">🧠</div>
//                     </div>
//                   </ParallaxScroll>
//                 </div>
//                 <div>
//                   <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-4">
//                     Stage 02
//                   </div>
//                   <h3 className="text-4xl font-light mb-4">Analyze with AI</h3>
//                   <p className="text-white/60 text-lg leading-relaxed mb-6">
//                     Advanced machine learning models detect patterns, anomalies, and relationships hidden in your data.
//                   </p>
//                   <ul className="space-y-3">
//                     {["Pattern recognition", "Anomaly detection", "Predictive modeling", "Natural language processing"].map((feature, i) => (
//                       <li key={i} className="flex items-center gap-3 text-white/70">
//                         <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </StaggerItem>

//             {/* Stage 3: Generate */}
//             <StaggerItem>
//               <div className="grid md:grid-cols-2 gap-12 items-center">
//                 <div className="order-2 md:order-1">
//                   <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm mb-4">
//                     Stage 03
//                   </div>
//                   <h3 className="text-4xl font-light mb-4">Generate Insights</h3>
//                   <p className="text-white/60 text-lg leading-relaxed mb-6">
//                     Transform analysis into clear, actionable insights with visualizations, reports, and recommendations.
//                   </p>
//                   <ul className="space-y-3">
//                     {["Interactive dashboards", "Automated reports", "Smart recommendations", "Export anywhere"].map((feature, i) => (
//                       <li key={i} className="flex items-center gap-3 text-white/70">
//                         <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="order-1 md:order-2 relative h-64 md:h-80">
//                   <ParallaxScroll speed={0.3}>
//                     <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
//                       <div className="text-6xl">✨</div>
//                     </div>
//                   </ParallaxScroll>
//                 </div>
//               </div>
//             </StaggerItem>
//           </StaggerContainer>
//         </div>
//       </section>

//       {/* Intelligence Core Showcase - THE WOW MOMENT */}
//       <section className="relative py-32 overflow-hidden">
//         <div className="container mx-auto px-6">
//           <ScrollReveal direction="up" className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-light mb-6">
//               Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Core</span>
//             </h2>
//             <p className="text-xl text-white/50 max-w-2xl mx-auto">
//               Multi-layered processing system visualized in real-time
//             </p>
//           </ScrollReveal>

//           <ScrollReveal direction="scale" delay={0.3}>
//             <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
//               <IntelligenceCore />
//             </div>
//           </ScrollReveal>
//         </div>
//       </section>

//       {/* Dashboard Preview Section */}
//       <section className="relative py-32 overflow-hidden border-t border-white/10">
//         <div className="container mx-auto px-6">
//           <ScrollReveal direction="up" className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-light mb-6">
//               Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Professionals</span>
//             </h2>
//             <p className="text-xl text-white/50 max-w-2xl mx-auto">
//               A clean, powerful interface designed for data-driven decision making
//             </p>
//           </ScrollReveal>

//           <ScrollReveal direction="up" delay={0.3}>
//             <div className="max-w-5xl mx-auto">
//               <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-1">
//                 <div className="bg-[#0a0a0f]/80 rounded-xl p-8">
//                   <div className="grid grid-cols-3 gap-4 mb-6">
//                     {[
//                       { label: "Total Events", value: "1.2M", change: "+12%" },
//                       { label: "Active Models", value: "24", change: "+3" },
//                       { label: "Accuracy", value: "98.4%", change: "+0.8%" },
//                     ].map((stat, i) => (
//                       <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
//                         <div className="text-sm text-white/50 mb-1">{stat.label}</div>
//                         <div className="text-2xl font-light mb-1">{stat.value}</div>
//                         <div className="text-xs text-green-400">{stat.change}</div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="bg-white/5 rounded-lg p-6 border border-white/10 h-64 flex items-center justify-center">
//                     <div className="text-white/30 text-center">
//                       <div className="text-4xl mb-2">📈</div>
//                       <div>Interactive Chart Placeholder</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </ScrollReveal>
//         </div>
//       </section>

//       {/* Footer CTA */}
//       <section className="relative py-32 overflow-hidden border-t border-white/10">
//         <div className="container mx-auto px-6 text-center">
//           <ScrollReveal direction="up">
//             <h2 className="text-5xl md:text-6xl font-light mb-6">
//               Ready to Transform Your Data?
//             </h2>
//           </ScrollReveal>
          
//           <ScrollReveal direction="up" delay={0.2}>
//             <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
//               Join thousands of teams already using our intelligence platform
//             </p>
//           </ScrollReveal>

//           <ScrollReveal direction="up" delay={0.4}>
//             <button className="px-10 py-5 bg-white text-[#0a0a0f] rounded-lg font-medium text-lg hover:scale-105 transition-transform duration-300">
//               Get Started Free
//             </button>
//           </ScrollReveal>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";


import InsightFlow from "../sections/InsightFlow";
import IntelligenceCore from "./IntelligenceCore";
import ScrollReveal, { ParallaxScroll } from "./ScrollReveal";
import HeroSection from "../sections/HeroSection";
import InsightsList from "../dashboard/InsightsList";

export default function CompleteDemoPage() {
  return (
    <main className="bg-[#0a0a0f] text-white">
      {/* Hero Section with Particle Transformation */}
      <HeroSection />

      {/* Insight Flow - Process Explanation */}
      <InsightFlow />

      {/* Intelligence Core Showcase - THE WOW MOMENT */}
      <section className="relative py-32 overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Intelligence{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Core
              </span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
              Multi-layered processing system visualized in real-time
            </p>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={0.3}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
              <IntelligenceCore />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Real-time Insights Dashboard */}
      <section className="relative py-32 overflow-hidden border-t border-white/10">
        <ParallaxScroll speed={0.2}>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        </ParallaxScroll>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Real-Time{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Intelligence
              </span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
              AI-generated insights delivered as they happen
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <InsightsList limit={5} />
          </ScrollReveal>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="relative py-32 overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Decision Makers
              </span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
              A powerful interface designed for clarity and speed
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-1">
                <div className="bg-[#0a0a0f]/80 rounded-xl p-8">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                    <div>
                      <h3 className="text-2xl font-light text-white mb-1">
                        Intelligence Dashboard
                      </h3>
                      <p className="text-sm text-white/40">
                        Last updated: 2 minutes ago
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-all duration-300">
                        Export
                      </button>
                      <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg text-sm font-medium transition-all duration-300">
                        Generate Report
                      </button>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      {
                        label: "Total Events",
                        value: "1.2M",
                        change: "+12%",
                        positive: true,
                      },
                      {
                        label: "Active Models",
                        value: "24",
                        change: "+3",
                        positive: true,
                      },
                      {
                        label: "Accuracy",
                        value: "98.4%",
                        change: "+0.8%",
                        positive: true,
                      },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-xl p-5 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="text-sm text-white/40 mb-2">
                          {stat.label}
                        </div>
                        <div className="text-3xl font-light text-white mb-2">
                          {stat.value}
                        </div>
                        <div
                          className={`text-xs flex items-center gap-1 ${
                            stat.positive
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={
                                stat.positive
                                  ? "M5 10l7-7m0 0l7 7m-7-7v18"
                                  : "M19 14l-7 7m0 0l-7-7m7 7V3"
                              }
                            />
                          </svg>
                          {stat.change}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8 h-64 flex flex-col items-center justify-center">
                    <div className="text-white/20 text-center">
                      <svg
                        className="w-16 h-16 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <div className="text-sm font-light">
                        Interactive Analytics Chart
                      </div>
                      <div className="text-xs text-white/10 mt-1">
                        Real-time data visualization
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="relative py-32 overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white/90">
              Trusted by Data-Driven Teams
            </h2>
            <p className="text-lg text-white/40 mb-16 font-light">
              Processing billions of data points every day
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "50M+", label: "Data Points" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-light text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden border-t border-white/10">
        <ParallaxScroll speed={0.3}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        </ParallaxScroll>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Ready to Transform Your Data?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light">
              Join thousands of teams already using our intelligence platform
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-5 bg-white text-[#0a0a0f] rounded-lg font-medium text-lg hover:scale-105 transition-transform duration-300">
                Get Started Free
              </button>
              <button className="px-10 py-5 border border-white/20 text-white rounded-lg font-medium text-lg hover:bg-white/5 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}