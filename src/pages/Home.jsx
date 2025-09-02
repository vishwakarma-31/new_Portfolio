import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useGSAPAnimations, MagneticButton } from '../components/GSAPAnimations'
import SparklesEffect from '../components/SparklesEffect'
import FallingStarsEffect from '../components/FallingStarsEffect'
import AdvancedParticles from '../components/AdvancedParticles'
import { Github, ExternalLink, Code, Palette, Database, Zap, Sparkles, Star } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const containerRef = useRef(null)
  const gsapRef = useGSAPAnimations()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  const springY = useSpring(y, { stiffness: 300, damping: 30 })
  const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 })

  useEffect(() => {
    // Only run animations if we're on the home page to prevent conflicts during page transitions
    if (window.location.pathname !== '/') return

    const ctx = gsap.context(() => {
      // Simple floating icons animation - only for home page
      gsap.to('.floating-icon', {
        y: 'random(-20, 20)',
        x: 'random(-15, 15)',
        rotation: 'random(-5, 5)',
        duration: 'random(3, 6)',
        ease: 'none',
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 2,
          from: 'random'
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const floatingIcons = [
    { Icon: Code, delay: 0, position: 'top-20 left-10', color: 'text-blue-400' },
    { Icon: Palette, delay: 1, position: 'top-32 right-20', color: 'text-purple-400' },
    { Icon: Database, delay: 2, position: 'bottom-32 left-20', color: 'text-green-400' },
    { Icon: Zap, delay: 3, position: 'bottom-20 right-10', color: 'text-yellow-400' },
  ]

  return (
    <div ref={containerRef} className={`min-h-screen pt-16 pb-16 overflow-hidden ${isDark ? 'bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-slate-100' : 'bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1] text-gray-900'}`}>
      {/* Advanced Background Effects */}
      <AdvancedParticles />
      <SparklesEffect />
      <FallingStarsEffect />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Additional advanced background elements */}
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-400/15 to-blue-600/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-56 h-56 bg-gradient-to-br from-emerald-400/25 to-cyan-500/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-20 w-16 h-16 border-2 border-cyan-400/30 rounded-lg"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 left-16 w-12 h-12 border-2 border-purple-400/30 rounded-full"
        />
        <motion.div
          animate={{
            rotate: 180,
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-pink-400/20 rounded-full"
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position, color }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`floating-icon absolute ${position} hidden lg:block`}
        >
          <Icon className={`w-8 h-8 ${color} animate-pulse`} />
        </motion.div>
      ))}

      <motion.div
        style={{ y: springY, opacity: springOpacity, scale: springScale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center">
          <div className="mb-8 page-element animate-on-scroll">
            <span className="hero-glow inline-block px-6 py-3 glass rounded-full text-sm font-medium text-cyan-400 mb-6 animate-glow">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent page-element animate-on-scroll stagger-1">
            <span className="hero-title-word">Hi,</span>{' '}
            <span className="hero-title-word">I'm</span>{' '}
            <span className="hero-title-word">Aryan</span>
          </h1>

          <p className={`hero-description text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-2xl mx-auto page-element animate-on-scroll stagger-2`}>
            A passionate Full Stack Developer creating amazing digital experiences with modern technologies
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12 page-element animate-on-scroll stagger-3">
            <MagneticButton>
              <Link
                to="/projects"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-block"
              >
                View My Work
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/contact"
                className={`border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block ${
                  isDark
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                Get In Touch
              </Link>
            </MagneticButton>
          </div>

          <div className="flex justify-center space-x-6 page-element animate-on-scroll stagger-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors p-3 rounded-full hover:bg-white/10`}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors p-3 rounded-full hover:bg-white/10`}
            >
              <ExternalLink size={24} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home