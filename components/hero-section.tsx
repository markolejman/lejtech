"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
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
    <section id="hero" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="parallax-text text-center" style={{ "--scroll-y": `${scrollY}px` } as React.CSSProperties}>
        <h1
          className="text-8xl md:text-9xl lg:text-[12rem] text-zinc-900 tracking-wider drop-shadow-sm mb-12 font-serif font-normal"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          LEJTECH
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-zinc-900 text-white hover:bg-zinc-800 px-8 py-3 text-lg font-medium transition-all duration-500 ease-in-out rounded-full hover:rounded-none"
          >
            Get in touch
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            variant="outline"
            className="bg-white text-zinc-900 border-2 border-zinc-900 hover:bg-white hover:text-zinc-900 px-8 py-3 text-lg font-medium transition-all duration-500 ease-in-out rounded-full hover:rounded-none"
          >
            Previous work
          </Button>
        </div>
      </div>
    </section>
  )
}
