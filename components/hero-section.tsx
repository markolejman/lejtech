"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="parallax-text text-center"
        style={{ "--scroll-y": `${scrollY}px` } as React.CSSProperties}
      >
        <h1
          className="text-7xl md:text-8xl lg:text-9xl text-zinc-50 tracking-wider drop-shadow-sm mb-12 font-serif font-light"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          LEJTECH
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-zinc-50 text-zinc-900 hover:bg-zinc-200 px-10 py-4 text-xl font-medium transition-all duration-300 ease-in-out rounded-[30px] hover:rounded-[4px]"
          >
            Get in touch
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            variant="outline"
            className="bg-transparent text-zinc-50 border-2 border-zinc-50 hover:bg-zinc-50/10 px-10 py-4 text-xl font-medium transition-all duration-300 ease-in-out rounded-[30px] hover:rounded-[4px]"
          >
            Previous work
          </Button>
        </div>
      </div>
    </section>
  );
}
