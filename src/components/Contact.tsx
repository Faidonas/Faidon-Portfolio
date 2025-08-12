import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6 text-center">
        <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
          Let's Connect
        </Badge>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Collaborate?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities, innovative projects, 
          or simply connecting with fellow developers and tech enthusiasts.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <Github className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground text-sm mb-4">Check out my repositories</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://github.com/Faidonas', '_blank')}
              >
                View Profile
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm mb-4">Get in touch directly</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = 'mailto:faidon@example.com'}
              >
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm mb-4">Athens, Greece</p>
              <Badge variant="secondary">Available for Remote Work</Badge>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, want to collaborate, or just want to chat about technology, 
              I'd love to hear from you.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
              Start a Conversation
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;