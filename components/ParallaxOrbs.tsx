'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

export function ParallaxOrbs() {
  const [scrollY, setScrollY] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Mouse parallax state (lerped for smooth "underwater" feel)
  const mouseTarget = useRef({ x: 0, y: 0 })
  const mouseCurrent = useRef({ x: 0, y: 0 })
  const lerpRaf = useRef<number>(0)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
  const isTouchDevice = useRef(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    if (mediaQuery.matches) return

    // Detect touch devices - skip mouse parallax
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse tracking: normalized -1..1 from viewport center
  useEffect(() => {
    if (prefersReducedMotion || isTouchDevice.current) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseTarget.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [prefersReducedMotion])

  // Lerp loop: smooth interpolation at 0.08 factor ("underwater" drift)
  const lerpLoop = useCallback(() => {
    const factor = 0.08
    mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * factor
    mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * factor

    setMouseOffset({
      x: mouseCurrent.current.x,
      y: mouseCurrent.current.y,
    })

    lerpRaf.current = requestAnimationFrame(lerpLoop)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || isTouchDevice.current) return

    lerpRaf.current = requestAnimationFrame(lerpLoop)
    return () => cancelAnimationFrame(lerpRaf.current)
  }, [prefersReducedMotion, lerpLoop])

  const getParallaxStyle = (
    scrollSpeed: number,
    mouseDepth: number,
    baseTop: string,
    baseLeft?: string,
    baseRight?: string
  ) => {
    if (prefersReducedMotion) {
      return { top: baseTop, left: baseLeft, right: baseRight }
    }

    const scrollOffset = scrollY * scrollSpeed
    const mx = mouseOffset.x * mouseDepth
    const my = mouseOffset.y * mouseDepth

    return {
      top: baseTop,
      left: baseLeft,
      right: baseRight,
      transform: `translate(${mx}px, ${scrollOffset + my}px)`,
      willChange: 'transform' as const,
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Large sage orb - furthest back, minimal mouse response */}
      <div
        className="floating-orb-sage w-[500px] h-[500px] absolute animate-float-slow"
        style={{ ...getParallaxStyle(-0.05, 5, '5%', '0%'), filter: 'blur(100px)' }}
      />
      {/* Terracotta orb - mid layer */}
      <div
        className="floating-orb-terracotta w-96 h-96 absolute animate-float animation-delay-2000"
        style={{ ...getParallaxStyle(-0.1, 10, '55%', undefined, '5%'), filter: 'blur(80px)' }}
      />
      {/* Moss orb - green depth */}
      <div
        className="floating-orb-moss w-[400px] h-[400px] absolute animate-float-slow animation-delay-3000"
        style={{ ...getParallaxStyle(-0.07, 8, '35%', '60%'), filter: 'blur(90px)' }}
      />
      {/* Smaller sage orb - closer to viewer, stronger mouse response */}
      <div
        className="floating-orb-sage w-72 h-72 absolute animate-float-slow animation-delay-4000"
        style={{ ...getParallaxStyle(-0.15, 14, '75%', '15%'), filter: 'blur(80px)' }}
      />
      {/* Cream-tinted orb - soft warmth */}
      <div
        className="floating-orb-cream w-[350px] h-[350px] absolute animate-float animation-delay-1000"
        style={{ ...getParallaxStyle(-0.06, 6, '15%', undefined, '20%'), filter: 'blur(100px)' }}
      />
      {/* Small accent orb - closest, strongest parallax */}
      <div
        className="floating-orb-terracotta w-48 h-48 absolute opacity-30 animate-float animation-delay-3000"
        style={{ ...getParallaxStyle(-0.12, 12, '90%', undefined, '30%'), filter: 'blur(60px)' }}
      />
    </div>
  )
}
