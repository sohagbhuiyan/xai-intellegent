"use client";

import Card from "@/src/components/ui/Card";
import { motion } from "framer-motion";
import { BarChart3, MoreVertical, TrendingUp, Download, Filter, Sparkles } from "lucide-react";
import { useState } from "react";

interface BarChartProps {
  title?: string;
  data?: Array<{ category: string; value: number; color: string }>;
}

export default function BarChart({ 
  title = "Performance Metrics",
  data = [
    { category: "Neural Networks", value: 87, color: "#06b6d4" },
    { category: "Deep Learning", value: 92, color: "#8b5cf6" },
    { category: "NLP Models", value: 78, color: "#10b981" },
    { category: "Computer Vision", value: 95, color: "#f59e0b" },
  ]
}: BarChartProps) {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const maxValue = Math.max(...data.map(d => d.value));
  const totalValue = data.reduce((sum, d) => sum + d.value, 0);
  const averageValue = (totalValue / data.length).toFixed(1);

  return (
    <Card className="p-6 hover:shadow-2xl transition-all duration-500 border-white/10 group relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <motion.div 
              className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <BarChart3 className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <Sparkles className="w-3 h-3 text-slate-400" strokeWidth={2} />
                <span className="text-xs text-slate-400 font-medium">
                  AI model performance comparison
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Filter className="w-4 h-4 text-slate-400" strokeWidth={2} />
            </motion.button>
            
            <div className="relative">
              <motion.button 
                onClick={() => setShowMenu(!showMenu)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <MoreVertical className="w-4 h-4 text-slate-400" strokeWidth={2} />
              </motion.button>
              
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-48 bg-slate-800 border border-white/10 rounded-xl shadow-xl overflow-hidden z-50"
                >
                  <button className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/5 transition-colors">
                    View Details
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/5 transition-colors">
                    Compare Models
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/5 transition-colors">
                    Export Data
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-8">
          <div className="flex items-end justify-between gap-4 h-64 px-4">
            {data.map((item, index) => {
              const heightPercent = (item.value / maxValue) * 100;
              const isHovered = hoveredBar === index;
              
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-3 group/bar"
                  onMouseEnter={() => setHoveredBar(index)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  {/* Value label on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 10
                    }}
                    className="absolute -mt-12 px-3 py-1.5 rounded-lg border text-xs font-bold whitespace-nowrap"
                    style={{
                      backgroundColor: `${item.color}20`,
                      borderColor: `${item.color}40`,
                      color: item.color
                    }}
                  >
                    {item.value}% accuracy
                  </motion.div>
                  
                  {/* Bar */}
                  <motion.div
                    className="relative w-full rounded-t-xl overflow-hidden cursor-pointer"
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPercent}%` }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scaleY: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Gradient background */}
                    <div 
                      className="absolute inset-0 opacity-80 group-hover/bar:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(180deg, ${item.color}, ${item.color}cc)`
                      }}
                    />
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent"
                      animate={{
                        y: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Glow effect on hover */}
                    {isHovered && (
                      <motion.div
                        className="absolute -inset-2 rounded-xl blur-lg"
                        style={{ backgroundColor: item.color }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    
                    {/* Value inside bar */}
                    <div className="absolute inset-0 flex items-start justify-center pt-4">
                      <motion.span
                        className="text-white font-bold text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0.6 }}
                      >
                        {item.value}
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="text-center"
            >
              <div 
                className="w-2 h-2 rounded-full mx-auto mb-2"
                style={{ backgroundColor: item.color }}
              />
              <div className="text-xs text-slate-400 mb-1 font-medium">
                {item.category}
              </div>
              <div className="text-sm font-bold text-white">
                {item.value}%
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats footer */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/20">
                <TrendingUp className="w-4 h-4 text-green-400" strokeWidth={2} />
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Average Score</div>
                <div className="text-sm font-bold text-white">
                  {averageValue}%
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20">
                <Sparkles className="w-4 h-4 text-purple-400" strokeWidth={2} />
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Best Performance</div>
                <div className="text-sm font-bold text-white">
                  {data.find(d => d.value === maxValue)?.category}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20">
                <BarChart3 className="w-4 h-4 text-cyan-400" strokeWidth={2} />
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Total Models</div>
                <div className="text-sm font-bold text-white">
                  {data.length}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-400/20 rounded-lg text-sm text-purple-400 hover:text-purple-300 transition-all font-medium"
          >
            <Download className="w-4 h-4" strokeWidth={2} />
            Export Report
          </motion.button>
        </div>
      </div>
    </Card>
  );
}