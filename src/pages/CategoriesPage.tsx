
import React, { useState } from "react";
import { ForumNavigation } from "@/components/forum-navigation";
import { ForumFooter } from "@/components/forum-footer";
import { CardCategory } from "@/components/ui/card-category";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Category } from "@/lib/forum-types";
import { createRevealClass } from "@/lib/animation";

// Mock categories data
const mockCategories: Category[] = [
  {
    id: "cat1",
    name: "Programming",
    description: "Discussions about programming languages, frameworks, and development practices",
    icon: "Code",
    threadCount: 324,
    lastActive: new Date(2025, 3, 14),
    color: "#3e95ff",
    subcategories: ["cat1-1", "cat1-2", "cat1-3"]
  },
  {
    id: "cat1-1",
    name: "JavaScript",
    description: "Everything about JavaScript, TypeScript, and related frameworks",
    icon: "FileJson",
    threadCount: 156,
    lastActive: new Date(2025, 3, 14),
    parentId: "cat1",
    color: "#f7df1e"
  },
  {
    id: "cat1-2",
    name: "Python",
    description: "Python programming language discussions and libraries",
    icon: "FileCode",
    threadCount: 98,
    lastActive: new Date(2025, 3, 13),
    parentId: "cat1",
    color: "#306998"
  },
  {
    id: "cat1-3",
    name: "Web Development",
    description: "HTML, CSS, front-end frameworks, and web development tools",
    icon: "Globe",
    threadCount: 70,
    lastActive: new Date(2025, 3, 12),
    parentId: "cat1",
    color: "#e34c26"
  },
  {
    id: "cat2",
    name: "Design",
    description: "UI/UX design, graphics, animations, and creative discussions",
    icon: "PenTool",
    threadCount: 187,
    lastActive: new Date(2025, 3, 14),
    color: "#ff3e95"
  },
  {
    id: "cat3",
    name: "Machine Learning",
    description: "AI, neural networks, data science, and machine learning techniques",
    icon: "Brain",
    threadCount: 121,
    lastActive: new Date(2025, 3, 11),
    color: "#8b5cf6"
  },
  {
    id: "cat4",
    name: "DevOps",
    description: "Deployment, CI/CD, containerization, and server management",
    icon: "Server",
    threadCount: 94,
    lastActive: new Date(2025, 3, 10),
    color: "#10b981"
  },
  {
    id: "cat5",
    name: "Mobile Development",
    description: "iOS, Android, React Native, Flutter, and mobile app development",
    icon: "Smartphone",
    threadCount: 143,
    lastActive: new Date(2025, 3, 9),
    color: "#f97316"
  },
  {
    id: "cat6",
    name: "Community",
    description: "Events, announcements, jobs, and general community discussions",
    icon: "Users",
    threadCount: 76,
    lastActive: new Date(2025, 3, 14),
    color: "#ffc928"
  }
];

const CategoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<'all' | 'main'>('all');
  
  const filteredCategories = mockCategories.filter(category => {
    // Filter by search query
    const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by view mode                     
    const matchesViewMode = viewMode === 'all' || (viewMode === 'main' && !category.parentId);
    
    return matchesSearch && matchesViewMode;
  });
  
  return (
    <div className="min-h-screen bg-navy text-white">
      <ForumNavigation />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-section-mobile md:text-section mb-8 bg-gradient-to-r from-blue to-blue-light bg-clip-text text-transparent">Categories</h1>
        
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="relative flex-grow">
            <Input
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-white/10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          
          <div className="flex">
            <button 
              className={`px-4 py-2 rounded-l-md ${viewMode === 'all' ? 'bg-blue text-white' : 'bg-card text-gray-300'}`}
              onClick={() => setViewMode('all')}
            >
              All Categories
            </button>
            <button 
              className={`px-4 py-2 rounded-r-md ${viewMode === 'main' ? 'bg-blue text-white' : 'bg-card text-gray-300'}`}
              onClick={() => setViewMode('main')}
            >
              Main Categories
            </button>
          </div>
        </div>
        
        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <div 
              key={category.id} 
              className={createRevealClass(0.1 * index, "up")}
            >
              <CardCategory category={category} />
            </div>
          ))}
          
          {filteredCategories.length === 0 && (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-400">No categories found matching your search.</p>
            </div>
          )}
        </div>
      </div>
      <ForumFooter />
    </div>
  );
};

export default CategoriesPage;
