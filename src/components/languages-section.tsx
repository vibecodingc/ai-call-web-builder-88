
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Check, ChevronDown, Play } from "lucide-react";

export function LanguagesSection() {
  const languages = [
    { name: "English", flag: "🇺🇸" },
    { name: "Spanish", flag: "🇪🇸" },
    { name: "German", flag: "🇩🇪" },
    { name: "French", flag: "🇫🇷" },
    { name: "Portuguese", flag: "🇵🇹" },
    { name: "Italian", flag: "🇮🇹" },
  ];

  return (
    <section className="section-padding bg-navy-light relative">
      <div className="container mx-auto">
        <SectionHeading
          title="40+ Different Languages That You Can Choose"
          subtitle="AI Call supports multiple languages and accents to provide a personalized experience for your customers worldwide."
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-white/10 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Choose Language</h3>
                <div className="relative">
                  <button className="flex items-center bg-navy-light px-4 py-2 rounded-lg">
                    <span className="mr-2">English</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {languages.map((lang) => (
                  <div 
                    key={lang.name} 
                    className={`flex items-center p-3 rounded-lg ${lang.name === 'English' ? 'bg-blue/20 border border-blue/30' : 'bg-navy hover:bg-navy/80'}`}
                  >
                    <span className="text-xl mr-2">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-medium mb-4">Voice Options</h4>
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="text-sm text-gray-300 mb-2">Choose your voice</h5>
                    <div className="flex space-x-4">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="voice" className="sr-only" defaultChecked />
                        <div className="h-4 w-4 rounded-full border-2 border-blue mr-2 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-blue"></div>
                        </div>
                        <span>Male</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="voice" className="sr-only" />
                        <div className="h-4 w-4 rounded-full border-2 border-white/50 mr-2"></div>
                        <span>Female</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm text-gray-300 mb-2">Multiple accents</h5>
                    <div className="flex space-x-4">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="accent" className="sr-only" defaultChecked />
                        <div className="h-4 w-4 rounded-full border-2 border-blue mr-2 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-blue"></div>
                        </div>
                        <span>American</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="accent" className="sr-only" />
                        <div className="h-4 w-4 rounded-full border-2 border-white/50 mr-2"></div>
                        <span>British</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="accent" className="sr-only" />
                        <div className="h-4 w-4 rounded-full border-2 border-white/50 mr-2"></div>
                        <span>Australian</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <ButtonGradient className="w-full">
                  <Play size={16} className="mr-2" />
                  Play Voice Sample
                </ButtonGradient>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-subheading-mobile md:text-subheading mb-4">Natural Conversations in Any Language</h3>
            <p className="text-gray-300">
              Our AI voice agents can speak in over 40 different languages with natural intonation and regional accents.
            </p>
            
            <ul className="space-y-4">
              {[
                "Create voice agents that speak your customers' language",
                "Multiple accent options for major languages",
                "Natural-sounding voices with proper pronunciation",
                "Customize tone and speaking style to match your brand",
              ].map((item, index) => (
                <li key={index} className="flex">
                  <div className="mr-3 mt-1">
                    <div className="bg-blue/20 p-1 rounded-full">
                      <Check size={16} className="text-blue" />
                    </div>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <div className="h-16 w-full bg-card relative rounded-lg overflow-hidden">
                {/* Audio waveform visualization */}
                <div className="absolute inset-0 flex items-center justify-center space-x-0.5">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div 
                      key={i}
                      className="w-0.5 bg-blue-light/70 rounded-full animate-pulse-slow"
                      style={{ 
                        height: `${Math.sin(i/5) * 40 + 30}%`,
                        animationDelay: `${i * 0.01}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
