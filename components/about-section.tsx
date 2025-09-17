"use client";

import { useEffect, useRef } from "react";

// Map skill labels to Devicon SVGs (via jsDelivr CDN). Icons list based on TechIcons.dev (sources Devicon).
// Fallback to local placeholder when an icon is not available.
const DEVICON_CDN_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons" as const;

function normalize(label: string) {
  return label.trim().toLowerCase();
}

function getIconUrlForSkill(label: string): string | null {
  const key = normalize(label);

  // Common direct mappings
  const map: Record<string, string> = {
    // Frontend
    react: `${DEVICON_CDN_BASE}/react/react-original.svg`,
    "next.js": `${DEVICON_CDN_BASE}/nextjs/nextjs-original.svg`,
    nextjs: `${DEVICON_CDN_BASE}/nextjs/nextjs-original.svg`,
    typescript: `${DEVICON_CDN_BASE}/typescript/typescript-original.svg`,
    javascript: `${DEVICON_CDN_BASE}/javascript/javascript-original.svg`,
    "react native": `${DEVICON_CDN_BASE}/react/react-original.svg`,
    expo: `${DEVICON_CDN_BASE}/expo/expo-original.svg`,
    tailwind: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    tailwindcss: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    vue: `${DEVICON_CDN_BASE}/vuejs/vuejs-original.svg`,
    vuejs: `${DEVICON_CDN_BASE}/vuejs/vuejs-original.svg`,
    mui: `${DEVICON_CDN_BASE}/materialui/materialui-original.svg`,
    materialui: `${DEVICON_CDN_BASE}/materialui/materialui-original.svg`,
    css: `${DEVICON_CDN_BASE}/css3/css3-original.svg`,
    css3: `${DEVICON_CDN_BASE}/css3/css3-original.svg`,
    scss: `${DEVICON_CDN_BASE}/sass/sass-original.svg`,
    sass: `${DEVICON_CDN_BASE}/sass/sass-original.svg`,
    html: `${DEVICON_CDN_BASE}/html5/html5-original.svg`,
    html5: `${DEVICON_CDN_BASE}/html5/html5-original.svg`,
    "three.js": `${DEVICON_CDN_BASE}/threejs/threejs-original.svg`,
    threejs: `${DEVICON_CDN_BASE}/threejs/threejs-original.svg`,
    svelte: `${DEVICON_CDN_BASE}/svelte/svelte-original.svg`,
    bootstrap: `${DEVICON_CDN_BASE}/bootstrap/bootstrap-original.svg`,
    jquery: `${DEVICON_CDN_BASE}/jquery/jquery-original.svg`,
    shadcn:
      "https://images.seeklogo.com/logo-png/51/2/shadcn-ui-logo-png_seeklogo-519786.png",

    // Backend
    "node.js": `${DEVICON_CDN_BASE}/nodejs/nodejs-original.svg`,
    nodejs: `${DEVICON_CDN_BASE}/nodejs/nodejs-original.svg`,
    python: `${DEVICON_CDN_BASE}/python/python-original.svg`,
    django: `${DEVICON_CDN_BASE}/django/django-plain.svg`,
    flask: `${DEVICON_CDN_BASE}/flask/flask-original.svg`,
    firebase: `${DEVICON_CDN_BASE}/firebase/firebase-plain.svg`,
    postgresql: `${DEVICON_CDN_BASE}/postgresql/postgresql-original.svg`,
    postgres: `${DEVICON_CDN_BASE}/postgresql/postgresql-original.svg`,
    mongodb: `${DEVICON_CDN_BASE}/mongodb/mongodb-original.svg`,
    sql: `${DEVICON_CDN_BASE}/mysql/mysql-original.svg`,
    nosql: `${DEVICON_CDN_BASE}/mongodb/mongodb-original.svg`,
    tensorflow: `${DEVICON_CDN_BASE}/tensorflow/tensorflow-original.svg`,
    pytorch: `${DEVICON_CDN_BASE}/pytorch/pytorch-original.svg`,

    // Tools & Ops
    git: `${DEVICON_CDN_BASE}/git/git-plain.svg`,
    github: `${DEVICON_CDN_BASE}/github/github-original.svg`,
    aws: "https://icon.icepanel.io/Technology/svg/AWS.svg",
    azure: `${DEVICON_CDN_BASE}/azure/azure-original.svg`,
    vercel: `${DEVICON_CDN_BASE}/vercel/vercel-original.svg`,
    heroku: `${DEVICON_CDN_BASE}/heroku/heroku-original.svg`,
    jest: `${DEVICON_CDN_BASE}/jest/jest-plain.svg`,
    figma: `${DEVICON_CDN_BASE}/figma/figma-original.svg`,
    yarn: `${DEVICON_CDN_BASE}/yarn/yarn-original.svg`,
    jira: `${DEVICON_CDN_BASE}/jira/jira-original.svg`,
    docker: `${DEVICON_CDN_BASE}/docker/docker-original.svg`,
    "vercel v0":
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/vercel-v0-icon.png",
    "cursor ai":
      "https://registry.npmmirror.com/@lobehub/icons-static-png/1.65.0/files/light/cursor.png",
    cursor:
      "https://registry.npmmirror.com/@lobehub/icons-static-png/1.65.0/files/light/cursor.png",
    "django rest": "https://icon.icepanel.io/Technology/svg/Django-REST.svg",
    djangorest: "https://icon.icepanel.io/Technology/svg/Django-REST.svg",
    flyctl: "https://fly.io/static/images/brand/brandmark.svg",
  };

  if (map[key]) return map[key];

  // Heuristics for grouped labels
  if (key.includes("django")) return map["django"];
  if (key.includes("django rest")) return map["django rest"];
  if (key.includes("djangorest")) return map["djangorest"];
  if (key.includes("next")) return map["nextjs"];
  if (key.includes("tailwind")) return map["tailwindcss"];
  if (key.includes("fly")) return map["flyctl"];
  if (key.includes("sql")) return map["sql"];
  if (key.includes("react")) return map["react"];
  if (key.includes("vue")) return map["vuejs"];

  return null;
}

function getIconClassForSkill(label: string): string {
  return "mr-2 h-4 w-4 md:h-5 md:w-5 object-contain";
}

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
              <p className="text-[#303032] leading-relaxed text-base sm:text-lg font-google-sans-code break-words hyphens-auto overflow-hidden">
                Helping you bring your ideas online – from idea to code! I’m a
                certified full-stack developer in Stockholm. I help people and
                businesses create modern, easy-to-use websites and apps.
              </p>
              <p className="text-[#303032] leading-relaxed text-base sm:text-lg mt-4 break-words hyphens-auto overflow-hidden">
                Whether you need a full application, a landing page that works,
                or updates to an existing site, I’ll guide you from first idea
                to finished product. I use AI-assisted coding and a mix of tools
                to deliver quick, creative solutions that fit your goals and
                budget — and make users happy.
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
                          {skillList.map((skill) => {
                            const iconUrl = getIconUrlForSkill(skill);
                            return (
                              <span
                                key={`seg1-${category}-${skill}`}
                                className="px-4 py-2 md:px-6 md:py-3 bg-zinc-50 text-[#303032] border border-zinc-800 text-sm md:text-base rounded-full font-google-sans-code whitespace-nowrap select-none inline-flex items-center"
                              >
                                {iconUrl ? (
                                  <img
                                    src={iconUrl}
                                    alt={`${skill} icon`}
                                    className={getIconClassForSkill(skill)}
                                    loading="lazy"
                                    height={20}
                                    width={20}
                                  />
                                ) : null}
                                {skill}
                              </span>
                            );
                          })}
                        </div>
                        <div className="marquee-segment" aria-hidden="true">
                          {skillList.map((skill) => {
                            const iconUrl = getIconUrlForSkill(skill);
                            return (
                              <span
                                key={`seg2-${category}-${skill}`}
                                className="px-4 py-2 md:px-6 md:py-3 bg-zinc-50 text-[#303032] border border-zinc-800 text-sm md:text-base rounded-full font-google-sans-code whitespace-nowrap select-none inline-flex items-center"
                              >
                                {iconUrl ? (
                                  <img
                                    src={iconUrl}
                                    alt={`${skill} icon`}
                                    className={getIconClassForSkill(skill)}
                                    loading="lazy"
                                    height={20}
                                    width={20}
                                  />
                                ) : null}
                                {skill}
                              </span>
                            );
                          })}
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
