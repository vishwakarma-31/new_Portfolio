'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Database, Smartphone, Award, Users, Clock, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

export default function About() {
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

  const achievements = [
    { icon: Award, title: '5+ Years Experience', description: 'Building modern web applications' },
    { icon: Users, title: '50+ Happy Clients', description: 'Satisfied with my work' },
    { icon: Clock, title: '24/7 Support', description: 'Always available for help' },
    { icon: Target, title: '100% Success Rate', description: 'Projects delivered on time' },
  ];

  const skills = [
    { name: 'Frontend Development', icon: Code, color: 'text-blue-400', description: 'React, Next.js, TypeScript, Tailwind CSS' },
    { name: 'UI/UX Design', icon: Palette, color: 'text-purple-400', description: 'Figma, Adobe XD, User Research' },
    { name: 'Backend Development', icon: Database, color: 'text-green-400', description: 'Node.js, Python, PostgreSQL, MongoDB' },
    { name: 'Mobile Development', icon: Smartphone, color: 'text-pink-400', description: 'React Native, Flutter, iOS, Android' },
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
                👨‍💻 About Me
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gradient">Passionate</span>
              <br />
              <span className="text-foreground">Developer</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              I'm a full-stack developer with a passion for creating beautiful, functional, 
              and scalable web applications. With over 5 years of experience, I love turning 
              complex problems into simple, elegant solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">My Story</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    My journey into web development started during my computer science studies, 
                    where I discovered my passion for creating digital experiences that make a difference.
                  </p>
                  <p>
                    Over the years, I've had the privilege of working with amazing teams and clients, 
                    building everything from simple landing pages to complex enterprise applications.
                  </p>
                  <p>
                    I believe in continuous learning and staying up-to-date with the latest technologies 
                    to deliver the best possible solutions for my clients.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-xl text-center hover-lift"
                  >
                    <achievement.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code className="w-16 h-16" />
                  </div>
                  <p className="text-xl font-semibold">Let's Build Something Amazing</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">What I Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I specialize in creating end-to-end solutions that combine beautiful design with robust functionality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl hover-lift group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your ideas to life with cutting-edge technology
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
