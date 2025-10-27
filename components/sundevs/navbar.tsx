"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SundevsNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1
                className={`text-2xl font-bold transition-colors ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                ☀ Sundevs
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`transition-colors hover:text-primary-foreground ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className={`transition-colors hover:text-primary-foreground ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`transition-colors hover:text-primary-foreground ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`transition-colors hover:text-primary-foreground ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary md:hidden">
          <div className="container mx-auto px-4 pt-20">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white text-lg py-2 text-left hover:text-primary-foreground"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-white text-lg py-2 text-left hover:text-primary-foreground"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-white text-lg py-2 text-left hover:text-primary-foreground"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white text-lg py-2 text-left hover:text-primary-foreground"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
