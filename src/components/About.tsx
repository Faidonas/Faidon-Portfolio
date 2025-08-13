import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cpu, Globe } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code, name: "Backend Development", technologies: ["Java", "Spring Boot", "REST APIs", "Microservices"] },
    { icon: Database, name: "Database Systems", technologies: ["SQL", "Database Design", "Data Modeling", "Optimization"] },
    { icon: Cpu, name: "Enterprise Systems", technologies: ["E-commerce", "System Architecture", "Performance Tuning"] },
    { icon: Globe, name: "Integration", technologies: ["Third-party APIs", "Payment Systems", "Cloud Services"] }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Faidon Azariadis, a Backend Developer and AUEB graduate currently working as a Junior Java Developer at Cognity. 
            I specialize in building robust e-commerce systems and backend solutions using Spring Boot and modern Java technologies.
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
                <h3 className="text-2xl font-bold mb-4">Professional Experience</h3>
                <p className="text-muted-foreground mb-4">
                  Junior Java Developer at Cognity, working on enterprise e-commerce solutions for Yettel Bulgaria. 
                  AUEB Graduate in Information Technology with focus on backend development and system architecture.
                </p>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  💼 Cognity • Athens, Greece
                </Badge>
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