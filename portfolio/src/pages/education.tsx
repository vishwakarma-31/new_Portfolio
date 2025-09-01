import Navigation from "../components/navigation";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import SparkleIcon from "../components/sparkleicon";
import { GraduationCap, MapPin, Calendar, BookOpen, Trophy, Users } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology (IIT)",
      location: "Delhi, India",
      duration: "2020 - 2024",
      grade: "CGPA: 8.7/10",
      status: "Graduated",
      description: "Specialized in Software Engineering and Web Technologies. Completed major projects in full-stack development, machine learning, and cloud computing.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems", 
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Machine Learning",
        "Web Technologies",
        "Cloud Computing"
      ],
      achievements: [
        "Dean's List - 6 semesters",
        "Best Project Award 2023",
        "Technical Society President"
      ]
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Delhi Public School",
      location: "Delhi, India", 
      duration: "2018 - 2020",
      grade: "95.2%",
      status: "Completed",
      description: "Focused on Mathematics, Physics, and Computer Science. Achieved top 5% ranking in the state board examinations.",
      coursework: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "Computer Science",
        "English"
      ],
      achievements: [
        "State Rank 127 in Board Exams",
        "School Topper in Computer Science",
        "Mathematics Olympiad Winner"
      ]
    }
  ];

  const courses = [
    {
      title: "Advanced React & Redux",
      provider: "Udemy",
      instructor: "Stephen Grider",
      duration: "40 hours",
      completed: "2023",
      certificate: true
    },
    {
      title: "Node.js - The Complete Guide",
      provider: "Udemy", 
      instructor: "Maximilian Schwarzmüller",
      duration: "35 hours",
      completed: "2023",
      certificate: true
    },
    {
      title: "AWS Solutions Architect",
      provider: "A Cloud Guru",
      instructor: "Ryan Kroonenburg",
      duration: "60 hours",
      completed: "2024",
      certificate: true
    },
    {
      title: "MongoDB Complete Developer Guide",
      provider: "MongoDB University",
      instructor: "MongoDB Team",
      duration: "25 hours", 
      completed: "2024",
      certificate: true
    }
  ];

  const skills = [
    "Full Stack Development",
    "MERN Stack",
    "Cloud Architecture", 
    "DevOps Practices",
    "Database Design",
    "API Development",
    "Agile Methodology",
    "Problem Solving"
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
                <span className="gradient-text">Education & Learning</span>
              </h1>
              <SparkleIcon className="w-6 h-6 ml-2" delay={0.5} />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic journey and continuous learning path in computer science 
              and software development.
            </p>
          </div>

          {/* Formal Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              <span className="gradient-text">Formal Education</span>
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-smooth">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                          <div className="flex flex-col gap-2 mb-3">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <BookOpen className="w-4 h-4" />
                              <span className="font-medium">{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.duration}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <Badge variant="secondary" className="w-fit">
                            {edu.grade}
                          </Badge>
                          <Badge variant="outline" className="w-fit border-primary text-primary">
                            {edu.status}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Courses</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <Badge key={courseIndex} variant="outline" className="text-xs">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Achievements</h4>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Trophy className="w-3 h-3 text-primary flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Online Courses */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              <span className="gradient-text">Professional Courses</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-smooth">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-3 h-3" />
                          <span>{course.provider}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3" />
                          <span>{course.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{course.duration} • {course.completed}</span>
                        </div>
                      </div>
                    </div>
                    {course.certificate && (
                      <Badge variant="secondary" className="ml-4">
                        Certified
                      </Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Developed */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">Skills Developed</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-lg border-primary text-primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Education Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Years of Study</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8.7</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Courses Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Hours of Learning</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;