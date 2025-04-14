
import React from "react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { BadgeUserCount } from "@/components/ui/badge-user-count";
import { ForumChatBox } from "@/components/ui/forum-chat-box";
import { Search } from "lucide-react";
import { createRevealClass } from "@/lib/animation";
import { Link } from "react-router-dom";

export function ForumHeroSection() {
  return (
    <section className="py-32 px-6 md:py-36 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={createRevealClass(0, "up", "fade")}>
            <h1 className="text-hero-mobile md:text-hero mb-4 reveal reveal-up active">
              Community-Driven Discussions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 reveal reveal-up active delay-500">
              Join thousands of members sharing ideas, asking questions, and building connections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6 reveal reveal-up active delay-1000">
              <div className="flex-grow">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search the forum..." 
                    className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue"
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <Link to="/create">
                <ButtonGradient withArrow size="lg">Create Thread</ButtonGradient>
              </Link>
            </div>
            
            <div className="flex items-center gap-2 reveal reveal-up active delay-1500">
              <BadgeUserCount count="15,420+ members" />
              <span className="text-sm text-gray-400">joined the conversation</span>
            </div>
          </div>
          
          <div className={`${createRevealClass(0.5, "up", "fade")} min-h-[400px] flex items-center justify-center`}>
            <ForumChatBox 
              animated={true} 
              autoPlay={true}
              className="w-full max-w-md mx-auto reveal reveal-right active delay-1000"
            />
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-12 w-40 h-40 bg-blue-light/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-blue/10 rounded-full blur-2xl"></div>
    </section>
  );
}
