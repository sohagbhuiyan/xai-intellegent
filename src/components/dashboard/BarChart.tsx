"use client";

import Card from "@/src/components/ui/Card";
import Chart from "@/src/components/ui/Chart";
import { chartData } from "@/src/lib/mock-data";

interface BarChartProps {
  title?: string;
}

export default function BarChart({ title = "Performance Metrics" }: BarChartProps) {
  const data = chartData.bar.map((item) => item.value);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button className="p-2 hover:bg-background-elevated rounded-lg transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="mb-4">
        <Chart type="bar" data={data} height={200} />
      </div>

      {/* Categories */}
      <div className="grid grid-cols-4 gap-2 pt-4 border-t border-white/10">
        {chartData.bar.map((item, i) => (
          <div key={i} className="text-center">
            <div className="text-xs text-text-tertiary mb-1">{item.category}</div>
            <div className="text-sm font-semibold">{item.value.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}