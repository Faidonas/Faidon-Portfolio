import ProjectCard from "./ProjectCard";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Movie Browser",
      description: "A C++ film browser application featuring a graphical interface for browsing, searching, and filtering movies, built with the SGG library.",
      technology: "C++",
      githubUrl: "https://github.com/Faidonas/Movie-Browser",
      year: "2024"
    },
    {
      title: "YourBarista.gr",
      description: "A static website showcasing various coffee machines and capsules with detailed descriptions and images. Perfect for coffee enthusiasts seeking comprehensive product information.",
      technology: "CSS/HTML",
      githubUrl: "https://github.com/Faidonas/YourBarista.gr",
      year: "2024"
    },
    {
      title: "Bridge Crossing Solver",
      description: "River Crossing Optimization using the A-star algorithm to find the optimal solution for a family of N members to cross a river with a single torch in minimal time.",
      technology: "Java",
      githubUrl: "https://github.com/Faidonas/Bridge-Crossing-Solver",
      year: "2023"
    },
    {
      title: "Distributed AirBnb App",
      description: "A distributed system application simulating a simplified version of AirBnb, allowing users to search and book accommodations across multiple nodes.",
      technology: "Java",
      githubUrl: "https://github.com/Faidonas/Distributed-AirBnb-App",
      year: "2023"
    },
    {
      title: "E-shop Application",
      description: "A comprehensive Java-based e-commerce application showcasing available products and enabling users to purchase or order items with a clean interface.",
      technology: "Java",
      githubUrl: "https://github.com/Faidonas/E-shop",
      year: "2023"
    },
    {
      title: "Galactic Defense",
      description: "An engaging retro arcade shooter game built with p5.js featuring smooth gameplay mechanics and classic space-themed graphics.",
      technology: "p5.js",
      githubUrl: "https://github.com/Faidonas/Galactic-Defense",
      year: "2022"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Real-world Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic projects showcasing my technical skills across various programming languages and domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technology={project.technology}
              githubUrl={project.githubUrl}
              year={project.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;