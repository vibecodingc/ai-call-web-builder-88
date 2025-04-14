
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import React from "react";

interface BadgeUserCountProps {
  count: string;
  className?: string;
  tooltip?: string;
}

export function BadgeUserCount({ count, className, tooltip }: BadgeUserCountProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className={cn(
          "inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full transition-all hover:bg-white/20",
          "animate-fade-in-up",
          className
        )}>
          <div className="flex -space-x-2 mr-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`w-6 h-6 rounded-full ring-2 ring-navy bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse-slow`}
              />
            ))}
          </div>
          <span className="text-sm font-medium">{count}</span>
        </div>
      </TooltipTrigger>
      {tooltip && <TooltipContent>{tooltip}</TooltipContent>}
    </Tooltip>
  );
}
