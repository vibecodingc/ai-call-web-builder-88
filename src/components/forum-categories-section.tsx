
import React from "react";
import { Phone, PhoneCall, CheckCircle, Clock } from "lucide-react";
import { AnimatedDashboardBackground } from "@/components/ui/animated-dashboard-background";
import { StatCard } from "@/components/ui/stat-card";
import { CallStatsChart } from "@/components/ui/call-stats-chart";

export function ForumCategoriesSection() {
  return (
    <section className="py-16 px-6 overflow-hidden" id="categories">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats Section */}
          <div className="lg:col-span-1 space-y-6">
            <StatCard
              title="Today's Calls"
              value="245"
              icon={Phone}
              trend={{ value: 12, isPositive: true }}
            />
            <StatCard
              title="Calls Triggered"
              value="1,234"
              icon={PhoneCall}
              trend={{ value: 8, isPositive: true }}
            />
            <StatCard
              title="Calls Completed"
              value="189"
              icon={CheckCircle}
              trend={{ value: 5, isPositive: true }}
            />
            <StatCard
              title="Average Duration"
              value="5m 23s"
              icon={Clock}
            />
          </div>

          {/* Chart Section */}
          <div className="lg:col-span-2">
            <AnimatedDashboardBackground className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-white">Weekly Call Statistics</h2>
              <CallStatsChart />
            </AnimatedDashboardBackground>
          </div>
        </div>
      </div>
    </section>
  );
}
