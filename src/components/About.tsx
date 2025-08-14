import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cpu, Globe } from "lucide-react";

const About = () => {
  const skills = [
    { 
      icon: Code, 
      name: "Programming Languages", 
      technologies: ["Java", "C++", "Python", "HTML", "CSS", "SQL", "Assembly"] 
    },
    { 
      icon: Database, 
      name: "Technologies & Tools", 
      technologies: ["Spring Framework", "WordPress", "Git", "GitHub", "MongoDB", "REST APIs"] 
    },
    { 
      icon: Cpu, 
      name: "Computer Science", 
      technologies: ["Algorithms", "Data Structures", "DBMS", "Multithreading", "OOP", "Distributed Systems"] 
    },
    { 
      icon: Globe, 
      name: "Development Areas", 
      technologies: ["Backend", "Frontend", "Full-Stack", "Microservices", "System Architecture"] 
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Faidon Azariadis, a Software Developer at Cognity and senior undergraduate student at AUEB. 
            I specialize in backend development with Java and Spring Framework, with experience in full-stack development and distributed systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <skill.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-3">{skill.name}</h3>
                <div className="flex flex-wrap gap-1 justify-center">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-card to-secondary/50 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            
            {/* Current Role */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold">Software Developer</h4>
                  <p className="text-sm text-muted-foreground">December 2024 - Present</p>
                </div>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  💼 Cognity S.A.
                </Badge>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Developed and maintained backend services using Java and the Spring Framework</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Worked on Backend for Frontend (BFF) and Digital Experience Platform (DEP) layers to optimize API performance</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Designed and implemented RESTful APIs for seamless integration with frontend applications and third-party services</span>
                </div>
              </div>
            </div>

            {/* Previous Role */}
            <div className="mb-8 pb-6 border-b border-border">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold">Web Developer-Designer</h4>
                  <p className="text-sm text-muted-foreground">July 2023 - September 2023</p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  🌐 Athevillas.gr
                </Badge>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Developed AtheVillas WordPress website showcasing luxury villas with booking functionality</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Implemented responsive design and utilized WordPress plugins to enhance user experience</span>
                </div>
              </div>
            </div>

            {/* Academic Projects */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4">Academic Projects</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium">Distributed AirBnb App</h5>
                    <p className="text-xs text-muted-foreground mb-2">March 2024 - June 2024</p>
                    <p className="text-sm text-muted-foreground">Simulated AirBnb with custom MapReduce logic and multithreading for distributed processing.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Bridge Crossing Game Solver</h5>
                    <p className="text-xs text-muted-foreground mb-2">October 2024 - January 2024</p>
                    <p className="text-sm text-muted-foreground">Implemented A* algorithm for optimal river crossing solutions with heuristic functions.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium">Java E-shop Backend</h5>
                    <p className="text-xs text-muted-foreground mb-2">October 2024 - January 2024</p>
                    <p className="text-sm text-muted-foreground">Developed Java-based e-commerce backend with product management and order tracking.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Movie Browser (C++)</h5>
                    <p className="text-xs text-muted-foreground mb-2">October 2022 - January 2022</p>
                    <p className="text-sm text-muted-foreground">Built C++ application with SGG library for graphical movie browsing and filtering.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center pt-4 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground">
                  Senior Undergraduate Student at AUEB (Department of Informatics), graduating September 2025. 
                  Focus on backend development, distributed systems, and software engineering.
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-primary mb-2">1+</div>
                <p className="text-muted-foreground">Years Experience</p>
                <div className="text-4xl font-bold text-primary mb-2 mt-4">6+</div>
                <p className="text-muted-foreground">Academic Projects</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;