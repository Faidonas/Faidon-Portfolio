import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey in software development, from academic projects to professional backend development at Cognity.
          </p>
        </div>

        <Card className="bg-gradient-to-r from-card to-secondary/50 border-primary/20">
          <CardContent className="p-8">
            {/* Current Role */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold">Junior Java Developer</h4>
                  <p className="text-sm text-muted-foreground">December 2024 - Present</p>
                </div>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  💼 Cognity S.A.
                </Badge>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Currently working on a greenfield telecommunications project, participating in all stages of the development lifecycle</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Designing and developing RESTful services using Java Spring Boot</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Working with microservices architecture and implementing Backend for Frontend (BFF) solutions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Storing and retrieving data in MongoDB, applying techniques like document atomicity</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Integrating with multiple backend and external systems using various communication protocols</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Gaining expertise in telecom operations: product modeling, order management, service provisioning, billing, and e-commerce flows</span>
                </div>
              </div>
            </div>

            {/* Previous Role */}
            <div className="pb-6 border-b border-border">
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
                  <span>Developed AtheVillas WordPress website showcasing luxury villas with detailed descriptions and high-quality images</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Enabled users to make booking requests directly through the website with user-friendly interface</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Implemented responsive design and utilized WordPress plugins to enhance user experience</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center pt-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  Graduate from AUEB (Department of Informatics), September 2025. 
                  Specialized in backend development, distributed systems, and software engineering.
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

export default Experience;