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
    <div
      id="navbar-container"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "pt-4 px-4 md:px-8" : "pt-6 px-6"
      }`}
    >
      <nav
        id="navbar"
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-full px-6 py-3.5 flex justify-between items-center ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-xl border border-surface/20 py-2.5"
            : "bg-white/10 backdrop-blur-md border border-white/10"
        }`}
      >
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
            className={`transition-colors hover:text-accent font-sans ${
              isScrolled ? "text-text-secondary hover:text-accent" : "text-white/90 hover:text-white"
            }`}
          >
            About
          </a>
          <a
            href="#products"
            className={`transition-colors hover:text-accent font-sans ${
              isScrolled ? "text-text-secondary hover:text-accent" : "text-white/90 hover:text-white"
            }`}
          >
            Products
          </a>
          <a
            href="#capabilities"
            className={`transition-colors hover:text-accent font-sans ${
              isScrolled ? "text-text-secondary hover:text-accent" : "text-white/90 hover:text-white"
            }`}
          >
            Capabilities
          </a>
          <a
            href="#contact"
            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 font-sans ${
              isScrolled
                ? "bg-primary text-white hover:bg-accent hover:shadow-md"
                : "bg-white text-primary hover:bg-white/20 hover:text-white border border-transparent hover:border-white/20"
            }`}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className={`md:hidden p-2 rounded-full focus:outline-none transition-colors ${
            isScrolled ? "hover:bg-primary/5 text-primary" : "hover:bg-white/10 text-white"
          }`}
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
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-background/95 backdrop-blur-xl border border-surface/30 transition-all duration-300 origin-top shadow-2xl rounded-3xl ${
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
    </div>
  );
}
