'use client'

import { useEffect, useState, useRef } from 'react'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  splitBy?: 'word' | 'character'
}

export function TextReveal({
  text,
  className = '',
  delay = 0,
  staggerDelay = 50,
  as: Component = 'span',
  splitBy = 'word',
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const parts = splitBy === 'word' ? text.split(' ') : text.split('')
  const separator = splitBy === 'word' ? '\u00A0' : '' // Non-breaking space for words

  return (
    <Component ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {parts.map((part, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(20px) rotateX(-20deg)',
            transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {part}
          {index < parts.length - 1 && separator}
        </span>
      ))}
    </Component>
  )
}

// Simpler variant for subtitles - fade in from bottom
export function TextFadeIn({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(15px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  )
}
