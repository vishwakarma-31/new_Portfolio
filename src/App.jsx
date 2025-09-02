import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import TransitionManager from './components/TransitionManager'
import ThreeBackground from './components/ThreeBackground'
import DynamicCursor from './components/DynamicCursor'
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
          <ThreeBackground />
          <DynamicCursor />
          <Navbar />
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