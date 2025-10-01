"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { NeatGradient } from "@firecms/neat";

export function HeroSection() {
  const gradientRef = useRef<any>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const inViewRef = useRef(false);

  useEffect(() => {
    const initGradient = (canvas: HTMLCanvasElement) => {
      if (gradientRef.current) {
        gradientRef.current.destroy();
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      gradientRef.current = new NeatGradient({
        ref: canvas,
        colors: [
          { color: "#f0f0f8", enabled: true },
          { color: "#ffffff", enabled: true },
          { color: "#f5f5fa", enabled: true },
        ],
        speed: 6,
        horizontalPressure: 2,
        verticalPressure: 5,
        waveFrequencyX: 2,
        waveFrequencyY: 2,
        waveAmplitude: 5,
        shadows: 5,
        highlights: 15,
        colorBrightness: 1.08,
        colorSaturation: 6,
        wireframe: true,
        colorBlending: 6,
        backgroundColor: "#f0f0f8",
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
      if (!canvasRef.current) return;
      initGradient(canvasRef.current);
    };

    const start = () => {
      if (!canvasRef.current) return;
      initGradient(canvasRef.current);
      window.addEventListener("resize", handleResize);
    };

    const stop = () => {
      window.removeEventListener("resize", handleResize);
      if (gradientRef.current) {
        gradientRef.current.destroy();
        gradientRef.current = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && inViewRef.current) {
        start();
      } else {
        stop();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            inViewRef.current = true;
            if (document.visibilityState === "visible") {
              start();
            }
          } else {
            inViewRef.current = false;
            stop();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      stop();
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
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        id="neat-background"
        className="absolute inset-0 z-0 w-full h-full"
      ></canvas>
      <div className="text-center relative z-10">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider mb-12 font-serif font-light"
          style={{ fontFamily: "Roboto, sans-serif", color: "#303032" }}
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
            onClick={() => scrollToSection("about")}
            variant="outline"
            className="w-48 bg-transparent text-[#303032] border-2 border-[#303032] hover:bg-transparent hover:text-zinc-700 hover:border-zinc-700 px-10 py-4 text-xl font-medium transition-all duration-300 ease-in-out rounded-[4px] hover:rounded-[30px]"
          >
            About
          </Button>
        </div>
      </div>
    </section>
  );
}
