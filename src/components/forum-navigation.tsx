import React, { useState, useEffect } from "react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { cn } from "@/lib/utils";
import { MessageSquare, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { NotificationsDropdown } from "@/components/ui/notifications-dropdown";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Popular", href: "/popular" },
  { name: "Categories", href: "/categories" },
  { name: "Bookmarks", href: "/bookmarks" },
];

export function ForumNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-navy/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <MessageSquare className="w-8 h-8 text-blue mr-2 group-hover:text-blue-light transition-colors" />
          <span className="font-bold text-xl group-hover:text-blue-light transition-colors">ForumHub</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            <NotificationsDropdown />
            
            <Link to="/profile" className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=40&h=40&q=80" 
                alt="Profile" 
                className="w-8 h-8 rounded-full border border-white/20 hover:border-blue transition-colors"
              />
            </Link>
          </div>
          
          <Link to="/create">
            <ButtonGradient>New Thread</ButtonGradient>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <NotificationsDropdown />
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Simplified mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-light fixed inset-x-0 top-16 p-6 z-40 animate-fade-in">
          <ul className="flex flex-col space-y-4 mb-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-gray-300 hover:text-white block py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 py-2 mb-4 border-t border-b border-white/10">
            <Link to="/profile" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=40&h=40&q=80" 
                alt="Profile" 
                className="w-8 h-8 rounded-full border border-white/20"
              />
              <span className="ml-2">My Profile</span>
            </Link>
          </div>
          <Link to="/create" onClick={() => setMobileMenuOpen(false)}>
            <ButtonGradient className="w-full">New Thread</ButtonGradient>
          </Link>
        </div>
      )}
    </header>
  );
}
