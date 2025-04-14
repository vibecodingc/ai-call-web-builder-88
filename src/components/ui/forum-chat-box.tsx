
import React, { useState, useEffect, useRef } from "react";
import { Send, User, SmilePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { typeWriter } from "@/lib/animation";

interface Message {
  id: number;
  text: string;
  sender: "user" | "forum";
  isTyping?: boolean;
}

const initialMessages: Message[] = [
  { id: 1, text: "Welcome to ForumHub! How can I help you today?", sender: "forum" },
];

interface ForumChatBoxProps {
  className?: string;
  animated?: boolean;
  autoPlay?: boolean;
  compact?: boolean;
}

export function ForumChatBox({ 
  className, 
  animated = true, 
  autoPlay = true,
  compact = false
}: ForumChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>(compact ? [] : initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const predefinedResponses = [
    "That's a great question! Have you checked out our popular threads section?",
    "Many members are discussing that topic in the Tech category.",
    "You might find helpful insights in our community guidelines.",
    "Feel free to create a new thread if you can't find what you're looking for!",
    "Our moderators can help with that specific question."
  ];
  
  // Demo conversation flow for animated display
  const demoConversation = [
    { text: "How do I create a new thread?", sender: "user" as const },
    { text: "To create a new thread, click the 'New Thread' button in the navigation bar. You'll be asked to select a category and add your title and content.", sender: "forum" as const },
    { text: "Do I need an account to post?", sender: "user" as const },
    { text: "Yes, you'll need to register an account to create threads and interact with other users. Registration is free and only takes a minute!", sender: "forum" as const }
  ];
  
  // Auto scroll to bottom when new messages appear
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  // Autoplay demo conversation if enabled
  useEffect(() => {
    if (autoPlay && animated && messages.length <= initialMessages.length) {
      let timeout: number;
      let messageIndex = 0;
      
      const playConversation = () => {
        if (messageIndex < demoConversation.length) {
          const nextMessage = demoConversation[messageIndex];
          
          // Add user message
          setMessages(prev => [...prev, { 
            id: prev.length + 1, 
            text: nextMessage.text, 
            sender: nextMessage.sender 
          }]);
          
          // Add forum response with typing indicator
          if (nextMessage.sender === "user" && messageIndex + 1 < demoConversation.length) {
            timeout = window.setTimeout(() => {
              setIsTyping(true);
              
              timeout = window.setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, { 
                  id: prev.length + 2, 
                  text: demoConversation[messageIndex + 1].text, 
                  sender: "forum" 
                }]);
                messageIndex += 2;
                
                // Continue conversation after a pause
                timeout = window.setTimeout(playConversation, 2000);
              }, 2000);
            }, 1000);
          }
        }
      };
      
      // Start the demo conversation after a delay
      timeout = window.setTimeout(playConversation, 1500);
      
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [autoPlay, animated, messages.length]);
  
  // Handle sending a new message
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      setMessages([...messages, { 
        id: messages.length + 1, 
        text: inputValue.trim(), 
        sender: "user" 
      }]);
      
      setInputValue("");
      setIsTyping(true);
      
      // Simulate response after typing delay
      setTimeout(() => {
        setIsTyping(false);
        
        // Add forum response
        const randomResponse = predefinedResponses[
          Math.floor(Math.random() * predefinedResponses.length)
        ];
        
        setMessages(prev => [...prev, { 
          id: prev.length + 1, 
          text: randomResponse, 
          sender: "forum" 
        }]);
      }, 1500);
    }
  };
  
  // Handle enter key press
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div 
      className={cn(
        "chat-box w-full flex flex-col",
        compact ? "h-[320px]" : "h-[400px]",
        animated ? "animate-float animate-glow" : "",
        className
      )}
    >
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue mr-2"></div>
          <h3 className="font-medium">Community Chat</h3>
        </div>
        <div className="flex items-center text-xs text-gray-400">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
          <span>{compact ? "3" : "15"} online</span>
        </div>
      </div>
      
      <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent px-1">
        <div className="flex flex-col space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "chat-message",
                message.sender === "user" ? "message-right" : "message-left",
                message.sender === "user" ? "ml-auto" : "mr-auto"
              )}
            >
              <div className="flex items-start gap-2">
                {message.sender === "forum" && (
                  <div className="bg-blue/30 rounded-full p-1 mt-1">
                    <MessageSquareIcon className="w-4 h-4" />
                  </div>
                )}
                <div>
                  <div className="text-xs text-gray-400 mb-1">
                    {message.sender === "user" ? "You" : "ForumHub"}
                  </div>
                  <div className="text-sm">{message.text}</div>
                </div>
                {message.sender === "user" && (
                  <div className="bg-blue/20 rounded-full p-1 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="chat-message message-left mr-auto">
              <div className="flex items-center gap-2">
                <div className="bg-blue/30 rounded-full p-1">
                  <MessageSquareIcon className="w-4 h-4" />
                </div>
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>
      </div>
      
      <div className="mt-2">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your question..."
            className="w-full bg-muted rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue border border-white/10"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex">
            <button className="text-gray-400 hover:text-blue p-1" aria-label="Add emoji">
              <SmilePlus className="w-4 h-4" />
            </button>
            <button
              onClick={handleSendMessage}
              className="text-blue bg-blue/10 rounded-full p-1 hover:bg-blue/20"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Internal icon component to avoid import issues
function MessageSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}
