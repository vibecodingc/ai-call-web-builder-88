
import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "Standard",
      price: isAnnual ? 129 * 0.8 : 129,
      period: isAnnual ? "/mo (billed annually)" : "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 500 minutes of calls per month",
        "3 custom voice agents",
        "Basic reporting and analytics",
        "Standard voice quality",
        "Email support",
        "API access",
      ],
      buttonText: "Buy Now",
      isPopular: false,
    },
    {
      name: "Agency",
      price: isAnnual ? 249 * 0.8 : 249,
      period: isAnnual ? "/mo (billed annually)" : "/month",
      description: "Best for growing businesses with higher call volume",
      features: [
        "Up to 1,500 minutes of calls per month",
        "10 custom voice agents",
        "Advanced reporting and analytics",
        "Premium voice quality",
        "Priority email and chat support",
        "API access with advanced features",
        "Custom integrations",
      ],
      buttonText: "Buy Now",
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: isAnnual ? 499 * 0.8 : 499,
      period: isAnnual ? "/mo (billed annually)" : "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited minutes of calls",
        "Unlimited custom voice agents",
        "Custom reporting and analytics",
        "Highest voice quality",
        "24/7 dedicated support",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-navy relative">
      <div className="container mx-auto">
        <SectionHeading 
          title="Transparent Pricing Without Surprises" 
          subtitle="Choose the plan that's right for your business. All plans include our core features."
        />
        
        {/* Pricing toggle */}
        <div className="flex justify-center items-center mb-12">
          <span className={cn("mr-3", !isAnnual && "font-semibold text-white")}>Monthly</span>
          <div 
            className="w-16 h-8 bg-navy-light rounded-full p-1 cursor-pointer relative"
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <div 
              className={cn(
                "w-6 h-6 bg-blue rounded-full absolute transition-all duration-300",
                isAnnual ? "translate-x-8" : "translate-x-0"
              )}
            ></div>
          </div>
          <span className={cn("ml-3", isAnnual && "font-semibold text-white")}>
            Yearly <span className="text-blue text-sm">Save 20%</span>
          </span>
        </div>
        
        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={cn(
                "bg-card rounded-xl p-8 shadow-lg border relative animate-fade-in",
                plan.isPopular ? "border-blue" : "border-white/10"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-300">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex">
                    <div className="mr-3 mt-1">
                      <div className="bg-blue/20 p-1 rounded-full">
                        <Check size={12} className="text-blue" />
                      </div>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <ButtonGradient 
                variant={plan.isPopular ? "default" : "outline"} 
                className="w-full"
              >
                {plan.buttonText}
              </ButtonGradient>
              
              {plan.isPopular && (
                <div className="mt-4 text-center">
                  <a href="#" className="text-sm text-blue hover:underline">
                    Start Free Trial
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
