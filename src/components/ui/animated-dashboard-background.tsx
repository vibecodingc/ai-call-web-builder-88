
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedDashboardBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedDashboardBackground({ className, children }: AnimatedDashboardBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current = { x, y };

      // Create radial gradient effect following cursor
      container.style.background = `
        radial-gradient(
          600px circle at ${x}px ${y}px,
          rgba(59, 130, 246, 0.15),
          transparent 40%
        )
      `;
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative min-h-[400px] rounded-xl bg-navy-light/50 backdrop-blur-3xl transition-all duration-500",
        "border border-white/10 shadow-lg",
        "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-transparent before:to-white/5",
        className
      )}
    >
      {children}
    </div>
  );
}
