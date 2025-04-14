
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { Heart, Bookmark, MessageSquare, Share2, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { animateElement } from "@/lib/animation";

interface ThreadProps {
  id: string;
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  content: string;
  createdAt: Date;
  likes: number;
  replies: number;
  images?: string[];
  className?: string;
}

export function Thread({ id, author, content, createdAt, likes, replies, images, className }: ThreadProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    
    // Fix the type error by casting SVGSVGElement to unknown first, then to HTMLElement
    const target = e.currentTarget.querySelector("svg") as unknown as HTMLElement;
    if (target) {
      animateElement(target, isLiked ? "vote-decrease" : "vote-increase", 800);
    }
  };
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div 
      className={cn(
        "bg-card rounded-xl border border-white/10 p-4 mb-4 transition-all hover:bg-card/80", 
        className
      )}
    >
      <div className="flex gap-3">
        <Link to={`/profile/${author.username}`} className="flex-shrink-0">
          <img 
            src={author.avatar} 
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover border border-white/20"
          />
        </Link>
        
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-1">
            <div>
              <Link to={`/profile/${author.username}`} className="font-medium hover:underline">
                {author.name}
              </Link>
              <span className="text-gray-400 text-sm ml-2">@{author.username}</span>
              <span className="text-gray-400 text-sm ml-2">·</span>
              <span className="text-gray-400 text-sm ml-2">
                {formatDistanceToNow(createdAt, { addSuffix: true })}
              </span>
            </div>
            
            <button className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors">
              <MoreHorizontal size={18} />
            </button>
          </div>
          
          <div className="mb-3">
            <p className="whitespace-pre-wrap">{content}</p>
          </div>
          
          {images && images.length > 0 && (
            <div className={cn(
              "mb-3 rounded-xl overflow-hidden",
              images.length === 1 ? "grid-cols-1" : "grid grid-cols-2 gap-1"
            )}>
              {images.map((img, i) => (
                <img 
                  key={i}
                  src={img} 
                  alt={`Thread image ${i + 1}`}
                  className={cn(
                    "object-cover w-full",
                    images.length === 1 ? "max-h-96" : "h-40"
                  )}
                />
              ))}
            </div>
          )}
          
          <div className="flex justify-between text-gray-400 pt-2">
            <Link 
              to={`/thread/${id}`}
              className="flex items-center gap-1 hover:text-blue transition-colors"
            >
              <MessageSquare size={18} />
              <span className="text-sm">{replies}</span>
            </Link>
            
            <button 
              onClick={handleLike}
              className={cn(
                "flex items-center gap-1 transition-colors",
                isLiked ? "text-red-500" : "hover:text-red-500"
              )}
            >
              <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
              <span className="text-sm">{likeCount}</span>
            </button>
            
            <button 
              onClick={handleBookmark}
              className={cn(
                "flex items-center gap-1 transition-colors",
                isBookmarked ? "text-blue" : "hover:text-blue"
              )}
            >
              <Bookmark size={18} fill={isBookmarked ? "currentColor" : "none"} />
            </button>
            
            <button className="flex items-center gap-1 hover:text-blue transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
