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
            <h2 className="text-4xl md:text-5xl font-bold text-[#303032] mb-8 text-center">
              About LEJTECH
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="fade-in">
              <h3 className="text-2xl font-bold text-[#303032] mb-6">
                Meet Marko
              </h3>
              <p className="text-[#303032] leading-relaxed text-lg">
                I'm a creative and detail-oriented fullstack software engineer
                with a strong passion for frontend development. I love building
                fast, secure, and visually sharp applications and websites,
                often leveraging modern AI tools to push ideas further.
              </p>
              <p className="text-[#303032] leading-relaxed text-lg mt-4">
                I thrive on solving complex challenges, staying ahead of coding
                trends, and bringing a positive, can-do mindset to every
                project. Whether working solo or as part of a team, I value
                clear communication, collaboration, and delivering results that
                make an impact.
              </p>
            </div>

            <div className="fade-in">
              <h3 className="text-2xl font-bold text-[#303032] mb-6">
                Technical Expertise
              </h3>
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mb-6">
                  <h4 className="text-lg font-semibold text-[#303032] mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-zinc-700 text-white text-sm font-medium hover:bg-zinc-600 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
