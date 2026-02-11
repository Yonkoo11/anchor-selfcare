'use client'

import { ReactNode, useEffect, useState, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'

interface TemplateProps {
  children: ReactNode
}

export default function Template({ children }: TemplateProps) {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const lastScrollY = useRef(0)
  const lastTime = useRef(0)

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

  // Global scroll reveal observer - toggles .revealed for stagger classes
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

  // Scroll-progress + velocity blur: single rAF loop
  const updateScrollEffects = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const now = performance.now()
    const dt = now - lastTime.current
    const dy = Math.abs(window.scrollY - lastScrollY.current)

    // Velocity blur: max 2px on fast scroll
    if (dt > 0) {
      const velocity = dy / dt // px/ms
      const blur = Math.min(2, velocity * 3)
      container.style.setProperty('--scroll-blur', `${blur}px`)
    }

    lastScrollY.current = window.scrollY
    lastTime.current = now
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateScrollEffects)
    }

    lastTime.current = performance.now()
    lastScrollY.current = window.scrollY

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [updateScrollEffects, pathname])

  return (
    <div
      ref={containerRef}
      className="page-transition velocity-blur"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(24px)',
        filter: isVisible
          ? 'blur(var(--scroll-blur, 0px))'
          : 'blur(2px)',
        transition: 'opacity 600ms cubic-bezier(0.22, 1, 0.36, 1), transform 600ms cubic-bezier(0.22, 1, 0.36, 1), filter 600ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  )
}
