
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mx-auto mb-12",
        {
          "text-center": alignment === "center",
          "text-left": alignment === "left",
          "text-right": alignment === "right",
          "mx-0": alignment !== "center",
        },
        className
      )}
    >
      <h2 className="text-section-mobile md:text-section mb-4 animate-fade-in">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg text-gray-300", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
