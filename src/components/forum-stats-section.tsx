
import React from "react";
import { Users, MessageSquare, ThumbsUp, Clock } from "lucide-react";
import { createRevealClass } from "@/lib/animation";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

function StatCard({ icon, value, label, className }: StatCardProps) {
  return (
    <div className={`bg-card rounded-xl p-6 flex items-center border border-white/10 ${className}`}>
      <div className="p-3 bg-blue/10 rounded-lg text-blue mr-4">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  );
}

export function ForumStatsSection() {
  return (
    <section className="py-16 px-6 bg-navy-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={createRevealClass(0.1, "up")}>
            <StatCard 
              icon={<Users className="w-6 h-6" />} 
              value="15,420+"
              label="Active Members"
            />
          </div>
          <div className={createRevealClass(0.2, "up")}>
            <StatCard 
              icon={<MessageSquare className="w-6 h-6" />} 
              value="27,892"
              label="Total Threads"
            />
          </div>
          <div className={createRevealClass(0.3, "up")}>
            <StatCard 
              icon={<ThumbsUp className="w-6 h-6" />} 
              value="542K+"
              label="Helpful Votes"
            />
          </div>
          <div className={createRevealClass(0.4, "up")}>
            <StatCard 
              icon={<Clock className="w-6 h-6" />} 
              value="5 mins"
              label="Avg. Response Time"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
