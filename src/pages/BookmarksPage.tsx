
import React from "react";
import { ForumNavigation } from "@/components/forum-navigation";
import { ForumFooter } from "@/components/forum-footer";
import { Thread } from "@/components/ui/thread";
import { Bookmark } from "lucide-react";

// Mock data for demonstration
const bookmarkedThreads = [
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
  }
];

const BookmarksPage = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <ForumNavigation />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <Bookmark className="text-blue" size={24} />
          <h1 className="text-section-mobile md:text-section">Your Bookmarks</h1>
        </div>
        
        {bookmarkedThreads.length > 0 ? (
          <div className="space-y-4">
            {bookmarkedThreads.map(thread => (
              <Thread key={thread.id} {...thread} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Bookmark className="mx-auto text-gray-400 mb-3" size={40} />
            <h2 className="text-xl font-medium mb-2">No bookmarks yet</h2>
            <p className="text-gray-400">When you bookmark threads, they'll appear here.</p>
          </div>
        )}
      </div>
      <ForumFooter />
    </div>
  );
};

export default BookmarksPage;
