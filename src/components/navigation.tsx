
import React, { useState, useEffect } from "react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { cn } from "@/lib/utils";
import { Headset, Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "Pricing", href: "#pricing" },
];

export function Navigation() {
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
        <a href="#" className="flex items-center">
          <Headset className="w-8 h-8 text-blue mr-2" />
          <span className="font-bold text-xl">AI Call</span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <ButtonGradient>Start For Free</ButtonGradient>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-light fixed inset-x-0 top-16 p-6 z-40 animate-fade-in">
          <ul className="flex flex-col space-y-4 mb-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white block py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <ButtonGradient className="w-full">Start For Free</ButtonGradient>
        </div>
      )}
    </header>
  );
}
