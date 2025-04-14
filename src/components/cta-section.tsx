
import React from "react";
import { ButtonGradient } from "@/components/ui/button-gradient";

export function CTASection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue to-blue-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-white/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full filter blur-3xl"></div>
      
      {/* Floating UI elements */}
      <div className="absolute top-16 right-[10%] w-16 h-16 bg-white/10 rounded-lg animate-float opacity-50 hidden md:flex items-center justify-center">
        <div className="w-8 h-4 bg-white/40 rounded-sm"></div>
      </div>
      <div className="absolute bottom-16 left-[15%] w-12 h-12 bg-white/10 rounded-full animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-[25%] w-8 h-8 bg-white/10 rounded-md animate-float opacity-50" style={{ animationDelay: '0.7s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-section-mobile md:text-section mb-6 animate-fade-in">
            Don't Miss The Voice AI Opportunity
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of businesses using AI voice agents to save time, improve customer experience, and scale operations.
          </p>
          <ButtonGradient size="lg" className="bg-white text-blue hover:bg-white/90 border-white">
            Start Your Free Trial
          </ButtonGradient>
          
          <div className="mt-12 relative max-w-xs mx-auto">
            <div className="bg-navy rounded-xl p-4 shadow-xl border border-white/20 overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Call Analytics</h3>
                <span className="text-xs bg-blue/20 text-blue px-2 py-1 rounded-full">Live</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-navy-light p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Today</span>
                    <span className="text-sm font-medium">24 calls</span>
                  </div>
                  <div className="h-1.5 bg-navy rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-blue to-blue-light"></div>
                  </div>
                </div>
                
                <div className="bg-navy-light p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Avg. duration</span>
                    <span className="text-sm font-medium">4m 12s</span>
                  </div>
                  <div className="h-1.5 bg-navy rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-blue to-blue-light"></div>
                  </div>
                </div>
                
                <div className="bg-navy-light p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Resolution rate</span>
                    <span className="text-sm font-medium">87%</span>
                  </div>
                  <div className="h-1.5 bg-navy rounded-full overflow-hidden">
                    <div className="h-full w-[87%] bg-gradient-to-r from-blue to-blue-light"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
