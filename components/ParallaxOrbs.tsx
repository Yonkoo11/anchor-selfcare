'use client'

import { useEffect, useState } from 'react'

export function ParallaxOrbs() {
  const [scrollY, setScrollY] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    if (mediaQuery.matches) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getParallaxStyle = (speed: number, baseTop: string, baseLeft?: string, baseRight?: string) => {
    if (prefersReducedMotion) {
      return { top: baseTop, left: baseLeft, right: baseRight }
    }
    const offset = scrollY * speed
    return { top: baseTop, left: baseLeft, right: baseRight, transform: `translateY(${offset}px)` }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Large sage orb - furthest back */}
      <div
        className="floating-orb-sage w-[500px] h-[500px] absolute animate-float-slow"
        style={{ ...getParallaxStyle(-0.05, '5%', '0%'), filter: 'blur(100px)' }}
      />
      {/* Terracotta orb - mid layer */}
      <div
        className="floating-orb-terracotta w-96 h-96 absolute animate-float animation-delay-2000"
        style={{ ...getParallaxStyle(-0.1, '55%', undefined, '5%'), filter: 'blur(80px)' }}
      />
      {/* Moss orb - green depth */}
      <div
        className="floating-orb-moss w-[400px] h-[400px] absolute animate-float-slow animation-delay-3000"
        style={{ ...getParallaxStyle(-0.07, '35%', '60%'), filter: 'blur(90px)' }}
      />
      {/* Smaller sage orb - closer to viewer */}
      <div
        className="floating-orb-sage w-72 h-72 absolute animate-float-slow animation-delay-4000"
        style={{ ...getParallaxStyle(-0.15, '75%', '15%'), filter: 'blur(80px)' }}
      />
      {/* Cream-tinted orb - soft warmth */}
      <div
        className="floating-orb-cream w-[350px] h-[350px] absolute animate-float animation-delay-1000"
        style={{ ...getParallaxStyle(-0.06, '15%', undefined, '20%'), filter: 'blur(100px)' }}
      />
      {/* Small accent orb */}
      <div
        className="floating-orb-terracotta w-48 h-48 absolute opacity-30 animate-float animation-delay-3000"
        style={{ ...getParallaxStyle(-0.12, '90%', undefined, '30%'), filter: 'blur(60px)' }}
      />
    </div>
  )
}
