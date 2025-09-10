"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const sections = ["hero", "about", "projects", "contact"];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Function to check which section is currently in view
  const checkActiveSection = () => {
    const scrollPosition = window.scrollY + 100; // Offset for navbar height

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= 100 && bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      checkActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    checkActiveSection();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md mx-4 mt-4 rounded-full border border-white/20"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className={`text-2xl font-semibold transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-zinc-900"
            }`}
          >
            LEJTECH
          </div>
          <div className="hidden md:flex space-x-6">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <Button
                key={id}
                variant="ghost"
                onClick={() => scrollToSection(id)}
                className={`
                  px-6 py-2 text-base font-medium
                  transition-all duration-300 ease-in-out
                  ${
                    isScrolled
                      ? activeSection === id
                        ? "text-white bg-white/20"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                      : activeSection === id
                      ? "text-zinc-900 bg-zinc-100"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50"
                  }
                `}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
