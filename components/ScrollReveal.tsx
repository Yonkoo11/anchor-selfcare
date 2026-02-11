'use client'

import { ReactNode, Children } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type StaggerPattern = 'sequential' | 'center-out' | 'cascade'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  distance?: number
  stagger?: boolean
  staggerDelay?: number
  staggerPattern?: StaggerPattern
}

function getCenterOutIndex(i: number, total: number): number {
  const center = (total - 1) / 2
  return Math.abs(i - center)
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
  staggerPattern = 'sequential',
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
    // Determine CSS class based on pattern
    const patternClass = staggerPattern === 'center-out'
      ? 'stagger-center-out'
      : staggerPattern === 'cascade'
        ? 'stagger-natural'
        : 'stagger-natural'

    // For center-out, compute --stagger-index per child
    if (staggerPattern === 'center-out') {
      const childArray = Children.toArray(children)
      const total = childArray.length
      return (
        <div
          ref={ref}
          className={`${patternClass} ${isVisible ? 'revealed' : ''} ${className}`}
        >
          {childArray.map((child, i) => (
            <div
              key={i}
              style={{ '--stagger-index': getCenterOutIndex(i, total) } as React.CSSProperties}
            >
              {child}
            </div>
          ))}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={`${patternClass} ${isVisible ? 'revealed' : ''} ${className}`}
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
