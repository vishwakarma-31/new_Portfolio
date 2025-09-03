import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const DynamicCursor = ({
  cursorColor = 'bg-cyan-400',
  followerColor = 'border-cyan-400/50',
  cursorSize = 12,
  followerSize = 32,
  scaleFactor = 2.5
}) => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const glowRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    const glow = glowRef.current
    if (!cursor || !follower || !glow) return

    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0
    let glowX = 0
    let glowY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Main cursor follows mouse instantly
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.05,
        ease: "none"
      })

      // Glow follows with slight delay for 3D effect
      gsap.to(glow, {
        x: mouseX,
        y: mouseY,
        duration: 0.15,
        ease: "power2.out"
      })
    }

    const animateFollower = () => {
      // Smooth follower animation
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12

      gsap.set(follower, {
        x: followerX - followerSize / 2,
        y: followerY - followerSize / 2
      })

      requestAnimationFrame(animateFollower)
    }

    const handleMouseEnter = () => {
      // Enhanced scale and 3D transform on hover
      gsap.to(cursor, {
        scale: scaleFactor,
        rotateZ: 45,
        duration: 0.3,
        ease: "back.out(1.7)"
      })

      gsap.to(follower, {
        scale: scaleFactor * 0.8,
        duration: 0.4,
        ease: "back.out(1.7)"
      })

      gsap.to(glow, {
        scale: scaleFactor * 1.5,
        opacity: 0.8,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      // Return to normal state
      gsap.to([cursor, follower], {
        scale: 1,
        rotateZ: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      })

      gsap.to(glow, {
        scale: 1,
        opacity: 0.4,
        duration: 0.5,
        ease: "power2.out"
      })
    }

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"], [data-cursor-hover]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    document.addEventListener('mousemove', handleMouseMove)
    animateFollower()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorSize, followerSize, scaleFactor])

  return (
    <>
      {/* Glow effect - largest and most subtle */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 bg-cyan-400/20 rounded-full pointer-events-none z-30 blur-xl"
        style={{
          width: `${cursorSize * 4}px`,
          height: `${cursorSize * 4}px`,
          transform: 'translate(-50%, -50%)',
          opacity: 0.4
        }}
      />

      {/* Main follower - medium ring */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 border-2 ${followerColor} rounded-full pointer-events-none z-40 backdrop-blur-sm`}
        style={{
          width: `${followerSize}px`,
          height: `${followerSize}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)'
        }}
      />

      {/* Main cursor - small and precise */}
      <div
        ref={cursorRef}
        className={`${cursorColor} rounded-full pointer-events-none z-50 mix-blend-difference shadow-lg`}
        style={{
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 15px rgba(34, 211, 238, 0.8), 0 0 30px rgba(34, 211, 238, 0.4), 0 0 45px rgba(34, 211, 238, 0.2)',
          position: 'fixed',
          top: 0,
          left: 0
        }}
      />
    </>
  )
}

export default DynamicCursor