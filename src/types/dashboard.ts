/**
 * Dashboard related TypeScript interfaces
 */

export interface StatCard {
  id: number;
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
}

export interface ChartDataPoint {
  month?: string;
  category?: string;
  value: number;
}

export interface Insight {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  status: "success" | "warning" | "error" | "info";
  priority: "critical" | "high" | "medium" | "low";
}

export interface NavItem {
  id: number;
  name: string;
  icon: string;
  href: string;
}

export interface InsightFlowStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
}