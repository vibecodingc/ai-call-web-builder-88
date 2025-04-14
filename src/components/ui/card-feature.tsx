
import { cn } from "@/lib/utils";
import React from "react";

interface CardFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CardFeature({ title, description, icon, className, style }: CardFeatureProps) {
  return (
    <div 
      className={cn(
        "bg-card rounded-xl p-6 card-hover shadow-lg relative overflow-hidden glass-effect",
        className
      )}
      style={style}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue to-blue-light opacity-50"></div>
      <div className="text-blue mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
