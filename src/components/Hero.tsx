import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FloatingElements from "./FloatingElements";
import faidonAvatar from "@/assets/faidon-avatar.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-background overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <img 
            src={faidonAvatar}
            alt="Faidon Azariadis"
            className="w-32 h-32 mx-auto rounded-full border-4 border-primary/30 shadow-xl glow-effect"
          />
        </div>
        
        <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
          💼 Backend Developer at Cognity
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Backend Developer
          <br />
          & Java Specialist
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Senior undergraduate student at AUEB working as Software Developer at Cognity. 
          Specialized in Java, Spring Framework, and backend development for enterprise solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
            View My Experience ↓
          </Button>
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
            📄 Digital CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;