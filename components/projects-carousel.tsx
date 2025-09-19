"use client";

export function ProjectsCarousel() {
  const projects = [
    {
      id: 1,
      title:
        "Modern Artist Landing Page - Next.js, Typescript, Vercel and Shadcn",
      image: "/example1.png",
      link: "https://github.com/markolejman/zen1beats",
    },
    {
      id: 2,
      title:
        "Finance Dashboard - React 19, Node.js, MongoDB, TypeScript, Machine Learning, API, MUI, Recharts, Vercel, Flyctl.",
      image: "/example2.png",
      link: "https://github.com/markolejman/MERN-finance-bank-app",
    },
    {
      id: 3,
      title: "To-Do App - React 19, Three.js, Vite, Vercel.",
      image: "/example3.png",
      link: "https://github.com/markolejman/react-app",
    },
    {
      id: 4,
      title: "Social Media App - React, Python, PostgreSQL, Heroku.",
      image: "/example4.png",
      link: "https://github.com/markolejman/django-rest-api",
    },
  ];

  return (
    <section
      id="projects"
      className="py-[3.75rem] bg-background overflow-hidden"
    >
      <div className="marquee marquee-left marquee-no-fade">
        <div className="marquee-track">
          <div className="marquee-segment marquee-segment--spacious">
            {projects.map((project) => (
              <div
                key={`seg1-${project.id}`}
                className="flex-shrink-0 w-[22.5rem] h-[15rem] bg-card overflow-hidden relative rounded-3xl select-none"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-3xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div
            className="marquee-segment marquee-segment--spacious"
            aria-hidden="true"
          >
            {projects.map((project) => (
              <div
                key={`seg2-${project.id}`}
                className="flex-shrink-0 w-[22.5rem] h-[15rem] bg-card overflow-hidden relative rounded-3xl select-none"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-3xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
