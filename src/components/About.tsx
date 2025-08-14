import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cpu, Globe, Users, Brain } from "lucide-react";

const About = () => {
  const skills = [
    { 
      icon: Code, 
      name: "Programming Languages", 
      technologies: ["Java", "C++", "Python", "HTML", "CSS", "SQL", "Assembly", "WordPress"] 
    },
    { 
      icon: Database, 
      name: "Technologies & Tools", 
      technologies: ["Spring Boot", "MongoDB", "Git", "GitHub", "REST APIs", "Microservices"] 
    },
    { 
      icon: Cpu, 
      name: "Computer Science", 
      technologies: ["Algorithms", "Data Structures", "DBMS", "Multithreading", "OOP", "Distributed Systems"] 
    },
    { 
      icon: Globe, 
      name: "Development Areas", 
      technologies: ["Backend", "Frontend", "Full-Stack", "System Architecture", "API Design"] 
    },
    { 
      icon: Users, 
      name: "Soft Skills", 
      technologies: ["Critical Thinking", "Communication", "Problem-Solving", "Teamwork", "Time Management"] 
    },
    { 
      icon: Brain, 
      name: "Personal Qualities", 
      technologies: ["Adaptability", "Creativity", "Innovation", "Attention to Detail", "Collaboration"] 
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
            I'm Faidon Azariadis, a Junior Java Developer at Cognity and graduate of AUEB. 
            I specialize in backend development with Java and Spring Boot, with expertise in microservices and distributed systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Technical Excellence</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate backend developer with expertise in Java and Spring Boot, focused on building scalable, 
              efficient systems. Experienced in microservices architecture, distributed systems, and modern development practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;