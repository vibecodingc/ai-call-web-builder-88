
import React, { useEffect, useCallback } from "react";
import { ForumNavigation } from "@/components/forum-navigation";
import { ForumHeroSection } from "@/components/forum-hero-section";
import { ForumCategoriesSection } from "@/components/forum-categories-section";
import { ForumPopularThreadsSection } from "@/components/forum-popular-threads-section";
import { ForumRecentActivitySection } from "@/components/forum-recent-activity-section";
import { ForumStatsSection } from "@/components/forum-stats-section";
import { ForumCTASection } from "@/components/forum-cta-section";
import { ForumFooter } from "@/components/forum-footer";
import { ThreadCreator } from "@/components/ui/thread-creator";
import { Thread } from "@/components/ui/thread";
import "../forum.css";
import "../cursor.css";

// Mock thread data for demonstration
const threadFeed = [
  {
    id: "123",
    author: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80",
      username: "alexmorgan",
    },
    content: "Just launched a new website design! What do you all think about the new trends in web design for 2025?",
    createdAt: new Date(2025, 3, 10),
    likes: 24,
    replies: 5,
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "456",
    author: {
      name: "Jamie Smith",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=80",
      username: "jamiesmith",
    },
    content: "I've been working on optimizing my React application. Here are some performance tips I've learned along the way...\n\n1. Use React.memo for components that render often\n2. Implement proper key usage in lists\n3. Avoid inline function definitions",
    createdAt: new Date(2025, 3, 8),
    likes: 52,
    replies: 12,
    images: []
  },
  {
    id: "789",
    author: {
      name: "Riley Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
      username: "rileyjohnson",
    },
    content: "Check out this beautiful sunset I captured yesterday! #photography #nature",
    createdAt: new Date(2025, 3, 9),
    likes: 87,
    replies: 8,
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

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
      
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-section-mobile md:text-section mb-6">Latest Threads</h2>
          <ThreadCreator />
          
          <div className="mt-8 space-y-4">
            {threadFeed.map(thread => (
              <Thread key={thread.id} {...thread} />
            ))}
          </div>
        </div>
      </div>
      
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
