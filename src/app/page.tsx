'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Palette, Database, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import AdvancedParticles from '@/components/AdvancedParticles';
import FallingStarsEffect from '@/components/FallingStarsEffect';
import SparklesEffect from '@/components/SparklesEffect';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const floatingIcons = [
    { Icon: Code, delay: 0, position: 'top-20 left-10' },
    { Icon: Palette, delay: 0.5, position: 'top-32 right-20' },
    { Icon: Database, delay: 1, position: 'bottom-32 left-20' },
    { Icon: Smartphone, delay: 1.5, position: 'bottom-20 right-10' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Enhanced background effects for home page */}
      <AdvancedParticles
        particleCount={50}
        colors={['bg-cyan-400/40', 'bg-purple-400/30', 'bg-pink-400/35', 'bg-blue-400/30', 'bg-emerald-400/35']}
        sizeRange={{ min: 2, max: 6 }}
        className="fixed inset-0 pointer-events-none z-0"
      />

      <FallingStarsEffect
        interval={800}
        color="from-cyan-400/80"
        height={8}
      />

      <SparklesEffect
        interval={300}
        color="bg-cyan-400/60"
        size="w-1 h-1"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 z-10">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-blue-900/10 to-indigo-900/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-float"></div>
        </div>

        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: delay + 2, duration: 0.8 }}
            className={`absolute ${position} hidden lg:block`}
          >
            <Icon className="w-8 h-8 text-teal-400 animate-float" style={{ animationDelay: `${delay}s` }} />
          </motion.div>
        ))}
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-center z-20 max-w-5xl mx-auto px-6 relative"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-block px-6 py-3 glass-card rounded-full text-sm font-medium text-teal-400 mb-6 animate-glow"
            >
              👋 Welcome to my portfolio
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-gradient">Full Stack</span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="inline-block text-white"
            >
              Developer
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting beautiful, functional, and scalable web applications with modern technologies
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-3 text-lg px-8 py-4"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-3 text-lg px-8 py-4"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-12 max-w-3xl mx-auto"
          >
            {[
              { number: '50+', label: 'Projects' },
              { number: '5+', label: 'Years' },
              { number: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="text-center glass-card p-6 rounded-2xl hover-lift"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-teal-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      <ScrollToTop />
    </div>
  );
}