
import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button
        className="py-4 w-full flex justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp size={20} className="text-blue flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-blue flex-shrink-0" />
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 pb-4"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const faqs = [
    {
      question: "How does AI Call work?",
      answer:
        "AI Call uses advanced language models and text-to-speech technology to create natural-sounding voice agents. When someone calls your number, our AI listens, understands the context, and responds appropriately based on your custom configurations.",
    },
    {
      question: "Can I customize how my AI agent sounds and responds?",
      answer:
        "Absolutely! You can choose from various voices, languages, and accents. You can also customize responses, tone, and conversation flow to match your brand identity and business requirements.",
    },
    {
      question: "What languages are supported?",
      answer:
        "AI Call supports over 40 languages including English, Spanish, French, German, Italian, Portuguese, Japanese, Chinese, and many more. Each language offers multiple voice options and regional accents.",
    },
    {
      question: "What kind of businesses can benefit from AI Call?",
      answer:
        "Any business that handles phone calls can benefit from AI Call. This includes service businesses, healthcare providers, retail stores, restaurants, real estate agencies, law firms, educational institutions, and more.",
    },
    {
      question: "How does billing work? Are there any hidden fees?",
      answer:
        "Our pricing is transparent and based on the plan you choose. You'll only pay for what's included in your plan with no hidden fees or surprise charges. For usage beyond your plan's limits, we'll notify you before any additional charges occur.",
    },
    {
      question: "Can I integrate AI Call with my existing software?",
      answer:
        "Yes, AI Call integrates with popular CRM systems, calendars, help desks, and communication platforms. We also offer a robust API for custom integrations with your existing tools and workflows.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-navy-light">
      <div className="container mx-auto">
        <SectionHeading
          title="Have Questions? We Have Answers"
          subtitle="Everything you need to know about our AI voice agents"
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
