
import React from "react";
import { cn } from "@/lib/utils";
import { Post } from "@/lib/forum-types";
import { formatDistanceToNow } from "date-fns";
import { CheckCircle2, Flag } from "lucide-react";
import { ButtonVote } from "./button-vote";
import { ButtonGradient } from "./button-gradient";

interface CardPostProps {
  post: Post;
  className?: string;
}

export function CardPost({ post, className }: CardPostProps) {
  return (
    <div className={cn("bg-card rounded-lg p-5 mb-4 border border-white/10", className)}>
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <ButtonVote
            direction="up"
            itemId={post.id}
            itemType="post"
            count={post.voteCount}
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex justify-between mb-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{post.author?.name || 'Unknown'}</span>
                {post.isAccepted && (
                  <span className="flex items-center text-green-400 text-xs">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Solution
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-400">
                Posted {formatDistanceToNow(post.createdAt)} ago
              </div>
            </div>
            
            <button className="text-gray-400 hover:text-white" aria-label="Report post">
              <Flag className="w-4 h-4" />
            </button>
          </div>
          
          <div className="prose prose-invert max-w-none mb-4">
            <p>{post.content}</p>
          </div>
          
          <div className="flex justify-end gap-2">
            <ButtonGradient variant="ghost" size="sm">Reply</ButtonGradient>
            <ButtonGradient variant="ghost" size="sm">Share</ButtonGradient>
          </div>
        </div>
      </div>
    </div>
  );
}
