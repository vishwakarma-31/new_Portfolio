import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import CodeEditor from "./CodeEditor";
import SparkleIcon from "./SparkleIcon";

const HeroSection = () => {
  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Badge */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
            <SparkleIcon className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">Welcome to my universe</span>
            <SparkleIcon className="w-4 h-4" delay={1} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Hello</span>
                <span className="block text-foreground">I'm </span>
                <span className="block gradient-text">Krish</span>
                <span className="block gradient-text">Maheshwari</span>
              </h1>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  Backend Developer
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary text-primary">
                  Cloud Computing
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg md:text-xl">
                <span className="text-foreground">Software Developer</span>
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(Developing what world needs!)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 transition-smooth"
                >
                  Learn More
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Get Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Code Editor */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-2xl"></div>
            
            <SparkleIcon className="absolute -top-4 left-4 w-6 h-6" />
            <SparkleIcon className="absolute top-1/2 -right-4 w-4 h-4" delay={0.5} />
            <SparkleIcon className="absolute -bottom-4 left-1/3 w-5 h-5" delay={1.5} />
            
            <CodeEditor />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Developer, Designer, Creator, Innovator
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Krish Maheshwari, a passionate MERN stack developer specializing in creating 
              innovative web solutions and user-friendly interfaces. I'm dedicated to simplifying 
              development workflows.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My focus is on making web development faster, easier, and accessible to all developers. 
              Currently, I'm expanding into backend development to grow as a full-stack developer and 
              create seamless, robust web applications.
            </p>

            <blockquote className="relative bg-card border border-border rounded-lg p-6 mt-8">
              <div className="absolute -top-2 -left-2">
                <SparkleIcon className="w-6 h-6" />
              </div>
              <p className="text-lg italic text-foreground mb-4">
                "I'm a lifelong learner and innovator, driven by a desire to contribute to the developer 
                community with new ideas and tools that deliver real value. I'm pushing the boundaries 
                of Cloud Computing to empower developers worldwide."
              </p>
              <div className="flex items-center justify-end gap-2">
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">Creative Developer</p>
                  <p className="text-sm text-muted-foreground">Krish Maheshwari !!</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;