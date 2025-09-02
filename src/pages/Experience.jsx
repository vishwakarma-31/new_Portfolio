import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { Award, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'HackerRank',
      period: '2025',
      description: 'Certified by HackerRank for demonstrating strong problem-solving skills, algorithmic thinking, and proficiency in software development principles.',
      icon: Award,
      type: 'Certification'
    },
    {
      title: 'Backend Developer',
      company: 'IIT Kanpur',
      period: '2024',
      description: 'Completed an intensive program focused on server-side development, APIs, and database integration. Gained hands-on experience with backend frameworks, RESTful architecture, and building scalable, secure web applications.',
      icon: Award,
      type: 'Certification'
    },
    {
      title: 'Node.js',
      company: 'Infosys SpringBoard',
      period: '2025',
      description: 'Completed a comprehensive course covering core Node.js concepts, asynchronous programming, event-driven architecture, and building RESTful APIs.',
      icon: Award,
      type: 'Certification'
    }
  ]

  return (
    <div className={`min-h-screen relative overflow-hidden pt-24 pb-16 ${isDark ? 'bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90' : 'bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1]'}`}>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 page-element">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6 animate-on-scroll">
            Milestones Unlocked
          </h1>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} animate-on-scroll stagger-1`}>
            "Certified. Experienced. Focused !!"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-6 md:gap-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`h-full animate-on-scroll stagger-${(index % 5) + 2} transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                isDark ? 'bg-[#090F1C]/80 border-gray-700 hover:shadow-blue-500/30' : 'bg-white/90 border-gray-200 hover:shadow-blue-500/20'
              } shadow-zinc-950/5 rounded-xl p-6 relative overflow-hidden border`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className={`size-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} animate-pulse`}>
                    <exp.icon />
                  </div>
                  <h3 className={`text-xl font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {exp.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  <p className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {exp.company}
                  </p>
                  <div className={`flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Calendar className="size-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.description}
                </p>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience