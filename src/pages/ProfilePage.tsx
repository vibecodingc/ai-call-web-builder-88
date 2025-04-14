
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

// Mock threads data 
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
];

// New component for profile header to reduce file size
const ProfileHeader = ({ user }: { user: typeof mockUser }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  
  return (
    <>
      {/* Cover Image */}
      <div 
        className="h-64 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${user.coverImage})` }}
      >
        <div className="bg-gradient-to-t from-navy to-transparent h-full w-full">
          <div className="container mx-auto px-4 h-full flex items-end pb-4">
            <div className="flex items-end">
              <img 
                src={user.avatarUrl}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-navy object-cover z-10 transform -mb-16 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-blue flex items-center">
              @{user.username}
              <span className="inline-flex ml-2 text-xs bg-blue/20 text-blue px-2 py-1 rounded-full">Pro Member</span>
            </p>
            
            <div className="flex items-center flex-wrap gap-4 mt-2 text-gray-400 text-sm">
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
          
          <div className="flex mt-4 md:mt-0 gap-3 animate-fade-in">
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
        
        <p className="text-gray-300 mb-6 max-w-3xl animate-fade-in">{user.bio}</p>
      </div>
    </>
  );
};

// New component for profile stats
const ProfileStats = ({ user }: { user: typeof mockUser }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in">
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
    <div className="mb-8 animate-fade-in">
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
  const user = mockUser; // In a real app, you would fetch user data based on username
  
  return (
    <div className="min-h-screen bg-navy text-white">
      <ForumNavigation />
      
      <ProfileHeader user={user} />
      
      <div className="container mx-auto px-4">
        <ProfileStats user={user} />
        
        <ProfileBadges badges={user.badges} />
        
        {/* Content Tabs */}
        <Tabs defaultValue="threads" className="mb-16 animate-fade-in">
          <TabsList className="mb-6 bg-card/50 p-1">
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
      
      <ForumFooter />
    </div>
  );
};

export default ProfilePage;
