'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface ScrollProgressOptions {
  /** Viewport fraction where element starts animating (0 = bottom edge enters, 1 = top edge exits) */
  start?: number
  /** Viewport fraction where animation completes */
  end?: number
}

/**
 * Returns 0-1 progress as an element moves through the viewport.
 * 0 = element just entered from below, 1 = element fully scrolled past.
 * Uses a single rAF-throttled passive scroll listener.
 */
export function useScrollProgress(options: ScrollProgressOptions = {}) {
  const { start = 0, end = 0.7 } = options
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number>(0)

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight

    // Element's position relative to viewport as a 0-1 range
    // 0 = bottom of element just hit bottom of viewport
    // 1 = top of element just hit top of viewport
    const rawProgress = (vh - rect.top) / (vh + rect.height)

    // Map raw progress to the start-end range
    const mapped = (rawProgress - start) / (end - start)
    const clamped = Math.max(0, Math.min(1, mapped))

    setProgress(clamped)
  }, [start, end])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setProgress(1)
      return
    }

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    // Initial calculation
    update()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [update])

  return { ref, progress }
}
