"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { NeatGradient } from "@firecms/neat";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const gradientRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const initGradient = (canvas: HTMLCanvasElement) => {
      // Cleanup previous instance if it exists
      if (gradientRef.current) {
        gradientRef.current.destroy();
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      gradientRef.current = new NeatGradient({
        ref: canvas,
        colors: [
          { color: "#B9B9FF", enabled: true },
          { color: "#9FA6F5", enabled: true },
          { color: "#C5C5FF", enabled: true },
          { color: "#FFA6D3", enabled: true },
          { color: "#E1F0F5", enabled: false },
        ],
        speed: 4,
        horizontalPressure: 2,
        verticalPressure: 10,
        waveFrequencyX: 2,
        waveFrequencyY: 10,
        waveAmplitude: 10,
        shadows: 10,
        highlights: 0,
        colorBrightness: 1.2,
        colorSaturation: -3,
        wireframe: false,
        colorBlending: 10,
        backgroundColor: "#003FFF",
        backgroundAlpha: 0,
        grainScale: 0,
        grainSparsity: 0,
        grainIntensity: 0,
        grainSpeed: 10,
        resolution: 2,
        yOffset: 0,
      });
    };

    const handleResize = () => {
      const canvas = document.getElementById(
        "neat-background"
      ) as HTMLCanvasElement;
      if (canvas) {
        initGradient(canvas);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial setup
    const canvas = document.getElementById(
      "neat-background"
    ) as HTMLCanvasElement;
    if (canvas) {
      initGradient(canvas);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (gradientRef.current) {
        gradientRef.current.destroy();
      }
    };
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <canvas
        id="neat-background"
        className="absolute inset-0 z-0 w-full h-full"
      ></canvas>
      <div
        className="parallax-text text-center relative z-10"
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
