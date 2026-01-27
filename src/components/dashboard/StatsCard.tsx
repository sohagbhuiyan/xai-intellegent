"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/src/components/ui/Card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon?: string;
  delay?: number;
}

export default function StatsCard({
  title,
  value,
  change,
  trend,
  icon,
  delay = 0,
}: StatsCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isHovered) {
      controls.start({
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 }
      });
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        y: -8,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="p-6 relative overflow-hidden group cursor-pointer">
        {/* Background gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-brand-primary/10 via-brand-secondary/5 to-transparent opacity-0 group-hover:opacity-100"
          initial={false}
          transition={{ duration: 0.3 }}
        />

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.8 }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <motion.div 
              className="text-sm text-text-secondary font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {title}
            </motion.div>
            {icon && (
              <motion.div 
                className="text-2xl"
                animate={controls}
              >
                {icon}
              </motion.div>
            )}
          </div>

          <div className="mb-3">
            <motion.div 
              className="text-3xl font-bold bg-linear-to-r from-text-primary to-brand-primary bg-clip-text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.2, type: "spring" }}
            >
              {value}
            </motion.div>
          </div>

          <div className="flex items-center gap-2">
            <motion.div
              className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${
                trend === "up" 
                  ? "bg-green-500/10 text-green-500" 
                  : "bg-red-500/10 text-red-500"
              }`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: delay + 0.3 }}
            >
              <motion.svg 
                className="w-4 h-4"
                animate={{ 
                  y: trend === "up" ? [-1, 0, -1] : [0, 1, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {trend === "up" ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                )}
              </motion.svg>
              <span>{change}</span>
            </motion.div>
            <motion.div 
              className="text-xs text-text-tertiary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + 0.4 }}
            >
              vs last period
            </motion.div>
          </div>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-brand-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
}