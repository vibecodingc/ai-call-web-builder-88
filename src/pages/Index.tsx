
import React from "react";
import { ForumNavigation } from "@/components/forum-navigation";
import { ForumHeroSection } from "@/components/forum-hero-section";
import { ForumCategoriesSection } from "@/components/forum-categories-section";
import { ForumPopularThreadsSection } from "@/components/forum-popular-threads-section";
import { ForumRecentActivitySection } from "@/components/forum-recent-activity-section";
import { ForumStatsSection } from "@/components/forum-stats-section";
import { ForumCTASection } from "@/components/forum-cta-section";
import { ForumFooter } from "@/components/forum-footer";
import "../forum.css";

const Index = () => {
  // Add intersection observer for animation
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      <ForumNavigation />
      <ForumHeroSection />
      <ForumCategoriesSection />
      <ForumStatsSection />
      <ForumPopularThreadsSection />
      <ForumRecentActivitySection />
      <ForumCTASection />
      <ForumFooter />
    </div>
  );
};

export default Index;
