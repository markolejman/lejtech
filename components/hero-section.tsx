"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { NeatGradient } from "@firecms/neat";

export function HeroSection() {
  const gradientRef = useRef<any>(null);

  useEffect(() => {
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
          { color: "#cacacf", enabled: true }, // Light Gray
          { color: "#ffffff", enabled: true }, // White
          { color: "#cacacf", enabled: true }, // Light Gray
        ],
        speed: 2,
        horizontalPressure: 2,
        verticalPressure: 5,
        waveFrequencyX: 2,
        waveFrequencyY: 2,
        waveAmplitude: 5,
        shadows: 10,
        highlights: 8,
        colorBrightness: 1,
        colorSaturation: 10,
        wireframe: true,
        colorBlending: 6,
        backgroundColor: "#cacacf",
        backgroundAlpha: 1,
        grainScale: 0,
        grainSparsity: 0,
        grainIntensity: 0,
        grainSpeed: 0,
        resolution: 0.95,
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

    window.addEventListener("resize", handleResize);

    // Initial setup
    const canvas = document.getElementById(
      "neat-background"
    ) as HTMLCanvasElement;
    if (canvas) {
      initGradient(canvas);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (gradientRef.current) {
        gradientRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    // Limit to hero section so other anchors (e.g., carousels, nav) remain visible
    style.textContent = `#hero a { display: none !important; }`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
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
      <div className="text-center relative z-10">
        <h1
          className="text-6xl md:text-7xl lg:text-8xl tracking-wider mb-12 font-serif font-light"
          style={{ fontFamily: "Roboto, sans-serif", color: "#ffffff" }}
        >
          {"< LEJTECH />"}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("contact")}
            className="w-48 bg-[#303032] text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 px-10 py-4 text-xl font-medium transition-all duration-300 ease-in-out rounded-[4px] hover:rounded-[30px]"
          >
            Get in touch
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            variant="outline"
            className="w-48 bg-transparent text-[#303032] border-2 border-[#303032] hover:bg-transparent hover:text-zinc-700 hover:border-zinc-700 px-10 py-4 text-xl font-medium transition-all duration-300 ease-in-out rounded-[4px] hover:rounded-[30px]"
          >
            Previous work
          </Button>
        </div>
      </div>
    </section>
  );
}
