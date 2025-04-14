import { Category, Thread, Post, User } from "./forum-types";

// Mock users
export const users: User[] = [
  {
    id: "1",
    name: "Alex Johnson",
    username: "alexjohnson",
    avatarUrl: "/placeholder.svg",
    joinDate: new Date("2023-01-15"),
    postCount: 342
  },
  {
    id: "2",
    name: "Taylor Smith",
    username: "taylorsmith",
    avatarUrl: "/placeholder.svg",
    joinDate: new Date("2023-02-20"),
    postCount: 156
  },
  {
    id: "3",
    name: "Jordan Lee",
    username: "jordanlee",
    avatarUrl: "/placeholder.svg",
    joinDate: new Date("2023-03-10"),
    postCount: 275
  },
  {
    id: "4",
    name: "Casey Morgan",
    username: "caseymorgan",
    avatarUrl: "/placeholder.svg",
    joinDate: new Date("2023-04-05"),
    postCount: 89
  }
];

// Mock categories
export const categories: Category[] = [
  {
    id: "1",
    name: "General Discussion",
    description: "Talk about anything related to our forum",
    icon: "MessageSquare",
    threadCount: 524,
    lastActive: new Date("2023-10-15T10:30:00")
  },
  {
    id: "2",
    name: "Announcements",
    description: "Official announcements from the team",
    icon: "Megaphone",
    threadCount: 38,
    lastActive: new Date("2023-10-14T14:20:00")
  },
  {
    id: "3",
    name: "Help & Support",
    description: "Get assistance with any issues",
    icon: "LifeBuoy",
    threadCount: 182,
    lastActive: new Date("2023-10-15T09:45:00")
  },
  {
    id: "4",
    name: "Feature Requests",
    description: "Suggest new features for the platform",
    icon: "Lightbulb",
    threadCount: 347,
    lastActive: new Date("2023-10-15T11:15:00")
  },
  {
    id: "5",
    name: "Introductions",
    description: "Introduce yourself to the community",
    icon: "Users",
    threadCount: 623,
    lastActive: new Date("2023-10-15T08:30:00")
  },
  {
    id: "6",
    name: "Off-Topic",
    description: "Discuss anything not related to our main topics",
    icon: "Coffee",
    threadCount: 892,
    lastActive: new Date("2023-10-15T12:00:00")
  }
];

// Mock threads
export const threads: Thread[] = [
  {
    id: "1",
    title: "Welcome to our new forum platform!",
    content: "We're excited to launch our new forum platform with improved features and performance.",
    categoryId: "2",
    authorId: "1",
    createdAt: new Date("2023-10-10T08:00:00"),
    updatedAt: new Date("2023-10-10T08:00:00"),
    replyCount: 42,
    viewCount: 1253,
    voteCount: 85,
    isPinned: true,
    isLocked: false,
    tags: ["announcement", "new", "welcome"]
  },
  {
    id: "2",
    title: "How do I change my profile picture?",
    content: "I've been trying to update my profile picture but can't find the option. Can someone help?",
    categoryId: "3",
    authorId: "4",
    createdAt: new Date("2023-10-12T14:30:00"),
    updatedAt: new Date("2023-10-12T14:30:00"),
    replyCount: 8,
    viewCount: 143,
    voteCount: 12,
    isPinned: false,
    isLocked: false,
    tags: ["profile", "help", "settings"]
  },
  {
    id: "3",
    title: "What's everyone working on this weekend?",
    content: "Just curious what projects everyone is tackling this weekend. I'm working on a new garden design!",
    categoryId: "1",
    authorId: "2",
    createdAt: new Date("2023-10-13T19:45:00"),
    updatedAt: new Date("2023-10-13T19:45:00"),
    replyCount: 27,
    viewCount: 356,
    voteCount: 31,
    isPinned: false,
    isLocked: false,
    tags: ["weekend", "projects", "discussion"]
  },
  {
    id: "4",
    title: "Feature request: Dark mode toggle",
    content: "It would be great to have a dark mode option that we can toggle easily from the navigation bar.",
    categoryId: "4",
    authorId: "3",
    createdAt: new Date("2023-10-14T11:20:00"),
    updatedAt: new Date("2023-10-14T11:20:00"),
    replyCount: 15,
    viewCount: 208,
    voteCount: 47,
    isPinned: false,
    isLocked: false,
    tags: ["feature", "darkmode", "ui"]
  },
  {
    id: "5",
    title: "Hello from Seattle!",
    content: "Just wanted to introduce myself. I'm a software developer from Seattle who loves hiking and coding!",
    categoryId: "5",
    authorId: "4",
    createdAt: new Date("2023-10-15T10:10:00"),
    updatedAt: new Date("2023-10-15T10:10:00"),
    replyCount: 12,
    viewCount: 87,
    voteCount: 19,
    isPinned: false,
    isLocked: false,
    tags: ["introduction", "seattle", "developer"]
  }
];

// Mock posts (replies)
export const posts: Post[] = [
  {
    id: "1",
    threadId: "1",
    authorId: "2",
    content: "This is amazing! The new interface looks so much cleaner.",
    createdAt: new Date("2023-10-10T08:30:00"),
    updatedAt: new Date("2023-10-10T08:30:00"),
    voteCount: 24,
    isAccepted: false
  },
  {
    id: "2",
    threadId: "1",
    authorId: "3",
    content: "I'm really liking the new upvoting system. Great job team!",
    createdAt: new Date("2023-10-10T09:15:00"),
    updatedAt: new Date("2023-10-10T09:15:00"),
    voteCount: 18,
    isAccepted: false
  },
  {
    id: "3",
    threadId: "2",
    authorId: "1",
    content: "Go to your account settings by clicking on your avatar in the top right, then select 'Edit Profile'. You should see an option to upload a new image there.",
    createdAt: new Date("2023-10-12T15:00:00"),
    updatedAt: new Date("2023-10-12T15:00:00"),
    voteCount: 7,
    isAccepted: true
  },
  {
    id: "4",
    threadId: "3",
    authorId: "3",
    content: "I'm working on a new React component library. It's been fun exploring new design patterns!",
    createdAt: new Date("2023-10-13T20:30:00"),
    updatedAt: new Date("2023-10-13T20:30:00"),
    voteCount: 12,
    isAccepted: false
  },
  {
    id: "5",
    threadId: "4",
    authorId: "2",
    content: "Totally agree! Dark mode would be a great addition. I find it easier on the eyes, especially when browsing at night.",
    createdAt: new Date("2023-10-14T12:45:00"),
    updatedAt: new Date("2023-10-14T12:45:00"),
    voteCount: 16,
    isAccepted: false
  }
];

// Helper function to get full thread data with author
export function getThreadWithDetails(threadId: string): Thread | undefined {
  const thread = threads.find(t => t.id === threadId);
  if (!thread) return undefined;
  
  const author = users.find(u => u.id === thread.authorId);
  return { ...thread, author };
}

// Helper function to get posts for a thread with author details
export function getPostsForThread(threadId: string): Post[] {
  return posts
    .filter(p => p.threadId === threadId)
    .map(post => {
      const author = users.find(u => u.id === post.authorId);
      return { ...post, author };
    });
}

// Helper function to get threads for a category with author details
export function getThreadsForCategory(categoryId: string): Thread[] {
  return threads
    .filter(t => t.categoryId === categoryId)
    .map(thread => {
      const author = users.find(u => u.id === thread.authorId);
      return { ...thread, author };
    });
}
