
import React from "react";
import { ForumNavigation } from "@/components/forum-navigation";
import { ThreadCreator } from "@/components/ui/thread-creator";
import { ForumFooter } from "@/components/forum-footer";
import { CursorSwitch } from "@/components/ui/cursor-switch";

const CreateThread = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <ForumNavigation />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-section-mobile md:text-section mb-8">Create a Thread</h1>
        <ThreadCreator />
        
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Cursor Style</h3>
          <CursorSwitch />
        </div>
      </div>
      <ForumFooter />
    </div>
  );
};

export default CreateThread;
