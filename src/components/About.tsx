import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cpu, Globe } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code, name: "Programming", technologies: ["Java", "C++", "JavaScript", "Python"] },
    { icon: Globe, name: "Web Development", technologies: ["HTML", "CSS", "React", "Node.js"] },
    { icon: Database, name: "Algorithms", technologies: ["A-star", "Data Structures", "Optimization"] },
    { icon: Cpu, name: "Systems", technologies: ["Distributed Systems", "Software Architecture"] }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Faidon Azariadis, an undergraduate IT student at Athens University of Economics and Business (AUEB). 
            Passionate about software development, algorithms, and creating innovative digital solutions.
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
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Currently Studying</h3>
                <p className="text-muted-foreground mb-4">
                  Information Technology at Athens University of Economics and Business (AUEB), 
                  focusing on software engineering, algorithms, and distributed systems.
                </p>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  📍 Athens, Greece
                </Badge>
              </div>
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-primary mb-2">6+</div>
                <p className="text-muted-foreground">Projects Completed</p>
                <div className="text-4xl font-bold text-primary mb-2 mt-4">4+</div>
                <p className="text-muted-foreground">Technologies Mastered</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;