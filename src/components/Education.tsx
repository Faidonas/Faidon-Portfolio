import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Academic foundation and certifications that shaped my technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* University Degree */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-primary mr-3" />
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  University Degree
                </Badge>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Informatics</h3>
              <p className="text-muted-foreground mb-3">Athens University of Economics and Business (AUEB)</p>
              <p className="text-sm text-muted-foreground mb-4">September 2021 - September 2025</p>
              
              <div className="space-y-2 text-sm">
                <h4 className="font-medium">Key Courses:</h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Algorithms", "Data Structures", "Distributed Systems", 
                    "Software Engineering", "Database Systems", "Operating Systems",
                    "Artificial Intelligence", "Computer Networks", "Software Verification"
                  ].map((course, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* English Proficiency */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-primary mr-3" />
                <Badge className="bg-secondary/80 text-secondary-foreground border-secondary">
                  Language Certification
                </Badge>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">English Proficiency Certificate</h3>
              <p className="text-muted-foreground mb-3">University of Michigan</p>
              <p className="text-sm text-muted-foreground mb-4">May 2018</p>
              
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Advanced level English proficiency certification, enabling effective communication 
                  in international software development environments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Academic Info */}
        <Card className="mt-12 bg-gradient-to-r from-card to-secondary/50 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Completed comprehensive curriculum in computer science with focus on backend development, 
              distributed systems, and software engineering principles. Strong foundation in algorithms, 
              data structures, and modern development practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;