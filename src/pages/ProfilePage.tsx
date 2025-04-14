
import React from "react";
import { useParams } from "react-router-dom";
import { ForumNavigation } from "@/components/forum-navigation";
import { ForumFooter } from "@/components/forum-footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Thread } from "@/components/ui/thread";
import { ExternalLink, MapPin, Calendar, Award, Users, MessageSquare } from "lucide-react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { BadgeUserCount } from "@/components/ui/badge-user-count";

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

const ProfilePage = () => {
  const { username } = useParams<{ username?: string }>();
  const user = mockUser; // In a real app, you would fetch user data based on username
  
  return (
    <div className="min-h-screen bg-navy text-white">
      <ForumNavigation />
      
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
                className="w-32 h-32 rounded-full border-4 border-navy object-cover z-10 transform -mb-16"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-blue">@{user.username}</p>
            
            <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
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
                  className="flex items-center hover:text-blue transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Website
                </a>
              )}
            </div>
          </div>
          
          <div className="flex mt-4 md:mt-0 gap-3">
            <ButtonGradient>Follow</ButtonGradient>
            <ButtonGradient variant="outline">Message</ButtonGradient>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 max-w-3xl">{user.bio}</p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card rounded-lg p-4 text-center">
            <Award className="w-6 h-6 mx-auto mb-2 text-gold" />
            <div className="text-2xl font-bold">{user.reputation}</div>
            <div className="text-gray-400 text-sm">Reputation</div>
          </div>
          <div className="bg-card rounded-lg p-4 text-center">
            <MessageSquare className="w-6 h-6 mx-auto mb-2 text-blue" />
            <div className="text-2xl font-bold">{user.postCount}</div>
            <div className="text-gray-400 text-sm">Posts</div>
          </div>
          <div className="bg-card rounded-lg p-4 text-center">
            <Users className="w-6 h-6 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold">{user.followers}</div>
            <div className="text-gray-400 text-sm">Followers</div>
          </div>
          <div className="bg-card rounded-lg p-4 text-center">
            <Users className="w-6 h-6 mx-auto mb-2 text-purple" />
            <div className="text-2xl font-bold">{user.following}</div>
            <div className="text-gray-400 text-sm">Following</div>
          </div>
        </div>
        
        {/* Badges */}
        {user.badges && user.badges.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Badges</h2>
            <div className="flex flex-wrap gap-2">
              {user.badges.map(badge => (
                <BadgeUserCount key={badge.id} count={badge.name} className="bg-blue/20 text-blue" />
              ))}
            </div>
          </div>
        )}
        
        {/* Content Tabs */}
        <Tabs defaultValue="threads" className="mb-16">
          <TabsList className="mb-6">
            <TabsTrigger value="threads">Threads</TabsTrigger>
            <TabsTrigger value="replies">Replies</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="threads" className="space-y-4">
            {userThreads.map(thread => (
              <Thread key={thread.id} {...thread} />
            ))}
          </TabsContent>
          
          <TabsContent value="replies">
            <div className="bg-card rounded-lg p-8 text-center">
              <p className="text-gray-400">No replies yet.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="bookmarks">
            <div className="bg-card rounded-lg p-8 text-center">
              <p className="text-gray-400">No bookmarks yet.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="activity">
            <div className="bg-card rounded-lg p-8 text-center">
              <p className="text-gray-400">No recent activity.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <ForumFooter />
    </div>
  );
};

export default ProfilePage;
