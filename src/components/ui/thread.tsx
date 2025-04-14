
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { Heart, Bookmark, MessageSquare, Share2, MoreHorizontal, Tag, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { animateElement } from "@/lib/animation";
import { Tag as TagType } from "@/lib/forum-types";
import { useToast } from "@/hooks/use-toast";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  tags?: TagType[];
  viewCount?: number;
  isPinned?: boolean;
  isLocked?: boolean;
}

export function Thread({ 
  id, 
  author, 
  content, 
  createdAt, 
  likes, 
  replies, 
  images, 
  className,
  tags,
  viewCount = 0,
  isPinned = false,
  isLocked = false
}: ThreadProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showFullContent, setShowFullContent] = useState(false);
  const { toast } = useToast();
  
  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    
    // Fix the type error by casting SVGSVGElement to unknown first, then to HTMLElement
    const target = e.currentTarget.querySelector("svg") as unknown as HTMLElement;
    if (target) {
      animateElement(target, isLiked ? "vote-decrease" : "vote-increase", 800);
    }
    
    // Show toast notification
    toast({
      title: isLiked ? "Removed like" : "Added like",
      description: isLiked 
        ? "You've removed your like from this thread" 
        : "You've liked this thread",
      duration: 2000,
    });
  };
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    
    // Show toast notification
    toast({
      title: isBookmarked ? "Removed bookmark" : "Added bookmark",
      description: isBookmarked 
        ? "Thread removed from your bookmarks" 
        : "Thread saved to your bookmarks",
      duration: 2000,
    });
  };
  
  const handleShare = () => {
    // Create a shareable URL
    const shareUrl = `${window.location.origin}/thread/${id}`;
    
    // Try to use the Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: content.substring(0, 50) + "...",
        text: `Check out this thread by ${author.name}`,
        url: shareUrl,
      });
    } else {
      // Fall back to copying to clipboard
      navigator.clipboard.writeText(shareUrl).then(() => {
        toast({
          title: "Link copied!",
          description: "Thread link copied to clipboard",
          duration: 2000,
        });
      });
    }
  };
  
  // Determine if content should be truncated
  const isLongContent = content.length > 280;
  const displayContent = isLongContent && !showFullContent 
    ? content.substring(0, 280) + "..." 
    : content;

  return (
    <div 
      className={cn(
        "bg-card rounded-xl border border-white/10 p-4 mb-4 transition-all hover:bg-card/80", 
        className,
        isPinned && "border-l-4 border-l-blue"
      )}
    >
      {isPinned && (
        <div className="mb-2 text-xs font-medium text-blue flex items-center">
          <span className="inline-block w-1 h-1 bg-blue rounded-full mr-1"></span>
          Pinned Thread
        </div>
      )}
      
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-navy-light border border-white/10 text-white">
                <DropdownMenuLabel>Thread Options</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem className="hover:bg-white/5 cursor-pointer">
                  Report Thread
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/5 cursor-pointer">
                  Mute Author
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/5 cursor-pointer">
                  Copy Link
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="mb-3">
            <p className="whitespace-pre-wrap">{displayContent}</p>
            
            {isLongContent && (
              <button 
                onClick={() => setShowFullContent(!showFullContent)}
                className="text-blue hover:text-blue-light text-sm mt-1"
              >
                {showFullContent ? "Show less" : "Read more"}
              </button>
            )}
          </div>
          
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map(tag => (
                <Link 
                  key={tag.id}
                  to={`/tag/${tag.name}`}
                  className="flex items-center text-xs bg-white/10 hover:bg-white/15 px-2 py-1 rounded-full text-gray-300 transition-colors"
                >
                  <Tag size={12} className="mr-1" />
                  {tag.name}
                </Link>
              ))}
            </div>
          )}
          
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
            
            <div className="flex items-center gap-1 text-gray-400">
              <Eye size={16} />
              <span className="text-xs">{viewCount}</span>
            </div>
            
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
            
            <button 
              onClick={handleShare}
              className="flex items-center gap-1 hover:text-blue transition-colors"
            >
              <Share2 size={18} />
            </button>
          </div>
          
          {isLocked && (
            <div className="mt-3 text-xs text-amber-400 border-t border-white/10 pt-2">
              This thread has been locked. No new replies can be added.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
