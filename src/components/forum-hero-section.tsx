
import React from "react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { BadgeUserCount } from "@/components/ui/badge-user-count";
import { ForumChatBox } from "@/components/ui/forum-chat-box";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export function ForumHeroSection() {
  return (
    <section className="py-32 px-6 md:py-36 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-hero-mobile md:text-hero mb-4 animate-[fade-in_0.6s_ease-out,scale-in_0.5s_ease-out]">
              <span className="bg-gradient-to-r from-blue to-blue-light bg-clip-text text-transparent">
                Community-Driven
              </span>{" "}
              Discussions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-[fade-in_0.8s_ease-out]">
              Join thousands of members sharing ideas, asking questions, and building connections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-[fade-in_1s_ease-out]">
              <div className="flex-grow">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Search the forum..." 
                    className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue transition-all duration-300 hover:bg-white/15"
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 hover:text-blue">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <Link to="/create">
                <ButtonGradient withArrow size="lg" className="animate-[scale-in_0.3s_ease-out]">
                  Create Thread
                </ButtonGradient>
              </Link>
            </div>
            
            <div className="flex items-center gap-2 animate-[fade-in_1.2s_ease-out]">
              <BadgeUserCount count="15,420+ members" className="animate-float" />
              <span className="text-sm text-gray-400">joined the conversation</span>
            </div>
          </div>
          
          <div className="min-h-[400px] flex items-center justify-center animate-[fade-in-right_1s_ease-out]">
            <ForumChatBox 
              animated={true} 
              autoPlay={true}
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Enhanced background elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-blue/30 to-blue-light/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 -right-12 w-40 h-40 bg-gradient-to-tr from-blue-light/20 to-transparent rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-gradient-to-tr from-blue/20 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
    </section>
  );
}
