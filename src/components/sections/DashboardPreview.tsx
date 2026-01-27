"use client";

import { recentInsights, statsData } from "@/src/lib/mock-data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "../ui/Card";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("overview");
  const [chartData, setChartData] = useState([40, 70, 50, 80, 65, 90]);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // Animate chart data
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => prev.map(() => Math.random() * 80 + 20));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard" className="section-padding relative bg-background-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-sm md:text-display font-bold mb-6">
            Intelligence at Your Fingertips
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A powerful dashboard designed for clarity and speed
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Top Bar */}
          <div className="bg-background-card border-b border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-sm text-text-secondary">Intelligence Overview</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-background-elevated rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-background-card border-r border-white/10 p-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
              >
                <div className="text-2xl font-bold text-gradient">Xai</div>
              </motion.div>
              <nav className="space-y-1">
                {["Dashboard", "Analytics", "Insights", "Automation", "Settings"].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredNav(item)}
                    onHoverEnd={() => setHoveredNav(null)}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all relative overflow-hidden ${
                      item === "Dashboard"
                        ? "bg-brand-primary/10 text-brand-primary"
                        : "text-text-secondary hover:bg-background-elevated hover:text-text-primary"
                    }`}
                  >
                    <div className="flex items-center gap-3 relative z-10">
                      <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                        item === "Dashboard" ? "bg-brand-primary" : "bg-text-tertiary"
                      } ${hoveredNav === item && item !== "Dashboard" ? "scale-150 bg-brand-primary" : ""}`} />
                      {item}
                    </div>
                    {item === "Dashboard" && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-brand-primary/5 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-background-primary p-8">
              {/* Tabs */}
              <div className="flex gap-4 mb-8 border-b border-white/10">
                {["overview", "analytics", "insights"].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-3 capitalize transition-all relative font-medium ${
                      activeTab === tab
                        ? "text-brand-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-brand-primary to-brand-secondary rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Stats Grid */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {statsData.map((stat, index) => (
                  <motion.div
                    key={stat.id}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Card className="p-4 group cursor-pointer relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-linear-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                      />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-text-secondary text-sm">{stat.title}</div>
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            className="text-xl"
                          >
                            {index === 0 && "📈"}
                            {index === 1 && "💾"}
                            {index === 2 && "⚡"}
                            {index === 3 && "🎯"}
                          </motion.div>
                        </div>
                        <motion.div 
                          className="text-2xl font-bold mb-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="flex items-center gap-1 text-green-500 text-sm">
                          <motion.svg 
                            className="w-4 h-4"
                            animate={{ y: [-2, 0, -2] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </motion.svg>
                          {stat.change}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Charts Area */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="h-64 p-6 group hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-semibold">Activity Trend</div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="text-brand-primary"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="h-40 flex items-end gap-2 px-2">
                      {chartData.map((height, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 relative group/bar"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ 
                            duration: 0.8, 
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="absolute inset-0 bg-linear-to-t from-brand-primary to-brand-secondary rounded-t opacity-80 group-hover/bar:opacity-100 transition-opacity" />
                          <motion.div
                            className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-text-secondary opacity-0 group-hover/bar:opacity-100 transition-opacity bg-background-elevated px-2 py-1 rounded"
                            initial={false}
                          >
                            {Math.round(height)}%
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-text-tertiary">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card className="h-64 p-6 group hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-semibold">Performance</div>
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-green-500"
                        />
                        <span className="text-xs text-text-secondary">Live</span>
                      </div>
                    </div>
                    <div className="h-40 relative">
                      <svg viewBox="0 0 100 50" className="w-full h-full">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        
                        {/* Area fill */}
                        <motion.path
                          d="M 0,40 L 20,35 L 40,25 L 60,30 L 80,15 L 100,20 L 100,50 L 0,50 Z"
                          fill="url(#areaGradient)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8 }}
                        />
                        
                        {/* Line */}
                        <motion.path
                          d="M 0,40 L 20,35 L 40,25 L 60,30 L 80,15 L 100,20"
                          stroke="url(#lineGradient)"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        
                        {/* Data points */}
                        {[[0,40], [20,35], [40,25], [60,30], [80,15], [100,20]].map((point, i) => (
                          <motion.circle
                            key={i}
                            cx={point[0]}
                            cy={point[1]}
                            r="2"
                            fill="#06b6d4"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.5, 1] }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                          >
                            <animate
                              attributeName="r"
                              values="2;3;2"
                              dur="2s"
                              repeatCount="indefinite"
                              begin={`${i * 0.3}s`}
                            />
                          </motion.circle>
                        ))}
                      </svg>
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-text-tertiary">
                      <span>0h</span>
                      <span>6h</span>
                      <span>12h</span>
                      <span>18h</span>
                      <span>24h</span>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Recent Insights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-lg font-semibold">Recent Insights</div>
                    <motion.button 
                      className="text-brand-primary text-sm hover:text-brand-primary-light flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View All
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                  <div className="space-y-2">
                    <AnimatePresence>
                      {recentInsights.slice(0, 3).map((insight, index) => (
                        <motion.div
                          key={insight.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ 
                            scale: 1.02, 
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            transition: { duration: 0.2 }
                          }}
                          className="flex items-start gap-4 p-3 rounded-lg cursor-pointer group relative overflow-hidden"
                        >
                          <div className="relative">
                            <motion.div 
                              className={`w-2 h-2 rounded-full mt-2 ${
                                insight.status === "success" ? "bg-green-500" :
                                insight.status === "warning" ? "bg-yellow-500" :
                                insight.status === "info" ? "bg-blue-500" : "bg-brand-primary"
                              }`}
                              animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: index * 0.3
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium mb-1 group-hover:text-brand-primary transition-colors">
                              {insight.title}
                            </div>
                            <div className="text-sm text-text-secondary">
                              {insight.description}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <div className="text-xs text-text-tertiary">{insight.timestamp}</div>
                            <motion.div
                              className={`text-xs px-2 py-1 rounded-full ${
                                insight.priority === "high" || insight.priority === "critical" 
                                  ? "bg-red-500/10 text-red-400" 
                                  : "bg-blue-500/10 text-blue-400"
                              }`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                            >
                              {insight.priority}
                            </motion.div>
                          </div>
                          <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={false}
                          >
                            <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}