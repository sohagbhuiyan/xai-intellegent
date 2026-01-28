
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "../ui/Card";
import { 
  TrendingUp, 
  Database, 
  Zap, 
  Target,
  LayoutDashboard,
  BarChart3,
  Brain,
  Settings,
  Bot,
  RefreshCw,
  ChevronRight,
  Activity,
  ArrowUpRight,
  Sparkles,
  Download,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Info,
  Circle
} from "lucide-react";

// Professional AI-focused mock data
const statsData = [
  {
    id: 1,
    title: "Model Accuracy",
    value: "98.7%",
    change: "+2.3% vs baseline",
    trend: "up",
    icon: Brain,
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    title: "Data Processed",
    value: "2.4M",
    change: "+340K this week",
    trend: "up",
    icon: Database,
    color: "#8b5cf6",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    id: 3,
    title: "Inference Speed",
    value: "12ms",
    change: "-8ms improved",
    trend: "up",
    icon: Zap,
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    id: 4,
    title: "Success Rate",
    value: "99.9%",
    change: "+0.4% this month",
    trend: "up",
    icon: Target,
    color: "#10b981",
    gradient: "from-emerald-500 to-green-500"
  }
];

const recentInsights = [
  {
    id: 1,
    title: "Production Model Updated",
    description: "Transformer-based classifier v2.3 deployed with improved F1 score",
    timestamp: "8 min ago",
    priority: "high",
    status: "success",
    category: "Deployment"
  },
  {
    id: 2,
    title: "Anomaly Detection Alert",
    description: "Unusual pattern detected in API request distribution",
    timestamp: "23 min ago",
    priority: "critical",
    status: "warning",
    category: "Monitoring"
  },
  {
    id: 3,
    title: "Training Cycle Complete",
    description: "BERT fine-tuning finished with 96.2% validation accuracy",
    timestamp: "1 hour ago",
    priority: "medium",
    status: "info",
    category: "Training"
  }
];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("overview");
  const [chartData, setChartData] = useState([65, 78, 70, 85, 75, 92]);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  // Animate chart data
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => prev.map(() => Math.random() * 60 + 40));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Analytics", icon: BarChart3 },
    { name: "AI Models", icon: Brain },
    { name: "Automation", icon: Bot },
    { name: "Settings", icon: Settings }
  ];

  const statusConfig = {
    success: { color: "#00e5a0", icon: CheckCircle2 },
    warning: { color: "#ff8c42", icon: AlertTriangle },
    info: { color: "#6dd5ed", icon: Info }
  };

  return (
    <section id="dashboard" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" strokeWidth={2} />
            <span className="text-sm font-medium text-cyan-400">AI-Powered Dashboard</span>
          </motion.div>
          
          <h2 className="text-display-sm md:text-display font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent">
            Intelligence at Your Fingertips
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Real-time insights, automated workflows, and enterprise-grade analytics in one unified platform
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl"
        >
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-b border-white/10 p-5 flex items-center justify-between backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" 
                />
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" 
                />
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" 
                />
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" strokeWidth={2} />
                <span className="text-sm text-slate-400 font-medium">AI Intelligence Hub</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20"
              >
                <Circle className="w-2 h-2 fill-green-500 text-green-500" strokeWidth={0} />
                <span className="text-xs font-medium text-green-400">System Active</span>
              </motion.div>
              
              <motion.button 
                whileHover={{ rotate: 180, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4 text-slate-400" strokeWidth={2} />
              </motion.button>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-72 bg-gradient-to-b from-slate-900/50 to-slate-950/50 border-r border-white/10 p-6 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-10"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Brain className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
                  </motion.div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                   Xai Intelligence
                  </div>
                </div>
              </motion.div>
              
              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = item.name === "Dashboard";
                  
                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onHoverStart={() => setHoveredNav(item.name)}
                      onHoverEnd={() => setHoveredNav(null)}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left cursor-pointer px-4 py-3.5 rounded-xl transition-all relative overflow-hidden group ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-white border border-cyan-400/20"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3 relative z-10">
                        <Icon 
                          className={`w-5 h-5 transition-all ${
                            isActive ? "text-cyan-400" : "text-slate-500 group-hover:text-cyan-400"
                          }`}
                          strokeWidth={1.5}
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-xl"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      
                      {hoveredNav === item.name && !isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                          <ChevronRight className="w-4 h-4 text-cyan-400" strokeWidth={2} />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </nav>
              
              {/* Sidebar footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pt-8"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-400/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-purple-400" strokeWidth={2} />
                    <span className="text-sm font-semibold text-white">Pro Plan</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">
                    Unlimited AI models and insights
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-3 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-xs font-semibold text-white"
                  >
                    Upgrade Now
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gradient-to-br from-slate-950/30 to-slate-900/30 p-8 backdrop-blur-sm">
              {/* Tabs */}
              <div className="flex gap-1 mb-8 p-1 bg-white/5 rounded-xl border border-white/10 w-fit">
                {["overview", "analytics", "insights"].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-2.5 capitalize transition-all relative font-medium rounded-lg ${
                      activeTab === tab
                        ? "text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Stats Grid */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
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
                {statsData.map((stat, index) => {
                  const Icon = stat.icon;
                  const isHovered = hoveredStat === stat.id;
                  
                  return (
                    <motion.div
                      key={stat.id}
                      variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.9 },
                        visible: { opacity: 1, y: 0, scale: 1 }
                      }}
                      onHoverStart={() => setHoveredStat(stat.id)}
                      onHoverEnd={() => setHoveredStat(null)}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Card className="p-5 group cursor-pointer relative overflow-hidden border-white/10 hover:border-cyan-400/30">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                          initial={false}
                        />
                        
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-slate-400 text-sm font-medium">{stat.title}</div>
                            <motion.div
                              animate={isHovered ? {
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                              } : {}}
                              transition={{ duration: 0.5 }}
                              className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient} bg-opacity-10`}
                            >
                              <Icon 
                                className="w-5 h-5" 
                                style={{ color: stat.color }}
                                strokeWidth={1.5}
                              />
                            </motion.div>
                          </div>
                          
                          <motion.div 
                            className="text-3xl font-bold mb-2 text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            {stat.value}
                          </motion.div>
                          
                          <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                            <motion.div
                              animate={{ y: [-2, 0, -2] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                            </motion.div>
                            {stat.change}
                          </div>
                        </div>
                        
                        {/* Glow effect */}
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.2, scale: 1.5 }}
                            exit={{ opacity: 0 }}
                            className="absolute -inset-4 rounded-full blur-2xl"
                            style={{ backgroundColor: stat.color }}
                          />
                        )}
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Charts Area */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Bar Chart */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="h-80 p-6 group hover:shadow-xl transition-shadow border-white/10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-cyan-500/10">
                          <BarChart3 className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-white">Weekly Performance</div>
                          <div className="text-xs text-slate-400">Model accuracy trends</div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-cyan-400 opacity-50"
                      >
                        <Activity className="w-5 h-5" strokeWidth={1.5} />
                      </motion.div>
                    </div>
                    
                    <div className="h-48 flex items-end gap-3 px-2">
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
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-lg opacity-70 group-hover/bar:opacity-100 transition-opacity shadow-lg shadow-cyan-500/20" />
                          
                          <motion.div
                            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg bg-slate-800 border border-cyan-400/30 text-xs text-white opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap"
                            initial={false}
                          >
                            {Math.round(height)}% accuracy
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between mt-6 text-xs text-slate-500 font-medium">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* Line Chart */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card className="h-80 p-6 group hover:shadow-xl transition-shadow border-white/10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/10">
                          <TrendingUp className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-white">Real-time Metrics</div>
                          <div className="text-xs text-slate-400">Last 24 hours</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-green-500"
                        />
                        <span className="text-xs text-slate-400 font-medium">Live</span>
                      </div>
                    </div>
                    
                    <div className="h-48 relative">
                      <svg viewBox="0 0 100 50" className="w-full h-full">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="50%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        
                        {/* Area fill */}
                        <motion.path
                          d="M 0,40 L 15,35 L 30,28 L 45,32 L 60,22 L 75,18 L 90,15 L 100,20 L 100,50 L 0,50 Z"
                          fill="url(#areaGradient)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8 }}
                        />
                        
                        {/* Line */}
                        <motion.path
                          d="M 0,40 L 15,35 L 30,28 L 45,32 L 60,22 L 75,18 L 90,15 L 100,20"
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
                        {[[0,40], [15,35], [30,28], [45,32], [60,22], [75,18], [90,15], [100,20]].map((point, i) => (
                          <motion.g key={i}>
                            <motion.circle
                              cx={point[0]}
                              cy={point[1]}
                              r="2.5"
                              fill="#06b6d4"
                              initial={{ scale: 0 }}
                              animate={{ scale: [0, 1.5, 1] }}
                              transition={{ delay: i * 0.15, duration: 0.5 }}
                            >
                              <animate
                                attributeName="r"
                                values="2.5;3.5;2.5"
                                dur="2s"
                                repeatCount="indefinite"
                                begin={`${i * 0.3}s`}
                              />
                            </motion.circle>
                            <circle
                              cx={point[0]}
                              cy={point[1]}
                              r="5"
                              fill="#06b6d4"
                              opacity="0.2"
                            >
                              <animate
                                attributeName="r"
                                values="5;8;5"
                                dur="2s"
                                repeatCount="indefinite"
                                begin={`${i * 0.3}s`}
                              />
                              <animate
                                attributeName="opacity"
                                values="0.2;0;0.2"
                                dur="2s"
                                repeatCount="indefinite"
                                begin={`${i * 0.3}s`}
                              />
                            </circle>
                          </motion.g>
                        ))}
                      </svg>
                    </div>
                    
                    <div className="flex justify-between mt-6 text-xs text-slate-500 font-medium">
                      {["0h", "4h", "8h", "12h", "16h", "20h", "24h"].map((time) => (
                        <span key={time}>{time}</span>
                      ))}
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
                <Card className="p-6 border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                        <Brain className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white">AI Insights Feed</div>
                        <div className="text-xs text-slate-400">Real-time system updates</div>
                      </div>
                    </div>
                    
                    <motion.button 
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-slate-300 hover:text-white transition-all font-medium"
                      whileHover={{ scale: 1.05, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View All
                      <ChevronRight className="w-4 h-4" strokeWidth={2} />
                    </motion.button>
                  </div>
                  
                  <div className="space-y-3">
                    <AnimatePresence>
                      {recentInsights.map((insight, index) => {
                        const status = statusConfig[insight.status as keyof typeof statusConfig];
                        const StatusIcon = status.icon;
                        
                        return (
                          <motion.div
                            key={insight.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ 
                              x: 6,
                              backgroundColor: "rgba(255, 255, 255, 0.03)",
                              transition: { duration: 0.2 }
                            }}
                            className="flex items-start gap-4 p-4 rounded-xl cursor-pointer group relative overflow-hidden border border-white/5 hover:border-white/10"
                          >
                            <div className="relative">
                              <motion.div 
                                className="p-2 rounded-lg"
                                style={{ 
                                  backgroundColor: `${status.color}15`,
                                  borderColor: `${status.color}30`
                                }}
                                animate={{ 
                                  scale: [1, 1.05, 1],
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity,
                                  delay: index * 0.3
                                }}
                              >
                                <StatusIcon 
                                  className="w-4 h-4" 
                                  style={{ color: status.color }}
                                  strokeWidth={2}
                                />
                              </motion.div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                {insight.title}
                              </div>
                              <div className="text-sm text-slate-400 leading-relaxed">
                                {insight.description}
                              </div>
                              <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" strokeWidth={2} />
                                  {insight.timestamp}
                                </span>
                                <span>•</span>
                                <span>{insight.category}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-end gap-2">
                              <motion.div
                                className="px-3 py-1 rounded-lg text-xs font-semibold border"
                                style={{
                                  backgroundColor: `${status.color}15`,
                                  borderColor: `${status.color}30`,
                                  color: status.color
                                }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                              >
                                {insight.priority}
                              </motion.div>
                            </div>
                            
                            <motion.div
                              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={false}
                            >
                              <ChevronRight className="w-5 h-5 text-cyan-400" strokeWidth={2} />
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                  
                  {/* Footer actions */}
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                    <div className="text-sm text-slate-400">
                      <span className="text-white font-semibold">3</span> active insights
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-400/20 rounded-lg text-sm text-cyan-400 transition-all font-medium"
                    >
                      <Download className="w-4 h-4" strokeWidth={2} />
                      Export Report
                    </motion.button>
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