import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import TransitionManager from './components/TransitionManager'
import ThreeBackground from './components/ThreeBackground'
import DynamicCursor from './components/DynamicCursor'
import AdvancedParticles from './components/AdvancedParticles'
import FallingStarsEffect from './components/FallingStarsEffect'
import SparklesEffect from './components/SparklesEffect'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Education from './pages/Education'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="dark-theme relative min-h-screen overflow-hidden">
          {/* Background Effects - Layered for depth */}
          <ThreeBackground />

          {/* Subtle particle effects */}
          <AdvancedParticles
            particleCount={30}
            colors={['bg-cyan-400/30', 'bg-purple-400/20', 'bg-pink-400/25', 'bg-blue-400/20', 'bg-emerald-400/25']}
            sizeRange={{ min: 1, max: 4 }}
            className="fixed inset-0 pointer-events-none z-0"
          />

          {/* Falling stars effect */}
          <FallingStarsEffect
            interval={1200}
            color="from-cyan-400/60"
            height={6}
          />

          {/* Sparkles effect */}
          <SparklesEffect
            interval={400}
            color="bg-cyan-400/40"
            size="w-0.5 h-0.5"
          />

          {/* Interactive cursor */}
          <DynamicCursor
            cursorSize={12}
            followerSize={32}
            scaleFactor={2.5}
          />

          {/* Navigation */}
          <Navbar />

          {/* Page transitions and content */}
          <TransitionManager>
            <Routes>
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/education" element={<Education />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </TransitionManager>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App