'use client'

import { ReactNode } from 'react'
import { useScrollProgress } from '@/hooks/useScrollProgress'

interface ScrollProgressProps {
  children: ReactNode
  className?: string
  /** Viewport fraction where animation starts (default: 0 = bottom edge) */
  start?: number
  /** Viewport fraction where animation completes (default: 0.7) */
  end?: number
}

/**
 * Sets --sp (scroll progress, 0-1) CSS custom property on a wrapper div.
 * Child elements can use var(--sp) to drive any CSS property proportionally.
 */
export function ScrollProgress({ children, className = '', start, end }: ScrollProgressProps) {
  const { ref, progress } = useScrollProgress({ start, end })

  return (
    <div
      ref={ref}
      className={className}
      style={{ '--sp': progress } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
