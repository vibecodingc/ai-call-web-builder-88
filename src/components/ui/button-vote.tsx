
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown } from "lucide-react";
import { animateVoteChange } from "@/lib/animation";

interface ButtonVoteProps {
  direction: "up" | "down";
  itemId: string;
  itemType: "thread" | "post";
  count: number;
  className?: string;
}

export function ButtonVote({ direction, itemId, itemType, count: initialCount, className }: ButtonVoteProps) {
  const [count, setCount] = useState(initialCount);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);
  
  const handleVote = (voteDirection: "up" | "down") => {
    const voteElement = document.getElementById(`vote-count-${itemId}`);
    
    if (userVote === voteDirection) {
      // Cancel vote
      setCount(prevCount => voteDirection === "up" ? prevCount - 1 : prevCount + 1);
      setUserVote(null);
      if (voteElement) {
        animateVoteChange(voteElement, voteDirection !== "up");
      }
    } else {
      // Change or new vote
      let change = voteDirection === "up" ? 1 : -1;
      
      // If changing vote, double the effect
      if (userVote !== null) {
        change *= 2;
      }
      
      setCount(prevCount => prevCount + change);
      setUserVote(voteDirection);
      
      if (voteElement) {
        animateVoteChange(voteElement, voteDirection === "up");
      }
    }
  };
  
  if (direction === "up") {
    return (
      <div className={cn("flex flex-col items-center", className)}>
        <button
          onClick={() => handleVote("up")}
          className={cn(
            "vote-button",
            userVote === "up" && "text-blue"
          )}
          aria-label="Upvote"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
        <span id={`vote-count-${itemId}`} className="text-sm font-medium py-1">
          {count}
        </span>
        <button
          onClick={() => handleVote("down")}
          className={cn(
            "vote-button",
            userVote === "down" && "text-red-400"
          )}
          aria-label="Downvote"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    );
  } else {
    return (
      <div className={cn("flex items-center", className)}>
        <button
          onClick={() => handleVote("up")}
          className={cn(
            "vote-button",
            userVote === "up" && "text-blue"
          )}
          aria-label="Upvote"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
        <span id={`vote-count-${itemId}`} className="text-sm font-medium px-2">
          {count}
        </span>
        <button
          onClick={() => handleVote("down")}
          className={cn(
            "vote-button",
            userVote === "down" && "text-red-400"
          )}
          aria-label="Downvote"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    );
  }
}
