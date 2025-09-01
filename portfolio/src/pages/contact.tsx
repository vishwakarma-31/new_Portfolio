import Navigation from "../components/navigation";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import SparkleIcon from "../components/sparkleicon";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  MessageCircle,
  Calendar,
  Download,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krish.maheshwari@email.com",
      link: "mailto:krish.maheshwari@email.com",
      description: "Best way to reach me for professional inquiries"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
      description: "Available for calls during business hours"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      link: "https://maps.google.com",
      description: "Open to remote work and relocation"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@krishmaheshwari",
      link: "https://github.com/krishmaheshwari",
      followers: "1.2K",
      description: "Open source projects and contributions"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "krish-maheshwari",
      link: "https://linkedin.com/in/krish-maheshwari",
      followers: "2.5K",
      description: "Professional network and updates"
    },
    {
      icon: Twitter,
      label: "Twitter",
      username: "@krishdev",
      link: "https://twitter.com/krishdev",
      followers: "892",
      description: "Tech thoughts and daily updates"
    }
  ];

  const availability = {
    status: "Available for new opportunities",
    responseTime: "Usually responds within 24 hours",
    preferredContact: "Email for detailed discussions, LinkedIn for networking"
  };

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
                <span className="gradient-text">Let's Connect</span>
              </h1>
              <SparkleIcon className="w-6 h-6 ml-2" delay={0.5} />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate on your next project 
              or discuss exciting opportunities in software development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card border-border">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="John Doe" 
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject *
                    </label>
                    <Input 
                      placeholder="Project Collaboration Opportunity" 
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project, timeline, and how I can help..."
                      rows={6}
                      className="bg-background border-border resize-none"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex-1 gap-2 bg-primary hover:bg-primary/90">
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Calendar className="w-5 h-5" />
                      Schedule Call
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Availability Status */}
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <Badge variant="secondary" className="text-green-600 bg-green-500/10">
                    {availability.status}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{availability.responseTime}</p>
                  <p>{availability.preferredContact}</p>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="group">
                      <a 
                        href={contact.link}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-smooth"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                          <contact.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground">{contact.label}</div>
                          <div className="text-primary group-hover:underline">{contact.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {contact.description}
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Follow Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="group">
                      <a 
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-smooth"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                            <social.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{social.label}</div>
                            <div className="text-sm text-muted-foreground">{social.username}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {social.followers}
                          </Badge>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Resume Download */}
              <Card className="p-6 bg-gradient-primary text-primary-foreground border-0">
                <h3 className="text-xl font-bold mb-3">Download Resume</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                <Button variant="secondary" className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  What's your typical project timeline?
                </h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity. Simple websites: 2-4 weeks, 
                  full-stack applications: 6-12 weeks. I always provide detailed estimates 
                  after understanding requirements.
                </p>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Do you work with international clients?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! I work with clients globally and am comfortable with 
                  different time zones. I ensure clear communication and regular updates 
                  throughout the project.
                </p>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  What technologies do you specialize in?
                </h3>
                <p className="text-muted-foreground">
                  I specialize in the MERN stack (MongoDB, Express, React, Node.js), 
                  TypeScript, Next.js, and cloud technologies like AWS. I'm always 
                  learning new technologies based on project needs.
                </p>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Do you provide ongoing support?
                </h3>
                <p className="text-muted-foreground">
                  Yes! I offer maintenance packages for ongoing support, updates, 
                  and feature additions. I believe in building long-term relationships 
                  with my clients.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;