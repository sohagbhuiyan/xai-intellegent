"use client";

import Card from "@/src/components/ui/Card";
import { motion } from "framer-motion";
import { TrendingUp, ChevronDown, Activity, Download, Maximize2 } from "lucide-react";
import { useState } from "react";

interface LineChartProps {
  title?: string;
  data?: number[];
}

export default function LineChart({ 
  title = "Model Performance Trend",
  data = [72, 78, 75, 85, 82, 88, 91, 87, 92, 89, 94, 96]
}: LineChartProps) {
  const [timeRange, setTimeRange] = useState("6months");
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const displayMonths = months.slice(0, data.length);

  // Calculate trend
  const avgChange = ((data[data.length - 1] - data[0]) / data[0] * 100).toFixed(1);
  const isPositive = parseFloat(avgChange) > 0;

  // Generate SVG path
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;
  const padding = 10;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - (((value - minValue) / range) * (100 - padding * 2) + padding);
    return { x, y, value };
  });

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ');
  const areaD = `${pathD} L 100,100 L 0,100 Z`;

  return (
    <Card className="p-6 hover:shadow-2xl transition-all duration-500 border-white/10 group relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div 
              className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <Activity className="w-3 h-3 text-slate-400" strokeWidth={2} />
                <span className="text-xs text-slate-400 font-medium">
                  Tracking accuracy metrics
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
              <Maximize2 className="w-4 h-4 text-slate-400" strokeWidth={2} />
            </motion.button>
            
            <div className="relative">
              <motion.select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                whileHover={{ scale: 1.02 }}
                className="appearance-none px-4 py-2 pr-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all cursor-pointer font-medium"
              >
                <option value="6months">Last 6 months</option>
                <option value="12months">Last 12 months</option>
                <option value="all">All time</option>
              </motion.select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-6 relative">
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-56"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="lineGradientChart" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="areaGradientChart" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
              />
            ))}
            
            {/* Area fill */}
            <motion.path
              d={areaD}
              fill="url(#areaGradientChart)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Line */}
            <motion.path
              d={pathD}
              stroke="url(#lineGradientChart)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Data points */}
            {points.map((point, i) => (
              <g key={i}>
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="3"
                  fill="#06b6d4"
                  className="cursor-pointer"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredPoint === i ? 1.5 : 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  onMouseEnter={() => setHoveredPoint(i)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  <animate
                    attributeName="r"
                    values="3;4;3"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${i * 0.2}s`}
                  />
                </motion.circle>
                
                {/* Pulsing ring */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="6"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  opacity="0.4"
                >
                  <animate
                    attributeName="r"
                    values="6;10;6"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${i * 0.2}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0;0.4"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${i * 0.2}s`}
                  />
                </circle>
                
                {/* Tooltip */}
                {hoveredPoint === i && (
                  <motion.g
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <rect
                      x={point.x - 15}
                      y={point.y - 25}
                      width="30"
                      height="18"
                      rx="4"
                      fill="rgba(6, 182, 212, 0.95)"
                      stroke="rgba(6, 182, 212, 0.5)"
                      strokeWidth="1"
                    />
                    <text
                      x={point.x}
                      y={point.y - 12}
                      textAnchor="middle"
                      fill="white"
                      fontSize="6"
                      fontWeight="bold"
                    >
                      {point.value}%
                    </text>
                  </motion.g>
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-slate-500 font-medium mb-6 px-2">
          {displayMonths.map((month, i) => (
            <motion.span
              key={month}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={hoveredPoint === i ? "text-cyan-400 font-bold" : ""}
            >
              {month}
            </motion.span>
          ))}
        </div>

        {/* Stats footer */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Average Growth</div>
                <div className={`text-sm font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {isPositive ? '+' : ''}{avgChange}%
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Peak Performance</div>
                <div className="text-sm font-bold text-white">
                  {Math.max(...data)}%
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Current</div>
                <div className="text-sm font-bold text-white">
                  {data[data.length - 1]}%
                </div>
              </div>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-slate-300 hover:text-white transition-all font-medium"
          >
            <Download className="w-4 h-4" strokeWidth={2} />
            Export
          </motion.button>
        </div>
      </div>
    </Card>
  );
}