"use client";

import { useState } from "react";
import { cn } from "@/src/lib/utils";
import { navItems } from "@/src/lib/mock-data";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(navItems[0].id);

  return (
    <aside
      className={cn(
        "w-64 bg-background-card border-r border-white/10 p-4 flex flex-col",
        className
      )}
    >
      {/* Logo */}
      <div className="mb-8 px-4">
        <div className="text-2xl font-bold text-gradient">Xai</div>
        <p className="text-xs text-text-tertiary mt-1">Intelligence Workspace</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
              activeItem === item.id
                ? "bg-brand-primary/10 text-brand-primary"
                : "text-text-secondary hover:bg-background-elevated hover:text-text-primary"
            )}
          >
            <span className="text-lg">{getIcon(item.icon)}</span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* User Section */}
      <div className="border-t border-white/10 pt-4 mt-4">
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-background-elevated cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-sm font-bold">
            U
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">User Name</div>
            <div className="text-xs text-text-tertiary">user@xai.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

// Helper function to render icons
function getIcon(iconName: string) {
  const icons: Record<string, string> = {
    LayoutDashboard: "📊",
    BarChart3: "📈",
    Lightbulb: "💡",
    Workflow: "⚙️",
    Settings: "🔧",
  };
  return icons[iconName] || "•";
}