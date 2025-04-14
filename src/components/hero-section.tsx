
import React from "react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { BadgeUserCount } from "@/components/ui/badge-user-count";

export function HeroSection() {
  return (
    <section className="bg-navy relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-light/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <BadgeUserCount count="5,000+ users" className="mb-6 mx-auto md:mx-0" />
            <h1 className="text-hero-mobile md:text-hero mb-6 animate-fade-in">
              AI Voice Agents For Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Chatbots can't solve complex customer service. A few minutes to create voice call agents.
            </p>
            <ButtonGradient size="lg" withArrow>
              Get Your Free Call
            </ButtonGradient>
          </div>
          <div className="relative">
            <div className="bg-navy-light rounded-xl p-6 shadow-xl border border-white/10 overflow-hidden animate-fade-in">
              <div className="bg-gradient-to-b from-blue/20 to-transparent absolute inset-0"></div>
              <div className="relative">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                  <span className="text-sm text-gray-400">Today</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-card p-4 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Today's calls</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold mr-2">162</span>
                      <span className="text-green-500 text-xs">+9%</span>
                    </div>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Calls triggered</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold mr-2">1.8K</span>
                      <span className="text-green-500 text-xs">+12%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-4 rounded-lg mb-6">
                  <h4 className="font-medium mb-3">Calls Overview</h4>
                  <div className="h-32 w-full bg-navy-light rounded-md overflow-hidden relative">
                    {/* Simulated chart */}
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                      {[30, 45, 25, 60, 35, 75, 40, 50, 65, 80, 55].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 mx-0.5"
                          style={{height: `${h}%`}}
                        >
                          <div className="w-full h-full bg-gradient-to-t from-blue to-blue-light/50 rounded-sm"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Today</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold mr-2">5</span>
                      <span className="text-green-500 text-xs">+2</span>
                    </div>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Completed</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold mr-2">892</span>
                      <span className="text-green-500 text-xs">+45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-light/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
