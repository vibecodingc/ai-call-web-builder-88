
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CardCategory } from "@/components/ui/card-category";
import { categories } from "@/lib/mock-data";
import { createRevealClass } from "@/lib/animation";

export function ForumCategoriesSection() {
  return (
    <section className="py-16 px-6 overflow-hidden" id="categories">
      <div className="container mx-auto">
        <SectionHeading 
          title="Browse Categories" 
          subtitle="Find discussions organized by topic to easily navigate to your areas of interest"
          className="animate-fade-in"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={createRevealClass(0.1 * index, "up")}
            >
              <CardCategory 
                category={category} 
                className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
