import Navigation from "../components/navigation";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import SparkleIcon from "../components/sparkleicon";
import { ExternalLink, Github, Star, Calendar, Code2, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EcoTrack - Sustainability Dashboard",
      description: "A comprehensive web application for tracking personal and organizational carbon footprint with real-time analytics and eco-friendly recommendations.",
      image: "🌱",
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "Chart.js", "AWS"],
      features: [
        "Real-time carbon footprint tracking",
        "Interactive analytics dashboard", 
        "Personalized eco recommendations",
        "Corporate sustainability reports"
      ],
      github: "https://github.com/krishmaheshwari/ecotrack",
      live: "https://ecotrack-demo.vercel.app",
      status: "Completed",
      duration: "3 months",
      stars: 45,
      highlights: ["50+ active users", "Featured on ProductHunt"]
    },
    {
      title: "DevFlow - Developer Workflow Manager", 
      description: "A productivity tool designed for developers to manage projects, track coding sessions, and collaborate with team members effectively.",
      image: "⚡",
      category: "SaaS",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      features: [
        "Project timeline management",
        "Code session tracking",
        "Team collaboration tools",
        "Automated reporting"
      ],
      github: "https://github.com/krishmaheshwari/devflow",
      live: "https://devflow.app",
      status: "In Development",
      duration: "4 months",
      stars: 78,
      highlights: ["200+ GitHub stars", "Beta testing with 100+ developers"]
    },
    {
      title: "CryptoPortfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracking application with advanced analytics, price alerts, and market insights.",
      image: "₿",
      category: "FinTech",
      tech: ["React", "Redux", "Express", "WebSocket", "CoinGecko API"],
      features: [
        "Real-time price tracking",
        "Portfolio performance analytics",
        "Price alerts & notifications",
        "Market trend analysis"
      ],
      github: "https://github.com/krishmaheshwari/crypto-tracker",
      live: "https://crypto-portfolio-km.netlify.app",
      status: "Completed",
      duration: "2 months",
      stars: 32,
      highlights: ["1000+ trades tracked", "99.9% uptime"]
    },
    {
      title: "TaskFlow - Team Management",
      description: "Agile project management tool with Kanban boards, sprint planning, and team performance analytics for software development teams.",
      image: "📋",
      category: "Productivity",
      tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "Docker"],
      features: [
        "Kanban board interface",
        "Sprint planning tools", 
        "Team performance metrics",
        "Real-time collaboration"
      ],
      github: "https://github.com/krishmaheshwari/taskflow",
      live: "https://taskflow-app.herokuapp.com",
      status: "Completed",
      duration: "2.5 months", 
      stars: 56,
      highlights: ["Used by 5+ teams", "Open source contribution"]
    },
    {
      title: "AI Code Assistant",
      description: "VS Code extension that provides intelligent code suggestions, bug detection, and automated documentation generation using machine learning.",
      image: "🤖",
      category: "AI/ML",
      tech: ["TypeScript", "Python", "TensorFlow", "VS Code API", "OpenAI"],
      features: [
        "Intelligent code completion",
        "Automated bug detection",
        "Documentation generation",
        "Code quality analysis"
      ],
      github: "https://github.com/krishmaheshwari/ai-code-assistant",
      live: "https://marketplace.visualstudio.com/items?itemName=krish.ai-assistant",
      status: "Beta",
      duration: "5 months",
      stars: 123,
      highlights: ["10K+ downloads", "4.8/5 rating on VS Code Marketplace"]
    },
    {
      title: "WeatherWise - Smart Weather App",
      description: "Intelligent weather application with personalized forecasts, activity recommendations, and severe weather alerts based on user preferences.",
      image: "🌤️",
      category: "Mobile",
      tech: ["React Native", "Redux", "Weather API", "Push Notifications", "Firebase"],
      features: [
        "Personalized weather insights",
        "Activity recommendations",
        "Severe weather alerts",
        "Location-based forecasts"
      ],
      github: "https://github.com/krishmaheshwari/weatherwise",
      live: "https://play.google.com/store/apps/details?id=com.weatherwise",
      status: "Published",
      duration: "3 months",
      stars: 67,
      highlights: ["5K+ downloads", "4.6/5 app store rating"]
    }
  ];

  const categories = ["All", "Full Stack", "SaaS", "FinTech", "Productivity", "AI/ML", "Mobile"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <SparkleIcon className="w-6 h-6 mr-2" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="gradient-text">Featured Projects</span>
              </h1>
              <SparkleIcon className="w-6 h-6 ml-2" delay={0.5} />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my development projects spanning full-stack applications, 
              SaaS products, and innovative solutions that solve real-world problems.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`transition-smooth ${
                  index === 0 
                    ? "bg-primary text-primary-foreground" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-smooth group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{project.category}</Badge>
                        <Badge variant="outline" className="border-primary text-primary">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Code2 className="w-3 h-3 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <Badge key={highlightIndex} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* GitHub Stats */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">
              <span className="gradient-text">Development Statistics</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Commits This Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15K+</div>
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-primary text-primary-foreground border-0">
              <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
              <p className="text-lg mb-6 opacity-90">
                I'm always open to discussing new projects and opportunities
              </p>
              <Button variant="secondary" size="lg" className="gap-2">
                <Users className="w-5 h-5" />
                Let's Work Together
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;