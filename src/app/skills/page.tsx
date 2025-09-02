'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Database, 
  Smartphone, 
  Server, 
  Cloud, 
  GitBranch, 
  Shield,
  Zap,
  Globe,
  Layers,
  Cpu
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 80 },
        { name: 'Microservices', level: 75 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'MySQL', level: 82 },
        { name: 'Firebase', level: 78 },
        { name: 'Prisma', level: 85 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 82 },
        { name: 'Vercel', level: 90 },
        { name: 'Netlify', level: 88 }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'User Research', level: 75 },
        { name: 'Prototyping', level: 82 },
        { name: 'Design Systems', level: 78 },
        { name: 'Accessibility', level: 85 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS Development', level: 70 },
        { name: 'Android Development', level: 72 },
        { name: 'Expo', level: 85 },
        { name: 'Mobile UI/UX', level: 80 }
      ]
    }
  ];

  const tools = [
    { name: 'Git', icon: GitBranch, color: 'text-red-400' },
    { name: 'VS Code', icon: Code, color: 'text-blue-400' },
    { name: 'Figma', icon: Palette, color: 'text-purple-400' },
    { name: 'Docker', icon: Layers, color: 'text-blue-500' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
    { name: 'Vercel', icon: Zap, color: 'text-black' },
    { name: 'Postman', icon: Globe, color: 'text-orange-500' },
    { name: 'Jest', icon: Shield, color: 'text-green-400' },
  ];

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
                🛠️ Skills & Technologies
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gradient">Technical</span>
              <br />
              <span className="text-foreground">Expertise</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              A comprehensive toolkit for building modern, scalable, and performant web applications. 
              I stay updated with the latest technologies and best practices.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl hover-lift"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${category.bgColor} rounded-lg`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color.replace('text-', 'from-')} to-primary`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Tools & Technologies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The tools and technologies I use daily to create amazing digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass p-6 rounded-xl text-center hover-lift group cursor-pointer"
              >
                <tool.icon className={`w-12 h-12 mx-auto mb-3 ${tool.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Experience Timeline</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My journey in web development and the technologies I've mastered over the years
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                year: '2024',
                title: 'Senior Full Stack Developer',
                company: 'Tech Solutions Inc.',
                description: 'Leading development of enterprise applications using React, Node.js, and cloud technologies.',
                technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript']
              },
              {
                year: '2022',
                title: 'Full Stack Developer',
                company: 'Digital Agency',
                description: 'Built scalable web applications and mobile apps for various clients across different industries.',
                technologies: ['Next.js', 'MongoDB', 'React Native', 'GraphQL', 'Vercel']
              },
              {
                year: '2020',
                title: 'Frontend Developer',
                company: 'Startup Company',
                description: 'Focused on creating beautiful user interfaces and improving user experience across web applications.',
                technologies: ['React', 'JavaScript', 'CSS3', 'Figma', 'Git']
              },
              {
                year: '2019',
                title: 'Junior Developer',
                company: 'Web Development Agency',
                description: 'Started my journey in web development, learning the fundamentals and best practices.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
              }
            ].map((experience, index) => (
              <motion.div
                key={experience.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl hover-lift"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{experience.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                    <p className="text-primary font-medium mb-2">{experience.company}</p>
                    <p className="text-gray-300 mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
