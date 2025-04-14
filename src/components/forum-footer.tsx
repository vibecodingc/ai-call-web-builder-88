
import React from "react";
import { MessageSquare, Github, Twitter, Facebook } from "lucide-react";

export function ForumFooter() {
  return (
    <footer className="bg-navy py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <MessageSquare className="w-6 h-6 text-blue mr-2" />
              <span className="font-bold text-lg">ForumHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              A community-driven discussion platform where ideas flourish and connections are made.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Categories", "Popular", "Recent", "Members", "Guidelines"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { label: "Email", value: "help@forumhub.com" },
                { label: "Report Issue", value: "support@forumhub.com" },
                { label: "Documentation", value: "docs.forumhub.com" },
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
              Subscribe to get weekly updates on trending topics and community news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-navy-light border border-white/10 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue text-sm flex-grow"
              />
              <button className="bg-blue text-white px-4 py-2 rounded-r-md hover:bg-blue-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            ©2023 ForumHub - All Rights Reserved
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <div className="flex space-x-4">
              {[Github, Twitter, Facebook].map((SocialIcon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center hover:bg-blue/20 transition-colors"
                >
                  <SocialIcon className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
