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
  Circle,
  Menu,
  X,
  Eye,
  Shield,
  FileText,
  TrendingDown,
  Users,
  Lightbulb,
  GitBranch,
  Layers,
  PieChart,
  LineChart
} from "lucide-react";

// XAI Overview Stats
const overviewStats = [
  {
    id: 1,
    title: "Explainability Score",
    value: "94.2%",
    change: "+3.1%",
    changeLabel: "vs last month",
    trend: "up",
    icon: Eye,
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    title: "Model Transparency",
    value: "97.8%",
    change: "+1.5%",
    changeLabel: "improved",
    trend: "up",
    icon: Shield,
    color: "#8b5cf6",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    id: 3,
    title: "Feature Attribution",
    value: "156K",
    change: "+24K",
    changeLabel: "this week",
    trend: "up",
    icon: Layers,
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    id: 4,
    title: "Trust Index",
    value: "99.3%",
    change: "+0.7%",
    changeLabel: "this month",
    trend: "up",
    icon: Target,
    color: "#10b981",
    gradient: "from-emerald-500 to-green-500"
  }
];

// Analytics Stats
const analyticsStats = [
  {
    id: 1,
    title: "SHAP Values Generated",
    value: "2.8M",
    change: "+420K",
    changeLabel: "this week",
    trend: "up",
    icon: BarChart3,
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    title: "LIME Explanations",
    value: "1.2M",
    change: "+180K",
    changeLabel: "generated",
    trend: "up",
    icon: PieChart,
    color: "#8b5cf6",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    id: 3,
    title: "Decision Paths",
    value: "89.4%",
    change: "+2.8%",
    changeLabel: "coverage",
    trend: "up",
    icon: GitBranch,
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    id: 4,
    title: "Counterfactuals",
    value: "345K",
    change: "+52K",
    changeLabel: "analyzed",
    trend: "up",
    icon: LineChart,
    color: "#10b981",
    gradient: "from-emerald-500 to-green-500"
  }
];

// Insights Stats
const insightsStats = [
  {
    id: 1,
    title: "Bias Detection",
    value: "98.1%",
    change: "+1.2%",
    changeLabel: "accuracy",
    trend: "up",
    icon: Shield,
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    title: "Fairness Metrics",
    value: "96.5%",
    change: "+2.3%",
    changeLabel: "compliance",
    trend: "up",
    icon: Users,
    color: "#8b5cf6",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    id: 3,
    title: "Interpretability",
    value: "92.7%",
    change: "+4.1%",
    changeLabel: "score",
    trend: "up",
    icon: Lightbulb,
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    id: 4,
    title: "Human Alignment",
    value: "94.8%",
    change: "+1.9%",
    changeLabel: "rating",
    trend: "up",
    icon: Brain,
    color: "#10b981",
    gradient: "from-emerald-500 to-green-500"
  }
];

// Overview Insights
const overviewInsights = [
  {
    id: 1,
    title: "XAI Model Deployed Successfully",
    description: "Latest SHAP-enabled classifier v3.1 now live with enhanced feature attribution capabilities",
    timestamp: "12 min ago",
    priority: "high",
    status: "success",
    category: "Deployment"
  },
  {
    id: 2,
    title: "Transparency Report Generated",
    description: "Q4 2024 model explainability audit completed with 97.8% transparency score",
    timestamp: "45 min ago",
    priority: "medium",
    status: "info",
    category: "Compliance"
  },
  {
    id: 3,
    title: "Feature Importance Updated",
    description: "Top 15 predictive features identified with confidence intervals and SHAP values",
    timestamp: "2 hours ago",
    priority: "medium",
    status: "success",
    category: "Analysis"
  }
];

// Analytics Insights
const analyticsInsights = [
  {
    id: 1,
    title: "SHAP Analysis Complete",
    description: "Comprehensive feature attribution analysis across 2.8M predictions with detailed breakdowns",
    timestamp: "15 min ago",
    priority: "high",
    status: "success",
    category: "Analysis"
  },
  {
    id: 2,
    title: "Decision Tree Visualization Ready",
    description: "Interactive decision path diagrams generated for all model predictions",
    timestamp: "1 hour ago",
    priority: "medium",
    status: "info",
    category: "Visualization"
  },
  {
    id: 3,
    title: "Counterfactual Examples Generated",
    description: "345K what-if scenarios analyzed to explain alternative prediction outcomes",
    timestamp: "3 hours ago",
    priority: "medium",
    status: "success",
    category: "Explanation"
  }
];

// Deep Insights
const deepInsights = [
  {
    id: 1,
    title: "Bias Mitigation Alert",
    description: "Potential demographic bias detected in loan approval model - mitigation strategies recommended",
    timestamp: "20 min ago",
    priority: "critical",
    status: "warning",
    category: "Fairness"
  },
  {
    id: 2,
    title: "Fairness Audit Passed",
    description: "All protected attributes meet fairness thresholds with 96.5% compliance across demographics",
    timestamp: "1 hour ago",
    priority: "high",
    status: "success",
    category: "Compliance"
  },
  {
    id: 3,
    title: "Human Feedback Integrated",
    description: "User interpretability ratings incorporated - model explanations improved by 4.2%",
    timestamp: "4 hours ago",
    priority: "medium",
    status: "info",
    category: "Improvement"
  }
];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("overview");
  const [chartData, setChartData] = useState([65, 78, 70, 85, 75, 92]);
  const [analyticsChartData, setAnalyticsChartData] = useState([45, 62, 58, 72, 68, 85]);
  const [insightsChartData, setInsightsChartData] = useState([55, 68, 64, 78, 72, 88]);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animate chart data based on active tab
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeTab === "overview") {
        setChartData(prev => prev.map(() => Math.random() * 60 + 40));
      } else if (activeTab === "analytics") {
        setAnalyticsChartData(prev => prev.map(() => Math.random() * 60 + 35));
      } else {
        setInsightsChartData(prev => prev.map(() => Math.random() * 60 + 45));
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [activeTab]);

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

  // Get current stats based on active tab
  const getCurrentStats = () => {
    switch (activeTab) {
      case "analytics":
        return analyticsStats;
      case "insights":
        return insightsStats;
      default:
        return overviewStats;
    }
  };

  // Get current insights based on active tab
  const getCurrentInsights = () => {
    switch (activeTab) {
      case "analytics":
        return analyticsInsights;
      case "insights":
        return deepInsights;
      default:
        return overviewInsights;
    }
  };

  // Get current chart data based on active tab
  const getCurrentChartData = () => {
    switch (activeTab) {
      case "analytics":
        return analyticsChartData;
      case "insights":
        return insightsChartData;
      default:
        return chartData;
    }
  };

  // Get chart titles based on active tab
  const getChartTitles = () => {
    switch (activeTab) {
      case "analytics":
        return {
          bar: { title: "SHAP Value Distribution", subtitle: "Feature importance over time" },
          line: { title: "Explanation Coverage", subtitle: "Last 7 days" }
        };
      case "insights":
        return {
          bar: { title: "Fairness Metrics", subtitle: "Bias detection scores" },
          line: { title: "Trust Score Trend", subtitle: "User confidence metrics" }
        };
      default:
        return {
          bar: { title: "Explainability Score", subtitle: "Model transparency trends" },
          line: { title: "Real-time Predictions", subtitle: "Last 24 hours" }
        };
    }
  };

  const currentStats = getCurrentStats();
  const currentInsights = getCurrentInsights();
  const currentChartData = getCurrentChartData();
  const chartTitles = getChartTitles();

  return (
    <section id="dashboard" className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" strokeWidth={2} />
            <span className="text-xs sm:text-sm font-medium text-cyan-400">Explainable AI Dashboard</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent">
            Transparent AI Intelligence
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            Understand every decision with SHAP, LIME, and advanced explainability frameworks
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl"
        >
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-b border-white/10 p-3 sm:p-4 lg:p-5 flex items-center justify-between backdrop-blur-sm">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex gap-1.5 sm:gap-2">
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 cursor-pointer" 
                />
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 cursor-pointer" 
                />
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 cursor-pointer" 
                />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" strokeWidth={2} />
                <span className="text-xs sm:text-sm text-slate-400 font-medium">XAI Intelligence Hub</span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="hidden sm:flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-green-500/10 border border-green-500/20"
              >
                <Circle className="w-1.5 h-1.5 sm:w-2 sm:h-2 fill-green-500 text-green-500" strokeWidth={0} />
                <span className="text-[10px] sm:text-xs font-medium text-green-400">Active</span>
              </motion.div>
              
              <motion.button 
                whileHover={{ rotate: 180, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="p-1.5 sm:p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" strokeWidth={2} />
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" strokeWidth={2} />
                ) : (
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" strokeWidth={2} />
                )}
              </motion.button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block w-64 xl:w-72 bg-gradient-to-b from-slate-900/50 to-slate-950/50 border-r border-white/10 p-4 xl:p-6 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8 xl:mb-10"
              >
                <div className="flex items-center gap-2 xl:gap-3">
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
                    <Brain className="w-6 h-6 xl:w-8 xl:h-8 text-cyan-400" strokeWidth={1.5} />
                  </motion.div>
                  <div className="text-xl xl:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Xai Intelligence
                  </div>
                </div>
              </motion.div>
              
              <nav className="space-y-1.5 xl:space-y-2">
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
                      className={`w-full text-left cursor-pointer px-3 xl:px-4 py-2.5 xl:py-3.5 rounded-xl transition-all relative overflow-hidden group ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-white border border-cyan-400/20"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 xl:gap-3 relative z-10">
                        <Icon 
                          className={`w-4 h-4 xl:w-5 xl:h-5 transition-all ${
                            isActive ? "text-cyan-400" : "text-slate-500 group-hover:text-cyan-400"
                          }`}
                          strokeWidth={1.5}
                        />
                        <span className="font-medium text-sm xl:text-base">{item.name}</span>
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
                          className="absolute right-3 xl:right-4 top-1/2 -translate-y-1/2"
                        >
                          <ChevronRight className="w-3 h-3 xl:w-4 xl:h-4 text-cyan-400" strokeWidth={2} />
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
                className="mt-auto pt-6 xl:pt-8"
              >
                <div className="p-3 xl:p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-400/20">
                  <div className="flex items-center gap-2 xl:gap-3 mb-2 xl:mb-3">
                    <Sparkles className="w-4 h-4 xl:w-5 xl:h-5 text-purple-400" strokeWidth={2} />
                    <span className="text-xs xl:text-sm font-semibold text-white">XAI Pro</span>
                  </div>
                  <p className="text-[10px] xl:text-xs text-slate-400 mb-2 xl:mb-3">
                    Advanced explainability features
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-2.5 xl:px-3 py-1.5 xl:py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-[10px] xl:text-xs font-semibold text-white"
                  >
                    Upgrade Now
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden bg-gradient-to-b from-slate-900/50 to-slate-950/50 border-b border-white/10 backdrop-blur-sm overflow-hidden"
                >
                  <div className="p-4">
                    <nav className="space-y-1.5 mb-4">
                      {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = item.name === "Dashboard";
                        
                        return (
                          <motion.button
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`w-full text-left px-3 py-2.5 rounded-lg transition-all ${
                              isActive
                                ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-white border border-cyan-400/20"
                                : "text-slate-400 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Icon 
                                className={`w-4 h-4 ${
                                  isActive ? "text-cyan-400" : "text-slate-500"
                                }`}
                                strokeWidth={1.5}
                              />
                              <span className="font-medium text-sm">{item.name}</span>
                            </div>
                          </motion.button>
                        );
                      })}
                    </nav>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1 bg-gradient-to-br from-slate-950/30 to-slate-900/30 p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              {/* Tabs */}
              <div className="flex gap-1 mb-6 sm:mb-8 p-1 bg-white/5 rounded-lg sm:rounded-xl border border-white/10 w-full sm:w-fit overflow-x-auto">
                {["overview", "analytics", "insights"].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 capitalize transition-all relative font-medium rounded-md sm:rounded-lg text-xs sm:text-sm whitespace-nowrap ${
                      activeTab === tab
                        ? "text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-md sm:rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Stats Grid */}
              <motion.div 
                key={`stats-${activeTab}`}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8"
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
                {currentStats.map((stat, index) => {
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
                        y: -4,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Card className="p-3 sm:p-4 lg:p-5 group cursor-pointer relative overflow-hidden border-white/10 hover:border-cyan-400/30">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                          initial={false}
                        />
                        
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                            <div className="text-slate-400 text-[10px] sm:text-xs lg:text-sm font-medium">{stat.title}</div>
                            <motion.div
                              animate={isHovered ? {
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                              } : {}}
                              transition={{ duration: 0.5 }}
                              className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${stat.gradient} bg-opacity-10`}
                            >
                              <Icon 
                                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" 
                                style={{ color: stat.color }}
                                strokeWidth={1.5}
                              />
                            </motion.div>
                          </div>
                          
                          <motion.div 
                            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            {stat.value}
                          </motion.div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-green-400 text-[10px] sm:text-xs lg:text-sm font-medium">
                            <div className="flex items-center gap-1">
                              <motion.div
                                animate={{ y: [-2, 0, -2] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4" strokeWidth={2} />
                              </motion.div>
                              <span>{stat.change}</span>
                            </div>
                            <span className="text-slate-500 text-[9px] sm:text-[10px] lg:text-xs">{stat.changeLabel}</span>
                          </div>
                        </div>
                        
                        {/* Glow effect */}
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.2, scale: 1.5 }}
                            exit={{ opacity: 0 }}
                            className="absolute -inset-4 rounded-full blur-2xl hidden lg:block"
                            style={{ backgroundColor: stat.color }}
                          />
                        )}
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Charts Area */}
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8">
                {/* Bar Chart */}
                <motion.div
                  key={`bar-${activeTab}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="h-64 sm:h-72 lg:h-80 p-4 sm:p-5 lg:p-6 group hover:shadow-xl transition-shadow border-white/10">
                    <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-500/10">
                          <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-sm sm:text-base lg:text-lg font-semibold text-white">{chartTitles.bar.title}</div>
                          <div className="text-[10px] sm:text-xs text-slate-400">{chartTitles.bar.subtitle}</div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-cyan-400 opacity-50"
                      >
                        <Activity className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                      </motion.div>
                    </div>
                    
                    <div className="h-32 sm:h-40 lg:h-48 flex items-end gap-1.5 sm:gap-2 lg:gap-3 px-1 sm:px-2">
                      {currentChartData.map((height, i) => (
                        <motion.div
                          key={`${activeTab}-${i}`}
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
                          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-md sm:rounded-t-lg opacity-70 group-hover/bar:opacity-100 transition-opacity shadow-lg shadow-cyan-500/20" />
                          
                          <motion.div
                            className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-slate-800 border border-cyan-400/30 text-[9px] sm:text-xs text-white opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap"
                            initial={false}
                          >
                            {Math.round(height)}%
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between mt-4 sm:mt-5 lg:mt-6 text-[9px] sm:text-xs text-slate-500 font-medium">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <span key={day} className="hidden sm:inline">{day}</span>
                      ))}
                      {["M", "T", "W", "T", "F", "S"].map((day, i) => (
                        <span key={i} className="sm:hidden">{day}</span>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* Line Chart */}
                <motion.div
                  key={`line-${activeTab}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card className="h-64 sm:h-72 lg:h-80 p-4 sm:p-5 lg:p-6 group hover:shadow-xl transition-shadow border-white/10">
                    <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/10">
                          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-sm sm:text-base lg:text-lg font-semibold text-white">{chartTitles.line.title}</div>
                          <div className="text-[10px] sm:text-xs text-slate-400">{chartTitles.line.subtitle}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"
                        />
                        <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Live</span>
                      </div>
                    </div>
                    
                    <div className="h-32 sm:h-40 lg:h-48 relative">
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
                          strokeWidth="2.5"
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
                              r="2"
                              fill="#06b6d4"
                              initial={{ scale: 0 }}
                              animate={{ scale: [0, 1.5, 1] }}
                              transition={{ delay: i * 0.15, duration: 0.5 }}
                            >
                              <animate
                                attributeName="r"
                                values="2;3;2"
                                dur="2s"
                                repeatCount="indefinite"
                                begin={`${i * 0.3}s`}
                              />
                            </motion.circle>
                            <circle
                              cx={point[0]}
                              cy={point[1]}
                              r="4"
                              fill="#06b6d4"
                              opacity="0.2"
                            >
                              <animate
                                attributeName="r"
                                values="4;6;4"
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
                    
                    <div className="flex justify-between mt-4 sm:mt-5 lg:mt-6 text-[9px] sm:text-xs text-slate-500 font-medium">
                      {["0h", "4h", "8h", "12h", "16h", "20h", "24h"].map((time) => (
                        <span key={time}>{time}</span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Recent Insights */}
              <motion.div
                key={`insights-${activeTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="p-4 sm:p-5 lg:p-6 border-white/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                        <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-semibold text-white">
                          {activeTab === "analytics" ? "Analysis Updates" : activeTab === "insights" ? "Deep Insights" : "XAI Activity Feed"}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-400">Real-time explainability updates</div>
                      </div>
                    </div>
                    
                    <motion.button 
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs sm:text-sm text-slate-300 hover:text-white transition-all font-medium"
                      whileHover={{ scale: 1.05, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View All
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2} />
                    </motion.button>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <AnimatePresence mode="wait">
                      {currentInsights.map((insight, index) => {
                        const status = statusConfig[insight.status as keyof typeof statusConfig];
                        const StatusIcon = status.icon;
                        
                        return (
                          <motion.div
                            key={`${activeTab}-${insight.id}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ 
                              x: 4,
                              backgroundColor: "rgba(255, 255, 255, 0.03)",
                              transition: { duration: 0.2 }
                            }}
                            className="flex items-start gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer group relative overflow-hidden border border-white/5 hover:border-white/10"
                          >
                            <div className="relative flex-shrink-0">
                              <motion.div 
                                className="p-1.5 sm:p-2 rounded-lg"
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
                                  className="w-3 h-3 sm:w-4 sm:h-4" 
                                  style={{ color: status.color }}
                                  strokeWidth={2}
                                />
                              </motion.div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-white text-sm sm:text-base mb-0.5 sm:mb-1 group-hover:text-cyan-400 transition-colors">
                                {insight.title}
                              </div>
                              <div className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2 sm:line-clamp-none">
                                {insight.description}
                              </div>
                              <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" strokeWidth={2} />
                                  {insight.timestamp}
                                </span>
                                <span className="hidden sm:inline">•</span>
                                <span className="hidden sm:inline">{insight.category}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-end gap-2 flex-shrink-0">
                              <motion.div
                                className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold border"
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
                              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"
                              initial={false}
                            >
                              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" strokeWidth={2} />
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                  
                  {/* Footer actions */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                    <div className="text-xs sm:text-sm text-slate-400">
                      <span className="text-white font-semibold">{currentInsights.length}</span> active {activeTab === "analytics" ? "analyses" : "insights"}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-400/20 rounded-lg text-xs sm:text-sm text-cyan-400 transition-all font-medium"
                    >
                      <Download className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2} />
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