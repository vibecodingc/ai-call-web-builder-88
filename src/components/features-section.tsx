
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CardFeature } from "@/components/ui/card-feature";
import { Volume2, Sliders, Activity } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Human-like Voice",
      description: "Our AI agents use advanced neural voices that sound natural and conversational, not robotic.",
      icon: <Volume2 size={24} />,
    },
    {
      title: "Customizable Responses",
      description: "Fine-tune how your AI agent responds to different scenarios with our easy-to-use interface.",
      icon: <Sliders size={24} />,
    },
    {
      title: "Infinite Scalability",
      description: "Handle unlimited simultaneous calls 24/7 with consistent quality and no waiting times.",
      icon: <Activity size={24} />,
    },
  ];

  return (
    <section id="features" className="section-padding bg-navy relative">
      <div className="container mx-auto">
        <SectionHeading
          title="Take Phone Calls off Your Hands"
          subtitle="Let our AI voice agents handle your calls while you focus on growing your business."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <CardFeature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-navy-light rounded-xl p-6 shadow-xl border border-white/10 animate-fade-in">
            <div className="bg-card p-5 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Demo Greeting</h3>
              <div className="h-20 w-full bg-navy relative rounded-lg overflow-hidden">
                {/* Audio waveform simulation */}
                <div className="absolute inset-0 flex items-center justify-center space-x-1">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div 
                      key={i}
                      className="w-1 bg-blue-light/70 rounded-full animate-pulse-slow"
                      style={{ 
                        height: `${Math.sin(i/2) * 20 + 30}%`,
                        animationDelay: `${i * 0.05}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <p className="text-sm mt-3 text-gray-300 italic">
                "Hello! This is AI Call assistant. How can I help you today?"
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">Calls completed</p>
                <div className="text-2xl font-bold">692</div>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">Calls triggered</p>
                <div className="text-2xl font-bold">1.8K</div>
              </div>
            </div>
          </div>
          
          <div className="order-first md:order-last">
            <h3 className="text-subheading-mobile md:text-subheading mb-4 animate-fade-in">Intelligent Voice Agents</h3>
            <p className="text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our AI agents don't just follow scripts – they understand context, respond naturally to questions, and can even handle unexpected situations.
            </p>
            <p className="text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Create custom workflows that match your business needs, whether it's appointment scheduling, customer support, or lead qualification.
            </p>
            <ul className="space-y-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue rounded-full mr-2"></span>
                <span>Handle complex conversations</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue rounded-full mr-2"></span>
                <span>Transfer to human agents when needed</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue rounded-full mr-2"></span>
                <span>Integrate with your existing systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
