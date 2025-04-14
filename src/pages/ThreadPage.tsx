
import React from "react";
import { useParams } from "react-router-dom";
import { ForumNavigation } from "@/components/forum-navigation";
import { ForumFooter } from "@/components/forum-footer";
import { Thread } from "@/components/ui/thread";
import { CardPost } from "@/components/ui/card-post";
import { ThreadCreator } from "@/components/ui/thread-creator";

// Mock data for demonstration
const threadData = {
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
};

// Mock replies data
const replies = [
  {
    id: "reply1",
    threadId: "123",
    authorId: "user1",
    author: {
      id: "user1",
      name: "Jordan Lee",
      avatarUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=80",
      joinDate: new Date(2024, 1, 15),
      postCount: 120
    },
    content: "I love the minimalist approach! How did you handle the responsive design aspects?",
    createdAt: new Date(2025, 3, 10, 14, 30),
    updatedAt: new Date(2025, 3, 10, 14, 30),
    voteCount: 7,
    isAccepted: false
  },
  {
    id: "reply2",
    threadId: "123",
    authorId: "user2",
    author: {
      id: "user2",
      name: "Taylor Kim",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
      joinDate: new Date(2023, 8, 5),
      postCount: 346
    },
    content: "The color scheme is beautiful! Are you using any animation libraries or is it all custom animations?",
    createdAt: new Date(2025, 3, 11, 9, 15),
    updatedAt: new Date(2025, 3, 11, 9, 15),
    voteCount: 12,
    isAccepted: true
  }
];

const ThreadPage = () => {
  const { threadId } = useParams<{ threadId: string }>();
  
  return (
    <div className="min-h-screen bg-navy text-white">
      <ForumNavigation />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <Thread {...threadData} />
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Replies</h2>
          {replies.map(reply => (
            <CardPost key={reply.id} post={reply} />
          ))}
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Add a Reply</h2>
          <ThreadCreator />
        </div>
      </div>
      <ForumFooter />
    </div>
  );
};

export default ThreadPage;
