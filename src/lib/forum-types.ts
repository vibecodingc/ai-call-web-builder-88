
export interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
  joinDate: Date;
  postCount: number;
  reputation?: number;
  followers?: number;
  following?: number;
  badges?: Badge[];
  coverImage?: string;
  location?: string;
  website?: string;
  socialLinks?: SocialLink[];
  isOnline?: boolean;
  lastActive?: Date;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earnedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  threadCount: number;
  lastActive: Date;
  color?: string;
  parentId?: string;
  subcategories?: string[];
}

export interface Tag {
  id: string;
  name: string;
  description?: string;
  color?: string;
  count?: number;
}

export interface Thread {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  authorId: string;
  author?: User;
  createdAt: Date;
  updatedAt: Date;
  replyCount: number;
  viewCount: number;
  voteCount: number;
  isPinned: boolean;
  isLocked: boolean;
  tags?: string[];
  attachments?: Attachment[];
  isBookmarked?: boolean;
  isFollowing?: boolean;
  lastReplyAt?: Date;
  lastReplier?: User;
}

export interface Attachment {
  id: string;
  type: 'image' | 'file' | 'link';
  url: string;
  name?: string;
  size?: number;
  thumbnailUrl?: string;
}

export interface Post {
  id: string;
  threadId: string;
  authorId: string;
  author?: User;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  voteCount: number;
  isAccepted: boolean;
  attachments?: Attachment[];
  mentions?: string[];
  isEdited?: boolean;
}

export interface Vote {
  userId: string;
  itemId: string;
  itemType: 'thread' | 'post';
  value: 1 | -1;
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'reply' | 'mention' | 'like' | 'follow' | 'badge' | 'system';
  read: boolean;
  createdAt: Date;
  actionUserId?: string;
  actionUser?: User;
  contentId?: string;
  contentType?: 'thread' | 'post' | 'comment';
  message: string;
  link?: string;
}

export interface SearchFilters {
  query: string;
  categories?: string[];
  tags?: string[];
  dateRange?: {
    from: Date;
    to: Date;
  };
  author?: string;
  sortBy?: 'relevance' | 'newest' | 'oldest' | 'most_replies' | 'most_views';
}
