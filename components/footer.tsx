"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, Github, ExternalLink, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[linear-gradient(135deg,#18181b,#393538,#18181b)] text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img src="/lejtech.png" alt="LEJTECH Logo" className="h-24 mb-4" />
            <p className="text-primary-foreground/80 leading-relaxed">
              Professional web development solutions with a focus on modern
              technologies and exceptional user experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col space-y-3">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("hero")}
                className="text-primary-foreground/80 hover:text-white p-0 h-auto justify-start hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out w-32"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-primary-foreground/80 hover:text-white p-0 h-auto justify-start hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out w-32"
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
                className="text-primary-foreground/80 hover:text-white p-0 h-auto justify-start hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out w-32"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="text-primary-foreground/80 hover:text-white p-0 h-auto justify-start hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out w-32"
              >
                Contact
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-col space-y-3">
              <Button
                variant="ghost"
                asChild
                className="text-primary-foreground/80 hover:text-white p-0 h-auto justify-start hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out w-32"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="text-primary-foreground/80 hover:text-white p-0 h-auto justify-start hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out w-32"
              >
                <a
                  href="https://fiverr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Fiverr
                </a>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="text-primary-foreground/80 hover:text-white p-0 h-auto justify-start hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out w-32"
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © 2025 LEJTECH. All rights reserved. | Registered Business ®
            </div>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-2"
            >
              <ArrowUp size={16} />
              Back To Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
