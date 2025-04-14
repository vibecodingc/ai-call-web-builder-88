import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ForumNavigation } from "@/components/forum-navigation";
import { ForumFooter } from "@/components/forum-footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Thread } from "@/components/ui/thread";
import { ExternalLink, MapPin, Calendar, Award, Users, MessageSquare, Edit, Share2, Bookmark, ArrowRight } from "lucide-react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { BadgeUserCount } from "@/components/ui/badge-user-count";
import { cn } from "@/lib/utils";

// Mock user data
const mockUser = {
  id: "user123",
  name: "Alex Morgan",
  username: "alexmorgan",
  avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80",
  coverImage: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1920&q=80",
  bio: "UX Designer & Developer. I love creating beautiful interfaces and sharing knowledge about web development.",
  joinDate: new Date(2023, 5, 15),
  postCount: 127,
  reputation: 1240,
  followers: 84,
  following: 32,
  location: "San Francisco, CA",
  website: "https://alexmorgan.design",
  badges: [
    {
      id: "b1",
      name: "Top Contributor",
      icon: "Award",
      description: "Awarded for exceptional contributions to the community",
      earnedAt: new Date(2024, 1, 10)
    },
    {
      id: "b2",
      name: "Problem Solver",
      icon: "CheckCircle",
      description: "Provided 10 accepted solutions",
      earnedAt: new Date(2023, 11, 5)
    }
  ]
};

// Updated mock threads data with more variety
const userThreads = [
  {
    id: "123",
    author: {
      name: mockUser.name,
      avatar: mockUser.avatarUrl,
      username: mockUser.username,
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
      name: mockUser.name,
      avatar: mockUser.avatarUrl,
      username: mockUser.username,
    },
    content: "I've been working on optimizing my React application. Here are some performance tips I've learned along the way...",
    createdAt: new Date(2025, 3, 8),
    likes: 52,
    replies: 12,
    images: []
  },
  {
    id: "789",
    author: {
      name: mockUser.name,
      avatar: mockUser.avatarUrl,
      username: mockUser.username,
    },
    content: "🎨 Just completed my first UI/UX case study! Working on a mobile banking app redesign. Here's a sneak peek of the prototype. Would love your feedback on the interaction design!",
    createdAt: new Date(2025, 3, 6),
    likes: 89,
    replies: 34,
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "101",
    author: {
      name: mockUser.name,
      avatar: mockUser.avatarUrl,
      username: mockUser.username,
    },
    content: "💡 Quick tip: When designing forms, always consider the error states and validation feedback. It's often overlooked but crucial for UX. Here's an example of good vs bad form validation:",
    createdAt: new Date(2025, 3, 4),
    likes: 156,
    replies: 28,
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "102",
    author: {
      name: mockUser.name,
      avatar: mockUser.avatarUrl,
      username: mockUser.username,
    },
    content: "Excited to share that I'll be speaking at the upcoming Web Design Summit 2025! My talk will cover 'The Future of Interactive Web Experiences'. Who else is attending? Let's connect! 🎤✨",
    createdAt: new Date(2025, 3, 2),
    likes: 203,
    replies: 45,
    images: []
  },
  {
    id: "103",
    author: {
      name: mockUser.name,
      avatar: mockUser.avatarUrl,
      username: mockUser.username,
    },
    content: "Starting a new series: 'Design System Deep Dives' 🎨\nThis week: Color Theory in UI Design\n\nA thread on how to create accessible and visually appealing color palettes for your projects...",
    createdAt: new Date(2025, 2, 28),
    likes: 167,
    replies: 56,
    images: [
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

// New component for profile header to reduce file size
const ProfileHeader = ({ user }: { user: typeof mockUser }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  
  return (
    <div className="animate-fade-in">
      {/* Cover Image with responsive height */}
      <div 
        className="h-48 md:h-64 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${user.coverImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent">
          <div className="container mx-auto px-4 h-full flex items-end pb-4">
            <div className="flex items-end">
              <img 
                src={user.avatarUrl}
                alt={user.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-navy object-cover z-10 transform -mb-12 md:-mb-16 shadow-lg transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Info with responsive padding and layout */}
      <div className="container mx-auto px-4 pt-16 md:pt-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8 mb-8">
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
            <p className="text-blue flex items-center flex-wrap gap-2">
              @{user.username}
              <span className="inline-flex text-xs bg-blue/20 text-blue px-2 py-1 rounded-full">Pro Member</span>
            </p>
            
            <div className="flex items-center flex-wrap gap-3 mt-2 text-gray-400 text-sm">
              {user.location && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {user.location}
                </div>
              )}
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Joined {user.joinDate.toLocaleDateString()}
              </div>
              {user.website && (
                <a 
                  href={user.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 mr-1 group-hover:animate-pulse" />
                  Website
                </a>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 animate-fade-in-up [animation-delay:400ms]">
            <ButtonGradient 
              onClick={() => setIsFollowing(!isFollowing)} 
              className={cn(isFollowing ? "bg-navy-light text-white border border-white/20" : "")}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </ButtonGradient>
            <ButtonGradient variant="outline">Message</ButtonGradient>
            <div className="flex gap-2">
              <ButtonGradient size="icon" variant="outline">
                <Share2 className="w-4 h-4" />
              </ButtonGradient>
              <ButtonGradient size="icon" variant="outline">
                <Edit className="w-4 h-4" />
              </ButtonGradient>
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 max-w-3xl animate-fade-in-up [animation-delay:600ms]">{user.bio}</p>
      </div>
    </div>
  );
};

const ProfileStats = ({ user }: { user: typeof mockUser }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      {/* Stats cards with hover animation */}
      <div className="bg-card rounded-lg p-4 text-center hover:bg-muted/20 transition-colors card-hover">
        <Award className="w-6 h-6 mx-auto mb-2 text-gold" />
        <div className="text-2xl font-bold">{user.reputation}</div>
        <div className="text-gray-400 text-sm">Reputation</div>
      </div>
      <div className="bg-card rounded-lg p-4 text-center hover:bg-muted/20 transition-colors card-hover">
        <MessageSquare className="w-6 h-6 mx-auto mb-2 text-blue" />
        <div className="text-2xl font-bold">{user.postCount}</div>
        <div className="text-gray-400 text-sm">Posts</div>
      </div>
      <div className="bg-card rounded-lg p-4 text-center hover:bg-muted/20 transition-colors card-hover">
        <Users className="w-6 h-6 mx-auto mb-2 text-green-400" />
        <div className="text-2xl font-bold">{user.followers}</div>
        <div className="text-gray-400 text-sm">Followers</div>
      </div>
      <div className="bg-card rounded-lg p-4 text-center hover:bg-muted/20 transition-colors card-hover">
        <Users className="w-6 h-6 mx-auto mb-2 text-purple" />
        <div className="text-2xl font-bold">{user.following}</div>
        <div className="text-gray-400 text-sm">Following</div>
      </div>
    </div>
  );
};

const ProfileBadges = ({ badges }: { badges: typeof mockUser.badges }) => {
  return badges && badges.length > 0 ? (
    <div className="mb-8 animate-fade-in-up [animation-delay:800ms]">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        Badges
        <span className="text-sm ml-2 text-gray-400">({badges.length})</span>
      </h2>
      <div className="flex flex-wrap gap-2">
        {badges.map(badge => (
          <BadgeUserCount 
            key={badge.id} 
            count={badge.name} 
            className="bg-blue/20 text-blue hover:bg-blue/30 transition-colors cursor-pointer" 
            tooltip={badge.description}
          />
        ))}
        <ButtonGradient size="sm" variant="ghost" className="flex items-center">
          <span>View all</span>
          <ArrowRight className="ml-1 w-4 h-4" />
        </ButtonGradient>
      </div>
    </div>
  ) : null;
};

const ProfilePage = () => {
  const { username } = useParams<{ username?: string }>();
  const user = mockUser;
  
  return (
    <div className="min-h-screen bg-navy text-white">
      <ForumNavigation />
      
      <div className="animate-fade-in">
        <ProfileHeader user={user} />
        
        <div className="container mx-auto px-4">
          <ProfileStats user={user} />
          <ProfileBadges badges={user.badges} />
          
          {/* Content Tabs with smooth transitions */}
          <Tabs defaultValue="threads" className="mb-16">
            <TabsList className="mb-6 bg-card/50 p-1 overflow-x-auto flex whitespace-nowrap scrollbar-none">
              <TabsTrigger value="threads" className="data-[state=active]:bg-blue/20">Threads</TabsTrigger>
              <TabsTrigger value="replies" className="data-[state=active]:bg-blue/20">Replies</TabsTrigger>
              <TabsTrigger value="bookmarks" className="data-[state=active]:bg-blue/20">Bookmarks</TabsTrigger>
              <TabsTrigger value="activity" className="data-[state=active]:bg-blue/20">Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="threads" className="space-y-4">
              {userThreads.map(thread => (
                <Thread key={thread.id} {...thread} />
              ))}
              <div className="flex justify-center mt-8">
                <ButtonGradient variant="outline">Load More</ButtonGradient>
              </div>
            </TabsContent>
            
            <TabsContent value="replies">
              <div className="bg-card rounded-lg p-8 text-center border border-white/5">
                <Bookmark className="w-12 h-12 mx-auto mb-4 text-gray-500 opacity-50" />
                <p className="text-gray-400 mb-4">No replies yet.</p>
                <ButtonGradient size="sm">Browse Discussions</ButtonGradient>
              </div>
            </TabsContent>
            
            <TabsContent value="bookmarks">
              <div className="bg-card rounded-lg p-8 text-center border border-white/5">
                <Bookmark className="w-12 h-12 mx-auto mb-4 text-gray-500 opacity-50" />
                <p className="text-gray-400 mb-4">No bookmarks yet.</p>
                <ButtonGradient size="sm">Explore Threads</ButtonGradient>
              </div>
            </TabsContent>
            
            <TabsContent value="activity">
              <div className="bg-card rounded-lg p-8 text-center border border-white/5">
                <Users className="w-12 h-12 mx-auto mb-4 text-gray-500 opacity-50" />
                <p className="text-gray-400 mb-4">No recent activity.</p>
                <ButtonGradient size="sm">Engage with Community</ButtonGradient>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <ForumFooter />
    </div>
  );
};

export default ProfilePage;
