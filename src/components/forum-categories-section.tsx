
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CardCategory } from "@/components/ui/card-category";
import { categories } from "@/lib/mock-data";
import { createRevealClass } from "@/lib/animation";

export function ForumCategoriesSection() {
  return (
    <section className="py-16 px-6" id="categories">
      <div className="container mx-auto">
        <SectionHeading 
          title="Browse Categories" 
          subtitle="Find discussions organized by topic to easily navigate to your areas of interest"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={createRevealClass(0.1 * index, "up")}
            >
              <CardCategory category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
