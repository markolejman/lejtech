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

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section
      id="projects"
      className="py-20 previous-work-gradient overflow-hidden"
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">
          Previous work
        </h2>
      </div>

      <div className="relative">
        <div className="carousel-container flex space-x-8">
          {duplicatedProjects.map((project, index) => (
            <a
              key={`${project.id}-${index}`}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-96 h-64 bg-card overflow-hidden group cursor-pointer relative block rounded-md"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 rounded-md"
              />
              <div className="absolute inset-0 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zinc-900/50 rounded-md">
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold bg-white/10 border border-white/20 backdrop-blur-md rounded-md px-3 py-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
