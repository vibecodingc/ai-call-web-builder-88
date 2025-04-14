
import { cn } from "@/lib/utils";
import React from "react";

interface BadgeUserCountProps {
  count: string;
  className?: string;
}

export function BadgeUserCount({ count, className }: BadgeUserCountProps) {
  return (
    <div className={cn("inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full", className)}>
      <div className="flex -space-x-2 mr-2">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={`w-6 h-6 rounded-full ring-2 ring-navy bg-gradient-to-br from-gray-300 to-gray-400`}
          />
        ))}
      </div>
      <span className="text-sm font-medium">{count}</span>
    </div>
  );
}
