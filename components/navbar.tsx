"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glassmorphism mx-4 mt-4" : "bg-zinc-50/90 backdrop-blur-sm border-b border-zinc-200/50"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl text-zinc-900 font-semibold">LEJTECH</div>
          <div className="hidden md:flex space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100/50 transition-all duration-200"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100/50 transition-all duration-200"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              className="text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100/50 transition-all duration-200"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100/50 transition-all duration-200"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
