
import React from "react";
import { cn } from "@/lib/utils";
import { Category } from "@/lib/forum-types";
import { ArrowRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface CardCategoryProps {
  category: Category;
  className?: string;
}

export function CardCategory({ category, className }: CardCategoryProps) {
  const IconComponent = LucideIcons[category.icon as keyof typeof LucideIcons] as LucideIcon;
  
  return (
    <div 
      className={cn(
        "category-card group backdrop-blur-sm",
        "animate-fade-in transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue/10 text-blue transition-colors group-hover:bg-blue/20">
            {IconComponent && (
              <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
            )}
          </div>
          <h3 className="text-lg font-semibold transition-colors group-hover:text-blue">
            {category.name}
          </h3>
        </div>
        <a 
          href={`/category/${category.id}`} 
          className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
          aria-label={`View ${category.name} category`}
        >
          <ArrowRight className="w-4 h-4 text-blue" />
        </a>
      </div>
      
      <p className="text-gray-300 text-sm mb-3 transition-colors group-hover:text-white">
        {category.description}
      </p>
      
      <div className="flex justify-between text-xs text-gray-400">
        <span className="transition-colors group-hover:text-blue">
          {category.threadCount} threads
        </span>
        <span className="transition-colors group-hover:text-blue">
          Last active {formatDistanceToNow(category.lastActive)} ago
        </span>
      </div>
    </div>
  );
}
