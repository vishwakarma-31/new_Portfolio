'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Eye, Calendar, Users } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with advanced features including real-time inventory management, payment processing, and admin dashboard.',
      longDescription: 'Built a comprehensive e-commerce platform from scratch using modern technologies. The platform includes user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and a complete admin dashboard for managing products, orders, and customers.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      status: 'Completed',
      year: '2024',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js', 'JWT'],
      features: ['User Authentication', 'Payment Processing', 'Admin Dashboard', 'Real-time Updates', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      client: 'Tech Startup',
      duration: '3 months',
      team: 'Solo Project'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      longDescription: 'Developed a modern task management application that allows teams to collaborate effectively. Features include real-time updates, drag-and-drop task organization, team member assignment, deadline tracking, and comprehensive project analytics.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      status: 'Completed',
      year: '2024',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
      features: ['Real-time Collaboration', 'Drag & Drop', 'Team Management', 'Analytics Dashboard', 'Mobile Responsive'],
      liveUrl: '#',
      githubUrl: '#',
      client: 'Corporate Client',
      duration: '2 months',
      team: '3 Developers'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      longDescription: 'Created an intuitive weather dashboard that provides comprehensive weather information. The application includes current weather conditions, 7-day forecasts, interactive weather maps, location-based services, and detailed weather analytics with beautiful data visualizations.',
      image: '/api/placeholder/600/400',
      category: 'Frontend',
      status: 'Completed',
      year: '2023',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Leaflet', 'SCSS', 'PWA'],
      features: ['Interactive Maps', 'Weather Charts', 'Location Services', 'PWA Support', 'Offline Mode'],
      liveUrl: '#',
      githubUrl: '#',
      client: 'Personal Project',
      duration: '1 month',
      team: 'Solo Project'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'A comprehensive social media analytics platform for tracking engagement, growth metrics, and content performance.',
      longDescription: 'Built a powerful social media analytics platform that helps businesses track their social media performance. The platform integrates with multiple social media APIs, provides detailed analytics, generates reports, and offers insights for improving social media strategy.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      status: 'In Progress',
      year: '2024',
      technologies: ['React', 'Python', 'Django', 'Redis', 'PostgreSQL', 'Chart.js'],
      features: ['Multi-platform Integration', 'Real-time Analytics', 'Custom Reports', 'Data Export', 'Team Collaboration'],
      liveUrl: '#',
      githubUrl: '#',
      client: 'Marketing Agency',
      duration: '4 months',
      team: '5 Developers'
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction management, and financial insights.',
      longDescription: 'Developed a secure mobile banking application with advanced security features. The app includes biometric authentication, secure transaction processing, account management, financial insights, and real-time notifications. Built with security as the top priority.',
      image: '/api/placeholder/600/400',
      category: 'Mobile',
      status: 'Completed',
      year: '2023',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric Auth', 'Encryption'],
      features: ['Biometric Security', 'Transaction History', 'Account Management', 'Push Notifications', 'Offline Support'],
      liveUrl: '#',
      githubUrl: '#',
      client: 'Banking Client',
      duration: '6 months',
      team: '8 Developers'
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'A comprehensive LMS platform with course creation, student management, progress tracking, and interactive learning tools.',
      longDescription: 'Created a full-featured learning management system that enables educators to create and manage courses, track student progress, and provide interactive learning experiences. The platform includes video streaming, quizzes, assignments, and comprehensive analytics.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      status: 'Completed',
      year: '2023',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3', 'FFmpeg'],
      features: ['Course Creation', 'Video Streaming', 'Progress Tracking', 'Interactive Quizzes', 'Analytics Dashboard'],
      liveUrl: '#',
      githubUrl: '#',
      client: 'Educational Institution',
      duration: '5 months',
      team: '4 Developers'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Mobile', 'Backend'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-4">
                💼 Featured Projects
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gradient">My</span>
              <br />
              <span className="text-foreground">Portfolio</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              A showcase of my recent work and side projects. Each project represents a unique challenge 
              and demonstrates my skills in different areas of web development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'glass text-gray-300 hover:text-primary hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl overflow-hidden hover-lift group"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white">
                    <Code className="w-20 h-20 mx-auto mb-4" />
                    <p className="text-lg font-semibold">{project.title}</p>
                    <p className="text-sm opacity-80">{project.category}</p>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-sm rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Interested in Working Together?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing digital experiences
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Start a Project
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
