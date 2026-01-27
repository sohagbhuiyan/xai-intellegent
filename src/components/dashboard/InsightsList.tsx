// "use client";

// import Card from "@/src/components/ui/Card";
// import Badge from "@/src/components/ui/Badge";
// import { recentInsights } from "@/src/lib/mock-data";

// interface InsightsListProps {
//   limit?: number;
// }

// export default function InsightsList({ limit }: InsightsListProps) {
//   const insights = limit ? recentInsights.slice(0, limit) : recentInsights;

//   const statusVariants: Record<string, "default" | "success" | "warning" | "error"> = {
//     success: "success",
//     warning: "warning",
//     error: "error",
//     info: "default",
//   };

//   const priorityColors: Record<string, string> = {
//     critical: "text-red-500",
//     high: "text-orange-500",
//     medium: "text-yellow-500",
//     low: "text-green-500",
//   };

//   return (
//     <Card className="p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-lg font-semibold">Recent Insights</h3>
//         <button className="text-sm text-brand-primary hover:text-brand-primary-light transition-colors">
//           View All →
//         </button>
//       </div>

//       <div className="space-y-3">
//         {insights.map((insight) => (
//           <div
//             key={insight.id}
//             className="group flex items-start gap-4 p-4 rounded-lg hover:bg-background-elevated transition-all cursor-pointer border border-transparent hover:border-white/5"
//           >
//             {/* Priority Indicator */}
//             <div
//               className={`w-2 h-2 rounded-full mt-2 ${
//                 priorityColors[insight.priority]
//               }`}
//             />

//             {/* Content */}
//             <div className="flex-1 min-w-0">
//               <div className="flex items-start justify-between gap-2 mb-2">
//                 <h4 className="font-medium group-hover:text-brand-primary transition-colors">
//                   {insight.title}
//                 </h4>
//                 <Badge variant={statusVariants[insight.status]}>
//                   {insight.status}
//                 </Badge>
//               </div>
//               <p className="text-sm text-text-secondary mb-2">
//                 {insight.description}
//               </p>
//               <div className="flex items-center gap-4 text-xs text-text-tertiary">
//                 <span>{insight.timestamp}</span>
//                 <span className="capitalize">Priority: {insight.priority}</span>
//               </div>
//             </div>

//             {/* Action Icon */}
//             <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-background-card rounded">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         ))}
//       </div>
//     </Card>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Mock data
const recentInsights = [
  {
    id: 1,
    title: "Revenue Anomaly Detected",
    description: "Unusual spike in Q4 revenue compared to historical patterns. Requires immediate attention.",
    timestamp: "2 hours ago",
    priority: "critical",
    status: "warning",
    category: "Revenue"
  },
  {
    id: 2,
    title: "Customer Churn Pattern",
    description: "Identified 15% increase in churn rate among enterprise customers in the past 30 days.",
    timestamp: "5 hours ago",
    priority: "high",
    status: "error",
    category: "Customers"
  },
  {
    id: 3,
    title: "Market Trend Shift",
    description: "Positive sentiment shift detected in social media metrics. Opportunity for campaign expansion.",
    timestamp: "1 day ago",
    priority: "medium",
    status: "success",
    category: "Marketing"
  },
  {
    id: 4,
    title: "Inventory Optimization",
    description: "AI suggests rebalancing stock across 3 warehouses to reduce costs by 12%.",
    timestamp: "1 day ago",
    priority: "medium",
    status: "info",
    category: "Operations"
  },
  {
    id: 5,
    title: "Performance Milestone",
    description: "System processed 1M+ data points with 99.7% accuracy this week.",
    timestamp: "2 days ago",
    priority: "low",
    status: "success",
    category: "System"
  }
];

interface InsightsListProps {
  limit?: number;
}

export default function InsightsList({ limit }: InsightsListProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const insights = limit ? recentInsights.slice(0, limit) : recentInsights;

  const priorityConfig = {
    critical: { color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" },
    high: { color: "#f97316", bg: "rgba(249, 115, 22, 0.1)" },
    medium: { color: "#eab308", bg: "rgba(234, 179, 8, 0.1)" },
    low: { color: "#10b981", bg: "rgba(16, 185, 129, 0.1)" }
  };

  const statusConfig = {
    success: { color: "#10b981", label: "Resolved" },
    warning: { color: "#eab308", label: "Pending" },
    error: { color: "#ef4444", label: "Critical" },
    info: { color: "#06b6d4", label: "Info" }
  };

  return (
    <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
        <div>
          <h3 className="text-2xl font-light text-white mb-1">Recent Insights</h3>
          <p className="text-sm text-white/40">Latest AI-generated intelligence</p>
        </div>
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-light"
        >
          View All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.button>
      </div>

      {/* Insights List */}
      <div className="space-y-3">
        {insights.map((insight, index) => {
          const priority = priorityConfig[insight.priority as keyof typeof priorityConfig];
          const status = statusConfig[insight.status as keyof typeof statusConfig];
          const isHovered = hoveredId === insight.id;

          return (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              onHoverStart={() => setHoveredId(insight.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ x: 4 }}
              className="group relative"
            >
              <div className="relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Priority indicator line */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: isHovered ? 1 : 0.6 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 bottom-0 w-[2px] origin-top"
                  style={{ backgroundColor: priority.color }}
                />

                {/* Priority dot */}
                <div className="relative mt-1.5 flex-shrink-0">
                  <motion.div
                    animate={{
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      opacity: isHovered ? [1, 0.6, 1] : 1
                    }}
                    transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: priority.color }}
                  />
                  {/* Pulsing ring */}
                  {isHovered && (
                    <motion.div
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: priority.color }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300 mb-1">
                        {insight.title}
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed font-light">
                        {insight.description}
                      </p>
                    </div>

                    {/* Status badge */}
                    <div
                      className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-medium border"
                      style={{
                        backgroundColor: `${status.color}10`,
                        borderColor: `${status.color}30`,
                        color: status.color
                      }}
                    >
                      {status.label}
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-white/40 mt-3">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {insight.timestamp}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      {insight.category}
                    </span>
                    <span className="flex items-center gap-1.5 capitalize">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: priority.color }} />
                      {insight.priority}
                    </span>
                  </div>
                </div>

                {/* Action arrow - appears on hover */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 self-center"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 0.05 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${priority.color}, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: insights.length * 0.1 + 0.2 }}
        className="flex items-center justify-between mt-8 pt-6 border-t border-white/10"
      >
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-white/60 font-light">
              <span className="text-white font-medium">2</span> Critical
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-white/60 font-light">
              <span className="text-white font-medium">1</span> High
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="text-white/60 font-light">
              <span className="text-white font-medium">2</span> Medium
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white/80 hover:text-white transition-all duration-300"
        >
          Export Report
        </motion.button>
      </motion.div>
    </div>
  );
}