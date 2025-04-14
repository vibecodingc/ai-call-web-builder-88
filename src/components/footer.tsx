
import React from "react";
import { Headset } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Headset className="w-6 h-6 text-blue mr-2" />
              <span className="font-bold text-lg">AI Call</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered voice agents that handle your phone calls with natural conversation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Features", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              {[
                { label: "Email", value: "hello@aicall.com" },
                { label: "Phone", value: "(555) 123-4567" },
                { label: "Support", value: "support@aicall.com" },
              ].map((item) => (
                <li key={item.label} className="text-gray-400">
                  <span className="font-medium text-gray-300">{item.label}:</span> {item.value}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest news and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-navy-light border border-white/10 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue text-sm"
              />
              <button className="bg-blue text-white px-4 py-2 rounded-r-md hover:bg-blue-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            ©2023 AI Call - All Rights Reserved
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <div className="flex space-x-4">
              {["facebook", "twitter", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center hover:bg-blue/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-blue/70 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
