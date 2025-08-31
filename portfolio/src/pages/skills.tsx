import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import SparkleIcon from "@/components/SparkleIcon";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Wrench, 
  GitBranch,
  Server,
  Palette,
  Globe
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "Next.js", level: 85, color: "bg-gray-700" },
        { name: "TypeScript", level: 88, color: "bg-blue-600" },
        { name: "JavaScript", level: 95, color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 92, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-teal-500" }
      ]
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Express.js", level: 80, color: "bg-gray-600" },
        { name: "Java", level: 75, color: "bg-red-600" },
        { name: "Python", level: 70, color: "bg-blue-500" },
        { name: "REST APIs", level: 88, color: "bg-purple-500" },
        { name: "GraphQL", level: 65, color: "bg-pink-500" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85, color: "bg-green-500" },
        { name: "MySQL", level: 80, color: "bg-blue-600" },
        { name: "PostgreSQL", level: 75, color: "bg-blue-700" },
        { name: "Redis", level: 70, color: "bg-red-500" },
        { name: "AWS", level: 78, color: "bg-orange-600" },
        { name: "Docker", level: 82, color: "bg-blue-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 90, color: "bg-gray-800" },
        { name: "VS Code", level: 95, color: "bg-blue-600" },
        { name: "Postman", level: 85, color: "bg-orange-500" },
        { name: "Figma", level: 75, color: "bg-purple-600" },
        { name: "Linux", level: 80, color: "bg-yellow-600" },
        { name: "Webpack", level: 70, color: "bg-blue-400" }
      ]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "MongoDB Developer",
    "React Developer Certification",
    "Full Stack Web Development"
  ];

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
                <span className="gradient-text">Skills & Expertise</span>
              </h1>
              <SparkleIcon className="w-6 h-6 ml-2" delay={0.5} />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels 
              across various programming languages, frameworks, and tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-smooth">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-2" />
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full ${skill.color} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Tech Stack Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">Technology Stack</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "React", "Node.js", "MongoDB", "TypeScript", "AWS", "Docker",
                "Next.js", "Express", "MySQL", "Python", "Git", "Redux",
                "Tailwind", "GraphQL", "PostgreSQL", "Linux", "Jest", "Figma"
              ].map((tech, index) => (
                <div key={index} className="group">
                  <Badge 
                    variant="secondary" 
                    className="w-full p-3 text-center cursor-pointer transition-smooth hover:bg-primary hover:text-primary-foreground"
                  >
                    {tech}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Certifications */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">
              <span className="gradient-text">Certifications</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-lg border-primary text-primary">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;