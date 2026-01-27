"use client";

import { HTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

interface ChartProps extends HTMLAttributes<HTMLDivElement> {
  type?: "line" | "bar" | "area";
  data?: number[];
  height?: number;
}

export default function Chart({ 
  type = "line", 
  data = [40, 70, 50, 80, 65, 90, 75], 
  height = 200,
  className,
  ...props 
}: ChartProps) {
  const maxValue = Math.max(...data);
  
  return (
    <div className={cn("relative", className)} style={{ height }} {...props}>
      {type === "bar" && (
        <div className="h-full flex items-end gap-2">
          {data.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-linear-to-t from-brand-primary to-brand-primary-light rounded-t hover:opacity-80 transition-opacity cursor-pointer"
              style={{ height: `${(value / maxValue) * 100}%` }}
              title={`Value: ${value}`}
            />
          ))}
        </div>
      )}

      {type === "line" && (
        <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <path
            d={generateLinePath(data)}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="drop-shadow-lg"
          />
          {data.map((value, i) => {
            const x = (i / (data.length - 1)) * 100;
            const y = 50 - (value / maxValue) * 45;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="1.5"
                fill="#06b6d4"
                className="drop-shadow"
              />
            );
          })}
        </svg>
      )}

      {type === "area" && (
        <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={generateAreaPath(data)}
            fill="url(#areaGradient)"
          />
          <path
            d={generateLinePath(data)}
            stroke="#6366f1"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      )}
    </div>
  );
}

function generateLinePath(data: number[]): string {
  const maxValue = Math.max(...data);
  return data
    .map((value, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 50 - (value / maxValue) * 45;
      return `${i === 0 ? "M" : "L"} ${x},${y}`;
    })
    .join(" ");
}

function generateAreaPath(data: number[]): string {
  const maxValue = Math.max(...data);
  const linePath = data
    .map((value, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 50 - (value / maxValue) * 45;
      return `${i === 0 ? "M" : "L"} ${x},${y}`;
    })
    .join(" ");
  return `${linePath} L 100,50 L 0,50 Z`;
}