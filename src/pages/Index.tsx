
import React from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { LanguagesSection } from "@/components/languages-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { IntegrationSection } from "@/components/integration-section";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

const Index = () => {
  // Add intersection observer for animation
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <LanguagesSection />
      <UseCasesSection />
      <IntegrationSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
