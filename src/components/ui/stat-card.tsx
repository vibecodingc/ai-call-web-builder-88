
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className }: StatCardProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl bg-white/10 p-6 backdrop-blur-lg border border-white/20",
        "transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:scale-[1.02]",
        "before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-white/5",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{value}</h3>
          {trend && (
            <p className={cn(
              "mt-1 text-sm",
              trend.isPositive ? "text-green-400" : "text-red-400"
            )}>
              {trend.isPositive ? "+" : "-"}{trend.value}%
            </p>
          )}
        </div>
        <div className="rounded-full bg-white/10 p-3">
          <Icon className="h-6 w-6 text-blue" />
        </div>
      </div>
    </div>
  );
}
