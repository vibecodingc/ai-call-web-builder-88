
import React from "react";
import { cn } from "@/lib/utils";
import { Thread } from "@/lib/forum-types";
import { formatDistanceToNow } from "date-fns";
import { MessageSquare, Eye, PinIcon, LockIcon } from "lucide-react";
import { ButtonVote } from "@/components/ui/button-vote";

interface CardThreadProps {
  thread: Thread;
  className?: string;
}

export function CardThread({ thread, className }: CardThreadProps) {
  return (
    <div className={cn("thread-item flex", className)}>
      <div className="flex flex-col items-center mr-4">
        <ButtonVote 
          direction="up" 
          itemId={thread.id} 
          itemType="thread" 
          count={thread.voteCount}
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-1">
          {thread.isPinned && <PinIcon className="w-3 h-3 text-blue" />}
          {thread.isLocked && <LockIcon className="w-3 h-3 text-amber-500" />}
          <a href={`/thread/${thread.id}`} className="text-lg font-semibold hover:text-blue transition-colors">
            {thread.title}
          </a>
        </div>
        
        <div className="text-sm text-gray-400 mb-2">
          Posted by {thread.author?.name || 'Unknown'} • {formatDistanceToNow(thread.createdAt)} ago
        </div>
        
        {thread.tags && thread.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {thread.tags.map(tag => (
              <span 
                key={tag} 
                className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            <span>{thread.replyCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{thread.viewCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
