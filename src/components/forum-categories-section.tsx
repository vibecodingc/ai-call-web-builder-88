
import React from "react";
import { Shield, Activity, Phone, AlertCircle, Gauge, Headphones } from "lucide-react";
import { AnimatedDashboardBackground } from "@/components/ui/animated-dashboard-background";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ForumCategoriesSection() {
  return (
    <section className="py-16 px-6 overflow-hidden" id="categories">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(160px,auto)]">
          {/* Main Feature Card */}
          <div className="md:col-span-2 md:row-span-2">
            <AnimatedDashboardBackground className="h-full">
              <div className="relative h-full">
                <AspectRatio ratio={16 / 9} className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Security Dashboard"
                    className="rounded-t-lg object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="p-8 absolute bottom-0 left-0 right-0">
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary/10 backdrop-blur-lg flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-white">Security Dashboard</h3>
                      <p className="text-white/80">
                        Real-time monitoring and advanced threat detection for your system
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                      </div>
                      <p className="text-sm text-white/80 mt-2">System Security Score: 85%</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedDashboardBackground>
          </div>

          {/* Quick Stats Card */}
          <AnimatedDashboardBackground className="p-6 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
              alt="Active Threats"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 flex flex-col h-full backdrop-blur-sm">
              <Activity className="w-6 h-6 text-primary mb-4" />
              <h4 className="text-lg font-medium mb-2">Active Threats</h4>
              <div className="text-3xl font-bold text-primary">0</div>
              <p className="text-sm text-muted-foreground mt-2">All systems operational</p>
            </div>
          </AnimatedDashboardBackground>

          {/* Monitoring Status */}
          <AnimatedDashboardBackground className="p-6 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
              alt="System Status"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 flex flex-col h-full backdrop-blur-sm">
              <Gauge className="w-6 h-6 text-primary mb-4" />
              <h4 className="text-lg font-medium mb-2">System Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Active Monitoring</span>
              </div>
            </div>
          </AnimatedDashboardBackground>

          {/* Support Card */}
          <AnimatedDashboardBackground className="p-6 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="24/7 Support"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 flex flex-col h-full backdrop-blur-sm">
              <Headphones className="w-6 h-6 text-primary mb-4" />
              <h4 className="text-lg font-medium mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Always available for assistance</p>
            </div>
          </AnimatedDashboardBackground>

          {/* Alerts Card */}
          <AnimatedDashboardBackground className="p-6 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
              alt="Recent Alerts"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 flex flex-col h-full backdrop-blur-sm">
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
