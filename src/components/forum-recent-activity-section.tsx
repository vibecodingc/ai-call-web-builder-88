
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CardThread } from "@/components/ui/card-thread";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { threads, posts } from "@/lib/mock-data";
import { CardPost } from "@/components/ui/card-post";
import { createRevealClass } from "@/lib/animation";

export function ForumRecentActivitySection() {
  // Sort threads and posts by date
  const recentThreads = [...threads]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 3);

  const recentPosts = [...posts]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 3);

  return (
    <section className="py-16 px-6" id="recent-activity">
      <div className="container mx-auto">
        <SectionHeading 
          title="Recent Activity" 
          subtitle="Stay up to date with the latest discussions and replies"
        />
        
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="grid grid-cols-2 max-w-xs mx-auto mb-8">
            <TabsTrigger value="threads">New Threads</TabsTrigger>
            <TabsTrigger value="posts">New Replies</TabsTrigger>
          </TabsList>
          
          <TabsContent value="threads">
            <div className="space-y-4">
              {recentThreads.map((thread, index) => (
                <div 
                  key={thread.id} 
                  className={createRevealClass(0.1 * index, "up")}
                >
                  <CardThread thread={thread} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="posts">
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className={createRevealClass(0.1 * index, "up")}
                >
                  <CardPost post={post} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
