"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface DataMorphProps {
  className?: string;
}

interface Position {
  x: number;
  y: number;
}

export default function DataMorph({ className }: DataMorphProps) {
  const [isStructured, setIsStructured] = useState(false);
  const [randomPositions] = useState<Position[]>(() =>
    Array.from({ length: 16 }, () => ({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsStructured((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Grid positions for structured state
  const gridPositions: Position[] = Array.from({ length: 16 }, (_, i) => ({
    x: ((i % 4) - 1.5) * 60,
    y: (Math.floor(i / 4) - 1.5) * 60,
  }));

  return (
    <div className={className}>
      <svg
        viewBox="-150 -150 300 300"
        className="w-full h-full"
        style={{ maxWidth: "400px", maxHeight: "400px" }}
      >
        {/* Connection lines (only in structured mode) */}
        {isStructured &&
          gridPositions.map((pos, i) => {
            if (i % 4 !== 3) {
              const nextPos = gridPositions[i + 1];
              return (
                <motion.line
                  key={`h-${i}`}
                  x1={pos.x}
                  y1={pos.y}
                  x2={nextPos.x}
                  y2={nextPos.y}
                  stroke="#6366f1"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              );
            }
            return null;
          })}

        {isStructured &&
          gridPositions.map((pos, i) => {
            if (i < 12) {
              const nextPos = gridPositions[i + 4];
              return (
                <motion.line
                  key={`v-${i}`}
                  x1={pos.x}
                  y1={pos.y}
                  x2={nextPos.x}
                  y2={nextPos.y}
                  stroke="#6366f1"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              );
            }
            return null;
          })}

        {/* Data points */}
        {Array.from({ length: 16 }).map((_, i) => {
          const pos = isStructured ? gridPositions[i] : randomPositions[i];
          return (
            <motion.circle
              key={i}
              cx={0}
              cy={0}
              r="6"
              fill="#06b6d4"
              animate={{
                x: pos.x,
                y: pos.y,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.1}s`}
              />
            </motion.circle>
          );
        })}
      </svg>

      {/* Label */}
      <div className="text-center mt-4 text-sm text-text-secondary">
        {isStructured ? "Structured Data" : "Raw Data"}
      </div>
    </div>
  );
}