
export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
  joinDate: Date;
  postCount: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  threadCount: number;
  lastActive: Date;
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
}

export interface Vote {
  userId: string;
  itemId: string;
  itemType: 'thread' | 'post';
  value: 1 | -1;
  createdAt: Date;
}
