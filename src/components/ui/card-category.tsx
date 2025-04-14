
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
  // Dynamically get the icon component
  const IconComponent = LucideIcons[category.icon as keyof typeof LucideIcons] as LucideIcon;
  
  return (
    <div className={cn("category-card group", className)}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue/10 text-blue">
            {IconComponent && <IconComponent className="w-5 h-5" />}
          </div>
          <h3 className="text-lg font-semibold">{category.name}</h3>
        </div>
        <a 
          href={`/category/${category.id}`} 
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={`View ${category.name} category`}
        >
          <ArrowRight className="w-4 h-4 text-blue" />
        </a>
      </div>
      <p className="text-gray-300 text-sm mb-3">{category.description}</p>
      <div className="flex justify-between text-xs text-gray-400">
        <span>{category.threadCount} threads</span>
        <span>Last active {formatDistanceToNow(category.lastActive)} ago</span>
      </div>
    </div>
  );
}
