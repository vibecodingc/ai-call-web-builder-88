
import React, { useState } from "react";
import { ForumNavigation } from "@/components/forum-navigation";
import { ForumFooter } from "@/components/forum-footer";
import { Thread } from "@/components/ui/thread";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tag } from "@/lib/forum-types";

// Mock popular threads
const popularThreads = [
  {
    id: "pop1",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
      username: "sarahjohnson",
    },
    content: "What are your favorite VS Code extensions for React development? I'm looking to optimize my workflow and would love recommendations from the community!",
    createdAt: new Date(2025, 3, 13),
    likes: 128,
    replies: 42,
    viewCount: 1245,
    tags: [
      { id: "t1", name: "react", color: "#61dafb" },
      { id: "t2", name: "vscode", color: "#007acc" },
      { id: "t3", name: "productivity", color: "#10b981" }
    ]
  },
  {
    id: "pop2",
    author: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      username: "mikechen",
    },
    content: "I just published a comprehensive guide on building accessible UIs with React. Check it out and let me know what you think!",
    createdAt: new Date(2025, 3, 12),
    likes: 97,
    replies: 29,
    images: ["https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80"],
    viewCount: 876,
    tags: [
      { id: "t1", name: "react", color: "#61dafb" },
      { id: "t4", name: "accessibility", color: "#a855f7" },
      { id: "t5", name: "ui", color: "#f43f5e" }
    ]
  },
  {
    id: "pop3",
    author: {
      name: "Jordan Lee",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=80",
      username: "jordanlee",
    },
    content: "Has anyone implemented server-side rendering with Next.js and GraphQL? I'm running into some hydration issues and could use some advice.",
    createdAt: new Date(2025, 3, 11),
    likes: 76,
    replies: 31,
    viewCount: 654,
    isPinned: true,
    tags: [
      { id: "t6", name: "nextjs", color: "#000000" },
      { id: "t7", name: "graphql", color: "#e10098" },
      { id: "t8", name: "ssr", color: "#0ea5e9" }
    ]
  },
  {
    id: "pop4",
    author: {
      name: "Taylor Kim",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
      username: "taylorkim",
    },
    content: "What's your opinion on Tailwind CSS vs. styled-components? I'm starting a new project and trying to decide which approach to take for styling.",
    createdAt: new Date(2025, 3, 10),
    likes: 112,
    replies: 67,
    viewCount: 980,
    tags: [
      { id: "t9", name: "tailwindcss", color: "#0ea5e9" },
      { id: "t10", name: "styled-components", color: "#db7093" },
      { id: "t11", name: "css", color: "#264de4" }
    ]
  }
];

// Popular tags
const popularTags: Tag[] = [
  { id: "t1", name: "react", count: 1254 },
  { id: "t9", name: "tailwindcss", count: 876 },
  { id: "t12", name: "javascript", count: 1432 },
  { id: "t6", name: "nextjs", count: 743 },
  { id: "t13", name: "typescript", count: 892 },
  { id: "t14", name: "webdev", count: 1876 },
  { id: "t15", name: "frontend", count: 654 },
  { id: "t16", name: "backend", count: 432 },
  { id: "t7", name: "graphql", count: 321 },
  { id: "t17", name: "nodejs", count: 567 }
];

const PopularPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tagName: string) => {
    setSelectedTags(prev => 
      prev.includes(tagName)
        ? prev.filter(t => t !== tagName)
        : [...prev, tagName]
    );
  };
  
  const filteredThreads = popularThreads.filter(thread => {
    // Filter by search query
    const matchesSearch = searchQuery === "" || 
      thread.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.author.username.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by selected tags
    const matchesTags = selectedTags.length === 0 || 
      (thread.tags && thread.tags.some(tag => selectedTags.includes(tag.name)));
    
    return matchesSearch && matchesTags;
  });
  
  return (
    <div className="min-h-screen bg-navy text-white">
      <ForumNavigation />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-section-mobile md:text-section mb-8 bg-gradient-to-r from-blue to-blue-light bg-clip-text text-transparent animate-fade-in-down">Popular Discussions</h1>
        
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
          <div className="relative flex-grow w-full md:w-auto">
            <Input
              placeholder="Search popular threads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-white/10 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
        
        {/* Popular Tags */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Popular Tags</h2>
          <div className="flex flex-wrap gap-2">
            {popularTags.map(tag => (
              <button
                key={tag.id}
                onClick={() => toggleTag(tag.name)}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                  selectedTags.includes(tag.name)
                    ? 'bg-blue text-white'
                    : 'bg-card hover:bg-white/20 text-gray-300'
                }`}
              >
                #{tag.name}
                <span className="ml-1 opacity-70">({tag.count})</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Time Filter Tabs */}
        <Tabs defaultValue="today" className="mb-8">
          <TabsList className="bg-card border border-white/10">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
            <TabsTrigger value="year">This Year</TabsTrigger>
            <TabsTrigger value="all">All Time</TabsTrigger>
          </TabsList>
          
          <TabsContent value="today" className="space-y-4 pt-4">
            {filteredThreads.map(thread => (
              <Thread key={thread.id} {...thread} />
            ))}
            {filteredThreads.length === 0 && (
              <div className="text-center py-12 bg-card rounded-xl">
                <p className="text-gray-400">No threads found matching your criteria.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="week" className="space-y-4 pt-4">
            <div className="text-center py-12 bg-card rounded-xl">
              <p className="text-gray-400">Switch to "Today" to see popular threads.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="month" className="space-y-4 pt-4">
            <div className="text-center py-12 bg-card rounded-xl">
              <p className="text-gray-400">Switch to "Today" to see popular threads.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="year" className="space-y-4 pt-4">
            <div className="text-center py-12 bg-card rounded-xl">
              <p className="text-gray-400">Switch to "Today" to see popular threads.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="all" className="space-y-4 pt-4">
            <div className="text-center py-12 bg-card rounded-xl">
              <p className="text-gray-400">Switch to "Today" to see popular threads.</p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center">
          <ButtonGradient>Load More</ButtonGradient>
        </div>
      </div>
      <ForumFooter />
    </div>
  );
};

export default PopularPage;
