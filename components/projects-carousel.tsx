"use client"

export function ProjectsCarousel() {
  const projects = [
    { id: 1, title: "E-commerce Platform", image: "/modern-ecommerce-website.png" },
    { id: 2, title: "SaaS Dashboard", image: "/modern-dashboard.png" },
    { id: 3, title: "Mobile App", image: "/mobile-app-interface.png" },
    { id: 4, title: "Portfolio Website", image: "/portfolio-website-design.png" },
    { id: 5, title: "AI Platform", image: "/ai-platform-interface.jpg" },
    { id: 6, title: "Fintech App", image: "/fintech-app-design.jpg" },
  ]

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects]

  return (
    <section id="projects" className="py-20 bg-background overflow-hidden">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">Previous work</h2>
      </div>

      <div className="relative">
        <div className="carousel-container flex space-x-8">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-96 h-64 bg-card overflow-hidden group cursor-pointer relative"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zinc-900/50">
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold bg-zinc-900/80 px-3 py-1 backdrop-blur-sm">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
