import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technology: string;
  githubUrl: string;
  year?: string;
}

const ProjectCard = ({ title, description, technology, githubUrl, year }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="mb-2">
            {technology}
          </Badge>
          {year && (
            <span className="text-sm text-muted-foreground">{year}</span>
          )}
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2 hover:bg-primary/10 hover:border-primary/50"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github className="w-4 h-4" />
            View Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;