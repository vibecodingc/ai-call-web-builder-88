
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonGradient } from "@/components/ui/button-gradient";

export function IntegrationSection() {
  const integrations = [
    { name: "Salesforce", logo: "SF" },
    { name: "Google", logo: "G" },
    { name: "HubSpot", logo: "H" },
    { name: "Zapier", logo: "Z" },
    { name: "Microsoft", logo: "M" },
  ];

  return (
    <section className="section-padding bg-navy-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-light/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionHeading 
          title="Seamlessly Integrate With All Your Tools" 
          subtitle="Connect AI Call with your existing tech stack for streamlined workflows and data consistency."
        />
        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="w-24 h-24 bg-navy rounded-xl flex items-center justify-center shadow-lg border border-white/10 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-blue to-blue-light bg-clip-text text-transparent">
                {integration.logo}
              </span>
            </div>
          ))}
        </div>
        
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-300 mb-8">
            AI Call integrates with popular CRMs, calendars, help desks, and communication platforms to ensure your data flows smoothly between systems.
          </p>
          <ButtonGradient size="lg">Start Your Free Trial</ButtonGradient>
        </div>
        
        {/* Floating integration icons */}
        <div className="absolute top-1/4 left-10 w-12 h-12 bg-navy rounded-lg flex items-center justify-center border border-white/10 animate-float opacity-60">
          <span className="text-sm font-bold">API</span>
        </div>
        <div className="absolute top-1/3 right-16 w-12 h-12 bg-navy rounded-lg flex items-center justify-center border border-white/10 animate-float opacity-60" style={{ animationDelay: '1.5s' }}>
          <span className="text-sm font-bold">CRM</span>
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-navy rounded-lg flex items-center justify-center border border-white/10 animate-float opacity-60" style={{ animationDelay: '0.7s' }}>
          <span className="text-sm font-bold">Data</span>
        </div>
      </div>
    </section>
  );
}
