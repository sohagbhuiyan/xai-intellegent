"use client";

import Card from "@/src/components/ui/Card";
import Chart from "@/src/components/ui/Chart";
import { chartData } from "@/src/lib/mock-data";

interface LineChartProps {
  title?: string;
}

export default function LineChart({ title = "Activity Trend" }: LineChartProps) {
  const data = chartData.line.map((item) => item.value);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <select className="px-3 py-1 bg-background-elevated border border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary">
          <option>Last 6 months</option>
          <option>Last 12 months</option>
          <option>All time</option>
        </select>
      </div>

      <div className="mb-4">
        <Chart type="line" data={data} height={200} />
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-6 text-sm">
          {chartData.line.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
              <span className="text-text-secondary">{item.month}</span>
            </div>
          ))}
        </div>
        <div className="text-sm text-text-tertiary">Updated 5 min ago</div>
      </div>
    </Card>
  );
}