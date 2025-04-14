
import React, { useState, useEffect } from "react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { cn } from "@/lib/utils";
import { MessageSquare, Menu, X, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Popular", href: "/popular" },
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
            <button className="text-gray-300 hover:text-white relative group">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-blue rounded-full w-4 h-4 text-xs flex items-center justify-center group-hover:bg-blue-light transition-colors">3</span>
            </button>
          </div>
          
          <Link to="/create">
            <ButtonGradient>New Thread</ButtonGradient>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
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
          <Link to="/create" onClick={() => setMobileMenuOpen(false)}>
            <ButtonGradient className="w-full">New Thread</ButtonGradient>
          </Link>
        </div>
      )}
    </header>
  );
}
