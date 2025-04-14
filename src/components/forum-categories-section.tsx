
import React from "react";
import { Shield, Activity, Phone, AlertCircle, Gauge, Headphones } from "lucide-react";
import { AnimatedDashboardBackground } from "@/components/ui/animated-dashboard-background";

export function ForumCategoriesSection() {
  return (
    <section className="py-16 px-6 overflow-hidden" id="categories">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(160px,auto)]">
          {/* Main Feature Card */}
          <div className="md:col-span-2 md:row-span-2">
            <AnimatedDashboardBackground className="h-full p-8">
              <div className="flex flex-col h-full justify-between">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Security Dashboard</h3>
                  <p className="text-muted-foreground">
                    Real-time monitoring and advanced threat detection for your system
                  </p>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-primary/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">System Security Score: 85%</p>
                </div>
              </div>
            </AnimatedDashboardBackground>
          </div>

          {/* Quick Stats Card */}
          <AnimatedDashboardBackground className="p-6">
            <div className="flex flex-col h-full">
              <Activity className="w-6 h-6 text-primary mb-4" />
              <h4 className="text-lg font-medium mb-2">Active Threats</h4>
              <div className="text-3xl font-bold text-primary">0</div>
              <p className="text-sm text-muted-foreground mt-2">All systems operational</p>
            </div>
          </AnimatedDashboardBackground>

          {/* Monitoring Status */}
          <AnimatedDashboardBackground className="p-6">
            <div className="flex flex-col h-full">
              <Gauge className="w-6 h-6 text-primary mb-4" />
              <h4 className="text-lg font-medium mb-2">System Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Active Monitoring</span>
              </div>
            </div>
          </AnimatedDashboardBackground>

          {/* Support Card */}
          <AnimatedDashboardBackground className="p-6">
            <div className="flex flex-col h-full">
              <Headphones className="w-6 h-6 text-primary mb-4" />
              <h4 className="text-lg font-medium mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Always available for assistance</p>
            </div>
          </AnimatedDashboardBackground>

          {/* Alerts Card */}
          <AnimatedDashboardBackground className="p-6">
            <div className="flex flex-col h-full">
              <AlertCircle className="w-6 h-6 text-primary mb-4" />
              <h4 className="text-lg font-medium mb-2">Recent Alerts</h4>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">No recent alerts</div>
              </div>
            </div>
          </AnimatedDashboardBackground>
        </div>
      </div>
    </section>
  );
}
