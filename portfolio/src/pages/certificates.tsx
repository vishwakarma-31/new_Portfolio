import Navigation from "../components/navigation";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import SparkleIcon from "../components/sparkleicon";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "March 2024",
      credentialId: "AWS-CCP-2024-KM",
      description: "Foundational understanding of AWS cloud concepts, services, security, architecture, pricing, and support.",
      skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"],
      verifyUrl: "#",
      logo: "🏆"
    },
    {
      title: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      date: "January 2024",
      credentialId: "MDU-DEV-2024-001",
      description: "Comprehensive knowledge of MongoDB database design, operations, and development best practices.",
      skills: ["MongoDB", "Database Design", "Aggregation", "Indexing"],
      verifyUrl: "#",
      logo: "🍃"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "November 2023",
      credentialId: "META-REACT-2023-456",
      description: "Advanced React.js development including hooks, context, state management, and performance optimization.",
      skills: ["React.js", "Hooks", "State Management", "Performance"],
      verifyUrl: "#",
      logo: "⚛️"
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "September 2023",
      credentialId: "FCC-FSWD-2023-789",
      description: "Complete full-stack development certification covering frontend, backend, and database technologies.",
      skills: ["HTML/CSS", "JavaScript", "Node.js", "Databases"],
      verifyUrl: "#",
      logo: "🔥"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "August 2023",
      credentialId: "FCC-JS-2023-123",
      description: "Advanced JavaScript programming including ES6+, algorithms, data structures, and functional programming.",
      skills: ["JavaScript", "Algorithms", "Data Structures", "ES6+"],
      verifyUrl: "#",
      logo: "📜"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "July 2023",
      credentialId: "DCA-2023-567",
      description: "Container orchestration, Docker architecture, security, and best practices for containerized applications.",
      skills: ["Docker", "Containers", "DevOps", "Orchestration"],
      verifyUrl: "#",
      logo: "🐳"
    }
  ];

  const achievements = [
    {
      title: "Hackathon Winner",
      event: "Tech Innovation Challenge 2024",
      achievement: "1st Place - Best Full Stack Solution",
      date: "Feb 2024"
    },
    {
      title: "Open Source Contributor",
      event: "Hacktoberfest 2023",
      achievement: "20+ Pull Requests Merged",
      date: "Oct 2023"
    },
    {
      title: "Community Leader",
      event: "Developer Community",
      achievement: "1000+ Developers Mentored",
      date: "Ongoing"
    }
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
                <span className="gradient-text">Certificates & Awards</span>
              </h1>
              <SparkleIcon className="w-6 h-6 ml-2" delay={0.5} />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and achievements that validate my expertise 
              in various technologies and development practices.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {certificates.map((cert, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-smooth">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{cert.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{cert.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="ml-4">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">ID:</span> {cert.credentialId}
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Verify
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Notable Achievements</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 bg-card border-border text-center hover:shadow-lg transition-smooth">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.event}</p>
                  <Badge variant="secondary" className="mb-2">{achievement.achievement}</Badge>
                  <p className="text-xs text-muted-foreground">{achievement.date}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Hours Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Pass Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;