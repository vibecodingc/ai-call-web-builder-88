
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Calendar, Phone, HelpCircle } from "lucide-react";
import { ButtonGradient } from "./ui/button-gradient";

export function UseCasesSection() {
  const useCases = [
    {
      title: "Appointments",
      description: "Schedule, confirm, and reschedule appointments automatically without any human intervention.",
      icon: <Calendar size={24} />,
    },
    {
      title: "Inbound Calls",
      description: "Handle customer inquiries, route calls, and provide information about your products or services.",
      icon: <Phone size={24} />,
    },
    {
      title: "Product Support",
      description: "Provide technical assistance, troubleshooting, and guide users through common issues.",
      icon: <HelpCircle size={24} />,
    },
  ];

  return (
    <section id="demo" className="section-padding bg-navy relative">
      <div className="container mx-auto">
        <SectionHeading title="Endless Use Cases" subtitle="AI Call can be customized for various business needs" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 bg-blue/20 rounded-full flex items-center justify-center mb-4">
                <div className="text-blue">{useCase.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-300 mb-4">{useCase.description}</p>
              <ButtonGradient variant="ghost" size="sm">Learn More</ButtonGradient>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-xl p-6 shadow-lg border border-white/10 overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-semibold">Business Metrics</h3>
                <p className="text-sm text-gray-400">Last 30 days</p>
              </div>
              <div className="text-right">
                <div className="text-blue text-lg font-bold">24</div>
                <p className="text-xs text-gray-400">Hours saved daily</p>
              </div>
            </div>
            
            <div className="bg-navy-light p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium">Calls handled</h4>
                <span className="text-blue font-bold">982</span>
              </div>
              <div className="h-2 bg-navy rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-blue to-blue-light"></div>
              </div>
            </div>
            
            {/* Chat interface mockup */}
            <div className="bg-navy p-4 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue/20 rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-blue" />
                </div>
                <span className="ml-2 font-medium">AI Call Agent</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-navy-light p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">Hello! This is AI Call assistant. How can I help you today?</p>
                </div>
                
                <div className="bg-blue/20 p-3 rounded-lg max-w-[80%] ml-auto">
                  <p className="text-sm">I need to reschedule my appointment for tomorrow.</p>
                </div>
                
                <div className="bg-navy-light p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">I'd be happy to help you reschedule. Can I have your name and the current appointment time?</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-subheading-mobile md:text-subheading mb-4">Versatile Solutions for Every Department</h3>
            <p className="text-gray-300 mb-6">
              From customer service and sales to internal operations, AI Call adapts to handle various tasks:
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Qualify leads and schedule demos for sales team",
                "Answer common customer questions and reduce support load",
                "Conduct surveys and collect feedback",
                "Confirm orders and provide shipping updates",
                "Automate follow-ups and appointment reminders"
              ].map((item, index) => (
                <li key={index} className="flex">
                  <div className="mr-3 mt-1">
                    <div className="h-5 w-5 rounded-full bg-blue/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-blue"></div>
                    </div>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <ButtonGradient withArrow>Explore All Use Cases</ButtonGradient>
          </div>
        </div>
      </div>
    </section>
  );
}
