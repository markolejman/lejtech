"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["hero", "about", "projects", "contact"];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "mx-4 mt-4 rounded-[32px]" : "rounded-[0px]"
      }`}
    >
      <div
        className={`relative w-full ${
          isScrolled
            ? "bg-white/50 backdrop-blur-md border border-white/20"
            : "bg-white/50 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-semibold text-[#303032] transition-colors duration-300"
            >
              LEJTECH
            </motion.div>

            {/* Desktop Menu */}
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
                      activeSection === id
                        ? "text-[#303032] bg-white/80"
                        : "text-[#303032]/80 hover:text-[#303032] hover:bg-white/60"
                    }
                  `}
                >
                  {label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-50"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden pt-4"
              >
                <div className="flex flex-col items-center gap-2">
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
                        w-full px-3 py-2 text-base font-medium
                        transition-all duration-300 ease-in-out
                        ${
                          activeSection === id
                            ? "text-[#303032] bg-white/80"
                            : "text-[#303032]/80 hover:text-[#303032] hover:bg-white/60"
                        }
                      `}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
