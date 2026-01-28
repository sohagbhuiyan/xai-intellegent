
// export default Badge;
"use client";

import { HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error" | "info";
  children: React.ReactNode;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "default", children, ...props }, ref) => {
    const variants = {
      default: {
        bg: "rgba(99, 102, 241, 0.1)",
        border: "rgba(99, 102, 241, 0.3)",
        color: "#6366f1"
      },
      success: {
        bg: "rgba(16, 185, 129, 0.1)",
        border: "rgba(16, 185, 129, 0.3)",
        color: "#10b981"
      },
      warning: {
        bg: "rgba(234, 179, 8, 0.1)",
        border: "rgba(234, 179, 8, 0.3)",
        color: "#eab308"
      },
      error: {
        bg: "rgba(239, 68, 68, 0.1)",
        border: "rgba(239, 68, 68, 0.3)",
        color: "#ef4444"
      },
      info: {
        bg: "rgba(6, 182, 212, 0.1)",
        border: "rgba(6, 182, 212, 0.3)",
        color: "#06b6d4"
      }
    };

    const style = variants[variant];

    return (
      <div
        ref={ref}
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${className}`}
        style={{
          backgroundColor: style.bg,
          borderColor: style.border,
          color: style.color
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;