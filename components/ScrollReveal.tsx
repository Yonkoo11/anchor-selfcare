'use client'

import { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  distance?: number
  stagger?: boolean
  staggerDelay?: number
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 600,
  distance = 30,
  stagger = false,
  staggerDelay = 80,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  const getTransform = () => {
    if (direction === 'none') return 'none'
    const transforms = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
    }
    return transforms[direction]
  }

  const baseStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getTransform(),
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  }

  if (stagger) {
    return (
      <div
        ref={ref}
        className={`reveal-stagger ${isVisible ? 'visible' : ''} ${className}`}
        style={{ '--stagger-delay': `${staggerDelay}ms` } as React.CSSProperties}
      >
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={className} style={baseStyles}>
      {children}
    </div>
  )
}

// Variant for sections that should reveal from left
export function ScrollRevealSection({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <ScrollReveal direction="up" delay={delay} distance={40} duration={700} className={className}>
      {children}
    </ScrollReveal>
  )
}
