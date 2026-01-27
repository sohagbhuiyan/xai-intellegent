/**
 * Mock data for dashboard and components
 */

export const statsData = [
  {
    id: 1,
    title: "Total Insights",
    value: "2,543",
    change: "+12.5%",
    trend: "up" as const,
    icon: "TrendingUp",
  },
  {
    id: 2,
    title: "Data Processed",
    value: "45.2TB",
    change: "+8.2%",
    trend: "up" as const,
    icon: "Database",
  },
  {
    id: 3,
    title: "Active Automations",
    value: "127",
    change: "+23.1%",
    trend: "up" as const,
    icon: "Zap",
  },
  {
    id: 4,
    title: "Accuracy Rate",
    value: "98.7%",
    change: "+2.3%",
    trend: "up" as const,
    icon: "Target",
  },
];

export const chartData = {
  line: [
    { month: "Jan", value: 2400 },
    { month: "Feb", value: 1398 },
    { month: "Mar", value: 9800 },
    { month: "Apr", value: 3908 },
    { month: "May", value: 4800 },
    { month: "Jun", value: 3800 },
  ],
  bar: [
    { category: "Analysis", value: 4000 },
    { category: "Processing", value: 3000 },
    { category: "Insights", value: 2000 },
    { category: "Reports", value: 2780 },
  ],
};

export const recentInsights = [
  {
    id: 1,
    title: "Customer churn prediction model ready",
    description: "95% accuracy on validation dataset",
    timestamp: "12:34 PM",
    status: "success" as const,
    priority: "high" as const,
  },
  {
    id: 2,
    title: "Anomaly detected in transaction patterns",
    description: "Requires immediate attention",
    timestamp: "11:20 AM",
    status: "warning" as const,
    priority: "critical" as const,
  },
  {
    id: 3,
    title: "Monthly report generated successfully",
    description: "Revenue insights for Q4 2024",
    timestamp: "10:15 AM",
    status: "success" as const,
    priority: "medium" as const,
  },
  {
    id: 4,
    title: "New data source connected",
    description: "Integration with CRM completed",
    timestamp: "09:45 AM",
    status: "info" as const,
    priority: "low" as const,
  },
];

export const navItems = [
  { id: 1, name: "Dashboard", icon: "LayoutDashboard", href: "#dashboard" },
  { id: 2, name: "Analytics", icon: "BarChart3", href: "#analytics" },
  { id: 3, name: "Insights", icon: "Lightbulb", href: "#insights" },
  { id: 4, name: "Automation", icon: "Workflow", href: "#automation" },
  { id: 5, name: "Settings", icon: "Settings", href: "#settings" },
];

export const insightFlowSteps = [
  {
    id: 1,
    number: "01",
    title: "Ingest Data",
    description: "Connect your data sources automatically. Support for databases, APIs, files, and real-time streams.",
    icon: "Database",
    color: "#6366f1",
  },
  {
    id: 2,
    number: "02",
    title: "Analyze with AI",
    description: "Our AI processes and structures information using advanced machine learning models.",
    icon: "Brain",
    color: "#8b5cf6",
  },
  {
    id: 3,
    number: "03",
    title: "Generate Insights",
    description: "Receive clear, actionable recommendations tailored to your business objectives.",
    icon: "Sparkles",
    color: "#06b6d4",
  },
];

export const features = [
  {
    id: 1,
    title: "Real-time Processing",
    description: "Process data streams in real-time with low latency",
  },
  {
    id: 2,
    title: "Advanced Analytics",
    description: "Leverage machine learning for predictive insights",
  },
  {
    id: 3,
    title: "Automated Workflows",
    description: "Set up automated actions based on insights",
  },
  {
    id: 4,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with full compliance",
  },
];