
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CardThread } from "@/components/ui/card-thread";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { threads } from "@/lib/mock-data";
import { createRevealClass } from "@/lib/animation";

export function ForumPopularThreadsSection() {
  // Sort threads by vote count to get popular ones
  const popularThreads = [...threads]
    .sort((a, b) => b.voteCount - a.voteCount)
    .slice(0, 5);

  return (
    <section className="py-16 px-6 bg-navy-light" id="popular-threads">
      <div className="container mx-auto">
        <SectionHeading 
          title="Popular Discussions" 
          subtitle="Trending topics with the most engagement from our community"
        />
        
        <div className="space-y-4 mb-8">
          {popularThreads.map((thread, index) => (
            <div 
              key={thread.id} 
              className={createRevealClass(0.1 * index, "up")}
            >
              <CardThread thread={thread} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <ButtonGradient variant="outline" withArrow>View All Popular Threads</ButtonGradient>
        </div>
      </div>
    </section>
  );
}
