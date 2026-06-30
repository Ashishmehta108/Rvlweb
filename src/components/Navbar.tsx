"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-surface/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className={`font-heading font-bold text-xl tracking-tight transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            RVL POLY
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#about"
            className={`transition-colors hover:text-accent ${
              isScrolled ? "text-text-secondary" : "text-surface/90 hover:text-white"
            }`}
          >
            About
          </a>
          <a
            href="#products"
            className={`transition-colors hover:text-accent ${
              isScrolled ? "text-text-secondary" : "text-surface/90 hover:text-white"
            }`}
          >
            Products
          </a>
          <a
            href="#capabilities"
            className={`transition-colors hover:text-accent ${
              isScrolled ? "text-text-secondary" : "text-surface/90 hover:text-white"
            }`}
          >
            Capabilities
          </a>
          <a
            href="#contact"
            className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
              isScrolled
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white text-primary hover:bg-surface/20 hover:text-white border border-transparent hover:border-white"
            }`}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={isScrolled ? "text-primary" : "text-white"}
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-surface/55 transition-all duration-300 origin-top ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-0 invisible h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4 font-medium text-sm text-text-secondary">
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-primary transition-colors py-2 border-b border-surface/10"
          >
            About Us
          </a>
          <a
            href="#products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-primary transition-colors py-2 border-b border-surface/10"
          >
            Our Products
          </a>
          <a
            href="#capabilities"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-primary transition-colors py-2 border-b border-surface/10"
          >
            Our Capabilities
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-white text-center py-3 rounded-full font-medium hover:bg-primary/90 transition-colors mt-2"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
