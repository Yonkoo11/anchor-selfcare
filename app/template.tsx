'use client'

import { ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface TemplateProps {
  children: ReactNode
}

export default function Template({ children }: TemplateProps) {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  // Page entrance transition
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [pathname])

  // Global scroll reveal observer - runs on every page
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.reveal-on-scroll:not(.revealed)')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
      )
      sections.forEach(s => observer.observe(s))
      return () => observer.disconnect()
    }, 150)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      className="page-transition"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(24px)',
        filter: isVisible ? 'blur(0px)' : 'blur(2px)',
        transition: 'opacity 600ms cubic-bezier(0.22, 1, 0.36, 1), transform 600ms cubic-bezier(0.22, 1, 0.36, 1), filter 600ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  )
}
