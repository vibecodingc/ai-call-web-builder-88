
import React from "react";
import { ButtonGradient } from "@/components/ui/button-gradient";

export function ForumCTASection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="relative z-10 bg-gradient-to-r from-blue/20 to-blue-dark/20 backdrop-blur-sm rounded-2xl p-10 border border-white/10 text-center">
          <h2 className="text-section-mobile md:text-section mb-6">Join Our Growing Community</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with like-minded individuals, share your expertise, and get answers to your questions. Create your account today and become part of the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonGradient size="lg" withArrow>Sign Up Free</ButtonGradient>
            <ButtonGradient size="lg" variant="outline">Learn More</ButtonGradient>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-dark/20 rounded-full blur-2xl"></div>
    </section>
  );
}
