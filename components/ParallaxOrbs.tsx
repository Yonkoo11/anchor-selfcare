'use client'

import { useEffect, useState } from 'react'

export function ParallaxOrbs() {
  const [scrollY, setScrollY] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    if (mediaQuery.matches) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate parallax offset (different speeds for depth effect)
  const getParallaxStyle = (speed: number, baseTop: string, baseLeft?: string, baseRight?: string) => {
    if (prefersReducedMotion) {
      return {
        top: baseTop,
        left: baseLeft,
        right: baseRight,
      }
    }

    const offset = scrollY * speed
    return {
      top: baseTop,
      left: baseLeft,
      right: baseRight,
      transform: `translateY(${offset}px)`,
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Slow-moving large orb - furthest back */}
      <div
        className="floating-orb-sage w-96 h-96 absolute animate-float-slow"
        style={getParallaxStyle(-0.05, '10%', '5%')}
      />

      {/* Medium speed orb */}
      <div
        className="floating-orb-terracotta w-72 h-72 absolute animate-float animation-delay-2000"
        style={getParallaxStyle(-0.1, '60%', undefined, '10%')}
      />

      {/* Faster-moving smaller orb - closest to viewer */}
      <div
        className="floating-orb-sage w-64 h-64 absolute animate-float-slow animation-delay-4000"
        style={getParallaxStyle(-0.15, '80%', '15%')}
      />

      {/* Additional subtle orb for depth */}
      <div
        className="floating-orb-terracotta w-48 h-48 absolute opacity-30 animate-float animation-delay-3000"
        style={getParallaxStyle(-0.08, '30%', undefined, '25%')}
      />
    </div>
  )
}
