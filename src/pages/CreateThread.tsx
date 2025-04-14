
import React from "react";
import { ForumNavigation } from "@/components/forum-navigation";
import { ThreadCreator } from "@/components/ui/thread-creator";
import { ForumFooter } from "@/components/forum-footer";

const CreateThread = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <ForumNavigation />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-section-mobile md:text-section mb-8 bg-gradient-to-r from-blue to-blue-light bg-clip-text text-transparent animate-fade-in-down">Create a Thread</h1>
        <div className="animate-fade-in-up">
          <ThreadCreator />
        </div>
      </div>
      <ForumFooter />
    </div>
  );
};

export default CreateThread;
