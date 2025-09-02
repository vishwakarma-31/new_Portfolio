import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGSAPAnimations = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    // Only run animations if we're on the home page to prevent conflicts during page transitions
    if (window.location.pathname !== '/') return

    const ctx = gsap.context(() => {
      // Magnetic button effect - only for home page
      const buttons = gsap.utils.toArray('.magnetic-btn')
      buttons.forEach(btn => {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e
          const { left, top, width, height } = btn.getBoundingClientRect()
          const centerX = left + width / 2
          const centerY = top + height / 2
          const deltaX = (clientX - centerX) / width
          const deltaY = (clientY - centerY) / height

          gsap.to(btn, {
            x: deltaX * 10,
            y: deltaY * 10,
            duration: 0.3,
            ease: 'power2.out'
          })
        }

        const handleMouseLeave = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
          })
        }

        btn.addEventListener('mousemove', handleMouseMove)
        btn.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          btn.removeEventListener('mousemove', handleMouseMove)
          btn.removeEventListener('mouseleave', handleMouseLeave)
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

export const MagneticButton = ({ children, className, ...props }) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      className={`magnetic-btn ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}