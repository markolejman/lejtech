"use client";

import { useEffect, useRef } from "react";

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "React Native",
    "Expo",
    "Tailwind",
    "Vue",
    "MUI",
    "CSS",
    "SCSS",
    "HTML",
    "Three.js",
    "Recharts",
    "Svelte",
    "Bootstrap",
    "JQuery",
    "Shadcn",
  ],
  Backend: [
    "Node.js",
    "Python",
    "Django",
    "Django REST",
    "Flask",
    "Firebase",
    "REST APIs",
    "Postgres",
    "MongoDB",
    "SQL/NoSQL",
    "Database design",
    "AI/ML",
    "JSON",
    "JWT",
    "CSRF",
  ],
  "Tools & Operations": [
    "Git",
    "Github",
    "CI/CD",
    "Cursor AI",
    "Agile",
    "AWS",
    "Azure",
    "Vercel",
    "Vercel v0",
    "Heroku",
    "Flyctl",
    "Jest",
    "Figma",
    "UX Design",
    "Scrum",
    "Kanban",
    "SEO",
    "Copilot",
    "Yarn",
    "Mantine",
    "Jira",
  ],
};

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in mb-16">
            <h2 className="text-4xl md:text-5xl text-[#303032] mb-8 text-center font-google-sans-code">
              About LEJTECH
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="fade-in min-w-0">
              <h3 className="text-2xl text-[#303032] mb-6 font-google-sans-code">
                Meet Marko
              </h3>
              <p className="text-[#303032] leading-relaxed text-base sm:text-lg font-google-sans-code break-words hyphens-auto overflow-hidden">
                I'm a creative and detail-oriented fullstack software engineer
                with a strong passion for frontend development. I love building
                fast, secure, and visually sharp applications and websites,
                often leveraging modern AI tools to push ideas further.
              </p>
              <p className="text-[#303032] leading-relaxed text-base sm:text-lg mt-4 break-words hyphens-auto overflow-hidden">
                I thrive on solving complex challenges, staying ahead of coding
                trends, and bringing a positive, can-do mindset to every
                project. Whether working solo or as part of a team, I value
                clear communication, collaboration, and delivering results that
                make an impact.
              </p>
            </div>

            <div className="fade-in min-w-0">
              <h3 className="text-2xl text-[#303032] mb-6 font-google-sans-code">
                Technical Expertise
              </h3>
              {Object.entries(skills).map(([category, skillList]) => {
                const isRight = category === "Backend";
                return (
                  <div key={category} className="mb-8">
                    <h4 className="text-lg text-[#303032] mb-3 font-google-sans-code">
                      {category}
                    </h4>
                    <div
                      className={`marquee ${
                        isRight ? "marquee-right" : "marquee-left"
                      } rounded-2xl`}
                    >
                      <div className="marquee-track">
                        <div className="marquee-segment">
                          {skillList.map((skill) => (
                            <span
                              key={`seg1-${category}-${skill}`}
                              className="px-4 py-2 md:px-6 md:py-3 bg-zinc-800 text-white text-sm md:text-base rounded-full font-google-sans-code whitespace-nowrap select-none"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="marquee-segment" aria-hidden="true">
                          {skillList.map((skill) => (
                            <span
                              key={`seg2-${category}-${skill}`}
                              className="px-4 py-2 md:px-6 md:py-3 bg-zinc-800 text-white text-sm md:text-base rounded-full font-google-sans-code whitespace-nowrap select-none"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
