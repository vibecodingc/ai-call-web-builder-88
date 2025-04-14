import React, { useState } from "react";
import { ButtonGradient } from "./button-gradient";
import { Image, Smile, AtSign, Hash, Paperclip } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useNotifications } from "@/hooks/use-notifications";

export function ThreadCreator() {
  const [content, setContent] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addNotification } = useNotifications();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImages([...images, ...newFiles]);
      
      // Create and store preview URLs
      const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
      setImagePreviewUrls([...imagePreviewUrls, ...newPreviewUrls]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call (in a real app, this would be an actual API request)
    setTimeout(() => {
      // Generate a mock thread
      const newThread = {
        id: `thread-${Date.now()}`,
        author: {
          name: "Current User",
          avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=80",
          username: "currentuser",
        },
        content: content,
        createdAt: new Date(),
        likes: 0,
        replies: 0,
        images: imagePreviewUrls
      };

      // In a real app, we would save the thread to a database
      console.log("Thread created:", newThread);
      
      // Reset form
      setContent("");
      setImages([]);
      setImagePreviewUrls([]);
      setIsSubmitting(false);
      
      // Show success message
      toast({
        title: "Success!",
        description: "Your thread has been posted.",
      });

      // Add a notification for the new post
      addNotification({
        type: "post",
        read: false,
        userId: "user-1",
        actionUserId: "user-1",
        actionUser: {
          id: "user-1",
          name: "Current User",
          username: "currentuser",
          avatarUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=80",
          joinDate: new Date(),
          postCount: 1
        },
        contentId: newThread.id,
        contentType: "thread",
        message: "created a new thread",
        link: `/profile/currentuser`
      });

      // Redirect to profile page
      navigate("/profile/currentuser");
    }, 1000);
  };

  const removeImage = (index: number) => {
    // Create new arrays without the image at the specified index
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    
    // Also remove the preview URL and revoke it to free memory
    const newPreviewUrls = [...imagePreviewUrls];
    URL.revokeObjectURL(newPreviewUrls[index]);
    newPreviewUrls.splice(index, 1);
    setImagePreviewUrls(newPreviewUrls);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-white/10 p-4 transition-all">
      <div className="mb-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 bg-transparent border-none focus:ring-0 text-white resize-none min-h-[100px]"
          placeholder="What's happening?"
          required
        />
      </div>
      
      {imagePreviewUrls.length > 0 && (
        <div className="mb-4 grid grid-cols-2 md:grid-cols-3 gap-2">
          {imagePreviewUrls.map((url, index) => (
            <div key={index} className="relative group">
              <img 
                src={url} 
                alt={`Upload preview ${index + 1}`}
                className="w-full h-24 object-cover rounded-md"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-black/70 text-white p-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
      
      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-2">
          <label className="cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors interactive">
            <Image className="w-5 h-5 text-blue" />
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageChange}
              multiple
            />
          </label>
          <button type="button" className="p-2 rounded-full hover:bg-white/10 transition-colors interactive">
            <Smile className="w-5 h-5 text-blue" />
          </button>
          <button type="button" className="p-2 rounded-full hover:bg-white/10 transition-colors interactive">
            <AtSign className="w-5 h-5 text-blue" />
          </button>
          <button type="button" className="p-2 rounded-full hover:bg-white/10 transition-colors interactive">
            <Hash className="w-5 h-5 text-blue" />
          </button>
          <button type="button" className="p-2 rounded-full hover:bg-white/10 transition-colors interactive">
            <Paperclip className="w-5 h-5 text-blue" />
          </button>
        </div>
        
        <ButtonGradient
          type="submit"
          disabled={!content && imagePreviewUrls.length === 0 || isSubmitting}
        >
          {isSubmitting ? "Posting..." : "Post"}
        </ButtonGradient>
      </div>
    </form>
  );
}
