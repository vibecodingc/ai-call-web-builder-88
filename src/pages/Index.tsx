
import React, { useEffect, useCallback } from "react";
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
  // Optimized intersection observer for animations
  const setupAnimations = useCallback(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add active class when element is in view
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('active');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Get all elements to be animated
    const animatedElements = document.querySelectorAll('.reveal');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  // Set up animations when component mounts
  useEffect(() => {
    // Small timeout to ensure DOM is fully rendered
    const timeout = setTimeout(setupAnimations, 100);
    return () => clearTimeout(timeout);
  }, [setupAnimations]);

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
